function kolor() {
    const pola = document.querySelectorAll('td')
    const wartosc = parseInt(document.querySelector('#input').value)
    for(let i=100, j=0; i>=20; i-=20,j++) {
        pola[j].style.backgroundColor = `hsl(${wartosc},${i}%,50%)`
    }
}