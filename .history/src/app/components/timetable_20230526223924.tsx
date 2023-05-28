"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const ENDPOINT = `https://api.resrobot.se/v2.1/departureBoard?id=740015924&format=json&accessId=${process.env.RESROBOT_API_KEY}`;

const Timetable = () => {
  const [table, setTable] = useState();
  useEffect(() => {
    async function getTimeTable() {
      const res = await fetch(ENDPOINT);
      const data = await res.json();
      setTable(data);
    }
    getTimeTable();
  });
  return <div>{JSON.stringify(table)}</div>;
};

export default Timetable;
