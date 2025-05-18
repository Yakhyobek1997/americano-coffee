import axios from "axios";
import { serverApi } from "../../lib/config";
import {
  LoginInput,
  Member,
  MemberInput,
  MemberUpdateInput,
} from "../../lib/types/member";

class MemberService { // MemberService degan oject clasi bor
  private readonly path: string;

  constructor() {  // constructor bu special method
    this.path = serverApi; // pathga serverApi degan qiymatni
  }

public async getTopUsers(): Promise<Member[]> {
  try {
    const url = this.path + "/member/top-users";
    const result = await axios.get(url, { withCredentials: true });
    console.log("getTopUsers:", result);

    return result.data;
  } catch (err) {
    console.log("Error, getTopUsers:", err);
    throw err;
  }
}
public async getRestaurant(): Promise<Member> {
  try {
    const url = this.path + "/member/restaurant";
    const result = await axios.get(url, { withCredentials: true });
    console.log("getRestaurant:", result);

    const restaurant: Member = result.data;
    return restaurant;
  } catch (err) {
    console.log("Error, getRestaurant:", err);
    throw err;
  }
}

  public async signup(input: MemberInput): Promise<Member> {
    // signup methodi uni 1 arg ovotti signupInput, bu MemberInput tipida.
  // Promise<Member>, yani bu async function va backenddan Member object qaytaradi.
    try {
      const url = this.path + "/member/signup";
      // This - pathga API engpoint /member/signup qo'shib, API manzil yasab olinyapti.
      const result = await axios.post(url, input, { withCredentials: true });
       // Bu yerda axios.post() degan HTTP so‘rov yuboruvchi method ishlatilmoqda.
      console.log("signup:", result);

      const member: Member = result.data.member;
      console.log("member:", member);
      localStorage.setItem("memberData", JSON.stringify(member));

      return member;
    } catch (err) {
      console.log("Error, signup:", err);
      throw err;
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    try {
      const url = this.path + "/member/login";
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("login:", result);

      const member: Member = result.data.member;
      console.log("member:", member);
      localStorage.setItem("memberData", JSON.stringify(member));

      return member;
    } catch (err) {
      console.log("Error, login:", err);
      throw err;
    }
  }

public async logout(): Promise<void> {
  try {
    const url = this.path + "/member/logout";
    const result = await axios.post(url, {}, {
      withCredentials: true,
    });

    localStorage.removeItem("memberData"); 
    console.log("logout response:", result.status);
  } catch (err) {
    console.log("Error, logout:", err);
    throw err;
  }
}


  public async updateMember(input: MemberUpdateInput): Promise<Member> {
    try {
      const formData = new FormData();
      formData.append("memberNick", input.memberNick || "");
      formData.append("memberPhone", input.memberPhone || "");
      formData.append("memberAddress", input.memberAddress || "");
      formData.append("memberDesc", input.memberDesc || "");
      formData.append("memberImage", input.memberImage || "");

      const result = await axios({
  url: `${serverApi}/member/update`,
  method: "POST",
  data: formData,
  withCredentials: true,
});
      console.log("updateMember:", result);

      const member: Member = result.data.data;
      localStorage.setItem("memberData", JSON.stringify(member));
      return  member;
    } catch (err) {
      console.log("Error, updateMember:", err);
      throw err;
    }
  }
}

export default MemberService;
