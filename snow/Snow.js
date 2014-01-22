Particle3D = function (material) {
  THREE.Particle.call(this, material);
  this.velocity = new THREE.Vector3(0, -8, 0);
  this.velocity.rotateX(randomRange(-45, 45));
  this.velocity.rotateY(randomRange(0, 360));
  this.gravity = new THREE.Vector3(0, 0, 0);
  this.drag = 1;
};

Particle3D.prototype = new THREE.Particle();
Particle3D.prototype.constructor = Particle3D;

Particle3D.prototype.updatePhysics = function () {
  this.velocity.multiplyScalar(this.drag);
  this.velocity.addSelf(this.gravity);
  this.position.addSelf(this.velocity);
};

var TO_RADIANS = Math.PI / 180;

THREE.Vector3.prototype.rotateY = function (angle) {
  var cosRY = Math.cos(angle * TO_RADIANS);
  var sinRY = Math.sin(angle * TO_RADIANS);
  var tempZ = this.z;
  var tempX = this.x;
  this.x = (tempX * cosRY) + (tempZ * sinRY);
  this.z = (tempX * -sinRY) + (tempZ * cosRY);
};

THREE.Vector3.prototype.rotateX = function (angle) {
  var cosRY = Math.cos(angle * TO_RADIANS);
  var sinRY = Math.sin(angle * TO_RADIANS);
  var tempZ = this.z;
  var tempY = this.y;
  this.y = (tempY * cosRY) + (tempZ * sinRY);
  this.z = (tempY * -sinRY) + (tempZ * cosRY);
};

THREE.Vector3.prototype.rotateZ = function (angle) {
  var cosRY = Math.cos(angle * TO_RADIANS);
  var sinRY = Math.sin(angle * TO_RADIANS);
  var tempX = this.x;
  var tempY = this.y;
  this.y = (tempY * cosRY) + (tempX * sinRY);
  this.x = (tempY * -sinRY) + (tempX * cosRY);
};

function randomRange(min, max) {
  return((Math.random() * (max - min)) + min);
}