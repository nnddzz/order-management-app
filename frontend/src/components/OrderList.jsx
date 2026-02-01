import React, {useState} from "react";

const OrderList = () => {
  const [orders, setOrders] = useState([
    {id:1, customer:"Budi", total:50000},
    {id:2, customer:"Andi", total:75000},
  ]);

  const addOrder = () => {
    const newOrder = {
      id:Date.now(),
      customer:"Customer Baru",
      total: 100000,
    };
    setOrders([...orders, newOrder]);
  };

  const deleteOrder = (id) => {
    const filteredOrders = orders.filter(order => order.id !== id);
    setOrders(filteredOrders)
  };

  return(
    <div>
      <h2>Order List</h2>
      <button onClick={addOrder} style={{marginBottom:"10px"}}>Tambah Order</button>
          
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.customer} - Rp. {order.total}
            <button onClick={()=>deleteOrder(order.id)}>Hapus Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
