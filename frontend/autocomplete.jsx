import React from 'react';
import './css/index.css';

class Autocomplete extends React.Component{
    constructor(props){
        super(props);
        
        this.createList = this.createList.bind(this);
        this.getItems = this.getItems.bind(this);        
        
        this.state = {     
            noMatch:"No Match",     
            displayList:null,
            inputVal:'',
            listItems : [ 
                { id: 0 , text: 'Abba'},
                { id: 1 , text: 'Barney' } , 
                { id: 2 , text:'Barbara'}, 
                { id: 3 , text: 'Jeff'},
                { id: 4 , text: 'Jenny'},
                { id: 5 , text: 'Sarah'},
                { id: 6 , text: 'Sally'},
                { id: 7 , text: 'Xander'}
            ]    
        }
          
    }
        
    
    getItems(e){
        const displayArr = [];
        
    
       this.setState( { inputVal: e.target.value});                       

        for( var i = 0 ; i < this.state.listItems.length; i++ ){
       
                    const currentItem = this.state.listItems[i].text.substring(0,e.target.value.length);
                                 
                                      
                    if( e.target.value.toLowerCase() === currentItem.toLowerCase()    ){    
                        console.log("curentItem:" +currentItem)                    
                        displayArr.push(
                                { id: this.state.listItems[i].id,
                                  text: this.state.listItems[i].text
                        });                                                           
                                        
                       
                             
                    } else if( e.target.value !== currentItem  ){
                        console.log("displayArrLength:" + displayArr.length)
                        if( displayArr.length == 0){
                            displayArr.pop();
                        }
                    }            
                    
                    if( displayArr.length > 0 )
                        this.setState( { displayList : displayArr })   
                    else
                        this.setState( { displayList : "No Maching" })   
                    
        }
           
       
    }
    
    createList(){
        
        if( this.state.inputVal.length == 0){
            return  this.state.listItems.map(item =>             
                <li key={ item.id }> { item.text } </li>                
                );
        }else {
        try{   
                return this.state.displayList.map(item =>             
                        <li key={ item.id }> { item.text } </li>   
                                
                );
        }catch{
                return <li>{ this.state.displayList }</li>
        }
        }

         
    }

    render(){
        return(
            <div className="autocomplete-container"><h1>Autocomplete</h1>
            <div className="autocomplete-list-container">
            <input onChange={this.getItems} placeholder="Search..." />
            <ul className='autocomplete-list'>
                 { this.createList() }
            </ul>          
            </div>
            </div>
        );
        
    }
}

export default Autocomplete;

  /* <ul >
           
                <li key='1'>dhamma</li>
                <li key='2'>wealth</li>
                <li key='3'>success</li>
                <li key='4'>nibbana</li>
            </ul>
             */


            // for( var i = 0 ; i < this.state.listItems.length; i++ ){
            //     for( var r = 0; r < this.state.listItems[i].text.length; r++ ){
                     
                
            //            if( this.state.inputVal[i] !== this.state.listItems[i].text){
            //                 this.state.inputVal.push(this.state.listItems[i].text);
            //             }
                       
            //      //      this.setState({ inputVal: this.inArr.push( this.state.listItems.text )} )
                     
            //     }
            //           // this.setState({ inputVal: this.state.listItems[i].text });
            //            console.log(this.state.inputVal);
                   
    
                
            // }