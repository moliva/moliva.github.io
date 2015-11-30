Array.prototype.cycleNext = function (value) {
  var index = this.indexOf(value);
  return this[this.length == index + 1 ? 0 : index + 1];
}

Array.prototype.indexOf = function(value) {
  for (var i = 0; i < this.length; ++i) {
    if (this[i] == value) {
      return i;
    }
  }
}
