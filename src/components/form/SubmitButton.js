import styles from './SubmitButton.module.css'

function SubmitButton({ text, textTitle }) {
    return (
        <div>
            <button className={styles.btn} title={textTitle}>{text}</button>
        </div>
    )
}

export default SubmitButton