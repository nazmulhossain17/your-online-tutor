import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrdersDetails from './OrdersDetails';

const Orders = () => {
    const {user, logOut} = useContext(AuthContext);
    const [order, setOrder] = useState([]);



    useEffect(()=>{
        fetch(`https://your-online-tutor-server.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('tutor-Token')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
                return logOut();
            }
            return res.json()
        })
        .then(data => {
            setOrder(data)
        })
    },[user?.email, logOut])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure want to cancel this course?');
        if(proceed){
            fetch(`https://your-online-tutor-server.vercel.app/orders/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('deleted successfull');
                    const remaining = order.filter(odr => odr._id !== id);
                    setOrder(remaining);
                }
            })
        }
        }

    return (
        <div>
            <h2>You have {order.length}</h2>
            <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                order?.map(n => <OrdersDetails
                        key={n._id}
                        n={n}
                        handleDelete={handleDelete}
                    ></OrdersDetails>
                )
            }
          </tbody>
          </table>
          </div>
        </div>
    );
};

export default Orders;

