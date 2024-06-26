import Image from "next/image";
import * as MarqueeComponent from "react-fast-marquee";

import { styled } from "@/stitches.config";
import Asterisk from "@/public/assets/asterisk.png";
import Asterisk2 from "@/public/assets/asterisk2.png";
import Box from "@/components/commons/Box";

const StyledMarquee = styled(MarqueeComponent.default, {
  borderTop: "1px solid white",
  borderBottom: "1px solid white",
  paddingY: 12,
  fontSize: "3vw",
});

const AsteriskWrapper = styled("div", {
  position: "absolute",
  zIndex: 20,
  width: "10%",
  transform: "translateZ(0px)",
  display: "none",

  "@sm": {
    display: "block",
  },
});

const Marquee: React.FC = () => {
  return (
    <Box
      css={{
        marginTop: 16,
        position: "relative",
      }}
    >
      <AsteriskWrapper
        css={{
          top: 0,
          left: "5%",
        }}
      >
        <Image
          alt="Three-dimensional black asterisk with a white outline"
          draggable={false}
          layout="responsive"
          src={Asterisk}
        />
      </AsteriskWrapper>
      <AsteriskWrapper
        css={{
          bottom: 0,
          right: "5%",
        }}
      >
        <Image
          alt="Three-dimensional black asterisk with a white outline"
          draggable={false}
          layout="responsive"
          src={Asterisk2}
        />
      </AsteriskWrapper>
      <StyledMarquee gradient={false} loop={0} speed={40}>
        A man can&apos;t have enough basement swag — A man can&apos;t have
        enough basement swag — A man can&apos;t have enough basement swag — A
        man can&apos;t have enough basement swag — A man can&apos;t have enough
        basement swag — A man can&apos;t have enough basement swag —
      </StyledMarquee>
    </Box>
  );
};

export default Marquee;
