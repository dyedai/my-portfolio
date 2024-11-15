import "../src/app/style.css";
import { Color } from "three/src/math/Color";
import { Util } from "../src/libs/util";
import { Param } from "../src/core/param";
import { HSL } from "../src/libs/hsl";
import { Contents } from "../src/parts/contents";

for (let i = 0; i < 50; i++) {
  const hsl = new HSL();
  hsl.h = Util.instance.random(0, 1);
  hsl.s = 1;
  hsl.l = 0.5;

  let col = new Color();
  col = col.setHSL(hsl.h, hsl.s, hsl.l);
  Param.instance.colors.push(col);
}

new Contents({
  el: document.querySelector(".l-main-wrapper"),
});
