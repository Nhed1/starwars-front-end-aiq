import { useQueryFetch } from "../hooks/useQueryFetch";
import PropTypes from "prop-types";
import { memo } from "react";

export const APIData = memo(({ url, field }) => {
  const { data, isLoading } = useQueryFetch(url);

  if (isLoading) return "CARREGANDO...";

  return data[field] || "";
});

APIData.propTypes = {
  url: PropTypes.string,
  field: PropTypes.string,
};
