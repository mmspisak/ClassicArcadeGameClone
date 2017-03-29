// Enemies our player must avoid
var Enemy = function(x, y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.random() * 100;
};

Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed*dt;
    if(this.x >= 500) {
        this.x = -150;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.checkCollisions = function() {
    if(this.x < player.x + 75 && this.x + 75 > player.x && 40 + this.y > player.y) {
        player.reset();
        alert("Bugs got you!");
    }
};

var Player = function(x,y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
 };
 
Player.prototype.update = function(dt){
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);  
};

Player.prototype.reset = function() {
    this.x = 210;
    this.y = 370;
};

Player.prototype.handleInput = function(k) {
   switch (k) {
        case('left'):
            if(this.x - 50 >= 0){
                this.x -= 50;
            }
            break;
        case('up'):
            if(this.y < 20) {
                alert("You win!");
                player.reset();
            }else{
                this.y -= 50;
            }
            break;
        case('right'):
            if(this.x < 420){
                this.x += 50;
            }
            break;
        case('down'):
            if(this.y < 420) {
                this.y += 50;
            }
            break;
        default:
            break;
   }
};

// instantiating the objects.
    var e1 = new Enemy(0, 50);
    var e2 = new Enemy(-100, 120);
    var e3 = new Enemy(-150, 250);
    var allEnemies = [e1, e2, e3];
    var player = new Player(210, 370);


// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
Contact GitHub API Training Shop Blog About
