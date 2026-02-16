import styles from './styles.module.css'

export default function Card() {
    return (
        <section className={styles.section}>
            <div className={styles.containerImg}>
                <img className={styles.img} src="src\assets\eu.jfif" alt="" />
            </div>
            <div className={styles.containerTxt}>
                <h2 className={styles.h2}>Hudson Terroso</h2>
                <p className={styles.p}>Dev Front-end</p>
            </div>
        </section>
    )
}