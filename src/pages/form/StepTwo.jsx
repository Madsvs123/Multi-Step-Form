import React from 'react'
import { Box, TextField, Button  } from "@mui/material"
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useFormContext } from './FormContext'

const validationSchema = yup.object().shape({
    resume : yup.string().required(),
    coverLetter : yup.string().required(),
    experiance : yup.string().required(),
    education : yup.string().required(),
    portfolio : yup.string().required()

})

const StepTwo = () => {
    const {step, nextStep, data, setData} = useFormContext()

    const initialValues = {
        resume : data.resume,
        coverLetter : data.coverLetter,
        experiance : data.experiance,
        education : data.education,
        portfolio : data.portfolio
    }

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log(values)
            setData(prevData => ({...prevData, ...values}))
            nextStep()
        }
    }) 


  return (
    <Box>
        <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap="1rem">
                <TextField label="Resume"  
                           name='resume'
                           value={values.resume}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           error= {Boolean(errors.resume) && touched.resume} 
                           size='small'
                           sx={{gridColumn : "span 1"}}
                />
                <TextField label="Cover Letter"  
                           name='coverLetter'
                           value={values.coverLetter}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           error= {Boolean(errors.coverLetter) && touched.coverLetter} 
                           size='small'
                           sx={{gridColumn : "span 1"}}
                />
                <TextField label="Experiance"  
                           name='experiance'
                           value={values.experiance}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           error= {Boolean(errors.experiance) && touched.experiance} 
                           size='small'
                           sx={{gridColumn : "span 1"}}
                />
                <TextField label="Education"  
                           name='education'
                           value={values.education}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           error= {Boolean(errors.education) && touched.education} 
                           size='small'
                           sx={{gridColumn : "span 1"}}
                />
                <TextField label="Portfolio"  
                           name='portfolio'
                           value={values.portfolio}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           error= {Boolean(errors.portfolio) && touched.portfolio} 
                           size='small'
                           sx={{gridColumn : "span 1"}}
                />
                <Button type="submit" variant='contained' sx={{gridColumn : "span 2"}}>
                    Next
                </Button>
            </Box>
        </form>
    </Box>
  )
}

export default StepTwo