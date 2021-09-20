import React, { useState } from 'react';



export function Welcome(){
    return(
    <div> 
        <p>
<text style = {{fontStyle: 'italic' , marginLeft: 30}}>Welcome!</text>
</p>
<p><text style = {{fontStyle: 'oblique', marginLeft: 30}}>You are now able to create your personal profile. Let's get started!</text>
</p>
    </div>
    );
}
