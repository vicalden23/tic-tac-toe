import React from 'react'
// import './dropdown.css'

export default function Dropdown(props) {
  return (
    <div className='dropdown'>
      <button className='drop'>
        More Options
      </button>
      <div className='dropdown-menu'>
        {
          props.dropdownItems.map((item) => {
            return (
              <div>
                <a href='' className='dropdown-item'>{item}</a>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
