import React from 'react';
import ReactDOM from 'react-dom';
//import Root from './root'
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';
import Autocomplete from './frontend/autocomplete';

document.addEventListener('DOMContentLoaded', ()=>{
    ReactDOM.render(<Root />,document.getElementById('main'))
})



const Root = ()=>
     <div>
         <Clock/>        
         <Tabs title="title" content ="content" />  
         <Weather/>
         <Autocomplete/>
    </div>;
