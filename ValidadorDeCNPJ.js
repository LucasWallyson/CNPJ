var validarCNPJ =  function(cnpj) {
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
        console.log(cnpjPreTratado)
    }

     for(var i = 4; i < 12; i++){
        cnpjPreTratado[i] = cnpjPreTratado[i] * SegundoDecremento;
        SegundoDecremento--;
         console.log(cnpjPreTratado)
     }
     var d1 = 0;
     for(var i = 0; i < cnpjPreTratado.length; i++){
         d1 += cnpjPreTratado[i];
        }
    for(var i = 0; i < cnpjPreTratado.length; i++){
        d1 = d1%11;
         }
        console.log(d1);




    
};

//86.778.880/0001-47
validarCNPJ('86.778.880/0001-47')