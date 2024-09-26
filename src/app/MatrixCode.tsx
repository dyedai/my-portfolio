// "use client";

// import React, { useEffect } from "react";
// import { useUnicode } from "./UnicodeContext";

// const MatrixCode: React.FC = () => {
//   const { UnicodeValue } = useUnicode();

//   useEffect(() => {
//     const canvas = document.getElementById("q") as HTMLCanvasElement;
//     const context = canvas.getContext("2d");
//     const s = window.screen;
//     const w = (canvas.width = s.width);
//     const h = (canvas.height = s.height);
//     const p: number[] = Array(256).fill(1);

//     const matrixEffect = () => {
//       if (context) {
//         context.fillStyle = "rgba(0, 0, 0, 0.05)";
//         context.fillRect(0, 0, w, h);
//         context.fillStyle = "#0F0";
//         p.map((v, i) => {
//           context.fillText(String.fromCharCode(UnicodeValue + Math.random() * 50), i * 10, v);
//           p[i] = v > 758 + Math.random() * 1e4 ? 0 : v + 10;
//         });
//       }
//     };

//     const interval = setInterval(matrixEffect, 33);
//     return () => clearInterval(interval);
//   }, [UnicodeValue]);

//   return (
//     <div className="fixed inset-0 w-full h-full overflow-hidden">
//       <canvas id="q" className="absolute inset-0"></canvas>
//     </div>
//   );
// };

// export default MatrixCode;

"use client";

import React, { useEffect } from "react";
import { useUnicode } from "./UnicodeContext";

const MatrixCode: React.FC = () => {
  const { UnicodeValue, matrixColor } = useUnicode();

  useEffect(() => {
    const canvas = document.getElementById("q") as HTMLCanvasElement;
    const context = canvas.getContext("2d");
    const s = window.screen;
    const w = (canvas.width = s.width);
    const h = (canvas.height = s.height);
    const p: number[] = Array(256).fill(1);

    const matrixEffect = () => {
      if (context) {
        context.fillStyle = "rgba(0, 0, 0, 0.05)";
        context.fillRect(0, 0, w, h);
        context.fillStyle = matrixColor; // Use matrixColor from context
        p.map((v, i) => {
          context.fillText(String.fromCharCode(UnicodeValue + Math.random() * 50), i * 10, v);
          p[i] = v > 758 + Math.random() * 1e4 ? 0 : v + 10;
        });
      }
    };

    const interval = setInterval(matrixEffect, 33);
    return () => clearInterval(interval);
  }, [UnicodeValue, matrixColor]);
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <canvas id="q" className="absolute inset-0"></canvas>
    </div>
  );
};

export default MatrixCode;
