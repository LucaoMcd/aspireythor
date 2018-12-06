// movimentação

var comidaX = [0, 800, 1140, 0]
var comidaY = [0, 300, 300, 0]
var comida1 = true
var comida2 = true

// definir se a comida é boa[1], ou ruim [0]
var saudavel = 1

var sugar = false
var dificuldade = 0
var pontuacao = 0
var comidaColisao = true
var IMC = 15
var status
var font, fontsize = 18

// pause

var stop = false
var chaveStop = 0

// imagens

var imgCenarioFase1
var imgCaixaFase1
var imgFundoFase1
var legal
var legalnao
var imgSugador

var morango
var uva
var pera
var maca
var banana
var laranja

var leite
var pao

var imgDaFruta = 1

var batata
var frango
var hamburguer
var linguica
var hotdog
var sorvete

var imgDaGuloseima = 1

var imgFundoFase2

var bebeBaixo
var bebeCima
var bebeQueixo
var mamadeira

var criancaBaixo
var criancaCima

var telaFase1
var telaObjetivo1
var telaFase2
var telaObjetivo2
var telaFase3
var telaObjetivo3

var end
var restart

// telas

var introducao = true
var objetivo1 = false
var introducaoFase2 = false
var objetivo2 = false
var introducaoFase3 = false
var objetivo3 = false
var contaTempo = 0
var start = false
var fase = 1
var perdeu = false
var gameend = false

// audio

var ativaSomComida = false

var caixaSound
var comerSound
var fase1Sound
var fase2Sound
var fase3Sound
var perdeuSound
var sugadorSound
var introSound
var vitoriaSound
var transicaoSound

function preload(){

  // som

  caixaSound = loadSound('sound/coin.wav')
  comerSound = loadSound('sound/eat.mp3')
  fase1Sound = loadSound('sound/fase1.mp3')
  fase2Sound = loadSound('sound/fase2.mp3')
  fase3Sound = loadSound('sound/fase3.mp3')
  perdeuSound = loadSound('sound/FAIL.mp3')
  sugadorSound = loadSound('sound/SLIP.mp3')
  introSound = loadSound('sound/intro.mp3')
  vitoriaSound = loadSound('sound/YAY.mp3')
  transicaoSound = loadSound('sound/TRANSITION.mp3')

  // fonte

  font = loadFont('assets/GoboldRegular.otf')

  // imagens

  imgCenarioFase1 = loadImage('img/balcao.png')
  imgCaixaFase1 = loadImage('img/caixa.png')
  imgFundoFase1 = loadImage('img/fundoBalcao.png')
  legal = loadImage('img/legal.png')
  legalnao = loadImage('img/legalnao.png')
  imgSugador = loadImage('img/sugador.png')

  morango = loadImage('img/morango.png')
  uva = loadImage('img/uva.png')
  pera = loadImage('img/pera.png')
  maca = loadImage('img/maca.png')
  banana = loadImage('img/banana.png')
  laranja = loadImage('img/laranja.png')

  batata = loadImage('img/batata.png')
  frango = loadImage('img/frango.png')
  hamburguer = loadImage('img/hamburguer.png')
  linguica = loadImage('img/linguica.png')
  hotdog = loadImage('img/hotdog.png')
  sorvete = loadImage('img/sorvete.png')

  pao = loadImage('img/pao.png')
  leite = loadImage('img/leite.png')

  imgFundoFase2 = loadImage('img/fase2.png')

  bebeCima = loadImage('img/bebeCima1.png')
  bebeBaixo = loadImage('img/bebeBaixo.png')
  bebeQueixo = loadImage('img/bebeQueixo.png')
  mamadeira = loadImage('img/mamadeira.png')

  criancaCima = loadImage('img/criancaCabeca.png')
  criancaBaixo = loadImage('img/crianca.png')

  telaFase1 = loadImage('img/Telafase1.png')
  telaObjetivo1 = loadImage('img/objetivoFase1.png')
  telaFase2 = loadImage('img/Telafase2.png')
  telaObjetivo2 = loadImage('img/fase2objetivo.png')
  telaFase3 = loadImage('img/Telafase3.png')
  telaObjetivo3 = loadImage('img/fase3objetivo.png')

  end = loadImage('img/end.png')
  restart = loadImage('img/restart.png')

}

function setup() {
  createCanvas(800, 512);

  introSound.play()

  // características do texto

  textFont(font)
  textSize(fontsize)
}

function draw() {
  background(170)

  if(start){

    // imagens de fundo e animação da fase 1

    if(fase == 1){
      image(imgFundoFase1, 0, -10)
      image(imgCenarioFase1, 0, 85)
      if(comidaX[1] < 180 && saudavel == 1){
        image(legal, 110, 285)
      } else if(comidaX[1] < 180 && saudavel == 0){
        image(legalnao, 110, 285, 50, 50)
      }
    } else if(fase == 2 || fase == 3){
      image(imgFundoFase2, -70, -15)
    }

    // pause

    if(chaveStop >= 1){
      chaveStop++
      if(chaveStop > 10){
        chaveStop = 0
      }
    }

    if(keyIsDown(80) && chaveStop == 0){
      if(stop){
        stop = false
        chaveStop++
      } else {
        stop = true
        chaveStop++
      }
    }

    // comida

    function spawnComida(indice){
      if(saudavel == 1){
        fill(255)
        if(fase == 3){
          if(imgDaFruta == 0){
            image(morango, comidaX[indice], comidaY[indice] - 9)
            image(morango, comidaX[indice] + 40, comidaY[indice] - 9)
          } else if(imgDaFruta == 1){
            image(banana, comidaX[indice], comidaY[indice] - 9)
            image(banana, comidaX[indice] + 40, comidaY[indice] - 9)
          } else if(imgDaFruta == 2){
            image(maca, comidaX[indice], comidaY[indice] - 9)
            image(maca, comidaX[indice] + 40, comidaY[indice] - 9)
          } else if(imgDaFruta == 3){
            image(pera, comidaX[indice], comidaY[indice] - 9)
            image(pera, comidaX[indice] + 40, comidaY[indice] - 9)
          } else if(imgDaFruta == 4){
            image(laranja, comidaX[indice], comidaY[indice] - 9)
            image(laranja, comidaX[indice] + 40, comidaY[indice] - 9)
          } else if(imgDaFruta == 5){
            image(uva, comidaX[indice], comidaY[indice] - 9)
            image(uva, comidaX[indice] + 40, comidaY[indice] - 9)
          }
        } else if(fase == 2){
          image(mamadeira, comidaX[indice], comidaY[indice] - 29)
        } else if(fase == 1) {
          if(imgDaFruta == 0){
            image(morango, comidaX[indice], comidaY[indice] - 9)
            image(morango, comidaX[indice] + 40, comidaY[indice] - 9)
          } else if(imgDaFruta == 1){
            image(banana, comidaX[indice], comidaY[indice] - 9)
            image(banana, comidaX[indice] + 40, comidaY[indice] - 9)
          } else if(imgDaFruta == 2){
            image(maca, comidaX[indice], comidaY[indice] - 9)
            image(maca, comidaX[indice] + 40, comidaY[indice] - 9)
          } else if(imgDaFruta == 3){
            image(pao, comidaX[indice], comidaY[indice] + 4)
            image(pao, comidaX[indice] + 40, comidaY[indice] + 4)
          } else if(imgDaFruta == 4){
            image(leite, comidaX[indice], comidaY[indice] - 29)
            image(leite, comidaX[indice] + 40, comidaY[indice] - 29)
          } else if(imgDaFruta == 5){
            image(uva, comidaX[indice], comidaY[indice] - 9)
            image(uva, comidaX[indice] + 40, comidaY[indice] - 9)
          }
        }
      } else {
        fill(255, 70, 70)
        if(imgDaGuloseima == 0){
          image(batata, comidaX[indice] - 25, comidaY[indice] - 9)
          image(batata, comidaX[indice] + 25, comidaY[indice] - 9)
        } else if(imgDaGuloseima == 1){
          image(sorvete, comidaX[indice] - 20, comidaY[indice] - 9)
          image(sorvete, comidaX[indice] + 25, comidaY[indice] - 9)
        } else if(imgDaGuloseima == 2){
          image(hamburguer, comidaX[indice] - 25, comidaY[indice] - 9)
          image(hamburguer, comidaX[indice] + 25, comidaY[indice] - 9)
        } else if(imgDaGuloseima == 3){
          image(hotdog, comidaX[indice] - 20, comidaY[indice] - 9)
          image(hotdog, comidaX[indice] + 20, comidaY[indice] - 9)
        } else if(imgDaGuloseima == 4){
          image(linguica, comidaX[indice] - 20, comidaY[indice] - 9)
          image(linguica, comidaX[indice] + 25, comidaY[indice] - 9)
        }
      }

      if(comidaX[indice] > 100 && (!sugar || comidaX[indice] > 290)){
        if(!stop){
          comidaX[indice] -= 4 + dificuldade
        }
      } else if(!sugar){
        comidaX[indice] = 800
        saudavel = Math.floor(Math.random() * 1.6)
        imgDaGuloseima = Math.floor(Math.random() * 4.6)
        imgDaFruta = Math.floor(Math.random() * 5.6)
        comidaColisao = true
      }
    }

    // sugador

    function sugador(indice){
      if(keyIsDown(UP_ARROW)){
        if(sugar == false){
          sugadorSound.play()
        }
        sugar = true
      }

      if(sugar){
        if(comidaY[indice] > 240){
            comidaY[indice] -= 6
            comidaX[indice] -= 1
            sugar = true
          } else {
            comidaY[indice] = 300
            comidaX[indice] = 800
            saudavel = Math.floor(Math.random() * 1.6)
            imgDaFruta = Math.floor(Math.random() * 5.6)
            imgDaGuloseima = Math.floor(Math.random() * 4.6)
            comidaColisao = true
            sugar = false
          }
      }
    }


    // colisões com p5.collide2d.js

    function colisao(indice){
      if(collideRectRect(comidaX[indice], comidaY[indice], 40, 40, 60, 260, 90, 90) && comidaColisao){
        if(saudavel == 1) {
          pontuacao += 10
          if(fase == 1){
            caixaSound.play()
          } else if(fase >= 2){
            comerSound.play()
          }
          if(IMC > 15){
            IMC -= 1
          }
        } else {
          if(fase == 1){
            caixaSound.play()
          } else if(fase >= 2){
            comerSound.play()
          }
          IMC += 2
        }
        comidaColisao = false
      }
      if(collideRectRect(comidaX[indice], comidaY[indice], 40, 40, 250, 200, 150, 50) && comidaColisao){
        if(saudavel == 0) {
          pontuacao += 10
        }
        comidaColisao = false
      }
    }

    // spawnar a comida

    if(comida1){
      spawnComida(1)
      colisao(1)
      if((comidaX[1] > 235 || sugar == true) && comidaX[1] < 295){
        sugador(1)
      }
    }

    // aumentar dificuldade

    if(pontuacao >= 300){
      start = false
      if(fase == 1){
        introducaoFase2 = true
        fase1Sound.stop()
      } else if(fase == 2){
        introducaoFase3 = true
        fase2Sound.stop()
      }
      pontuacao = 0
      if(fase == 3){
        start = false
        gameend = true
        fase3Sound.stop()
        vitoriaSound.play()
      }
      proximaFase()
    } else if(pontuacao >= 250){
      dificuldade = 6
    } else if(pontuacao >= 200){
      dificuldade = 5
    } else if(pontuacao >= 150){
      dificuldade = 4
    } else if(pontuacao >= 100){
      dificuldade = 3
    } else if(pontuacao >= 70){
      dificuldade = 2
    } else if(pontuacao >= 30){
      dificuldade = 1
    }

    if(fase == 1){

      // cenario

      fill(80)

      image(imgCaixaFase1, 20, 231)

      // status

      if(IMC >= 20){
        status = 'Destrutiva!'
        start = false
        perdeu = true
        perdeuSound.play()
        fase1Sound.stop()
      } else if(IMC >= 18){
        status = 'Ruim!'
      } else if(IMC >= 17){
        status = 'Cuidado!'
      } else if(IMC >= 15){
        status = 'Saudável!'
      } else {
        IMC = 15
      }
      fill(255)
      stroke(0)
      text('Pontuação: ' + pontuacao, 525, 45)
      text('Qualidade da comida: ' + status, 525, 75)
    } else if(fase == 2){

      // cenario

      // mesa
      fill(224, 188, 99)
      noStroke()
      rect(205, 340, 20, 400)
      fill(204, 171, 90)
      rect(205, 360, 20, 7)
      fill(237, 201, 101)
      rect(200, 340, 20, 400)
      fill(204, 171, 90)
      rect(200, 360, 20, 10)
      fill(237, 201, 101)
      rect(155, 340, 650, 20)

      // animação bebê

      image(bebeBaixo, -20, 340)
      if(comidaX[1] > 140){
        image(bebeCima, 67, 255)
      } else {
        image(bebeCima, 67, 205)
      }
      image(bebeQueixo, 69, 335)

      // status

      if(IMC >= 20){
        status = 'Obesidade'
        start = false
        perdeu = true
        perdeuSound.play()
        fase2Sound.stop()
      } else if(IMC >= 18){
        status = 'Sobrepeso'
      } else if(IMC >= 17){
        status = 'Perigo!'
      } else if(IMC >= 15){
        status = 'Adequado'
      } else {
        IMC = 15
      }

      fill(255)
      stroke(0)
      text('Pontuação: ' + pontuacao, 605, 45)
      text('IMC: ' + IMC, 605, 75)
      text('Status: ' + status, 605, 105)
    } else if(fase ==3){

      // cenario

      fill(80)

      // mesa

      fill(224, 188, 99)
      noStroke()
      rect(205, 340, 20, 400)
      fill(204, 171, 90)
      rect(205, 360, 20, 7)
      fill(237, 201, 101)
      rect(200, 340, 20, 400)
      fill(204, 171, 90)
      rect(200, 360, 20, 10)
      fill(237, 201, 101)
      rect(155, 340, 650, 20)

      // animação criança

      image(criancaBaixo, 20, 320)
      if(comidaX[1] > 140){
        image(criancaCima, 60, 255)
      } else {
        image(criancaCima, 60, 205)
      }

      // status
      if(IMC >= 20){
        status = 'Obesidade'
        start = false
        perdeu = true
        perdeuSound.play()
        fase3Sound.stop()
      } else if(IMC >= 18){
        status = 'Sobrepeso'
      } else if(IMC >= 17){
        status = 'Perigo!'
      } else if(IMC >= 15){
        status = 'Adequado'
      } else {
        IMC = 15
      }

      fill(255)
      stroke(0)
      text('Pontuação: ' + pontuacao, 605, 45)
      text('IMC: ' + IMC, 605, 75)
      text('Status: ' + status, 605, 105)
    }

    image(imgSugador, 200, 0)

    function proximaFase(){
      fase++
      dificuldade = 0
      IMC = 15
      pontuacao = 0
      introSound.play()
    }

    if(stop){
      textSize(32)
      text('Pausado', 360, 250)
      textSize(fontsize)
    } 

  } else if(introducao){
    if(contaTempo > 10){
      contaTempo = 0
    } else {
      contaTempo++
    }
    image(telaFase1, 0, 0)
    if(keyIsDown(ENTER) && contaTempo == 0){
      introducao = false
      objetivo1 = true
      transicaoSound.play()
    }
  } else if(objetivo1){
    introSound.stop()
    image(telaObjetivo1, 0, 0)
    contaTempo++
    if(contaTempo > 400){
      objetivo1 = false
      start = true
      contaTempo = 0
      fase1Sound.loop()
    }
  } else if(introducaoFase2){
    fase1Sound.stop()
    image(telaFase2, 0, 0)
    if(keyIsDown(ENTER)){
      introducaoFase2 = false
      objetivo2 = true
      transicaoSound.play()
    }
  } else if(objetivo2){
    introSound.stop()
    image(telaObjetivo2, 0, 0)
    contaTempo++
    if(contaTempo > 300){
      objetivo2 = false
      start = true
      contaTempo = 0
      fase2Sound.loop()
    }
  } else if(introducaoFase3){
    fase2Sound.stop()
    image(telaFase3, 0, 0)
    if(keyIsDown(ENTER)){
      introducaoFase3 = false
      objetivo3 = true
      transicaoSound.play()
    }
  } else if(objetivo3){
    introSound.stop()
    image(telaObjetivo3, 0, 0)
    contaTempo++
    if(contaTempo > 300){
      objetivo3 = false
      start = true
      contaTempo = 0
      fase3Sound.loop()
    }
  } else if(gameend){
    fase3Sound.stop()
    introSound.stop()
    image(end, 0, 0)
    if(keyIsDown(ENTER)){
      introducao = true
      objetivo1 = false
      introducaoFase2 = false
      objetivo2 = false
      introducaoFase3 = false
      objetivo3 = false
      contaTempo = 0
      start = false
      fase = 1
      perdeu = false
      gameend = false
      contaTempo++
      introSound.play()
    }
  }

  if(!start && perdeu){
    comidaX[1] = 900
    image(restart, 0, 0)
    if(keyIsDown(ENTER)) {
      start = true
      perdeu = false
      IMC = 15
      pontuacao = 0
      dificuldade = 0
      if(fase == 1){
        fase1Sound.loop()
      } else if(fase == 2){
        fase2Sound.loop()
      } else if(fase == 3){
        fase3Sound.loop()
      }
    }
  }
}

// Feito com muita dedicação por: Lucas Macedo da Cruz
// 06/12/2018
// Obrigado! =)