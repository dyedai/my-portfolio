import Image from "next/image";
import "../../../glow.css";

export default function ctrlgPage() {
  console.log("隠し要素はどこかな？？");

  return (
    <div>
      <div className="flex h-screen w-full flex-col lg:flex-row">
        <div className="lg:w-1/2 h-ful text-white lg:px-8 pt-2 rainbow-text">
          <h1 className="font-dot text-3xl lg:text-4xl my-8 text-center">
            &lt;Ctrl+G/&gt;
          </h1>
          <p className="mx-2">
            「Ctrl+G」は、宇宙空間に浮かぶ謎めいたステージを探索し、各エリアのゲートを目指して進む3Dアクションパズルゲームです。
            プレイヤーは、自分自身に作用する重力を自由に切り替えられる特殊能力を持っています。3つの重力モードを駆使し、未知のギミックや障害を突破していきましょう。
            ＜ゲームの特徴＞ 3つの重力ステートを切り替える新感覚アクション
            ナチュラルステート:
            標準的な状態で、走ることができ、移動とジャンプのバランスが取れています。
            ヘビーステート:
            自分の重力が強くなる状態。ジャンプ力は低下しますが、落下速度が向上します。
            ライトステート:
            自分の重力が弱くなり、ジャンプ力が飛躍的に向上。遠く離れた足場や高所への到達に適しています。
            重力切り替えに制限はなく、プレイヤーが好きなタイミングでモードを変更可能。
            ステージ攻略には、適切なタイミングでの重力モードの使い分けが鍵となります。
            ＜操作方法＞ 移動：WASD, SHIFT, SPACE ステート変更：1, 2, 3
            インタラクト：E, LMB, RMB 詳しくはゲーム内マニュアルへ
          </p>
          <p className="mx-2 mt-2">
            &quot;Ctrl+G&quot; is a 3D action-puzzle game in which players
            explore mysterious stages floating in space, aiming for the gate of
            each area. Players have the special ability to switch the gravity
            acting on themselves at will, making full use of the three gravity
            modes to break through unknown gimmicks and obstacles. &lt;Game
            Features&gt; New action with three gravity states to switch between
            Natural State: Standard state, allows you to run, balancing movement
            and jumping. Heavy State: A state in which your gravity becomes
            stronger. Your jumping ability is reduced, but your falling speed is
            increased. Light State: Your gravity becomes weaker and your jumping
            ability increases dramatically. Suitable for reaching distant
            footholds and heights. There are no restrictions on gravity
            switching, and players can change modes at any time they like. The
            key to conquering a stage is to use the gravity mode at the
            appropriate time. &lt;How to operate&gt; Movement: WASD, SHIFT,
            SPACE State change: 1, 2, 3 Interact: E, LMB, RMB For details,
            please refer to the in-game manual.
          </p>
          <p className="mx-2 my-4">仕様技術：Unity, C#</p>
          <a
            className="underline  text-blue-600 mx-2 text-2xl"
            href="https://github.com/dyedai/Ctrl-G"
            target="_blank"
          >
            GitHub
          </a>

          <br></br>

          <a
            className="underline  text-blue-600 mx-2 text-2xl"
            href="https://play.unity.com/en/games/e7913ec9-3018-4d65-a75a-c7e9f0880e3f/ctrlg"
            target="_blank"
          >
            UnityPlay(play on website)
          </a>

          <br></br>

          <a
            className="underline  text-blue-600 mx-2 text-2xl"
            href="https://dyedai.itch.io/ctrlg"
            target="_blank"
          >
            Download
          </a>
        </div>

        <div className="lg:w-1/2 h-full lg:overflow-y-scroll">
          <div className="grid grid-cols-1 gap-4 p-4">
            <Image
              src="/images/ctrlg/Game1.png"
              alt="game1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/ctrlg/game2.png"
              alt="game2"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/ctrlg/game3.png"
              alt="game3"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/ctrlg/game4.png"
              alt="game4"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/ctrlg/game5.png"
              alt="game5"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/ctrlg/stage1.png"
              alt="stage1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/ctrlg/stage2.png"
              alt="stage2"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/ctrlg/stage3.png"
              alt="stage3"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/ctrlg/stage4.png"
              alt="stage4"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <video
              src="/images/ctrlg/video.mp4"
              controls
              autoPlay
              loop
              playsInline
              className="w-full h-auto"
              width="2400"
              height="1600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
