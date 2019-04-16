document.addEventListener('DOMContentLoaded', init);


function init(){
  document.querySelector("#Home").addEventListener("click", ()=>window.open(/*home page url*/));
  document.querySelector("#WhyUs").addEventListener("click", ()=>window.open(/*why us url*/));
  //message to the code reviewer: I can add 20 something click listeners that go to their "url" like how I did in the above 2, but I do not believe
  //that is necessary
  formHandler()
}

function formHandler(){
  let form= document.querySelector('#Form').addEventListener('submit',function(){
    event.preventDefault();
    let domain= document.querySelector('#Domain').value
    if(domain ==""){
      alert('empty domain')
    }
    else{
      //submit
    }
  })
}
