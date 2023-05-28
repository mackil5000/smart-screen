"use client";
import React from "react";
import useSWR from "swr";

const Timetable = () => {
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    return res.json();
  };
  const { data, error } = useSWR("/api/timetable", fetcher);

  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default Timetable;
