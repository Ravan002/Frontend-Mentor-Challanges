import React from 'react'

const RatingBar = ({rate, setSelectedRate, selectedRate}) => {
  return (
    <div className={`circle ${selectedRate === rate && 'selectedRate'}`} key={rate} onClick={()=>setSelectedRate(rate)}>{rate}</div>
  )
}

export default RatingBar