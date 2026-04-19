import { useEffect, useState, useRef } from 'react'
import styles from '../main_content/mainValues.module.css'
import { IoMdClose } from "react-icons/io";
import gsap from 'gsap';

const MainValues = ({ eyeState }) => {
    const [bankBalance, setBankBalance] = useState(0)
    const [addMoney, setAddMoney] = useState(false)
    const [getMoney, setGetMoney] = useState(false)
    const [tempAmount, setTempAmount] = useState("")
    const [history, setHistory] = useState([])

    const addMoneyRef = useRef(null)
    const getMoneyRef = useRef(null)

    const addMoneyFunction = () => {
        if (!addMoney) {
            setAddMoney(true)
            setGetMoney(false)
        }
    }

    const getMoneyFunction = () => {
        if (!getMoney) {
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
                addToHistory('Saque de R$', value)
                closeGetMoney()
            } else {
                alert("Saldo insuficiente!")
            }
        }
    }

    useEffect(() => {
        if (addMoney && addMoneyRef.current) {
            gsap.fromTo(addMoneyRef.current, 
                { opacity: 0, y: 80 }, 
                {
                 duration: 0.8,
                 opacity: 1,
                 y: 0,
                 ease: 'power2'
                }
            );
        }
    }, [addMoney]);


    useEffect(() => {
        if (getMoney && getMoneyRef.current) {
            gsap.fromTo(getMoneyRef.current, 
                { opacity: 0, y: 80 }, 
                { duration: 0.8, opacity: 1, y: 0, ease: 'power3.out' }
            );
        }
    }, [getMoney]);


  const [showTimer, setShowTimer] = useState('')
  const [dayInfo, setDayInfo] = useState('')



  useEffect(() => {
   const dayWeek = {
    0: 'Domingo',
    1: 'Segunda',
    2: 'Terça',
    3: 'Quarta',
    4: 'Quinta',
    5: 'Sexta',
    6: 'Sábado',
  }
    const now = new Date()
    const dayNow = dayWeek[now.getDay()]
    setDayInfo(dayNow)
  }, [])

useEffect(() => {
  function updateTime() {
    const timeGetter = new Date()
    const hours = timeGetter.getHours()
    const minutes = timeGetter.getMinutes()
    setShowTimer(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}h`)
  }

  const intervalTimer = setInterval(() => {
    updateTime()
  }, 1000);

  return () => clearInterval(intervalTimer)
}, [])



    
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
                        <button onClick={addMoneyFunction} className={styles.bank_balance_value}>Adicionar saldo</button>
                        <button onClick={getMoneyFunction} className={styles.bank_balance_value}>Sacar saldo</button>
                    </div>
                </section>

                {addMoney && (
                    <div ref={addMoneyRef} className={styles.area_add_value}>
                        <header id={styles.header_add_value}>
                            <div></div>
                            <IoMdClose style={{ cursor: 'pointer' }} onClick={closeAddMoney} size={37} color="red" />
                        </header>
                        <div>
                            <label>Valor a ser adicionado:</label>
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
                    <div ref={getMoneyRef} className={styles.area_add_value}>
                        <header id={styles.header_add_value}>
                            <div></div>
                            <IoMdClose style={{ cursor: 'pointer' }} onClick={closeGetMoney} size={37} color="red" />
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
                                            : 'R$ ****'}
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

            <section id='area_timer' >
               <p>{showTimer}</p>
               <div>{dayInfo}</div>
            </section>         
        </>
    )
}

export default MainValues;