import { NextApiRequest, NextApiResponse } from "next";
const ENDPOINT = `https://api.resrobot.se/v2.1/departureBoard?id=740015924&format=json&accessId=${process.env.RESROBOT_API_KEY}`;

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const res = await fetch(ENDPOINT);
  const json: TimeTable = await res.json();
  return response.end(JSON.stringify(json));
}

export interface TimeTable {
  Departure: Departure[];
  TechnicalMessages: TechnicalMessages;
  serverVersion: string;
  dialectVersion: string;
  planRtTs: Date;
  requestId: string;
}

export interface Departure {
  JourneyDetailRef: JourneyDetailRef;
  JourneyStatus: string;
  ProductAtStop: Product;
  Product: Product[];
  Notes: Notes;
  name: string;
  type: string;
  stop: string;
  stopid: string;
  stopExtId: string;
  time: string;
  date: Date;
  reachable: boolean;
  direction: string;
  directionFlag: string;
}

export interface JourneyDetailRef {
  ref: string;
}

export interface Notes {
  Note: Note[];
}

export interface Note {
  value: string;
  key: string;
  type: string;
  routeIdxFrom: number;
  routeIdxTo: number;
  txtN: string;
}

export interface Product {
  icon: Icon;
  name: string;
  internalName: string;
  displayNumber: string;
  num: string;
  line: string;
  lineId: string;
  catOut: string;
  catIn: string;
  catCode: string;
  cls: string;
  catOutS: string;
  catOutL: string;
  operatorCode: string;
  operator: string;
  admin: string;
  routeIdxFrom?: number;
  routeIdxTo?: number;
  matchId: string;
}

export interface Icon {
  res: string;
}

export interface TechnicalMessages {
  TechnicalMessage: TechnicalMessage[];
}

export interface TechnicalMessage {
  value: Date;
  key: string;
}
