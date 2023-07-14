"use client";
import React, { useState, useEffect } from "react";

interface Visitors {
  name: string;
  company: string;
  id: number;
}

const Visitors = () => {
  const [visitors, setVisitors] = useState<Visitors[] | null>();
  useEffect(() => {
    fetch("/visitors", {
      headers: {
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
      },
    })
      .then((res) => res.json())
      .then((data) => setVisitors(data));
  }, []);

  return (
    <div>
      <h3>Todays visitors</h3>
      <p style={{ maxWidth: 600 }}>{JSON.stringify(visitors, null, " ")}</p>
    </div>
  );
};

export default Visitors;
