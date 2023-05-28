import React, { Suspense } from "react";
import useSWR from "swr";

export default async function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 flex-1 grow">
      <h1>Hejsan</h1>
    </div>
  );
}

interface MenuData {
  menu: string;
}

function Menu({ menu }: MenuData) {
  return <>{JSON.stringify(menu)}</>;
}
