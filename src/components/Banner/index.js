import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>Olá, Mundo!</h1>

            <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! 
                Eu sou Victoria Senedesse.
            </p>
        </div>

        <div className={styles.imagens}>
            <img 
                className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden={true}
                alt=""/>
            <img 
                className={styles.minhaFoto}
                src="http://github.com/vicsenedesse.png"
                alt="Foto da victoria"/>
        </div>
    </div>
  )
}
