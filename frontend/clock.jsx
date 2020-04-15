import React from 'react';
import "./css/index.css";
import "./css/application.css"

class Clock extends React.Component{
    constructor( props ){
       super( props )

       this.tick = this.tick.bind(this);
       this.getTextualDay = this.getTextualDay.bind(this);
       this.getTextualMonth = this.getTextualMonth.bind(this);
      
       const dateObj = new Date();
       const isStartTick = false;
       const handle = 0;

       this.state = { 
        curTime:dateObj
       };
           
    }

    componentDidMount(){
       this.handle = setInterval( () => this.tick(),1000);
     }
    
    //  componentDidMount() {
    //     setInterval( () => {
    //       this.setState({
    //         curTime : new Date().toLocaleString()
    //       })
    //     },1000)
    //   }
    componentWillUnmount(){
        clearInterval(this.handle);
        this.handle = 0;
    }
    
    tick(){       
         this.setState({  curTime :new Date()});        
    }

    getTextualDay(num){
        
                var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                return days[num];
    }   
    
    getTextualMonth(num){
        var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
        return month[num];
    }

    render(){
        return(
            <div className="widget-container"><h1>Clock</h1>
                <div className='clock-container'>
                    <div  className='clock-item'>
                            <span  className='clock-heading'>Time:</span>
                            <span> 
                                            { this.state.curTime.getHours() }<span>:</span>
                                            {  this.state.curTime.getMinutes() }<span>:</span>
                                            { this.state.curTime.getSeconds()  }<span> PDT</span>
                            </span>
                    </div>
                    
                    <div  className='clock-item'>
                           <span className='clock-heading'>Date:</span>
                            <span>
                                    {  this.getTextualDay(this.state.curTime.getDay()) }<span> </span>
                                    {  this.getTextualMonth(this.state.curTime.getMonth())}<span> </span>
                                    {  this.state.curTime.getDate() }<span> </span>
                                    {  this.state.curTime.getFullYear() }
                            </span>        
                    </div>  
            </div>
        </div>
        );
    }

}



export default Clock;