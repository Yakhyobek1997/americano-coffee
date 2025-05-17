import axios from "axios";
import { serverApi } from "../../lib/config";
import { LoginInput, Member, MemberInput } from "../../lib/types/member";

class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async signup(signupInput: MemberInput): Promise<Member> {
    try {
      const url = this.path + "/member/signup";
      const response = await axios.post(url, signupInput, {
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



