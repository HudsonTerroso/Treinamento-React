import styles from './styles.module.css'

export default function Header(){
    return (
        <header className={styles.header}>
            <img className={styles.img} src="/Logo.svg" alt="" />Feed
        </header>
    )
}