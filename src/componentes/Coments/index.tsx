import curtido from  '../../assets/Vector.png'
import normal from '../../assets/Like.png'
import fotoPadrao from '../../assets/eu.jfif';
import { useState } from 'react'
import PrimaryButton from '../PrimaryButton'
import styles from './styles.module.css'

interface Coments {
    foto: string
    nome: string
    cargo: string
}

interface Comentario {
    id: number
    foto: string
    nome: string
    cargo: string
    texto: string
    criadoEm: string
}

export default function Coments(props: Coments) {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(7); 
    const [textoDigitado, setTextoDigitado] = useState("");
    const [listaDeComentarios, setListaDeComentarios] = useState<Comentario[]>([]);

    const toggleLike = () => {
        if (liked) {
            setLiked(false);
            setCount(count - 1);
        } else {
            setLiked(true);
            setCount(count + 1);
        }
        setLiked(!liked);
    };

    function Clique() {
        if (textoDigitado.trim() === "") return;

        const novoComentario = {
            //valores inicias
            id: Date.now(),
            foto: fotoPadrao, 
            nome: 'Hudson Terroso', 
            cargo: 'Dev Front-End', 
            texto: textoDigitado,
            criadoEm: new Date().toLocaleDateString()
        };

        setListaDeComentarios([...listaDeComentarios, novoComentario]);
        //Spread Operator (...) pega todos os comentarios de listaDeComentarios
        setTextoDigitado("");
    }

    function excluirComentario(idParaExcluir: number) {
    const listaFiltrada = listaDeComentarios.filter(comentario => comentario.id !== idParaExcluir);
    setListaDeComentarios(listaFiltrada);
}

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <img className={styles.foto} src={props.foto} alt="" />
                <div className={styles.containerPerfil}>
                    <h2 className={styles.h2}>{props.nome}</h2>
                    <p className={styles.p1}>{props.cargo}</p>
                </div>
            </div>

            <div>
                <p className={styles.texto}>Lorem ipsum </p>
                <p className={styles.texto}>Lorem ipsum dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!</p>
                <p className={styles.texto}>Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!</p>
            </div>

            <div>
                <p className={styles.feedback}><strong>Deixe seu feedback</strong></p>
                <input 
                    className={styles.input} 
                    type="text" 
                    placeholder='Escreva um comentário...' 
                    value={textoDigitado} 
                    onChange={(e) => setTextoDigitado(e.target.value)} 
                />
            </div>

            <div>
                {listaDeComentarios.map((coment) => (
                    //método map pra ler a lista criada
                    <div key={coment.id} className={styles.containerComentario}>
                        <img className={styles.fotoComentario} src={coment.foto} alt="" />
                        <div className={styles.containerInfoComentario}>
                            <p className={styles.nomeComentario}><strong>{coment.nome}</strong></p>
                            <p className={styles.criadoEm}>{coment.criadoEm}</p>
                            <p className={styles.textoComentario}>{coment.texto}</p>
                        </div>
                        <button 
                            onClick={() => excluirComentario(coment.id)}
                            className={styles.botaoExcluir}
                            title="Excluir comentário"
                        >
                        <img className={styles.imgExcluir} src="src\assets\Trash.png" alt="" />
                        </button>
                        <button
                            onClick={toggleLike}
                        ><img src={liked ? curtido: normal } alt="" 
                        style={{ width: '24px', height: '24px' }}/></button>
                        <span
                        style={{
                                color: liked? '#007bff' : '#FFFFFF'
                            }}>Like • {count}</span>
                    </div>
                ))}
            </div>

            <PrimaryButton onClick={Clique} />
        </section>
    )
}