import React from 'react'
import s from './AvatarSection.module.css'
import surikena from './icon/surikena.png'
import tochka from './icon/tochka.png'
import zagagulina from './icon/zagagulina.png'
import krest from './icon/krest.png'
import kvadrat from './icon/kvadrat.png'


const AvatarSection = (props) =>{
  return <div>
    <div className={s.container}>
      <div className={s.img}>JS</div>
      <div className={s.description}>
        <div className={s.present}>
          <h3 >Avatar</h3>
          <p>jpg or png with size<br/>750x750 pixel, less 2 MB.</p>
        </div>
        <div className={s.future}>
          <h3>Download New</h3>
          <p>my-photo.png (1.1 MB)</p>
        </div>
      </div>
      <img src={surikena} className={s.surikena} alt=''/>
      <img src={tochka} className={s.tochka}  alt=''/>
      <img src={zagagulina} className={s.zagagulina} alt=''/>
      <img src={krest}  className={s.krest}alt=''/>
      <img src={kvadrat} className={s.kvadrat} alt=''/>

    </div>
  </div>
}

export default AvatarSection
