import { MemberStatus, MemberType } from "../enums/member.enum";

export interface Member {
    _id: string;
    memberType: MemberType;
    memberStatus: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword?: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints: number;
    createdAt: Date;
    updatedAt: Date;
  }
  



export interface MemberInput {
    // _id: string;
    memberType?: MemberType
    memberStatus?: MemberStatus
    memberNick: string
    memberPhone: string
    memberPassword: string
    memberAddress?: string
    memberDesc?:string
    memberImage?:string
    memberPoints?:Number
}

// Restaurant controllerdna logindan keldik
// bu yerda ikta sharti bor memberNick,memberPassword
export interface LoginInput {
    memberNick: string;
    memberPassword: string;  
}
// Object malumotni ozi
// interface uni soyasi


export interface MemberUpdateInput {
    // _id: mongoose.Types.ObjectId; // ObjectId
    _id: Object; // ObjectId
    memberStatus?: MemberStatus
    memberNick?: string
    memberPhone?: string
    memberPassword?: string
    memberAddress?: string
    memberDesc?:string
    memberImage?:string
}