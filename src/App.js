import React from 'react';
import Singin from './Signin';
import Singup from './Signup';


class App extends React.Component  {
    constructor(props){
        super(props)
          this.state={
            isRegistered: false
          }
    
    }
     render(){
         const onClick=()=>{
             this.setState({isRegistered: !this.state.isRegistered})
         }
         return(
             <div className="con">
                 {
                     this.state.isRegistered? <Singin />: <Singup />
                 }
                 
             </div>
         );
     }
    }


export default App;