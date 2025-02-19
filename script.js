const data =[];
function add(){
    const name = document.querySelector('.input-area').value;
    const dueDate= document.querySelector('.input-date').value;
    if(name != "" || dueDate != ""){
        data.push({name:name,dueDate:dueDate});
        update();
    }
}

function update() {
    if (document.querySelector('.input-button').innerText == 'Edit') document.querySelector('.input-button').innerText = 'Add';
    document.querySelector('.input-area').value = '';
    document.querySelector('.input-date').value = '';
    let root = '';
    if (data.length == 0) {
        document.querySelector('.show').innerHTML = root;
    }
    for (let i = data.length - 1; i >= 0; i--) {
        const inpData = data[i].name;
        const inpDate = data[i].dueDate;
        root += `
            <div class="displayedData">${inpData}</div>
            <div class="displayedData">${inpDate}</div>
            <button onclick="edit(${i})" class="editButton">Edit</button>
            <button onclick="data.splice(${i},1);update();" class="deleteButton">Delete</button>`;
        document.querySelector('.show').innerHTML = root;
    }
}

function edit(i){
    oldData = data[i].name;
    oldDate = data[i].dueDate;
    data.splice(i,1);
    update();
    document.querySelector('.input-button').innerText = 'Edit';
    document.querySelector('.input-area').value = oldData;
    document.querySelector('.input-date').value = oldDate;
}





