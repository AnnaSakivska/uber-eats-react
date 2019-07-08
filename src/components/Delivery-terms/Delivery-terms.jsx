import React from "react";
import "./Delivery-terms.css";

export default function DeliveryTerms() {
  return (
    <div className="Delivery-terms">
      <label className="Delivery-terms__form">
        <input
          className="Delivery-terms__time-settings"
          placeholder="ASAP"
          type="text"
        />
      </label>
      <h3 className="Delivery-terms__description">to</h3>
      <label className="Delivery-terms__location">
        <input
          className="Delivery-terms__address"
          placeholder=" ul. Tarasivska St, 16 "
          type="text"
        />
      </label>
    </div>
  );
}
