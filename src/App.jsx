import { useState } from 'react';
import './global.css';
import Header from './components/header/Header';
import MainValues from './components/main_content/MainValues';
import Footer from './components/footer/Footer';

function App() {
  const [eyeState, setEyeState] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [addMoneyOpen, setAddMoneyOpen] = useState(false);

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
    setHistoryOpen(false);
    setAddMoneyOpen(false);
  };

  const toggleHistory = () => {
    setHistoryOpen(!historyOpen);
    setProfileOpen(false);
    setAddMoneyOpen(false);
  };

  const toggleAddMoney = () => {
    setAddMoneyOpen(!addMoneyOpen);
    setProfileOpen(false);
    setHistoryOpen(false);
  };

  return (
    <>
      <Header 
        eyeState={eyeState}
        setEyeState={setEyeState}
        profileState={profileOpen}  
        setProfileState={toggleProfile} 
        historyInvoice={historyOpen}
        setHistoryInvoice={toggleHistory}
      />
      <MainValues 
        eyeState={eyeState} 
        addMoney={addMoneyOpen} 
        setAddMoney={setAddMoneyOpen} 
      />
      <Footer 
        profileLink={toggleProfile} 
        moreInvoices={toggleAddMoney} 
        historyInvoices={toggleHistory}
      />
    </>
  );
}

export default App;