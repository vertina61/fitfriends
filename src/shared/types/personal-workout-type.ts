import { CustomerType } from "./customer-type.enum.js";
import { StatusType } from "./status-type.enum.js";
import { UserRolType } from "./user-rol.type.js";


export type PersonalWorkoutType = {
  initiator: CustomerType;
  user: UserRolType;
  status: StatusType;

}
