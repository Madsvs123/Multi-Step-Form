import React from 'react'
import { Box, Container, Typography } from "@mui/material"
import FormProvider, { useFormContext } from './FormContext'
import Form from "./Form"

const MutliStepForm = () => {
  return (
      <FormProvider>
          <Form />
      </FormProvider>
  )
}

export default MutliStepForm