import {
  Box,
  Button,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React from "react";
import FinishStepper from "../FinishStepper/FinishStepper";

function StepperDesktop({
  steps,
  activeStep,
  handleNext,
  handleBack,
  handleReset,
}) {
  return (
    <div>
      <Stepper
        sx={{
          marginBottom: "60px",
          "& .MuiStepLabel-label": {
            fontSize: "1.5rem",
          },
        }}
        activeStep={activeStep}
      >
        {steps.map((step) => {
          return (
            <Step key={step.label}>
              <StepLabel
                StepIconProps={{ sx: { fontSize: "3rem" } }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  alignContent: "center",
                  '& .MuiStepLabel-iconContainer':{
                    padding:0
                  }
                }}
              >
                {step.label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <FinishStepper />
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          {steps[activeStep].content}
          <Box
            sx={{ display: "flex", flexDirection: "row", pt: 2, mt: "60px" }}
          >
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
        </>
      )}
    </div>
  );
}

export default StepperDesktop;
