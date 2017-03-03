$(document).ready(function(){
   draw_triangles();
});

function draw_triangles(){
  //draw k
  draw_poly(1,6);
  draw_poly(1,7);
  draw_poly(2,5);
  draw_poly(2,6);
  draw_poly(3,4);
  draw_poly(3,5);
  draw_poly(4,3);
  draw_poly(4,4);
  draw_poly(4,5);
  draw_poly(4,6);
  draw_poly(4,7);
  draw_poly(4,8);
  draw_poly(5,2);
  draw_poly(5,3);
  draw_poly(5,5);
  draw_poly(5,6);
  draw_poly(6,1);
  draw_poly(6,2);
  draw_poly(6,6);
  draw_poly(6,7);

  //draw y
  draw_poly(4,12);
  draw_poly(4,13);
  draw_poly(5,13);
  draw_poly(5,14);
  draw_poly(6,14);
  draw_poly(4,17);
  draw_poly(4,18);
  draw_poly(5,16);
  draw_poly(5,17);
  draw_poly(6,15);
  draw_poly(6,16);
  draw_poly(7,14);
  draw_poly(7,15);
  draw_poly(8,13);
  draw_poly(8,14);
  draw_poly(9,12);
  draw_poly(9,13);
    
  //draw l
  draw_poly(6,19);
  draw_poly(6,20);
  draw_poly(5,20);
  draw_poly(5,21);
  draw_poly(4,21);
  draw_poly(4,22);
  draw_poly(3,22);
  draw_poly(3,23);
  draw_poly(2,23);
  draw_poly(2,24);
  draw_poly(1,24);
  draw_poly(1,25);

  //draw e
  draw_poly(6,26);
  draw_poly(6,27);
  draw_poly(5,25);
  draw_poly(5,26);
  draw_poly(4,25);
  draw_poly(4,26);
  draw_poly(4,27);
  draw_poly(3,26);
  draw_poly(3,27);
  draw_poly(3,28);
  draw_poly(3,29);
  draw_poly(3,30);
  draw_poly(4,30);
  draw_poly(4,29);
  draw_poly(5,29);

  //draw m
  draw_poly(6,35);
  draw_poly(6,36);
  draw_poly(5,36);
  draw_poly(5,37);
  draw_poly(4,37);
  draw_poly(4,38);
  draw_poly(3,38);
  draw_poly(4,39);
  draw_poly(4,40);
  draw_poly(4,41);
  draw_poly(5,41);
  draw_poly(5,40);
  draw_poly(6,40);
  draw_poly(6,39);
  draw_poly(4,43);
  draw_poly(4,44);
  draw_poly(4,45);
  draw_poly(5,45);
  draw_poly(5,44);
  draw_poly(6,44);
  draw_poly(6,43);

  //draw a
  draw_poly(6,48);
  draw_poly(6,49);
  draw_poly(6,50);
  draw_poly(6,52);
  draw_poly(5,48);
  draw_poly(5,49);
  draw_poly(5,51);
  draw_poly(5,52);
  draw_poly(4,49);
  draw_poly(4,50);
  draw_poly(4,51);

  //draw r
  draw_poly(6,55);
  draw_poly(6,56);
  draw_poly(5,56);
  draw_poly(5,57);
  draw_poly(4,57);
  draw_poly(4,58);
  draw_poly(4,59);
  draw_poly(4,60);

  //draw x
  draw_poly(3,63);
  draw_poly(3,64);
  draw_poly(3,66);
  draw_poly(3,67);
  draw_poly(4,64);
  draw_poly(4,65);
  draw_poly(4,66);
  draw_poly(5,64);
  draw_poly(5,65);
  draw_poly(5,66);
  draw_poly(6,63);
  draw_poly(6,64);
  draw_poly(6,66);
  draw_poly(6,67);

  //scale the name drawn
  scale_down();
}

function scale_down(){
  $('#main').attr('transform', "scale(0.125)");
}

function draw_poly(row, column) {
    var poly = document.createElementNS("http://www.w3.org/2000/svg","polygon");
    poly.setAttribute("class", 'name');
    points =  get_poly_points(row, column);
    poly.setAttribute("points", points);
  
    // $('#canvas').append(poly);
    $('#main').append(poly);
}

function get_poly_points(row, column){
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