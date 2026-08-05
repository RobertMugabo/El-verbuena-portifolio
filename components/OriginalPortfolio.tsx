import type {ReactNode} from "react";
import {notFound} from "next/navigation";

type GalleryItem = {
  image: string;
  title?: string;
  description?: string;
};

type WorkPageData = {
  heroImage: string;
  heroHeading: ReactNode;
  heroText: string;
  sectionTitle: string;
  sectionDescription: string;
  items: GalleryItem[];
};

const serviceCards = [
  {
    href: "logo",
    image: "/assets/img/EV.jpg",
    title: "Logo design",
    description:
      "I ensure a convincing logo for you and/or your company that will last long and easy for your customers to memorize, which increases a positive relationship between you and them."
  },
  {
    href: "cards",
    image: "/assets/img/forbusiness.jpg",
    title: "Business card and Service card design",
    description:
      "I specialize in crafting standout business and service card designs that capture your brand's essence. With a keen eye for detail and a passion for impactful visuals, I create designs that leave a lasting impression."
  },
  {
    href: "flyers",
    image: "/assets/img/forflyer.png",
    title: "Flyer/banner/poster design",
    description:
      "I focus on designing eye-catching flyers, banners, and posters that communicate your message effectively. With a focus on creativity and clarity, I create visuals that captivate audiences and elevate your brand."
  },
  {
    href: "covers",
    image: "/assets/img/song.png",
    title: "Song/Movie cover design",
    description:
      "I design captivating song and movie covers that tell your story at first glance. With a creative blend of visuals and emotion, I create artwork that resonates with your audience and amplifies your message."
  },
  {
    href: "uiux",
    image: "/assets/img/home.jpg",
    title: "User interface design",
    description:
      "I create intuitive and visually engaging user interfaces that enhance digital experiences. By blending functionality with aesthetics, I design interfaces that are user-friendly and aligned with your brand."
  },
  {
    href: "package",
    image: "/assets/img/pack.png",
    title: "Package design",
    description:
      "I aim at crafting innovative product package designs that captivate customers. I create packaging designs that stand out on shelves and resonates with your audience."
  }
] as const;

const recentWorkImages = [
  "/assets/img/Ibakwe-heroes-day-26.jpg",
  "/assets/img/Vex.jpg",
  "/assets/img/Alik's cologne4.jpg",
  "/assets/img/Falling.jpg"
] as const;

const workPages: Record<string, WorkPageData> = {
  logo: {
    heroImage: "/assets/img/logodesign10.png",
    heroHeading: (
      <>
        NEED A <span>GOAL-ALIGNED <br />AND LASTING LOGO?</span>
      </>
    ),
    heroText: "You're at the right place.",
    sectionTitle: "LOGO DESIGN",
    sectionDescription:
      "Here are the logos I designed in the past time with some of the clients we worked together",
    items: [
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
  cards: {
    heroImage: "/assets/img/forbusiness.jpg",
    heroHeading: (
      <>
        NEED A <span>BUSINESS CARD OR SERVICE CARD <br />FOR YOUR BUSINESS?</span>
      </>
    ),
    heroText: "You're at the right place.",
    sectionTitle: "CARD DESIGN",
    sectionDescription:
      "Here are the Cards I designed in the past time with some of the clients we worked together",
    items: [
      {image: "/assets/img/driver.png"},
      {image: "/assets/img/front.png"},
      {image: "/assets/img/purity.jpg"}
    ]
  },
  flyers: {
    heroImage: "/assets/img/fff.png",
    heroHeading: (
      <>
        HAVE AN <span>ADVERT OR ANNOUNCEMENT TO MAKE?<br />LET'S VISUALLY GRAB ATTENTION</span>
      </>
    ),
    heroText: "You've got it solved",
    sectionTitle: "FLYER AND POSTER DESIGNS",
    sectionDescription:
      "Here are some of the Flyers, banners and posters I designed in the past time with some of the clients we worked together",
    items: [
      {image: "/assets/img/Vex.jpg"},
      {image: "/assets/img/Ibakwe-heroes-day-26.jpg"},
      {image: "/assets/img/Future InnovaTech Ltd flyer.jpg"},
      {image: "/assets/img/IBYIGISHO-2.jpg"},
      {image: "/assets/img/p2.jpg"},
      {image: "/assets/img/p1.jpg"},
      {image: "/assets/img/weekend.jpg"},
      {image: "/assets/img/Motor.jpg"},
      {image: "/assets/img/ed.jpg"},
      {image: "/assets/img/corporate.jpg"},
      {image: "/assets/img/IAD Tarrif.jpg"},
      {image: "/assets/img/thecohort.png"},
      {image: "/assets/img/Barista.jpg"},
      {image: "/assets/img/carbaba flyer.jpg"},
      {image: "/assets/img/KWIBUKA30-2.jpg"},
      {image: "/assets/img/What are you looking for.jpg"},
      {image: "/assets/img/let's complete it copy.jpg"}
    ]
  },
  covers: {
    heroImage: "/assets/img/msc.png",
    heroHeading: (
      <>
        NEED A <span>SONG OR MOVIE COVER?</span>
      </>
    ),
    heroText: "You're at the right place.",
    sectionTitle: "SONG AND MOVIE COVER DESIGN",
    sectionDescription:
      "Here are the song and movie covers I designed in the past time with some of the Artists and movie personnels we worked together",
    items: [
      {image: "/assets/img/Bad energy2.jpg"},
      {image: "/assets/img/song.png"},
      {image: "/assets/img/sad feelings1.jpg"},
      {image: "/assets/img/Hidden evil.jpg"},
      {image: "/assets/img/24-Hours.jpg"},
      {image: "/assets/img/GUD VYBZ.jpg"},
      {image: "/assets/img/Vex Prince MONEY ft. Dorty cover art DSPs.jpg"},
      {image: "/assets/img/Falling.jpg"}
    ]
  },
  uiux: {
    heroImage: "/assets/img/ui.jpg",
    heroHeading: (
      <>
        NEED A <span>DESIGNED MOCKUPS AND PROTOTYPES <br />FOR YOUR BUSINESS'S WEBSITE OR APP?</span>
      </>
    ),
    heroText: "You're at the right place.",
    sectionTitle: "UI/UX DESIGN",
    sectionDescription:
      "Here are the interfaces I designed in the past time with some of the clients we worked together",
    items: [{image: "/assets/img/home.png"}, {image: "/assets/img/honeymoon.jpg"}]
  },
  package: {
    heroImage: "/assets/img/ff.png",
    heroHeading: (
      <>
        NEED A <span>COVER DESIGN <br />FOR YOUR PRODUCTS?</span>
      </>
    ),
    heroText: "You're at the right place.",
    sectionTitle: "PACKAGE DESIGN",
    sectionDescription: "Here are the recent work with some of the clients we worked together",
    items: [{image: "/assets/img/ff.png"}, {image: "/assets/img/pack.png"}]
  }
};

function SiteHeader({locale, homePage}: {locale: string; homePage: boolean}) {
  const homeHref = `/${locale}`;

  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex justify-content-between">
        <div className="logo">
          <img src="/assets/img/logo.png" alt="" />
          &nbsp;&nbsp;
          <a href={homeHref}>EL-VERBUENA</a>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a href={homePage ? "#about" : `${homeHref}#about`}>About</a>
            </li>
            <li>
              <a href={homePage ? "#services" : `${homeHref}#services`}>Services</a>
            </li>
            <li>
              <a href={homePage ? "#skills" : `${homeHref}#skills`}>Skills</a>
            </li>
            <li>
              <a href={homePage ? "#testimonials" : `${homeHref}#testimonials`}>Testimonials</a>
            </li>
            <li>
              <a href={homePage ? "#contact" : `${homeHref}#contact`}>Contact</a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>
            <strong>Contact</strong>
          </h2>
          <p>Pass your question, support or ask for clarification.</p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-6">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Kigali, Rwanda</p>
              </div>
              <br />

              <div className="email">
                <a href="mailto:robertscresswell@gmail.com" style={{textDecoration: "none", color: "inherit"}}>
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>robertscresswell@gmail.com</p>
                </a>
              </div>
              <br />

              <div className="phone">
                <a href="tel:+250789492390" style={{textDecoration: "none", color: "inherit"}}>
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+250 789 492 390</p>
                </a>
                <br />
                <a href="tel:+250789438711" style={{textDecoration: "none", color: "inherit"}}>
                  <p>+250 789 438 711</p>
                </a>
              </div>
              <br />

              <div className="phone">
                <a
                  href="https://wa.me/250789492390"
                  target="_blank"
                  rel="noreferrer"
                  style={{textDecoration: "none", color: "inherit"}}
                >
                  <i className="bi bi-whatsapp"></i>
                  <h4>WhatsApp:</h4>
                  <p>+250 789 492 390</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <>
      <footer id="footer">
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright <img src="/assets/img/logo-1.png" alt="EL-VERBUENA" style={{height: 30}} />{" "}
              <strong>
                <span>EL-VERBUENA</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="https://x.com/el_verbuena" className="twitter" target="_blank" rel="noreferrer">
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/roberto.cresswell.33"
              className="facebook"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/el_verbuena_k2/"
              className="instagram"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mugabo-robert-7647a428b/"
              className="linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

function WorkHero({image, heading, text}: {image: string; heading: ReactNode; text: string}) {
  return (
    <section id="hero">
      <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active" style={{backgroundImage: `url(${image})`}}>
            <div className="carousel-container">
              <div className="carousel-content animate__animated animate__fadeInUp">
                <h2>{heading}</h2>
                <p>{text}</p>
              </div>
            </div>
          </div>
        </div>

        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bx bx-left-arrow" aria-hidden="true"></span>
        </a>

        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bx bx-right-arrow" aria-hidden="true"></span>
        </a>

        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
      </div>
    </section>
  );
}

function WorkGrid({
  title,
  description,
  items
}: {
  title: string;
  description: string;
  items: GalleryItem[];
}) {
  return (
    <section id="services" className="team section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>
            <strong>{title}</strong>
          </h2>
          <p>{description}</p>
        </div>

        <div className="row">
          {items.map((item) => (
            <div key={item.image} className="col-lg-3 col-md-6 col-12 mb-4" data-aos="fade-up">
              <div className="member text-center">
                <div className="member-img">
                  <img src={item.image} className="img-fluid" alt={item.title ?? ""} />
                </div>
                <div className="member-info">
                  {item.title ? <h4>{item.title}</h4> : null}
                  {item.description ? <span>{item.description}</span> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OriginalHomePage({locale}: {locale: string}) {
  return (
    <>
      <SiteHeader locale={locale} homePage />

      <WorkHero
        image="/assets/img/first.jpg"
        heading={
          <>
            I'M A <span>GRAPHIC DESIGNER </span>
          </>
        }
        text="Your trusted partner for quality branding through various forms of advertisement you need."
      />

      <main id="main">
        <section id="about" className="team section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up"></div>

            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up">
                  <div className="member-img">
                    <img src="/assets/img/me.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="https://x.com/el_verbuena" target="_blank" rel="noreferrer">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="https://www.facebook.com/roberto.cresswell.33" target="_blank" rel="noreferrer">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="https://www.instagram.com/el_verbuena_k2/" target="_blank" rel="noreferrer">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/mugabo-robert-7647a428b/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>MUGABO Robert</h4>
                    <span>EL-VERBUENA</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" style={{width: 700}}>
                <div className="member" data-aos="fade-up" data-aos-delay="100" style={{width: 700}}>
                  <div className="member-img" style={{width: 600}}>
                    <div className="social"></div>
                  </div>
                  <div className="member-info" id="member-info">
                    <h2>
                      <strong>About me.</strong>
                    </h2>
                    <br />
                    <br />
                    <h4 style={{textAlign: "left", fontWeight: 300}}>
                      A passionate and detail-oriented graphic designer and a UI designer born{" "}
                      <strong style={{fontWeight: 600}}>Robert MUGABO</strong> professionally known as{" "}
                      <strong style={{fontWeight: 600}}>EL-VERBUENA</strong> based in Kigali, Rwanda. With a strong
                      foundation in visual communication and years of hands-on experience, Specialized in creating
                      designs that are not only visually captivating but also strategically effective.
                      <br />
                      <br />
                      From developing impactful brand identities to designing engaging marketing materials, I focus on
                      delivering creative solutions tailored to meet the unique needs of each project. My design
                      philosophy revolves around clarity, creativity, and connection ensuring that every visual I create
                      serves a purpose.
                      <br />
                      <br />
                      Driven by innovation and inspired by Rwanda's vibrant culture, I stay ahead of design trends
                      while keeping my work authentic and timeless.
                    </h4>
                    <span>Let's collaborate and bring your vision to life!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="team section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>
                <strong>What I do</strong>
              </h2>
              <p>
                I provide the following <i>but not limited to</i> range of services to meet your needs.
              </p>
            </div>

            <div className="row">
              {serviceCards.map((service) => (
                <div key={service.href} className="col-lg-3 col-md-6 d-flex align-items-stretch">
                  <div className="member" data-aos="fade-up">
                    <div className="member-img">
                      <img src={service.image} className="img-fluid" alt={service.title} />
                      <div className="social">
                        <a href={`/${locale}/work/${service.href}`}>
                          {service.title}
                          <i className="bi bi-dot"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>{service.title}</h4>
                      <span>{service.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="skills" style={{alignContent: "center"}}>
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>
                <strong>My Skills</strong>
              </h2>
              <p>
                I possess a diverse set of skills essential for driving innovation and excellence in the digital
                marketing agency. <br /> I continuously enhance my expertise to meet the challenges and opportunities in
                the industry.
              </p>
            </div>

            <div className="row skills-content">
              <div className="col-lg-6" data-aos="fade-up">
                <div className="progress" style={{width: "100%"}}>
                  <span className="skill">
                    Adobe Photoshop <i className="val">95%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Adobe Illustrator <i className="val">85%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Adobe XD<i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                <div className="progress" style={{width: "100%"}}>
                  <span className="skill">
                    Adobe After Effects <i className="val">70%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Figma<i className="val">85%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Social media platforms management <i className="val">70%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Content creation <i className="val">85%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="recent-work" className="team section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>
                <strong>Recent Work</strong>
              </h2>
            </div>

            <div className="row">
              {recentWorkImages.map((image) => (
                <div key={image} className="col-lg-3 col-md-6 col-12 mb-4" data-aos="fade-up">
                  <div className="member text-center">
                    <div className="member-img">
                      <img src={image} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              ))}

              <div className="text-center">
                <a href={`/${locale}/work/flyers`} className="btn-get-started">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>
                What Our <strong>Clients</strong> Say
              </h2>
              <p>
                Our clients value our commitment to excellence in the creative industry. Here's what they have to say
                about our services and solutions.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="testimonial-item mt-4 mt-lg-0">
                  <h3>IZERE HIRWA Roger</h3>
                  <h4>Co-Founder &amp; CTO, HDEV Tech Ltd</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    "EL-VERBUENA has been an incredible asset to HDEV Ltd. over the past three months. Their
                    creativity, attention to detail, and ability to deliver top-notch designs under tight deadlines have
                    significantly elevated our brand's visual presence."
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="testimonial-item mt-4">
                  <h3>UWAYEZU Jean Felix</h3>
                  <h4>Chief Executive Officer, JF Tech Ltd.</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    "Working with EL-VERBUENA has been a truly transformative experience at JF Tech. Their exceptional
                    creativity, attention to detail, and ability to translate complex ideas into visually compelling
                    designs have been invaluable to our brand."
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}

export function OriginalWorkPage({locale, slug}: {locale: string; slug: string}) {
  const page = workPages[slug];

  if (!page) {
    notFound();
  }

  return (
    <>
      <SiteHeader locale={locale} homePage={false} />
      <WorkHero image={page.heroImage} heading={page.heroHeading} text={page.heroText} />
      <main id="main">
        <WorkGrid title={page.sectionTitle} description={page.sectionDescription} items={page.items} />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
