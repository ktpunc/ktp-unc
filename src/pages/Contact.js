import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer'
import '../components/css/Home.css';

export default function Contact() {
    return (
        <div>
            <Header />
            <div className="contact">
                <h1><span>Contact</span></h1>
                <h2>Please contact us if you have questions or concerns!
                </h2>
                <br/>
                <h5>Email:</h5>
                
                <h5 className="contact-info"> <span>uncktp@gmail.com</span></h5>
                <br/>
     
            </div>
            <Footer />            
        </div>
    )
}
