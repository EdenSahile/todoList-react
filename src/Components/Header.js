import React from 'react'


const Header= ({ placeholder, input,change,submit})=> {

return(
<div className='col-sm-6 offset-3'>

              <form className='form' onSubmit={submit}> 
                <input 
                
                type="text" 
                className='form-control' 
                id="todo"
                placeholder={placeholder}
                onChange={change}
                value={input}
                />
                <button type="submit" className="btn btn-primary">Ajouter</button>
                </form>

              </div>

)


  
}

export default Header;
