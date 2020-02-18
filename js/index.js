const GET_DATA = document.querySelector('#add');
const SHWO_DATA = document.querySelector('#show');

document.addEventListener('keyup', keyboard =>{
    if(keyboard.code === "Enter"){
        const get_value = GET_DATA.value;
        if(get_value === ""){
            clear.value="";
        }else{
            addData(get_value);
            clear(GET_DATA);
        }
    }
});
const btnAdd = document.querySelector('#addNew');
btnAdd.addEventListener('click', () => {
    const get_value = GET_DATA.value;
        if(get_value === ""){
            clear.value="";
        }else{
            addData(get_value);
            clear(GET_DATA);
        }
});

function addData(Data){
    const item =`
        <li>
            <p><i class="material-icons">mode_edit</i>${Data}</p>
        </li>
    `;
    SHWO_DATA.insertAdjacentHTML('beforeend', item);
}

function clear(clear){
    clear.value = "";
}

function filterItem(){
    const FILTER_NOT_FOUNT = -1;
    const items = document.querySelectorAll('li');
    const filter = GET_DATA.value.toUpperCase();
    let text;
    for(let i = 0; i< items.length; i++){
        text = items[i].textContent || toUpperCase().indexOf
    }
}