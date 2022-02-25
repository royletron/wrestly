import { reqToRecord } from "../../utils/getServerSideProps";

export default async function handler(req, res) {
  const data = await reqToRecord(req);
  res.send(data);
}
