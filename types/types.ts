import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  Splash: any;
  SignUp: any;
  Login: any;
  ForgotPassword: any;
  Verification: any;
  NewPassword: any;
  UserProfile: any;
  "(tabs)": {
    params: {
      screen: any;
    };
  };
  "(ownertabs)": {
    params: {
      screen: any;
    };
  };
  PlayField: any;
  EventDetail: { meetingId: number };
  HomeScreen: any;
  BookingScreen: any;
  DetailBookingPage: any;
  CheckoutPage: any;
  PaymentBooking: any;
  YourMeeting: any;
  MyHistory: any;
  HistoryDetail: any;
  FeedBack: any;
  PlayFieldDetail: { playfieldId: number };
  UpdatePlayfield: any;
  CreatePlayfield: any;
  BookingDetail: any;
  PlayFieldList: any;
  PlayfieldDetailCard: { playfieldId: number };
  QRCode: any;
};
export type EventDetailRouteProp = RouteProp<RootStackParamList, "EventDetail">;
export type DetailBookingRouteProp = RouteProp<
  RootStackParamList,
  "DetailBookingPage"
>;

export type TabParamList = {
  index: undefined;
  booking: undefined;
  create: undefined;
  club: undefined;
  account: undefined;
};
export type OwnerTabParamList = {
  home: undefined;
  create: undefined;
  history: undefined;
  statistic: undefined
};

export interface Card {
  userMeetings: any;
  meetingId: number;
  meetingCode: string;
  meetingName: string | null;
  meetingImage: string;
  address: string;
  startDate: string;
  endDate: string;
  host: number;
  totalMember: number;
  isPublic: boolean;
  clubId: number;
  note: string;
  sportId: number;
  cancelBefore: number;
  clubName: string;
  imageClub: string;
}

export interface MeetingsResponse {
  list: Card[];
}

export interface Booking {
  bookingId: number;
  bookingCode: string;
  bookingDate: Date;
  price: number;
  dateStart: Date;
  dateEnd: Date;
  status: number;
  barcode: string;
  description: string;
  customerId: number;
  playField: PlayField;
}

export interface PlayField {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
  openingHours: string;
  capacity: string;
  surface: string;
  owner: string;
  rating: number;
  reviews: number;
}
export interface MeetingDetail {
  meetingId: number;
  meetingCode: string;
  meetingName: string;
  meetingImage: string;
  address: string;
  startDate: string;
  endDate: string;
  host: number;
  totalMember: number;
  clubId: number;
  note: string;
  isPublic: boolean;
  sportId: number;
  cancelBefore: number;
  commentInMeetings?: any[]; // Thay đổi kiểu nếu cần
}

export interface Club {
  clubId: number;
  clubName: string;
  clubCode: string;
  regulation: string;
  information: string;
  slogan: string;
  mainSport: string;
  createDate: string;
  location: string;
  totalMember: number;
  avatarClub: string;
  coverImageClub: string;
}

export interface Comment {
  commentId: number;
  commentCode: string;
  commentDate: Date;
  userId: number;
  content: string;
  image: string;
  meetingId: number;
}

export interface Sport {
  sportId: number;
  sportCode: string;
  sportName: string;
  sportImage: string;
}
