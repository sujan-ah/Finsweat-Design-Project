import React from 'react'
import './project.css'

const Project = () => {
  return (
    <section className="project">
        <div className="container">
            <div className="title">
                <h2>View our projects</h2>
                <a href="#">View More <i className="fa-solid fa-arrow-right-long"></i></a>
            </div>

            <div className="box">
                <div className="left">
                    <img src="images/projectimgleft.png" alt="projectimgleft.png"/>
                    <div className="text-box">
                        <div className="details">
                            <h2>Workhub office Webflow Webflow Design</h2>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                            <a href="#">View project <i className="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="image">
                        <img src="images/workimgright2.png" alt="workimgright.png"/>
                        <div className="text-box">
                            <div className="details">
                                <h2>Unisaas Website 
                                    Design</h2>
                                <a href="#">View portfolio <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="image">
                        <img src="images/workimgright.png" alt="workimgright.png"/>
                        <div className="text-box">
                            <div className="details">
                                <h2>Unisaas Website 
                                    Design</h2>
                                <a href="#">View portfolio <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project