import styles from './TextBlock.module.css'

export default function TextBlock({ title, text }) {
    return (
        <div>
            <h3 className={styles.block_heading}>{title}</h3>
            <p className={styles.block_text}>{text}</p>
        </div>
    )
}