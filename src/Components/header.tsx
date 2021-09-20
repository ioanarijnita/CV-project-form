import { Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';
import cv from '../assets/cv.png';
export function Header(){

    const [nume, setNume] = useState('Start now!');
    
    return(
        <div className ="header">
            <div > 
                <Tabs>
                    <img style ={{width: 110, height: 100}} src={cv} />
                    <div style ={{flexWrap: 'wrap'}}>
                        <p>Your own CV</p>
                        <p></p>
                    </div>
                    <label style = {{position: 'fixed', top: 20, right: 100}}>{nume}</label>
                </Tabs> 
            </div>
        </div>
    );

}
