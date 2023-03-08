import React, {useState} from 'react';
import Header from 'components/Layout/header';
// import image from '../src/assets/dinner.jpeg';
import Message from 'components/message';
import Modal from 'components/modal/Modal';

function App() {

  const [isOpen, setIsOpen ] = useState(false);

  const open = () => {
    setIsOpen(true);
  }

  const close = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Header open={open}/>
      <Message />
      <Modal open={isOpen} onClose={close} />
    </>
  );
}

export default App;
