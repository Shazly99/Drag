let input =document.getElementById('input');
let btnInput=document.getElementById('btn');
let InsertValueInput=document.getElementById('InsertValueInput')
let boxes=document.querySelectorAll('.box')
 
let drag=null;
let DB=[]
btnInput.addEventListener('click',function () {
 
  let Data={
    input:input.value
  }
  DB.push(Data)
  console.log(DB)
  input.value=''
  input.focus()
  displayData()
  dragItem()
})

function displayData(){
  let cartonna=``;
  for (let i = 0; i < DB.length; i++) {
    cartonna+=`
    <p draggable="true" class="item text-light font-weight-bolder text-uppercase" > ${DB[i].input}</p>

    `    
  }
  InsertValueInput.innerHTML=cartonna
}
function dragItem() {
  let items=document.querySelectorAll('.item')
  items.forEach(item => {
    item.addEventListener('dragstart',function () {

      drag=item;
      console.log(item)
      item.style.opacity='0.5'
    })
    item.addEventListener('dragend',function(){
      drag=null
      item.style.opacity='1'
    })

    boxes.forEach(box => {
      box.addEventListener('dragover',function(e){
        e.preventDefault(); 
        this.style.background='#090'
        this.style.color='#fff'
      })
      box.addEventListener('dragleave',function(){
        this.style.background='#FFF'
        this.style.color='#000'
       })
       box.addEventListener('drop',function(){
         box.append(drag)
         this.style.background='#FFF'
         this.style.color='#000'
       })
    });
  });
}