var validarCNPJ =  function() {
    var listelement = document.getElementById('list');
    var ListaCNPJ = [];
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
         alert('CNPJ Valido');
        
    }   
    else{
        return alert('CNPJ Invalido');
    }

};

