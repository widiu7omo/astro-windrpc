import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#44BBA4",
          50: "#CBECE6",
          100: "#BCE7DE",
          200: "#9EDCD0",
          300: "#80D1C1",
          400: "#62C6B3",
          500: "#44BBA4",
          600: "#359280",
          700: "#26695C",
          800: "#174038",
          900: "#081614",
        },
        secondary: {
          DEFAULT: "#E7BB41",
          50: "#FCF5E4",
          100: "#F9EFD2",
          200: "#F5E2AE",
          300: "#F0D589",
          400: "#ECC865",
          500: "#E7BB41",
          600: "#D5A41B",
          700: "#A37D15",
          800: "#71570E",
          900: "#403108",
        },
      },
    },
  },
});
