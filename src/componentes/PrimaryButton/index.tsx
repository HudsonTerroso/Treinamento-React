import styles from './styles.module.css'

interface Botao{
    onClick?: () => void;
}

export default function PrimaryButton (props : Botao){
    return (
        <>
            <button onClick={props.onClick} className={styles.botao}>Comentar</button>
        </>
    )
}