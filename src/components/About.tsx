import { motion } from "framer-motion";
import { History } from "./history";
import { SectionTitle, Button } from "./CommonComponents";

function About({
  setModalContent,
}: {
  setModalContent: (content: React.ReactNode) => void;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const programmingLanguages = [
    "Python",
    "C",
    "C#",
    "Java",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "MySQL",
  ];

  const frameworksAndLibraries = [
    "React",
    "Three.js",
    "Bootstrap",
    "Tailwind CSS",
    "Framer Motion",
    "Flask",
    "Spring",
    "Servlet/JSP",
    "Scratch（MOD作成）",
  ];

  const others = [
    "Git / GitHub",
    "VSCode / Eclipse",
    "Unity",
    "Blender ",
    "Arduino",
    "Raspberry Pi",
    "LaTeX",
    "オシロスコープ",
    "AUTOSAR",
  ];

  return (
    <>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-5 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="col-span-2 p-3" variants={itemVariants}>
          <SectionTitle title="About me" />
          <div className="text-lg pt-4">
            　小学生時代にScratchに熱中し、その作品をもとに開発したアプリで中学時代に未踏ジュニアに採択。PMの勧めで東京都立産業技術高専に進学。2025年、ものづくり工学科電子情報工学コースを卒業。
            <br />
            　プログラミング以外の趣味は、Blenderを使った3Dモデリング、近代建築巡り。
          </div>
          <div className="flex justify-center mt-4">
            <Button
              text="History"
              onClick={() => setModalContent(<History />)}
            />
          </div>
        </motion.div>
        <motion.div className="col-span-3 p-3" variants={itemVariants}>
          {/* <h1 className="font-asimovian text-center text-2xl px-4 mx-auto w-fit border-b-4 border-mint">
            触れた技術
          </h1> */}
          <SectionTitle title="触れた技術" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg pt-4"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <span className="font-semibold  pl-2">プログラミング言語</span>

              <motion.ul
                className="list-none mt-2 border-l-4 border-mint pl-2 space-y-1 ml-3"
                variants={listVariants}
              >
                {programmingLanguages.map((lang) => (
                  <motion.li variants={listItemVariants} key={lang}>
                    ✦ {lang}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <span className="font-semibold  pl-2">
                フレームワーク・ライブラリ
              </span>

              <motion.ul
                className="list-none mt-2 border-l-4 border-mint pl-2 space-y-1 ml-3"
                variants={listVariants}
              >
                {frameworksAndLibraries.map((lib) => (
                  <motion.li variants={listItemVariants} key={lib}>
                    ✦ {lib}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <span className="font-semibold  pl-2">その他</span>
              <motion.ul
                className="list-none mt-2 border-l-4 border-mint pl-2 space-y-1 ml-3"
                variants={listVariants}
              >
                {others.map((other) => (
                  <motion.li variants={listItemVariants} key={other}>
                    ✦ {other}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
export default About;
