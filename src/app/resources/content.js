const person = {
  firstName: "Damian",
  lastName: "Emerah",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Developer",
  avatar: "/images/projects/project-01/avatar-01.jpg",
  location: "Africa/Lagos",
  languages: ["English", "Igbo"],
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
      I&apos;m Damian, a web developer based in Lagos. I build intuitive
      <br />
      user experiences by day — and by night, I bring personal ideas to life
      through code.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Me",
  description: `Resume of Damian Emerah, Web Developer based in Lagos, Nigeria`,
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
  contact: {
    address: "Lakeview II, Lekki, Eti-Osa, Lagos State, Nigeria",
    phone: "+234 706 676 5698",
    email: "damianemerah@gmail.com",
    linkedin: "https://www.linkedin.com/in/damianemerah/",
    portfolio: "https://github.com/damianemerah/",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <strong>DAMIAN EMERAH</strong> is a Web Developer based in Lagos,
        Nigeria, specializing in building high-performance, SEO-optimized web
        applications. Experienced in both frontend and backend development,
        Damian delivers robust solutions for clients across Africa and beyond.
      </>
    ),
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>
            React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML, CSS
          </>
        ),
        images: [],
      },
      {
        title: "Backend",
        description: <>Node.js, Express.js, Python (Basic)</>,
        images: [],
      },
      {
        title: "Databases",
        description: <>MongoDB, PostgreSQL, Supabase, Firebase, Prisma</>,
        images: [],
      },
      {
        title: "Tools & Cloud",
        description: (
          <>
            AWS (SES, S3, CloudFront), Git/Github, Vercel, Paystack, Figma,
            Postman
          </>
        ),
        images: [],
      },
      {
        title: "Others",
        description: <>SEO, PWA, REST APIs</>,
        images: [],
      },
      {
        title: "Languages",
        description: <>English (Fluent), Igbo (Native)</>,
        images: [],
      },
    ],
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Glow Cosmetics, South Africa",
        timeframe: "Mar 2025 - May 2025",
        role: "Full-Stack Developer (Remote)",
        achievements: [
          <>
            Developed a full-stack booking and e-commerce platform using
            Next.js, PostgreSQL, Tailwind CSS, and Paystack, with SEO
            optimization to drive organic traffic and improve visibility.
          </>,
          <>
            Improved user experience and streamlined booking and checkout flows,
            increasing conversion rates by 20%.
          </>,
          <>
            Implemented admin tools for managing services, inventory, and
            customer engagement.
          </>,
          <>
            Deployed on Vercel with mobile-first design, boosting client
            retention by 40%.
          </>,
        ],
        images: [],
      },
      {
        company: "Dekato Store, Lagos",
        timeframe: "Aug 2024 - Nov 2024",
        role: "Full-Stack Developer (Remote)",
        achievements: [
          <>
            Built ecommerce platform with product variations, admin dashboard,
            and SEO optimization using Next.js and MongoDB.
          </>,
          <>
            Integrated Paystack for payments and AWS SES for email
            notifications.
          </>,
        ],
        images: [],
      },
      {
        company: "Acc-gen, Enugu",
        timeframe: "Feb 2024 - Aug 2024",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Co-developed a social media growth and SMS verification platform
            using TypeScript, Next.js, and Supabase.
          </>,
          <>
            Integrated a support system to streamline issue resolution and boost
            user retention.
          </>,
          <>
            Focused on responsive UI and performance, ensuring fast, smooth
            cross-device experience.
          </>,
        ],
        images: [],
      },
      {
        company: "Astren, Chandigarh, India",
        timeframe: "Aug 2023 - Feb 2024",
        role: "Software Engineer Intern (Remote)",
        achievements: [
          <>
            Contributed to scalable backend/frontend solutions, improving
            efficiency by 80%.
          </>,
          <>
            Collaborated under NDA, maintaining confidentiality in a fast-paced
            environment.
          </>,
        ],
        images: [],
      },
      {
        company: "ALX, Lagos",
        timeframe: "Aug 2022 - Oct 2023",
        role: "Software Engineer Program",
        achievements: [
          <>
            Completed intensive software engineering program in full-stack
            development, algorithms & system design.
          </>,
          <>
            Hands-on experience with React, MongoDB, Node.js to deliver
            full-stack software solutions.
          </>,
          <>Mentored 5 junior developers through ALX Slack community.</>,
        ],
        images: [],
      },
      {
        company: "Freelance Projects, Nigeria",
        timeframe: "2021 - 2023",
        role: "Web Developer",
        achievements: [
          <>
            Delivered 10+ websites using MERN stack and Tailwind CSS for various
            industries.
          </>,
          <>
            Collaborated with clients to meet design and functionality goals.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Enugu State University of Science and Technology, Enugu Nigeria",
        description: (
          <>
            BSc in Industrial Mathematics & Statistics (Jan 2017 - July 2021).
            Graduated with Second Class Upper (3.79 GPA). Final Year Project:
            Mathematical Modeling for Malaria in Nigeria
          </>
        ),
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    items: [
      "LangChain for LLM Application Development — Completed Feb 2025",
      "Preprocessing Unstructured Data for LLM Applications — Completed Feb 2025",
      "Generative AI for Everyone — Completed Mar 2025",
      "ChatGPT Prompt Engineering for Developers — Completed Mar 2025",
      "ALX Software Engineering - Backend Specialization — Aug 2022 - Oct 2023",
      "Node.js, Express, MongoDB Bootcamp - Udemy — Completed May 2023",
      "The Complete JavaScript Course - Udemy — Completed Mar 2022",
    ],
  },
  awards: {
    display: true,
    title: "Awards & Achievements",
    items: [
      "Selected for ALX Backend specialization among 1,000+ applicants",
      "Increased engagement on Grind by 40% within 3 months",
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Insights on Web Development & AI",
  description: `Dive into Damian Emerah's latest posts on Next.js performance, SEO strategies, React & Tailwind patterns, and practical AI integrations.`,
};

const work = {
  label: "Work",
  title: "Featured Projects",
  description: `Explore Damian Emerah's portfolio of web apps—from high‑performance e‑commerce platforms to AI‑powered tools, all built with modern stacks.`,
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
