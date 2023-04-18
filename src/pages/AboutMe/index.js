import PostModel from 'components/PostModel'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './AboutMe.module.css'

export default function AboutMe() {
  const fotoSobreMim = 'http://github.com/vicsenedesse.png'
  return (
    <PostModel
      fotoCapa={fotoCapa}
      título='Sobre mim'>
      <h3 className={styles.subtitulo}>
        Olá, eu sou a Victoria!
      </h3>
      <img 
        src={fotoSobreMim}
        alt='Foto da Victoria'
        className={styles.fotoSobreMim}>
      </img>


      <p className={styles.paragrafo}>Oi, tudo bem ? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate purus congue feugiat viverra. 
      Fusce mauris odio, laoreet in congue id, laoreet sed odio. In sagittis leo eget ex ultrices tempor. Integer eleifend, 
      sapien et sollicitudin faucibus, mauris felis efficitur quam, ac ultricies est augue a dolor. Duis blandit laoreet lorem, 
      ac tempus odio placerat vel. Donec ultricies non erat vitae rutrum. Aliquam vitae sem aliquet, rutrum ex at, venenatis lectus. 
      Proin fermentum orci non sodales dignissim. Ut ullamcorper lacus sed tincidunt bibendum.</p>

      <p className={styles.paragrafo}>Phasellus vitae consectetur justo, ut tincidunt eros. Cras eget rhoncus elit. Phasellus lacinia tortor vel egestas pharetra. 
      Donec faucibus dictum lobortis. Nunc in augue gravida, aliquet purus vel, congue tellus. Quisque auctor venenatis aliquet. 
      Pellentesque viverra mi non lobortis semper. Integer nibh dolor, aliquam a consectetur tempus, auctor at risus. Vestibulum 
      pulvinar rhoncus varius. Mauris maximus gravida ligula. Donec ut congue lacus, ut lacinia nulla.</p>

      <p className={styles.paragrafo}>Vestibulum gravida, est in consequat volutpat, enim nunc vestibulum tellus, nec consectetur enim orci ac dolor. Nam cursus nunc et 
      pulvinar tincidunt. Integer in venenatis justo. Sed feugiat sem nisl, vel mollis lectus luctus sit amet. Pellentesque et laoreet libero, 
      eu lacinia lorem. Curabitur vel mauris sem. Aenean finibus nibh ante, sed auctor magna sodales sed. Sed eu venenatis odio, non mollis mi. 
      Ut elementum sapien sapien, ut gravida dolor tempor id. Etiam odio risus, ultrices eget quam ut, pulvinar viverra dolor. Donec ut mi 
      imperdiet, consectetur sapien at, maximus justo. Nam at massa at tellus ultricies vehicula ut ut neque. Pellentesque ut est tortor. 
      Praesent malesuada sapien sed nunc ornare, ac semper lectus maximus.</p>
    </PostModel>
  )
}
