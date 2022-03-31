import React, {Component} from 'react'
import TodoEtudes from './TodoEtudes';
import TodoAssociation from './TodoAssociation';


class TodosList extends Component {




    render(){

        return(

            <React.Fragment>
                <div className='col-sm-3 offset-3'>
                    <TodoEtudes itemsEtudes={this.props.itemsEtudes}  keyEtudes={this.props.keyEtudes}/>
                </div>
              
                <div className='col-sm-6'>

                    <TodoAssociation itemsAsso={this.props.itemsAsso}  keyAsso={this.props.keyAsso}/>
                </div>

              </React.Fragment>

        )
    }

  
}

export default TodosList;
