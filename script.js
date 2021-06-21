/*Start of navbar code*/
var navItem2 = document.getElementById("navItem2").getBoundingClientRect();
var navItem3 = document.getElementById("navItem3").getBoundingClientRect();
var navItem4 = document.getElementById("navItem4").getBoundingClientRect();
var navItem5 = document.getElementById("navItem5").getBoundingClientRect();
var dropDC = document.getElementsByClassName("navbarDropdownC");
var navDrop1AWidth = document.getElementById("navDrop12").getBoundingClientRect().width;
var navDrop2AWidth = document.getElementById("navDrop21").getBoundingClientRect().width;
var navDrop3AWidth = document.getElementById("navDrop31").getBoundingClientRect().width;
var navDrop4AWidth = document.getElementById("navDrop42").getBoundingClientRect().width;
var mouseOverNavbar = false;
var mouseOverNI00 = false; mouseOverNI01 = false; mouseOverNI1 = false; mouseOverNI2 = false; var mouseOverNI3 = false; var mouseOverNI4 = false; var mouseOverNI5 = false; var mouseOverNI6 = false; var mouseOverNI7 = false;
var mouseOverND1 = false; var mouseOverND2 = false; var mouseOverND3 = false; var mouseOverND4 = false;
var mouseLeaveND1 = false; var mouseLeaveND2 = false; var mouseLeaveND3 = false; var mouseLeaveND4 = false;
var mouseLeaveNI2 = false; var mouseLeaveNI3 = false; var mouseLeaveNI4 = false; var mouseLeaveNI5 = false;

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
function clearMLNI() {
    mouseLeaveNI2 = false;
    mouseLeaveNI3 = false;
    mouseLeaveNI4 = false;
    mouseLeaveNI5 = false;
}
function clearMLND() {
    mouseLeaveND1 = false;
    mouseLeaveND2 = false;
    mouseLeaveND3 = false;
    mouseLeaveND4 = false;
}

$("#navDrop1").css("left", `${navItem2.left - ((navDrop1AWidth - navItem2.width) / 2)}px`);
$("#navDrop2").css("left", `${navItem3.left - ((navDrop2AWidth - navItem3.width) / 2)}px`);
$("#navDrop3").css("left", `${navItem4.left - ((navDrop3AWidth - navItem4.width) / 2)}px`);
$("#navDrop4").css("left", `${navItem5.left - ((navDrop4AWidth - navItem5.width) / 2)}px`);
for (var index = 0; index < 4; index++) {
    dropDC[index].style.top = `${document.querySelector(".navbarCC").getBoundingClientRect().height - dropDC[index].getBoundingClientRect().height}px`;
    dropDC[index].style.transition = "top 2s";
}

$(".navbarCC").on("mouseover", function () { mouseOverNavbar = true; });
$(".navbarCC").on("mouseout", function () { mouseOverNavbar = false; });
$("#navbarMainI").on("mouseover", function () { mouseOverNI00 = true; });
$("#navbarMainI").on("mouseout", function () { mouseOverNI00 = false; });
$("#navbarMainT").on("mouseover", function () { mouseOverNI01 = true; });
$("#navbarMainT").on("mouseout", function () { mouseOverNI01 = false; });
$("#navItem1").on("mouseover", function () { mouseOverNI1 = true; });
$("#navItem1").on("mouseout", function () { mouseOverNI1 = false; });
$("#navItem2").on("mouseenter", function () { mouseOverNI2 = true; $("#navDrop1").css("top", `${document.querySelector(".navbarCC").getBoundingClientRect().height}px`); });
$("#navItem2").on("mouseleave", function () { mouseOverNI2 = false; mouseLeaveNI2 = true; });
$("#navItem3").on("mouseover", function () { mouseOverNI3 = true; $("#navDrop2").css("top", `${document.querySelector(".navbarCC").getBoundingClientRect().height}px`); });
$("#navItem3").on("mouseout", function () { mouseOverNI3 = false; mouseLeaveNI3 = true; });
$("#navItem4").on("mouseover", function () { mouseOverNI4 = true; $("#navDrop3").css("top", `${document.querySelector(".navbarCC").getBoundingClientRect().height}px`); });
$("#navItem4").on("mouseout", function () { mouseOverNI4 = false; mouseLeaveNI4 = true; });
$("#navItem5").on("mouseover", function () { mouseOverNI5 = true; $("#navDrop4").css("top", `${document.querySelector(".navbarCC").getBoundingClientRect().height}px`); });
$("#navItem5").on("mouseout", function () { mouseOverNI5 = false; mouseLeaveNI5 = true; });
$("#navItem6").on("mouseover", function () { mouseOverNI6 = true; });
$("#navItem6").on("mouseout", function () { mouseOverNI6 = false; });
$("#navItem7").on("mouseover", function () { mouseOverNI7 = true; });
$("#navItem7").on("mouseout", function () { mouseOverNI7 = false; });

$("#navDrop1").on("mouseover", function () { mouseOverND1 = true; clearMLND(); });
$("#navDrop1").on("mouseout", function () { mouseOverND1 = false; mouseLeaveND1 = true; });
$("#navDrop2").on("mouseover", function () { mouseOverND2 = true; clearMLND(); });
$("#navDrop2").on("mouseout", function () { mouseOverND2 = false; mouseLeaveND2 = true; });
$("#navDrop3").on("mouseover", function () { mouseOverND3 = true; clearMLND(); });
$("#navDrop3").on("mouseout", function () { mouseOverND3 = false; mouseLeaveND3 = true; });
$("#navDrop4").on("mouseover", function () { mouseOverND4 = true; clearMLND(); });
$("#navDrop4").on("mouseout", function () { mouseOverND4 = false; mouseLeaveND4 = true; });
$("body").on("mousemove", function () {
    console.log();
    if ((mouseOverNI00 || mouseOverNI01 || mouseOverNI1 || mouseOverNI3 || mouseOverNI4 || mouseOverNI5 || mouseOverNI6 || mouseOverNI7) && mouseLeaveNI2) {
        $("#navDrop1").css("top", `${document.querySelector(".navbarCC").getBoundingClientRect().height - dropDC[0].getBoundingClientRect().height}px`);
        clearMLNI();
    }
    if ((mouseOverNI00 || mouseOverNI01 || mouseOverNI1 || mouseOverNI2 || mouseOverNI4 || mouseOverNI5 || mouseOverNI6 || mouseOverNI7) && mouseLeaveNI3) {
        $("#navDrop2").css("top", `${document.querySelector(".navbarCC").getBoundingClientRect().height - dropDC[1].getBoundingClientRect().height}px`);
        clearMLNI();
    }
    if ((mouseOverNI00 || mouseOverNI01 || mouseOverNI1 || mouseOverNI2 || mouseOverNI3 || mouseOverNI5 || mouseOverNI6 || mouseOverNI7) && mouseLeaveNI4) {
        $("#navDrop3").css("top", `${document.querySelector(".navbarCC").getBoundingClientRect().height - dropDC[2].getBoundingClientRect().height}px`);
        clearMLNI();
    }
    if ((mouseOverNI00 || mouseOverNI01 || mouseOverNI1 || mouseOverNI2 || mouseOverNI3 || mouseOverNI4 || mouseOverNI6 || mouseOverNI7) && mouseLeaveNI5) {
        $("#navDrop4").css("top", `${document.querySelector(".navbarCC").getBoundingClientRect().height - dropDC[3].getBoundingClientRect().height}px`);
        clearMLNI();
    }
    if (!mouseOverNavbar && !mouseOverND1 && mouseLeaveND1) {
        sleep(1000);
        $("#navDrop1").css("top", `${document.querySelector(".navbarCC").getBoundingClientRect().height - dropDC[0].getBoundingClientRect().height}px`);
    }
    if (!mouseOverNavbar && !mouseOverND2 && mouseLeaveND2) {
        sleep(1000);
        $("#navDrop2").css("top", `${document.querySelector(".navbarCC").getBoundingClientRect().height - dropDC[1].getBoundingClientRect().height}px`);
    }
    if (!mouseOverNavbar && !mouseOverND3 && mouseLeaveND3) {
        sleep(1000);
        $("#navDrop3").css("top", `${document.querySelector(".navbarCC").getBoundingClientRect().height - dropDC[2].getBoundingClientRect().height}px`);
    }
    if (!mouseOverNavbar && !mouseOverND4 && mouseLeaveND4) {
        sleep(1000);
        $("#navDrop4").css("top", `${document.querySelector(".navbarCC").getBoundingClientRect().height - dropDC[3].getBoundingClientRect().height}px`);
    }
});
/*End of navbar code*/