export const Colors = {
  Brand: {
    Purple: "#8C30F5",
    Purple800: "#D6B1FF",
    Purple100: "#F1E4FF",
    Turquoise: "#2EC5CE",
    Turquoise800: "#75E3EA",
    Turquoise100: "#D5FAFC",
    Orange: "#FE9A22",
    Orange800: "#FFC278",
    Orange100: "#FFE3C1",
    Pink: "#F22BB2  ",
    Pink800: "#FF72D2",
    Pink100: "#FFB1E6",
  },
  Text: {
    Gray900: "#18191F",
    Gray800: "#474A57",
    Gray700: "#969BAB",
    Gray300: "#D9DBE1",
    Gray200: "#EEEFF4",
    Gray100: "#F4F5F7",
  },

  Default: {
    White: "#FFFFFF",
    Black: "#0B0D17",
  },
  Accent: {
    PastelGreen: "#C1E5C0",
    PastelBlue: "#C0DAE5",
    Peach: "#F39F9F",
    LightPeach: "#FDD9D9",
    CottonCandy: "#FFC3D8",
    Cyan: "#A0DCFF",
  },
  Gradient: {
    White: ["#FFFFFFFF", "#FFFFFF00"],
    SubtleBlue: ["#D9E8EFFF", "#EAF2F5FF"],
  },
};

export const TextStyles = {
  Heading: {
    H1: {
      FontSize: "7.5rem",
      LineHeight: "9.8rem",
      LetterSpacing: "0",
      FontWeight: "800",
    },
    H2: {
      FontSize: "4.8rem",
      LineHeight: "6.4rem",
      LetterSpacing: "0",
      FontWeight: "800",
    },
    H3: {
      FontSize: "4rem",
      LineHeight: "5.4rem",
      LetterSpacing: "0",
      FontWeight: "800",
    },
    H4: {
      FontSize: "2.8rem",
      LineHeight: "4rem",
      LetterSpacing: "0",
      FontWeight: "800",
    },
    H5: {
      FontSize: "2.4rem",
      LineHeight: "3.2rem",
      LetterSpacing: "0",
      FontWeight: "600",
    },
    H6: {
      FontSize: "2rem",
      LineHeight: "3rem",
      LetterSpacing: "0",
      FontWeight: "500",
    },
  },
  Subtitle: {
    Subtitle1: {
      FontSize: "1.8rem",
      LineHeight: "2.8rem",
      LetterSpacing: "0",
      FontWeight: "700",
    },
    Subtitle2: {
      FontSize: "1.8rem",
      LineHeight: "2.8rem",
      LetterSpacing: "0",
      FontWeight: "500",
    },
  },
  Lead: {
    Lead: {
      FontSize: "1.8rem",
      LineHeight: "3.2rem",
      LetterSpacing: "0",
      FontWeight: "400",
    },
    LeadSm: {
      FontSize: "1.4rem",
      LineHeight: "2.4rem",
      LetterSpacing: "0",
      FontWeight: "500",
    },
  },
  Body: {
    Body: {
      FontSize: "1.6rem",
      LineHeight: "2.6rem",
      LetterSpacing: "0",
      FontWeight: "400",
    },
    BodySm: {
      FontSize: "1.4rem",
      LineHeight: "2.2rem",
      LetterSpacing: "0",
      FontWeight: "400",
    },
  },
  Label: {
    Large: {
      FontSize: "2rem",
      LineHeight: "3rem",
      LetterSpacing: "0",
      FontWeight: "600",
    },
    Medium: {
      FontSize: "1.4rem",
      LineHeight: "2rem",
      LetterSpacing: "0",
      FontWeight: "600",
    },
    Small: {
      FontSize: "1.2rem",
      LineHeight: "1.6rem",
      LetterSpacing: "0",
      FontWeight: "600",
    },
  },
  Others: {
    Capatalized: {
      FontSize: "1.4rem",
      LineHeight: "1.8rem",
      LetterSpacing: "0.2rem",
      FontWeight: "800",
    },
    BadgeLabel: {
      FontSize: "2rem",
      LineHeight: "2.4rem",
      LetterSpacing: "0",
      FontWeight: "400",
    },
  },
  Bundler: function (attr) {
    return `
      font-size: ${attr.FontSize};
      line-height: ${attr.LineHeight};
      letter-spacing: ${attr.LetterSpacing};
      font-weight: ${attr.FontWeight};
    `;
  },
};

export const Shadows = {
  NavBar: "0px 1px 0px #E5E9F2",
  MobileMockup: "10px 15px 30px rgba(41,41,42,0.5)",
  Grey: "0px 30px 40px rgba(212, 217, 232, 0.2)",
  Dark: "0px 10px 20px rgba(41, 41, 42, 0.07)",
  Dark2: "-2px 4px 45px rgba(0, 0, 0, 0.13)",
  HeaderImage: "48px 24px 48px rgba(24, 37, 56, 0.12)",
  WebPreview: "50px 0px 70px rgba(0, 0, 0, 0.1)",
};
