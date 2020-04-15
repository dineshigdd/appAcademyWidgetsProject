import React from 'react';
import "./css/index.css";



class Weather extends React.Component{
    
    constructor(props){
        super(props);
       
        this.getFaranhit = this.getFaranhit.bind(this);
        this.state = {
            city:'',
            temp:'',
            condition:''            
          };
       
    }
    
    getFaranhit(kelvinValue){
        return ( Math.floor(kelvinValue -273.15) * (9/5) + 32);
    }

    componentDidMount(){     
      let lat = 0;
      let lon = 0;
      let APPID='b57f1eaeed739af3129814d68392ef00';
      let self = this; //https://stackoverflow.com/questions/38302436/setstate-in-componentdidmount-not-working-in-geolocation-callback
    
      
        navigator.geolocation.getCurrentPosition(function(position) {
         
            console.log("Latitude is :", position.coords.latitude);
              
            console.log("Longitude is :", position.coords.longitude);
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            
       
           

        fetch('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&'+'lon='+lon+'&'+'APPID='+APPID)
        .then((response) =>  response.json())
        .then((data) =>  self.setState({
            city:data.name,
            temp:self.getFaranhit(data.main.temp),
            condition: data.weather[0].main           
        }));
       
        } );
    }
    
    
    render(){
      
        return(
            
            <div className = 'weather-container'>    
             
            <div>city: { this.state.city }</div>
            <div>temperature:{ this.state.temp }<span> &#8457;</span></div>
            <div>condition: { this.state.condition }</div>            
            </div>
        );
    }
}

export default Weather;