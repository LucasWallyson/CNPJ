var validarCNPJ =  function() {
    var cnpj = document.getElementById('demo2').value;
    cnpj = cnpj.replace(/[^\d]+/g,'');

    // Elimina CNPJs invalidos conhecidos 
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999" ||
        cnpj == ''|| 
        cnpj.length != 14 ){

            return false;
    }
    cnpj = cnpj.split('');
    var cnpjPreTratado = cnpj.slice(0,12);
    var resultadoVerdadeiro = cnpj.slice(12);

    var primeiroDecremento = 5;
    var SegundoDecremento = 9;

    for(var i = 0; i < cnpjPreTratado.length; i++){
        cnpjPreTratado[i] = parseInt(cnpjPreTratado[i]);   
    }
    for(var i = 0; i < 4; i++){
        cnpjPreTratado[i] = cnpjPreTratado[i] * primeiroDecremento;
        primeiroDecremento--;
    }
      
     for(var i = 4; i < 12; i++){
        cnpjPreTratado[i] = cnpjPreTratado[i] * SegundoDecremento;
        SegundoDecremento--;    
     }  
       
     var d1 = 0;
     for(var i = 0; i < cnpjPreTratado.length; i++){
         d1 += cnpjPreTratado[i];
    }
    d1 = (d1%11);
    if(d1<2) {
        d1=0;
    }
    else {
        d1= (11-d1);
    } 
      
    var cnpjPreTratado2 = cnpj.slice(0,13);

    var primeiroDecremento1 = 6;
    var SegundoDecremento1 = 9;

    for(var i = 0; i < cnpjPreTratado2.length; i++){
        cnpjPreTratado2[i] = parseInt(cnpjPreTratado2[i]);   
    }

    for(var i = 0; i < 5; i++){
        cnpjPreTratado2[i] = cnpjPreTratado2[i] * primeiroDecremento1;
        primeiroDecremento1--;
    }
       
     for(var i = 5; i < 13; i++){
        cnpjPreTratado2[i] = cnpjPreTratado2[i] * SegundoDecremento1;
        SegundoDecremento1--;
     }

     var d2 = 0;
     for(var i = 0; i < cnpjPreTratado2.length; i++){
         d2 += cnpjPreTratado2[i];
    }
    d2 = (d2%11);
    if(d2<2) {
        d2=0;
    }
    else {
        d2= (11-d2);
    }    
    if(parseInt(resultadoVerdadeiro[0]) == d1 && resultadoVerdadeiro[1] == d2) { 
       console.log(true)
        return true;
    }   
    else{
        console.log(false)
        return false;
    }
};

var Geradordecnpj = function() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

    var n1 = getRandomInt(0, 9);
    var n2 = getRandomInt(0, 9);
    var n3 = getRandomInt(0, 9);
    var n4 = getRandomInt(0, 9);
    var n5 = getRandomInt(0, 9);
    var n6 = getRandomInt(0, 9);
    var n7 = getRandomInt(0, 9);
    var n8 = getRandomInt(0, 9);
    var n9 = 0; //Math.round(Math.random()*10)
    var n10 = 0; //Math.round(Math.random()*10)
    var n11 = 0; //Math.round(Math.random()*10)
    var n12 = 1; //Math.round(Math.random()*10)
    var d1 = n1*5+n2*4+n3*3+n4*2+n5*9+n6*8+n7*7+n8*6+n9*5+n10*4+n11*3+n12*2;
    d1 = (d1%11);
    if(d1<2){
        d1=0;
    }else{
        d1=11-d1;
    }
    var d2 = n1*6+n2*5+n3*4+n4*3+n5*2+n6*9+n7*8+n8*7+n9*6+n10*5+n11*4+n12*3+d1*2;
    d2 = (d2%11);
    if(d2<2){
        d2=0;
    }else{
        d2=11-d2;
    }

    var mascara =''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'/'+n9+n10+n11+n12+'-'+d1+d2+'';
    document.getElementById('demo1').value= mascara;
    
};

// Geradordecnpj()
// var element = document.getElementById('demo1');
// element.innerHTML = "<input type='text' class='form-control'value="+value+">";
// var element2 = document.getElementById('demo2');
// element2.innerHTML = 'dsad'

