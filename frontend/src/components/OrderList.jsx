const OrderList = () => {
  const orders = [
    {id:1, customer:"Budi", total:50000},
    {id:2, customer:"Andi", total:75000}
  ];

  return(
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.customer} - Rp. {order.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
