let gameseq=[];
let userseq=[];
let h2=document.querySelector("h2");
let level=0;
let hs=0;
let span=document.querySelector("span");
let i=0;
let boxes=['b0','b1','b2','b3'];
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    if(level==0){
        levelup();
    }
});

function levelup(){
    level++;
    h2.innerText=`level ${level}`;
    if(level>hs){
        hs=level;
        span.innerText=hs;
    }
    userseq=[];
    let bnum=boxes[Math.floor(4*Math.random())];
    gameseq.push(bnum);
    console.log(`game ${gameseq}`);
    flash(bnum);
}

function flash(bnum){
    let box=document.querySelector(`.${bnum}`);
    box.classList.add(`glow${bnum}`);
    setTimeout(function(){
        box.classList.remove(`glow${bnum}`);
    },250);
}
for(let bnum of boxes){
    let box=document.querySelector(`.${bnum}`);
    box.addEventListener("click",function(){
        if(level!=0){
            userseq.push(bnum);
            console.log(`user ${userseq}`);
            flash(bnum);
            checking(bnum);
        }
    });
}
function checking(bnum){
    if(userseq[i]==gameseq[i]){
        if(i==level-1){
            i=0;
            console.log(`levelup-${level}`);
            setTimeout(function(){
                levelup();
            },600);
        }else{
            i++;
        }
    }else{
        console.log(`level-0`);
        h2.innerText="Game Over! Press any key to restart";
        gameseq=[];
        level=0;
        i=0;
    }
}