const inputDOM=document.querySelector("#task");
let ekleDOM=document.querySelector("#liveToastBtn");
let ulDom=document.querySelector("#list");



//to do listemizde hali hazırda olan itemleri alırız.
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  localStorage.setItem('to do',myNodelist[i].innerHTML); //local storage set edilir.
  var span = document.createElement("SPAN");  //her bir node için silme işlemi için span oluşturulur. 
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  span.onclick=removeButton;   //span'a tıklandığında removeButton fonksiyonu çalışır.
  myNodelist[i].appendChild(span);
  myNodelist[i].onclick=check;   //node'a  tıklandığında check fonksiyonu çalışır.
  

}

ekleDOM.addEventListener('click',newElement());


function newElement(event){

    if(inputDOM.value==""  || inputDOM.value.charAt(0)==" " && inputDOM.value.charAt(inputDOM.value.length-1)==" "){
        $(".error").toast("show");
     
  }

    else{
        $(".success").toast('show');
        let liDom=document.createElement('LI');  //li elementi oluşturulur ve değer atanır.
        liDom.innerHTML=inputDOM.value;
        ulDom.appendChild(liDom);
        inputDOM.value="";

        liDom.onclick=check;   
        localStorage.setItem('to do',liDom.innerHTML);
        var span = document.createElement("SPAN");  //yeni li'ler için span oluluşturullur ve eklenir.
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        span.onclick=removeButton;
        liDom.appendChild(span);


    }  
} 

function removeButton(){
    this.parentElement.remove();
}
function check(){
    this.classList.toggle('checked');
}



 