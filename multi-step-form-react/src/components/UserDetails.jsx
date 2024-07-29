import { useEffect, useState } from 'react'
function UserDetails() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };

      useEffect(() => {
        // Burada state değiştiğinde çalışmasını istediğiniz fonksiyonlar yer alabilir.
        console.log('Form data değişti:', formData);
      }, [formData]);

    return (
        <>
        <div className="step-box">
          <h2>Personal info</h2>
          <p>Please provide your name, email address, and phone number.</p>
          <div className='user-form'>
            <label htmlFor="name">Name</label>
            <input 
              className="form-input" type="text" 
              name="name" id="name" value={formData.name}
              placeholder="e.g. Stephen King"
              onChange={handleInputChange}
              />
            <label htmlFor="email">Email Address</label>
            <input 
              className="form-input" type="email" 
              name="email" id="email" value={formData.email}
              placeholder = "e.g.stephenking@lorem.com"
              onChange={handleInputChange}
              />
            <label htmlFor="phone">Phone Number</label>
            <input 
              className="form-input" type="tel" 
              name="phone" id="phone" value={formData.phone}
              placeholder = "e.g. +1 234 567 890"
              onChange={handleInputChange}
              />
          </div>
        </div>
        </>
      )
}

export default UserDetails
