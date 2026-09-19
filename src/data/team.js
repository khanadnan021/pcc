/**
 * Official Team Data for Programmers Club (PC) - AIKTC
 */

export const TEAM_CATEGORIES = [
  'All',
  'Technical',
  'Design',
  'Documentation',
  'Media & Marketing'
];

export const TEAM_STATS = [
  {
    label: 'Team Members',
    value: '24',
    icon: 'Users',
    description: 'Active student contributors'
  },
  {
    label: 'Faculty Advisors',
    value: '2',
    icon: 'Award',
    description: 'Guiding department heads'
  },
  {
    label: 'Specializations',
    value: '7',
    icon: 'Target',
    description: 'Domains of expertise'
  },
  {
    label: 'Projects Led',
    value: '50+',
    icon: 'Code2',
    description: 'Open source & campus initiatives'
  }
];

export const TEAM_MEMBERS = [
  // Faculty
  {
    id: 'tabrez-khan',
    name: 'Prof. Tabrez Khan',
    role: 'HOD, Computer Department',
    category: 'Faculty',
    year: 'Faculty',
    department: 'Computer Engineering',
    bio: 'Leads the Department of Computer Engineering and guides the overarching vision of the Programmers Club.',
    image: 'Prof Tabrez Khan.jpeg',
    imageCandidates: [
      'Prof Tabrez Khan.jpeg',
      'Prof Tabrez Khan.jpg',
      'Prof. Tabrez Khan.jpg',
      'Prof. Tabrez Khan.jpeg',
      'tabrez-khan.jpeg',
      'tabrez-khan.jpg'
    ],
    socials: {
      email: 'tabrez.khan@aiktc.ac.in',
      linkedin: '#'
    }
  },
  {
    id: 'irfan-jamkhandikar',
    name: 'Prof. Irfan Jamkhandikar',
    role: 'Faculty Coordinator',
    category: 'Faculty',
    year: 'Faculty',
    department: 'Computer Engineering',
    bio: 'Guides academic integration, student mentorship, and club initiatives across the campus.',
    image: 'Prof Irfan Jamakhandikar.jpeg',
    imageCandidates: [
      'Prof Irfan Jamakhandikar.jpeg',
      'Prof Irfan Jamkhandikar.jpeg',
      'Prof Irfan Jamakhandikar.jpg',
      'Prof. Irfan Jamkhandikar.jpg',
      'Prof. Irfan Jamkhandikar.jpeg',
      'irfan-jamkhandikar.jpeg',
      'irfan-jamkhandikar.jpg'
    ],
    socials: {
      email: 'irfan.j@aiktc.ac.in',
      linkedin: '#'
    }
  },

  // PC Lead
  {
    id: 'owais-shaikh',
    name: 'Owais Shaikh',
    role: 'PC Lead',
    category: 'Technical',
    isLead: true,
    year: 'TE',
    department: 'Computer Engineering',
    bio: 'PC Lead of the Programmers Club, directing all verticals, technical development, and major hackathons.',
    image: 'OWAIS ASHFAQUE SHAIKH.png',
    imageCandidates: [
      'OWAIS ASHFAQUE SHAIKH.png',
      'OWAIS ASHFAQUE SHAIKH.jpg',
      'owais-shaikh.png',
      'owais.png'
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'owais@pc.aiktc.ac.in'
    }
  },

  // Technical Team
  {
    id: 'jishan-momin',
    name: 'Jishan Momin',
    role: 'Technical Lead',
    category: 'Technical',
    isLead: true,
    year: 'TE',
    department: 'Computer Engineering',
    bio: 'Heads the technical team and coding architecture, orchestrating full-stack development and hands-on bootcamps.',
    image: 'JISHAN MOMIN.webp',
    imageCandidates: [
      'JISHAN MOMIN.webp',
      'JISHAN MOMIN.jpg',
      'JISHAN MOMIN.png',
      'jishan-momin.webp'
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'jishan@pc.aiktc.ac.in'
    }
  },
  {
    id: 'ayesha-pirkhan',
    name: 'Ayesha Pirkhan',
    role: 'Technical Member',
    category: 'Technical',
    year: 'TE',
    department: 'Computer Engineering',
    bio: 'An enthusiastic and active member of the club, eager to learn, contribute, and build scalable solutions.',
    image: 'AAYESHA PIRKHAN.jpg',
    imageCandidates: [
      'AAYESHA PIRKHAN.jpg',
      'AAYESHA PIRKHAN.png',
      'Ayesha Abdul Vahid Pirkhan.jpg',
      'ayesha-pirkhan.jpg'
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'ayesha@pc.aiktc.ac.in'
    }
  },
  {
    id: 'danish-khan',
    name: 'Danish Khan',
    role: 'Technical Member',
    category: 'Technical',
    year: 'TE',
    department: 'Computer Engineering',
    bio: 'Supports technical projects, hackathons, and systems engineering for club platforms.',
    image: 'Danish Khan.jpeg',
    imageCandidates: [
      'Danish Khan.jpeg',
      'Danish Khan.jpg',
      'DANISH KHAN.jpeg',
      'danish-khan.jpeg'
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'danish@pc.aiktc.ac.in'
    }
  },
  {
    id: 'riyaz-khan',
    name: 'Riyaz Khan',
    role: 'Technical Member',
    category: 'Technical',
    year: 'TE',
    department: 'Information Technology',
    bio: 'Assists with technical activities, backend services, and interactive software workshops.',
    image: 'RIYAZ KHAN.jpg',
    imageCandidates: [
      'RIYAZ KHAN.jpg',
      'RIYAZ KHAN.png',
      'riyaz-khan.jpg'
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'riyaz@pc.aiktc.ac.in'
    }
  },
  {
    id: 'zoha-mulla',
    name: 'Zoha Mulla',
    role: 'Technical Member',
    category: 'Technical',
    year: 'SE',
    department: 'Computer Engineering',
    bio: 'Contributes to programming labs, algorithmic challenges, and technical study cohorts.',
    image: 'ZOHA MULLA.jpg',
    imageCandidates: [
      'ZOHA MULLA.jpg',
      'ZOHA MULLA.png',
      'zoha-mulla.jpg'
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'zoha@pc.aiktc.ac.in'
    }
  },
  {
    id: 'sadia-siddiqua',
    name: 'Sadia Siddiqua',
    role: 'Technical Member',
    category: 'Technical',
    year: 'SE',
    department: 'Computer Engineering',
    bio: 'Passionate coder working on web initiatives, user interfaces, and workshop coordination.',
    image: 'SADIA SHAHEEN.jpg',
    imageCandidates: [
      'SADIA SHAHEEN.jpg',
      'SADIA SHAHEEN.png',
      'Sadia Siddiqua.jpg',
      'sadia-siddiqua.jpg'
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'sadia@pc.aiktc.ac.in'
    }
  },
  {
    id: 'abdul-basit-shaikh',
    name: 'Abdul Basit Shaikh',
    role: 'Technical Member',
    category: 'Technical',
    year: 'SE',
    department: 'Computer Engineering',
    bio: 'Dedicated developer passionate about competitive coding, system design, and open source.',
    image: 'Abdul Basit Shaikh.jpg',
    imageCandidates: [
      'Abdul Basit Shaikh.jpg',
      'Abdul Basit Shaikh.png',
      'ABDUL BASIT SHAIKH.jpg'
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'abdulbasit@pc.aiktc.ac.in'
    }
  },
  {
    id: 'adnan-khan',
    name: 'Adnan Khan',
    role: 'Technical Member',
    category: 'Technical',
    year: 'SE',
    department: 'Computer Engineering',
    bio: 'Supports team development projects, digital tooling, and codebase optimization.',
    image: 'ADNAN KHAN.jpg',
    imageCandidates: [
      'ADNAN KHAN.jpg',
      'ADNAN KHAN.png',
      'adnan-khan.jpg'
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'adnan@pc.aiktc.ac.in'
    }
  },

  // Design Team
  {
    id: 'humaira-kadri',
    name: 'Humaira Kadri',
    role: 'Design Lead',
    category: 'Design',
    isLead: true,
    year: 'TE',
    department: 'Computer Engineering',
    bio: 'Leads the design team, defining the visual identity, brand guidelines, and UI/UX for all club products.',
    image: 'HUMAIRA KADRI.jpeg',
    imageCandidates: [
      'HUMAIRA KADRI.jpeg',
      'HUMAIRA KADRI.jpg',
      'humaira-kadri.jpeg',
      'humaira.jpg'
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'humaira@pc.aiktc.ac.in'
    }
  },
  {
    id: 'hamza-patel',
    name: 'Hamza Patel',
    role: 'Design Member',
    category: 'Design',
    year: 'TE',
    department: 'Computer Engineering',
    bio: 'Creates engaging UI layouts, illustrations, and graphic assets for major tech conferences.',
    image: 'Patel Hamza.png',
    imageCandidates: [
      'Patel Hamza.png',
      'HAMZA PATEL.png',
      'patel-hamza.png'
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      email: 'hamza@pc.aiktc.ac.in'
    }
  },
  {
    id: 'iqraa-khan',
    name: 'Iqraa Khan',
    role: 'Design Member',
    category: 'Design',
    year: 'TE',
    department: 'Computer Engineering',
    bio: 'Designs digital badges, posters, and interactive web elements for hackathons and challenges.',
    image: 'Iqraa Khan.jpg',
    imageCandidates: [
      'Iqraa Khan.jpg',
      'IQRAA KHAN.jpg',
      'iqraa-khan.jpg'
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      email: 'iqraa@pc.aiktc.ac.in'
    }
  },
  {
    id: 'arshiya-shaik',
    name: 'Arshiya Shaik',
    role: 'Design Member',
    category: 'Design',
    year: 'TE',
    department: 'Computer Engineering',
    bio: 'Focuses on visual storytelling, typography, and promotional event branding.',
    image: 'SHAIK ARSHIYA.jpg',
    imageCandidates: [
      'SHAIK ARSHIYA.jpg',
      'SHAIK ARSHIYA.png',
      'SHAIK ARSHIYA',
      'arshiya-shaik.jpg'
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      email: 'arshiya@pc.aiktc.ac.in'
    }
  },
  {
    id: 'abu-talaah-shaikh',
    name: 'Abu Talaah Shaikh',
    role: 'Design Member',
    category: 'Design',
    year: 'SE',
    department: 'Computer Engineering',
    bio: 'Develops motion graphics, event flyers, and responsive interfaces for the community.',
    image: 'Shaikh Abu Talaah Khalid.jpg',
    imageCandidates: [
      'Shaikh Abu Talaah Khalid.jpg',
      'Shaikh Abu Talaah Khalid.png',
      'Abu Talaah Shaikh.jpg',
      'ABU TALAAH SHAIKH.jpg'
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'abutalaah@pc.aiktc.ac.in'
    }
  },
  {
    id: 'samreen-patel',
    name: 'Samreen Patel',
    role: 'Design Member',
    category: 'Design',
    year: 'SE',
    department: 'Computer Engineering',
    bio: 'Crafts user-centric interfaces and marketing graphics for club workshops.',
    image: 'SAMREEN PATEL.jpg',
    imageCandidates: [
      'SAMREEN PATEL.jpg',
      'SAMREEN PATEL.png',
      'samreen-patel.jpg'
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      email: 'samreen@pc.aiktc.ac.in'
    }
  },

  // Documentation Team
  {
    id: 'mohammed-kazi',
    name: 'Mohammed Arif Kazi',
    role: 'Documentation Lead',
    category: 'Documentation',
    isLead: true,
    year: 'TE',
    department: 'Computer Engineering',
    bio: 'Supports the team in coding tasks, technical reports, and official club documentation archives.',
    image: 'Mohammad Arif.jpeg',
    imageCandidates: [
      'Mohammad Arif.jpeg',
      'Mohammad Arif.jpg',
      'Mohammed Arif.jpeg',
      'Mohammed Arif.jpg',
      'Mohammed Arif Kazi.jpg',
      'Mohammed Arif Kazi.png',
      'MOHAMMED KAZI.jpg',
      'mohammed-kazi.jpg'
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'kazi@pc.aiktc.ac.in'
    }
  },
  {
    id: 'fahad-shaikh',
    name: 'Fahad Shaikh',
    role: 'Documentation Member',
    category: 'Documentation',
    year: 'SE',
    department: 'Computer Engineering',
    bio: 'Maintains comprehensive event summaries, minutes of meetings, and student guidelines.',
    image: 'FAHAD SHAIKH.jpeg',
    imageCandidates: [
      'FAHAD SHAIKH.jpeg',
      'FAHAD SHAIKH.jpg',
      'fahad-shaikh.jpeg'
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'fahad@pc.aiktc.ac.in'
    }
  },

  // Media Marketing Team
  {
    id: 'ashish-bind',
    name: 'Ashish Bind',
    role: 'Media Marketing Lead',
    category: 'Media & Marketing',
    isLead: true,
    year: 'SE',
    department: 'Computer Engineering',
    bio: 'Directs digital campaigns, video content, social outreach, and media production for the club.',
    image: 'ASHISH BIND.png',
    imageCandidates: [
      'ASHISH BIND.png',
      'Bind Ashish Motilal.jpg',
      'ashish-bind.png'
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'ashish@pc.aiktc.ac.in'
    }
  },
  {
    id: 'roshan-panigrahi',
    name: 'Roshan Panigrahi',
    role: 'Media Marketing Member',
    category: 'Media & Marketing',
    year: 'SE',
    department: 'Computer Engineering',
    bio: 'Coordinates live event broadcasts, photography, and high-impact social media coverage.',
    image: 'ROSHAN PANIGRAHI.jpg',
    imageCandidates: [
      'ROSHAN PANIGRAHI.jpg',
      'ROSHAN PANIGRAHI.png',
      'roshan-panigrahi.jpg'
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      email: 'roshan@pc.aiktc.ac.in'
    }
  },
  {
    id: 'hammad-sayed',
    name: 'Hammad Sayed',
    role: 'Media Marketing Member',
    category: 'Media & Marketing',
    year: 'TE',
    department: 'Computer Engineering',
    bio: 'Drives engagement across student communities and creates dynamic reels for upcoming events.',
    image: 'HAMMAAD SAYED.png',
    imageCandidates: [
      'HAMMAAD SAYED.png',
      'HAMMAD SAYED.png',
      'hammad-sayed.png'
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      email: 'hammad@pc.aiktc.ac.in'
    }
  },
  {
    id: 'aachal-narbage',
    name: 'Aachal Narbage',
    role: 'Media Marketing Member',
    category: 'Media & Marketing',
    year: 'TE',
    department: 'Computer Engineering',
    bio: 'Connects students across departments and boosts event registrations with engaging campaigns.',
    image: 'AACHAL NARBAGE.png',
    imageCandidates: [
      'AACHAL NARBAGE.png',
      'Aachal Narbage.png',
      'aachal-narbage.png'
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      email: 'aachal@pc.aiktc.ac.in'
    }
  },
  {
    id: 'mantasha-shaikh',
    name: 'Mantasha Shaikh',
    role: 'Media Marketing Member',
    category: 'Media & Marketing',
    year: 'TE',
    department: 'Computer Engineering',
    bio: 'Writes compelling event captions, announcements, and promotional copy across all platforms.',
    image: 'Mantasha Shaikh.jpeg',
    imageCandidates: [
      'Mantasha Shaikh.jpeg',
      'Mantasha Shaikh.jpg',
      'MANTASHA SHAIKH.jpeg'
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      email: 'mantasha@pc.aiktc.ac.in'
    }
  },
  {
    id: 'riddhi-salunkhe',
    name: 'Riddhi Salunkhe',
    role: 'Media Marketing Member',
    category: 'Media & Marketing',
    year: 'SE',
    department: 'Computer Engineering',
    bio: 'Assists in media branding, post-event showcases, and student community feedback loops.',
    image: 'Riddhi Salunkhe.png',
    imageCandidates: [
      'Riddhi Salunkhe.png',
      'RIDDHI SALUNKHE.png',
      'riddhi-salunkhe.png'
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      email: 'riddhi@pc.aiktc.ac.in'
    }
  }
];
