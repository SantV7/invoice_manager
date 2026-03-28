import { useState } from 'react'
import styles from '../header/historyInvoice.css'

const HistoryInvoice = () => {
  const [listInvoice] = useState([
    
  ])


  return (
    <>
      <section>
        <h1 className={styles.invoice_title} >Faturas</h1>
      </section>
    
    </>
  )
}

export default HistoryInvoice