import React, { useEffect, useState } from 'react';

const OrdersDetails = ({n, handleDelete}) => {
    const { title, img, serviceName, service, price, _id, status } = n;
    const [orderService, setOrderService] = useState({})
    
    useEffect(()=>{
        fetch(`http://localhost:5001/services/${service}`)
        .then(res => res.json())
        .then()
    },[service])

    
    
    return (
        <tr>
        <th>
          <label>
            <button onClick={()=> handleDelete(_id)} className="btn btn-ghost">X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-100 h-90">
              {
                  orderService?.img && 
                  <img src={orderService.img} alt="" />
              }
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">{}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br />
          <span className="badge badge-ghost badge-sm">${price}</span>
        </td>
        <th>
          <button
        //   onClick={()=>handleStatusUpdate(_id)}
           className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
        </th>
      </tr>
    );
};

export default OrdersDetails;