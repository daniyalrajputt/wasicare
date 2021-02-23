import React from 'react'
import { imagesData } from '../dummyData';

function BlogPost() {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="blog-post blog-post-01">
                <div className="blog-post-image mb-4">
                    <img className="img-fluid" src={imagesData.blog01} alt="" />
                </div>
                <div className="blog-post-content py-0">
                    <div className="blog-post-details">
                        <h6 className="blog-post-title"><a href="blog-detail.html">Coronavirus Disease 2020</a></h6>
                        <div className="blog-post-meta">
                            <div className="blog-post-author">
                                <span> By <a href="#"> <img className="img-fluid" src={imagesData.avatar01} alt="" />Alice Williams</a></span>
                            </div>
                            <div className="blog-post-time">
                                <a href="#"><i className="far fa-clock text-primary"></i>25 Jan 2020</a>
                            </div>
                        </div>
                        <div className="blog-post-description">
                            <p>There’s nothing in this story to make us think he was dreaming about riches, vast or otherwise.</p>
                            <a href="blog-detail.html" className="btn btn-link mb-2">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost;