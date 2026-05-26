import { prisma } from "../db/prisma.client.js";
import { CONTRACT_STORE } from "../store/contracts-store.js";
import { FILLS } from "../store/fills-store.js";

const sleep = (ms:number) => 
  new Promise(resolve => setTimeout(resolve, ms));

export const initContractIngestor = async () => {

  console.log("CONTRACT INGESTOR IS RUNNING");

  for(;;){

    if(CONTRACT_STORE.length === 0 ){
      await sleep(5000);
      continue;
    }

    const batch = CONTRACT_STORE.splice(0, 10);

    await prisma.contracts.createMany({
      data:batch
    })
    
  } 
}