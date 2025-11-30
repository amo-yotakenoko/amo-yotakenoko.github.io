import { useState } from "react";
import SectionTitle from "./CommonComponents";

function About() {
  return (
    <>
      <SectionTitle title="About" />

      {/* <div className="mx-auto w-fit border-b-4 border-mint">
        <h1 className="font-geostar text-center text-4xl px-4">Abount</h1>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-5 ">
        <div className="col-span-2 p-3">
          <h1 className="font-asimovian text-center text-2xl px-4 mx-auto w-fit border-b-4 border-mint">
            About me
          </h1>
          <div className="text-lg">
            　小学生時代にScratchに熱中し、その作品をもとに開発したアプリで中学時代に未踏ジュニアに採択。PMの勧めで東京都立産業技術高専に進学。2025年、ものづくり工学科電子情報工学コースを卒業。
            <br />
            　プログラミング以外の趣味は、Blenderを使った3Dモデリング、近代建築巡り。
          </div>
        </div>
        <div className="col-span-3 p-3">
          <h1 className="font-asimovian text-center text-2xl px-4 mx-auto w-fit border-b-4 border-mint">
            触れた技術
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
            <div>
              <span className="font-semibold  pl-2">プログラミング言語</span>

              <ul className="list-none mt-2 border-l-4 border-mint pl-2 space-y-1 ml-3  ">
                <li>✦ Python</li>
                <li>✦ C</li>
                <li>✦ C#</li>
                <li>✦ Java</li>
                <li>✦ JavaScript</li>
                <li>✦ TypeScript</li>
                <li>✦ HTML</li>
                <li>✦ CSS</li>
                <li>✦ MySQL</li>
              </ul>
            </div>

            <div>
              <span className="font-semibold  pl-2">
                フレームワーク・ライブラリ
              </span>

              <ul className="list-none mt-2 border-l-4 border-mint pl-2 space-y-1 ml-3  ">
                <li>✦React</li>
                <li>✦Three.js</li>
                <li>✦Bootstrap</li>
                <li>✦Tailwind CSS</li>
                <li>✦Framer Motion</li>
                <li>✦Flask</li>
                <li>✦Spring</li>
                <li>✦Servlet/JSP</li>
                <li>✦Scratch（MOD作成）</li>
              </ul>
            </div>

            <div>
              <span className="font-semibold  pl-2">その他</span>
              <ul className="list-none mt-2 border-l-4 border-mint pl-2 space-y-1 ml-3  ">
                <li>✦Git / GitHub</li>
                <li>✦VSCode / Eclipse</li>
                {/* <li>✦秀丸 / サクラエディタ</li> */}
                <li>✦Unity</li>
                <li>✦Blender </li>
                <li>✦Arduino</li>
                <li>✦Raspberry Pi</li>
                <li>✦LaTeX</li>
                <li>✦オシロスコープ</li>
                <li>✦AUTOSAR</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
