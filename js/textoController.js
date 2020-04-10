
var txt = new Textos();

$(document).ready(function(){
  
  txt.verificaLingua();
  $('select').formSelect(); //exclusive select img
  
  txt.setTextos();

TrocarIdioma('#tselecao'); //select somente de textos
TrocarIdioma('.tselecaoimg'); //selecct com imagens

});

var TrocarIdioma = function(idelemento){
  $(''+idelemento).change(function() {
    var valueSelect = $(''+idelemento+' option:selected').val();
    txt.TrocaLingua(valueSelect);
    txt.setTextos();
  });


}

