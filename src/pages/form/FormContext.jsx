import { useState, useEffect, createContext, useContext } from "react"

const FormContext = createContext()
export const useFormContext = () => useContext(FormContext)

const FormProvider = ({children}) => {
    const title = ["Main Info", "Experiance", "Questions"]

    const [step, setStep] = useState(0)
    const [data, setData] = useState({
        firstname : "",
        lastname : "",
        email : "",
        country : "",
        location : "",
        resume : "",
        coverLetter : "",
        experiance : "",
        education : "",
        portfolio : "",
        sallaryExpection : "",
        question1 : "",
        question2 : "",
        question3 : ""
    })

    const nextStep = () => {
        if(step < 4) {
            return setStep(prevStep => prevStep + 1)
        }
        return
    }

    const prevStep = () => {
        if(step !== 0) {
            return setStep(prevStep => prevStep - 1)
        }
        return
    }

  return (
    <FormContext.Provider value={{title, step, nextStep, prevStep, data, setData}}>
        {children}
    </FormContext.Provider>
  )
}

export default FormProvider