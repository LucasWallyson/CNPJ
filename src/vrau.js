validCnpj = cnpj => {
  cnpj = cnpj.replace(/[^\d]+/g, '');
		    if ( !cnpj || cnpj.length != 14
	    			|| cnpj == "00000000000000" || cnpj == "11111111111111" || cnpj == "22222222222222" 
	    			|| cnpj == "33333333333333" || cnpj == "44444444444444" || cnpj == "55555555555555" 
	    			|| cnpj == "66666666666666"  || cnpj == "77777777777777"|| cnpj == "88888888888888" 
	    			|| cnpj == "99999999999999")
		        return false;
		    let size = cnpj.length - 2
		    let numbers = cnpj.substring(0,size)
		    let digits = cnpj.substring(size)
		    let sum = 0
		    let pos = size - 7
		    for (i = size; i >= 1; i--) {
		      sum += numbers.charAt(size - i) * pos--
		      if (pos < 2) pos = 9
		    }
		    let result = sum % 11 < 2 ? 0 : 11 - sum % 11
		    if (result != digits.charAt(0)) return false;
		    size = size + 1
		    numbers = cnpj.substring(0,size)
		    sum = 0
		    pos = size - 7
		    for (i = size; i >= 1; i--) {
		      sum += numbers.charAt(size - i) * pos--
		      if (pos < 2) pos = 9
		    }
		    result = sum % 11 < 2 ? 0 : 11 - sum % 11
		    if (result != digits.charAt(1)) return false;
        return true;
      }
// ValidCpf = cpf => {
//   cpf = cpf.replace(/[^\d]/g, "");
//   if ( cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" 
//     || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" 
//     || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" 
//     || cpf == "99999999999" || !cpf || cpf.length != 11)
//   return false;
// let sum = 0
//   let rest
// for (var i = 1; i <= 9; i++) {
//   sum += parseInt(cpf.substring(i-1, i)) * (11 - i)
//   rest = (sum * 10) % 11
//   }
//   if ((rest == 10) || (rest == 11))  rest = 0
//   if (rest != parseInt(cpf.substring(9, 10))) return false
//   sum = 0
//   for (var i = 1; i <= 10; i++) {
//     sum += parseInt(cpf.substring(i-1, i)) * (12 - i)
//     rest = (sum * 10) % 11
//   }
//   if ((rest == 10) || (rest == 11))  rest = 0
//   if (rest != parseInt(cpf.substring(10, 11))) return false
//   return true
// }
// ValidCpf('592.357.010-66');