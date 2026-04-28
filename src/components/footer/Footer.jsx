import React from 'react';
import styles from './footer.module.css';
import { CgProfile } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { MdRestorePage } from "react-icons/md";

const Footer = ({ profileLink, moreInvoices, historyInvoices }) => {
  return (
    <footer className={styles.footerShortcuts}>
      <CgProfile 
        onClick={profileLink} 
        className={styles.icons_shortcuts} 
        size={35} 
      />

      <IoMdAdd 
        onClick={moreInvoices} 
        className={styles.icons_shortcuts} 
        size={35} 
      />
      
      <MdRestorePage 
        onClick={historyInvoices} 
        className={styles.icons_shortcuts} 
        size={35} 
      />
    </footer>
  );
}

export default Footer;