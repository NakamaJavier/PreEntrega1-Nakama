/*El programa calcula ejercicios de tiro oblicuo: según los datos conocidos, calcula el resto que son incognita*/
let vix
let viy
let vi
let alfa
let thmax
let tmax
let hmax
let Xmax


function viToVixy(a,b){
    b= b/57.2958
    vix = Math.round(a*Math.cos(b)*100)/100
    viy = Math.round(a*Math.sin(b)*100)/100
}

function vixyToVi(a,b){
    vi = Math.round(Math.sqrt(Math.pow(a,2)+Math.pow(b,2))*100)/100
    alfa= Math.round(Math.atan(b/a)*57.2958*100)/100
}

function thmaxFromViy(Viy){
    thmax= Math.round(Viy/9.8*100)/100
}

function hmaxFromViyThmax(Viy,Thmax){
    hmax= Math.round((Viy/2)*Thmax*100)/100
}

function tmaxFromThmax(Thmax){
    tmax= Thmax*2
}

function xmaxFromTmaxVix(Tmax,Vix){
    Xmax= Math.round(Vix*Tmax*100)/100
}

console.log("El programa se encargara de calcular los datos tipicos de un ejercicio de tiro oblicuo segun los datos \n conocidos.Los datos a conocer son tiempo de altura maxima (thmax), tiempo donde colisiona contra el piso (tmax),\n velocidad inicial (vi),velocidad inicial en x (vix), velocidad inicial en y (viy,) altura maxima (hmax), distancia \n maxima (Xmax), angulo de tiro (alfa) respecto al piso \n NOTA: se considera que el objeto comienza y termina en una misma altura")
console.log("Elija la opcion segun los datos conocidos:")
console.log("1) Vi y a")
console.log("2) vix y viy")
console.log("3) hmax y Xmax")
console.log("4) tmax y vix")
console.log("5) thmax y vix")
console.log("6) hmax y vix")

let option = prompt("Intruzca la opcion deseada")

switch(option)
{
    case '1':
        vi = Number(prompt("Intruzca el valor de vi"))
        alfa = Number(prompt("Intruzca el valor alfa"))
        viToVixy(vi,alfa)
        thmaxFromViy(viy)
        hmaxFromViyThmax(viy,thmax)
        tmaxFromThmax(thmax)
        xmaxFromTmaxVix(tmax,vix)
    break;

    case '2':
        vix = Number(prompt("Intruzca el valor de vix"))
        viy = Number(prompt("Intruzca el valor viy"))
        vixyToVi(vix,viy)
        thmaxFromViy(viy)
        hmaxFromViyThmax(viy,thmax)
        tmaxFromThmax(thmax)
        xmaxFromTmaxVix(tmax,vix)
    break;
}
console.log("Los resultados son: \n\nAngulo:"+alfa + "\nvi:"+vi+ "\nvix:"+vix + "\nviy:"+viy + "\nthmax:"+thmax+"\ntmax:"+tmax+"\nhmax:"+hmax+"\nXmax:"+Xmax)

