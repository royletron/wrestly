import { NextRequest } from "next/server";
import Details from "../components/Details";

export default function CatchAll(props) {
  return <Details {...props} />;
}

export async function getServerSideProps({ req }: { req: NextRequest }) {
  const { cookies = {}, headers = {}, body = {}, method = "GET", url } = req;
  return { props: { cookies, headers, body, method, url } };
}
