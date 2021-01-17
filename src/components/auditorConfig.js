import React from 'react';
import Navbar from './Navbar';
import FileReader from './FileReader';
//import fileuploader1 from './fileuploader1';

const AuditorConfig = () => {
    return (
        <div>
            <Navbar/>
            
            <div class="pa6 center"><FileReader/></div>
        </div>
    )
}

export default AuditorConfig