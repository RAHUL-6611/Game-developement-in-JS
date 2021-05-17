score = 0;
cross = true;

audio = new Audio('./assets/audio/dogezero.mp3');
audioDead = new Audio('./assets/audio/doge_song_.mp3');
// audio = new Audio('music.mp3');
// audiogo = new Audio('gameover.mp3');
// audio.play()

let start = document.querySelector(".start");
let strips = document.querySelector(".strips");
let DOG = document.querySelector(".square");
let enemy = document.querySelector(".enemy");
let images = document.querySelectorAll(".images");
console.log(images);

// DOG.style.left = "100px";
DogX = parseInt(window.getComputedStyle(DOG, null).getPropertyValue("Left"));     
DOG.style.left = DogX + 'px';      

document.onkeydown = function (e){
    console.log(e.keyCode);
    
    
    if (e.keyCode == 13)
    {
        audioDead.play();
        setTimeout(() =>{
            audio.play();
        },20000);

        console.log('fck enter');
        // start.style.display = "none";
        start.classList.add("startblur");
        strips.classList.add("roadanimation");
        DOG.classList.add("dogentry"); 
        // setTimeout(()=>{
            // },0);


        images.forEach((img) => {

            img.classList.add("enemyrun");        
            // setInterval(() =>{
            // },6000);
            
            for ( var i=0; i<59; i++ ){
                var a = `${(Math.floor(Math.random()*15))}`;
                console.log(a);
                img.style.animationDelay = `${a}s`;
            }
                    // if(img.classList.contains("first")){
                    //     console.log("not adding class");
                    // }
                    // else{
                    // }
            });    


       



    }

    if (e.keyCode == 38)
    {

        DOG.classList.remove("dogentry"); 
        DOG.classList.add("dogjump");
        setTimeout(() =>{
            DOG.classList.remove("dogjump");
        },1000);
        score += 1;
        updateScore(score);

        // DOG.style.left = "100px";


    }

    if (e.keyCode == 39)
    {
        DogX = parseInt(window.getComputedStyle(DOG, null).getPropertyValue("left"));     
        var dogPosition = DOG.style.left = DogX + 10 + 'px';  

        var position = 1000;
        // console.log(position);
        
        if (DogX >= position)
        {
            DOG.style.left = 0 + 'px';
        }
    }

    if (e.keyCode == 37)
    {
        DogX = parseInt(window.getComputedStyle(DOG, null).getPropertyValue("left"));     
        DOG.style.left = DogX - 10 + 'px';  

        var position = -80 + 'px';
        if (DOG.style.left <= position)
        {
            DOG.style.left = -79 + 'px';
        }
    }




}
            
setInterval(() =>{

    images.forEach((img) =>{
        
    DogX = parseInt(window.getComputedStyle(DOG, null).getPropertyValue("left"));
    DogY = parseInt(window.getComputedStyle(DOG, null).getPropertyValue("bottom"));
    EnemyX = parseInt(window.getComputedStyle(img, null).getPropertyValue("left"));
    EnemyY = parseInt(window.getComputedStyle(img, null).getPropertyValue("bottom"));
    EnemyY = parseInt(window.getComputedStyle(img, null).getPropertyValue("bottom"));
    offsetX = Math.abs(DogX - EnemyX); 
    console.log(offsetX);
    
    offsetY = Math.abs(DogY - EnemyY);
    console.log(offsetY);
    
    if (offsetX < 100 && offsetY < 200){
        audioDead.play();
    }

    else if (offsetX < 200 && offsetY < 250 && cross){
        score += 1;
        updateScore(score)
    }

    
    })


},100);

scoreCount = document.getElementById("scoreCont");

function updateScore(score){
    scoreCount.innerHTML = `Your Score: ${score}`;
}