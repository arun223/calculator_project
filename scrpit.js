

var screen = document.getElementById("screen")

function display(num){


        if(typeof(num)=='number'){
            screen.value += num
        } 
        else{
                    
            var str=screen.value
            var lastCharacter = str.charAt(str.length-1);
    
    
            if (lastCharacter in [1,2,3,4,5,6,7,8,9,0]){
                screen.value += num
            }
            else{
                if(num=='.' && lastCharacter!='.'){
                    screen.value += "."
                }
                
            }
    
       }

}



var getResult = ()=>{

    var statement = screen.value
    if(statement) screen.value = (eval(statement)==NaN ? 'error' : eval(statement))
    
}

function clearAll(){
    document.getElementById('screen').value=0
}

var displayOperator = (optr)=>{
    var str=screen.value
    var lastCharacter = str.charAt(str.length-1);
    
    
    if(lastCharacter in [1,2,3,4,5,6,7,8,9,0]){
        screen.value += optr
    }
}
