import axios from "axios";
import { serverApi } from "../../lib/config";
import { LoginInput, Member, MemberInput } from "../../lib/types/member";

class MemberService { // MemberService degan oject clasi bor
  private readonly path: string;

  constructor() { // constructor bu special method
    this.path = serverApi; // pathga serverApi degan qiymatni
  }

  public async signup(signupInput: MemberInput): Promise<Member> {
  // signup methodi uni 1 arg ovotti signupInput, bu MemberInput tipida.
  // Promise<Member>, yani bu async function va backenddan Member object qaytaradi.
    try {
      const url = this.path + "/member/signup";
  // This - pathga API engpoint /member/signup qo'shib, API manzil yasab olinyapti.    
  const response = await axios.post(url, signupInput, {
    // Bu yerda axios.post() degan HTTP so‘rov yuboruvchi method ishlatilmoqda.
    // U 3 ta argument qabul qiladi
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      console.error("Error in signup:", err);
      throw err;
    }
  }

  public async login(loginInput: LoginInput): Promise<Member> {
    try {
      const url = this.path + "/member/login";
      const response = await axios.post(url, loginInput, {
        withCredentials: true, 
      });
      return response.data;
    } catch (err) {
      console.error("Error in login:", err);
      throw err;
    }
  }

  public async logout(): Promise<void> {
    try {
      const url = this.path + "/member/logout";
      await axios.post(url, null, {
        withCredentials: true,
      });
    } catch (err) {
      console.error("Error in logout:", err);
      throw err;
    }
  }

  public async getTopUsers(): Promise<Member[]> {
    try {
      const url = this.path + "/member/top-users";
      const result = await axios.get(url, {
        withCredentials: true,
      });
      return result.data;
    } catch (err) {
      console.error("Error, getTopUsers:", err);
      throw err;
    }
  }

  public async getRestaurant(): Promise<Member> {
    try {
      const url = this.path + "/member/restaurant";
      const result = await axios.get(url, {
        withCredentials: true, 
      });
      return result.data;
    } catch (err) {
      console.error("Error, getRestaurant:", err);
      throw err;
    }
  }
}

export default MemberService;



