import { Col, Row } from "react-bootstrap";
import Thumbnail from "./Thumbnail";
import type { ThumbnailProps } from "./Thumbnail";
import useBootstrapWidth from "./useBootstrapWidth";
import { motion, AnimatePresence } from "framer-motion";

type SectionProps = {
  title: string;
  items: ThumbnailProps[];
  selectedName: string;
  setSelectedName: React.Dispatch<React.SetStateAction<string>>;
  colSize?: ThumbnailProps["colSize"];
};

export default function ThumbnailSection({
  title,
  items,
  selectedName,
  setSelectedName,
  colSize = {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 6,
    xl: 6,
    xxl: 6,
  },
}: SectionProps) {
  const breakpoint = useBootstrapWidth(colSize);

  const renderedItems: React.ReactNode[] = [];

  const contentQueue: React.ReactNode[] = [];

  for (let index = 0; index < items.length; index++) {
    const item = items[index];

    renderedItems.push(
      <Thumbnail
        {...item}
        colSize={colSize}
        selectedName={selectedName}
        setSelectedName={setSelectedName}
      />
    );
    contentQueue.push(
      <>
        <Col xs={12} key={`divider-${index}`}>
          <AnimatePresence mode="wait">
            {item.content && selectedName === item.id && (
              <motion.div
                className="motion-div-content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {item.content}
              </motion.div>
            )}
          </AnimatePresence>
        </Col>
      </>
    );

    // 区切り挿入条件（指定数ごと、または最後）
    if ((index + 1) % (12 / breakpoint) === 0 || index === items.length - 1) {
      while (contentQueue.length > 0) {
        renderedItems.push(contentQueue.shift());
      }
    }
  }

  return (
    <Row className="g-0 mb-4">
      <Col xs={12} className="title mb-2">
        <h1>{title}</h1>
      </Col>
      {renderedItems.map((item) => (
        <>{item}</>
      ))}
    </Row>
  );
}
