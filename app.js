/*El programa calcula ejercicios de tiro oblicuo: según los datos conocidos, calcula el resto que son incognita*/
let vix
let viy
let vi
let alfa
let thmax
let tmax
let hmax
let Xmax

function vixyFromViAlfa(Vi,Alfa){
    Alfa= Alfa/57.2958
    vix = Math.round(Vi*Math.cos(Alfa)*100)/100
    viy = Math.round(Vi*Math.sin(Alfa)*100)/100
}
function viAlfaFromVixViy(Vix,Viy){
    vi = Math.round(Math.sqrt(Math.pow(Vix,2)+Math.pow(Viy,2))*100)/100
    alfa= Math.round(Math.atan(Viy/Vix)*57.2958*100)/100
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
function viyFromHmax(Hmax){
    viy= Math.round(Math.sqrt(Hmax*2*9.8)*100)/100
}
function vixFromXmaxTmax(xmax,Tmax){
    vix= Math.round(xmax/Tmax*100)/100
}
function thmaxFromTmax(Tmax){
    thmax = Tmax/2
}
function viyFromThmax(Thmax){
    viy= Math.round(thmax*9.8*100)/100
}

alert("El programa se encargara de calcular los datos tipicos de un ejercicio de tiro oblicuo segun los datos conocidos.Los datos a conocer son tiempo de altura maxima (thmax), tiempo donde colisiona contra el piso (tmax), velocidad inicial (vi),velocidad inicial en x (vix), velocidad inicial en y (viy,) altura maxima (hmax), distancia maxima (Xmax), angulo de tiro (alfa) respecto al piso \n NOTA: se considera que el objeto comienza y termina en una misma altura")
let option
do{
    option = prompt("Elija la opcion segun los datos conocidos: \n1) vi y a \n2) vix y viy\n3) hmax y Xmax\n4) tmax y vix\n5) thmax y vix\n6) hmax y vix\nEscriba ESC para salir\n\nIntruzca la opcion deseada").toUpperCase()

    switch(option)
    {
        case '1':
            vi = Number(prompt("Intruzca el valor de vi"))
            do{
                alfa = Number(prompt("Intruzca el valor alfa"))
                if(alfa>90||alfa<0){
                    alert("El angulo alfa debe ser un valor entre 0 y 90")
                }
            }while(alfa>90||alfa<0);
            vixyFromViAlfa(vi,alfa)
            thmaxFromViy(viy)
            hmaxFromViyThmax(viy,thmax)
            tmaxFromThmax(thmax)
            xmaxFromTmaxVix(tmax,vix)
        break;

        case '2':
            vix = Number(prompt("Intruzca el valor de vix"))
            viy = Number(prompt("Intruzca el valor viy"))
            viAlfaFromVixViy(vix,viy)
            thmaxFromViy(viy)
            hmaxFromViyThmax(viy,thmax)
            tmaxFromThmax(thmax)
            xmaxFromTmaxVix(tmax,vix)
        break;

        case '3':
            hmax = Number(prompt("Intruzca el valor de hmax"))
            Xmax = Number(prompt("Intruzca el valor Xmax"))
            viyFromHmax(hmax)
            thmaxFromViy(viy)
            tmaxFromThmax(thmax)
            vixFromXmaxTmax(Xmax,tmax)
            viAlfaFromVixViy(vix,viy)
        break;

        case '4':
            tmax = Number(prompt("Intruzca el valor de tmax"))
            vix = Number(prompt("Intruzca el valor vix"))
            thmaxFromTmax(tmax)
            viyFromThmax(thmax)
            hmaxFromViyThmax(viy,thmax)
            xmaxFromTmaxVix(tmax,vix)
            viAlfaFromVixViy(vix,viy)
        break;

        case '5':
            thmax = Number(prompt("Intruzca el valor de thmax"))
            vix = Number(prompt("Intruzca el valor vix"))
            tmaxFromThmax(thmax)
            viyFromThmax(thmax)
            hmaxFromViyThmax(viy,thmax)
            xmaxFromTmaxVix(tmax,vix)
            viAlfaFromVixViy(vix,viy)
        break;

        case '6':
            hmax = Number(prompt("Intruzca el valor de hmax"))
            vix = Number(prompt("Intruzca el valor vix"))
            viyFromHmax(hmax)
            thmaxFromViy(viy)
            tmaxFromThmax(thmax)
            xmaxFromTmaxVix(tmax,vix)
            viAlfaFromVixViy(vix,viy)
        break;
        
        case "ESC":
        break;

        default:
            alert("No es una opcion valida")
        break;
    }
    if(option>=1&&option<=6)
    alert("Los resultados son: \n\nAngulo = "+alfa+"[°]\nvi = "+vi+ "[m/s]\nvix = "+vix + "[m/s]\nviy = "+viy + "[m/s]\nthmax = "+thmax+"[s]\ntmax = "+tmax+"[s]\nhmax = "+hmax+"[m]\nXmax = "+Xmax+"[m]")
}while(option!="ESC")
