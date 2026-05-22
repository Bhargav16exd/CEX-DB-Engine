type FillType = {
  takerID: string;
  makerOrderID: string;
  makerID: string;
  takerOrderID: string;
  quantity: number;
  market: string;
  price:number;
}

export let FILLS: FillType[] = [];