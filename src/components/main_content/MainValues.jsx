import { useState } from 'react'
import styles from '../main_content/mainValues.module.css'
import { IoMdClose } from "react-icons/io";

const MainValues = ({ eyeState }) => {
    const [bankBalance, setBankBalance] = useState(0)
    const [addMoney, setAddMoney] = useState(false)
    const [getMoney, setGetMoney] = useState(false)
    const [tempAmount, setTempAmount] = useState("")
    const [history, setHistory] = useState([])

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

    const closeGetMoney = () => {
        setGetMoney(false)
        setTempAmount('')
    }

    const addToHistory = (type, value) => {
        const newEntry = {
            id: Date.now(),
            type: type,
            value: value,
            date: new Date().toLocaleString('pt-BR')
        }
        setHistory([newEntry, ...history])
    }

    function confirmAdd() {
        const value = parseFloat(tempAmount.replace(',', '.'))
        if (!isNaN(value) && value > 0) {
            setBankBalance(bankBalance + value)
            addToHistory('+Saldo', value)
            closeAddMoney()
        }
    }

    function confirmWithdraw() {
        const value = parseFloat(tempAmount.replace(',', '.'))
        if (!isNaN(value) && value > 0) {
            if (value <= bankBalance) {
                setBankBalance(bankBalance - value)
                addToHistory('Saque de', value)
                closeGetMoney()
            } else {
                alert("Saldo insuficiente!")
            }
        }
    }

    return (
        <>
            <main id={styles.main_value_area}>
                <section className={styles.bank_balance}>
                    <h3 className={styles.bank_balance_state}>
                        Saldo: {eyeState 
                            ? `R$ ${bankBalance.toFixed(2).replace('.', ',')}` 
                            : 'R$ ••••••'}
                    </h3>
                    <div className={styles.transference_cash}>
                        <button onClick={() => addMoneyFunction()} className={styles.bank_balance_value}>Adicionar saldo</button>
                        <button onClick={() => getMoneyFunction()} className={styles.bank_balance_value}>Sacar saldo</button>
                    </div>
                </section>

                {addMoney && (
                    <div className={styles.area_add_value}>
                        <header id={styles.header_add_value}>
                            <div></div>
                            <IoMdClose style={{ cursor: 'pointer' }} onClick={() => closeAddMoney()} size={37} color="red" />
                        </header>
                        <div>
                            <label htmlFor="">Valor a ser adicionado:</label>
                            <input
                                value={tempAmount}
                                onChange={(e) => setTempAmount(e.target.value)}
                                type="text"
                                placeholder="0,00"
                            />
                            <button onClick={confirmAdd}>Confirmar Depósito</button>
                        </div>
                    </div>
                )}

                {getMoney && (
                    <div className={styles.area_add_value}>
                        <header id={styles.header_add_value}>
                            <div></div>
                            <IoMdClose style={{ cursor: 'pointer' }} onClick={() => closeGetMoney()} size={37} color="red" />
                        </header>
                        <div>
                            <label htmlFor="saque">Valor a ser sacado:</label>
                            <input
                                value={tempAmount}
                                onChange={(e) => setTempAmount(e.target.value)}
                                type="text"
                                id='saque'
                                placeholder="0,00"
                            />
                            <button onClick={confirmWithdraw}>Confirmar Saque</button>
                        </div>
                    </div>
                )}

                <section className={styles.history_section}>
                    <h4>Histórico de Transações</h4>
                    <ul className={styles.history_list}>
                        {history.length > 0 ? (
                            history.map((item) => (
                                <li key={item.id} className={styles.history_item}>
                                    <span className={item.type === 'Saque de' ? styles.type_withdraw : styles.type_add}>
                                        {item.type}
                                    </span>
                                    <span>
                                        {eyeState 
                                            ? `R$ ${item.value.toFixed(2).replace('.', ',')}` 
                                            : 'R$ ***'}
                                    </span>
                                    <small>{item.date}</small>
                                </li>
                            ))
                        ) : (
                            <p>Nenhuma transação realizada.</p>
                        )}
                    </ul>
                </section>
            </main>
        </>
    )
}

export default MainValues;