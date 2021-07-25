buttons_operator=document.querySelectorAll('.operator')
buttons_number=document.querySelectorAll('.number')
screen=document.getElementById('input-dsg')
screenvalue=''
for (item1 of buttons_number){
    item1.addEventListener('click', (e)=>{
        button_number=e.target.innerText
        screenvalue+=button_number
        screen.value=screenvalue
    })
}
for (item2 of buttons_operator){
    i=0
    item2.addEventListener('click',(f)=>{
        button_operator=f.target.innerText
        if (i>0){
            result=output(screenvalue)
            screenvalue=result
        }
        if (button_operator=='+' || button_operator=='-' || button_operator=='*' || button_operator=='/'){
            screenvalue+=button_operator
        } 
        else if (button_operator=='%'){
            screenvalue+=button_operator
        } 
        else if (button_operator=='1/x'){
            screenvalue='1/'
        }
        else if(button_operator=='xy'){
            screenvalue=screenvalue+'^'
        }
        else if(button_operator=='x2'){
            screenvalue=screenvalue+'^2'
        }
        else if (button_operator=='x3'){
            screenvalue=screenvalue+'^3'
        }
        else if (button_operator=='2x'){
            screenvalue='2^'
        }
        else if (button_operator=='ex'){
            screenvalue='e^'
        }
        else if(button_operator=='e'){
            screenvalue='e'
        }
        else if (button_operator=='√'){
            screenvalue='√'
        }
        else if (button_operator=='|x|'){
            screenvalue='|'+screenvalue+'|'
        }
        else if(button_operator=='x!'){
            screenvalue=screenvalue+'!'
        }
        else if (button_operator=='ln'){
            screenvalue='ln'
        }
        else if (button_operator=='log'){
            screenvalue='log'
        }
        else if (button_operator=='π'){
            screenvalue="π"
        }
        else if (button_operator=='cos'){
            screenvalue='cos'
        }
        else if (button_operator=='sin'){
            screenvalue='sin'
        }
        else if(button_operator=='tan'){
            screenvalue=screenvalue+'tan'
        }
        else if(button_operator=='sin-1'){
            screenvalue='arcsin'
        }
        else if(button_operator=='cos-1'){
            screenvalue='arccos'
        }
        else if(button_operator=='tan-1'){
            screenvalue='arctan'
        }
        else if (button_operator=='tanh'){
            screenvalue='tanh'
        }
        else if(button_operator=='sinh'){
            screenvalue='sinh'
        }
        else if(button_operator=='cosh'){
            screenvalue='cosh'
        }
        else if(button_operator=='sinh-1'){
            screenvalue='arcsinh'
        }
        else if(button_operator=='cosh-1'){
            screenvalue='arccosh'
        }
        else if(button_operator=='tanh-1'){
            screenvalue='arctanh'
        }
        screen.value=screenvalue
        i+=1
    })
}
function output(v){
    if (v.includes("|")){
        screenvalue=screenvalue.slice(1,-1)
        if (v.includes("+") || v.includes("-") || v.includes("*") || v.includes("/") || v.includes('π')){
            if (v.includes('π')){
                if(screenvalue.length >1){
                    screenvalue=screenvalue.replace('π',Math.PI)
                }
                else {
                    screenvalue='1*'+'Math.PI'
                }
            }
            screenvalue= eval(v)
        }
        return Math.abs(Number(screenvalue))
    }
    else if(v.includes('#')){
        s='# is a Empty button'
        return s
    }
    else if(v.includes('arctanh')){
        screenvalue=screenvalue.replace('arctanh','')
        screenvalue=screenvalue.replace('(','')
        screenvalue=screenvalue.replace(')','')
        return Math.atanh(Number(screenvalue))
    }
    else if(v.includes('arcsinh')){
        screenvalue=screenvalue.replace('arcsinh','')
        screenvalue=screenvalue.replace('(','')
        screenvalue=screenvalue.replace(')','')
        return Math.asinh(Number(screenvalue))
    }
    else if(v.includes("arccosh")){
        screenvalue=screenvalue.replace('arccosh','')
        screenvalue=screenvalue.replace('(','')
        screenvalue=screenvalue.replace(')','')
        return Math.acosh(Number(screenvalue))
    }
    else if(v.includes('tanh')){
        screenvalue=screenvalue.replace('tanh','')
        screenvalue=screenvalue.replace('(','')
        screenvalue=screenvalue.replace(')','')
        return Math.tanh(Number(screenvalue))
    }
    else if(v.includes('sinh')){
        screenvalue=screenvalue.replace('sinh','')
        screenvalue=screenvalue.replace('(','')
        screenvalue=screenvalue.replace(')','')
        return Math.sinh(Number(screenvalue))
    }
    else if(v.includes('cosh')){
        screenvalue=screenvalue.replace('cosh','')
        screenvalue=screenvalue.replace('(','')
        screenvalue=screenvalue.replace(')','')
        return Math.cosh(Number(screenvalue))
    }
    else if(v.includes('arctan')){
        screenvalue=screenvalue.replace('arctan','')
        screenvalue=screenvalue.replace('(','')
        screenvalue=screenvalue.replace(')','')
        return (Math.atan(Number(screenvalue)))*180/Math.PI
    }
    else if(v.includes('arcsin')){
        screenvalue=screenvalue.replace('arcsin','')
        screenvalue=screenvalue.replace('(','')
        screenvalue=screenvalue.replace(')','')
        return (Math.asin(Number(screenvalue)))*180/Math.PI
    }
    else if(v.includes('arccos')){
        screenvalue=screenvalue.replace('arccos','')
        screenvalue=screenvalue.replace('(','')
        screenvalue=screenvalue.replace(')','')
        return (Math.acos(Number(screenvalue)))*180/Math.PI
    }
    else if(v.includes('sin')){
        screenvalue=screenvalue.replace('sin','')
        screenvalue=screenvalue.replace('(','')
        screenvalue=screenvalue.replace(')','')
        return Math.sin((Number(screenvalue)*Math.PI)/180)
    }
    else if (v.includes('cos')){
        screenvalue=screenvalue.replace('cos','')
        screenvalue=screenvalue.replace('(','')
        screenvalue=screenvalue.replace(')','')
        return Math.cos((Number(screenvalue)*Math.PI)/180)
    }
    else if(v.includes('tan')){
        screenvalue=screenvalue.replace('tan','')
        screenvalue=screenvalue.replace('(','')
        screenvalue=screenvalue.replace(')','')
        return Math.tan((Number(screenvalue)*Math.PI)/180)
    }
    else if(v.includes('ln') || v.includes("log")){
        if (v.includes('log')){
            screenvalue=screenvalue.replace('log','')
            screenvalue=screenvalue.replace('(','')
            screenvalue=screenvalue.replace(')','')
            return (Math.log(screenvalue)/Math.log(10)) 
        }
        else {
            screenvalue=screenvalue.replace('ln','')
            screenvalue=screenvalue.replace('(','')
            screenvalue=screenvalue.replace(')','')
            return (Math.log(screenvalue)/Math.log(Math.E))
        }
    }
    else if (v.includes('√')){
        screenvalue=screenvalue.replace('√','')
        screenvalue=screenvalue.replace('(','')
        screenvalue=screenvalue.replace(')','')
        return Math.sqrt(screenvalue)
    }
    else if (v.includes('e')){
        if (screenvalue.length>1){
            screenvalue=screenvalue.replace('e','')
            screenvalue=screenvalue.replace('^','')
            screenvalue=screenvalue.replace('(','')
            screenvalue=screenvalue.replace(')','')
            return Math.exp(Number(screenvalue))
        }
        else{
            return Math.exp(1)
        }
    }
    else if (v.includes("^")){
        const arr=screenvalue.split("^")
        screenvalue=screenvalue.replace('(','')
        screenvalue=screenvalue.replace(')','')
        return Math.pow(arr[0],arr[1])
    }
    else if (v.includes('%')){
        screenvalue=screenvalue.replace("%",'')
        screenvalue=screenvalue.replace('(','')
        screenvalue=screenvalue.replace(')','')
        return Number(screenvalue)/100
    }
    else if(v.includes('!')){
        screenvalue=Number(screenvalue.replace('!',''))
        return factorial(screenvalue)
    }
    else if (v.includes("+") || v.includes("-") || v.includes("*") || v.includes("/") || v.includes('π')){
        if (v.includes('π')){
            if(screenvalue.length >1){
                screenvalue=screenvalue.replace('π',Math.PI)
            }
            else {
                screenvalue='1*'+'Math.PI'
            }
        }
        return eval(v)
    }
}
assign=document.querySelectorAll('.assign')
for (item of assign){
    item.addEventListener('click', (e)=>{
        buttonText=e.target.innerText
        if (buttonText=='C'){
            i=0
            screenvalue=''
            screen.value=screenvalue
        }
        else if(buttonText=='del'){
            screenvalue=screenvalue.slice(0,-1)
            screen.value=screenvalue
        }
        else{
            i=0
            screenvalue=output(screenvalue)
            screen.value=screenvalue
        }
    })
}
function factorial(n){
    if (n==0){
        return 1
    }
    s=n*factorial(n-1)
    return s
}
