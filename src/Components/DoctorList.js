import React from 'react'
import { imagesData } from '../dummyData';

function DoctorList() {
    return (
        <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
            <div className="team team-style-02">
                <div className="team-image">
                    <img className="img-fluid b-radius-bottom-none" src={imagesData.team01} alt="" />
                </div>
                <div className="team-detail b-radius-top-none">
                    <span className="team-label">Cardiologist</span>
                    <h4 className="team-title"><a href="team-single.html">Dr.Felica Queen</a></h4>
                    <span className="team-phone">+(704) 279-1249</span>
                    <span className="team-email">letstalk@medileaf.com</span>
                </div>
                <a className="icon-btn" href="#"><i className="fas fa-plus"></i></a>
            </div>
        </div>
    )
}

export default DoctorList;