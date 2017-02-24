$(document).ready(function(){
   drawTriangles();
   scaleDown();
});
function scaleDown(){
  $('#main').attr('transform', "scale(0.125)");
}
function drawTriangles(){
  //draw k
  drawPoly(1,6);
  drawPoly(1,7);
  drawPoly(2,5);
  drawPoly(2,6);
  drawPoly(3,4);
  drawPoly(3,5);
  drawPoly(4,3);
  drawPoly(4,4);
  drawPoly(4,5);
  drawPoly(4,6);
  drawPoly(4,7);
  drawPoly(4,8);
  drawPoly(5,2);
  drawPoly(5,3);
  drawPoly(5,5);
  drawPoly(5,6);
  drawPoly(6,1);
  drawPoly(6,2);
  drawPoly(6,6);
  drawPoly(6,7);

  //draw y
  drawPoly(4,12);
  drawPoly(4,13);
  drawPoly(5,13);
  drawPoly(5,14);
  drawPoly(6,14);
  drawPoly(4,17);
  drawPoly(4,18);
  drawPoly(5,16);
  drawPoly(5,17);
  drawPoly(6,15);
  drawPoly(6,16);
  drawPoly(7,14);
  drawPoly(7,15);
  drawPoly(8,13);
  drawPoly(8,14);
  drawPoly(9,12);
  drawPoly(9,13);
    
  //draw l
  drawPoly(6,19);
  drawPoly(6,20);
  drawPoly(5,20);
  drawPoly(5,21);
  drawPoly(4,21);
  drawPoly(4,22);
  drawPoly(3,22);
  drawPoly(3,23);
  drawPoly(2,23);
  drawPoly(2,24);
  drawPoly(1,24);
  drawPoly(1,25);

  //draw e
  drawPoly(6,26);
  drawPoly(6,27);
  drawPoly(5,25);
  drawPoly(5,26);
  drawPoly(4,25);
  drawPoly(4,26);
  drawPoly(4,27);
  drawPoly(3,26);
  drawPoly(3,27);
  drawPoly(3,28);
  drawPoly(3,29);
  drawPoly(3,30);
  drawPoly(4,30);
  drawPoly(4,29);
  drawPoly(5,29);

  //draw m
  drawPoly(6,35);
  drawPoly(6,36);
  drawPoly(5,36);
  drawPoly(5,37);
  drawPoly(4,37);
  drawPoly(4,38);
  drawPoly(3,38);
  drawPoly(4,39);
  drawPoly(4,40);
  drawPoly(4,41);
  drawPoly(5,41);
  drawPoly(5,40);
  drawPoly(6,40);
  drawPoly(6,39);
  drawPoly(4,43);
  drawPoly(4,44);
  drawPoly(4,45);
  drawPoly(5,45);
  drawPoly(5,44);
  drawPoly(6,44);
  drawPoly(6,43);

  //draw a
  drawPoly(6,48);
  drawPoly(6,49);
  drawPoly(6,50);
  drawPoly(6,52);
  drawPoly(5,48);
  drawPoly(5,49);
  drawPoly(5,51);
  drawPoly(5,52);
  drawPoly(4,49);
  drawPoly(4,50);
  drawPoly(4,51);

  //draw r
  drawPoly(6,55);
  drawPoly(6,56);
  drawPoly(5,56);
  drawPoly(5,57);
  drawPoly(4,57);
  drawPoly(4,58);
  drawPoly(4,59);
  drawPoly(4,60);

  //draw x
  drawPoly(3,63);
  drawPoly(3,64);
  drawPoly(3,66);
  drawPoly(3,67);
  drawPoly(4,64);
  drawPoly(4,65);
  drawPoly(4,66);
  drawPoly(5,64);
  drawPoly(5,65);
  drawPoly(5,66);
  drawPoly(6,63);
  drawPoly(6,64);
  drawPoly(6,66);
  drawPoly(6,67);
}

function drawPoly(row, column) {
    var poly = document.createElementNS("http://www.w3.org/2000/svg","polygon");
    poly.setAttribute("class", 'name');
    points =  getPolyPoints(row, column);
    poly.setAttribute("points", points);
  
    // $('#canvas').append(poly);
    $('#main').append(poly);
}

function getPolyPoints(row, column){
  var x=[];
  var y=[];
  var retStr = "";
  for(var i=0; i<3; i++){
    x[i] = (column+i)*25;
  }
  for(i=0; i<3; i++){
    y[i] = row*43 + 21.5 + 21.5*Math.pow(-1,column + row + i + 1);
  }
  for(var i = 0; i < 3; i++){
    retStr += x[i] + "," + y[i] + " ";
  }
  return retStr;
}