import React, { useState } from 'react'

// const [isSelected, setIsSelected]=useState([]);

const AddOnsArr=[
  {
    title: "Online service",
    subtitle: "Access to multiplayer games",
    price:{
      monthly:1,
      yearly: 10
    },
  },
  {
    title: "Larger storage",
    subtitle: "Extra 1 TB of cloud drive",
    price:{
      monthly:1,
      yearly: 10
    },
  },
  {
    title: "Online service",
    subtitle: "Access to multiplayer games",
    price:{
      monthly:1,
      yearly: 10
    },
  },
];

function AddOns() {

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className='step-box'>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className='add-ons'>
        <div className='add-on ' onClick={()=>setIsChecked(!isChecked)}>
          <input type="checkbox" checked={isChecked}
            onChange={handleCheckboxChange}/>
          <div className='add-on-left'>
            <div className='add-on-title'>
              <h4>Online service</h4>
              <p>Access to multiplayer games</p>
            </div>
            <p>+$1/mo</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AddOns