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


   /* function informacao(){ 
        window.alert (innerHtml='Lançado em 2008 pela Waner Bros Pictures e DC Comics : ' + 
        'Christopher Nolan - Director, Screenplay, Story, ' + 
        'Bill Finger, Jerry Robinson, Bob Kane - Characters, '+
    'Jonathan Nolan - Screenplay, ' +
    'David S. Goyer - Story, ' + 'Elenco: Christian Bale - Bruce Wayne / Batman, Heath Ledger - Joker, Michael Caine - Alfred Pennyworth, Gary Oldman - Commissioner James Gordon, Aaron Eckhart - Harvey Dent / Two-Face, Maggie Gyllenhaal - Rachel Dawes, Morgan Freeman - Lucius Fox, Nestor Carbonell - Mayor Anthony Garcia, Monique Gabriela Curnen - Anna Ramirez. ' +' Gênero: Ação/Fantasia/Herois')
    
 } */
 var area = window.document.getElementById('info')
 area.addEventListener('click',clicar)
 area.addEventListener('mouseout',sair)
 
 function clicar() {
    alert(  'Lançado em 2008 pela Waner Bros Pictures e DC Comics : ' + 
     'Christopher Nolan - Director, Screenplay, Story, ' + 
     'Bill Finger, Jerry Robinson, Bob Kane - Characters, '+
 'Jonathan Nolan - Screenplay, ' +
 'David S. Goyer - Story, ' + 'Elenco: Christian Bale - Bruce Wayne / Batman, Heath Ledger - Joker, Michael Caine - Alfred Pennyworth, Gary Oldman - Commissioner James Gordon, Aaron Eckhart - Harvey Dent / Two-Face, Maggie Gyllenhaal - Rachel Dawes, Morgan Freeman - Lucius Fox, Nestor Carbonell - Mayor Anthony Garcia, Monique Gabriela Curnen - Anna Ramirez. ' +' Gênero: Ação/Fantasia/Herois'
    )
 }
 function sair() {
    area.document.createElement("i")
    area.innerText = 'Mais Informações'
   
 }
 var bat = window.document.getElementById('bat')
 bat.addEventListener('mouseenter',entrar)
 bat.addEventListener('mouseout',sair)


 function entrar() {
     bat.innerText ='Em Gotham City o milionário Bruce Wayne, que quando jovem teve os pais assassinados por bandidos, resolve combater o crime como Batman, o Homem-Morcego. Mas chega o dia em que o vilão Coringa decide dominar a cidade e se torna um grande desafio para o super-herói.'
     bat.document.createElement("div")
    }
    function sair() {
        bat.innerText = 'Mais Informações'
        
    }    

    var aranha = window.document.getElementById('aranha')
    bat.addEventListener('mouseenter',entrar)
    bat.addEventListener('mouseout',sair)
   
   
    function entrar() {
        bat.innerText ='Peter Parker é um jovem estudioso que vive com seus tios, Ben e May, desde que seus pais faleceram. Peter tem dificuldade em se relacionar com seus colegas, por ser tímido e por eles o considerarem um nerd. Até que, em uma demonstração científica, um acidente inesperado faz com que uma aranha modificada geneticamente pique Peter. A partir de então seu corpo é quimicamente alterado pela picada da aranha.'
      
       }
       function sair() {
           bat.innerText = 'Mais Informações'
           
       }    

   