document.addEventListener("DOMContentLoaded", ()=>{
    let changeColorBtn = document.querySelector("#chang-color-btn")
    let colorBox = document.querySelector("#color-box")
    

      //color generating function
    let  getRandomColor = ()=>{
      var randomColor = Math.floor(Math.random() * 256)
      var randomColor2 = Math.floor(Math.random() * 256)
      var randomColor3 = Math.floor(Math.random() * 256)
       return rgbColorGen =  `rgb(${randomColor}, ${randomColor2}, ${randomColor3})`
    }
      //color change function
    changeColorBtn.addEventListener("click", ()=>{
        colorBox.style.backgroundColor = getRandomColor()
    })


})
 
 
