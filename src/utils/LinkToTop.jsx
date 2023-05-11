import { Link } from "react-router-dom";
import { useNavigateToTop } from "../hooks/useNavigateToTop";


export const LinkToTop = (props) => {
  const navigateToTop = useNavigateToTop();

  const navigateAndReset = (event) => {
    event.preventDefault();
    navigateToTop(props.to);
  };

  return (
    <Link className={props.className} onClick={navigateAndReset} to={props.to}>
      {props.children}
    </Link>
  );
};