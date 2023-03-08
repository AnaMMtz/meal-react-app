import React from 'react'
import styles from './modal.module.css';

const Modal = ({open, onClose}) => {

  return (
    <>
    {open && 
    // <div className={styles.overlay}>
    <div className={styles.wrapper}>
    <div className={styles['first-card']}>
      <div className={styles.products}>
        <p>Schnitzel</p>
        <div className={styles.price}>
        <p>$16.5</p>
        <div className={styles.quantity}>x2</div>
        </div>
      </div>
      <div className={styles['btn-wrapper']}>
        <div className={styles['products-btn']}>-</div>
        <div className={styles['products-btn']}>+</div>
      </div>
    </div>
    <hr className={styles.line}/>
    <div className={styles['first-card']}>
      <h2>Total Amount</h2>
      <p>$33.00</p>
    </div>
    <div className={styles['confirm-btn']}>
      <button style={{marginRight:'1rem'}} onClick={onClose}>Close</button>
      <button >Order</button>
    </div>
    </div>

    // </div>
    }
    </>
  )
}

export default Modal