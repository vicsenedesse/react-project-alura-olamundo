import React from 'react'
import styles from './NotFound.module.css'
import erro404 from 'assets/erro_404.png'
import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navegar = useNavigate();
  return (
    <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>
                404
            </span>

            <h1 className={styles.titulo}>
                Ops! página não encontrada.
            </h1>

            <p className={styles.paragrafo}>
                Nulla facilisi. Vestibulum condimentum tincidunt enim id tincidunt. 
                Vivamus vitae ultrices ex?
            </p>

            <p className={styles.paragrafo}>
                iaculis 
                efficitur ex. In vel lobortis urna. Suspendisse lorem nunc, 
                tincidunt sed nunc in, porttitor sollicitudin arcu. Aliquam 
                tincidunt ultrices cursus.
            </p>
            
            <div 
                className={styles.botaoContainer} 
                onClick={() => navegar(-1)}
            >
                <Button tamanho={'lg'}>Voltar</Button>
            </div>

            <img 
                className={styles.imagemCachorro}
                src={erro404}
                alt='cachorro'>
            </img>
        </div>
        <div className={styles.espacoEmBranco}>

        </div>
    </>
  )
}
