export const navigationIds = ["about", "services", "skills", "work", "testimonials", "contact"] as const;

export const serviceKeys = [
  "logo",
  "cards",
  "flyers",
  "covers",
  "uiux",
  "package",
  "bookcover",
  "motion"
] as const;

export type ServiceKey = (typeof serviceKeys)[number];

export const socialLinks = [
  {label: "Instagram", href: "https://www.instagram.com/el_verbuena_k2/"},
  {label: "LinkedIn", href: "https://www.linkedin.com/in/mugabo-robert-7647a428b/"},
  {label: "Facebook", href: "https://www.facebook.com/roberto.cresswell.33"},
  {label: "X", href: "https://x.com/el_verbuena"}
] as const;

export const services = [
  {
    key: "logo",
    href: "/work/logo",
    image: "/assets/img/EV.jpg",
    heroImage: "/assets/img/logodesign10.png",
    samples: ["/assets/img/GakeGake.jpg", "/assets/img/Arcane.jpg", "/assets/img/CyberNex logo.jpg"],
    gallery: [
      "/assets/img/GakeGake.jpg",
      "/assets/img/Arcane.jpg",
      "/assets/img/CyberNex logo.jpg",
      "/assets/img/SHEMA.jpg",
      "/assets/img/Wilson.jpg",
      "/assets/img/NZOZI.jpg",
      "/assets/img/JF.png",
      "/assets/img/fit.png"
    ],
    details: [
      {
        image: "/assets/img/GakeGake.jpg",
        title: "Gake Gake",
        description:
          "A saving platform allowing users to save in small installments for future purchases."
      },
      {
        image: "/assets/img/Arcane.jpg",
        title: "Arcane Solutions",
        description: "A software development and IT training company."
      },
      {
        image: "/assets/img/CyberNex logo.jpg",
        title: "CyberNex",
        description: "Provides cybersecurity, electronics, and software services."
      },
      {
        image: "/assets/img/SHEMA.jpg",
        title: "SHEMA SHOES STORE",
        description: "An online and physical shoe shop in Kigali, Rwanda."
      },
      {
        image: "/assets/img/Wilson.jpg",
        title: "MWESIGYE Wilson",
        description: "A private notary."
      },
      {
        image: "/assets/img/NZOZI.jpg",
        title: "NZOZI Collection",
        description: "A handmade bead-bag-making company."
      },
      {
        image: "/assets/img/JF.png",
        title: "JF Tech Ltd",
        description: "A software development company."
      },
      {
        image: "/assets/img/fit.png",
        title: "Future InnoveTech Ltd",
        description: "A software development and IT company."
      }
    ]
  },
  {
    key: "cards",
    href: "/work/cards",
    image: "/assets/img/forbusiness.jpg",
    heroImage: "/assets/img/forbusiness.jpg",
    samples: ["/assets/img/driver.png", "/assets/img/front.png", "/assets/img/purity.jpg"],
    gallery: ["/assets/img/driver.png", "/assets/img/front.png", "/assets/img/purity.jpg"],
    details: []
  },
  {
    key: "flyers",
    href: "/work/flyers",
    image: "/assets/img/forflyer.png",
    heroImage: "/assets/img/fff.png",
    samples: ["/assets/img/Vex.jpg", "/assets/img/Ibakwe-heroes-day-26.jpg", "/assets/img/Future InnovaTech Ltd flyer.jpg"],
    gallery: [
      "/assets/img/Vex.jpg",
      "/assets/img/Ibakwe-heroes-day-26.jpg",
      "/assets/img/Future InnovaTech Ltd flyer.jpg",
      "/assets/img/IBYIGISHO-2.jpg",
      "/assets/img/p2.jpg",
      "/assets/img/p1.jpg",
      "/assets/img/weekend.jpg",
      "/assets/img/Motor.jpg",
      "/assets/img/ed.jpg",
      "/assets/img/corporate.jpg",
      "/assets/img/IAD Tarrif.jpg",
      "/assets/img/thecohort.png",
      "/assets/img/Barista.jpg",
      "/assets/img/carbaba flyer.jpg",
      "/assets/img/KWIBUKA30-2.jpg",
      "/assets/img/What are you looking for.jpg",
      "/assets/img/let's complete it copy.jpg"
    ],
    details: []
  },
  {
    key: "covers",
    href: "/work/covers",
    image: "/assets/img/song.png",
    heroImage: "/assets/img/msc.png",
    samples: ["/assets/img/Bad energy2.jpg", "/assets/img/Hidden evil.jpg", "/assets/img/Falling.jpg"],
    gallery: [
      "/assets/img/Bad energy2.jpg",
      "/assets/img/song.png",
      "/assets/img/sad feelings1.jpg",
      "/assets/img/Hidden evil.jpg",
      "/assets/img/24-Hours.jpg",
      "/assets/img/GUD VYBZ.jpg",
      "/assets/img/Vex Prince MONEY ft. Dorty cover art DSPs.jpg",
      "/assets/img/Falling.jpg"
    ],
    details: []
  },
  {
    key: "uiux",
    href: "/work/uiux",
    image: "/assets/img/home.jpg",
    heroImage: "/assets/img/ui.jpg",
    samples: ["/assets/img/home.png", "/assets/img/honeymoon.jpg", "/assets/img/ui.jpg"],
    gallery: ["/assets/img/home.png", "/assets/img/honeymoon.jpg", "/assets/img/ui.jpg"],
    details: []
  },
  {
    key: "package",
    href: "/work/package",
    image: "/assets/img/pack.png",
    heroImage: "/assets/img/ff.png",
    samples: ["/assets/img/ff.png", "/assets/img/pack.png", "/assets/img/fff.png"],
    gallery: ["/assets/img/ff.png", "/assets/img/pack.png", "/assets/img/fff.png"],
    details: []
  },
  {
    key: "bookcover",
    href: "/work/bookcover",
    image: "/assets/img/bookcover.jpg",
    heroImage: "/assets/img/book category background.png",
    samples: ["/assets/img/bookcover.jpg"],
    gallery: ["/assets/img/bookcover.jpg"],
    details: []
  },
  {
    key: "motion",
    href: "/work/motion",
    image: "/assets/img/My intro.mp4",
    heroImage: "/assets/img/My intro.mp4",
    samples: ["/assets/img/Golden Ink_5.mp4", "/assets/img/Final RPL composition video.mp4"],
    gallery: ["/assets/img/Golden Ink_5.mp4", "/assets/img/Final RPL composition video.mp4"],
    details: [],
    isVideo: true
  }
] as const;

export const skills = [
  {label: "Adobe Photoshop", level: 95},
  {label: "Adobe Illustrator", level: 85},
  {label: "Adobe XD", level: 80},
  {label: "Figma", level: 85},
  {label: "Content Creation", level: 85},
  {label: "Social Media Management", level: 70}
] as const;

export const featuredWork = [
  "/assets/img/Ibakwe-heroes-day-26.jpg",
  "/assets/img/Vex.jpg",
  "/assets/img/Alik's cologne4.jpg",
  "/assets/img/Falling.jpg",
  "/assets/img/home.png",
  "/assets/img/GakeGake.jpg"
] as const;

export const testimonials = [
  {
    name: "IZERE HIRWA Roger",
    roleKey: "rogerRole",
    quoteKey: "rogerQuote"
  },
  {
    name: "UWAYEZU Jean Felix",
    roleKey: "felixRole",
    quoteKey: "felixQuote"
  }
] as const;

export function getServiceByKey(key: string) {
  return services.find((service) => service.key === key);
}
