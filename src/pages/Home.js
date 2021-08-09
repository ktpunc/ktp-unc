import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer'
import '../components/css/Home.css';

export default function Home() {
    return (
        <div>
            <Header />
            <Hero className="hero"/>
            <Footer />            
        </div>
    )
}
