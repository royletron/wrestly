import { NextRequest } from "next/server";
import db from "./db";

export async function reqToRecord(req: NextRequest) {
  const { cookies = {}, headers = {}, body = {}, method = "GET", url } = req;
  const parsedUrl = new URL(`http://localhost${url}`);
  const query = {};
  parsedUrl.searchParams.forEach((v, k) => (query[k] = v));

  const database = await db();
  const record = await database("requests").insert({
    url,
    method,
    query,
    body,
    cookies,
    headers,
  });
  const data = await database("requests").select("*").where({ id: record[0] });
  return data[0];
}

export default async function getServerSideProps({
  req,
}: {
  req: NextRequest;
}) {
  const data = reqToRecord(req);
  return { props: data };
}
