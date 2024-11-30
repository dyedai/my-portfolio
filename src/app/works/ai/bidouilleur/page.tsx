import Image from "next/image";

export default function ManageclassPage() {
  console.log("隠し要素はどこかな？？");

  return (
    <div>
      <div className="flex h-screen w-full flex-col lg:flex-row">
        <div className="lg:w-1/2 h-ful text-white lg:px-8 pt-2 rainbow-text">
          <h1 className="font-dot text-3xl lg:text-4xl my-8 text-center">
            Bidouilleur
          </h1>
          {/* <p className="mx-2">コレクション説明</p> */}
          <p className="mx-2">Prompt:</p>
          <p className="mx-2 mt-2">
            Background: dark lighting on a simple runway to highlight the green
            programming code. Foreground: Full body shot of a female model
            wearing a dress that appears to be formed by the green letters of
            the programming on her bare skin. Color palette: - Primary: Bright,
            glowing yellow-green Pattern and Structure: - Representation as if
            only the letters of the programming were on the fabric: * Dress so
            long that it drags Technical elements: - Fabric that appears as if
            the programming letters are floating in the air - Fabric that
            appears to show through bare skin - Fabric that looks as if only
            green letters are tattooed on bare skin Silhouette: - Unique dress
            with high collar - Asymmetrical design along the natural V-shape
            Construction details: - Body conscious base with flowing outer
            layers - Asymmetrical design along a natural V-shape: -
            Transformable elements that change with movement Accessories: - Long
            black pointed toe leather boots - Accessories like the image of a
            programmer - Pointed black eyewear
          </p>
          <p className="mx-2 my-4">仕様技術：ImageFX</p>
        </div>

        <div className="lg:w-1/2 h-full lg:overflow-y-scroll">
          <div className="grid grid-cols-1 gap-4 p-4">
            <Image
              src="/images/AI-bidouilleur/bidouilleur-1.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-bidouilleur/bidouilleur-2.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-bidouilleur/bidouilleur-3.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-bidouilleur/bidouilleur-4.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-bidouilleur/bidouilleur-5.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-bidouilleur/bidouilleur-6.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-bidouilleur/bidouilleur-7.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
