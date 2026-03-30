import { useState } from 'react'
import styles from '../header/historyInvoice.module.css'
import { IoMdClose } from "react-icons/io";

const HistoryInvoice = ({showHistory}) => {
  const [listInvoice] = useState([
    'Fatura Jan : 723,53',
    'Fatura Fev : 723,53'
  ])


  const closeInvoice = () => {
    showHistory(false)
  }


  return (
    <>
      <section className={styles.sect_invoices}>
        <header className={styles.invoice_title}>
          <span>Faturas</span>
          <IoMdClose onClick={() => closeInvoice()} id={styles.invoice_close} size={31} color="red"/>
        </header>
        

        <div className={styles.area_btn}>
          <button className={styles.add_invoice}>
            Adicionar fatura
          </button>
        </div>

 

        <div>
          <ul className={styles.ul_item}>
            {
              listInvoice.map((itemInvoice, indexInvoice) => (
                <li className={styles.invoice_list} key={indexInvoice}>{itemInvoice}</li>
              ))
            }
          </ul>
        </div>
      </section>
    
    </>
  )
}

export default HistoryInvoice