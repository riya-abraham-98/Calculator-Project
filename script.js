var number = document.getElementById("text");
function getter(id){
  
    let numberKeys = document.getElementById(id).innerHTML;
   if(numberKeys != "=") {
    number.value += numberKeys;

    }
  
    
        if(numberKeys == "=")
        {
            calculateNumbers(document.getElementById("text").value);
        }

    

    
    

    
}


function calculateNumbers(nums)
{
    if(nums.indexOf("+")!=-1 | nums.indexOf("-") | nums.indexOf("*") | nums.indexOf("*"))
    {
        if(nums.indexOf("+") > -1)
        {
             let indexofadd = nums.indexOf("+");
            
             let num1 = nums.substring(0 , indexofadd);
             
   
             let num2 = nums.substring(indexofadd+1 , nums.length);
             
    
             num1 = parseInt(num1);
             num2 = parseInt(num2);

             let num3 = num1+num2;

  

              num3.toString();

              document.getElementById("text").value = num3;
        }

        if(nums.indexOf("-") > -1)
        {
             let indexofsub= nums.indexOf("-");
             
             let num1 = nums.substring(0 , indexofsub);
             
   
             let num2 = nums.substring(indexofsub+1 , nums.length);
            
    
             num1 = parseInt(num1);
             num2 = parseInt(num2);

             let num3 = num1-num2;

  

              num3.toString();

              document.getElementById("text").value = num3;
        }

        if(nums.indexOf("*") > -1)
        {
             let indexofmult= nums.indexOf("*");
            
             let num1 = nums.substring(0 , indexofmult);
           
   
             let num2 = nums.substring(indexofmult+1 , nums.length);
             
    
             num1 = parseInt(num1);
             num2 = parseInt(num2);

             let num3 = num1*num2;

  

              num3.toString();

              document.getElementById("text").value = num3;
        }

        if(nums.indexOf("*") > -1)
        {
             let indexofmult= nums.indexOf("*");
           
             let num1 = nums.substring(0 , indexofmult);
            
   
             let num2 = nums.substring(indexofmult+1 , nums.length);
            
    
             num1 = parseInt(num1);
             num2 = parseInt(num2);

             let num3 = num1*num2;

  

              num3.toString();

              document.getElementById("text").value = num3;
        }

        if(nums.indexOf("/") > -1)
        {
             let indexofdiv= nums.indexOf("/");
             
             let num1 = nums.substring(0 , indexofdiv);
             
   
             let num2 = nums.substring(indexofdiv+1 , nums.length);
             
    
             num1 = parseInt(num1);
             num2 = parseInt(num2);

             let num3 = num1/num2;

  

              num3.toString();

              document.getElementById("text").value = num3;
        }


   
    }
}
   
function clearDisplay(){

    document.getElementById("text").value = '';
}
   




