import React from 'react'
import styles from './footer.module.css'
import { CgProfile } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { MdRestorePage } from "react-icons/md";

const Footer = () => {
  return (
    <>
     <footer className={styles.footerShortcuts}>
        <CgProfile size={35}/>
        <IoMdAdd size={35}/>
        <MdRestorePage size={35}/>
     </footer>
    </>
  )
}

export default Footer