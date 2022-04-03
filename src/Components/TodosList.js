import React, {Component} from 'react'
import TodoEtudes from './TodoEtudes';



const TodosList=({
    items, 
    delet
})=> {
        return(

            <React.Fragment>
                <div className='col-sm-9 offset-3'>
                    <TodoEtudes 
                    items={items} 
                    delet={delet}/>
                </div>
              
               

              </React.Fragment>

        )
 

  
}

export default TodosList;
