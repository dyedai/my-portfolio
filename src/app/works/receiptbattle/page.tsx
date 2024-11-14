import Image from "next/image";

export default function ReceiptbatllePage() {
  console.log("隠し要素はどこかな？？");

  return (
    <div>
      <div className="flex h-screen w-full flex-col lg:flex-row">
        <div className="lg:w-1/2 h-ful text-white lg:px-8 pt-2">
          <h1 className="font-dot text-3xl lg:text-4xl my-8 text-center">&lt;ReceiptBattle/&gt;</h1>
          <p className="mx-2">
            デザインとフロントを担当しました。イラストはen.さんの &quot;Humation
            &quot;を使わせていただきました。レシートバトルはレシートの金額を読み込み、それをゲーム内通貨として利用するアプリです。今後の展望として、
            現在、家計簿の機能は完成していないため、レシートから文字列を読み取り、その読み取った金額を用いて様々な機能を完成できるようにします。
            また、バトル機能はコンピューターのみとなっていますが、オンラインでプレイヤーとバトルをできるような機能を実装したいと考えています。
            今回はブラウザ上でのみ実行できる環境ですが、IPhoneやアンドロイドなどを対象としたアプリケーション開発も視野に入れ、最終的にはリリースできるように励みます。
          </p>
          <p className="mx-2 mt-2">
            I was in charge of design and front of house. We used “Humation” by en. for the illustration. Receipt Battle is an application that reads the amount of money on receipts and uses it as
            in-game currency. As a future perspective, since the function of a household account book is currently not completed, we will read strings from receipts and use the read amounts to
            complete various functions. Also, the battle function is computer only, but we would like to implement a function that would allow players to battle online. Although this environment can
            only be run on a browser at this time, we are looking into developing applications for IPhone, Android, etc. and will work hard to eventually release them.
          </p>
          <p className="mx-2 mt-4">仕様技術：React, Vite, Prettier, Eslint, Google Vison Api, Firebase, Figma</p>
          <p className="mb-4 mx-2">技育CAMPハッカソンvol.5 努力賞受賞</p>
          <a className="underline  text-blue-600 mx-2" href="https://github.com/syogakusya/ReceiptBattle" target="_blank">
            GitHub
          </a>
        </div>

        <div className="lg:w-1/2 h-full lg:overflow-y-scroll">
          <div className="grid grid-cols-1 gap-4 p-4">
            <Image src="/images/receiptbattle/Login.png" alt="login" className="w-full h-auto" width={2400} height={1600} />
            <Image src="/images/receiptbattle/Top.png" alt="toppage" className="w-full h-auto" width={2400} height={1600} />
            <Image src="/images/receiptbattle/Equipment.png" alt="equipment" className="w-full h-auto" width={2400} height={1600} />
            <Image src="/images/receiptbattle/Battle.png" alt="battle" className="w-full h-auto" width={2400} height={1600} />
            <Image src="/images/receiptbattle/AccoutBook.png" alt="accountbook" className="w-full h-auto" width={2400} height={1600} />
            <Image src="/images/receiptbattle/ReadReceipt.png" alt="read" className="w-full h-auto" width={2400} height={1600} />
            <video src="/images/receiptbattle/gatya.mp4" controls autoPlay loop playsInline className="w-full h-auto" width="2400" height="1600" />
          </div>
        </div>
      </div>
    </div>
  );
}
