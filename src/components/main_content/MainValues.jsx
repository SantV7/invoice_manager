import { useState } from 'react'
import styles from '../main_content/mainValues.module.css'


const MainValues = () => {
    const [bankBalance, setBankBalance] = useState(0)





  return (
     <>
     <main id={styles.main_value_area}>
        <section className={styles.bank_balance}>
            <h3 className={styles.bank_balance_state}>Saldo: {bankBalance}</h3>
            <button id={styles.add_bank_balance_value}>Adicionar saldo</button>
        </section>

     </main>
     </>
  )
}

export default MainValues