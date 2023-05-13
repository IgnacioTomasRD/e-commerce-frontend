import { Link } from "react-router-dom";
import { useNavigateToTop } from "../hooks/useNavigateToTop";
import "./LinkToTop.css"

export const LinkToTop = (props) => {
  const navigateToTop = useNavigateToTop();

  const navigateAndReset = (event) => {
    event.preventDefault();
    navigateToTop(props.to);
  };

  return (
    <Link className={props.className ? props.className : "default-link"} onClick={navigateAndReset} to={props.to}>
      {props.children}
    </Link>
  );
};