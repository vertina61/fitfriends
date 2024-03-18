import { CustomerType } from "./customer-type.enum.js";
import { StatusType } from "./status-type.enum.js";
import { UserType } from "./user-type.enum.js";

export type PersonalWorkoutType = {
  initiator: CustomerType;
  user: UserType;
  status: StatusType;

}
