let enter = document.getElementById('id');
let unl = document.getElementById('ha');

document.getElementById('but').addEventListener('click', () => {
    if (enter.value.length > 5) {
        let lst = document.createElement('li');
        lst.innerHTML = `${enter.value} <button class="buts">delete</button>`;
        lst.querySelector('.buts').addEventListener("click", () => {
            unl.removeChild(lst);
        });
        
        unl.appendChild(lst);
        enter.value = '';
    } else {
        alert("ENTER THE CORRECT EVENT");
    }
});
