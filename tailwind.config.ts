import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        "primary-blue": "#112749", //Primary #171717
        "second-blue": "#091E3F", //Secondary #c7c7c7
        "third-blue": "#71A9CC", //Accent #404040
        gray1: "#D9D9D9",
        gray2: "#FFFAFA",
        gray3: "#808080",
        gray4: "#868686",
        black1: "#474747", //Neutral #333333
        "white-blue": "#C1E4FA", //Info #2e72d2
        "white-green": "#86C67D", //Success #008060
        "white-gray": "#F6F6F6",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
    },
  },
};
