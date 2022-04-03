import React, {Component} from 'react'


class Header extends Component {






    render(){

        return(
              <div className='col-sm-6 offset-3'>

              <form className='form' onSubmit={(e)=>this.props.submit(e)}> 
                <input 
                
                type="text" 
                className='form-control' 
                id="todo"
                placeholder={this.props.placeholder}
                onChange={(e)=>this.props.change(e)}
                value={this.props.input}
                />
                <button type="submit" className="btn btn-primary">Ajouter</button>
                </form>

              </div>

        )
    }

  
}

export default Header;
