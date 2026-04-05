import { useEffect, useRef, useState } from 'react'
import styles from '../header/historyInvoice.module.css'
import { IoMdClose } from "react-icons/io";
import gsap from 'gsap';

const HistoryInvoice = ({ showHistory }) => {

  const sectionHistory = useRef(null)
  const moreInvoicesSection = useRef(null)

  const [valuesInvoice, setValuesInvoice] = useState(new Array(12).fill(0))
  const [moreInvoice, setMoreInvoice] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState("")
  const [tempValue, setTempValue] = useState("")

  const listInvoice = [
    'Fatura Jan', 'Fatura Fev', 'Fatura Mar', 'Fatura Abr',
    'Fatura Mai', 'Fatura Jun', 'Fatura Jul', 'Fatura Ago',
    'Fatura Set', 'Fatura Out', 'Fatura Nov', 'Fatura Dez'
  ]

  const closeInvoice = () => {
    showHistory(false)
  }

  function closeAddInvoice() {
    setMoreInvoice(false)
    setSelectedMonth("")
    setTempValue("")
  }

  function handleSaveInvoice() {
    const monthIndex = parseInt(selectedMonth)
    const value = parseFloat(tempValue.replace(',', '.'))

    if (!isNaN(monthIndex) && !isNaN(value)) {
      const newValues = [...valuesInvoice]
      newValues[monthIndex] = value
      setValuesInvoice(newValues)
      closeAddInvoice()
    }
  }

  useEffect(() => {
   if(sectionHistory.current)  {
    gsap.fromTo(sectionHistory.current, {
      opacity: 0.35,
      y: 30
    }, {
      duration: 0.46,
      opacity: 1,
      ease: 'power2',
      y: 0
    })
   }

   if(moreInvoicesSection.current) {
    gsap.fromTo(moreInvoicesSection.current, {
      opacity: 0.4,
      y: -100
    }, {
      y: 0,
      duration: 0.25,
      ease: 'power1.in',
      opacity: 1
    })
   }
  }, [])



  return (
    <>
      <section ref={sectionHistory} className={styles.sect_invoices}>
        <header className={styles.invoice_title}>
          <span>Faturas</span>
          <IoMdClose onClick={() => closeInvoice()} id={styles.invoice_close} size={31} color="black" />
        </header>

        <div className={styles.area_btn}>
          <button onClick={() => setMoreInvoice(!moreInvoice)} className={styles.add_invoice}>
            + Faturas
          </button>
        </div>

        {
          moreInvoice
            ? <section ref={moreInvoicesSection.current} className={styles.more_invoice}>
              <header className={styles.header_add_invoice}>
                <div></div>
                <IoMdClose className={styles.close_add_invoice} onClick={() => closeAddInvoice()} size={31} color="red" />
              </header>

              <main className={styles.main_add_invoice}>
                <div className="month_invoice_area">
                  <label className={styles.label_invoices} htmlFor="mesFatura">Mês da fatura</label>
                  <select 
                    className={styles.inputs_invoice} 
                    value={selectedMonth} 
                    onChange={(e) => setSelectedMonth(e.target.value)} 
                    name="mesFatura" 
                    id="mesFatura"
                  >
                    <option value="" disabled>Mês</option>
                    <option value="0">Janeiro</option>
                    <option value="1">Fevereiro</option>
                    <option value="2">Março</option>
                    <option value="3">Abril</option>
                    <option value="4">Maio</option>
                    <option value="5">Junho</option>
                    <option value="6">Julho</option>
                    <option value="7">Agosto</option>
                    <option value="8">Setembro</option>
                    <option value="9">Outubro</option>
                    <option value="10">Novembro</option>
                    <option value="11">Dezembro</option>
                  </select>
                </div>

                <div className='value_invoice_area'>
                  <label className={styles.label_invoices} htmlFor="value_invoice">Valor da fatura</label>
                  <input 
                    id='value_invoice' 
                    className={styles.inputs_invoice} 
                    type="text" 
                    placeholder="0,00"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                  />
                </div>
              </main>

              <button onClick={handleSaveInvoice} className={styles.btn_save_invoice}>Adicionar nova Fatura</button>
            </section>
            : ''
        }

        <div>
          <ul className={styles.ul_item}>
            {
              listInvoice.map((itemInvoice, indexInvoice) => (
                <li className={styles.invoice_list} key={indexInvoice}>
                  {itemInvoice}: R$ {valuesInvoice[indexInvoice].toFixed(2).replace('.', ',')}
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default HistoryInvoice