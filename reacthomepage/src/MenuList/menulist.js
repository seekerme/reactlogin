import React from 'react';
import './menulist.css';

const menulist = () => {
    const menuoptions = ["Home","About","Admissions","Parents","Gallery","Contactus"];

    return (
        <div className="menulistcss">            
            {[...menuoptions].map((op,index) => <a href='#'>{op}</a>)}
        </div>
    );
}

export default menulist;