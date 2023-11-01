import useSWR from "swr";
import { TContext } from "./types";
import { NEXT_PUBLIC_API_URL } from "./constants";

async function fetcher<JSON>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export const getContextData = () =>
  useSWR<TContext, Error>(NEXT_PUBLIC_API_URL + "context/", fetcher);
