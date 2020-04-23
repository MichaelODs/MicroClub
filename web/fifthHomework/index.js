class Vihicle {
    static count = 0;
    brand = String()
    color = String()
    speed = Number()
    run(){
        console.log("车速:" + this.speed)
    }
    constructor(brand, color) {
        if (Vihicle.count >= 11) {
            throw new Error("只能创建11个变量");
        }
        Vihicle.count++;
        this.brand = brand;
        this.color = color;
        this.speed = 0;
        Object.defineProperties(this, {
            brand:{
                writable:false
            },
            speed:{
                value:0
            }
        })
    }

}

let v = new Vihicle("benz", "black");
v.brand = "ssss"
console.log(v)
v.run()
v.speed = 100
v.run()