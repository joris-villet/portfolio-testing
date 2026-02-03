// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Portfolio | Testing QA",
  title: "Testing QA",
  description: "A modern minimal blog to make test QA",

  // Navigation
  navigation: {
    home: "Home",
    posts: "Posts",
    contact: "Contact",
    comments: "Comments",
  },

  // Hero Section
  hero: {
    prefix: "I am",
    name: "Joris Villet",
    intro: `I'm a QA Tester with strong knowledge in JavaScript, web development,\n UI/UX, and IT support. I enjoy testing anything that can break.\n
      Welcome to my portfolio.`,
    avatar: "/image/profil-avatar.png",
    buttons: {
      viewPosts: "View Posts",
      contactMe: "Contact Me",
    },
    socialLinks: [
      {
        name: "LinkedIn",
        icon: "/svg/linkedin.svg",
        url: "https://www.linkedin.com/in/joris-villet-b09605354/",
      },
      {
        name: "GitHub",
        icon: "/svg/github.svg",
        url: "https://github.com/joris-villet",
      },
    ],
  },

  // About Section
  about: {
    title: "About Me",
    text: "Hi, I'm Someone, a passionate web developer and blogger. I love exploring new technologies and sharing knowledge with the community. On this blog, you'll find my thoughts on web development, tutorials, and project showcases. I hope my content can inspire others in their coding journey.",
  },

  // Contact Page
  contact: {
    title: "Get In Touch",
    subtitle:
      "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    info: {
      email: {
        label: "Email",
        value: "tom@example.com",
        link: "mailto:tom@example.com",
      },
      phone: {
        label: "Phone",
        value: "+1 (234) 567-890",
        link: "tel:+1 (234) 567-890",
      },
      location: {
        label: "Location",
        value: "San Francisco, CA",
      },
    },
    followMe: {
      title: "Follow Me",
      links: [
        {
          name: "LinkedIn",
          icon: "/svg/linkedin.svg",
          url: "https://www.linkedin.com/in/joris-villet-b09605354/",
        },
        {
          name: "GitHub",
          icon: "/svg/github.svg",
          url: "https://github.com/joris-villet",
        },
      ],
    },
    footerText: [
      "I typically respond to messages within 24 hours during business days.",
      "Looking forward to hearing from you! 🚀",
    ],
    messageButton: "💬 Leave a Message",
  },

  // Footer
  footer: {
    copyright: "© 2025 Someone. All rights reserved.",
    links: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms of Service", url: "#" },
      { text: "Sitemap", url: "#" },
    ],
    github: {
      text: "Star this project on Github",
      url: "https://github.com/tomcomtang/astro-cartoon-portfolio",
    },
  },

  // Posts Page
  posts: {
    title: "Blog Posts",
    subtitle:
      "Explore our latest articles on web development, design, and technology",
    searchPlaceholder: "Search posts...",
  },

  // Comments Page
  comments: {
    title: "Comments & Discussion",
    subtitle:
      "Share your thoughts, questions, or suggestions here. Let's connect and discuss!",
    guidelines: {
      title: "Community Guidelines",
      items: [
        "Be respectful and constructive in your comments",
        "No spam, self-promotion, or advertising allowed",
        "No personal attacks, hate speech, or harassment",
        "Stay on topic and keep discussions relevant",
        "No inappropriate, offensive, or illegal content",
        "Use clear, friendly, and inclusive language",
      ],
    },
  },
};
