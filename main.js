const validate_radius = document.getElementById("validate_radius");
const draw_circle = document.getElementById("draw_circle");
const compute_area_circumference = document.getElementById("compute_area_circumference");
validate_radius.onclick = function () {
    let radius = document.getElementById("radius").value;
    if (radius === "" || radius < 0 || radius > 200) {
        alert("Not a valid radius")
    } else {
        alert("It is a valid radius")
    }
}
draw_circle.onclick = function () {
    let radius = document.getElementById("radius").value;
    if (radius === "" || radius < 0 || radius > 200) {
        alert("Not a valid radius")
    } else {
        var ctx_circle = document.getElementById(["paper1"]).getContext("2d");
        ctx_circle.beginPath();
        ctx_circle.arc([200], [200], [radius], 0, 2 * Math.PI);
        ctx_circle.stroke();
    }
}
compute_area_circumference.onclick = function () {
    let radius = document.getElementById("radius").value
    if (radius === "" || radius < 0 || radius > 200) {
        alert("Not a valid radius")
    } else {
        const area = 3.14 * radius * radius
        const circumference = 3.14 * 2 * radius
        alert("Area of circle is " + area + " and circumference of circle is " + circumference + ".")
    }
}

const validate_width_height = document.getElementById("validate_width_height");
const draw_rectangle = document.getElementById("draw_rectangle");
const compute_area_perimeter = document.getElementById("compute_area_perimeter");
validate_width_height.onclick = function () {
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    if (width === "" || height === "" || width < 0 || width > 600 || height < 0 || height > 400) {
        alert("Not a valid width/height")
    } else {
        alert("They are valid width/height")
    }
}
draw_rectangle.onclick = function () {
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    if (width === "" || height === "" || width < 0 || width > 600 || height < 0 || height > 400) {
        alert("Not a valid width/height")
    } else {
        var ctx_rectangle = document.getElementById(["paper2"]).getContext("2d");
        ctx_rectangle.beginPath();
        ctx_rectangle.rect([300 - (Number(width) / 2)], [200 - (Number(height) / 2)], [width], [height]);
        ctx_rectangle.stroke();
    }
    if (width === height) {
        alert("It is a square.")
    }
}
compute_area_perimeter.onclick = function () {
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    if (width === "" || height === "" || width < 0 || width > 600 || height < 0 || height > 400) {
        alert("Not a valid width/height")
    } else {
        const area_rec = width * height
        const perimeter = width + height + width + height
        alert("Area of rectangle is " + area_rec + " and perimeter of rectangle is " + perimeter + ".")
    }
}

const clear = document.getElementById("clear");
clear.onclick = function () {
    let canvas1 = document.getElementById('paper1');
    let canvas2 = document.getElementById('paper2');
    let ctx_circle = document.getElementById('paper1').getContext("2d");
    let ctx_rectangle = document.getElementById('paper2').getContext("2d");
    var radius = document.getElementById("radius");
    radius.value = "";
    let width = document.getElementById("width");
    width.value = "";
    let height = document.getElementById("height");
    height.value = "";
    ctx_rectangle.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx_circle.clearRect(0, 0, canvas1.width, canvas1.height);
}