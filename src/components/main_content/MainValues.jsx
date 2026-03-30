import { useState } from 'react'
import styles from '../main_content/mainValues.module.css'


const MainValues = () => {
    const [bankBalance, setBankBalance] = useState(0)





  return (
     <>
     <main id={styles.main_value_area}>
        <section className={styles.bank_balance}>
            <h3 className={styles.bank_balance_state}>Saldo: R$ {bankBalance.toFixed(2).replace('.', ',')}</h3>
            <div className={styles.transference_cash}>
                <button className={styles.bank_balance_value}>Adicionar saldo</button>
                <button className={styles.bank_balance_value}>Sacar saldo</button>
            </div>
        </section>

     </main>
     </>
  )
}

export default MainValues