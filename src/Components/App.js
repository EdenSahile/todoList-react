
import React,{ Component } from 'react';
import '../styles/App.css';
import Header from '../Components/Header'
import TodosList from './TodosList';

class App extends Component {

 constructor(props){
        super(props)
        this.state={
            items:[
              {text:"learn react", key:Date.now()}  
            ], 
            input:[],
            placeholder:"Entrez une tâche"
          }

this.handleChange=this.handleChange.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
}

componentDidMount(){

  let items=JSON.parse(localStorage.getItem('items'))
  this.setState({items:items})
}
 
handleChange=(e)=>{
    
    this.setState({
      input:e.target.value
 })


    
}

 handleSubmit(e){
    e.preventDefault()
     this.add()
  }


  add=()=>{

    let text= !this.state.input.length? "Merci de saisir une tâche avant de l'ajouter":"Entrez votre tâche"
    
    this.setState({
        placeholder:text
      })

      if(!this.state.input.length){
        return
      }
  
    let newList={text:this.state.input, key:Date.now()}

    this.setState(state=>({
      items: [newList].concat(state.items),
      input:''
    }))

    localStorage.setItem('items',JSON.stringify([newList].concat(this.state.items)))
  }



  delete=(key)=>{

   
// eslint-disable-next-line
    let filtered=this.state.items.filter((item=>{
      if(key !==item.key){return item}
     
    }))

     this.setState({
        items:filtered
      })
localStorage.setItem('items',JSON.stringify(filtered))
 
    }




  render(){

 return (
    <div className="App">
      <header className="App-header">
        
        <div className='container'>

          <div className='row'>
            <Header
             items={this.state.items} 
              input={this.state.input} 
              change={(e)=>this.handleChange(e)} 
              submit={(e)=>this.handleSubmit(e)}
              placeholder={this.state.placeholder}
           
              add={this.add}/>
          </div>

          <div className='row'>
           <TodosList 
            items={this.state.items} 
            delet= {(e)=>this.delete(e)}/>
            </div>

          </div>

      </header>
    </div>
  );
  }
 
}

export default App;
