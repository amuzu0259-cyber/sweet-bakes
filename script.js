document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput1');
    if (!searchInput) {
        console.error('Input not found');
        return;
    }

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const keyword = searchInput.value.trim().toLowerCase();
            //alert('Searching: ${keyword}');

            if (keyword.includes('cake')) window.location.href = 'cakes.html';
            else if (keyword.includes('pastry')) window.location.href = 'pastries.html';
            else if (keyword.includes('drink')) window.location.href = 'drinks.html';
            else alert('No match');
        }
    });
});

function search() {
    let filter = document.getElementById('searchInput').value.toUpperCase();

    let item = document.querySelectorAll('.produce');

    let l = document.getElementsByTagName('h3');

    for(var i = 0;i<=l.length;i++){
        let a=item[i].getElementsByTagName('h3')[0];

        let value=a.innerHTML || a.innerText || a.textContent;

        if(value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display="";
        }
        else
        {
            item[i].style.display="none";
        }
    }
}


