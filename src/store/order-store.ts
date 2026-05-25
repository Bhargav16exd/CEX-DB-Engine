import type { AdapterRequestType } from "../types/db-adapter-types.js";


export type Side = "short" | "long";
export type Type = "limit" | "market";
type OrderStatus = "open" | "canceled" | "partialfill" | "closed"

export type Order = {
	orderId:string,

  side:Side,
  type:Type,

	price:number,
	quantity:number,
	filledQuantity:number,
	
  status:OrderStatus

	userId:string,

  stockSymbol:string,
  updatedAt: Date
}

export type UpdateOrderPayloadType = {
  orderId:string
  quantity:number
  status:OrderStatus
}

export const APPEND_ONLY_ORDERS : Array<Order> = [];
export const INSERT_AND_UPDATE_ORDERS : Array<AdapterRequestType> = [];