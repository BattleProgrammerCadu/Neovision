
import styles from  '../../styles/main.module.scss';

const Main = () =>{
    return(
        <div className={styles.curved} id='main'>
            <h1>Neovision</h1>
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
                quando um impressor desconhecido pegou uma bandeja de tipos e os
                embaralhou para fazer um livro de modelos de tipos.
            </p>
            <br />
            <p>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
                quando um impressor desconhecido pegou uma bandeja de tipos e os
                embaralhou para fazer um livro de modelos de tipos.
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
                <path 
                    fill="#774491" 
                    fill-opacity="1" 
                    d="M0,224L60,197.3C120,171,240,117,360,112C480,107,600,149,720,192C840,235,960,277,1080,266.7C1200,256,1320,192,1380,160L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                </path>
            </svg>
            
            <div className={styles.funcionalidades}>
                <img src="hand-phone.png" alt="Celular com o logo Neovision" className={styles.image}/>
                <ul>
                    <li><img src="check.svg" alt="Sinal de confere" /><span>Funcionalidade 1</span></li>
                    <li><img src="check.svg" alt="Sinal de confere" />Funcionalidade 2</li>
                    <li><img src="check.svg" alt="Sinal de confere" />Funcionalidade 3</li>
                </ul>
            </div>        
        </div>
    )
}

export default Main;