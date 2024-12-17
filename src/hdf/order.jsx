function order(props) {
  return (
    <div className="order">
      <p>
        We're open from {props.openHour}:00 to {props.closeHour}:00. Come visit
        us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default order;
