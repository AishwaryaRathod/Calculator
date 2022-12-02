let screen=document.getElementById("screen");
let buttons= document.querySelectorAll("button");
let screenval="";

for(item of buttons){
    item.addEventListener("click", (e)=>{
        buttonText= e.target.innerText;
       

        if(buttonText=="x"){
            buttonText="*";
            screenval+=buttonText;
            screen.value=screenval;
        }
        else if(buttonText=="C"){
            screenval="";
            screen.value=screenval;
        }
        else if(buttonText=="="){
            screen.value= eval(screenval)
        }
        else{
            screenval+=buttonText;
            screen.value=screenval;
        }

    })
}