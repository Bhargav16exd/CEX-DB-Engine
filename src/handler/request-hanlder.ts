import { FILLS } from "../store/fills-store.js";
import { AdapterEntityType, type AdapterRequestType  } from "../types/db-adapter-types.js";

export const requestHandler = (ingesterRequest:AdapterRequestType) => {
  
  if(ingesterRequest.entityType == AdapterEntityType.FILL){
    FILLS.push(ingesterRequest.payload);
  }
}