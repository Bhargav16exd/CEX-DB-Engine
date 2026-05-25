import { prisma } from "../db/prisma.client.js";
import { APPEND_ONLY_ORDERS, INSERT_AND_UPDATE_ORDERS, type Order, type UpdateOrderPayloadType } from "../store/order-store.js";
import { AdapterMessageType } from "../types/db-adapter-types.js";

const sleep = (ms:number) => 
  new Promise(resolve => setTimeout(resolve, ms));

export const initAppendOnlyOrderIngestor = async () => {

  console.log("APPEND ONLY ORDER INGESTOR IS RUNNING");

  for(;;){

    if(APPEND_ONLY_ORDERS.length === 0 ){
      await sleep(5000);
      continue;
    }

    const batch = APPEND_ONLY_ORDERS.splice(0, 10);

    const result = await prisma.order.createMany({
      data:batch
    })

    
  } 
}

export const initInsertAndUpdateOrderIngestor = async () => {

  console.log("UPDATE AND INSERT ORDER INGESTOR IS RUNNING");

  for(;;){

    if(INSERT_AND_UPDATE_ORDERS.length === 0){
      await sleep(5000);
      continue;
    }

    const entity = INSERT_AND_UPDATE_ORDERS.shift()!;

    if(entity.messageType == AdapterMessageType.INSERT){
      const payload = entity.payload as Order;
      await prisma.order.create({
        data:payload
      })
    }
    else if(entity.messageType == AdapterMessageType.UPDATE){
      const payload = entity.payload as UpdateOrderPayloadType;
      await prisma.order.update({
        where:{
          orderId:payload.orderId
        },
        data:{
          filledQuantity:payload.quantity,
          status:payload.status
        }
      })
    }
  }
}