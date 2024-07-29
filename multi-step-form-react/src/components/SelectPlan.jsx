import React, { useState } from 'react'

const Plans=[
  {
    title: "Arcade",
    price: {
      montly: 9,
      yearly: 90
    },
  },
  {
    title: "Advanced",
    price:{
      montly: 12,
      yearly: 120
    }
  },
  {
    title: "Pro",
    price: {
      montly: 15,
      yearly: 150
    }
  }
]


function SelectPlan() {
const [isYearly, setIsYearly]=useState(false);
const[isSelected, setIsSelected] = useState("");

const handleMonthYear=()=>{
  setIsYearly(!isYearly);
}
  
  return (
    <div className='step-box'>
        <h2>Select you plan</h2>
        <p>You have the option of montly or yearly billing</p>
        <div className='plans'>
          {
            Plans.map((p,i)=>{
              return <div key={i} className={`plan ${isSelected == p.title && 'isSelected'}`} onClick={()=>setIsSelected(p.title)}>
                <p>{p.title}</p>
                <p>{isYearly ? `$${p.price.yearly}/yr` : `$${p.price.montly}/mo`}</p>
                {isYearly && '2 month free'}
              </div>
            })
          }
        </div>
        <div className='month_year_part'>
          <p>Monthly</p>
          <div className={`changePlanOption ${isYearly ? 'isYearly' : ''}`} onClick={()=>handleMonthYear()} >
            <div className='circle'></div>
          </div>
          <p>Yearly</p>
        </div>
    </div>
  )
}

export default SelectPlan