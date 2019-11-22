  //   const listelement = document.getElementById('list');
  //   const ListaCNPJ = [];
  //   let cnpj = document.getElementById('Valid').value;

 Validarcnpj = cnpj => {

    cnpj = cnpj.replace(/[^\d]+/g, '');
    
    // if (cnpj == '00000000000000' || cnpj == '11111111111111' || cnpj == '22222222222222' ||
    //     cnpj == '33333333333333' || cnpj == '44444444444444' || cnpj == '55555555555555' ||
    //     cnpj == '66666666666666' || cnpj == '77777777777777' || cnpj == '88888888888888' ||
    //     cnpj === '99999999999999'|| cnpj === '' || cnpj.length !== 14 ) 
    //     {
    //   return false;
    // }
    const cnpjPretreated = cnpj.split('').slice(0, 12);
    const Digits = cnpj.split('').slice(12);
  
    let firstdecrement = 5;
    let seconddecrement = 9;
    
    cnpjPretreated.forEach(element => element = parseInt(element));
  
    for (var i = 0; i < 4; i++) {
      cnpjPretreated[i] = cnpjPretreated[i] * firstdecrement;
      firstdecrement--;
    }
    for (var i = 4; i < 12; i++) {
      cnpjPretreated[i] = cnpjPretreated[i] * seconddecrement;
      seconddecrement--;
    }
  
    let d1 = 0;
    cnpjPretreated.forEach(element => (d1 += element));
    d1 = d1%11 < 2 ? 0 : 11 - d1%11;
    
    const cnpjpretreated2 = cnpj.split('').slice(0, 13);
  
    let thirddecrement = 6;
    let fourthdecrement = 9;
  
    cnpjpretreated2.forEach(element => (element = parseInt(element)));
    for (var i = 0; i < 5; i++) {
      cnpjpretreated2[i] = cnpjpretreated2[i] * thirddecrement;
      thirddecrement--;
    }
    for (var i = 5; i < 13; i++) {
      cnpjpretreated2[i] *= fourthdecrement;
      fourthdecrement--;
    }
  
    let d2 = 0;
    cnpjpretreated2.forEach(element => (d2 += element));
    d2 = d2%11 < 2 ? 0 : 11 - d2%11;
    
    if (parseInt(Digits[0]) == d1 && Digits[1] == d2) {
      console.log('CNPJ VALID');
    }else{
      console.log('CNPJ INVALID');
    }
  };
  Validarcnpj('27.598.004/0001-70');
