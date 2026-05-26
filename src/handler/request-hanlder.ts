import { CONTRACT_STORE } from "../store/contracts-store.js";
import { FILLS } from "../store/fills-store.js";
import { APPEND_ONLY_ORDERS, INSERT_AND_UPDATE_ORDERS } from "../store/order-store.js";
import { AdapterEntityType, AdapterMessageType, type AdapterRequestType  } from "../types/db-adapter-types.js";

export const requestHandler = (ingesterRequest:AdapterRequestType) => {
  
  if(ingesterRequest.entityType == AdapterEntityType.FILL){
    FILLS.push(ingesterRequest.payload);
  }

  if(ingesterRequest.entityType == AdapterEntityType.ORDER){
    
    if(ingesterRequest.messageType == AdapterMessageType.APPEND_ONLY){
      APPEND_ONLY_ORDERS.push(ingesterRequest.payload);
    }

    if(ingesterRequest.messageType == AdapterMessageType.INSERT || ingesterRequest.messageType == AdapterMessageType.UPDATE){
      //push request as further it helps to differentiate weather to update or insert order
      INSERT_AND_UPDATE_ORDERS.push(ingesterRequest);
    }
  }

  if(ingesterRequest.entityType == AdapterEntityType.CONTRACT){
    CONTRACT_STORE.push(ingesterRequest.payload);
  }
}