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