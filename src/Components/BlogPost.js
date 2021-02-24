import React from 'react'
import { imagesData } from '../dummyData';

function BlogPost({ image, matter, name, department }) {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="blog-post blog-post-01">
                <div className="blog-post-image mb-4">
                    <img className="img-fluid" src={imagesData[`blog0${parseInt(image)}`]} alt="" />
                </div>
                <div className="blog-post-content py-0">
                    <div className="blog-post-details">
                        <h6 className="blog-post-title"><a>{department || "Coronavirus Disease 2020"}</a></h6>
                        <div className="blog-post-meta">
                            <div className="blog-post-author">
                                <span> By <a href="#"> <img className="img-fluid" src={imagesData.avatar01} alt="" />{name || "Alice Williams"}</a></span>
                            </div>
                            <div className="blog-post-time">
                                <a href="#"><i className="far fa-clock text-primary"></i>25 Jan 2020</a>
                            </div>
                        </div>
                        <div className="blog-post-description">
                            <p>{matter || `There’s nothing in this story to make us think he was dreaming about riches, vast or otherwise.`}</p>
                            <a className="btn btn-link mb-2">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost;