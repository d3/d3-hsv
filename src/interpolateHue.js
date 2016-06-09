import constant from "./constant";
import interpolateLinear from "./interpolateLinear";

export default function(a, b) {
  var d = b - a;
  return d ? interpolateLinear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}
