canvas = document.getElementById("myCanvas");
MouseEvent = "empty"
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color");
    radius = document.getElementById("radius");
    linewidth = document.getElementById("linewidth");

    MouseEvent = "mousedown";
}
canvas.addEventListener("mouseleave", my_mouseleave) 
    function my_mouseleave(e) {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;


        if (mouseEvent == "mousedown") {
            console.log("current position of x and y coordinates");
            console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);

            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = linewidth;
            ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
            ctx.stroke()

        }
    }


