var tape = require("tape"),
    d3_color = require("d3-color"),
    d3 = require("../");

tape("interpolateHsvLong(a, b) converts a and b to HSV colors", function(test) {
  test.equal(d3.interpolateHsvLong("steelblue", "brown")(0), d3_color.rgb("steelblue") + "");
  test.equal(d3.interpolateHsvLong("steelblue", d3.hsv("brown"))(1), d3_color.rgb("brown") + "");
  test.equal(d3.interpolateHsvLong("steelblue", d3_color.rgb("brown"))(1), d3_color.rgb("brown") + "");
  test.end();
});

tape("interpolateHsvLong(a, b) interpolates in HSV and returns an RGB string", function(test) {
  test.equal(d3.interpolateHsvLong("steelblue", "#f00")(0.2), "rgb(56, 195, 162)");
  test.equal(d3.interpolateHsvLong("rgba(70, 130, 180, 1)", "rgba(255, 0, 0, 0.2)")(0.2), "rgba(56, 195, 162, 0.84)");
  test.end();
});

tape("interpolateHsvLong(a, b) does not use the shortest path when interpolating hue", function(test) {
  var i = d3.interpolateHsvLong("hsl(10,50%,50%)", "hsl(350,50%,50%)");
  test.equal(i(0.0), "rgb(191, 85, 64)");
  test.equal(i(0.2), "rgb(153, 191, 64)");
  test.equal(i(0.4), "rgb(64, 191, 119)");
  test.equal(i(0.6), "rgb(64, 119, 191)");
  test.equal(i(0.8), "rgb(153, 64, 191)");
  test.equal(i(1.0), "rgb(191, 64, 85)");
  test.end();
});

tape("interpolateHsvLong(a, b) uses a’s hue when b’s hue is undefined", function(test) {
  test.equal(d3.interpolateHsvLong("#f60", "#000")(0.5), "rgb(128, 51, 0)");
  test.equal(d3.interpolateHsvLong("#6f0", "#fff")(0.5), "rgb(179, 255, 128)");
  test.end();
});

tape("interpolateHsvLong(a, b) uses b’s hue when a’s hue is undefined", function(test) {
  test.equal(d3.interpolateHsvLong("#000", "#f60")(0.5), "rgb(128, 51, 0)");
  test.equal(d3.interpolateHsvLong("#fff", "#6f0")(0.5), "rgb(179, 255, 128)");
  test.end();
});

tape("interpolateHsvLong(a, b) uses a’s saturation when b’s saturation is undefined", function(test) {
  test.equal(d3.interpolateHsvLong("#ccc", "#000")(0.5), "rgb(102, 102, 102)");
  test.equal(d3.interpolateHsvLong("#f00", "#000")(0.5), "rgb(128, 0, 0)");
  test.end();
});

tape("interpolateHsvLong(a, b) uses b’s saturation when a’s saturation is undefined", function(test) {
  test.equal(d3.interpolateHsvLong("#000", "#ccc")(0.5), "rgb(102, 102, 102)");
  test.equal(d3.interpolateHsvLong("#000", "#f00")(0.5), "rgb(128, 0, 0)");
  test.end();
});

tape("interpolateHsvLong(a, b) uses b’s value when a’s value is undefined", function(test) {
  test.equal(d3.interpolateHsvLong(null, d3.hsv(20, 1.0, 1.0))(0.5), "rgb(255, 85, 0)");
  test.end();
});

tape("interpolateHsvLong(a, b) uses a’s value when b’s value is undefined", function(test) {
  test.equal(d3.interpolateHsvLong(d3.hsv(20, 1.0, 1.0), null)(0.5), "rgb(255, 85, 0)");
  test.end();
});
