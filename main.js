class RocketMoving {
    constructor () {
        this.xAxis = 0
        this.yAxis = 0
        this.rocket = document.querySelector(".rocket_img img")
    }
    init () {
      let pointer = document.addEventListener("mousemove",(e)=>{
         this.xAxis = e.pageX 
         this.yAxis = e.pageY 
         this.movingRocket(this.xAxis,this.yAxis)
      })
    }
    movingRocket (x,y) {
        this.rocket.style.marginLeft = (x - 100) + 'px';
        this.rocket.style.marginTop = (y - 100)+ 'px';
        console.log (x,y)

    }
}

// CREATE OBJECT OF THE ROCKETMOVING CLASS 
let move = new RocketMoving ()
move.init ()