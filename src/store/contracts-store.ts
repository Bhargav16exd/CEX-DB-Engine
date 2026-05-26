
export const CONTRACT_STORE:Array<ContractInputPayload> = []

interface ContractInputPayload {
  id:string;
	contract_quantity:number;
  avg_price:number;
  collateral:number;
  realizedProfit:number;
  realizedLoss:number;
  stockSymbol:string;
  userId:string;
}