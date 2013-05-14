var chars = ["a", "s", "d", "j", "%", "$", "#", "^", "￠", "*", "¶", "4", "2", "8", "", ".", "X", "Y", " ", " "];
var W, H;

     $(function () {          
          var sid = $("#sid").val();
          var chat = $.connection.liuro;
        //觸發位置XY ,訊號種類,布林亂數,隨機顏色,兩個0~1亂數
       chat.client.broadcast = function (_xRatio, _yRatio, signal, b, rndColor, r1, r2, words, callerID, userColor) {

                var s = new createjs.Shape();
                W = stage.canvas.width;
                H = stage.canvas.height;
                var _x = W * _xRatio;
                var _y = H * _yRatio;
               switch (signal) {
                        case 0: //固定位置淡出線
                            if (b)
                                s.graphics.s(rndColor).mt(0, _y).lt(W, _y);
                            else
                                s.graphics.s(rndColor).mt(_x, 0).lt(_x, H);
                           s.alpha = 1;
                           stage.addChild(s);
                           fadeOut(s, 4000);
                            break;
                   case 1: //sonar
                       var txt = new createjs.Text("■" + callerID.substr(0, 10), "15px Arial", userColor);
                           var c = new lib.circle2();
                          txt.setTransform(_x-15 , _y-30);
                           c.setTransform(_x - 70, _y - 70);
                            c.scaleX = (1 + r1 * 0.5)*(W/1920);
                            c.scaleY = c.scaleX;
                           stage.addChild(c);
                           stage.addChild(txt);
                           fadeOut(c, 1500);
                           fadeOut(txt, 1500);
                            soundplay(["sonar"], callerID == sid ? 1 : 0.08);
                           // callerID == sid ? $("#count").val("本人呼叫") : $("#count").val(callerID+"呼叫");
                           break;
                       case 2: //random number TEXT
                           var prefix = b ? "±" : "+";
                            var txt = new createjs.Text(prefix + (r1 + r2), "15px Arial", "#FFF");
                           var dst = W * r1 < _x ? 0 : W;
                            s.graphics.s("#225500").mt(_x, _y + 10).lt(W * r1, H * r2).lt(dst, H * r2);
                            txt.setTransform(_x, _y);
                            stage.addChild(s);
                           stage.addChild(txt);
                           fadeOut(s, 1500);
                           fadeOut(txt, 1500);
                           soundplay(["pdgls"], callerID == sid ? 1 : 0.2,r1);
                           break;
                       case 3:
                           s.graphics.f(rndColor).dp(_x, _y, 12, 3, 0.75, r1 * 360);
                            stage.addChild(s);
                           fadeOut(s, 1500);
                           if (r2 <0.25) {
                                    var txt = new createjs.Text(words, "15px Arial", rndColor);
                                  txt.setTransform(_x, _y + 10);
                                  stage.addChild(txt);
                                 var txtTween = createjs.Tween.get(txt);
                                    txtTween.onChange = function () {
                                            if (Math.random() < 0.5)
                                                txt.text = "";
                                            else
                                                txt.text = words;
                                        }
                                    txtTween.wait(500).to({ alpha: 0, visible: false }, 1500).call(onComplete);
                                function onComplete() {
                                          stage.removeChild(txt);
                                }        
                                var url = "http://translate.google.com/translate_tts?ie=utf-8&tl=en&q=" + words;
                                document.getElementById("tts").innerHTML = "<embed src='" + url + "' hidden='true' volume='20' loop='FALSE' autostart='true'/>";                    
                           }
                           soundplay(["pdgls","apollo"], callerID == sid ? 1 : 0.2,r1);
                            break;
                        case 4:  //移動淡出線
                            s.alpha = 0.4;
                           if (b) {
                                  s.graphics.s(rndColor).mt(0, _y).lt(W, _y);
                                  createjs.Tween.get(s).wait(200).to({ y: _y + (r2 - r1) * 1000 }, 3500);
                               }
                           else {
                              s.graphics.s(rndColor).mt(_x, 0).lt(_x, H);
                              createjs.Tween.get(s).wait(200).to({ x: _x + (r1 - r2) * 1000 }, 3500);
                            }
                        stage.addChild(s);
                        fadeOut(s, 3500);
        
                        break;
                    case 5:  //斜向虛線 
                        var dstX, dstY;
                        var q = r1 + r2;
                        if (q >= 0 && q < 0.5) //左
                        { dstX = 0; dstY = (q * 2) * H; }
                    if (q >= 0.5 && q < 1) //下
                    { dstX = (q - 0.5) * 2 * W; dstY = H; }
                if (q >= 1 && q < 1.5) //右
                { dstX = W; dstY = (q - 1) * 2 * H; }
                if (q >= 1.5 && q < 2) //上
                { dstX = (q - 1.5) * 2 * W; dstY = 0; }
                var g = s.graphics;
                s.alpha = 0.5;
               g.s("#0c4");
                 dashedLine(g, _x, _y, dstX, dstY, 15);
                 g.mt(_x, _y);
                 dashedLine(g, _x, _y, dstX > 0.5 ? 0 : W, dstY > 0.5 ? 0 : H, 12);
                 stage.addChild(s);
                 createjs.Tween.get(s).wait(200).to({ scaleX: 1.5, scaleY: 1.5 }, 5000);
                 fadeOut(s, 5000);
                 soundplay(["beep"], 0.5);
                 break;
             case 6://animate text
                 var mode = b == true ? 1 : 2   //mode1 字串擴展 mode2字串縮減
                 var txt = new createjs.Text(genData(Math.round(r1 * 20)), "12px Arial", rndColor);
                 txt.setTransform(_x, _y+30);
                 stage.addChild(txt);
                 var txtTween = createjs.Tween.get(txt);
                 txtTween.onChange = function () {
                         var len = txt.text.length;
                         for (var i = 0; i < len  - 1; i++) {
                                 var data = txt.text;
                                 if (txt.text[i] != '\n') {
                                         var c = chars[Math.round(Math.random() * chars.length)];
                                         txt.text = data.substr(0, i) + c + data.substr(i + 1, len - i- mode);
                                     }
                             }
                     };
                 txtTween.wait(500).to({ alpha: 0, visible: false }, 1300).call(onComplete);
                 function onComplete() {
                         stage.removeChild(txt);
                     }
                 soundplay(["beep","pdgls"], callerID == sid ? 1 : 0.08,r1);
                 break;
             case 7: //glitch
                 var lines = 15;
                 var glitchcolor = ["#36ff44", "#ff40ff", "#ffff2f", "#29ffdf", "3f52f2", "fff"];
                 var ctx = canvas.getContext("2d");
                 var gg = images[Math.round(Math.random() * 14)];
                 for (var i = 0; i < lines; i++) {
                         for (var j = 0; j < 5; j++) {
         
                                 ctx.fillStyle = glitchcolor[Math.round(Math.random() * 6)];
                                 ctx.fillRect(W / lines * (b ? j : i + Math.random() * r2) + _x / 5,
                                              H * (b ? i : j + Math.random() * r1) + _y / 1.5,
                                              W / lines * Math.random() * r2 * 10,
                                              H * Math.random() * r1 * 2);
                             }
                     }
                 soundplay(["static"],0.07, 0);
                 if (Math.random() < 0.275 && gg != null) //圖片可能還沒有加載完成
                   {  var naturalWidth=gg.width==0?gg.naturalWidth:gg.width;
                     var naturalHeight=gg.height==0?gg.naturalHeight:gg.height;
                         for (var i = 0; i < lines; i++) {
                                 for (var j = 0; j < 5; j++) {
                                         var sx, sy, sw, sh, x, y, w, h;
                                         sx = Math.random() * naturalWidth;
                                         sy = Math.random() * naturalHeight;
                                         sw = naturalWidth / lines;
                                         sh = naturalHeight / 5;
                                         x = i * W / lines;
                                         y = j * H / 5;
                                         w = W / lines;
                                         h = H / 5;
                                         ctx.drawImage(gg, sx, sy, sw, sh, x, y, w, h);
                                     }
                             }
                        soundplay(["static","beep"],1,r1);
                 }
         }
     };

       $.connection.hub.start().done(function () {

                W = stage.canvas.width;
                H = stage.canvas.height;
                if (navigator.appName == 'Microsoft Internet Explorer')
                    canvas.addEventListener("click", getPosition, false);
                canvas.addEventListener("mousedown", getPosition, false);  //IE9 has problem
                canvas.addEventListener("mousemove", mouseNoise, false);  
                canvas.addEventListener("mouseup", mouseup, false);         
                var push = false;             
                canvas.addEventListener('touchstart', getPositionIpad, false); //for Ipad or Iphone
                //canvas.addEventListener('touchmove', touchNoise, false); //for ipad or Iphone
                //canvas.addEventListener('touchend', touchEnd, false); //for ipad or Iphone

                function getPosition(e) {      
                    restbound = 0.03;
                    restime = 6500;
                    fire =true;
                     mouseX = e.x  - canvas.offsetLeft;
                     mouseY = e.y  - canvas.offsetTop;
                     chat.server.send(mouseX / W, mouseY / H);
                     push = true;                 
                }
                var beeped = 0;
                function getPositionIpad(e) {
                  
                    if (beeped<12)//First sound must be invoke by user in ipad
                    {
                        document.getElementById("video").play();
                        createjs.Sound.setMute(false);
                        var t = createjs.Sound.play("/sound/beep.mp3");
                        t.mute(false);
                        t.setVolume(1);
                        beeped++;
                    }
                    for (var i = 0; i < e.targetTouches.length; i++) {
                        if (e.targetTouches.length > 2) 
                            break;
                        mouseX = e.targetTouches[i].pageX;
                        mouseY = e.targetTouches[i].pageY;
                        chat.server.send(mouseX / W, mouseY / H);           
                    }
                    push = true;
                }
           
                function mouseNoise(e) {    
                    if (push && e.x % 10 == 0)  
                        getNoise();
                }
                function touchNoise(e) {
                    if (push && e.targetTouches[0].pageX % 100 == 0)  //效能調整  
                        getNoise();
                }
                function getNoise()
                {
                    var xlines = Math.round(3 + Math.random() * 5);
                        var ylines = xlines;
                        var ctx = canvas.getContext("2d");
                        var gg =canvas;
                        var naturalWidth = gg.width == 0 ? gg.naturalWidth : gg.width;
                        var naturalHeight = gg.height == 0 ? gg.naturalHeight : gg.height;
                        for (var i = 0; i < xlines ; i++) {
                            for (var j = 0; j < ylines; j++) {         
                                    var sx, sy, sw, sh, x, y, w, h;
                                    sx = Math.random() * naturalWidth;
                                    sy = Math.random() * naturalHeight;
                                    sw = naturalWidth / xlines * Math.random();
                                    sh = naturalHeight / ylines * Math.random();
                                    x = i * W / xlines;
                                    y = j * H / ylines;
                                    w = W / xlines * Math.random();
                                    h = H / ylines * Math.random();
                                    ctx.drawImage(gg, sx, sy, sw, sh, x, y, w, h);
                                 } }
                }
                function mouseup(e) {
                    push = false;
                }
                function touchEnd(e) {
                    push = false;
                }

       });

 });
 function fadeOut(elem, time) {
         createjs.Tween.get(elem).wait(500).to({ alpha: 0, visible: false }, time).call(onComplete);
         function onComplete() {
                 stage.removeChild(elem);
             }
     }
 function genData(lines) {
         var data = ""
         for (var i = 0; i < lines; i++) {
                 for (var j = 0; j < 7; j++) {
                         data += chars[Math.round(Math.random() * chars.length)];
                     }
                 data += '\n';
             }
         return data;
     }
 function dashedLine(g, x1, y1, x2, y2, dashLen) {
         if (dashLen == undefined)
             dashLen = 2;
         var q = 0;
         var dX = x2  - x1;
         var dY = y2  - y1;
         var dashes = Math.floor(Math.sqrt(dX * dX + dY * dY) / dashLen);
         var dashX = dX / dashes;
         var dashY = dY / dashes;
         g.mt(x1, y1);
         while (q++ < dashes) {
                 x1 += dashX;
                 y1 += dashY;
                 if (q % 2 == 0)
                     g.mt(x1, y1);
                 else
                     g.lt(x1, y1);
             }
     }
 
 
 
 //$("canvas").click(function () {
 //    if (canvas.requestFullscreen) {
 //        canvas.requestFullscreen();
 //    } else if (canvas.mozRequestFullScreen) {
 //        canvas.mozRequestFullScreen();
 //    } else if (canvas.webkitRequestFullscreen) {
 //        canvas.webkitRequestFullscreen();
 //    }
 //});
 
