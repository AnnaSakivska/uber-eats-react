import React from "react";
import "./Delivery-terms.css";

export default function DeliveryTerms() {
  return (
    <div className="Delivery-terms">
      <label className="delivery-terms__form">
        <input
          className="delivery-terms__time-settings"
          placeholder="ASAP"
          type="text"
        />
      </label>
      <h3 className="delivery-terms__description">to</h3>
      <label className="delivery-terms__location">
        <input
          className="delivery-terms__address"
          placeholder=" ul. Tarasivska St, 16 "
          type="text"
        />
      </label>
    </div>
  );
}
