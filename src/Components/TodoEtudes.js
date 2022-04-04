 import React  from 'react'


const TodoEtudes= ({
    items,
    delet
})=> {

        return(
           
            <React.Fragment>
               <div className='list-container'>
                    <h2 className="blue list title"> Association</h2>
                    <hr className='blue'/>
                    <ul className='blue list-ul'>
                      { 
                        items.map(item=>{
                             return(
                
                                <li                                 
                                key={item.key}
                                onClick={()=>delet(item.key)}>{item.text}</li>
                        
                            )
                        })
                         
                       }
                   </ul>
                </div>
         </React.Fragment>
        )
           



  
}

export default TodoEtudes;
