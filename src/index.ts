import dotenv from "dotenv";
import { connectRedis, subscriber } from "./queue/queue-client.js";
import type { AdapterRequestType } from "./types/db-adapter-types.js";
import { requestHandler } from "./handler/request-hanlder.js";
import { initFillIngestor } from "./handler/fill-handler.js";
import { initAppendOnlyOrderIngestor, initInsertAndUpdateOrderIngestor } from "./handler/order-handler.js";

dotenv.config();

//connect redis 
connectRedis();

const ADAPTER_INGESTER_QUEUE = `adapter-ingester-queue`;

//process request
const listenQueue = async () => {
  
  for(;;){
    const entity = await subscriber.brPop(ADAPTER_INGESTER_QUEUE, 0);

    if(!entity) continue;

    const parsedRequest = JSON.parse(entity.element) as AdapterRequestType

    requestHandler(parsedRequest);
  }
}

listenQueue();
initFillIngestor();
initAppendOnlyOrderIngestor();
initInsertAndUpdateOrderIngestor();
