import React from 'react'
import { Container, Box, Typography, Stepper, Step, StepLabel, useMediaQuery } from "@mui/material"
import { useFormContext } from './FormContext'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import ViewApplication from './ViewApplication'
import Finish from './Finish'

const Form = () => {
    const {title, step} = useFormContext()
    const isNonMobile = useMediaQuery('(min-width : 700px)')
    console.log(step)
  return (
    <Box display="flex" justifyContent="center">
        <Box width={isNonMobile ? "40%" : "80%"} 
             backgroundColor="#EEE" 
             p="2rem" 
             mt="2rem" 
             borderRadius="1rem"
             boxShadow="1px 1px 8px 2px rgba(0, 0, 0, .3)">

            <Stepper activeStep={step} sx={{mb:"1rem"}}>
                    {title.map((label, index) => {
                    return (
                        <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                    })}
                </Stepper>

            <Typography variant='h5' fontWeight="bold" mb="1rem" color="#777">
                {title[step]}
            </Typography>

          {step === 0 && (<StepOne />)}
          {step === 1 && (<StepTwo />)}
          {step === 2 && (<StepThree />)}
          {step === 3 && (<ViewApplication />)}
          {step === 4 && (<Finish />)}
        </Box>
    </Box>
  )
}

export default Form