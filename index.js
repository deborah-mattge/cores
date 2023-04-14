const body=document.getElementById('body')
let i=0
function trocar(){
   
    if(i<3){
        console.log(i)
        if(i==0){
            document.body.style.backgroundColor="blue";
            i++;

        }else if(i==1){
            document.body.style.backgroundColor="green";
            i++;
        }else if(i==2){
            document.body.style.backgroundColor="violet ";
            i++;
            
        }
    }else{
        i=0 ;
    }
}
