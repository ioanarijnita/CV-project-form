import { Button } from '@material-ui/core';
import React, { useState } from 'react';

export function Footer(){
    return(
    <div>
        <Button style={{position: 'fixed',bottom: 20, right: 20}} variant= "contained" color= "primary"> 
         next 
        </Button>
        <Button style={{position: 'fixed', bottom: 20, left: 20}} variant= "contained" color= "inherit"> 
         exit
        </Button>
    </div>
    );
}