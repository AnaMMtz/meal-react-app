import React, {useState} from 'react';
import Header from 'components/Layout/header';
// import image from '../src/assets/dinner.jpeg';
import Message from 'components/message';
import Modal from 'components/modal/Modal';
import Cart from 'components/cart/Cart';
import CartProvider from 'store/CartProvider';

function App() {

  const [isOpen, setIsOpen ] = useState(false);

  const open = () => {
    setIsOpen(true);
  }

  const close = () => {
    setIsOpen(false)
  }

  return (
    <CartProvider>
      <Header open={open} onClose={close}/>
      <Message onClose={close}/>
      {isOpen && <Modal onClose={close} />}
      {/* <Modal open={isOpen} onClose={close} /> */}
    </CartProvider>
  );
}

export default App;
