import Image from "next/image";

export default function ReceiptbatllePage() {
  console.log("隠し要素はどこかな？？");

  return (
    <div>
      <div className="flex h-screen w-full flex-col lg:flex-row">
        <div className="lg:w-1/2 h-ful text-white lg:px-8 pt-2">
          <h1 className="font-dot text-3xl lg:text-4xl my-8 text-center">&lt;Shiritori-Sugoroku/&gt;</h1>
          <p className="mx-2">
            Shiritori-Sugorokuは、しりとりとすごろくを融合させたオンラインゲームです。プレイヤーはインターネットを通じて友達や他のユーザーと一緒に、楽しく競い合いながらゲームを進めます。
            ゲームは「り」から始まり、サイコロを振って出た目の数に応じた文字数でしりとりを行います。例えば、サイコロで「3」が出た場合、3文字のひらがな言葉を答えます。しりとりの回答には30秒の制限時間があり、辞書APIを使って正しい言葉かどうかを判定します。
            「ん」で終わる言葉や不正な回答をするとそのターンは進めず、次のプレイヤーに順番が回ります。
            プレイヤー同士は自動的にマッチングされ、4人でゲームが進行します。途中でプレイヤーが切断された場合でも、他のプレイヤーでゲームを続行でき、全員が回答できなかった場合には、新しい五十音からスタートします。
            3人のプレイヤーがゴールに到達するとゲーム終了となり、順位が確定します。
            ShiritoriSugorokuは、しりとりのスリルとすごろくの戦略性を掛け合わせた、新しい体験を提供します。気軽に友達や他のユーザーと一緒に楽しめる、手軽で楽しいゲームです。
          </p>
          <p className="mx-2 mt-2">
            Shiritori-Sugoroku is an online game that combines Shiritori and Sugoroku. Players compete with friends and other users via the Internet in a fun and competitive game. The game starts with
            “ri” and players play Shiritori with the number of letters corresponding to the number of dice rolls. For example, if the dice rolls a “3”, the player answers with a 3-letter hiragana
            word. There is a 30-second time limit for answering Shiritori, and the dictionary API is used to determine if the word is correct or not. If a word ends with “n” or an incorrect answer is
            given, the turn will not proceed and the next player will take his/her turn. Players are automatically matched with each other, and the game proceeds with four players. If a player is
            disconnected in the middle of the game, the game can be continued by another player. If all players fail to answer, the game starts with a new syllable. The game ends when all three
            players reach the goal, and the ranking is determined. ShiritoriSugoroku offers a new experience that combines the thrill of Shiritori with the strategy of Sugoroku. It is an easy and fun
            game that can be enjoyed with friends and other users.
          </p>
          <p className="mx-2 mt-4">仕様技術：Next.js, Prettier, Eslint, java, Figma</p>
          <a className="underline  text-blue-600 mx-2" href="https://github.com/dyedai/Shiritori_sugoroku" target="_blank">
            GitHub
          </a>
        </div>

        <div className="lg:w-1/2 h-full lg:overflow-y-scroll">
          <div className="grid grid-cols-1 gap-4 p-4">
            <Image src="/images/shiritorisugoroku/signup.png" alt="signup" className="w-full h-auto" width={2400} height={1600} />
            <Image src="/images/shiritorisugoroku/login.png" alt="login" className="w-full h-auto" width={2400} height={1600} />
            <Image src="/images/shiritorisugoroku/home.png" alt="home" className="w-full h-auto" width={2400} height={1600} />
            <Image src="/images/shiritorisugoroku/explain.png" alt="explain" className="w-full h-auto" width={2400} height={1600} />
            <Image src="/images/shiritorisugoroku/wait.png" alt="wait" className="w-full h-auto" width={2400} height={1600} />
            <Image src="/images/shiritorisugoroku/count.png" alt="count" className="w-full h-auto" width={2400} height={1600} />
            {/* <video src="/images/receiptbattle/gatya.mp4" controls autoPlay loop playsInline className="w-full h-auto" width="2400" height="1600" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
