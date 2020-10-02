var answer = document.querySelectorAll("#answer");

function getFirstAnswerResult() {
  answer[0].textContent =
    "10 10 10 10 10 10 10 10 10 10 \n вывод будет таким как указано выше так как setTimeout срабатывает только после \n окончания цикла и var ,которая может хранить только одно значение будет\n выводить каждый раз 10 то есть его длину, а если бы мы объявили с помощью let то все бы сработало так как let будет хранить для каждого блока своё значение";
};

function getSecondAnswerResult() {
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
    var min = date.getMinutes();
    var seconds = date.getSeconds();
    var daylist = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    
    var prepand = (hour >= 12)? " PM ":" AM ";
    hour = (hour >= 12)? hour - 12: hour;
    answer[1].textContent =`"Today is: " ${daylist[day]}\nCurrent time is: ${hour+prepand}:${min}:${seconds}`
    
};

function getThirdAnswerResult() {
    let num = prompt('What number do you want to factorialize?')
    function factorial(num){
        if(num<0){
            return -1;
        }
        else if(num==0){
            return 1;
        }
        else{
            return num*factorial(num-1)
        }
    }
   answer[2].textContent= factorial(num);
    
  };

  function getFourthAnswerResult() {
    let num1 = prompt('Enter the first number ');
    let num2 = prompt('Enter the second number ');
    function Int(num1,num2){
        if(num1>num2){
            answer[3].textContent = num1;
        }
        else {
            answer[3].textContent =num2;
        }
    }
    Int(num1,num2);
    
  };

  function getFifthAnswerResult() {
    myColor = ["Red", "Green", "White", "Black"];
    answer[4].textContent=`${myColor.join()}\n${myColor.join("+")}`;
    
  };

  function getSixthAnswerResult() {

    var date_int = prompt("Enter date:")
    function month_name(date_int){

        var monthlist =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
       answer[5].textContent=monthlist[date_int.getMonth()];
    }
    
    month_name(new Date(date_int)); 
    
  };

  function getSeventhAnswerResult() {

    var str = prompt("Enter string:")

    function uppercaseORnot(str){
        var string = str.trim();
    
        var firstChar = string[0];
        if(firstChar === firstChar.toUpperCase())
        {
            return "The first character is uppercase";
    }
        else{
            return "Ther first character is lowercase";
        }
    }
   answer[6].textContent= uppercaseORnot(str);
     
    
  };



    function draw(){
        var ctx = document.getElementById("my-canvas").getContext("2d");
        ctx.beginPath();
        ctx.arc(150,150,100,0,Math.PI*2,false); 
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(150,150,75,0,Math.PI);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(110,110,20,0,Math.PI*2,false); 
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(185,110,20,0,Math.PI*2,false); 
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(110,115,8,0,Math.PI*2,false); 
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(185,115,8,0,Math.PI*2,false); 
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        }
        window.onload = draw;


        function getNineAnswerResult() {

            var num = prompt("Enter a number:")

            answer[7].textContent = num.split("").reverse().join("");


        
            
           
             
            
          };






  