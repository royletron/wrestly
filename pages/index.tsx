import Details from "../components/Details";
import middleware from "../utils/getServerSideProps";

export default function CatchAll(props) {
  return <Details {...props} />;
}

export const getServerSideProps = middleware;
