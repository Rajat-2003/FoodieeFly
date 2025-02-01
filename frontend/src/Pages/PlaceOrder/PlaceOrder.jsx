import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
   <form className='place-order'>
    <div className="place-order-left">
      <p className='title' > Delivery info</p>
      <div className='multi-fields'>
        <input type="text" placeholder='First name'/>
        <input type="text" placeholder='Last name '/>
      </div>
       <input type="Email" placeholder='Email'/>
        <input type="text" placeholder='Strret'/>
        <div className='multi-fields'>
        <input type="text" placeholder='city'/>
        <input type="text" placeholder='state '/>
      </div>
      <div className='multi-fields'>
        <input type="text" placeholder='zip code '/>
        <input type="text" placeholder='country'/>
      </div>
      <input type="text" placeholder='phone'/>

    </div>
    <div className="place-order-right">
      <div>
      
             <h2>cart totals</h2>
      
       
        <div>
            <div className="cart-total-details">
            <p>Subtotal</p>

            <p>${getTotalCartAmount()}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>
         
        </div>
         <button >Proceed to payment</button>
      </div>


    </div>
   </form>
  )
}

export default PlaceOrder