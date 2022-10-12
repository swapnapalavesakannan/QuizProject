"use strict";

/*  Variable that enables you to "talk to" your SVG drawing canvas. */
let drawing = d3
  .select("#canvas")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

/* Draw a border that matches the maximum drawing area for this assignment.
    Assign the border to a variable so that:
        (1) We know what the purpose of the shape is, and
        (2) We will have the ability to change it later (in a future assignment)
*/
let border = drawing
  .append("rect")
  .attr("width", 500)
  .attr("height", 500)
  .attr("fill", "none")
  .attr("stroke", "red");

/* Write your code for Project 1 beneath this comment */

let house1roofT1 = drawing //triangular shape
  .append("polyline")
  .attr(
    "points",
    closedPolygon(
      100,
      275, //roof lower left of triangle
      125,
      250, //roof top of triangle
      150,
      275 //roof lower right of triangle
    )
  )
  .attr("fill", "red")
  .attr("stroke", "red");

let house1roofT2 = drawing //inverted triangular shape
  .append("polyline")
  .attr(
    "points",
    closedPolygon(
      125,
      250, //roof top left of triangle
      150,
      275, //roof bottom of triangle
      175,
      250 //roof top right of triangle
    )
  )
  .attr("fill", "red")
  .attr("stroke", "red");

let house2wall = drawing
  .append("rect")
  .attr("x", 195) //intersecting point of x in the graph
  .attr("y", 210) //intersecting point of y in the graph
  .attr("width", 35)
  .attr("height", 165)
  .attr("fill", "lightgray")
  .attr("stroke", "lightgray");

let house2roof = drawing //triangular shape
  .append("polyline")
  .attr(
    "points",
    closedPolygon(
      195,
      210, //roof lower left of triangle
      210,
      180, //roof top of triangle
      230,
      210 //roof lower right of triangle
    )
  )
  .attr("fill", "red")
  .attr("stroke", "red");

let house2windowcircle = drawing
  .append("ellipse")
  .attr("cx", 212.6) //Circumference of the window circle
  .attr("cy", 234)
  .attr("rx", 7.5) //Radius of the window circle
  .attr("ry", 7.5)
  .attr("fill", "skyblue")
  .attr("stroke", "skyblue");

let house2windowsquare = drawing
  .append("rect")
  .attr("x", 205) //intersecting point of x in the graph
  .attr("y", 235) //intersecting point of y in the graph
  .attr("width", 15)
  .attr("height", 15)
  .attr("fill", "skyblue")
  .attr("stroke", "skyblue");

let house1roofT3 = drawing //triangular shape
  .append("polyline")
  .attr(
    "points",
    closedPolygon(
      150,
      275, //roof lower left of triangle
      175,
      250, //roof top of triangle
      200,
      275 //roof lower right of triangle
    )
  )
  .attr("fill", "gray")
  .attr("stroke", "gray");

let house1wall1 = drawing
  .append("rect")
  .attr("x", 100) //intersecting point of x in the graph
  .attr("y", 275) //intersecting point of y in the graph
  .attr("width", 50)
  .attr("height", 100)
  .attr("fill", "Violet")
  .attr("fill", "violet");

let house1wall2 = drawing
  .append("rect")
  .attr("x", 150) //intersecting point of x in the graph
  .attr("y", 275) //intersecting point of y in the graph
  .attr("width", 50)
  .attr("height", 100)
  .attr("fill", "gray")
  .attr("stroke", "gray");

let house1window1 = drawing
  .append("rect")
  .attr("x", 160) //intersecting point of x in the graph
  .attr("y", 272) //intersecting point of y in the graph
  .attr("width", 10)
  .attr("height", 60)
  .attr("fill", "skyblue")
  .attr("stroke", "skyblue");

let house1window2 = drawing
  .append("rect")
  .attr("x", 180) //intersecting point of x in the graph
  .attr("y", 272) //intersecting point of y in the graph
  .attr("width", 10)
  .attr("height", 60)
  .attr("fill", "skyblue")
  .attr("stroke", "skyblue");

let house1door = drawing
  .append("rect")
  .attr("x", 165) //intersecting point of x in the graph
  .attr("y", 350) //intersecting point of y in the graph
  .attr("width", 20)
  .attr("height", 25)
  .attr("fill", "brown")
  .attr("stroke", "brown");

let house3wall1 = drawing
  .append("rect")
  .attr("x", 201) //intersecting point of x in the graph
  .attr("y", 330) //intersecting point of y in the graph
  .attr("width", 65)
  .attr("height", 45)
  .attr("fill", "violet")
  .attr("stroke", "violet");

let house3wall2 = drawing
  .append("rect")
  .attr("x", 266.5) //intersecting point of x in the graph
  .attr("y", 330) //intersecting point of y in the graph
  .attr("width", 44)
  .attr("height", 45)
  .attr("fill", "gray")
  .attr("stroke", "gray");

let house3roofT1 = drawing
  .append("polyline")
  .attr(
    "points",
    closedPolygon(
      201,
      330, //roof lower left of triangle
      230,
      300, //roof top of triangle
      265,
      330 //roof lower right of triangle
    )
  )
  .attr("fill", "red")
  .attr("stroke", "red");

let house3roofT3 = drawing
  .append("polyline")
  .attr(
    "points",
    closedPolygon(
      266,
      330, //roof lower left of triangle
      285.5,
      300, //roof top of triangle
      310.5,
      330 //roof lower right of triangle
    )
  )
  .attr("fill", "gray")
  .attr("stroke", "gray");

let house3roofT2 = drawing
  .append("polyline")
  .attr(
    "points",
    closedPolygon(
      230,
      300, //roof top left of triangle
      266,
      330, //roof bottom of triangle
      285.5,
      300 //roof top right of triangle
    )
  )
  .attr("fill", "red")
  .attr("stroke", "red");

let house3window1 = drawing
  .append("rect")
  .attr("x", 275) //intersecting point of x in the graph
  .attr("y", 325) //intersecting point of y in the graph
  .attr("width", 10)
  .attr("height", 15)
  .attr("fill", "skyblue")
  .attr("stroke", "skyblue");

let house3window2 = drawing
  .append("rect")
  .attr("x", 290) //intersecting point of x in the graph
  .attr("y", 325) //intersecting point of y in the graph
  .attr("width", 10)
  .attr("height", 15)
  .attr("fill", "skyblue")
  .attr("stroke", "skyblue");

let house3door = drawing
  .append("rect")
  .attr("x", 280) //intersecting point of x in the graph
  .attr("y", 355) //intersecting point of y in the graph
  .attr("width", 15)
  .attr("height", 20)
  .attr("fill", "brown")
  .attr("stroke", "brown");

let treebranchcircle1 = drawing
  .append("ellipse")
  .attr("cx", 343) //Circumference of the window circle
  .attr("cy", 285)
  .attr("rx", 17.5) //Radius of the window circle
  .attr("ry", 17.5)
  .attr("fill", "green")
  .attr("stroke", "green");

let treebranchrect = drawing
  .append("rect")
  .attr("x", 325.5) //intersecting point of x in the graph
  .attr("y", 285) //intersecting point of y in the graph
  .attr("width", 35)
  .attr("height", 35)
  .attr("fill", "green")
  .attr("stroke", "green");

let treebranchcircle2 = drawing
  .append("ellipse")
  .attr("cx", 343) //Circumference of the window circle
  .attr("cy", 320)
  .attr("rx", 17.5) //Radius of the window circle
  .attr("ry", 17.5)
  .attr("fill", "green")
  .attr("stroke", "green");

let treebranch = drawing
  .append("rect")
  .attr("x", 340) //intersecting point of x in the graph
  .attr("y", 323) //intersecting point of y in the graph
  .attr("width", 5)
  .attr("height", 52)
  .attr("fill", "brown")
  .attr("stroke", "brown");
