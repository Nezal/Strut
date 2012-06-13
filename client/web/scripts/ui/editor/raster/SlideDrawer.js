// Generated by CoffeeScript 1.3.3
/*
@author Matt Crinklaw-Vogt
*/

define(["common/Throttler", "./TextBoxDrawer", "./ImageModelDrawer"], function(Throttler, TextBoxDrawer, ImageModelDrawer) {
  var SlideDrawer;
  return SlideDrawer = (function() {

    function SlideDrawer(model, g2d) {
      var key, value, _ref;
      this.model = model;
      this.g2d = g2d;
      this.model.on("contentsChanged", this.repaint, this);
      this.size = {
        width: this.g2d.canvas.width,
        height: this.g2d.canvas.height
      };
      this.throttler = new Throttler(600, this);
      this.scale = this.size.width / slideConfig.size.width;
      this.drawers = {
        TextBox: new TextBoxDrawer(this.g2d),
        ImageModel: new ImageModelDrawer(this.g2d)
      };
      _ref = this.drawers;
      for (key in _ref) {
        value = _ref[key];
        value.scale = this.scale;
      }
    }

    SlideDrawer.prototype.resized = function(newSize) {
      var key, value, _ref;
      this.size = newSize;
      this.scale = this.size.width / slideConfig.size.width;
      _ref = this.drawers;
      for (key in _ref) {
        value = _ref[key];
        value.scale = this.scale;
      }
      return this.repaint();
    };

    SlideDrawer.prototype.repaint = function() {
      return this.throttler.submit(this.paint, {
        rejectionPolicy: "runLast"
      });
    };

    SlideDrawer.prototype.paint = function() {
      var components,
        _this = this;
      this.g2d.clearRect(0, 0, this.size.width, this.size.height);
      components = this.model.get("components");
      return components.forEach(function(component) {
        var type;
        type = component.get("type");
        _this.g2d.save();
        _this.drawers[type].paint(component);
        return _this.g2d.restore();
      });
    };

    SlideDrawer.prototype.dispose = function() {
      return this.model.off(null, null, this);
    };

    return SlideDrawer;

  })();
});
