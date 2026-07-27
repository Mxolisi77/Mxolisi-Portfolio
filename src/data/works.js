const works = [
  {
    id: 1,
    category: 'Website',
    title: 'ThinkersAfrika Website',
    banner: '/img/gallery/1-banner.png',
    thumbnail: '/img/gallery/1.png',
    gallery: [
      '/img/gallery/1.png',
      '/img/gallery/1-view-1.png',
      '/img/gallery/1-view-2.png',
    ],
    projectUrl: 'https://thinkersafrika.com',
    overview: [
      'ThinkersAfrika is a platform dedicated to amplifying African voices in education, innovation, and leadership. The website needed to feel bold, credible, and easy to navigate for visitors discovering programs, events, and community stories.',
      'I led the UI/UX design and frontend development, focusing on a content-first layout that works equally well on mobile and desktop.',
    ],
    problem: [
      'The previous site felt outdated and made it hard for users to find key information about initiatives and upcoming events. Content was dense, navigation was unclear, and the brand did not reflect the energy of the organization.',
      'The client also needed a structure that non-technical team members could update without breaking the design.',
    ],
    solution: [
      'I redesigned the information architecture with clear sections for programs, about, and contact flows. The visual language uses strong typography, warm accent colors, and generous spacing to improve readability.',
      'Built with React and a component-based layout, the site loads quickly, scales across screen sizes, and gives the team a maintainable foundation for future pages.',
    ],
  },
  {
    id: 2,
    category: 'Website',
    title: 'Ckyzo Website',
    banner: '/img/gallery/2-banner.png',
    thumbnail: '/img/gallery/2.png',
    gallery: [
      '/img/gallery/2.png',
      '/img/gallery/2-view-1.png',
      '/img/gallery/2-view-2.png',
    ],
    projectUrl: 'https://ckyzo.com',
    overview: [
      'Ckyzo needed a polished company website that communicates its services clearly and builds trust with potential clients from the first visit.',
      'The goal was a modern, minimal interface that highlights the brand identity while keeping calls to action visible throughout the experience.',
    ],
    problem: [
      'Ckyzo had no consistent online presence. Prospective customers could not quickly understand what the company offers or how to get in touch.',
      'The brand needed a cohesive visual system that could grow with new service pages and case studies.',
    ],
    solution: [
      'I created a clean landing experience with structured service blocks, social proof areas, and a simplified contact funnel.',
      'The responsive frontend uses a modular section system, making it easy to add new pages while preserving a consistent look and feel.',
    ],
  },
  {
    id: 3,
    category: 'Website',
    title: '3105 Enterprice Website',
    banner: '/img/gallery/3-banner.png',
    thumbnail: '/img/gallery/3.png',
    gallery: [
      '/img/gallery/3.png',
      '/img/gallery/3-view-1.png',
      '/img/gallery/3-view-2.png',
    ],
    projectUrl: 'https://3105enterprise.com',
    overview: [
      '3105 Enterprise required a professional corporate website to present its business capabilities, team, and contact channels to partners and clients.',
      'The design prioritizes clarity, trust, and a structured presentation of company values and services.',
    ],
    problem: [
      'The business lacked a digital storefront that matched the quality of its offline operations. Important details were scattered across documents and social channels instead of one reliable source.',
      'Stakeholders needed a site that looked enterprise-ready without sacrificing speed or accessibility.',
    ],
    solution: [
      'I designed a corporate layout with dedicated sections for services, company background, and lead generation. Visual hierarchy guides visitors toward key actions.',
      'The build emphasizes performance, semantic markup, and responsive behavior so the site remains usable on phones, tablets, and desktops.',
    ],
  },
  {
    id: 4,
    category: 'Dashboard',
    title: 'Admin Dashboard',
    banner: '/img/gallery/4-banner.png',
    thumbnail: '/img/gallery/4.png',
    gallery: [
      '/img/gallery/4.png',
      '/img/gallery/4-view-1.png',
      '/img/gallery/4-view-2.png',
    ],
    projectUrl: null,
    overview: [
      'This admin dashboard gives teams a centralized place to monitor activity, manage users, and review key metrics at a glance.',
      'The interface was designed for daily operational use, with emphasis on readability, quick scanning, and efficient workflows.',
    ],
    problem: [
      'Operational data was spread across multiple tools, forcing admins to switch contexts and slowing down decision-making.',
      'Existing views were cluttered, making it difficult to spot trends or take action on important items quickly.',
    ],
    solution: [
      'I structured the dashboard around priority widgets: summary cards, data tables, filters, and status indicators that surface the most relevant information first.',
      'The UI uses consistent spacing, clear states, and reusable components so new modules can be added without redesigning the entire system.',
    ],
  },
]

export function getWorkById(id) {
  const numericId = Number(id)
  return works.find((work) => work.id === numericId) ?? null
}

export default works
