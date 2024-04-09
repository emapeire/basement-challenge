import Image from "next/image";

import Box from "@/components/commons/Box";
import Text from "@/components/commons/Text";
import Figure from "@/public/assets/figure.png";

const Footer = () => {
  return (
    <Box
      css={{
        marginTop: "10vh",
        width: "95%",
        marginX: "auto",
        textAlign: "right",
      }}
    >
      {/* First line, image & WEAR */}
      <Box
        css={{
          display: "flex",
          gap: 32,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Box
          css={{
            width: "20%",
            transform: "translateZ(0)",
          }}
        >
          <Image
            alt="Three circles anidated"
            draggable={false}
            objectFit="contain"
            src={Figure}
          />
        </Box>
        <Text size="14.5vw">WEAR</Text>
      </Box>
      {/* Second line, EVERYDAY */}
      <Text css={{ marginBottom: 24 }} fill={false} size="14.5vw">
        EVERYDAY
      </Text>
    </Box>
  );
};

export default Footer;
