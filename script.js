const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
    
}

function dragStart() {   
    this.className +=' hold';
    setTimeout(() => this.className = "invisible" , 0);
   
   console.log("start");
}

function dragEnd() {
    this.className= 'fill';
    console.log("end");
}

function dragOver(e) {  
    // detecta cuando esta sobre un objeto para arrastar valido
    e.preventDefault()
//    e.empties();
   console.log("over");
   
}

function dragEnter(e) {
    e.preventDefault()
    // detecta cuando el destido de colocacion es valido
     this.className +=' hovered'
    console.log("enter");
}

function dragLeave() {
    this.className ='empty'
    //se activa cuando el espacio de colocacion es valido
    console.log("leave");
   
}

function dragDrop(e) {
    //detecata en donde se solto
    //e.preventDefault()
    this.className = 'empty';
    this.append(fill);
    console.log("drop")
}


