const input = document.getElementById('input')
function palindrom(){
    console.log(input.value)
    const reversed = input.value.split('').reverse().join('')
    if (reversed===input.value){
        console.log("palindrom")
    }
    else{
        console.log("NO palindrom")
    }
}