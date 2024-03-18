import { MethodOfPaymentType } from "./method-of-payment-type.enum.js";
import { OrderType } from "./order-type.enum.js";
import { WorkoutType } from "./workout-type.js";

export type OrdersType = {
  order_type: OrderType;
  service: WorkoutType;
  price: WorkoutType;
  count: number;
  order_amount: number;
  method_of_payment: MethodOfPaymentType;
}
