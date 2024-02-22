const contQ = document.getElementById('cont-q');
for(let i = 1; i <= 100; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
        contQ.innerHTML += `
        <div class="box box-5-3">FizzBuzz</div>
        `
    }
    else if(i % 5 === 0){
        contQ.innerHTML += `
        <div class="box box-5">Buzz</div>
        `
    }
    else if(i % 3 === 0){
        contQ.innerHTML += `
        <div class="box box-3">Fizz</div>
        `
    }
    else{
        contQ.innerHTML += `
        <div class="box">${i}</div>
        `
    }
    
} 