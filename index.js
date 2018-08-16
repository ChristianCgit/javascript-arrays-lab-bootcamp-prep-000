// Add your functions and code here
  function beforeEach(){
    window.kittens = ['Milo', 'Otis', 'Garfield'];
  console.log(kittens)
}


function destructivelyAppendKittens(name){
    console.log(kittens.concat('Ralph'))
}
 
function desttructivelyPrependKitten(name){
  kittens.splice(0,'Bob')
  console.log(kittens)
}    
  