var isMonth=true;
document.getElementById('change_month_year').addEventListener('click', function(){
    const changeMonthYear=document.getElementById('change_month_year');
    if(isMonth){
        changeMonthYear.classList.add('change_to_year');
    }else{
        changeMonthYear.classList.remove('change_to_year');
    }
    isMonth=!isMonth;
});

const billingOptions=[
    {
        optionName: "arcane",
    }
]

