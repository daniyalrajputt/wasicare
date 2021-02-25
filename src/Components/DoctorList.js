import React from 'react'
import { imagesData } from '../dummyData';

function DoctorList({ contact, email, name, image, title }) {
    return (
        <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
            <div className="team team-style-02">
                <div className="team-image">
                    <img className="img-fluid b-radius-bottom-none" src={imagesData[`team0${parseInt(image)}`]} alt="" />
                </div>
                <div className="team-detail b-radius-top-none">
                    <span className="team-label">{title || "Cardiologist"}</span>
                    <h4 className="team-title"><a>{name || "Dr.Felica Queen"}</a></h4>
                    <span className="team-phone">{contact || "+(704) 279-124"}9</span>
                    <span className="team-email">{email || "letstalk@medileaf.com"}</span>
                </div>
                <a className="icon-btn" href="#"><i className="fas fa-plus"></i></a>
            </div>
        </div>
    )
}

export default DoctorList;