import Image from "next/image";

export default function ReceiptbatllePage() {
  console.log("隠し要素はどこかな？？");

  return (
    <div>
      <div className="flex h-screen w-full flex-col lg:flex-row">
        <div className="lg:w-1/2 h-ful text-white lg:px-8 pt-2">
          <h1 className="font-dot text-3xl lg:text-4xl my-8 text-center">&lt;PictLog/&gt;</h1>
          <p className="mx-2">
            PictLogは、ユーザーが書いた日記からAIが自動的に絵を生成し、その絵日記を友達と共有できる新しい形のSNSです。
            これにより、従来の日記とは異なり、文章だけでなく視覚的にその時の出来事を思い出すことができ、より鮮明に当時の感情や体験を振り返ることができます。
            PictLogは、単なる日記帳としての役割だけでなく、友達と一緒に思い出を共有し、共感し合う場を提供します。
            ユーザーは自分の過去の絵日記を簡単に振り返ることができ、また友達が作成した絵日記も閲覧できるため、今まで知らなかった友達の一面を知ることができるかもしれません。
            このように、PictLogは日々の出来事を新たな形で記録し、思い出をより鮮明に、そして楽しく残すことを目的としたSNSです。
          </p>
          <p className="mx-2 mt-2">
            PictLog is a new type of social networking service that allows users to share their diaries with friends by automatically generating pictures from the diary entries. Unlike conventional
            diaries, PictLog is not only a diary, but also a place where users can share their memories with friends and share their experiences. Users can easily look back on their own past picture
            diaries, and since they can also view picture diaries created by their friends, they may learn about a side of their friends that they had never known before. In this way, PictLog is a
            social networking service that aims to record daily events in a new way and preserve memories in a more vivid and enjoyable way.
          </p>
          <p className="mx-2 mt-4">仕様技術：Next.js, Prettier, Eslint, Nest.js, prisma, supabase, GraphQL, Figma</p>
          <p className="mb-4 mx-2">技育展出場作品</p>
          <a className="underline  text-blue-600 mx-2" href="https://github.com/NobuhiroYokota/PictLog" target="_blank">
            GitHub
          </a>
        </div>

        <div className="lg:w-1/2 h-full lg:overflow-y-scroll">
          <div className="grid grid-cols-1 gap-4 p-4">
            <Image src="/images/pictlog/home.png" alt="home" className="w-full h-auto" width={2400} height={1600} />
            <Image src="/images/pictlog/my.png" alt="mypage" className="w-full h-auto" width={2400} height={1600} />
            <Image src="/images/pictlog/friend.png" alt="friend" className="w-full h-auto" width={2400} height={1600} />
            <Image src="/images/pictlog/post.png" alt="post" className="w-full h-auto" width={2400} height={1600} />
            <Image src="/images/pictlog/calender.png" alt="calender" className="w-full h-auto" width={2400} height={1600} />
            <Image src="/images/pictlog/drive.png" alt="drive" className="w-full h-auto" width={2400} height={1600} />
            <Image src="/images/pictlog/onsen.png" alt="onsen" className="w-full h-auto" width={2400} height={1600} />
            <Image src="/images/pictlog/shopping.png" alt="shop" className="w-full h-auto" width={2400} height={1600} />
            <video src="/images/pictlog/demo.mp4" controls autoPlay loop playsInline className="w-full h-auto" width="2400" height="1600" />
          </div>
        </div>
      </div>
    </div>
  );
}
