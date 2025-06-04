import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
  return (
    <Col {...colSize}>
      <div className={className ?? ""}>
        <div className="card">
          <img
            src={src}
            id={id}
            alt={alt ?? id}
            className="card-img-top thumbnail"
          />
        </div>
      </div>
    </Col>
  );
};

export default Thumbnail;
