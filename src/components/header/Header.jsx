import { LiaUserSecretSolid } from "react-icons/lia";
import { FaRegEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import styles from '../header/header.module.css' 
import { useState } from "react";


const Header = () => {
  const [profileState, setProfileState] = useState(false)




    const [eyeState, setEyeState] = useState(true)
  return (
    <>
      <header className={styles.headerAcc}>
        <div onClick={() => setProfileState(!profileState)} className={styles.icon_user}>
            <LiaUserSecretSolid color="lightgray" size={50}/>
        </div>

        {
          profileState
          ? <div id={styles.area_profile}>
              <label className={styles.label_data_profile} htmlFor="name_user">Nome de usuário</label>
              <input className={styles.data_user} type="text" placeholder="Digite o nome de usuário"/>
              <br />

              <label className={styles.label_data_profile} htmlFor="number_tell">Numero de telefone</label>
              <input className={styles.data_user} type="number" name="number_tell" id="number_tell" placeholder="(00)00000-0000"/>
            </div>
          : ''
        }

        <div className={styles.icon_usage}>
            <div onClick={() => setEyeState(!eyeState)} className="eyeReveal">
                {
                    eyeState
                    ? <FaRegEye className={styles.icons_hover} size={28} />
                    : <FaEyeLowVision className={styles.icons_hover} size={28}/>
                }
            </div>
            
            <div className="reloadResults">
                <FaHistory className={styles.icons_hover} size={26} />
            </div>
        </div>
      </header>    
    </>
  )
}

export default Header