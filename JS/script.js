const contQ = document.getElementById('cont-q');
for(let i = 1; i <= 100; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
        contQ.innerHTML += `
        <div class="box box-5-3">${i}</div>
        `
    }
    else if(i % 5 === 0){
        contQ.innerHTML += `
        <div class="box box-5">${i}</div>
        `
    }
    else if(i % 3 === 0){
        contQ.innerHTML += `
        <div class="box box-3">${i}</div>
        `
    }
    else{
        contQ.innerHTML += `
        <div class="box">${i}</div>
        `
    }
    
} 