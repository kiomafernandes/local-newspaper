import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"
import { useNavigate } from "react-router-dom"

function LoginForm() {
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        navigate('/restrictarea')
    }

    
    return(
        <form onClick={submit}>
            <Input
                type='email'
                text='E-mail'
                name='email'
                placeholder='Digite seu Email'

             />
            <Input 
                type='password'
                text='Senha'
                name='email'
                placeholder='Digite a senha'
            />

            <SubmitButton text='Entrar'/>
        </form>
    )
}


export default LoginForm