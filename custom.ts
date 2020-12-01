//% weight=100 color=#03AA74 icon="\uf013"
namespace どうさ　{
    let wait = 100
    let wait2= 200
    let AP0=1024
    
    //% block="まえすすめ"
    //% weight=89
    export function まえすすめ() { 
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 85)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 85)
        basic.pause(wait)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 58)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 78)
        basic.pause(wait)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 90)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 90)
        basic.pause(wait)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 95)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 95)
        basic.pause(wait)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 93)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 113)
        basic.pause(wait)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 90)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 90)
        basic.pause(wait)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 90)
    }

    //% block="うしろすすめ"
    //% weight=86
    export function うしろすすめ(){
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 85)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 85)
        basic.pause(wait)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 85)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 95)
        basic.pause(wait)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 90)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 90)
        basic.pause(wait)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 95)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 95)
        basic.pause(wait)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 45)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 65)
        basic.pause(wait)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 90)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 90)
        basic.pause(wait)
    }

    //% block="みぎカニあるき"
    //% weight=83
    export function みぎカニあるき(){
           for (let index = 0; index < 4; index++) {
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 70)
        basic.pause(wait2)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 70)
        basic.pause(wait2)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 110)
        basic.pause(wait2)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 130)
        basic.pause(wait2)
    }
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 90)
    basic.pause(wait)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 90)
    basic.pause(wait)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 70)
    basic.pause(wait)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 90)
    basic.pause(wait)
    }

    //% block="ひだりカニあるき"
    //% weight=80
    export function　ひだりカニあるき(){
        for (let index = 0; index < 4; index++) {
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 110)
        basic.pause(wait2)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 110)
        basic.pause(wait2)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 70)
        basic.pause(wait2)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 50)
        basic.pause(wait2)
    }
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 90)
    basic.pause(wait)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 90)
    basic.pause(wait)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 70)
    basic.pause(wait)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 90)
    basic.pause(wait)
    }
       //% block="センサーまえ"
    //% weight=74
    export function センサーまえ(): boolean {
        if (pins.analogReadPin(AnalogPin.P1) > 800) {
             return true;
        } else {return false;
         }
    }
    //% block="みぎまわれ"
    //% weight=80
    export function みぎまわれ(){

    }
        //% block="ひだりまわれ"
    //% weight=78
    export function ひだりまわれ(){

    }
    //% block="とまれ"
    //% weight=84
    export function とまれ(){
        
    }





}
