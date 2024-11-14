import Image from "next/image";

export default function ReceiptbatllePage() {
  console.log("隠し要素はどこかな？？");

  return (
    <div>
      <div className="flex h-screen w-full flex-col lg:flex-row">
        <div className="lg:w-1/2 h-ful text-white lg:px-8 pt-2">
          <h1 className="font-dot text-3xl lg:text-4xl my-8 text-center">&lt;Shiritori-Sugoroku/&gt;</h1>
          <p className="mx-2">
            ShiritoriSugorokuは、オンラインですごろくを楽しむアプリケーションで、ユーザー同士がしりとりをしながら進行するゲームです。このアプリの目的は、ユーザー間の双方向通信を活用し、インターネット上で友達や他のプレイヤーとすごろくを行えるシステムを実装することです。
            まず、ユーザーはアプリ内でユーザー登録とログインを行います。ユーザー名とパスワードを設定し、登録情報はデータベースサーバに保存されます。既に使用されているユーザー名は登録できませんが、文字数に制限はありません。パスワードは最低4文字必要で、空白や不正な文字が含まれている場合は再入力を求められます。
            マッチングの仕組みは、ユーザーがマップのマス目を選択し、同じマスを選んだ他のユーザーと自動的にマッチングされます。ゲームは4人でプレイされ、4人が集まるとすぐに開始されます。また、ゲーム中にプレイヤーが途中で切断された場合は、残りのプレイヤーで続行し、1人しか残っていない場合はゲーム自体が終了します。
            ゲームの進行は、基本的にすごろくのルールにしりとりを組み合わせたものです。ゲームは「り」から始まり、順番はランダムに決まります。各プレイヤーはサイコロを振り、その出目の数に対応した文字数でしりとりを行います。例えば、サイコロで3が出た場合、プレイヤーは3文字の言葉を回答します。回答はひらがなで行い、制限時間は30秒です。正しく回答できなかった場合、そのプレイヤーは進めず、次のプレイヤーに順番が回ります。回答の正確さは辞書APIを利用して判定され、不正な回答には制限時間内の無回答や、指定された文字数に合わない回答、辞書に存在しない言葉、「ん」で終わる言葉などがあります。
            全てのプレイヤーがある文字に対して回答できなかった場合、先頭の文字が新たなランダムな五十音に変更され、次のターンが開始されます。ゲームは、参加プレイヤーのうち3人がゴールした時点で終了し、順位が確定します。
            このアプリケーションは、しりとりとすごろくの要素を組み合わせた新しいゲーム体験を提供し、オンライン上で気軽に友達や他のユーザーと楽しむことができます。
          </p>
          <p className="mx-2">
            ShiritoriSugoroku is an online backgammon application, a game in which users play backgammon with each other. The purpose of this application is to implement a system that allows users to
            play Sugoroku with friends and other players over the Internet, utilizing two-way communication between users. First, the user registers and logs in to the application. A user name and
            password are set, and the registration information is stored on a database server. A user name that is already in use cannot be registered, but there is no limit to the number of
            characters that can be used. Passwords must be at least 4 characters long, and if it contains spaces or invalid characters, the user will be asked to re-enter the password. The matching
            mechanism is that users select squares on the map and are automatically matched with other users who have selected the same squares. Games are played by four players and begin as soon as
            four players have gathered. If a player is disconnected midway through the game, the game continues with the remaining players; if only one player remains, the game itself ends. The game
            progression is basically a combination of Sugoroku rules and Shiritori. The game begins with “ri” and the order is determined randomly. Each player rolls the dice and plays Shiritori with
            the number of letters corresponding to the number of rolls. For example, if the dice rolls a 3, the player answers with a 3-letter word. The answer must be in hiragana, and the time limit
            is 30 seconds. If a player fails to answer correctly, he/she does not advance and the next player takes his/her turn. The accuracy of answers is judged using the dictionary API. Incorrect
            answers include no answers within the time limit, answers that do not match the specified number of characters, words that do not exist in the dictionary, and words ending with “n”. If all
            players fail to answer a letter, the first letter is changed to a new random syllable and the next turn begins. The game ends when three of the participating players reach the goal, and
            the ranking is determined. This application provides a new gaming experience combining elements of Shiritori and backgammon, and can be easily enjoyed online with friends and other users.
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
