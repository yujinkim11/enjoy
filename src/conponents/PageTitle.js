import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Enjoy! | {title}</title>
    </Helmet>
  );
};
