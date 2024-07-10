const changePart = document.getElementById('dataEntry');

const steps = [
    { id: 0, title: 'YOUR INFO', content: `
      <div class="title">
        <h1>Personal info</h1>
        <sub>Please provide your name, email address, and phone number.</sub>
      </div>
      <div class="operations">
        <form id="personalInfoForm">
          <label for="Name">Name</label>
          <input type="text" id="name" name="name" placeholder="e.g. Stephen King" required>
          <br>
          <label for="Name">Email Address</label>
          <input type="email" id="email" name="email" placeholder="e.g. stephenking@lorem.com" required>
          <br>
          <label for="Name">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="e.g. +1 234 567 890" required>
          <br>
        </form>
      </div>
    </div>` },
    { id: 1, title: 'SELECT PLAN', content:`
        <div class="title">
        <h1>Select your plan</h1>
        <sub>You have the option of monthly or yearly billing.</sub>
      </div>
      <div class="operations">
        <div class="billingOptions">
          <div class="option" id="arcade">
            <img src="assets/images/icon-arcade.svg" alt="">
            <div>
              <p class="optionTitle">Arcade</p>
              <p class="optionCash">$9/mo</p>
            </div>
          </div>
          <div class="option" id="advanced">
            <img src="assets/images/icon-advanced.svg" alt="">
            <div>
              <p class="optionTitle">Advanced</p>
              <p class="optionCash">$12/mo</p>
            </div>
          </div>
          <div class="option" id="pro">
            <img src="assets/images/icon-pro.svg" alt="">
            <div>
              <p class="optionTitle">Pro</p>
              <p class="optionCash">$9/mo</p>
            </div>
          </div>
        </div>
        <div class="month_year_billing">
          <p class="monthOption">Monthly</p>
          <div class="change_month_year" id="change_month_year">
            <div class="change_icon">

            </div>
          </div>
          <p class="yearOption">Yearly</p>
        </div>
      </div>
      <script src="scripts/step_2.js"></script>` },
    { id: 2, title: 'ADD-ONS', content:`<p>Step 3</p>` },
    { id: 3, title: 'SUMMARY', content:`<p>Step 4</p>` }
];
let currentStep=0;
const stepsColumn= document.getElementById('steps');


function initialFunction(){
    steps.forEach(eachStep=>{

        const step=document.createElement('div')
        step.classList.add('step');
    
        const step_left=document.createElement('div');
        step_left.classList.add(`step_left`);
        step_left.innerText=`${eachStep.id+1}`;
    
        if(currentStep==eachStep.id){
            currentStep=eachStep.id;
            step_left.classList.add('currentStep');
            changePart.innerHTML=steps[currentStep].content;
        }
    
        const step_right=document.createElement('div');
        step_right.classList.add('step_right');
    
        const step_number=document.createElement('div');
        step_number.classList.add('step_number');
        step_number.innerText=`STEP ${eachStep.id}`;
    
        const step_title=document.createElement('div');
        step_title.classList.add('step_title');
        step_title.innerText=`${eachStep.title}`;
    
        step_right.appendChild(step_number);
        step_right.appendChild(step_title);
    
        step.appendChild(step_left);
        step.appendChild(step_right);
    
        stepsColumn.appendChild(step);
    })
}

const nextStep=document.getElementById('nextStep');
const goBack= document.getElementById('goBack');

nextStep.addEventListener('click',function(){
    if(currentStep==(steps.length-1)){
        return;
    }


    const stepElements=document.querySelectorAll('.step_left');
    currentStep++;
    stepElements.forEach((step, i) => {
        step.classList.toggle('currentStep', i === currentStep);
    });
    changePart.innerHTML=steps[currentStep].content;

    console.log(currentStep);

});
goBack.addEventListener('click',function(){
    console.log(currentStep);
    if(currentStep==0){
        return;
    }
    const stepElements=document.querySelectorAll('.step_left');
        currentStep--;
        stepElements.forEach((step, i) => {
        step.classList.toggle('currentStep', i === currentStep);
    });
    changePart.innerHTML=steps[currentStep].content;
});

// step1Submit.addEventListener('click',function(){
//     const nameInput=document.getElementById('name');
//     const emailInput=document.getElementById('email');
//     const phoneInput=document.getElementById('phone');

//     if(nameInput.value.trim() === '' || emailInput.value.trim() === '' || phoneInput.value.trim() === ''){
//         alert("Please don't fill blank")
//         return;
//     }
//     user_name=nameInput.value;
//     user_email=emailInput.value;
//     user_phone=phoneInput.value;
//     localStorage.setItem()
// });

// goBack.addEventListener('click',function(){
//     alert('butona basildi');
// })

// const user_name = '';
// const user_email = '';
// const user_phone = '';
