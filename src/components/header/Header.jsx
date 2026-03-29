import { LiaUserSecretSolid } from "react-icons/lia";
import { FaRegEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import styles from '../header/header.module.css' 
import { useState } from "react";
import HistoryInvoice from "./HistoryInvoice";


const Header = () => {

  const [profileState, setProfileState] = useState(false)
  const [eyeState, setEyeState] = useState(true)
  const [phone, setPhone] = useState("")
  const [userName, setUserName] = useState('')
  const [historyInvoice, setHistoryInvoice] = useState(false)


  const verifyTelNumber = (e) => {
    let value = e.target.value

    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2")
    setPhone(value)
  }

  const [newUserName, setNewUserName] = useState('')

  function saveDataProfile () {
    setNewUserName(userName)
  }

  function closeProfile() {
    setProfileState(false)
  }

  return (
    <>
      <header className={styles.headerAcc}>
        <div onClick={() => setProfileState(!profileState)} className={styles.icon_user}>
            <LiaUserSecretSolid color="white" size={50}/>
        </div>

        <h2 className={styles.name_user_wellcome}>Olá {userName ? newUserName : 'Usuário'}</h2>

        {
          profileState
          ? <div id={styles.area_profile}>
              <header className={styles.header_profile}>
                <label className={styles.label_data_profile} htmlFor="name_user">Nome de usuário</label>
                <IoMdClose onClick={() => closeProfile()} id={styles.icon_close} size={31} color="red"/>
              </header>

              <input onChange={(e) => setUserName(e.target.value)}
               className={styles.data_user} type="text"
               placeholder="Digite o nome de usuário"
              />
              
              <label className={styles.label_data_profile} htmlFor="number_tell">Numero de telefone</label>
              <input value={phone} maxLength={15} onChange={(verifyTelNumber)} className={styles.data_user}
               type="tel"
               name="number_tell"
               id="number_tell"
               placeholder="(00) 00000-0000"
              />
              
              <button onClick={() => saveDataProfile()} className={styles.save_profile_btn}>Salvar dados</button>
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
                <FaHistory onClick={() => setHistoryInvoice(!historyInvoice)}
                 className={styles.icons_hover} size={26} 
                />
            </div>
        </div>

        {
          historyInvoice
          ? <HistoryInvoice showHistory={setHistoryInvoice} />
          : ''
        }
      </header>    
    </>
  )
}

export default Header