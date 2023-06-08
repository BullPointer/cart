/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';

export default function BoxExtra({ show, handleShow, msg1, msg2 }) {

  return (
    <div className="box">
      <div onClick={() => handleShow(msg1)} className="title">
        {msg1} 
        <Icon icon="bxs:down-arrow" />
      </div>
      <div className={`content ${show(msg1)}`}>
        <label htmlFor="">{msg2}</label>
        <div className="input-content">
          <input 
            placeholder={msg2}
            type="text" 
            name="coupon" 
          />
          <div className="extra-btn">Apply Coupon</div>
        </div>
      </div>
    </div>
  );
}
