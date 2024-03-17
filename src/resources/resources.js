import header from "./header.json" assert { type: "json" };

const resources = {
  english: {
    translation: {
      description: {
        logo: header.logo.en,
        mailUs: header.mailUs.en,
        callUs: header.callUs.en,
        appointment: header.appointment.en,
        navigation: {
          about: header.navigation.about.en,
          services: header.navigation.services.en,
          appointment: header.navigation.appointment.en,
          blog: header.navigation.blog.en,
          contact: header.navigation.contact.en
        }
      },
    },
  },
  ukrainian: {
    translation: {
      description: {
        logo: header.logo.uk,
        mailUs: header.mailUs.uk,
        callUs: header.callUs.uk,
        appointment: header.appointment.uk,
        navigation: {
          about: header.navigation.about.uk,
          services: header.navigation.services.uk,
          appointment: header.navigation.appointment.uk,
          blog: header.navigation.blog.uk,
          contact: header.navigation.contact.uk
        }
      },
    },
  },
};

export default resources;
