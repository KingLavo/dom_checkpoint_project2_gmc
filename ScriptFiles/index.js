document.addEventListener("DOMContentLoaded", ()=>{
    let changeColorBtn = document.querySelector("#chang-color-btn")
    let colorBox = document.querySelector("#color-box")
    

      //color generating function
    let  getRandomColor = ()=>{
      var randomColor = Math.floor(Math.random() * 256)
       return rgbColorGen =  `rgb(${randomColor}, ${randomColor}, ${randomColor})`
    }
      //color change function
    changeColorBtn.addEventListener("click", ()=>{
        colorBox.style.backgroundColor = getRandomColor()
    })
})
 
 
