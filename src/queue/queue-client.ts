import { createClient } from "redis";

const REDIS_URL = process.env.REDIS_URL || "";

export const subscriber = createClient({url:REDIS_URL}).on("err",(error)=>{
  console.log("ERROR WHILE CREATING PUBILSHER");
})

export const connectRedis = async () => {
  await Promise.all([subscriber.connect()])
}