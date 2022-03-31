
import React,{ Component } from 'react';
import '../styles/App.css';
import Header from '../Components/Header'
import TodosList from './TodosList';

class App extends Component {

 constructor(props){

        super(props)
        this.state={

            itemsEtudes:[
              {text:"bac blanc", keyEtudes:Date.now()}

              
            ],
             itemsAsso:[
               {text:"Ecrire les status", keyAsso:Date.now()}
              ],
            input:[]
          

          }

this.handleChange=this.handleChange.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
}



handleChange(e){
    
    this.setState({
      input:e.target.value
 })
 


   
  }


  add=()=>{

    let newList={text:this.state.input, keyEtudes:Date.now()}

    this.setState(state=>({
      itemsEtudes: [newList].concat(state.itemsEtudes),
      input:''
    
    
   
    }))


  }


handleSubmit(e){
    e.preventDefault()
     this.add()
     

}



  render(){


 return (
    <div className="App">
      <header className="App-header">
        
        <div className='container'>

          <div className='row'>
            <Header input={this.state.input} change={(e)=>this.handleChange(e)}  submit={(e)=>this.handleSubmit(e)}/>
          </div>

          <div className='row'>
           <TodosList itemsEtudes={this.state.itemsEtudes}  itemsAsso={this.state.itemsAsso} />
            </div>

          </div>
        


      </header>
    </div>
  );
  }
 
}

export default App;
