import React from "react";
import AnimatedSvg from "../AnimatedSvg/animatedSvg";
import styles from '../../styles/header.module.scss';

const Header = () =>{
    return(
       <div className={styles.container}>
           <header>
                <div className={styles.logo}>
                    <img src='/logo.svg' alt="Logo da Neovision" />
                </div>
                <div className={styles.menu}>
                    <a href="#main">Funcionalidades</a>
                    <a href="#footer">Contato</a>
                    <a href="https://www.facebook.com/t2software/" target='_blank' rel='noreferrer'><img src="/facebook.svg" alt="Logo da rede social Facebook" /></a>
                </div>
           </header>
           <section className={styles.top}>
                <div className={styles.backgroundImage}>
                    <AnimatedSvg />
                </div>
                <div className={styles.topText}>
                    <h2>Reconhecimoento de imagem com</h2>
                    <h1>Inteligência Artificial</h1>
                </div>
           </section>
       </div>
    );  
}
export default Header;