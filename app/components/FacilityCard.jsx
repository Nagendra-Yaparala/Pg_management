import React from 'react'

const FacilityCard = ({title,desc}) => {
  return (
    <div>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-sm font-semibold mb-2'>{desc}</p>
    </div>
  )
}

export default FacilityCard