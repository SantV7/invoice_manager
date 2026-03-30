import { useState } from 'react'
import styles from '../main_content/mainValues.module.css'
import { IoMdClose } from "react-icons/io";

const MainValues = () => {
    const [bankBalance, setBankBalance] = useState(0)
    const [addMoney, setAddMoney] = useState(false)
    const [getMoney, setGetMoney] = useState(false)
    const [tempAmount, setTempAmount] = useState("")

    const addMoneyFunction = () => {
        if (addMoney === false) {
            setAddMoney(true)
            setGetMoney(false)
        }
    }

    const getMoneyFunction = () => {
        if (getMoney === false) {
            setGetMoney(true)
            setAddMoney(false)
        }
    }

    const closeAddMoney = () => {
        setAddMoney(false)
        setTempAmount('')
    }

    function addValueBank(e) {
        setTempAmount(e.target.value)
    }

    const handleConfirmAdd = () => {
        const value = parseFloat(tempAmount.replace(',', '.'))
        if (!isNaN(value) && value > 0) {
            setBankBalance(prev => prev + value)
            closeAddMoney()
        }
    }

    return (
        <>
            <main id={styles.main_value_area}>
                <section className={styles.bank_balance}>
                    <h3 className={styles.bank_balance_state}>
                        Saldo: R$ {bankBalance.toFixed(2).replace('.', ',')}
                    </h3>
                    <div className={styles.transference_cash}>
                        <button onClick={addMoneyFunction} className={styles.bank_balance_value}>
                            Adicionar saldo
                        </button>
                        <button onClick={getMoneyFunction} className={styles.bank_balance_value}>
                            Sacar saldo
                        </button>
                    </div>
                </section>

                {addMoney && (
                    <div className={styles.area_add_value}>
                        <header id={styles.header_add_value}>
                            <div></div>
                            <IoMdClose 
                                style={{ cursor: 'pointer' }} 
                                onClick={closeAddMoney} 
                                size={37} 
                                color="red" 
                            />
                        </header>

                        <div>
                            <label>Valor a ser adicionado:</label>
                            <input 
                                value={tempAmount} 
                                onChange={addValueBank} 
                                type="text" 
                            />
                            <button onClick={handleConfirmAdd}>Confirmar</button>
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}

export default MainValues