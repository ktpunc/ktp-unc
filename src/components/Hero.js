import React from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import laptopLight from '../logos/laptop-light.svg'
import './css/Hero.css'
import { useHistory } from 'react-router-dom';




export default function Hero() {
    const history = useHistory();
    function clickHandler() {
        history.push('/about');
    }

    return (
        <div>
            <Jumbotron>
                <div className="row">
                    <div className="col-md-6 col-sm-12  title">
                        <h1>KAPPA THETA PI</h1>
                        <h2>Professional Technology Fraternity</h2>
                        <h3>EST 2020</h3>
                        <Button type="button" className="btn-first btn-lg btn-primary" onClick={clickHandler}>About</Button>
                    </div>
                    <div className='col-md-6 col-sm-12 laptop'><img src={laptopLight} alt='laptop-light' /></div>
                    <div className="btn-holder col-sm-12"><Button type="button" className="btn-second btn-lg btn-primary" onClick={clickHandler}>About</Button></div>
                    
                </div>
            
                
                
            </Jumbotron>
        </div>
    )
}
