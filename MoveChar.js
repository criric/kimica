function moveChar(){
    tempo2++
    image(idle[cont_2%10], xChar, yChar, 94.5, 92.67)
    if(tempo2 > 4){
    cont_2 ++;
    tempo2 = 0
    }
    
    if(keyIsDown(RIGHT_ARROW)){
      
      
      ellipse(xEli, yEli , 55, 55);
      fill(100);
      rect(0, 140, 600, 240);
      rect(450, 150, 80, 60);
      rect(450, 230, 60, 60);
      rect(450, 310, 60, 60);

      fill(256);
      textSize(25);
      text("Fase 1: Qual opção a seguir é o sal de cozinha?", 10, 150, 300, 100);

      textSize(20);
      text("NaCl", 455, 268);
      text("H2SO4", 455, 188);
      text("HBr", 460, 348);
      
      image(run[cont%8], xChar, yChar, 94.5, 92.67);
      xChar+=2;
      xEli +=2;
      tempo++;
     if(tempo>6){
        cont++;
        tempo=0; 
  }
      if(xChar == 530){
        xChar = 50;
        yChar = 220;
        
        xEli = 95;
        yEli = 265;
      }
    }
    
    if(keyIsDown(LEFT_ARROW)){
      ellipse(xEli, yEli , 55, 55);
      fill(100);
      rect(0, 140, 600, 240);
      rect(450, 150, 80, 60);
      rect(450, 230, 60, 60);
      rect(450, 310, 60, 60);

      fill(256);
      textSize(25);
      text("Fase 1: Qual opção a seguir é o sal de cozinha?", 10, 150, 300, 100);

      textSize(20);
      text("NaCl", 455, 268);
      text("H2SO4", 455, 188);
      text("HBr", 460, 348);

      image(runE[cont%8], xChar, yChar, 94.5, 92.67);
      xChar -= 2;
      xEli -= 2;
      tempo++;
     if(tempo>6){
        cont++;
        tempo=0; 
  }
      if(xChar == -10){
        xChar = 50;
        yChar = 220;
        
        xEli = 95;
        yEli = 265;
      }
    }
  
    if(keyIsDown(UP_ARROW)){
      ellipse(xEli, yEli , 55, 55);
      fill(100);
      rect(0, 140, 600, 240);
      
      rect(450, 150, 80, 60);
      rect(450, 230, 60, 60);
      rect(450, 310, 60, 60);

      fill(256);
      textSize(25);
      text("Fase 1: Qual opção a seguir é o sal de cozinha?", 10, 150, 300, 100);

      textSize(20);
      text("NaCl", 455, 268);
      text("H2SO4", 455, 188);
      text("HBr", 460, 348);
      
      image(run[cont%8], xChar, yChar, 94.5, 92.67);
      tempo++;
      
      yChar-=2;
      yEli -= 2;
      
      if(tempo>5){
         cont++;
         tempo=0;
         }
      if(yChar == 130){
        yChar = 220;
        yEli = 265;
      }
    }
    
    if(keyIsDown(DOWN_ARROW)){
          
      ellipse(xEli, yEli , 55, 55);
      fill(100);
      rect(0, 140, 600, 240);
      rect(450, 150, 80, 60);
      rect(450, 230, 60, 60);
      rect(450, 310, 60, 60);
      
      fill(256);
      textSize(25);
      text("Fase 1: Qual opção a seguir é o sal de cozinha?", 10, 150, 300, 100);
    
      textSize(20);
      text("NaCl", 455, 268);
      text("H2SO4", 455, 188);
      text("HBr", 460, 348);
      
      image(run[cont%8], xChar, yChar, 94.5, 92.67);
      tempo++;
      yChar+=2;
      yEli+=2;
      if(tempo>5){
         cont++;
         tempo=0;
         }
      if(yChar == 300){
        yChar = 220;
        yEli = 265;
      }
    }
}

function moveChar2(){
  tempo2++
    image(idle[cont_2%10], xChar, yChar, 94.5, 92.67)
    if(tempo2 > 4){
    cont_2 ++;
    tempo2 = 0
    }
    
    if(keyIsDown(RIGHT_ARROW)){
      ellipse(xEli, yEli , 55, 55);
      fill(100);
      rect(0, 140, 600, 240);
      rect(450, 150, 75, 60);
      rect(450, 230, 75, 60);
      rect(450, 310, 83, 60);
      image(cole, xcole, ycole, 43, 43);
      
      fill(256);
      textSize(25);
      text("Fase 2: Colete a mistura e alcance o Óxido de Alumínio", 10, 150, 300, 100);
    
      textSize(20);
      text("Al2F3", 458, 268);
      text("Al2O3", 457, 188);
      text("Al2Se3", 457, 348);
      
      
      image(run[cont%8], xChar, yChar, 94.5, 92.67);
      xChar+=2;
      xEli +=2;
      tempo++;
     if(tempo>6){
        cont++;
        tempo=0; 
  }
      if(xChar == 530){
        xChar = 50;
        yChar = 220;
        
        xEli = 95;
        yEli = 265;
      }
    }
    
    if(keyIsDown(LEFT_ARROW)){
      ellipse(xEli, yEli , 55, 55);
      fill(100);
      rect(0, 140, 600, 240);
      rect(450, 150, 75, 60);
      rect(450, 230, 75, 60);
      rect(450, 310, 83, 60);
      image(cole, xcole, ycole, 43, 43);
      
      fill(256);
      textSize(25);
      text("Fase 2: Colete a mistura e alcance o Óxido de Alumínio", 10, 150, 300, 100);
    
      textSize(20);
      text("Al2F3", 458, 268);
      text("Al2O3", 457, 188);
      text("Al2Se3", 457, 348);
      

      image(runE[cont%8], xChar, yChar, 94.5, 92.67);
      xChar -= 2;
      xEli -= 2;
      tempo++;
     if(tempo>6){
        cont++;
        tempo=0; 
  }
      if(xChar == -10){
        xChar = 50;
        yChar = 220;
        
        xEli = 95;
        yEli = 265;
      }
    }
  
    if(keyIsDown(UP_ARROW)){
      ellipse(xEli, yEli , 55, 55);
      fill(100);
      rect(0, 140, 600, 240);
      rect(450, 150, 75, 60);
      rect(450, 230, 75, 60);
      rect(450, 310, 83, 60);
      image(cole, xcole, ycole, 43, 43);
      
      fill(256);
      textSize(25);
      text("Fase 2: Colete a mistura e alcance o Óxido de Alumínio", 10, 150, 300, 100);
    
      textSize(20);
      text("Al2F3", 458, 268);
      text("Al2O3", 457, 188);
      text("Al2Se3", 457, 348);
      
      
      image(run[cont%8], xChar, yChar, 94.5, 92.67);
      tempo++;
      
      yChar-=2;
      yEli -= 2;
      
      if(tempo>5){
         cont++;
         tempo=0;
         }
      if(yChar == 130){
        yChar = 220;
        yEli = 265;
      }
    }
    
    if(keyIsDown(DOWN_ARROW)){
          
      ellipse(xEli, yEli , 55, 55);
      fill(100);
      rect(0, 140, 600, 240);
      rect(450, 150, 75, 60);
      rect(450, 230, 75, 60);
      rect(450, 310, 83, 60);
      image(cole, xcole, ycole, 43, 43);
      
      fill(256);
      textSize(25);
      text("Fase 2: Colete a mistura e alcance o Óxido de Alumínio", 10, 150, 300, 100);
    
      textSize(20);
      text("Al2F3", 458, 268);
      text("Al2O3", 457, 188);
      text("Al2Se3", 457, 348);
      
      image(run[cont%8], xChar, yChar, 94.5, 92.67);
      tempo++;
      yChar+=2;
      yEli+=2;
      if(tempo>5){
         cont++;
         tempo=0;
         }
      if(yChar == 300){
        yChar = 220;
        yEli = 265;
      }
    }
}