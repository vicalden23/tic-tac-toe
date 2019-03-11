import React from 'react'

export default function Dropdown() {
  return (
    <div className='dropdown'>
      <button className='drop'>
        More Options
      </button>
      <div className='dropdown-menu'>
        <a href='' className='dropdown-item'>item 1</a><br/>
        <a href='' className='dropdown-item'>item 2</a><br/>
        <a href='' className='dropdown-item'>item 3</a><br/>
      </div>
    </div>
  )
}
