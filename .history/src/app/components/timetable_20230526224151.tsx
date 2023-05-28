"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const Timetable = () => {
  const [table, setTable] = useState();
  useEffect(() => {
    async function getTimeTable() {
      const res = await fetch("/api/timetable");
      const data = await res.json();
      setTable(data);
    }
    getTimeTable();
  }, []);
  return <div>{JSON.stringify(table)}</div>;
};

export default Timetable;
