function add(nombre1, nombre2)
{
    
    nombre1 = nombre1 + nombre2;
    
    return(nombre1);
    
}
function mult(nombre1, nombre2)
{
    
    nombre1 = nombre1 * nombre2;
    
    return(nombre1); 
    
}
function sous(nombre1, nombre2)
{
    
    nombre1 = nombre1 - nombre2;
    
    return(nombre1);
    
}

function divi( nombre1, nombre2)
{
    
    nombre1 = nombre1 / nombre2;
    
    return(nombre1); 
    
}
function mod( nombre1, nombre2)
{
    
    nombre1 = nombre1 % nombre2;
    
    return(nombre1); 
    
}

function main()
{
    var nombre1 = 5; //parseInt(prompt("1er nombre"));    
    var operateur = "%"; //prompt("opérateur ?"); 
    var nombre2 = 3; //parseInt(prompt("2eme nombre"));
    var res = 0;

    if(isNaN(nombre1) || isNaN(nombre2)) {
        console.log("Un des opérateur est faux");
        return(0);
    }

    if(operateur == '+')
        res = add(nombre1, nombre2);
    else if(operateur == '*')
        res = mult(nombre1, nombre2);
    else if(operateur == '-')
        res = sous(nombre1, nombre2);
    else if(operateur == '/')
        res = divi(nombre1, nombre2);
    else if(operateur == '%')
        res = mod(nombre1, nombre2);
    else{
        printf("erreur");
        return(0); }            
    console.log("le resultât de " +nombre1+ " " +operateur+ " " +nombre2+ " = " +res+ ".");        
    return 0;
}

main();