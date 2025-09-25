function color_change(param){
    if (param ==="red"){
        document.body.style.background = '#FF0000' 
    }
    else if (param ==="green"){
        document.body.style.background = '#008000'
    }
    else if (param ==="blue"){
        document.body.style.background = '#0000FF'
    }
    else if (param==="random"){
        var red = Math.ceil(Math.random() * 255)
        var green = Math.ceil(Math.random() * 255)
        var blue = Math.ceil(Math.random() * 255)
        document.body.style.background = `rgb(${red},${green},${blue})` 
    }
    else{
        console.log("wrong parameter")
    }
}