

// $(function()  {
//   $('.circle1').slideInUp(1000).slideInDown(1000);
//
// });
// $(document).ready(function(){

  function CalculateArea() {
   var radius = Number(document.getElementById("radiusInput").value);
   var paragraph = document.createElement('p');
    paragraph.innerText = " THE AREA OF THE RADIUS IS ";
    paragraph.className='AreaParagraph';
   document.body.appendChild(paragraph);
   var area = document.createElement('p');
   area.innerText=((radius * 2 )*Math.PI).toFixed(2);
   document.body.appendChild(area);
   var inputCircle = document.createElement('div');
   inputCircle.setAttribute('id','diff');
  //  inputCircle.setAttribute('style','width:' + radius * 2 + 'px;');
  //  inputCircle.setAttribute('style','height:'+ radius * 2 + 'px;');
  //  inputCircle.setAttribute('style','border-radius:','50%;');
  //  inputCircle.setAttribute('style','background-color:blue;');
   document.body.appendChild(inputCircle);
   $('#diff').css('background-color','pink');
   $('#diff').css('height',radius * 2 + 'px');
    $('#diff').css('width',radius * 2 + 'px');


  //  var box = document.createElement('p');
  //  box.innerText = "blah blah blah";
  //  document.body.appendChild(box);


  //  function newElement(){
    // var content = getElementById("radiusInput");
    // newElement.innerText = ("area" * "px");
    //  document.appendChild("newElement");
 }
// });
 // function newElement(){
 //   var content = getElementById("radiusInput");
 //   newElement.innerText = ("area" * "px");
 //    document.appendChild("newElement");

// var x "area";
//   function newElement(){
//     console.log()
//   }
