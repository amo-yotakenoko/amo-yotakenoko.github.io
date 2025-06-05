import React, { Children, useState } from "react";
import { Container, Row, Col, Collapse } from "react-bootstrap";
type ThumbnailProps = {
  id: string;
  src: string;
  alt?: string;
  className?: string;
  colSize?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
};

const Thumbnail: React.FC<ThumbnailProps> = ({
  id,
  src,
  alt,
  className,
  colSize = { xs: 12, md: 12, lg: 6 },
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Col {...colSize}>
        <div className={className ?? ""}>
          <div
            className="card"
            onClick={() => setOpen(!open)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={src}
              id={id}
              alt={alt ?? id}
              className="card-img-top thumbnail"
            />
          </div>
        </div>
      </Col>
      <Collapse in={open}>
        <div className="mt-2">
          <div className="p-2 bg-light">詳細内容をここに記述</div>
        </div>
      </Collapse>
    </>
  );
};

export default Thumbnail;
