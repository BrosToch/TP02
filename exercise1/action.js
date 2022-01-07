

const input = document.querySelector('.myImage');
const canvas  = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
input.addEventListener('change',(e)=>{
    console.log('change');

    const img = new Image();
    img.onload = update;
    img.onerror = errorMessage;
    img.src = URL.createObjectURL(input.files[0]);
});

function update(){

    console.log(this.width);
    canvas.width = this.width;
    canvas.height = this.height;
    ctx.drawImage(this, 0, 0 , canvas.width,canvas.height);
        

}
function errorMessage(){
    
}
