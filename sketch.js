// link do video: https://youtu.be/YWsLIIrxJ2c
// link colabeduc: http://www.colabeduc.org/projeto/show/549

var tela = 1;
var largura_menu = 250;
var altura_menu = 60;
var xmenu = 240;
var ymenu1 = 220;
var ymenu2 = 290;
var img;
var run = [];
var runE = [];
var idle= [];
var cont = 0;
var cont_2 = 0;
var cont_3 = 0;
var tempo = 0;
var tempo2 = 0;
var yChar = 220;
var xChar = 50;
var xEli = 95;
var yEli = 265;
var xcole = 375;
var ycole = 245;
var yacido = 245;
var yEli2 = 265;
var pontos = 0;

function preload(){
    
    img = loadImage("Química.jpg");
    eu = loadImage("eu.jpeg");
    eri = loadImage("Erivaldo.jpg");
    cole = loadImage("monstro.png");
    acid = loadImage("acido.png");
  
    idle[0] = loadImage("Idle(1).png");
    idle[1] = loadImage("Idle(2).png");
    idle[2] = loadImage("Idle(3).png");
    idle[3] = loadImage("Idle(4).png");
    idle[4] = loadImage("Idle(5).png");
    idle[5] = loadImage("Idle(6).png");
    idle[6] = loadImage("Idle(7).png");
    idle[7] = loadImage("Idle(8).png");
    idle[8] = loadImage("Idle(9).png");
    idle[9] = loadImage("Idle(10).png");
  
    
    run[0] = loadImage("Run(1).png");
    run[1] = loadImage("Run(2).png");
    run[2] = loadImage("Run(3).png");
    run[3] = loadImage("Run(4).png");
    run[4] = loadImage("Run(5).png");
    run[5] = loadImage("Run(6).png");
    run[6] = loadImage("Run(7).png");
    run[7] = loadImage("Run(8).png");
  
    runE[0] = loadImage("RunE(1).png");
    runE[1] = loadImage("RunE(2).png");
    runE[2] = loadImage("RunE(3).png");
    runE[3] = loadImage("RunE(4).png");
    runE[4] = loadImage("RunE(5).png");
    runE[5] = loadImage("RunE(6).png");
    runE[6] = loadImage("RunE(7).png");
    runE[7] = loadImage("RunE(8).png");
  
    soundFormats("wav", "mp3");
    correct = loadSound("correct.wav");
    wrong = loadSound("wrong.mp3");
    
}

function setup() {
  createCanvas(600, 500);
}

function draw() {
  //tela de menu
  
  if(tela == 1){
    
    image(img, 0, 0);
    
    //Jogar
    if(mouseX >= 130 && mouseX <= 380 && mouseY >= 170 && mouseY <= 235){
      strokeWeight(3);
      fill("#0080FF");
      rect(175, 178, largura_menu, altura_menu, 15);
       if (mouseIsPressed){
         tela = 2;
         pontos = 0
       }   
    }
    
      textFont("Coiny");
      textSize(40);
      stroke("#0B173B");
      strokeWeight(10);
      fill(256);
      text("Jogar", xmenu, ymenu1);
    
    
    //Intruções
    if(mouseX >= 133 && mouseX<= 383 && mouseY >= 240 && mouseY <= 310){
      strokeWeight(3);
      fill("#0080FF");
      rect(178, 248, largura_menu, altura_menu, 15);
       if (mouseIsPressed){
         tela = 3;
       }
    }
      
      
      textFont("Coiny");
      textSize(40);
      stroke("#0B173B");
      strokeWeight(10);
      fill(256);
      text("Instruções", 195, ymenu2);
    
    //Créditos  
    if(mouseX >= 133 && mouseX<= 383 && mouseY >= 315 && mouseY <= 375){
      strokeWeight(3);
      fill("#0080FF");
      rect(175, 315, largura_menu, altura_menu, 15);
         
      if (mouseIsPressed){
         tela = 4;
       }
    }
      textFont("Coiny");
      textSize(40);
      stroke("#0B173B");
      strokeWeight(10);
      fill(256);
      text("Créditos", 215, 360);
    
    
    
  }
  
  else if(tela == 3){
    image(img, 0 ,0 );
    
    textFont("Coiny");
    textSize(25);
    stroke("#0B173B");
    strokeWeight(9);
    fill(256);
    
    text("Ano: 9° ano fundamental", 10, 25);
    
    
    text("Matéria: Química", 10, 50);
    
    
    text("O game consiste na junção de", 10, 75);
    text("elementos químicos para formação", 10, 100);
    text("de compostos inorgânicos como sais,", 10, 125);
    text("óxidos, ácidos e bases. Para isso você", 10, 150);
    text("vai controlar o Kímio, pequeno robô", 10, 175);
    text("com sede de aprendizado.", 10, 200);
    
    
   
    text("Seta para cima: Andar para cima", 10, 300);
    text("Seta para direita: Andar para direita", 10, 325);
    text("Seta para esquerda: Andar para esquerda", 10, 350);
    text("Seta para baixo: Andar para baixo", 10, 375);
    
    text("Para voltar ao menu pressione ESC", 10, 450);
    
    textSize(40);
    text("Como jogar:", 10, 250);
    
    
  }
  else if(tela == 4){
    image(img, 0 , 0);
    image(eu, 50, 50, 172, 174.75);
    image(eri, 50, 270, 172, 174.75);
    
    textFont("Coiny");
    textSize(25);
    stroke("#0B173B");
    strokeWeight(7);
    fill(256);
    
    text("Cristian Soares", 225, 75);
    text("Função: Desenvolvedor", 225, 105);
    text("CeT - UFRN", 225, 135);
    
    text("Francisco Erivaldo", 225, 295);
    text("Função: Educador", 225, 325);
    text("Professor de Química", 225, 355);
    
    text("Para voltar ao menu pressione ESC", 10, 480);
  }
  
  else if(tela == 2){
    ellipse(xEli, yEli , 55, 55);
    stroke(0);
    strokeWeight(6);
    image(img, 0, 0);
    fill(100);
    rect(0, 140, 600, 240);
    
    rect(450, 150, 80, 60);
    rect(450, 230, 60, 60);
    rect(450, 310, 60, 60);
    
    
    fill(256);
    textSize(25);
    text("Fase 1: Qual opção a seguir é o sal de cozinha?", 10, 150, 300, 100);
    text("Pontos: "+pontos, 10, 100);
    
    textSize(20);
    text("NaCl", 455, 268);
    text("H2SO4", 455, 188);
    text("HBr", 460, 348);
    
    if(xEli >= 450 && yEli >= 230 && yEli <= 290 ){
      correct.play();
      tela = 5;
      pontos += 1;
      xChar = 50;
      yChar = 220;
      
      xEli = 95;
      yEli = 265;
    } 
    
    else if(xEli >= 450 && yEli >= 150 && yEli <= 210){
      wrong.play();
      tela = 7;
      xChar = 50;
      yChar = 220;
      
      xEli = 95;
      yEli = 265;
    } 
    
    else if(xEli >=450 && yEli >= 310 && yEli <= 370){
      wrong.play();
      tela = 7;
      xChar = 50;
      yChar = 220;
      
      xEli = 95;
      yEli = 265;
    }
    moveChar();
  }
  
  else if(tela == 5){
    ellipse(xEli, yEli , 55, 55);
    ellipse(320, yEli2, 42.6, 42.6);
    stroke(0);
    strokeWeight(6);
    image(img, 0, 0);
    fill(100);
    rect(0, 140, 600, 240);
    image(cole, xcole, ycole, 43, 43);
    image(acid, 300, yacido, 42.6, 42.6);
    
  
    
    if(xEli >= 375 && xEli <= 418 && yEli >= 245 && yEli <= 288){
      text("Coletou!", 10, 260);
      pontos = 2;
    }
    
    if(xEli >= 300 && yEli == yEli2){
      text("Bateu!", 10, 300);
      xChar = 50;
      yChar = 220;
      
      xEli = 95;
      yEli = 265;
    }
    
  
    rect(450, 150, 75, 60);
    rect(450, 230, 75, 60);
    rect(450, 310, 83, 60);
    
    
    fill(256);
    textSize(25);
    text("Fase 2: Colete a mistura e alcance o Óxido de Alumínio", 10, 150, 300, 100);
    text("Pontos: "+pontos, 10, 100);
    textSize(15);
    text("Cuidado com o ácido", 10, 365);
    
    textSize(20);
    text("Al2F3", 458, 268);
    text("Al2O3", 457, 188);
    text("Al2Se3", 457, 348);
    
    if(xEli >= 450 && yEli >= 230 && yEli <= 290 ){
      wrong.play();
      tela = 7;
      xChar = 50;
      yChar = 220;
      
      xEli = 95;
      yEli = 265;
    } 
    
    else if(xEli >= 450 && yEli >= 150 && yEli <= 210){
      correct.play();
      tela = 6;
      pontos += 1;
      xChar = 50;
      yChar = 220;
      
      xEli = 95;
      yEli = 265;
    } 
    
    else if(xEli >=450 && yEli >= 310 && yEli <= 370){
      wrong.play();
      tela = 7;
      xChar = 50;
      yChar = 220;
      
      xEli = 95;
      yEli = 265;
    }
    moveAcid();
    moveChar2();
  }
  
  else if(tela == 6){
      image(img, 0, 0);
      textSize(40);
      text("PARABÉNS, VOCÊ VENCEU", 20, 250);
      text("VOCÊ FEZ "+pontos+" PONTOS", 20, 300);
      
      textSize(25);
      text("Pressione ESC para voltar", 20, 400);
      
  }
  
  else if (tela == 7){
    image(img, 0, 0);
    textSize(40);
    text("QUE PENA, VOCÊ PERDEU, MAS TENTE DE NOVO", 20, 250, 650, 650);
      
      textSize(25);
      text("Pressione ESC para voltar", 20, 400);
    
  }
}

         
      
function keyPressed() {
  if (keyCode == ESCAPE) {
    tela = 1;
  }
}
