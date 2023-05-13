import { Box, Button, Stack, Step, StepLabel, Stepper, Typography } from "@mui/material";
import React from 'react'
import { LinkToTop } from "../../utils/LinkToTop";
import FinishStepper from "../FinishStepper/FinishStepper";

function StepperDesktop({steps,activeStep,handleNext,handleBack,handleReset}) {

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
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={step.label} {...stepProps}>
              <StepLabel
                StepIconProps={{ sx: { fontSize: "3rem" } }}
                {...labelProps}
              >
                {step.label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <FinishStepper/>
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
