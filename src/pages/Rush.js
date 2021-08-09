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
                <h2 class="rush-sub">Interested in rushing KTP this fall? Follow these easy steps:</h2>
                <br/>
                <h2>1. Fill out our <strong><a class="fb-group-link" target="_blank" href='https://forms.gle/rj89gU4B2DbgG8iM6'>Interest Form</a></strong></h2>
                <h2>2. Join our <strong><a class="fb-group-link" target="_blank" href='https://www.facebook.com/groups/838024823748330/'>Fall 2021 Rush Group</a></strong> on Facebook!
                </h2>
            </div>
            <Footer />            
        </div>
    )
}
