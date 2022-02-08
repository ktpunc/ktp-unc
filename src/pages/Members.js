import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer'
import '../components/css/Home.css';
import data from "../assets/headshots/headshots"

export default function Members() {
    let divs = [];
    data.forEach((obj) => {
        let name = obj.name;
        let image = obj.photo;
        let role = obj.role;
        let major = obj.major;
        let year = obj.class;
        let hometown = obj.hometown;

        if (role == "President" || role == "Senior Vice President") {
            divs.push(<div className="member-card col-lg-5 col-md-12">
            <h5 className="role"><strong>{role}</strong></h5>
            <div className="member-image"><img src={image} alt={name}/></div>
            <h5>{name}</h5>
            <h6>{major}</h6>
            <h6>{year}</h6>
            <h6>{hometown}</h6>
            </div>);
        } else {
            divs.push(<div className="member-card col-lg-3 col-md-12">
            <h5>{role}</h5>
            <div className="member-image"><img src={image} alt={name}/></div>
            <h5>{name}</h5>
            <h6>{major}</h6>
            <h6>{year}</h6>
            <h6>{hometown}</h6>
            </div>);
        }
       
    })

    
    return (
        <div>
            <Header />
            <div className="members">
                <h1><span>Meet the Execu</span>tive Board</h1>
                <div className="members-container row">{divs}</div>
            </div>
            <br/>
            <Footer />            
        </div>
    )
}
