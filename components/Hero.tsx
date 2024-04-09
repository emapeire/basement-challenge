import React from "react";

import Text from "./commons/Text";

import Box from "@/components/commons/Box";
import { styled } from "@/stitches.config";

const StyledHero = styled("div", {
  textAlign: "center",
  marginTop: 24,
});

const Ellipsis: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      css={{
        border: "1px solid white",
        borderRadius: "50%",
        padding: "1.5vw",
        width: "10vw",
        minWidth: 36,
        fontSize: "1.5vw",
        userSelect: "none",
      }}
    >
      {children}
    </Box>
  );
};

const Hero: React.FC = () => {
  return (
    <StyledHero>
      <Text lineHeight="low" size="14.5vw">
        BASEMENT
      </Text>
      <Box
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1vw",
        }}
      >
        <Ellipsis>EST</Ellipsis>
        <Text fill={false} lineHeight="low" size="14.5vw">
          SUPPLY
        </Text>
        <Ellipsis>2K22</Ellipsis>
      </Box>
    </StyledHero>
  );
};

export default Hero;
