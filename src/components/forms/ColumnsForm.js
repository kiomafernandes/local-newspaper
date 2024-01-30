import { Link } from "react-router-dom";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import Textarea from "../form/Textarea";


function ColumnsForm() {
    return(
        <form>
            <Input 
                type='text'
                name='title'
                text='Título da matéria'
                placeholder='Digite o titulo'
            />  
            
            <Input 
                type='text'
                name='subtitle'
                text='Previa da matéria'
                placeholder='Digite o titulo'
            />
            <Textarea 
                name='news'
                text='Corpo da matéria'
                placeholder='Digite a matéria'
            />
                
            <SubmitButton text='Publicar'/>
        </form>
    )
}

export default ColumnsForm