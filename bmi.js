 function bmi(){
  let height=document.querySelector(".a").value;
 let weight=document.querySelector(".b").value;
  
  if (!height || !weight) {
    document.querySelector(".d").value = "Please enter valid height and weight.";
    return;
  }
 
    let condition;
     let bmiValue=weight/Math.pow( (height/100),2);
     let bmi = parseFloat(bmiValue.toFixed(1));
     if(bmi<18.5){
       condition="underweight";
     }
     else if(bmi>=18.5&&bmi<24.9){
      condition="Normal weight";
     }
     else if(bmi>=25&&bmi<29.9){
      condition="over weight";
     }
     else{
        condition="obese";
     }document.querySelector(".d").value=condition;
    }
