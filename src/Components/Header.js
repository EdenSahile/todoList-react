import React from 'react';
import PropTypes from 'prop-types'


const Header= ({ placeholder, input,change,submit})=> {

  // console.log(input)
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



Header.propTypes={

  input: PropTypes.arrayOf(
        PropTypes.shape({
          text:PropTypes.string,
          key:PropTypes.number
    }).isRequired,
    ).isRequired,
placeholder: PropTypes.string,
  change:PropTypes.func,
  submit: PropTypes.func
}

export default Header;
