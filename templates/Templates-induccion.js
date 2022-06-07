//Template scroll 1
/*if (!document.getElementById('box-tmp')) {
  // Crea un div para darle altura a la pagina
  var ref = document.querySelector(''); //Selector que contiene los jobs
  var newEle = document.createElement('div');
  newEle.setAttribute('id', 'box-tmp')
  ref.appendChild(newEle);
  newEle.style.height = '8000px' // para darle altura a la pagina
  }
*/
(function (){
    var out = {};
    
    if(!pass_it["cont"]) {
        out["pass_it"] ={
          "cont": 0
      };
    }else{
        out["pass_it"] = pass_it;
    }
  
    out["has_next_page"] = true;

    document.querySelector("").scrollBy(0, document.querySelector("").scrollHeight)
    
    if(out["pass_it"].cont == document.querySelectorAll("").length){
        out["has_next_page"] = false;
    }
    out["pass_it"].cont = document.querySelectorAll("").length;
    //out["html"] = true;
    out["pic"] = true;
    out.wait = true;
    out.waitFor = "";
    return out;
  })();

  //Template scroll 2

  (function () {
  var out = {};
  // Crea un div para darle altura a la pagina
  var ref = document.querySelector(''); //Selector que contiene los jobs 
  var newEle = document.createElement('div');
  ref.appendChild(newEle);
  newEle.style.height = '6000px' // para darle altura a la pagina 
  msg(pass_it);
  if(!pass_it["heights"])	out["pass_it"] = {"heights":[]};
  else 					out["pass_it"] = pass_it;

  out["has_next_page"] = true;
  //comparamos las ultimas tres alturas
  if(out["pass_it"]["heights"].length > 3){
    var last_three_heights = out["pass_it"]["heights"].slice(out["pass_it"]["heights"].length - 3); 
    if(last_three_heights[0] == last_three_heights[1] && last_three_heights[1] == last_three_heights[2])
      out["has_next_page"] = false;
  }
  	window.scrollBy(0, document.body.scrollHeight);
  
  out["wait"] = true;
  out["pic"] = true;
  out["html"] = true;
  out["pass_it"]["heights"].push(document.querySelectorAll('').length);//Selector de los JOBS
  return out;
})();
