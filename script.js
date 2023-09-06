let input=document.getElementById('inputbox');
let butn=document.querySelectorAll('button');
let arr=Array.from(butn);
let string="";
arr.forEach(ele => {
    ele.addEventListener('click',(e)=>
    {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML == "AC")
        {
            string="";
            input.value=string;
        }
        else{
            string+=e.target.innerHTML;
            input.value=string;

        }
    })
    }
)