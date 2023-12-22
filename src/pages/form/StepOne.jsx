import React from 'react'
import { Box, TextField, Button  } from "@mui/material"
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useFormContext } from './FormContext'

const validationSchema = yup.object().shape({
    firstname : yup.string().min(3).max(40).required(),
    lastname : yup.string().min(3).max(40).required(),
    email : yup.string().email().required(),
    country : yup.string().required(),
    location : yup.string().required()
})

const StepOne = () => {
    const {step, nextStep, data, setData} = useFormContext()

    const initialValues = {
        firstname : data.firstname,
        lastname : data.lastname,
        email : data.email,
        country : data.country,
        location : data.location
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
            <Box display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap="1rem">
                <TextField label="firstname"  
                           name='firstname'
                           value={values.firstname}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           error= {Boolean(errors.firstname) && touched.firstname} 
                           size='small'
                           sx={{gridColumn : "span 1"}}
                />
                <TextField label="lastname"  
                           name='lastname'
                           value={values.lastname}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           error= {Boolean(errors.lastname) && touched.lastname} 
                           size='small'
                           sx={{gridColumn : "span 1"}}
                />
                <TextField label="email"  
                           name='email'
                           value={values.email}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           error= {Boolean(errors.email) && touched.email} 
                           size='small'
                           sx={{gridColumn : "span 2"}}
                />
                <TextField label="country"  
                           name='country'
                           value={values.country}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           error= {Boolean(errors.country) && touched.country} 
                           size='small'
                           sx={{gridColumn : "span 2"}}
                />
                <TextField label="location"  
                           name='location'
                           value={values.location}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           error= {Boolean(errors.location) && touched.location} 
                           size='small'
                           sx={{gridColumn : "span 2"}}
                />
                <Button type="submit" variant='contained' sx={{gridColumn : "span 2"}}>
                    Next
                </Button>
            </Box>
        </form>
    </Box>
  )
}

export default StepOne