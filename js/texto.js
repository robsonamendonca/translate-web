/**
 * Como usar:
 * Adicionar os scripts js na tag head
 * 1. idiomas.js  - dicionario com os tipo (identificadores) e sua tradução
 * 2. texto.js - classe responsavel pelos metodos e funcoes para traduzir
 * 3. textoController.js - consumo a classe e exeuta as chamadas
 * 
 * Traduzir um conteudo de um tag, deve-se:
 * 1. definir um id ou classe
 * 2. adicionar mais um tratativa em JQuery no metodo: setTextos(), onde:
 *  a) obter o conteudo da tag (html,value,text), sempre que possivel manter o mesmo nome para o tipo
 *  b) adiconar no arquivo idiomas.js - o tipo nos diversos idiomas e suas repectivas traduções; 
 * 
 * Depois somente testar
 * duvidas e sugestões: http://about.me/robsonamendonca
 * Desenvolvedor: Robson Mendonça
 * 2020-04-10


 */

 var Textos = function(){
    var lingua;
    var self =this;

    self.verificaLingua =function(){
        var aux = localStorage.getItem('lingua');
        if(aux === null){
            localStorage.setItem('lingua','pt-br');
            lingua = 'pt-br';
        }else{
            lingua = aux;
        }        
    }

    self.setLingua = function(ling){
        if(ling !== undefined){
            localStorage.setItem('lingua',ling);
            lingua = ling;
            return true;
        }else{
            return false;
        }
    }

    self.TrocaLingua = function(idioma){
            self.setLingua(idioma);
    }

    self.getLingua = function(){
        return lingua;
    }

    self.getTexto = function(tipo){
        var array = idiomas[lingua];
        return array[tipo];
    }

    self.setTextos = function(){
        /*  ATENÇÃO: Sempre usar classes ou id nas tag, evitar uso de nome de tag, 
        e sempre a classe tem que esta onde somente estiver texto, pois podera perder 
        outra tags se a mesma tive dentro delas */

        //select de opções
        $('#sellang').html(txt.getTexto('sellang'));
        $('select#tselecao option').eq(0).text(txt.getTexto('txt'));
        $('select#tselecao option').eq(1).text(txt.getTexto('lngptbr'));
        $('select#tselecao option').eq(2).text(txt.getTexto('lngenus'));
        $('select#tselecao option').eq(3).text(txt.getTexto('lngptes'));

        $('.txt2').html(txt.getTexto('txt2'));

        $('#sellangimg').html(txt.getTexto('sellang'));
        $('select.tselecaoimg option').eq(0).text(txt.getTexto('txt'));
        
        $(document).attr('title',txt.getTexto('titulo'));
        $('.th1').html(txt.getTexto('h1'));

        //mantem select com mesmo texto
        $('.tselecaoimg option:selected').text(txt.getTexto(txt.trataTextoOpcao()));
        $('#tselecao option:selected').text(txt.getTexto(txt.trataTextoOpcao()));
        
    }

    self.trataTextoOpcao = function(){
        return 'lng'+lingua.replace('-','');
    }


 }

 