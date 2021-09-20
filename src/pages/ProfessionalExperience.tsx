import { TextField } from '@material-ui/core';
import React, { useState } from 'react';


export function ProfessionalExperience(){

    const handleSubmit = () => {
        alert ("message");
    }

    const [professionalExperience, setProfessionalExperience] = useState({
        position: '',
        employer: '',
        city: '',
        country: '',
        days: '',
        months: '',
        years: '',
        activities: ''
    })
    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setProfessionalExperience({
            ...professionalExperience, // take the old value of the cvFields object state
            [e.target.name]: e.target.value
        } as any);
    }

    const daysArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    const monthsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const yearsArray = [];
    for (let i = 1950; i <= 2021; i++) {
        yearsArray.push(i);
    }


    
    return(
        <div> 
        <p>
            <text style = {{fontStyle: 'initial' , marginLeft: 30, fontSize: 25, fontWeight: 'bold'}}>Professional Experience</text>
            <br/><br/>
            <text style = {{fontStyle: 'initial', marginLeft: 30, fontSize: 15}}>Please mention your professional experience throughtout the years. You can describe work activities, volunteering, academical and freelancing activities! </text>
        </p>
    <form style = {{marginLeft: 50}} onSubmit = {handleSubmit}>
        <br/>
    {/* <label style = {{fontWeight: 'bold', fontSize: 20}}>Other professional experience</label> */}
    <br/>
       <div>
        <label> Position or post occupied
            <br/><br/>
    <TextField style = {{width: 300}} id = "position" label = "position name" name = "position" value = {professionalExperience.position} onChange = {handleFieldChange} ></TextField>
        </label>
    <br/><br/>

        <label> Employer
    <br/><br/>
    <TextField style = {{width: 300}} id = "employer" label = "company" name = "employer" value = {professionalExperience.employer} onChange = {handleFieldChange} />
        </label>
    <br/><br/>
    <div style = {{display: 'flex', justifyContent: 'space-between'}}>
        <label> City 
            <br/><br/>
            <TextField style = {{width: 300}} id = "city" label = "city" name = "city" value = {professionalExperience.city} onChange = {handleFieldChange}></TextField>
        </label>

        <label > Country 
            <br/><br/>
            <TextField style = {{width: 300}}id = "country" label = "country" name = "country" value = {professionalExperience.country} onChange = {handleFieldChange}></TextField>
        </label>
        <br/><br/>

        

    </div>
    </div>

    </form>

         </div>
    );
}