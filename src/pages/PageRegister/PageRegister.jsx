import Box from "@mui/material/Box";
import * as React from "react";
import FormBasicInformation from "../../components/Forms/FormBasicInformation";
import FormUserSettings from "../../components/Forms/FormUserSettings";
import FormAddress from "../../components/Forms/FormAddress";
import StepperMobile from "../../components/StepperMobile/StepperMobile";
import StepperDesktop from "../../components/StepperDesktop/StepperDesktop";
import LayoutPage from "../../utils/LayoutPage";
import { Stack } from "@mui/material";

const steps = [
  { label: "Information", content: <FormBasicInformation /> },
  { label: "Account", content: <FormUserSettings /> },
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
    <LayoutPage fullHeight withoutLabels>
      <Stack width={1} height={1} >
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            margin: "auto",
          }}
        >
          <StepperMobile
            steps={steps}
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
          />
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: "70vh",
            margin: "auto",
          }}
        >
          <StepperDesktop
            steps={steps}
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
          />
        </Box>
      </Stack>
    </LayoutPage>
  );
}

export default PageRegister;
