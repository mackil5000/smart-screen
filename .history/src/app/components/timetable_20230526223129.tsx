"use client";
import React from "react";
import useSWR from "swr";

const ENDPOINT = `https://api.resrobot.se/v2.1/departureBoard?id=740015924&format=json&accessId=${process.env.RESROBOT_API_KEY}`;

const Timetable = () => {
  const { data, error, isLoading } = useSWR(ENDPOINT);
  return <div>{JSON.stringify(data)}</div>;
};

export default Timetable;
