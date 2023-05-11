import { Slide, useScrollTrigger } from "@mui/material";

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    threshold: 1
  });

  return (
    <Slide appear={false} direction="down" in={trigger}>
      {children}
    </Slide>
  );
}

function HideComponentOnScroll({children}) {
  return <HideOnScroll>{children}</HideOnScroll>;
}

export default HideComponentOnScroll;
