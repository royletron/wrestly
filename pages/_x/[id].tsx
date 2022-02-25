import Details from "../../components/Details";
import db from "../../utils/db";

export default function CatchAll(props) {
  return <Details {...props} />;
}

export async function getServerSideProps(ctx) {
  const database = await db();
  const request = await database("requests")
    .select("*")
    .where({
      id: parseInt(ctx.query.id),
    });
  return {
    props: request[0],
  };
}
