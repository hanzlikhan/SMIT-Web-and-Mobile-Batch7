var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');
var scndOpr=true;
var degree=true;
index=0;
var memoryStore=[];


function deg(){
    if(degree){
        document.getElementById('deg').innerHTML='RAD';
        degree=!degree;
    }
    else{
        document.getElementById('deg').innerHTML='DEG';
        degree=!degree;       
    }
}

function fe(){
    screen.value=Number(screen.value).toExponential();
}


function memoryFunctions(input){

    function memDis(){
        document.getElementById('mc').style.pointerEvents='none';
        document.getElementById('mc').style.color='gray';
        document.getElementById('mr').style.pointerEvents='none';
        document.getElementById('mr').style.color='gray';
    }

    function memEn(){
        document.getElementById('mc').style.pointerEvents='auto';
        document.getElementById('mc').style.color='black';
        document.getElementById('mr').style.pointerEvents='auto';
        document.getElementById('mr').style.color='black';
    }

    if (input=='MC'){
        memoryStore=[];
    memDis();
    index=0;
    }
    else if(input=='MR'){
        index=0;
    let res=0;
    memoryStore.forEach(memCal);
    function memCal(value, idex, array){
        res+=value;
    }
    screen.value=res;
    }
    else if(input=='M+'){
        if(screen.value !==''){
            memoryStore.push(Number(eval(screen.value)));
        }
        screen.value='';
        if(memoryStore.length === 1){
            memEn();
        }
        index=0;
    }
    else if(input=='M-'){
        if(screen.value !==''){
            memoryStore.push(-1*Number(eval(screen.value)));
        }
        screen.value='';
        if(memoryStore.length === 1){
            memEn();
        }
        index=0;
    }
    else if(input=='MS'){
        if(memoryStore.length==0){
            alert('Memory is empty');
        }
        else{
            screen.value=memoryStore[index];
            if(index<memoryStore.length-1){
                index++;
            }
            else{
                index=0;
            }
        }
    }
}

function trigoFunctions(input){
    if(degree){
        screen.value=(screen.value)*(Math.PI/180);
    }
    if(input=='Sin'){
        screen.value=Math.sin(screen.value);
    }
    else if(input=='Cos'){
        screen.value=Math.cos(screen.value);
    }
    else if(input=='Tan'){
        screen.value=Math.tan(screen.value);
    }
    else if(input=='Sin-1'){
        screen.value=Math.asin(screen.value);
    }
    else if(input=='Cos-1'){
        screen.value=Math.acos(screen.value);
    }
    else if(input=='Tan-1'){
        screen.value=Math.atan(screen.value);
    }
}

function functions(input){
    if(input=='round'){
        screen.value=Math.round(screen.value);
    }
    else if(input=='ceil'){
        screen.value=Math.ceil(screen.value);
    }
    else if(input=='floor'){
        screen.value=Math.floor(screen.value);
    }
    else if(input=='trunc'){
        screen.value=Math.trunc(screen.value);
    }
}

function scndBtn(){
    if(scndOpr){
        document.getElementById('scndOp').style.boxShadow= ('inset 5px 5px 8px #00000020, inset -5px -5px 5px #ffffff');
        document.getElementById('xPow').innerHTML='x<sup>3</sup>';
        document.getElementById('root').innerHTML='<sup>3</sup>&radic;x';
        document.getElementById('powX').innerHTML='2<sup>x</sup>';
        document.getElementById('log').innerHTML='log<sub>2</sub>';
        document.getElementById('ln').innerHTML='ln<sub>2</sub>';
        document.getElementById('sin').innerHTML='Sin<sup>-1</sup>';
        document.getElementById('cos').innerHTML='Cos<sup>-1</sup>';
        document.getElementById('tan').innerHTML='Tan<sup>-1</sup>';
        scndOpr=!scndOpr;
    }
    else{
        document.getElementById('scndOp').style.boxShadow='none';
        document.getElementById('xPow').innerHTML='x<sup>2</sup>';
        document.getElementById('root').innerHTML='<sup>2</sup>&radic;x';
        document.getElementById('powX').innerHTML='10<sup>x</sup>';
        document.getElementById('log').innerHTML='log';
        document.getElementById('ln').innerHTML='ln';
        document.getElementById('sin').innerHTML='Sin';
        document.getElementById('cos').innerHTML='Cos';
        document.getElementById('tan').innerHTML='Tan';
        scndOpr=!scndOpr;      
    }
}

function pi(){
    if(screen.value == 0)
    {
        screen.value=Math.PI;
    }
    else{
        screen.value*=Math.PI;
    }
}
function e(){
    if(screen.value == 0)
    {
        screen.value=Math.E;
    }
    else{
    screen.value*=Math.E;
    }
}

function backspc(){
    screen.value=screen.value.substr(0,screen.value.length-1);
}

function pow(x,y){
    screen.value=Math.pow(x,y);
}

function divx(){
    screen.value=eval(1/screen.value);
}

function abs(){
    screen.value=Math.abs(screen.value);
}
function exp(){
    screen.value=Math.exp(screen.value);
}

function root(){  
        screen.value=Math.sqrt(screen.value);
}

function cube(){
    screen.value=Math.cbrt(screen.value);
}


function fact(){
    var i, num, f;
    f=1;
    num=screen.value;
    for(i=1;i<=num;i++)
    {
        f=f*i;
    }
    i=i-1;
    screen.value=f;
}

function log(input){
    if(input=='log'){
    screen.value=Math.log10(screen.value);
    }
    else if(input=='log2'){
        screen.value=Math.log2(screen.value);
    }
    else if(input=='ln'){
        screen.value+='('+Math.LN10+')';
    }
    else if(input=='ln2'){
        screen.value+='('+Math.LN2+')';
    }
}

function pN(){
    screen.value *= -1;
}


function chkOpr(){
    if(screen.value.charAt(screen.value.length-1) == '+' ||
       screen.value.charAt(screen.value.length-1) == '-' ||
       screen.value.charAt(screen.value.length-1) == '*' ||
       screen.value.charAt(screen.value.length-1) == '/' ||
       screen.value.charAt(screen.value.length-1) == '%' ||
       screen.value.charAt(screen.value.length-1) == '.'){
        backspc();
        chkOpr();
    }
}


function ans(){
    if(screen.value=='+' ||
       screen.value=='-' ||
       screen.value=='*' ||
       screen.value=='/' ||
       screen.value=='%' ||
       screen.value=='.'){
        screen.value='';
    }
    if(screen.value!==''){
        var res= screen.value.split('-(').join('-').split(')-').join('-')
                             .split('+(').join('+').split(')+').join('+')
                             .split('/(').join('/').split(')/').join('/')
                             .split('*(').join('*').split(')*').join('*')
                             .split('(').join('*').split(')').join('*');

        if(res.charAt(res.length-1)=='*' ||
           res.charAt(res.length-1)=='/' ||
           res.charAt(res.length-1)=='+' ||
           res.charAt(res.length-1)=='-' ||
           res.charAt(res.length-1)=='%' ||
           res.charAt(res.length-1)=='.'){
                res= res.substr(0,res.length-1);
        }
    screen.value=eval(res);
    }
}



for(item of btn)
{
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;
        if(btntext == 'DEG' ||
           btntext == 'RAD')
        {
            deg();
            btntext='';
        }
        else if(btntext == 'F-E')
        {
            fe();
            btntext='';
        }

        else if(btntext == 'MC' ||
                btntext == 'MR' ||
                btntext == 'M+' ||
                btntext == 'M-' ||
                btntext == 'MS')
        {
            memoryFunctions(btntext);
            btntext='';
        }

        else if(btntext == 'Sin'  ||
                btntext == 'Cos'  ||
                btntext == 'Tan'  ||
                btntext == 'Sin-1'||
                btntext == 'Cos-1'||
                btntext == 'Tan-1')
        {
            trigoFunctions(btntext);
            btntext='';
        }
        else if(btntext == 'ceil'  ||
                btntext == 'round' ||
                btntext == 'floor' ||
                btntext == 'trunc')
        {
            functions(btntext);
            btntext='';
        }
        
        else if(btntext == '2nd')
        {
            scndBtn();
            btntext='';
        }

        else if(btntext =='x2')
        {
            pow(screen.value,2);
            btntext='';
        }
        else if(btntext =='x3')
        {
            pow(screen.value,3);
            btntext='';
        }
        else if(btntext =='2√x')
        {
            root();
            btntext='';
        }
        else if(btntext =='3√x')
        {
            cube();
            btntext='';
        }
        else if(btntext =='xy')
        {
            btntext='**';
        }

        else if(btntext =='10x')
        {
            pow(10,screen.value);
            btntext='';
        }
        else if(btntext =='2x')
        {
            pow(2,screen.value);
            btntext='';
        }

        else if(btntext =='log' ||
                btntext =='log2'||
                btntext =='ln'  ||
                btntext =='ln2')
        {
            log(btntext);
            btntext='';
        }
        
        else if(btntext =='+/-')
        {
            pN();
            btntext='';
        }

        else if(btntext == 'mod')
        {
            chkOpr();
            btntext='%';
        }
        else if(btntext == '×')
        {
            chkOpr();
            btntext='*';
        }
        else if(btntext == '+' || btntext == '-')
        {
            chkOpr();
        }
        else if(btntext == '÷')
        {
            chkOpr();
            btntext='/';
        }
        else if(btntext == '.')
        {
            if(screen.value.charAt(screen.value.length-1)=='.'){
                btntext='';
            }
        }
        
        screen.value+=btntext;
    });
}