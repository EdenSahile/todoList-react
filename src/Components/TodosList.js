import React from 'react'
import PropTypes from'prop-types'
import TodoEtudes from './TodoEtudes';



const TodosList=({
    items, 
    delet
})=> {

    // console.log(items)

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



TodosList.propTypes={

    items: PropTypes.arrayOf(
        PropTypes.shape({

    text:PropTypes.string,
        key:PropTypes.number
    }).isRequired,
    ).isRequired,
    
    delet:PropTypes.func.isRequired
 

}

export default TodosList;
