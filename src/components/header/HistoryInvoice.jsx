import { useState } from 'react'
import styles from '../header/historyInvoice.module.css'

const HistoryInvoice = () => {
  const [listInvoice] = useState([
    'Fatura Jan : 723,53',
    'Fatura Fev : 723,53'
  ])

  const [addInvoice, setAddInvoice] = useState(false)


  return (
    <>
      <section className={styles.sect_invoices}>
        <header className={styles.invoice_title}>
          <span>Faturas</span>
          <div className={styles.close_invoices}>X</div>
        </header>
        

        <button className={styles.add_invoice} onClick={() => setAddInvoice(!addInvoice)}>Adicionar fatura</button>

        {
          addInvoice
          ? <div></div>
          : ''
        }

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