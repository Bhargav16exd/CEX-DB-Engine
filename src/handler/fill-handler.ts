import { prisma } from "../db/prisma.client.js";
import { FILLS } from "../store/fills-store.js";

const sleep = (ms:number) => 
  new Promise(resolve => setTimeout(resolve, ms));

export const initFillIngestor = async () => {

  console.log("FILLS INGESTOR IS RUNNING");

  for(;;){

    if(FILLS.length === 0 ){
      await sleep(5000);
      continue;
    }

    const batch = FILLS.splice(0, 10);

    const result = await prisma.fill.createMany({
      //@ts-ignore
      data:batch
    })
    
  } 
}