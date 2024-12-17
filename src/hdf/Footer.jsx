import order from "./order";
function Footer() {
  const hour = new Date().getHours;
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div className="footer">
      {isOpen ? (
        <order openHour={openHour} closeHour={closeHour} />
      ) : (
        <div>
          <p>
            we are happy to invite u in {openHour}:00 and {closeHour}:00
          </p>
        </div>
      )}
    </div>
  );
}

export default Footer;
