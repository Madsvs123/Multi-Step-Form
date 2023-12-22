import React from 'react'
import {Box, Button, Divider, Typography} from "@mui/material"
import { useFormContext } from './FormContext'

export const ViewApplication = () => {
  const {data, nextStep} = useFormContext()
  const applicationKeys = Object.keys(data)
  return (
    <div>
      <Typography variant="h6" fontWeight="bold" sx={{mb : "1rem"}}>
        Your Application
      </Typography>
      <Box backgroundColor="#FFF" 
           display="flex" 
           flexDirection="column" 
           gap=".5rem" 
           p="1rem" 
           mb="1rem"
           borderRadius="1rem"
           border="1px solid #777">

        {applicationKeys.map((key) => {
          return (
            <>
            <Box key={key} display="flex" gap=".5rem">
              <Typography fontWeight="bold">
              {key} :
            </Typography>
            <Typography>
            {data[key]}
            </Typography>
            </Box>
            </>
          )
        })}

      </Box>
      <Button variant='contained' fullWidth onClick={() => nextStep()}>
        confirm
      </Button>
    </div>
  )
}

export default ViewApplication;