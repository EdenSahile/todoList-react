import React, {Component} from 'react'
import TodoEtudes from './TodoEtudes';



class TodosList extends Component {




    render(){

        return(

            <React.Fragment>
                <div className='col-sm-9 offset-3'>
                    <TodoEtudes 
                    items={this.props.items} 
                     key={this.props.key}
                      delete={this.props.delete}/>
                </div>
              
               

              </React.Fragment>

        )
    }

  
}

export default TodosList;
