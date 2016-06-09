import constant from "./constant";
import interpolateLinear from "./interpolateLinear";

export default function(a, b) {
  var d = b - a;
  return d ? interpolateLinear(a, d) : constant(isNaN(a) ? b : a);
}
