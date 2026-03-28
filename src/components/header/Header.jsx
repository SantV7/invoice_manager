import { LiaUserSecretSolid } from "react-icons/lia";
import { FaRegEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import styles from '../header/header.module.css' 
import { useState } from "react";


const Header = () => {

    const [eyeState, setEyeState] = useState(true)
  return (
    <>
      <header className={styles.headerAcc}>
        <div className={styles.icon_user}>
            <LiaUserSecretSolid color="lightgray" size={50}/>
        </div>

        <div onClick={() => setEyeState(!eyeState)} className={styles.icon_usage}>
            {
                eyeState
                ? <FaRegEye className={styles.icons_hover} size={26} />
                : <FaEyeLowVision className={styles.icons_hover} size={26}/>
            }
            
            <FaHistory className={styles.icons_hover} size={26} />
        </div>
      </header>    
    </>
  )
}

export default Header