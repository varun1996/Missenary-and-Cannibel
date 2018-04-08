let main;
//left part 
let left;
let lpos;
let acannibel;
let bcannibel;
let ccannibel;
let amission;
let bmission;
let cmission;
let lplatform;
//middle part
let middle;
let move;
let passenger;
let boat;
let river;
//right part
let right;
let rpos;
let rplatform;
//external variables
let p;
let flag = true;
let scounter = 0;
let sflag = true;
let moving = false;
let lwcounter = 3;
let lbcounter = 3;
let rwcounter = 0;
let rbcounter = 0;
let pwcounter = 0;
let pbcounter = 0;

function stop() {
    document.body.removeChild(main);
    let h1;
    h1 = document.createElement("h1");
    h1.setAttribute("id", "heading1");
    h1.style.backgroundColor = "red";
    h1.innerHTML = "Game Over";
    document.body.appendChild(h1);
}

function winStop() {
    document.body.removeChild(main);
    let h1;
    h1 = document.createElement("h1");
    h1.setAttribute("id", "heading1");
    h1.style.backgroundColor = "red";
    h1.innerHTML = "!!!YOU WON!!!";
    document.body.appendChild(h1);
}


function leftChecking() {

    let lwcount = 0;
    let lbcount = 0;
    let lchild = lpos.childNodes;
    for (let i = 0; i < lchild.length; i++) {
        console.log(lchild[i]);
        if (lchild[i].getAttribute("class") === "cannibel")
            lbcount++;
        else
            lwcount++;
    }

    let pwcount = 0;
    let pbcount = 0;
    let pchild = passenger.childNodes;
    for (let i = 0; i < pchild.length; i++) {
        console.log(pchild[i]);
        if (pchild[i].getAttribute("class") === "cannibel")
            pbcount++;
        else
            pwcount++;
    }

    let rwcount = 0;
    let rbcount = 0;
    let rchild = rpos.childNodes;
    for (let i = 0; i < rchild.length; i++) {
        console.log(rchild[i]);
        if (rchild[i].getAttribute("class") === "cannibel")
            rbcount++;
        else
            rwcount++;
    }

    console.log(lbcount + " " + lwcount + " " + pbcount + " " + pwcount + " " + rbcount + " " + rwcount);
    if (lwcount != 0 && lwcount < lbcount) {
        alert("Game over, Please referesh to play again");
        stop();
    } else if (((rwcount + pwcount) != 0) && ((rwcount + pwcount) < (rbcount + pbcount))) {
        alert("Game over, Please referesh to play again");
        stop();
    } else if ((rwcount + pwcount === 3) && (pbcount + rbcount === 3)) {
        alert("Congratulations, You won the game");
        winStop();
    }
}


function rightChecking() {
	const a = {}; 
    let lwcount = 0;
    let lbcount = 0;
    let lchild = lpos.childNodes;
    for (let i = 0; i < lchild.length; i++) {
        console.log(lchild[i]);
        if (lchild[i].getAttribute("class") === "cannibel")
            lbcount++;
        else
            lwcount++;
    }

    let pwcount = 0;
    let pbcount = 0;
    let pchild = passenger.childNodes;
    for (let i = 0; i < pchild.length; i++) {
        console.log(pchild[i]);
        if (pchild[i].getAttribute("class") === "cannibel")
            pbcount++;
        else
            pwcount++;
    }

    let rwcount = 0;
    let rbcount = 0;
    let rchild = rpos.childNodes;
    for (let i = 0; i < rchild.length; i++) {
        console.log(rchild[i]);
        if (rchild[i].getAttribute("class") === "cannibel")
            rbcount++;
        else
            rwcount++;
    }

    console.log(lbcount + " " + lwcount + " " + pbcount + " " + pwcount + " " + rbcount + " " + rwcount);
    if (rwcount != 0 && rwcount < rbcount) {
        alert("Game over, Please referesh to play again");
        stop();
    } else if (((lwcount + pwcount) != 0) && ((lwcount + pwcount) < (lbcount + pbcount))) {
        alert("Game over, Please referesh to play again");
        stop();
    }

}





// boat event listener function
function boatMove() {
    if ((!moving) && scounter >= 1) {
        if (flag) {
            p = 390;

            id = setInterval(forword, 5);

        } else {
            p = 770;
            id = setInterval(backword, 5);
        }

    }
}


//to move boat forword
function forword() {
    if (p == 770) {
        flag = false;
        moving = false;
        leftChecking();

        clearInterval(id);
    } else {
        p++;
        moving = true;
        move.style.left = p + 'px';

    }

}


//to move boat backword
function backword() {
    if (p == 390) {
        flag = true;
        moving = false;
        rightChecking();
        clearInterval(id);
    } else {
        p--;
        moving = true;
        move.style.left = p + 'px';
    }

}


// cannibel and missenary event listener function
function shifting() {
    if (!moving) {
        if (flag && this.parentNode === lpos && scounter < 2) {
            scounter++;
            passenger.appendChild(this);
        } else if (flag && this.parentNode === passenger) {
            scounter--;
            lpos.appendChild(this);
        } else if ((!flag) && this.parentNode === passenger) {
            scounter--;
            rpos.appendChild(this);
        } else if ((!flag) && (this.parentNode === rpos) && scounter < 2) {
            scounter++;
            passenger.appendChild(this);
        }
    }
}


//main function
function playGame() {
    //first page elements remove
    document.body.removeChild(document.getElementById("heading"));
    document.body.removeChild(document.getElementById("button"));

    //second page starts
    main = document.createElement("div");  
    left = document.createElement("div");
    lpos = document.createElement("div");
    acannibel = document.createElement("div");
    bcannibel = document.createElement("div");
    ccannibel = document.createElement("div");
    amission = document.createElement("div");
    bmission = document.createElement("div");
    cmission = document.createElement("div");
    lplatform = document.createElement("div");

    middle = document.createElement("div");
    move = document.createElement("div");
    passenger = document.createElement("div");
    boat = document.createElement("div");
    river = document.createElement("div");

    right = document.createElement("div");
    rpos = document.createElement("div");
    rplatform = document.createElement("div");

    //main
    main.setAttribute("id", "main");
    document.body.appendChild(main);

    left.setAttribute("id", "left");
    main.appendChild(left);

    middle.setAttribute("id", "middle");
    main.appendChild(middle);

    right.setAttribute("id", "right");
    main.appendChild(right);

    //left
    lpos.setAttribute("class", "pos");
    left.appendChild(lpos);

    lplatform.setAttribute("class", "platform");
    lplatform.setAttribute("id", "lplatform");
    left.appendChild(lplatform);

    //middle

    move.setAttribute("id", "move");
    middle.appendChild(move);

    river.setAttribute("id", "river");
    middle.appendChild(river);


    //right

    rpos.setAttribute("class", "pos");
    right.appendChild(rpos);

    rplatform.setAttribute("class", "platform");
    rplatform.setAttribute("id", "rplatform");
    right.appendChild(rplatform);

    //left  lpos 
    acannibel.setAttribute("class", "cannibel");

    lpos.appendChild(acannibel);

    bcannibel.setAttribute("class", "cannibel");
    lpos.appendChild(bcannibel);

    ccannibel.setAttribute("class", "cannibel");
    lpos.appendChild(ccannibel);

    amission.setAttribute("class", "mission");
    lpos.appendChild(amission);

    bmission.setAttribute("class", "mission");
    lpos.appendChild(bmission);

    cmission.setAttribute("class", "mission");
    lpos.appendChild(cmission);

    //right move
    passenger.setAttribute("id", "passenger");
    move.appendChild(passenger);

    boat.setAttribute("id", "boat");
    move.appendChild(boat);



    boat.onclick = boatMove;


    acannibel.addEventListener("click", shifting);
    bcannibel.addEventListener("click", shifting);
    ccannibel.addEventListener("click", shifting);
    amission.addEventListener("click", shifting);
    bmission.addEventListener("click", shifting);
    cmission.addEventListener("click", shifting);

}
