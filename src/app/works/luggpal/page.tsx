import Image from "next/image";
import "../../glow.css";

export default function ReceiptbatllePage() {
  console.log("隠し要素はどこかな？？");

  return (
    <div>
      <div className="flex h-screen w-full flex-col lg:flex-row">
        <div className="lg:w-1/2 h-ful text-white lg:px-8 pt-2 rainbow-text">
          <h1 className="font-dot text-3xl lg:text-4xl my-8 text-center">
            &lt;LuggPal/&gt;
          </h1>
          <p className="mx-2">
            LuggPalは、荷物を預けたい人（Traveler）と荷物を預かりたい人（Keeper）をマッチングさせるサービスです。
            荷物を預ける側は、地域や日時をもとに効率的に預かり手を探すことができ、預かる側は、余ったスペースを活用して荷物を預けたい人とマッチングできます。
            このサービスは、特に遠出や旅行の際に大きな荷物やスーツケースを持ち歩く負担を解消することを目的としています。
            旅行中に重い荷物を持って階段を上ったり、狭い道を通るといった不便さを感じる場面があり、もしその荷物を好きな場所に預けることができれば、旅行をより快適に楽しめると考えました。
            一方で、スペースを有効に活用したいというニーズにも応え、家や店舗に余裕がある場合、そのスペースを活用して荷物を預かることで収益を得ることができます。
            このように、旅行者とスペースの提供者双方のニーズを満たすサービスを目指しています。
          </p>
          <p className="mx-2 mt-2">
            LuggPal is a service that matches people who want to leave their
            luggage (Traveler) with people who want to keep their luggage
            (Keeper). Luggages can be stored in a location or on a date and time
            basis, and keepers can match up with people who want to store their
            luggage in their spare space. This service is intended to relieve
            the burden of carrying large luggage and suitcases, especially when
            traveling far away from home or on vacation. There are times during
            a trip when people find it inconvenient to carry heavy luggage up
            stairs or through narrow streets, and we thought that if they could
            leave their luggage at a place of their choice, they would be able
            to enjoy their trip more comfortably. On the other hand, we also
            responded to the need for efficient use of space, and if there is
            enough space in a house or store, we can earn revenue by using that
            space to store luggage. In this way, we aim to provide a service
            that satisfies the needs of both travelers and space providers.
          </p>
          <p className="mx-2 mt-4">
            仕様技術：Next.js, Prettier, Eslint, Firebase, Figma
          </p>
          <p className="mb-4 mx-2">JPhacks出場作品</p>
          <a
            className="underline  text-blue-600 mx-2 text-2xl"
            href="https://github.com/jphacks/tk_2422"
            target="_blank"
          >
            GitHub
          </a>
        </div>

        <div className="lg:w-1/2 h-full lg:overflow-y-scroll">
          <div className="grid grid-cols-1 gap-4 p-4">
            <Image
              src="/images/luggpal/login.png"
              alt="login"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/luggpal/home.png"
              alt="home"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/luggpal/home2.png"
              alt="home2"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/luggpal/keeper.png"
              alt="keeper"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/luggpal/registrar.png"
              alt="registar"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <video
              src="/images/luggpal/demo.mp4"
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
