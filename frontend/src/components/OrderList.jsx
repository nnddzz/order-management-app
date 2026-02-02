import React, {useState} from "react";

const OrderList = () => {

  const [customer, setCustomer] = useState("");
  const [total, setTotal] = useState("");

  const [orders, setOrders] = useState([
    {id:1, customer:"Budi", total:50000},
    {id:2, customer:"Andi", total:75000},
  ]);

  const addOrder = () => {
    if (!customer.trim()) {
    alert("Nama customer wajib diisi");
    return;
    }

    if (isNaN(total) || Number(total) <= 0) {
    alert("Total harus berupa angka lebih dari 0");
    return;
    }
    
    const newOrder = {
      id:Date.now(),
      customer,
      total: Number(total),
    };
    setOrders([...orders, newOrder]);

    // reset form
    setCustomer("");
    setTotal("");
  };

  const deleteOrder = (id) => {
    const filteredOrders = orders.filter(order => order.id !== id);
    setOrders(filteredOrders)
  };

  return(
    <div>
      <h2>Order List</h2>
      
      <div style={{ marginBottom: "10px" }}>
        <input
        type="text"
        placeholder="Customer Name"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
        />        

        <input
          type="number"
          placeholder="Total"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
      </div>

      <button onClick={addOrder} style={{marginBottom:"10px"}}>Add Order</button>          
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.customer} - Rp. {order.total}
            <button onClick={()=>deleteOrder(order.id)}>Delete Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
