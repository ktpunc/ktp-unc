import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer'
import '../components/css/Home.css';

export default function Rush() {
    return (
        <div>
            <Header />
            <div className="rush">
                <h1>R<span>us</span>h</h1>
                <h2 class="rush-sub">Interested in rushing KTP?</h2>
                <br/>
                <h2>Stay up to date with us for more information about Fall 2022 Rush!</h2>
            </div>
            <Footer />            
        </div>
    )
}
