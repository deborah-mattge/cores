const body=document.getElementById('body')
const texto=document.getElementById('texto')
const texto2=document.getElementById('texto2')
let i=0
function trocar(){
   
    if(i<4){
        console.log(i)
        if(i==0){
            document.body.style.backgroundColor="blue";
            texto.innerText='blue';
            
            i++;

        }else if(i==1){
            document.body.style.backgroundColor="green";
            texto.innerText='green';
            i++;
        }else if(i==2){
            document.body.style.backgroundColor="violet ";
            texto.innerText='violet';
            i++;
            
        }else if(i==3){
            document.body.style.backgroundColor="blueviolet";
            texto.innerText='blueviolet';
            i++;
        }
    }else{
        i=0;
    }
}
function hexa(){
     let x = Math.floor(Math.random()*255);
     let y =Math.floor(Math.random()*255);
     let z =Math.floor(Math.random()*255);
     let color = "#" + x.toString(16) + y.toString(16) + z.toString(16);
     console.log(color)
     document.body.style.backgroundColor=color;
     texto2.innerText=color;
     

    
    /*if(i<4){
        console.log(i)
        if(i==0){
            document.body.style.backgroundColor="blue";
            texto2.innerText='blue';
            
            i++;

        }else if(i==1){
            document.body.style.backgroundColor="green";
            texto2.innerText='green';
            i++;
        }else if(i==2){
            document.body.style.backgroundColor="violet ";
            texto2.innerText='violet';
            i++;
            
        }else if(i==3){
            document.body.style.backgroundColor="blueviolet";
            texto2.innerText='blueviolet';
            i++;
        }
    }else{
        i=0;
    }*/

}