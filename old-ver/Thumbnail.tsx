import React, { Children, useState } from "react";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import type { colSize } from "./useBootstrapWidth";
type ThumbnailProps = {
  id: string;
  src: string;
  alt?: string;
  className?: string;
  colSize?: colSize;
  selectedName?: string;
  setSelectedName?: React.Dispatch<React.SetStateAction<string>>;
  content?: React.ReactNode;
};

const Thumbnail: React.FC<ThumbnailProps> = ({
  id,
  src,
  alt,
  className,
  colSize = { xs: 12, md: 12, lg: 6 },
  selectedName,
  setSelectedName,
}) => {
  return (
    <>
      <Col {...colSize}>
        <div className={className ?? ""}>
          <div className={"card "} style={{ cursor: "pointer" }}>
            <img
              src={src}
              id={id}
              alt={alt ?? id}
              className={
                "card-img-top thumbnail " +
                (selectedName === id ? "selected-thumbnail" : "")
              }
              onClick={() => setSelectedName?.(selectedName === id ? "" : id)}
              loading="lazy"
            />
          </div>
        </div>
      </Col>
    </>
  );
};
export default Thumbnail;
export type { ThumbnailProps };
