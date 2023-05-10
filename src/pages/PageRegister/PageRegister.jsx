import { Stack } from "@mui/material";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import FormBasicInformation from "../../components/Forms/FormBasicInformation";
import FormUserSettings from "../../components/Forms/FormUserSettings";
import FormAddress from "../../components/Forms/FormAddress";

const steps = [
  { title: "Basic Information", content: <FormBasicInformation /> },
  { title: "User Settings", content: <FormUserSettings /> },
  { title: "Address", content: <FormAddress /> },
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
      <Header />
      <Box sx={{ width: "70vh", margin: "auto" }}>
        <Stepper
          sx={{
            marginBottom: "20px",
            "& .MuiStepLabel-label": {
              fontSize: "1.5rem",
            },
          }}
          activeStep={activeStep}
        >
          {steps.map((step) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={step.tile} {...stepProps}>
                <StepLabel
                  StepIconProps={{ sx: { fontSize: "3rem" } }}
                  {...labelProps}
                >
                  {step.title}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Stack>
              <Typography textAlign={"center"} variant="h2">
                All steps completed - you can log now
              </Typography>
              <Button variant = 'contained' sx={{width:0.5,margin:'auto',mt:2}}>Log in</Button>
            </Stack>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {steps[activeStep].content}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
      <Stack sx={{ alignSelf: "end", width: "100%" }}>
        <Footer />
      </Stack>
    </Stack>
  );
}

export default PageRegister;
