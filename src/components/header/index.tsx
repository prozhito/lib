import React, { useEffect } from "react";
import { Header } from "./header";
import { getContextData } from "../../api/getServerData";

export function ProzhitoHeader() {
  const { data, error, isLoading } = getContextData();

  useEffect(() => {
    // TODO: 500 page
    if (!isLoading && (error || !data)) throw new Error("500");
  }, [isLoading]);

  if (!data) return <header></header>;

  return <Header logos={data.logos} main_menu={data.main_menu} />;
}
