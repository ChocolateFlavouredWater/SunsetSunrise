const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var background="sunrise1.png";

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
    background(backgroundImg)
    }

    Engine.update(engine);


}

async function getBackgroundImg(){

    var response= await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles")
   
    
    var responseJson= await response.json()
    console.log("Time",responseJson)

    var datetime= responseJson.datetime
    var hour=datetime.slice(11,13)

    console.log(hour)


    if(hour>=04&&hour<=06){
        background="sunrise1.png"

    }else if(hour>=06&&hour<=08){
        background="sunrise2.png"

    }else if(hour>=08&&hour<=10){
        background="sunrise3.png"

    }else if(hour>=10&&hour<=12){
        background="sunrise4.png"

    }else if(hour>=12&&hour<=14){
        background="sunrise5.png"

    }else if(hour>=14&&hour<=16){
        background="sunrise6.png"

    }else if(hour>=16&&hour<=18){
        background="sunset7.png"

    }else if(hour>=18&&hour<=20){
        background="sunset8.png"

    }else if(hour>=20&&hour<=22){
        background="sunset9.png"

    }else if(hour>=22&&hour<=24){
        background="sunset10.png"

    }else if(hour>=00&&hour<=03){
        background="sunset12.png"
    }

    

    //load the image in backgroundImg variable here

    backgroundImg = loadImage(background);
    console.log(backgroundImg);
   

}
