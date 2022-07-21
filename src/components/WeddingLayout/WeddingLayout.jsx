import {
  CornerBorder,
  WeddingLayout as WeddingLayoutContainer,
} from "./WeddingLayout.styles";

function WeddingLayout({ children, closed }) {
  return (
    <WeddingLayoutContainer closed={closed}>
      <CornerBorder top left />
      <CornerBorder top right rotate="90deg" />
      {children}
      <CornerBorder bottom left rotate="-90deg" />
      <CornerBorder bottom right rotate="180deg" />
    </WeddingLayoutContainer>
  );
}

export default WeddingLayout;
