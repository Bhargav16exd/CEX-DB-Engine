type FillType = {
  takerID: string;
  makerOrderID: string;
  makerID: string;
  takerOrderID: string;
  quantity: number;
  symbol:string;
  market: string;
  price:number;
  makerSide:string;
  takerSide:string;
}

export let FILLS: FillType[] = [];