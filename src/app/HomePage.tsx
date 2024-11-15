"use client";

import { useEffect } from "react";
import { Color } from "three/src/math/Color";
import { Util } from "@/libs/util";
import { Param } from "@/core/param";
import { HSL } from "@/libs/hsl";
import { Contents } from "@/parts/contents";
import "./style.css";
import "./globals.css";

export default function HomePage() {
  useEffect(() => {
    // Ensure that window and document are defined before accessing them
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      console.log("隠し要素はどこかな？？");

      // Three.jsの初期化処理
      for (let i = 0; i < 50; i++) {
        const hsl = new HSL();
        hsl.h = Util.instance.random(0, 1);
        hsl.s = 1;
        hsl.l = 0.5;

        let col = new Color();
        col = col.setHSL(hsl.h, hsl.s, hsl.l);
        Param.instance.colors.push(col);
      }

      // Contentsの初期化
      const mainWrapper = document.querySelector(".l-main-wrapper");
      if (mainWrapper) {
        new Contents({
          el: mainWrapper,
        });
      }
    }
  }, []);

  return (
    <div className="text-center">
      <h1 className="lg:hidden font-dot text-5xl mb-4 lg:mb-0">
        Welcome to My Website
      </h1>
      <p className="lg:hidden">This is the home page.</p>
      <span className="hidden lg:inline-block lg:text-2xl animate-bounce">
        Select here or Press Ctrl+A ↓
      </span>
      <div className="l-main-wrapper invisible lg:visible">
        <div className="inner invisible lg:visible"></div>
      </div>
    </div>
  );
}
