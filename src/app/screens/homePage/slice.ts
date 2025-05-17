import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";

const initialState: HomePageState = { // initialState -  bosh qiymat
  // Va uni HomePageState moslashtirib 3 ta bo'limidan iborat
  popularDishes: [],
  newDishes: [],
  topUsers: [],
};
// store ichida Redux state’ning boshlang‘ich holatini belgilaydi.

const homePageSlice = createSlice({ 
  name: "homePage",
  initialState, // Reduxni boshlang'ich qiymati
  reducers: { // Reducers -  bu state’ni yangilovchi funksiyalar (action + reducer)
    setPopularDishes: (state, action) => { // actionga kirib kegan datani
      state.popularDishes = action.payload; // action.payload dan oladi,
      // action.payload orqali kelgan yangi mashhur ovqatlar massivini state.popularDishes ga yozadi.
    },
    setNewDishes: (state, action) => {
      state.newDishes = action.payload; // yangi ovqatlar listni yangilab
    },
    setTopUsers: (state, action) => { //  Eng faol foydalanuvchilar ro‘yxatini state’da yangilaydi.
      state.topUsers = action.payload; // Har bir reducer state ni mutatsiya qiladi 
    },
  },
});

export const { setPopularDishes, setNewDishes, setTopUsers } = // Distraction qivommiz
  homePageSlice.actions; //  homePageSlice ichida avtomatik yaratilgan actionlar ajratib olinib
  // Ularni komponentda dispatch() bilan ishlatvommiz

const HomePageReducer = homePageSlice.reducer;
// bu yerda slice ichidagi reducer ajratib olinib, default export qilinyapti.
// Redux storega ulash uchun ishlatiladi:
export default HomePageReducer;
