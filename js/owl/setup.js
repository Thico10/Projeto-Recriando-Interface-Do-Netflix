$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


 
 function info() {
    document.getElementById("conteudo")
    window.alert(' Lançado em 2008 pela Waner Bros Pictures e DC Comics : ' + 
    'Christopher Nolan - Director, Screenplay, Story, ' + 
    'Bill Finger, Jerry Robinson, Bob Kane - Characters, '+
'Jonathan Nolan - Screenplay, ' +
'David S. Goyer - Story, ' + 
'Elenco: Christian Bale - Bruce Wayne / Batman, Heath Ledger - Joker, Michael Caine - Alfred Pennyworth, Gary Oldman - Commissioner James Gordon, Aaron Eckhart - Harvey Dent / Two-Face, Maggie Gyllenhaal - Rachel Dawes, Morgan Freeman - Lucius Fox, Nestor Carbonell - Mayor Anthony Garcia, Monique Gabriela Curnen - Anna Ramirez. ' +
' Gênero: Ação/Fantasia/Herois')
    
 }
 
   
 var bat = window.document.getElementById('bat')
 bat.addEventListener('mouseover',enter)
 bat.addEventListener('mouseout',sai)


 function enter() {
     bat.innerText = "Em Gotham City o milionário Bruce Wayne, que quando jovem teve os pais assassinados por bandidos, resolve combater o crime como Batman, o Homem-Morcego. Mas chega o dia em que o vilão Coringa decide dominar a cidade e se torna um grande desafio para o super-herói."
   
    }
    function sai() {
        bat.innerText = 'Mais Informações'
        
    }    

    var aranha = window.document.getElementById('aranha')
    aranha.addEventListener('mouseover',entrar)
    aranha.addEventListener('mouseout',sair)
   
   
       function entrar() {
        aranha.innerText ='Peter Parker é um jovem estudioso que vive com seus tios, Ben e May, desde que seus pais faleceram. Peter tem dificuldade em se relacionar com seus colegas, por ser tímido e por eles o considerarem um nerd. Até que, em uma demonstração científica, um acidente inesperado faz com que uma aranha modificada geneticamente pique Peter. A partir de então seu corpo é quimicamente alterado pela picada da aranha.'
      
       }
       function sair() {
           aranha.innerText = 'Mais Informações'
           
       }    


       var mask = window.document.getElementById('mask')
       mask.addEventListener('mouseover',ent)
       mask.addEventListener('mouseout',sa)

       function ent() {
      
       mask.innerText= 'A vida do tímido e socialmente desajeitado bancário Stanley Ipkiss muda completamente quando ele encontra no mar uma máscara que possui o espírito do deus escandinavo Loki.'
       }

       function sa(){
           mask.innerText = 'Mais informações'
       }

       var civil = window.document.getElementById('civil')
       civil.addEventListener('mouseover',guerra)
       civil.addEventListener('mouseout',fora)

       function guerra(){
           civil.innerText= 'O ataque de Ultron fez com que os políticos buscassem algum meio de controlar os super-heróis, já que seus atos afetam toda a humanidade. Tal decisão coloca o Capitão América em rota de colisão com Tony Stark, o Homem de Ferro.'
       }

       function fora(){
           civil.innerText= 'Mais Informações'
       }

       var hell = window.document.getElementById('hell')
       hell.addEventListener('mouseover',boy)
       hell.addEventListener('mouseout',ron)

       function boy(){
           hell.innerText= 'Já perto do fim da 2ª Guerra Mundial, os nazistas tentam eliminar seus inimigos usando magia negra. Uma das experiências feitas é a tentativa de invocar forças ocultas. Um deste rituais é interrompido pelas forças aliadas, que encontram um garoto com aparência de demônio e a mão direita feita de pedra, apesar do ritual não ter sido concluído. O garoto passa a ser chamado de Hellboy e é levado pelos Aliados. Sessenta anos depois, Hellboy agora luta pelo bem e é chamado quando um estranho fenômeno, possivelmente sobrenatural, acontece.'
       }

       function ron(){
           hell.innerText= 'Mais Informações'
       }
       
       var spawn = window.document.getElementById('spawn')
       spawn.addEventListener('mouseover',vem)
       spawn.addEventListener('mouseout',vai)

       function vem(){
           spawn.innerText= 'O assassino do governor Al Simmons é morto depois de ser traído por seu chefe, Jason Wynn. Ao chegar no inferno, Simmons recebe uma oferta para retornar à Terra se ele estiver disposto a liderar um exército do mal. Ele aceita e é reencarnado como um Hellspawn, uma versão horrivelmente distorcida de sua antiga personalidade. No entanto, Spawn serve como uma força do bem para o desespero de capanga do Diabo, um palhaço mau.'
       }

       function vai(){
           spawn.innerText= 'Mais Informações'
       }

       var corvo = window.document.getElementById('corvo')
       corvo.addEventListener('mouseover',brandow)
       corvo.addEventListener('mouseout',lee)

       function brandow(){
           corvo.innerText= "O roqueiro Eric Draven está morto... Mas, estranhamente, ele ainda vive. Ele ainda não pode descansar em paz. Não enquanto os vermes responsáveis por sua morte e também pelo assassinato de sua noiva permanecerem vivos. Assim, Draven retorna de seu túmulo para submeter seus matadores à uma implacável vingança. E ele não está sozinho. Um amedrontador corvo do outro mundo guia Draven em sua jornada."
       }

       function lee(){
           corvo.innerText= 'Mais Informações'
       }

       var aco = window.document.getElementById('super')
       aco.addEventListener('mouseover',clark)
       aco.addEventListener('mouseout',kent)
      
      
       function clark() {
           aco.innerText = "Um jovem menino aprende que tem poderes extraordinários e não é desta Terra. Quando jovem, ele viaja para descobrir de onde veio e para o quê foi enviado a fazer. Mas o herói nele deve emergir se quiser salvar o mundo da aniquilação e se tornar o símbolo de esperança para toda a humanidade."
         
          }
          function kent() {
              aco.innerText = 'Mais Informações'
              
          }    

          var lois = window.document.getElementById('smallville')
       lois.addEventListener('mouseover',gol)
       lois.addEventListener('mouseout',trave)
      
      
       function gol() {
           lois.innerText = "Antes da vida como Super-Homem, o jovem Clark Kent encara os problemas da adolescência enquanto aprende a controlar seus poderes e usá-los para proteger a cidade de Smallville."
          }
          function trave() {
            lois.innerText = 'Mais Informações'
              
          }    

          var ving = window.document.getElementById('vingadores')
       ving.addEventListener('mouseover',tony)
       ving.addEventListener('mouseout',stark)
      
      
       function tony() {
           ving.innerText = "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade."
          }
          function stark() {
            ving.innerText = 'Mais Informações'
              
          }    