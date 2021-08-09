import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer'
import '../components/css/Home.css';
import oldwellLight from '../logos/final-light-oldwell-logo.svg';


export default function About() {
    return (
        <div>
            <Header />
            <div className="about-container">
                <div className="row about-1">
                    <div className='col-lg-7 col-sm-12'>
                        <h1><span>About Kappa The</span>ta Pi</h1>
                        <p>Kappa Theta Pi is UNC’s first co-ed professional technology fraternity focused on the professional, social and technical development of our members. We believe that networking is far more than just professionalism — it’s a process built on friendship, trust, and brotherhood.

    We will be opening applications to be a part of our Alpha Class at the UNC chapter in January of 2021. If you want to be part of the first-ever pledge class and the UNC KTP legacy, then make sure to apply!

    Check out the other parts of the website to learn more about our founders, our upcoming rush process, and more!</p>
                    </div>
                    <div className='oldwell-light col-lg-5 col-sm-12' >
                        <div className="image-container"><img src={oldwellLight} alt='oldwell-light'/></div>
                    </div>
                    
                </div>
                
                <div className="about-2">
                    <h1>Pi<span>lla</span>rs</h1>
                    <div className="pillar-grid row">
                        <div className="whoWeAre-1 col-lg-12 col-md-12"><h2>What makes us <strong>who we are.</strong></h2></div>
                        <div className="pillar col-xl-3 col-lg-4 col-md-12">
                            <h5>Professional Development</h5>
                            <p>Through events like interview training, resume building, one-on-one mentorship, private company recruiting, and more, Kappa Theta Pi Professional Development aims to prepare members for success in any technology-related career. We take pride in developing the tech leaders of the future.</p>
                        </div>
                        <div className="whoWeAre-2 col-lg-4 col-xl-3"><h2>What makes us <strong>who we are.</strong></h2></div>
                        <div className="pillar col-xl-3 col-lg-4 col-md-12">
                            <h5>Alumni Connections</h5>
                            <p>Our alumni are spread out across the world and work on cutting-edge technologies. They work at a plethora of companies - from tech companies like Microsoft, Amazon, Facebook, Apple, and Google, to startups, consulting firms, financial technology firms, and more!</p>
                        </div>
                        <div className="pillar col-xl-3 col-lg-4 col-md-12">
                            <h5>Social Growth</h5>
                            <p>The people you meet in Kappa Theta Pi will go on to be some of your closest friends throughout college and beyond. We host a variety of exclusive social events throughout the semester through which our members can bond, some of which include formal, tailgates, bowling, and apple picking.</p>
                        </div>
                        <div className="pillar col-xl-3 col-lg-4 col-md-12">
                            <h5>Technical Advancement</h5>
                            <p>Kappa Theta Pi provides members numerous opportunities to enhance their current technical skills, as well as learn new ones. Whether it be participation in one of our various project teams or attending a technical workshop, we make it easy for our members to expand their expertise.</p>
                        </div>
                        <div className="pillar col-xl-3 col-lg-4 col-md-12">
                            <h5>Academic Support</h5>
                            <p>Kappa Theta Pi brothers strive to foster academic growth and excellence for each other. We provide a supportive network filled with some of the brightest tech minds at the university that members can always rely on for help in classes and extracurricular activities.</p>
                        </div>
                        <div className="circle"></div>
                    </div>
                    
                </div>
            </div>
            <Footer />            
        </div>
    )
}
