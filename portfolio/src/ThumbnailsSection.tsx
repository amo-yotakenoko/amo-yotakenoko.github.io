import { Col, Row } from "react-bootstrap";
import Thumbnail from "./Thumbnail";
import type { ThumbnailProps } from "./Thumbnail";
import useBootstrapBreakpoint from "./useBootstrapBreakpoint";

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
  colSize = { xs: 12, md: 6, lg: 4, xl: 3 },
}: SectionProps) {
  const breakpoint = useBootstrapBreakpoint(colSize);
  return (
    <Row className="g-0 mb-4">
      <Col xs={12} className="title mb-2">
        <h1>{title}</h1>
      </Col>
      {items.map((item) => (
        <>
          <Thumbnail
            key={item.id}
            {...item}
            colSize={colSize}
            selectedName={selectedName}
            setSelectedName={setSelectedName}
          />
          {breakpoint}
        </>
      ))}
    </Row>
  );
}
