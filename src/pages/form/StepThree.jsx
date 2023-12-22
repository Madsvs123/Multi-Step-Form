import React from 'react'
import { Box, 
         TextField, 
         Button,
         FormControl,
         InputLabel,
         Select,
         MenuItem 
        } from "@mui/material"
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useFormContext } from './FormContext'

const validationSchema = yup.object().shape({
    sallaryExpection : yup.number().required(),
    question1 : yup.string().required(),
    question2 : yup.string().required(),
    question3 : yup.string().required(),    
})

const StepThree = () => {
  const {step, nextStep, data, setData} = useFormContext()

  const initialValues = {
    sallaryExpection : data.sallaryExpection,
    question1 : data.question1,
    question2 : data.question2,
    question3 : data.question3,
  }

  console.log(data)

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
          nextStep()
          setData(prevData => ({...prevData, ...values}))
        }
    }) 


  return (
    <Box>
        <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap="1rem">
                <TextField label="How Did You Hear About Us ?"  
                           name='question1'
                           value={values.question1}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           error= {Boolean(errors.question1) && touched.question1} 
                           size='small'
                           sx={{gridColumn : "span 1"}}
                />
                <TextField label="What is your salary expection ?"  
                           name='sallaryExpection'
                           value={values.sallaryExpection}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           error= {Boolean(errors.sallaryExpection) && touched.sallaryExpection} 
                           size='small'
                           sx={{gridColumn : "span 1"}}
                />
                <FormControl fullWidth size='small'>
                  <InputLabel id="workType">What is your work type ?</InputLabel>
                  <Select
                    labelId="workType"
                    name='question2'
                    value={values.question2}
                    label="What is your work type ?"
                    onChange={handleChange}
                  >
                    <MenuItem value="part-time">part time</MenuItem>
                    <MenuItem value="full-time">full time</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth size='small'>
                  <InputLabel id="workPlace">Are you legally eligible to work in Egypt ?</InputLabel>
                  <Select
                    labelId="workPlace"
                    name='question3'
                    value={values.question3}
                    label="Are you legally eligible to work in Egypt ?"
                    onChange={handleChange}
                  >
                    <MenuItem value="no">no</MenuItem>
                    <MenuItem value="yes">yes</MenuItem>
                  </Select>
                </FormControl>
                <Button type="submit" variant='contained' sx={{gridColumn : "span 2"}}>
                    Next
                </Button>
            </Box>
        </form>
    </Box>
  )
}

export default StepThree