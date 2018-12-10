class Init {
    //name of the bot and current location
    name: string;
    currentX: number;
    currentY: number;
    constructor(name: string, x: number, y: number) {
        this.name = name;
        this.currentX = x;
        this.currentY = y
    }
}

class Bot extends Init {
    say(message: string) {
        return message + " " + this.name;
    }
    moveXY(x: number, y: number) {
        //distance = radical Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)
        let myDistance: number;
        myDistance = Math.pow((this.currentX - x), 2) + Math.pow((this.currentY - y), 2);
        myDistance = Math.sqrt(myDistance);
        motors.largeAB.steer(0, 50, myDistance, MoveUnit.Rotations)
        return myDistance;
    }
}


// let bot = new Bot("George", 1, 2)
// brick.showString(bot.say("lets fight"), 2);
// bot.moveXY(10, 12);
// brick.showNumber(bot.moveXY(10, 12), 1)

