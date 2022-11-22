function check(){
    const lastname = document.getElementById("lastname").value;
    let firstname = document.getElementById("firstname").value;
    const email = document.getElementById("Email").value;
    let tel = document.getElementById('phone').value;
    let prefix = tel.slice(0, 2);
    let exprt = new RegExp('[0-9]','g');

    let Female  = document.getElementById('dot-1').checked;
    let Male = document.getElementById('dot-2').checked;

    let dw1 = document.getElementById('dw1').checked;
    let dw2 = document.getElementById('dw2').checked;
    let dw3 = document.getElementById('dw3').checked;
    let dW4 = document.getElementById('dw4').checked;
    let dw5 = document.getElementById('dw5').checked;

    let  select = document.getElementById("select");
    let error7 = document.getElementById("error7");
    let  conter = 0;

    output1 = document.getElementById("error1");
    output2 = document.getElementById("error2");
    output3 = document.getElementById("error3");
    output4 = document.getElementById("error4");
    output5= document.getElementById("error5");
    output6= document.getElementById("error6");

    

    if(lastname == ""){
        output1.innerHTML = "*The Name Not valid";
document.getElementById("lastname").style.border = "1px solid #DE0068";
    }

    else if(lastname.length < 30 && lastname.length > 3){
        output1.innerHTML = "";
        document.getElementById("lastname").style.border = "1px solid #59CE8F";
        
    }

    else{
        output1.innerHTML = "*The Name Not valid";
        document.getElementById("lastname" ).style.border = "1px solid #DE0068";
    }



if(firstname == ""){
    output2.innerHTML = "*The Name Not valid";
document.getElementById("firstname").style.border = "1px solid #DE0068";
}

else if(firstname.length < 30 && firstname.length > 3){
    output2.innerHTML = "";
    document.getElementById("firstname").style.border = "1px solid #59CE8F";
}
else{
    output2.innerHTML = "*The Name Not valid";
    document.getElementById("firstname" ).style.border = "1px solid #DE0068";
}


if(email == lastname+"."+firstname+"@ofppt.ma"){
    document.getElementById("Email").style.border = "1px solid #59CE8F";
    output3.innerHTML = "";
    
} else {
    document.getElementById("error3").innerHTML = "*The Name Not valid";
    document.getElementById("Email").style.border = "1px solid #DE0068";
}

if(exprt.test(tel) == true && tel.length == 10 && (prefix == "05" || prefix == "06" || prefix == "07")  ){

    output4.innerHTML = "";
    document.getElementById("phone").style.border = "1px solid #59CE8F";

}
    else{
        output4.innerHTML = "not valid a number";
        document.getElementById("phone").style.border = "1px solid #DE0068";

    }


    if(Male == false && Female == false ){
        output5.innerHTML= "not valid"
    }

    else{
        output5.innerHTML= ""

    }


    if(dw1   == false  && dw2 == false && dw3 == false  && dW4 == false && dw5 == false  ){
        output6.innerHTML= "not valid"
        
    }

    else{
        output6.innerHTML= ""
    }


    for(let index =0; index <select.options.length; index ++ ){
        if (select.options[index].selected == true) {
            conter++;
            
        }
    }

    if(conter >=1 && conter <=3){
        error7.innerHTML = ""
        document.getElementById("select").style.border = "1px solid #59CE8F";
    }

    else{
        error7.innerHTML= "no valid"
        document.getElementById("select").style.border = "1px solid red";
    }


    if (output1.innerHTML == "" && output2.innerHTML == "" && output3.innerHTML == "" &&  output4.innerHTML == 
    ""&& output5.innerHTML == "" &&output6.innerHTML == "" ) {

        location.replace("confirmation.html");
        
    }



    
}









        
    

    





    
