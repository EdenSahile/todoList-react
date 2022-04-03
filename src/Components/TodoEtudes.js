 import React, {Component} from 'react'


class TodoEtudes extends Component {

    render(){

        return(
           
            <React.Fragment>
               <div className='list-container'>
                    <h2 className="blue list title"> Association</h2>
                    <hr className='blue'/>
                    <ul className='blue list-ul'>
                      { 
                        this.props.items.map(item=>{
                             return(
                            
                                <li                                 
                                key={item.key}
                                onClick={()=>this.props.delete(item.key)}
                                
                                >{item.text}</li>
                              
                           
                            )
                        })
                         
                       }

                       
                   </ul>
                </div>
         </React.Fragment>
        )
           
    }



  
}

export default TodoEtudes;
