
// globals
var FPS = 30,
    CANVAS_WIDTH = 640,
    CANVAS_HEIGHT = 400,
    FLOOR = 100,
    canvasElement = document.getElementById('gameCanvas'),
    ctx = canvasElement.getContext('2d');

// luigi image
var luigiImage = new Image(); 
luigiImage.src = 'luigi.png';

/*
img.onload = function() {
	canvas.drawImage(img, 8, 3, 23, 30, 100, 100, 23, 30);
}
*/
	

// run the world
setInterval( function() {
	update();
	draw();
}, 1000/FPS)

function checkInput() {
    
    // left and right cannot be simultaneous
    if (keydown.left) {
        luigi.x = luigi.x < 3 ? luigi.x : luigi.x - 6;
    } else if (keydown.right) {
        luigi.x = luigi.x > CANVAS_WIDTH - luigi.attributes.width ? luigi.x : luigi.x + 6;
    }

    if (keydown.up) {
        luigi.jump();
    }



    if (keydown.space) {
        luigi.shoot();
    }
    
}

function update() {
	checkInput();
        luigi.update();
}

function draw() {
	ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        luigi.draw();

}

var luigi = {
        attributes: {
            image: luigiImage,
            width: 23,
            height: 30,

        },
        state: {
            position: {
                x: 8,
                y: 300
            }
        },
        jump: {
        },
	draw: function() {
		ctx.drawImage(  this.attributes.image, 8, 3, 23, 30, 
                                this.state.position.x, this.state.position.y, 
                                23, 30);
	},
        shoot: function() {
            var fireballPosition = this.midpoint();
            // change image, create bullet add to list, update image countr
        },
        midpoint: function() {
            return {
                x: this.x + this.attributes.width/2,
                y: this.y + this.attributes.height/2
            };
        }

}

var fireballs = [];

function Fireball(I) { 
    I.active = true;

    I.xVel = 7;
    I.yVel
}

// 304 -> 152 V   to find luigi's top while firing
// 34 wide by 31 tall


