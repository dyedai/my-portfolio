import { Util } from "@/libs/util";

export class Conf {
  private static _instance: Conf;

  // パラメータ
  public FLG_PARAM: boolean = location.href.includes("p=yes");

  // Stats
  public FLG_STATS: boolean = location.href.includes("p=yes");

  // パス
  public PATH_IMG: string = "./images/home/";
  // public PATH_IMG: string = "./assets/img/";

  // タッチデバイス
  public USE_TOUCH: boolean = Util.instance.isTouchDevice();

  // ブレイクポイント
  public BREAKPOINT: number = 768;

  // PSDサイズ
  public LG_PSD_WIDTH: number = 1600;
  public XS_PSD_WIDTH: number = 750;

  // 簡易版
  public IS_SIMPLE: boolean = Util.instance.isPc() && Util.instance.isSafari();

  // スマホ
  public IS_PC: boolean = Util.instance.isPc();
  public IS_SP: boolean = Util.instance.isSp();
  public IS_AND: boolean = Util.instance.isAod();
  public IS_TAB: boolean = Util.instance.isIPad();
  public USE_ROLLOVER: boolean =
    Util.instance.isPc() && !Util.instance.isIPad();

  public NUM: number = 7;

  constructor() {}
  public static get instance(): Conf {
    if (!this._instance) {
      this._instance = new Conf();
    }
    return this._instance;
  }
}
