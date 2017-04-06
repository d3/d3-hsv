# d3-hsv

This module implements the [HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) (Hue, Saturation, Value) color space.

## Installing

If you use NPM, `npm install d3-hsv`. Otherwise, download the [latest release](https://github.com/d3/d3-hsv/releases/latest). You can also load directly from [d3js.org](https://d3js.org) as a [standalone library](https://d3js.org/d3-hsv.v0.0.min.js). AMD, CommonJS, and vanilla environments are supported. In vanilla, a `d3` global is exported:

```html
<script src="https://d3js.org/d3-color.v0.5.min.js"></script>
<script src="https://d3js.org/d3-hsv.v0.0.min.js"></script>
<script>

var yellow = d3.hsv("yellow"); // {h: 60, s: 1, v: 1, opacity: 1}

</script>
```

[Try d3-hsv in your browser.](https://tonicdev.com/npm/d3-hsv)

## API Reference

<a name="hsv" href="#hsv">#</a> d3.<b>hsv</b>(<i>h</i>, <i>s</i>, <i>v</i>[, <i>opacity</i>])<br>
<a href="#hsv">#</a> d3.<b>hsv</b>(<i>specifier</i>)<br>
<a href="#hsv">#</a> d3.<b>hsv</b>(<i>color</i>)<br>

Constructs a new [HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) color. The channel values are exposed as `h`, `s` and `v` properties on the returned instance.

If *h*, *s* and *v* are specified, these represent the channel values of the returned color; an *opacity* may also be specified. If a CSS Color Module Level 3 *specifier* string is specified, it is parsed and then converted to the HSV color space. See [d3.color](https://github.com/d3/d3-color#color) for examples. If a [*color*](https://github.com/d3/d3-color#color) instance is specified, it is converted to the RGB color space using [*color*.rgb](https://github.com/d3/d3-color#color_rgb) and then converted to HSV.

<a href="#interpolateHsv">#</a> d3.<b>interpolateHsv</b>(<i>a</i>, <i>b</i>)<br>

…

<a href="#interpolateHsvLong">#</a> d3.<b>interpolateHsvLong</b>(<i>a</i>, <i>b</i>)<br>

…
