import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"

function RegisterForm() {
    return(
        <form>
            <Input 
                type='text'
                text='Nome'
                name='firstname'
                placeholder='Digite seu nome'
            />

            <Input 
                type='text'
                text='Sobrenome'
                name='lastname'
                placeholder='Digite seu sobrenome'
            />

            <Input 
                type='number'
                text='RG'
                name='rg'
                placeholder='Digite seu rg'
            />

            <Input 
                type='number'
                text='CPF'
                name='cpf'
                placeholder='Digite seu cpf'
            />

            <Input 
                type='text'
                text='Rua'
                name='street'
                placeholder='Digite o nome da sua rua'
            />

            <Input 
                type='number'
                text='Numero'
                name='number_house'
                placeholder='Digite o numero da casa'
            />

            <Input 
                type='text'
                text='Cidade'
                name='city'
                placeholder='Digite onome da sua cidade'
            />

            <Input 
                type='text'
                text='Estado'
                name='countre'
                placeholder='Digite onome da sua estado'
            />            

            <SubmitButton text='Proximo' />
        </form>
    )
}

export default RegisterForm