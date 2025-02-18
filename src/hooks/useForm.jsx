import { useState } from "react"

const useForm = (form_initial_state) =>{
    //form_initial_state sea un objeto como este: {email: "", password:""}
    const [formState, setFormState] = useState(form_initial_state)

    const handleChangeInput = (event) =>{
        setFormState(
            (prev_formState) =>{ //
                const field_name = event.target.name //valor que actualiza el campo con su respectiva variable
                const field_value = event.target.value
                return {...prev_formState, [field_name]: field_value}
            }
        )
    }
    return {
        formState,
        handleChangeInput
    }
}

export default useForm