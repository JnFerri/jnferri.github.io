 // menu superior fica fixo ao dar scroll

 const header = document.querySelector(".header")

 window.onscroll = function(){
     if(window.pageYOffset > 0){
     header.classList.add("header-fix")
     }else{
         header.classList.remove("header-fix")
     }
 }

 
 const svgTop = []
 const svgBottom = []
 new Array(document.querySelectorAll(".svg__top")).map(valor => valor.forEach(svg => svgTop.push(svg)))
 new Array(document.querySelectorAll(".svg__bottom")).map(valor => valor.forEach(svg => svgTop.push(svg)))
 console.log(svgTop)
 
 setInterval(animacaoSVG,2000)

 function animacaoSVG(){
     for(let i = 0; i<svgTop.length;i++){
         svgTop[i].classList.add('svg_animation')
     }
     for(let i = 0; i<svgBottom.length;i++){
         svgBottom[i].classList.add('svg_animation')
     }
     setTimeout(removeSVG, 3000)

 }

 function removeSVG(){
     for(let i = 0; i<svgTop.length;i++){
         svgTop[i].classList.remove('svg_animation')
         for(let i = 0; i<svgBottom.length;i++){
             svgBottom[i].classList.remove('svg_animation')
         }
     }
 }

 const tituloApresentacao = document.querySelector(".apresentacao__titulo")
 const tituloParagrafo = document.querySelector(".apresentacao__paragrafo")
 const imgApresentacao = document.querySelector(".apresentacao__imagem")
 
 window.onload = setTimeout(animacaoTitulo(), 1000)
 window.onload = setTimeout(animacaoImg(), 1000)

 function animacaoTitulo(){
     tituloApresentacao.classList.add("apresentacao__titulo-animacao")
     tituloParagrafo.classList.add("apresentacao__titulo-animacao")
 }
 function animacaoImg(){
     imgApresentacao.classList.add("apresentacao__imagem-animacao")
 }
 