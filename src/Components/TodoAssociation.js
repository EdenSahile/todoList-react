 import React, {Component} from 'react'


class TodoAssociations extends Component {

    render(){

        return(
        <React.Fragment>   
            <div className='list-container' >
                <h2 className="blue list title">Association</h2>
                <hr className='blue'/>
                <ul className='blue'  >
                    { 
                        this.props.itemsAsso.map((item=>{
                            return(
                                <li key={item.keyAsso}>{item.text}</li>
                            )
                        }))
                      
                          
                         
                       }
                </ul>
            </div>              
        </React.Fragment>

        )
    }

  
}

export default TodoAssociations;
