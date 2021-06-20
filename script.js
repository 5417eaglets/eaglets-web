var navItem2 = document.getElementById("navItem2").getBoundingClientRect();
var navItem3 = document.getElementById("navItem3").getBoundingClientRect();
var navItem4 = document.getElementById("navItem4").getBoundingClientRect();
var navItem5 = document.getElementById("navItem5").getBoundingClientRect();
var navDrop1AWidth = document.getElementById("navDrop12").getBoundingClientRect().width;
var navDrop2AWidth = document.getElementById("navDrop21").getBoundingClientRect().width;
var navDrop3AWidth = document.getElementById("navDrop31").getBoundingClientRect().width;
var navDrop4AWidth = document.getElementById("navDrop42").getBoundingClientRect().width;
var mouseOverNI2 = false; var mouseOverNI3 = false; var mouseOverNI4 = false; var mouseOverNI5 = false;
var mouseOverND1 = false; var mouseOverND2 = false; var mouseOverND3 = false; var mouseOverND4 = false;

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

$("#navDrop1").css("margin-left", `${navItem2.left - ((navDrop1AWidth - navItem2.width) / 2)}px`);
$("#navDrop2").css("margin-left", `${navItem3.left - ((navDrop2AWidth - navItem3.width) / 2)}px`);
$("#navDrop3").css("margin-left", `${navItem4.left - ((navDrop3AWidth - navItem4.width) / 2)}px`);
$("#navDrop4").css("margin-left", `${navItem5.left - ((navDrop4AWidth - navItem5.width) / 2)}px`);
$("#navDrop1").css("display", "none");
$("#navDrop2").css("display", "none");
$("#navDrop3").css("display", "none");
$("#navDrop4").css("display", "none");

$("#navItem2").on("mouseover", function () { $("#navDrop1").css("display", "block"); mouseOverNI2 = true; });
$("#navItem2").on("mouseout", function () { mouseOverNI2 = false;sleep(250); });
$("#navItem3").on("mouseover", function () { $("#navDrop2").css("display", "block"); mouseOverNI3 = true; });
$("#navItem3").on("mouseout", function () { mouseOverNI3 = false;sleep(250); });
$("#navItem4").on("mouseover", function () { $("#navDrop3").css("display", "block"); mouseOverNI4 = true; });
$("#navItem4").on("mouseout", function () { mouseOverNI4 = false;sleep(250); });
$("#navItem5").on("mouseover", function () { $("#navDrop4").css("display", "block"); mouseOverNI5 = true; });
$("#navItem5").on("mouseout", function () { mouseOverNI5 = false;sleep(250); });
$("#navDrop1").on("mouseover", function () { mouseOverND1 = true; });
$("#navDrop1").on("mouseout", function () { mouseOverND1 = false; });
$("#navDrop2").on("mouseover", function () { mouseOverND2 = true; });
$("#navDrop2").on("mouseout", function () { mouseOverND2 = false; });
$("#navDrop3").on("mouseover", function () { mouseOverND3 = true; });
$("#navDrop3").on("mouseout", function () { mouseOverND3 = false; });
$("#navDrop4").on("mouseover", function () { mouseOverND4 = true; });
$("#navDrop4").on("mouseout", function () { mouseOverND4 = false; });
$("body").on("mousemove", function () {
    if (!mouseOverNI2 && !mouseOverND1) {
        $("#navDrop1").css("display", "none");
    }
    if (!mouseOverNI3 && !mouseOverND2) {
        $("#navDrop2").css("display", "none");
    }
    if (!mouseOverNI4 && !mouseOverND3) {
        $("#navDrop3").css("display", "none");
    }
    if (!mouseOverNI5 && !mouseOverND4) {
        $("#navDrop4").css("display", "none");
    }
});