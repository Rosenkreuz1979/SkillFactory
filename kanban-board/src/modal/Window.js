
import React from 'react'
import './Window.css'

export default function Window(id,name,description){
    return (
      <React.Fragment>
       
          <div className='modal'>
            <div className='modal-body'>
              <h1>Modal title</h1>
              <p>I am awesome modal!</p>
              <button onClick={() => this.setState({ isOpen: false })}>
                Close modal
              </button>
            </div>
          </div>
        
      </React.Fragment>
    )
 
}