(function (lib, img, cjs) {
    
    var p; // shortcut to reference prototypes
    
    // stage content:
    (lib.testHTML = function() {
       	this.initialize();
       
       }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,0,0);
    
    
    // symbols:
    (lib.元件1 = function() {
        	this.initialize();
        
        	// 圖層 1
        	this.shape = new cjs.Shape();
        	this.shape.graphics.f().s("#00FFFF").ss(1,1,1).p("AFsFsQiWCYjWAAQjUAAiXiYQiXiWAAjWQAAjUCXiXQCXiXDUAAQDWAACWCXQCYCXAADUQAADWiYCWIAAAAAJdAAQAAD6iyCxQixCyj6AAQj5AAiyiyQixixAAj6QAAj5CxiyQCyixD5AAQD6AACxCxQCyCyAAD5IAAAA").cp();
        	this.shape.setTransform(60.5, 60.5);
        this.addChild(this.shape);
        
        }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,121,121);
    
    
    (lib.circle2 = function(mode,startPosition,loop) {
        	this.initialize(mode,startPosition,loop,{},true);
        
        	// 圖層 1
        	this.instance = new lib.元件1();
        	this.instance.setTransform(60.5,60.5,0.5,0.5,0,0,0,60.4,60.4);
        	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:60.5,regY:60.5,scaleX:0.63,scaleY:0.63,alpha:0.917},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:60.6,y:60.6,alpha:0.833},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.75},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.667},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.583},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.5},0).wait(1).to({scaleX:1.38,scaleY:1.38,alpha:0.417},0).wait(1).to({scaleX:1.5,scaleY:1.5,alpha:0.333},0).wait(1).to({scaleX:1.63,scaleY:1.63,alpha:0.25},0).wait(1).to({scaleX:1.75,scaleY:1.75,x:60.7,y:60.7,alpha:0.167},0).wait(1).to({scaleX:1.88,scaleY:1.88,alpha:0.083},0).wait(1).to({scaleX:2,scaleY:2,alpha:0},0).wait(1));
        
        }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(30.3,30.3,60.5,60.5);
    
    })(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;

