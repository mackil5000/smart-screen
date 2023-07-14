import React from "react";
import { TimeTable } from "./getTimeTable.types";

interface TrafficData {
  stop: string;
  time: string;
  direction: string;
}

const ENDPOINT = `https://api.resrobot.se/v2.1/departureBoard?id=740015924&format=json&accessId=${process.env.RESROBOT_API_KEY}`;

async function getTimeTable() {
  const res = await fetch(ENDPOINT);
  const { Departure }: TimeTable = await res.json();

  const returnData = Departure.map(({ stop, time, direction }) => ({
    stop,
    time,
    direction,
  }));

  return returnData;
}

export default async function Timetable() {
  const data: TrafficData[] = await getTimeTable();

  return (
    <ul>
      {data.map(({ stop, time, direction }) => {
        return (
          <>
            <li>{`${stop} ${time} ${direction}`}</li>
          </>
        );
      })}
    </ul>
  );
}
