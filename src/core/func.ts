"use client";
import { ScreenType } from "./screenType";
import { Conf } from "./conf";
import { Util } from "@/libs/util";

// export class Func {
//   private static _instance: Func;
//   private _useFullScreen: boolean;

//   constructor() {
//     this._useFullScreen = Util.instance.isSp() || Util.instance.isIPad();
//   }

//   public static get instance(): Func {
//     if (!this._instance) {
//       this._instance = new Func();
//     }
//     return this._instance;
//   }

//   public ratio(): number {
//     return window.devicePixelRatio || 1;
//   }

//   public px(num: number): string {
//     return `${num}px`;
//   }

//   public useScreen(): boolean {
//     return typeof screen !== "undefined";
//   }

//   public sw(): number {
//     return window.innerWidth || 0;
//   }

//   public sh(): number {
//     return this._useFullScreen && typeof screen !== "undefined"
//       ? screen.height
//       : window.innerHeight || 0;
//   }

//   public screenOffsetY(): number {
//     return (window.innerHeight - this.sh()) * 0.5;
//   }

//   public screen(): ScreenType {
//     if (this.sw() <= Conf.instance.BREAKPOINT) {
//       return ScreenType.XS;
//     } else {
//       return ScreenType.LG;
//     }
//   }

//   public isXS(): boolean {
//     return this.screen() === ScreenType.XS;
//   }

//   public isLG(): boolean {
//     return this.screen() === ScreenType.LG;
//   }

//   public val(xs: number, lg: number): number {
//     return this.isXS() ? xs : lg;
//   }

//   public r(val: number): number {
//     const base = this.val(
//       Conf.instance.XS_PSD_WIDTH,
//       Conf.instance.LG_PSD_WIDTH
//     );
//     return (val / base) * this.sw();
//   }

//   public sin1(radian: number): number {
//     return Math.sin(radian) + Math.sin(2 * radian);
//   }

//   public sin2(radian: number): number {
//     return (
//       (Math.sin(radian) +
//         Math.sin(2.2 * radian + 5.52) +
//         Math.sin(2.9 * radian + 0.93) +
//         Math.sin(4.6 * radian + 8.94)) /
//       4
//     );
//   }
// }

export class Func {
  private static _instance: Func;
  private _useFullScreen: boolean;

  constructor() {
    this._useFullScreen =
      typeof window !== "undefined" &&
      (Util.instance.isSp() || Util.instance.isIPad());
  }

  public static get instance(): Func {
    if (!this._instance) {
      this._instance = new Func();
    }
    return this._instance;
  }

  public ratio(): number {
    return typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
  }

  public px(num: number): string {
    return `${num}px`;
  }

  public useScreen(): boolean {
    return typeof screen !== "undefined";
  }

  public sw(): number {
    return typeof window !== "undefined" ? window.innerWidth || 0 : 0;
  }

  public sh(): number {
    return this._useFullScreen && typeof screen !== "undefined"
      ? screen.height
      : typeof window !== "undefined"
      ? window.innerHeight || 0
      : 0;
  }

  public screenOffsetY(): number {
    return typeof window !== "undefined"
      ? (window.innerHeight - this.sh()) * 0.5
      : 0;
  }

  public screen(): ScreenType {
    if (this.sw() <= Conf.instance.BREAKPOINT) {
      return ScreenType.XS;
    } else {
      return ScreenType.LG;
    }
  }

  public isXS(): boolean {
    return this.screen() === ScreenType.XS;
  }

  public isLG(): boolean {
    return this.screen() === ScreenType.LG;
  }

  public val(xs: number, lg: number): number {
    return this.isXS() ? xs : lg;
  }

  public r(val: number): number {
    const base = this.val(
      Conf.instance.XS_PSD_WIDTH,
      Conf.instance.LG_PSD_WIDTH
    );
    return typeof window !== "undefined" ? (val / base) * this.sw() : 0;
  }

  public sin1(radian: number): number {
    return Math.sin(radian) + Math.sin(2 * radian);
  }

  public sin2(radian: number): number {
    return (
      (Math.sin(radian) +
        Math.sin(2.2 * radian + 5.52) +
        Math.sin(2.9 * radian + 0.93) +
        Math.sin(4.6 * radian + 8.94)) /
      4
    );
  }
}
