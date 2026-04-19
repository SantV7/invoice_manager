import { LiaUserSecretSolid } from "react-icons/lia";
import { FaRegEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import styles from '../header/header.module.css';
import { useEffect, useState } from "react";
import HistoryInvoice from "./HistoryInvoice";
import { gsap } from "gsap";

const Header = ({ eyeState, setEyeState, profileState, setProfileState, historyInvoice, setHistoryInvoice }) => {
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState('');
  const [newUserName, setNewUserName] = useState('');

  const verifyTelNumber = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    setPhone(value);
  }

  function saveDataProfile() {
    setNewUserName(userName);
  }

  useEffect(() => {
    if (profileState) {
      gsap.fromTo('.profile_gsap', 
        { y: 60, opacity: 0.5, scale: 0.9 },
        { y: 0, duration: 0.5, ease: 'power.2', opacity: 1, scale: 1 }
      );
    }
  }, [profileState]);

  return (
    <header className={styles.headerAcc}>
      <div onClick={setProfileState} className={styles.icon_user}>
        <LiaUserSecretSolid color="white" size={50} />
      </div>

      <h2 className={styles.name_user_wellcome}>
        Olá {newUserName ? newUserName : ''}
      </h2>

      {profileState && (
        <div className="profile_gsap" id={styles.area_profile}>
          <header className={styles.header_profile}>
            <label className={styles.label_data_profile}>Nome de usuário</label>
            <IoMdClose onClick={setProfileState} id={styles.icon_close} size={31} color="red" />
          </header>

          <input 
            onChange={(e) => setUserName(e.target.value)}
            className={styles.data_user} 
            type="text"
            placeholder="Digite o nome de usuário"
          />

          <label className={styles.label_data_profile}>Número de telefone</label>
          <input 
            value={phone} 
            maxLength={15} 
            onChange={verifyTelNumber} 
            className={styles.data_user}
            type="tel"
            placeholder="(00) 00000-0000"
          />

          <button onClick={saveDataProfile} className={styles.save_profile_btn}>Salvar dados</button>
        </div>
      )}

      <div className={styles.icon_usage}>
        <div onClick={() => setEyeState(!eyeState)} className="eyeReveal">
          {eyeState ? <FaRegEye className={styles.icons_hover} size={28} /> : <FaEyeLowVision className={styles.icons_hover} size={28} />}
        </div>

        <div className="reloadResults">
          <FaHistory onClick={setHistoryInvoice} className={styles.icons_hover} size={26} />
        </div>
      </div>

      {historyInvoice && <HistoryInvoice showHistory={setHistoryInvoice} />}
    </header>
  );
}

export default Header;