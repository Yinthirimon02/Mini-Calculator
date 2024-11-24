let result = document.getElementById('result');
let temp = ""

function insert(para){
    if(para == 'calculate'){
        result.innerHTML = eval(temp)    //calculate with math operation from string
        temp = eval(temp)   //change result to temp storage
    }else{
        temp += para.innerHTML;     //store all user data
        result.innerHTML = temp     // to see user number
    }
}

function clearScreen(){
    temp = ""
    result.innerHTML = 0
}