import React from 'react';
// import HeadT from './header';
import "./css/index.css";
import "./css/application.css"

class  Tabs extends React.Component {
    constructor( props ){
        super( props );

        //this.clickHandler = this.clickHandler.bind(this);
       this.changeBorder = this.changeBorder.bind(this);

        this.state = { idx :  1,    
                       content:'This is first page',
                       css1: 'tab-header tab-header-border',
                       css2: 'tab-header',
                       css3: 'tab-header'
                    }
         }
    clickHandler(num){
         this.setState({idx: num});
         this.changeBorder(num);    
    }
    
    changeBorder(num) {
        if( num == 1){
            this.setState({
                content:'This is first page',
                css1: 'tab-header tab-header-border',
                css2: 'tab-header',
                css3: 'tab-header'
                });
        }else if( num == 2 ){
            this.setState({
                content:'This is second page',
                css1: 'tab-header',
                css2: 'tab-header tab-header-border',
                css3: 'tab-header'
            });
        }else{
            this.setState({
                content:'This is third page',
                css1: 'tab-header',
                css2: 'tab-header',
                css3: 'tab-header tab-header-border'
            });
        }
        
        

    };

    render(){
        const { isBorderVisible } = this.state;
        return(
            <div><h1>Tabs</h1>
                <ul>                          

                    <p className={ this.state.css1 } onClick={ () => this.clickHandler(1)}>one</p>
                    <p className={ this.state.css2 } onClick={ () => this.clickHandler(2) }>two</p>
                    <p className={ this.state.css3 } onClick={ () => this.clickHandler(3) }>three</p>
        
                    <article >{ this.state.content }</article>
                        
                </ul>
            </div>
        );
    }
}

export default Tabs;

//  class Header extends React.Component{
//       constructor(props){
//           super(props);
        
//         //  this.clickHandler = this.clickHandler.bind(this);
//      }    
     
//      clickHandler(num){
//         alert(num)
//         this.setState({idx: num});
//     }
   
//      render(){
        
//         return(
//         <div>
//             <h1 onClick={ () => this.clickHandler(1) }>one</h1>
//             <h1 onClick={ () => this.clickHandler(2) }>two</h1>
//             <h1 onClick={ () => this.clickHandler(3) }>three</h1>
//         </div>
//         );
//      }
//  }

