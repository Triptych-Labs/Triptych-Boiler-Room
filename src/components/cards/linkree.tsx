import { StyledCard } from "./card";
import Card from "../../vendor/linkees/src/components/Card";

// @ts-ignore
export const Linktree = ({ i, title, subtitle, link, cover }) => {
  return (
    <>
      <StyledCard>
        <Card
          i={i}
          title={title}
          subtitle={subtitle}
          link={link}
          cover={cover}
        />
      </StyledCard>
    </>
  );
};
