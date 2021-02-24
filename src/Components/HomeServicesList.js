import React from "react";
import { imagesData } from "../dummyData";

function HomeServicesList({ service }) {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="feature-items feature-items-style-02">
        <div className="feature-icon">
          <i className={service?.icon||"flaticon-tooth"}></i>
        </div>
        <div className="feature-number">
          <span>0{service?.ind+1}</span>
        </div>
        <div className="feature-content">
          <h6>{service?.title || "Dental Specialist"}</h6>
          <p className="mb-0">
            {service?.description ||
              `Positive pleasure-oriented goals are much more powerful motivators
            than negative fear-based ones.`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeServicesList;
