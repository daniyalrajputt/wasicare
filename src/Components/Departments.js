import React from 'react'
import { imagesData } from '../dummyData';

function DepartmentList() {
    return (
        <div className="col-lg-3 col-md-6 text-center">
            <div className="service-items service-items-style-02">
                <div className="service-img">
                    <img className="img-fluid" src={imagesData.departments01} alt="" />
                </div>
                <div className="service-content">
                    <span>Health</span>
                    <h5><a href="#!">Sexual health</a></h5>
                    <a className="icon-btn" href="#!"><i className="fas fa-plus"></i></a>
                </div>
            </div>
        </div>
    )
}

export default DepartmentList;