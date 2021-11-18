const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var suelo1;
var caja1, caja2, caja3, caja4;
var bola1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    caja1 = new box(800,100,70,70);
    caja2 = new box(800,100,70,70);
    caja3 = new box(800,100,70,70);
    caja4 = new box(800,100,70,70);

    caja5 = new box(870,100,70,70);
    caja6 = new box(870,100,70,70);
    caja7 = new box(870,100,70,70);
    caja8 = new box(870,100,70,70);

    suelo1 = new Suelo(600,385,1300,30)

    bola1 = new Bola(200,10,80, 80);
    cuerda1 = new Cuerda(bola1.body, { x: 700, y: 50});
    
   

}

function draw(){
    background(100)
    Engine.update(engine);

    suelo1.display();
    caja1.display();
    caja2.display();
    caja3.display();
    caja4.display();

    caja5.display();
    caja6.display();
    caja7.display();
    caja8.display();

   bola1.display();
   cuerda1.display();
 
   
}

function mouseDragged() {
    Matter.Body.setPosition(bola1.body, { x: mouseX, y: mouseY});
}