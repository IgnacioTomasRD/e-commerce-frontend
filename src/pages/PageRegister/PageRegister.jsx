import { Stack } from "@mui/material";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Box from "@mui/material/Box";
import * as React from "react";
import FormBasicInformation from "../../components/Forms/FormBasicInformation";
import FormUserSettings from "../../components/Forms/FormUserSettings";
import FormAddress from "../../components/Forms/FormAddress";
import StepperMobile from "../../components/StepperMobile/StepperMobile";
import StepperDesktop from "../../components/StepperDesktop/StepperDesktop";

const steps = [
  { label: "Basic Information", content: <FormBasicInformation /> },
  { label: "User Settings", content: <FormUserSettings /> },
  { label: "Address", content: <FormAddress /> },
];

function PageRegister() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Stack width={1} height={"100vh"} direction={"row"} flexWrap={"wrap"}>
      <Header position="static" />
      <Box sx={{ display:{xs:'block',md:'none'},width: "70vh", margin: "auto"}}>
        <StepperMobile steps={steps} activeStep = {activeStep} handleNext = {handleNext} handleBack = {handleBack} handleReset = {handleReset}/>
      </Box>
      <Box sx={{ display:{xs:'none',md:'block'}, width: "70vh", margin: "auto"}}>
        <StepperDesktop steps={steps} activeStep = {activeStep} handleNext = {handleNext} handleBack = {handleBack} handleReset = {handleReset}/>
      </Box>
      <Stack sx={{ alignSelf: "end", width: "100%" }}>
        <Footer />
      </Stack>
    </Stack>
  );
}

export default PageRegister;
