import headerButton from "./header-button.json" assert { type: "json" };

const resources = {
  english: {
    translation: {
      description: {
        headerButton: headerButton.en,
      },
    },
  },
  ukrainian: {
    translation: {
      description: {
        headerButton: headerButton.uk,
      },
    },
  },
};

export default resources;
