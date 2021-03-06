import React from "react";
import { imagesData } from "../dummyData";

function Testimonial({ image, matter, name, department }) {
  return (
    <div className="item">
      <div className="testimonial-item">
        <div className="testimonial-avatar">
          <img
            className="img-fluid rounded-circle"
            // src={image || imagesData.avatar01}
            src={imagesData.avatar01}
            alt=""
          />
        </div>
        <div className="testimonial-content">
          {matter ||
            `I have gotten at least 50 times the value from Medileaf. I will let my
          mum know about this, she could really make use of Medileaf! Wow what
          great service, I love it! Medileaf is the real deal!`}
        </div>
        <div className="testimonial-author">
          <div className="testimonial-name">
            <div className="testimonial-quote">
              <i className="flaticon-left-quote"></i>
            </div>
            <h6 className="mb-1">{name || "Alice Williams"}</h6>
            <span>{department || "- Mother."}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
