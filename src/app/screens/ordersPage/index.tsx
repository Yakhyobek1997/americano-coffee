import { useState, SyntheticEvent, useEffect } from "react";
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPausedOrders, setProcessOrders, setFinishedOrders } from "./slice";
import { Order, OrderInquiry } from "../../../lib/types/order";
import { OrderStatus } from "../../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";
import { useGlobals } from "../../../hooks/useGlobals";
import { useHistory } from "react-router-dom";
import "../../../css/order.css";
import { serverApi } from "../../../lib/config";
import { MemberType } from "../../../lib/enums/member.enum";

/** REDUX SLICE & SELECTOR */

/* 1 */
const actionDispatch = (dispatch: Dispatch) => ({
// Bu yerda actionDispatch degan object kelib u argument sifatida.
// reduxdan olingan function qabul qilmoqda.
// va dispatch orqali 3 ta action function (yoki method) ni qaytaradi:
// Har birining argumenti  bu data Order[] — massiv obyektlar (orderlar ro‘yxati).
// pausedOrders nomli state propertyni data bilan yangilaydi (ya’ni data ni yozib qo‘yadi).
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});


/* 2 */
/* Bu OrdersPage funksional componenti
foydalanuvchining o‘z buyurtmalarini 
(PAUSE, PROCESS, FINISH) holatiga qarab 
Redux orqali saqlab, UI'da ko‘rsatishga xizmat qiladi.

*/
export default function OrdersPage() {
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());
/* actionDispatch funksiyasi useDispatch() dan
olingan dispatchni qabul qilib, bizga 3 ta action function
ni tayyor holatda qaytaryapti. */ 

  const { orderBuilder, authMember } = useGlobals();
// useGlobals() hook'dan global ikkita property olinmoqda
  const history = useHistory();
// history React Router’dan. Navigatsiya uchun ishlatiladi
  const [value, setValue] = useState("1");
// bu yerda useState hook orqali orderInquiry degan object tipidagi holat (state) yaratdik.
  const [orderInquiry, setOrderInquiry] = useState<OrderInquiry>({
    page: 1, // boshlangich qiymat
    limit: 5, // limit 5 ta
    orderStatus: OrderStatus.PAUSE, // holati pausa
  });

  /*orderBuilder bu — foydalanuvchi mahsulot tanlaganda 
  yoki savatchani to‘ldirganda, o‘sha vaqtincha yig‘ilgan 
  barcha ma’lumotlarni saqlab turadigan object. 
  Uni "buyurtma qurilishi" deb tushunsak bo‘ladi. 
  Serverga yuborishdan oldingi bosqich*/

  /* 3 */

  /* Bu useEffect — React komponent yuklanganda
  bir marta ishga tushadigan kod blokidir.
  Uning ichida biz serverdan PAUSE holatidag
  buyurtmalarni olib, Redux Store ga yuklayapmiz.*/ 

  useEffect(() => { // useEffect ishga tushganda
    const order = new OrderService();//  OrderService dan
    // order degan object yaratilgan

    order // order object orqali getMyOrders degan method chaqirilyapti.
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PAUSE })
   // Methodga argument sifatida orderInquiry objectni all property’lari uzatilib
   // orderStatus majburan PAUSE qilib berilyapti
      .then((data) => setPausedOrders(data))
   // succes ishlasa kelgan datani setPausedOrders(data) orqali Redux’ga yuboradi
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PROCESS })
      .then((data) => setProcessOrders(data))
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.FINISH })
      .then((data) => setFinishedOrders(data))
      .catch((err) => console.log(err));
  }, [orderInquiry, orderBuilder]); 
  // state: orderInquiry o'zgarganda avto yangilayd



  /** HANDLERS  4 **/

  const handleChange = (e: SyntheticEvent, newValue: string) => {
  // handleChange degan function bor. u SyntheticEvent va newValue degan ikkita argument oladi.
  // user tablarni change qianda ishlid, Ichida setValue(newValue) ishlaydi -
  // bu orqali value degan state yangilanadi va UI avtomatik yangilanadi.
    setValue(newValue);
  };


  /* 5 */ 

  /* 6) Bu komponentda 3 ta buyurtma holatini ko‘rish uchun tab’lar bor. 
  value yangilanadi va shu asosda mos komponent 
  (PausedOrders, ProcessOrders, FinishedOrders) ekranga chiqadi.*/
  if (!authMember) history.push("/");
  return (
    <div className={"order-page"}>
      <Container className="order-container">
        <Stack className={"order-left"}>
          <TabContext value={value}> 
  {/* TabContext ichida valuega qarab qaysi tab faol ekanligi aniqlanadi. */}
            <Box className={"order-nav-frame"}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
    // Foydalanuvchi tab’ni bosganda handleChange orqali           
                  aria-label="basic tabs example"
                  className={"table_list"}
                >
    {/* Value yangilanadi */}
                  <Tab label="PAUSED ORDERS" value={"1"} />
                  <Tab label="PROCESS ORDERS" value={"2"} />
                  <Tab label="FINISHED ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className={"order-main-content"}>
              <PausedOrders setValue={setValue} />
              <ProcessOrders setValue={setValue} /> 
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className={"order-right"}>
          <Box className={"order-info-box"}>
            <Box className={"member-box"}>
              <div className={"order-user-img"}>
                <img
                  src={
                    authMember?.memberImage
                      ? `${serverApi}/${authMember.memberImage}`
                      : "/icons/default-user.svg"
                  }
                  className={"order-user-avatar"}
                />
                <div className={"order-user-icon-box"}>
                  <img
                    src={
                      authMember?.memberType === MemberType.RESTAURANT
                        ? "/icons/restaurant.svg"
                        : "/icons/user-badge.svg"
                    }
                    className={"order-user-prof-img"}
                  />
                </div>
              </div>
              <span className={"order-user-name"}>
                {" "}
                {authMember?.memberNick}
              </span>
              <span className={"order-user-prof"}>
                {" "}
                {authMember?.memberType}
              </span>
            </Box>
            <Box className={"liner"}></Box>
            <Box className={"order-user-address"}>
              <div style={{ display: "flex" }}>
                <LocationOnIcon />
              </div>
              <div className={"spec-address-txt"}>
                {authMember?.memberAddress
                  ? authMember.memberAddress
                  : "Do not exist"}
              </div>
            </Box>
          </Box>
          <Box className={"order-info-box"} sx={{ mt: "15px" }}>
            <input
              type={"text"}
              name={"cardNumber"}
              placeholder={"Card number : **** 4090 2002 7495"}
              className={"card-input"}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <input
                type={"text"}
                name={"cardPeriod"}
                placeholder={"07 / 24"}
                className={"card-half-input"}
              />
              <input
                type={"text"}
                name={"cardCVV"}
                placeholder={"CVV : 010"}
                className={"card-half-input"}
              />
            </div>
            <input
              type={"text"}
              name={"cardCreator"}
              placeholder={"Justin Robertson"}
              className={"card-input"}
            />
            <div className={"cards-box"}>
              <img src={"/icons/western-card.svg"} />
              <img src={"/icons/master-card.svg"} />
              <img src={"/icons/paypal-card.svg"} />
              <img src={"/icons/visa-card.svg"} />
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
