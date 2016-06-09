import hsv from "./hsv";
import interpolateChannel from "./interpolateChannel";
import interpolateHue from "./interpolateHue";

function interpolateHsv(interpolateHue) {
  return function(start, end) {
    var h = interpolateHue((start = hsv(start)).h, (end = hsv(end)).h),
        s = interpolateChannel(start.s, end.s),
        v = interpolateChannel(start.v, end.v),
        opacity = interpolateChannel(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.v = v(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

export default interpolateHsv(interpolateHue);
export var interpolateHsvLong = interpolateHsv(interpolateChannel);
