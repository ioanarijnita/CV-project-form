import { Button, FormControl, FormHelperText, Input, InputLabel, Select, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import React, { ChangeEvent, ReactNode, useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import moment from 'moment';

export function PersonalInformation(){
    const handleSubmit = () => {
        alert(cvFields.firstName);
    }

  
    const [cvFields, setCvFields] = useState({
        firstName: '',
        lastName:'',
        aboutMe:'',
        days: '',
        months: '',
        year: '',
        gender:'',
        contact: '',
        nationality:'',
        emailAddress:'',
        phone:'',
        socialMedia:'',
        type:'',
        addressLine:'',
        city:'',
        country:''
    })
    const daysArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    const monthsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const yearsArray = [];
   
    for (let i = 1950; i <= 2021; i++) {
        yearsArray.push(i);
    }
    type DateType = {
        days: number[],
        months: number[],
        years: number[]
    }
    const [date, setDate] = useState({
        days: daysArray,
        months: monthsArray,
        years: yearsArray
    });

    const [isAgeInRange, setisAgeInRange] = useState( false );

    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCvFields({
            ...cvFields, // take the old value of the cvFields object state
            [e.target.name]: e.target.value
        } as any);
    }

    const handleGender = (event: ChangeEvent<{ name?: string | undefined; value: unknown; }>, child: ReactNode) => {
        const gender = event.target.name as keyof typeof cvFields;
        setCvFields({
            ...cvFields,
            [gender]: event.target.value
        } as any)
    }
    function handleDateOfBirth(event: ChangeEvent<{ name?: string | undefined; value: unknown; }>, child: ReactNode) {
        const dateOfBirth = event.target.name as keyof typeof cvFields;
        setCvFields({
            ...cvFields,
            [dateOfBirth]: event.target.value
        } as any)
        const dateString = `${cvFields.year}-${cvFields.months}-${cvFields.days}`;
        console.log(moment(), 'years')
        console.log(moment().diff(moment(dateString), 'years'))
        if (moment().diff(moment(dateString), 'years') > 65 || moment().diff(moment(dateString), 'years') <= 16) {
           setisAgeInRange(true);
        }
    }
    // console.log(`${cvFields.year}-${cvFields.months}-${cvFields.days}`)
    // console.log(moment().format('YYYY-MM-DD'))
    function SelectComponent(p: {optionName: string, dateArray: DateType, value: string}){
        return (
            <div style = { {border: '0px solid black', display: 'inline'}}>
            <Select
                        native
                        value={p.value === "days" ? cvFields.days : p.value === "months" ? cvFields.months : cvFields.year}
                        onChange={handleDateOfBirth}   
                        style = {{minHeight: 30, minWidth: 100}}

                        inputProps={{
                            name: `${p.value}`,
                            id: `id-${p.value}`,
                            
                        }}
            >
                        <option value ={0}>{p.optionName}</option>
                        {
                        p.value === "days" ? p.dateArray.days.map((item) => <option value = {item}>{item}</option>) : 
                        p.value === "months" ? p.dateArray.months.map((item) => <option value = {item}>{item}</option>) :
                        p.dateArray.years.map((item) => <option value = {item}>{item}</option>)
                        }

                    </Select>
                    </div>
        );
    } 
    
  
    return(
        <div>
            <p>
        <text style = {{fontStyle: 'italic' , marginLeft: 30}}>Enter your personal information here! </text>
        </p>
        <form style ={{marginLeft:50}} onSubmit={handleSubmit}>
            <label style ={{fontSize: 20}}>Personal information</label>
            <br/>
            <div style = {{ display: 'flex', justifyContent: 'space-between'}}>
                
                    <TextField id="firstName" label ="First name" name = "firstName" value = {cvFields.firstName} onChange = {handleFieldChange} />
                    <TextField id="lastName" label = "Last name" name = "lastName" value = {cvFields.lastName} onChange = {handleFieldChange} />
                
                <br />
            </div>
            <br />
            <TextField style = {{ minWidth: 300}} variant = "outlined"  id = "aboutMe" label="about me" value={cvFields.aboutMe} name="aboutMe" onChange={handleFieldChange} />
            <br />
            <br />
            <div style = {{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                <label style = {{fontSize: 16}}> Date of birth </label>
                <br /> <br />
                        <SelectComponent optionName = "DD" dateArray = {date} value = "days"></SelectComponent>
                        <SelectComponent optionName = "MM" dateArray = {date} value = "months"></SelectComponent>
                        <SelectComponent optionName = "YYYY" dateArray = {date} value = "year"></SelectComponent>
                    
                    <br />
        {/* {isAgeInRange ? <text>Allert</text> : <></>} */}
        <text>{isAgeInRange ? "Allert" : ""}</text>
                </div>
                <div>
                    <label style = {{fontSize: 16}}> Gender </label>
                    <br /> <br />
                    <Select
                        native
                        value={cvFields.gender}
                        onChange={handleGender}   
                        style = {{maxHeight: 30, minWidth: 100}}

                        inputProps={{
                            name: 'gender',
                            id: 'id-gender',
                            
                        }}
                        >

                        <option value ={0}>Please select your gender</option>
                        <option value={1}>Male</option>
                        <option value={2}>Female</option>
                    </Select>
                    <br /><br/><br/>
                </div>
            <br />
            </div>
            <div style = {{ display: 'flex', justifyContent: 'space-between'}}>
            <div>
                    <TextField id="nationality" label ="nationality" value={cvFields.nationality} name="nationality" onChange={handleFieldChange} />
                    <br />
                </div>
            </div>
            <div style ={{display: 'flex', justifyContent: 'space-between'}}>
            <TextField id = "contact" label ="contact" value ={cvFields.contact} name = "contact" onChange ={handleFieldChange}/>
            <br />
            </div>
            <div style = {{ display: 'flex', justifyContent: 'space-between'}}>
            <TextField id="email" label = "email" value={cvFields.emailAddress} name="email" onChange={handleFieldChange} />
            <br />
            </div>
            <div style = {{ display: 'flex', justifyContent: 'space-between'}}>
            <TextField id="phone" label = "phone" value={cvFields.phone} name="phone" onChange={handleFieldChange} />
            <br />
            </div>
            <div style = {{ display: 'flex', justifyContent: 'space-between'}}>
            <TextField id="social media" label = "social media" value={cvFields.socialMedia} name="socialMedia" onChange={handleFieldChange} />
            <br />
            </div>
            <div style = {{ display: 'flex', justifyContent: 'space-between'}}>
    
            <TextField id = "type" label="type" value={cvFields.type} name="type" onChange={handleFieldChange} />
            <br />
            </div>
            <div style = {{ display: 'flex', justifyContent: 'space-between'}}>
            <TextField id = "addressLine" label = "address line"value = {cvFields.addressLine} name = "addressLine" onChange ={handleFieldChange}/>
          
            <br />
            </div>
            <div style = {{ display: 'flex', justifyContent: 'space-between'}}>

            <TextField id = "city" label = "city" value = {cvFields.city} name = "city" onChange = {handleFieldChange}/>
            <br />
            </div>
            <div style = {{ display: 'flex', justifyContent: 'space-between'}}>
            <TextField id = "country" label = "country" value = {cvFields.city} name = "country" onChange = {handleFieldChange}/>
            <br />
            </div>
            <Button type = "submit" 
                   variant="contained"
                   color="primary"
                   style = {{maxHeight: 20, maxWidth: 5}}>
            save
            </Button>
        
        </form>
         </div> 
    );
}