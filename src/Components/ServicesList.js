import React from "react";

function ServicesList({ service }) {
  return (
    <div className="col-md-4 mb-5">
      <div className="feature-items pr-lg-5">
        <div className="feature-icon">
          <i className={service?.icon || "flaticon-ambulance"}></i>
        </div>
        <div className="feature-content">
          <h6>{service?.title || "Fast Ambulance"}</h6>
          <p className="mb-0">
            {service?.description ||
              "Focus is having the unwavering attention to complete what you set out to do."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesList;
