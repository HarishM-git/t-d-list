

let tdl=JSON.parse(localStorage.getItem('ltdl'))||[];

document.querySelector('.parag').innerHTML=JSON.parse(localStorage.getItem('para'));

  
    
function tap(){
  
  
  let text_html='';

  
  for(let i=0;i<tdl.length;i++){
    const value=tdl[i];
    const {name,due}=value;
     
    const html=`
    <p>${name}</p>
    <p> ${due}</p>
    <button class="button_js" onclick="
    document.querySelector('.delete').play();

    
      tdl.splice(${i},1);
      tap();

      ">delete
    </button>`;
    

      text_html+=html;
  }
  document.querySelector('.parag').innerHTML=text_html;
  localStorage.setItem('para',JSON.stringify(text_html));
}



function to(){

  let name=document.querySelector('.input').value;
  let due=document.querySelector('.date').value;
  if (name===''){
    alert('It seems you forgot to mention the Work?');
  
  }
  else if(due===null){
    alert('It seems you forgot to mention the date?')
  }
  else{
    tdl.push({name,due});
    document.querySelector('.input').value='';
    document.querySelector('.date').value='';
    localStorage.setItem('ltdl',JSON.stringify(tdl));
    tap();
  }
   

  
 

}
  