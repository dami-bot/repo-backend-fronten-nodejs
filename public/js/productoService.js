async function getBicicletas(){
    const res = fetch('https://localhost:3000/producto')
    const resjson = await res.json()
    return resjson
}