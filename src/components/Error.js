import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Oops! Error</h1>
      <p>
        {error.status} : {error.statusText}
      </p>
    </>
  );
};

export default Error;
