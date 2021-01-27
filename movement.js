var no = 0;

let a = false;
let p1 = setTimeout(function () { create(no); },4000);
let p2 = setTimeout(function () { create(no + 1); }, 14000);
let p3 = setTimeout(function () { create(no + 2); }, 25000);
let p4 = setTimeout(function () { create(no + 3); }, 35000);
let p5 = setTimeout(function () { create(no+4); }, 45000);


function create(no) {
    let top_position = 0;
    let left_villian = Math.floor(Math.random() * (41 - 0 + 1) + 0);
    let villian = document.createElement("div");
    villian.setAttribute("id", "villian" + no);
    
    
    
    villian.setAttribute("style", "height: 10vh;border: 0.8px solid black;background-color: orange;position:absolute;z-index:10;top: 0px;width:5vw");
    document.getElementById("area").appendChild(villian);
    document.getElementById("villian" + no).style.left = left_villian + 'vw';
    a = true;

}

var score = 1;
var score_rate = 1;



function move(no,p) {

    let v=p;

    let left_villian = 0;
    let villian = document.getElementById("villian" + no);
    if(villian == null){}
else{
    let top_position = villian.style.top;
    let tp = eval(top_position.slice(0, top_position.length - 2));
    if (tp > 90) {
        left_villian = Math.floor(Math.random() * (41 - 0 + 1) + 0);
        tp = 0;
        villian.style.left = left_villian + "vw";
        clearTimeout(v);
        ++score;
    }
    else {
         tp = tp + score_rate;
    }
    villian.style.top = tp + "vh";
}
}



setInterval(()=>
{
    let score_value= document.getElementById("score");
    score_value.innerHTML=score;
},10);

let move_interval = setInterval(() => {

    if (p1 != null) {

        move(0,p1);
    }

    if (p2 != null) {

        move(1,p2);
    }

    if (p3 != null) {

        move(2,p3);
    }
    if (p4 != null) {

        move(3,p4);
    }
    if (p5 != null) {

        move(4,p5);
    }
    

    if (score % 30 == 0) {
        score_rate = score_rate + 0.00001;
    }

}, 40);




let left = 38;
document.onkeydown = function (e) {
    
    if (e.keyCode == 37) {
        if (left > 31) {
            left = left - 1;
            document.getElementById("boss").style.left = left + "vw";
            
        }
    }

    if (e.keyCode == 39) {
        if (left <= 68) {
            left = left + 1;
            document.getElementById("boss").style.left = left + "vw";
            
        }
    }

}


 let detection = setInterval(()=>{

    let d = document.getElementById("boss").getBoundingClientRect();
    let d_boss_l=d.left;
    let  d_boss_t= d.top;
    let d_boss_r= d.right
    let d_boss_b= d.bottom

    collision_detection(0,d_boss_l,d_boss_r,d_boss_t,d_boss_b);
    collision_detection(1,d_boss_l,d_boss_r,d_boss_t,d_boss_b);
    collision_detection(2,d_boss_l,d_boss_r,d_boss_t,d_boss_b);
    collision_detection(3,d_boss_l,d_boss_r,d_boss_t,d_boss_b);
    collision_detection(4,d_boss_l,d_boss_r,d_boss_t,d_boss_b);
  

 },40);


 function collision_detection(n,d_boss_l,d_boss_r,d_boss_t,d_boss_b)
 {

    let vn = document.getElementById("villian"+n);
    if(vn == null){}
    else{

    let v= vn.getBoundingClientRect();
    
    
    let d_villian_l=v.left;
    let  d_villian_t= v.top;
    let d_villian_r= v.right;
    let d_villian_b= v.bottom;


    let collision = false;
    if(d_boss_t<d_villian_b && d_boss_b>=d_villian_t)
    {

       

       
             if(d_villian_l- d_boss_l>=0 && d_villian_l- d_boss_l<=(d_boss_r-d_boss_l))
            collision=true;

            else if(d_boss_r-d_villian_r>=0&&d_boss_r-d_villian_r<=(d_boss_r-d_boss_l))
            collision=true;

            

            else if(d_villian_l<d_boss_l && d_boss_r<d_villian_r)
            collision=true;
        }

        if (collision)
        {
            
            console.log(score); 
            clearInterval(move_interval);
            clearInterval(detection);
           clearInterval(p1);
           
           clearInterval(p2);
           
           clearInterval(p3);
           
           clearInterval(p4);
           
           clearInterval(p5);
           
           
           gameOverDisplay =document.getElementById("gameover");
           gameOverDisplay.style.display= "block";
            
                       

            
            

        }
        
 }}


