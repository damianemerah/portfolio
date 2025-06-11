const person = {
  firstName: "Damian",
  lastName: "Emerah",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Developer",
  avatar: "/images/projects/project-01/avatar-01.jpg",
  location: "Africa/Lagos",
  languages: ["English"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to Damian&apos;s Dev & AI Newsletter</>,
  description: (
    <>
      I share deep dives into Next.js performance tuning, SEO best practices,
      practical React and Tailwind CSS tips, plus hands‑on AI and ML
      integrations to elevate your web applications with intelligent features.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/+2347066765698",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:damianemerah@gmail.com",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/damianemerah/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/damianemerah/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/damian_emerah",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Web developer</>,
  subline: (
    <>
      I’m Damian, a web developer based in Lagos. I build intuitive
      <br />
      user experiences by day — and by night, I bring personal ideas to life
      through code.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Me",
  description: `Meet Damian Emerah, Web Developer from Lagos, Nigeria`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/damianemerah",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Damian is a Lagos‑based web developer with a strong foundation in
        industrial mathematics and statistics, and a passion for transforming
        design into high‑performance, SEO‑optimized, and responsive web
        applications. He excels at converting Figma mocks into production‑ready
        code using Next.js, React, and Tailwind CSS, while leveraging AWS and
        CI/CD pipelines to streamline deployments and reduce costs.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Self‑Employed",
        timeframe: "2022 – Present",
        role: "Freelance Web Developer",
        achievements: [
          <>
            Co‑developed Acc‑gen, a full‑stack SMS verification and social media
            growth app using TypeScript, Next.js, and Supabase; built a support
            system that improved user retention and engagement.
          </>,
          <>
            Built Glow, a beauty & wellness booking and e‑commerce platform with
            Next.js, PostgreSQL, and Paystack, boosting client retention by 40%
            and revenue by 20% through intuitive UX and streamlined checkout.
          </>,
          <>
            Developed Dekato Store, a modern e‑commerce solution using Next.js,
            MongoDB, Paystack, AWS SES, and Vercel; implemented SEO
            optimizations and responsive UI to drive traffic and conversions.
          </>,
          <>
            Created Grind Protocol with Next.js and Firebase, enhancing
            performance and increasing user engagement by 40%.
          </>,
          <>
            Reduced delivery times by 20% via GitHub Actions CI/CD; cut AWS
            costs by 15% through optimized SES and S3 usage.
          </>,
        ],
        images: [],
      },
      {
        company: "Astren (Remote)",
        timeframe: "2023 – 2024",
        role: "Software Engineer",
        achievements: [
          <>
            Contributed to scalable back‑end and front‑end solutions, improving
            system efficiency by 80% across services.
          </>,
          <>
            Collaborated under NDA to deliver high‑impact features in a
            fast‑paced environment, adhering to best practices in testing and
            deployment.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Training",
    institutions: [
      {
        name: "Enugu State University of Science and Technology",
        description: (
          <>BSc in Industrial Mathematics & Statistics (2016 – 2020)</>
        ),
      },
      {
        name: "ALX Software Engineering Program",
        description: <>Full‑stack development intensive (2022 – 2023)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>
            Expert in JavaScript, TypeScript, React.js, and Next.js for building
            SSR/SSG web apps; skilled in Tailwind CSS and responsive design for
            pixel‑perfect UIs.
          </>
        ),
        images: [],
      },
      {
        title: "Backend & Databases",
        description: (
          <>
            Proficient with Node.js, Express.js, Python, RESTful APIs;
            experienced in MongoDB, MySQL, Supabase, Firebase, Prisma, and
            GraphQL for robust data layering.
          </>
        ),
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: (
          <>
            Hands‑on with AWS (SES, S3), Vercel deployments, Git/GitHub CI/CD
            pipelines, and Paystack integration for secure payments.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Insights on Web Development & AI",
  description: `Dive into Damian Emerah’s latest posts on Next.js performance, SEO strategies, React & Tailwind patterns, and practical AI integrations.`,
};

const work = {
  label: "Work",
  title: "Featured Projects",
  description: `Explore Damian Emerah’s portfolio of web apps—from high‑performance e‑commerce platforms to AI‑powered tools, all built with modern stacks.`,
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
