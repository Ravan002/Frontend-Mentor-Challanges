import { useEffect, useState } from 'react'
import './App.css'


const API_URL="https://api.adviceslip.com/advice";


function App() {
  const [isLoading, setIsLoading] = useState(false)

  const [advice, setAdvice] = useState({
    text: "",
    id: null
  })

  const getAdvice = async () => {
    
    try {
      setIsLoading(true)
      const res = await fetch(API_URL)
      const { slip } = await res.json()
      console.log(slip);
    
    setAdvice({
      text: slip.advice,
      id: slip.id
    })
    } catch (error) {
      
    } finally {
      setIsLoading(false)
    }
  }


  useEffect(() => { 
    getAdvice()
  }, [])


  return (
    <>
      <div>
        <h1>{advice.id}</h1>
        <p>{advice.text}</p>
        <button disabled={isLoading} type="submit" onClick={()=>getAdvice()}>{isLoading ? "Loading..." : "call"}</button>
      </div>
      
    </>
  )
}

export default App



//let rating=[1,2,3,4,5];
// const [selectedRate, setSelectedRate] = useState(0)
//   const [isSubmit, setIsSubmit]= useState(false)

//   const handleSubmit = () => {
//     if(selectedRate === 0) return
//     setIsSubmit(true)
//   }

{/* <div className="back_card">
        {isSubmit ?  <div>
          <p>You selected: {selectedRate} out of 5</p>
          <h1>Thank you!</h1>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div> : <div className="rate_page">
          <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="ratingBar">
          {rating.map((rate) => {
    return <RatingBar rate={rate} selectedRate={selectedRate} setSelectedRate={setSelectedRate} />
  })}
        </div>
        <button type="submit" onClick={()=> handleSubmit}>Submit</button> 
        </div>}
      </div> */}