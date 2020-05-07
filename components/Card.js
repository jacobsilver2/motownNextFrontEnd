import React from "react";
import { CardWrapper } from "./styles/cardStyles";

const Card = ({ title, footer, subTitle, children, isTitle }) => {
  return (
    <CardWrapper isTitle={isTitle}>
      <div className="title">{title}</div>
      {subTitle && <div className="subtitle">{subTitle}</div>}
      <div className="content">{children}</div>
      {footer && <div className="footer">{footer}</div>}
    </CardWrapper>
  );
};

export default Card;
