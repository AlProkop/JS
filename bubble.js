class Bubble{
    constructor(number)
    {        
        this.x = document.documentElement.clientWidth/2; // the very first coordinates: x
        this.y = document.documentElement.clientHeight/2;// and y
        this.stepX = Math.floor(Math.random() * 20)-10;  //pace x
        this.stepX = (this.stepX == 0) ? 1 : this.stepX;  //exclude zero from random selection
        this.stepY = Math.floor(Math.random() * 20)-10;    //pace y 
        this.stepY = (this.stepY == 0) ? 1 : this.stepY; //exclude zero from random selection 
        this.number = number+1;							 // the serial number starts from 1	
    }

    drawBubble(i){										// create and draw a bubble (an element div) 	
        let divB = document.createElement("div");
         divB.id = i;
         divB.className = "bubble";
         document.getElementById("container").appendChild(divB);
         divB.style.left = this.x + "px";
         divB.style.top = this.y + "px" ;
        }
    
    move(i){											 //move a bubble 	
      let field = document.getElementById("container");	 // find the work area where the bubbles are moving		
      let coord = field.getBoundingClientRect();  			
      
      let b = document.getElementById(i);
        if( this.x+this.stepX>=coord.right-50    ){			//if, after the next step, bubble will cross the right line 
            this.x = coord.right-50;						// it's moved to the last allowed right position 
            this.y = this.y+this.stepY/2;
            b.style.left = this.x + "px";
            b.style.top = this.y + "px";
            this.stepX = -(Math.floor(Math.random() * 10) + 1); // change the bubble's direction  
        }
															//do the same with the left, bottom and top positions
        else if(this.x+this.stepX<=coord.left){
            this.x = coord.left;
            this.y = this.y+this.stepY/2;
            b.style.left = this.x + "px";
            b.style.top = this.y + "px";
            this.stepX = Math.floor(Math.random() * 10) + 1;
        }
        else if(this.y+this.stepY>=coord.bottom-50){
            this.x = this.x+this.stepX/2;
            this.y = coord.bottom-50;
            b.style.left = this.x + "px";
            b.style.top = this.y + "px";
            this.stepY = -(Math.floor(Math.random() * 10) + 1);
        }
        else if(this.y+this.stepY<=coord.top){
            this.x = this.x+this.stepX/2;
            this.y = coord.top;
            b.style.left = this.x + "px";
            b.style.top = this.y + "px";
            this.stepY = Math.floor(Math.random() * 10) + 1;
        }         
        else {
            this.x = this.x+this.stepX;
            this.y = this.y+this.stepY;
            b.style.left = this.x + "px";
            b.style.top = this.y + "px";    
        }
    }
    showXY(){					//show information about clicked bubble on the console
      console.log("number: " + bubbles[this.id].number + " x: "+ bubbles[this.id].x +
      " y: "+bubbles[this.id].y);
    }
} 

let bubbles = [];               
for(let i=0; i<10;i++){
    bubbles[i] = new Bubble(i);
    bubbles[i].drawBubble(i);   	
    document.getElementById(i).addEventListener("click", bubbles[i].showXY);
    setInterval(function(){bubbles[i].move(i)}, 25);
}


