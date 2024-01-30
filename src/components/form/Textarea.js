import styles from "./Textarea.module.css"

function Textarea({name, text, placeholder, handleOnChange, value}) {
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <textarea
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange} 
                value={value}
                required
            ></textarea>
        </div>
    )
}

export default Textarea