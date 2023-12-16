import React from 'react'

const SingleService = ({title, content, icon}) => {
  return (
    <div style={{zIndex: "-9"}}>
        <h2>{title}</h2>
        <p>{content}</p>
        <span className='icon'>{icon}</span>
    </div>
  )
}

export default SingleService