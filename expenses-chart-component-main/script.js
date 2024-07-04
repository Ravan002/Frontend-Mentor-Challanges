


// Fetch the JSON file
const dataPart= document.querySelector('#data');
fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    console.log(response);
    return response.json();
  })
  .then(data => {
    let selectedBars=[];
    const maxAmount = data.reduce((current, item) => {
      return current < item.amount ? item.amount : current
    }, 0)

    console.log(maxAmount)

    data.forEach(item => {
        console.log(item);

        const eachData= document.createElement('div');
        eachData.classList.add('eachData')

        const displayAmount=document.createElement("div");
        displayAmount.classList.add("showAmount");
        displayAmount.innerText = `${item.amount}`;

        const graph = document.createElement("div");
        graph.classList.add("cashAmount");

        if (item.amount === maxAmount) {
          graph.classList.add("max_payment");
        }
        graph.style.height = `${item.amount * 2.2}px`;
        // html bir-bir yazmaq yerine her biri ucun ayrica div yarat ve sadece class elave et
        // eachData.innerHTML= `
          
        //   <div id="CashSize" class="cashAmount ${item.amount === maxAmount ? "max_payment" : "" }"  style="height: ${item.amount * 2.2}px">
        //     <p class="showAmount">${item.amount}</p>
        //   </div>
        //   <p class="day">${item.day}</p>
        // `;
        

        graph.addEventListener("click", function () {
          // əgər hazırkı graph seçilmiş sütunlar arrayində varsa
          if (selectedBars.includes(item)) {
            // buradakı graph ən üstüdə datanı loop-a saldıqdakı dəyərdir, hər bir objecti təmsil edir
            // seçilmiş sütunları filter edirik (hazırki id arraydə olan obyektin id-si ilə uyğunlaşdırılır və arraydən çıxarılır)
            selectedBars = selectedBars.filter((g) => g.id !== item.id);
            graph.classList.remove("graph-active");
            displayAmount.classList.remove("amount-info-active");
          } else {
            // arraydə yoxdursa əlavə edirik
            selectedBars.push(item);
            graph.classList.add("graph-active");
            displayAmount.classList.add("amount-info-active");
          }
          console.log(selectedBars); // seçilmiş günlər
        });

        const day = document.createElement("div");
        day.classList.add("day");
        day.innerText = item.day;

        eachData.appendChild(displayAmount);
        eachData.appendChild(graph);
        eachData.appendChild(day);

        dataPart.appendChild(eachData);
    });
    
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  // document.getElementById('CashSize').addEventListener('click', function(){
    
  //   const amountBox=document.getElementById('CashSize')
  //   console.log(amountBox)
  //   console.log(amountBox.classList.contains('enable'))
  //   if(!amountBox.classList.contains("enable")){
  //     amountBox.classList.add("enable");
  //   }else{
  //     amountBox.classList.remove("enable");
  //   }
  // });