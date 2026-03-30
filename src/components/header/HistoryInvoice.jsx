import {useState} from 'react'
import styles from '../header/historyInvoice.module.css'
import {IoMdClose} from "react-icons/io";

const HistoryInvoice = ({showHistory}) => {

  const [valuesInvoice] = useState([
    289.90,
    240,
    42,
    73.54,
    91.9,
    12.76,
    26.97,
    6.98
  ])

  const [listInvoice] = useState([
    'Fatura Jan ',
    'Fatura Fev ',
    'Fatura Mar ',
    'Fatura Abr ',
    'Fatura Mai ',
    'Fatura Jun ',
    'Fatura Jul ',
    'Fatura Ago ',
    'Fatura Set ',
    'Fatura Out ',
    'Fatura Nov',
    'Fatura Dez'
  ])

  const closeInvoice = () => {
    showHistory(false)
  }

  const [moreInvoice, setMoreInvoice] = useState(false)

  function closeAddInvoice() {
    setMoreInvoice(false)
  }


  return (
    <>
      <section className={styles.sect_invoices}>
        <header className={styles.invoice_title}>
          <span>Faturas</span>
          <IoMdClose onClick={() => closeInvoice()} id={styles.invoice_close} size={31} color="black"/>
        </header>


        <div className={styles.area_btn}>
          <button onClick={() => setMoreInvoice(!moreInvoice)} className={styles.add_invoice}>
            + Faturas
          </button>
        </div>

        {
          moreInvoice
          ? <section className={styles.more_invoice}>
              <header className={styles.header_add_invoice}>
                <div></div>
                <IoMdClose onClick={() => closeAddInvoice()}  size={31} color="red"/>
              </header>
          </section>
          : ''
          
        }
 

        <div>
          <ul className={styles.ul_item}>
            {
              listInvoice.map((itemInvoice, indexInvoice) => (
                <li className={styles.invoice_list} key={indexInvoice}>{itemInvoice}: R$ {(itemInvoice ? valuesInvoice[indexInvoice] || 0 : '').toFixed(2)}</li>
              ))
            }
          </ul>
        </div>
      </section>
    
    </>
  )
}

export default HistoryInvoice