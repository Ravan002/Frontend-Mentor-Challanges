const dataPart= document.querySelector('#data');
const dice_button=document.getElementById('diceButton');
const URL_API='https://api.adviceslip.com/advice';

dice_button.addEventListener('click',getAdvice);

const getData = async () => {
    const response = await fetch(URL_API)
    const data = await response.json()
    
    return data;
}

async function getAdvice() {
    try {
        console.log("start")
        dice_button.disabled=true;
        dice_button.classList.add('disabled');
        const data = await getData()
        console.log(data)

        const slip=data.slip;
        console.log("Fetched advice:", slip);


        const adviceId=document.getElementById('adviceId');
        adviceId.innerText=`ADVICE #${slip.id}`;

        const adviceText=document.getElementById('adviceText');
        adviceText.innerText=`"${slip.advice}"`;

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }finally{
        dice_button.disabled=false;
        dice_button.classList.remove('disabled');
        console.log("done")
    }
}


// function getAdvice(){
//     fetch(URL_API)s
//     .then(response => {
//         console.log(1)
//         dice_button.classList.add('disabled');
//     if (!response.ok) {
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
//     console.log(response);
//     return response.json();
//   })
//   .then(data => {
//     const slip=data.slip;
//     console.log(slip.id);
//     console.log(slip.advice);

//     const adviceId=document.getElementById('adviceId');
//     adviceId.innerText=`ADVICE #${slip.id}`;

//     const adviceText=document.getElementById('adviceText');
//     adviceText.innerText=`"${slip.advice}"`;

//     dataPart.appendChild(adviceId);
//     dataPart.appendChild(adviceText);

//   })
//   .catch(error => {
//     
//   })
//   .finally(()=>{
//     dice_button.classList.remove('disabled');
//     console.log("2")
//   });
//   }

