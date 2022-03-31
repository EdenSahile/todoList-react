 import React, {Component} from 'react'


class TodoEtudes extends Component {

    render(){

        return(
           
            <React.Fragment>
               <div className='list-container'>
                    <h2 className="blue list title">  Etudes</h2>
                    <hr className='blue'/>
                    <ul className='blue'>
                      { 

      
                        this.props.itemsEtudes.map((item=>{

                             return(
                                <li 
                                key={item.keyEtudes}
                                onClick={()=>this.props.delete(item.keyEtudes)}
                                >{item.text}</li>
                            )
                        })) 
                         
                       }

                       
                   </ul>
                </div>
         </React.Fragment>
        )
           
    }



  
}

export default TodoEtudes;
