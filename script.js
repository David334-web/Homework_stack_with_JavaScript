let stack  = []

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)

let remove = stack.pop()

//console.log(stack)
//console.log(remove)

let remove2 = stack.shift()
//console.log(remove2)


function stack2(){
    this.arr = [];
}

stack2.prototype.add = function(value){
    this.arr.push(value);
}

stack2.prototype.delete = function(value){
    this.arr.pop(value);
}

const pil = new stack2();

pil.add(1);
pil.add(2);
pil.add(3);

console.log(pil);
console.log(pil.delete());