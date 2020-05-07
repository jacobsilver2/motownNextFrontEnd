import { useQuery } from "@apollo/react-hooks";
import { CURRENT_USER_QUERY } from "./Nav";

const PleaseSignIn = props => {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY);
  if (loading) return <p>Loading...</p>;
  if (!data.me) return null;
  return <>{props.children}</>;
};

export default PleaseSignIn;
