let tic_tac = 0
let arr_click = []
let check1_x =[], check2_x = [], check3_x = [], checkx_1 = [], checkx_2 = [], checkx_3 = [], check_diag_1 = [],check_diag_2 = [] 
// let check1=0, check2= 0, check3=0

document.querySelector('.container').addEventListener("click", ()=>{
    if(tic_tac == 0){
        tic_tac = 1;
    }
    else{
        tic_tac = 0;
    }
    if(check1_x.length == 3){
        if(check1_x[0] == check1_x[1] && check1_x[1] == check1_x[2]){
            if(check1_x[0] == 0){
                document.querySelector('.plwin').innerHTML = "Player 1 Wins the Game"
            }
            else{
                document.querySelector('.plwin').innerHTML = "Player 2 Wins the Game"
            }
        }
        
    }
    if(check2_x.length == 3){
        if(check2_x[0] == check2_x[1] && check2_x[1] == check2_x[2]){
            if(check2_x[0] == 0){
                document.querySelector('.plwin').innerHTML = "Player 1 Wins the Game"
            }
            else{
                document.querySelector('.plwin').innerHTML = "Player 2 Wins the Game"
            }
        }
    }
    if(check3_x.length == 3){
        if(check3_x[0] == check3_x[1] && check3_x[1] == check3_x[2]){
            if(check3_x[0] == 0){
                document.querySelector('.plwin').innerHTML = "Player 1 Wins the Game"
            }
            else{
                document.querySelector('.plwin').innerHTML = "Player 2 Wins the Game"
            }
        }
    }
    if(checkx_1.length == 3){
        if(checkx_1[0] == checkx_1[1] && checkx_1[1] == checkx_1[2]){
            if(checkx_1[0] == 0){
                document.querySelector('.plwin').innerHTML = "Player 1 Wins the Game"
            }
            else{
                document.querySelector('.plwin').innerHTML = "Player 2 Wins the Game"
            }
        }
    }
    if(checkx_2.length == 3){
        if(checkx_2[0] == checkx_2[1] && checkx_2[1] == checkx_2[2]){
            if(checkx_2[0] == 0){
                document.querySelector('.plwin').innerHTML = "Player 1 Wins the Game"
            }
            else{
                document.querySelector('.plwin').innerHTML = "Player 2 Wins the Game"
            }
        }
        
    }
    if(checkx_3.length == 3){
        if(checkx_3[0] == checkx_3[1] && checkx_3[1] == checkx_3[2]){
            if(checkx_3[0] == 0){
                document.querySelector('.plwin').innerHTML = "Player 1 Wins the Game"
            }
            else{
                document.querySelector('.plwin').innerHTML = "Player 2 Wins the Game"
            }
        }
    }
    if(check_diag_1.length == 3){
        if(check_diag_1[0] == check_diag_1[1] && check_diag_1[1] == check_diag_1[2]){
            if(check_diag_1[0] == 0){
                document.querySelector('.plwin').innerHTML = "Player 1 Wins the Game"
            }
            else{
                document.querySelector('.plwin').innerHTML = "Player 2 Wins the Game"
            }
        }
    }
    if(check_diag_2.length == 3){
        if(check_diag_2[0] == check_diag_2[1] && check_diag_2[1] == check_diag_2[2]){
            if(check_diag_2[0] == 0){
                document.querySelector('.plwin').innerHTML = "Player 1 Wins the Game"
            }
            else{
                document.querySelector('.plwin').innerHTML = "Player 2 Wins the Game"
            }
        }
    }

    
    
})
document.querySelector('#btn1_1').addEventListener("click", ()=>{
    arr_click.push([1,1,tic_tac])
    check1_x.push(tic_tac)
    checkx_1.push(tic_tac)
    check_diag_2.push(tic_tac)
    if(tic_tac == 0){
        document.querySelector("#btn1_1").innerHTML = "O"
    }
    else{
        document.querySelector("#btn1_1").innerHTML = "×"
    }
})
document.querySelector('#btn1_2').addEventListener("click", ()=>{
    arr_click.push([1,2,tic_tac])
    check1_x.push(tic_tac)
    checkx_2.push(tic_tac)
    if(tic_tac == 0){
        document.querySelector("#btn1_2").innerHTML = "O"
    }
    else{
        document.querySelector("#btn1_2").innerHTML = "×"
    }
})
document.querySelector('#btn1_3').addEventListener("click", ()=>{
    arr_click.push([1,3,tic_tac])
    check1_x.push(tic_tac)
    checkx_3.push(tic_tac)
    check_diag_1.push(tic_tac)
    if(tic_tac == 0){
        document.querySelector("#btn1_3").innerHTML = "O"
    }
    else{
        document.querySelector("#btn1_3").innerHTML = "×"
    }
})
document.querySelector('#btn2_1').addEventListener("click", ()=>{
    arr_click.push([2,1,tic_tac])
    check2_x.push(tic_tac)
    checkx_1.push(tic_tac)
    if(tic_tac == 0){
        document.querySelector("#btn2_1").innerHTML = "O"
    }
    else{
        document.querySelector("#btn2_1").innerHTML = "×"
    }
})
document.querySelector('#btn2_2').addEventListener("click", ()=>{
    arr_click.push([2,2,tic_tac])
    checkx_2.push(tic_tac)
    check2_x.push(tic_tac)
    check_diag_1.push(tic_tac)
    check_diag_2.push(tic_tac)
    if(tic_tac == 0){
        document.querySelector("#btn2_2").innerHTML = "O"
    }
    else{
        document.querySelector("#btn2_2").innerHTML = "×"
    }
})
document.querySelector('#btn2_3').addEventListener("click", ()=>{
    arr_click.push([2,3,tic_tac])
    check2_x.push(tic_tac)
    checkx_3.push(tic_tac)
    if(tic_tac == 0){
        document.querySelector("#btn2_3").innerHTML = "O"
    }
    else{
        document.querySelector("#btn2_3").innerHTML = "×"
    }
})
document.querySelector('#btn3_1').addEventListener("click", ()=>{
    arr_click.push([3,1,tic_tac])
    check3_x.push(tic_tac)
    checkx_1.push(tic_tac)
    check_diag_1.push(tic_tac)
    if(tic_tac == 0){
        document.querySelector("#btn3_1").innerHTML = "O"
    }
    else{
        document.querySelector("#btn3_1").innerHTML = "×"
    }
})
document.querySelector('#btn3_2').addEventListener("click", ()=>{
    arr_click.push([3,2,tic_tac])
    check3_x.push(tic_tac)
    checkx_2.push(tic_tac)
    if(tic_tac == 0){
        document.querySelector("#btn3_2").innerHTML = "O"
    }
    else{
        document.querySelector("#btn3_2").innerHTML = "×"
    }
})

document.querySelector('#btn3_3').addEventListener("click", ()=>{
    arr_click.push([3,3,tic_tac])
    checkx_3.push(tic_tac)
    check3_x.push(tic_tac)
    check_diag_2.push(tic_tac)

    if(tic_tac == 0){
        document.querySelector("#btn3_3").innerHTML = "O"
    }
    else{
        document.querySelector("#btn3_3").innerHTML = "×"
    }
})
document.querySelector('#reset').addEventListener("click", ()=>{
    check1_x =[]
    check2_x = []
    check3_x = []
    checkx_1 = []
    checkx_2 = []
    checkx_3 = []
    check_diag_1 = []
    check_diag_2 = []
    tic_tac = 0
    arr_click = []
    check_diag_2 = [] 
    document.querySelector("#btn1_1").innerHTML = ""
    document.querySelector("#btn1_2").innerHTML = ""
    document.querySelector("#btn1_3").innerHTML = ""
    document.querySelector("#btn2_1").innerHTML = ""
    document.querySelector("#btn2_2").innerHTML = ""
    document.querySelector("#btn2_3").innerHTML = ""
    document.querySelector("#btn3_1").innerHTML = ""
    document.querySelector("#btn3_2").innerHTML = ""
    document.querySelector("#btn3_3").innerHTML = ""
    document.querySelector(".plwin").innerHTML = ""
})

