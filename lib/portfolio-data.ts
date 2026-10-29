export const profile = {
  name: 'Mark P. Norbe',
  title: 'AI Automation Specialist',
  subtitle: 'Workflow Automation Builder · CRM Automation',
  intro:
    'I help businesses streamline repetitive tasks, automate lead management, improve customer communication, and connect their business tools using AI and workflow automation.',
  summary:
    'Hands-on project experience designing and testing workflow automations, CRM processes, application integrations, and AI-assisted content workflows — backed by previous corporate systems-support experience. Focused on reliable, maintainable solutions that save time and reduce manual work.',
  email: 'marknorbe02@gmail.com',
  phone: '+639228026424',
  phoneDisplay: '+63 922 802 6424',
  location: 'Philippines',
  tools: ['n8n', 'Zapier', 'Make.com', 'GoHighLevel', 'ChatGPT', 'Google Workspace'],
}

export const services = [
  {
    title: 'Workflow Automation',
    description:
      'Automated workflows that connect business applications, reduce manual work, and streamline repetitive processes using n8n, Zapier, and Make.com.',
    icon: 'workflow',
  },
  {
    title: 'AI Chatbots & Customer Support',
    description:
      'AI-powered chatbots that answer customer inquiries, capture leads, provide information, and support customer engagement.',
    icon: 'bot',
  },
  {
    title: 'CRM & Lead Management',
    description:
      'Automated lead capture, contact management, tagging, pipeline updates, lead assignment, and follow-up sequences in GoHighLevel.',
    icon: 'users',
  },
  {
    title: 'Appointment Booking',
    description:
      'Booking forms, Google Calendar, and automated notifications connected to simplify scheduling and reduce manual coordination.',
    icon: 'calendar',
  },
  {
    title: 'Sales & Marketing Automation',
    description:
      'Automated lead nurturing, email follow-ups, campaign workflows, and customer engagement processes.',
    icon: 'megaphone',
  },
  {
    title: 'Business Process Automation',
    description:
      'Google Sheets, Forms, Gmail, Calendar, and other apps connected into more efficient business operations.',
    icon: 'boxes',
  },
] as const

export const experience = [
  {
    role: 'AI Automation Specialist & Workflow Automation Builder',
    org: 'Independent Projects & Portfolio Development',
    period: '2026 — Present',
    summary:
      'Developing practical automation solutions that show how AI and workflow tools can improve business processes.',
    points: [
      'Build and troubleshoot multi-step workflows using n8n.',
      'Develop integrations between webhooks, Google Sheets, Google Calendar, Telegram, and other applications.',
      'Design CRM pipelines, lead capture forms, tags, and automated follow-up workflows in GoHighLevel.',
      'Explore cross-platform automation using Zapier and Make.com.',
      'Integrate AI models into structured workflows for content generation, information processing, and decision support.',
      'Test workflows, troubleshoot integration issues, and improve automation reliability.',
      'Document workflow logic, business processes, and implementation steps.',
    ],
  },
  {
    role: 'SAP Functional Support Specialist',
    org: 'Project Systems & Materials Management · Corporate',
    period: 'Previous',
    summary:
      'Supported SAP Project Systems (PS) and Materials Management (MM) business processes.',
    points: [
      'Assisted users with application issues, troubleshooting, and functional support.',
      'Investigated system errors and coordinated issue resolution.',
      'Supported documentation, process understanding, and communication between business users and technical teams.',
      'Built transferable skills in systems analysis, problem-solving, process improvement, and business application support.',
    ],
  },
]

export const projects = [
  {
    number: '01',
    title: 'ABC Solar Solutions',
    subtitle: 'Lead Generation & CRM Automation',
    stack: ['GoHighLevel'],
    description:
      'A practice funnel and automation workflow for a solar installation business.',
    features: [
      'Landing page & form lead capture',
      'CRM contact creation and tagging',
      'Opportunity pipeline management',
      'Automated lead follow-up',
      'Appointment booking & calendar sync',
    ],
    value:
      'Shows how solar businesses can organize incoming leads and standardize their sales follow-up.',
  },
  {
    number: '02',
    title: 'FlowForge Trading Engine',
    subtitle: 'Event-Driven Reporting Workflow',
    stack: ['n8n', 'MetaTrader 5', 'Webhooks', 'Google Sheets', 'Telegram'],
    description:
      'An automated trading-data and reporting workflow connected to an MT5 Expert Advisor.',
    features: [
      'Trade data transmission via webhooks',
      'Automated trade-result processing',
      'Win / loss / break-even classification',
      'Trade logging and reporting',
      'Telegram notifications',
    ],
    value:
      'Demonstrates API integration, event-driven automation, structured data handling, and automated reporting.',
  },
  {
    number: '03',
    title: 'Appointment Booking Automation',
    subtitle: 'Scheduling Workflow',
    stack: ['n8n', 'Google Calendar', 'Google Sheets'],
    description:
      'Workflows that process appointment information and create calendar events automatically.',
    features: [
      'Automated appointment data processing',
      'Google Calendar event creation',
      'Google Sheets integration',
      'Date and timezone handling',
      'Conditional logic and scheduling rules',
    ],
    value: 'Reduces manual scheduling and data-entry tasks.',
  },
  {
    number: '04',
    title: 'AI-Powered Devotional Content',
    subtitle: 'Content Production Workflow',
    stack: ['n8n', 'ChatGPT', 'Google Drive', 'Canva'],
    description:
      'A workflow concept for organizing and producing devotional content at a consistent cadence.',
    features: [
      'AI-assisted devotional writing',
      'Structured verse, reflection & prayer content',
      'Themed background asset organization',
      'Reusable content templates',
    ],
    value: 'Shows how AI and automation can support consistent content creation.',
  },
  {
    number: '05',
    title: 'Home Care Service Management',
    subtitle: 'Web App Concept',
    stack: ['Web App', 'Booking', 'Payments'],
    description:
      'A web application concept for managing home care operations and service booking.',
    features: [
      'Client-facing service booking',
      'Caregiver shift management',
      'Service & appointment coordination',
      'Client information management',
      'Online payments',
    ],
    value: 'In development — concept and requirements stage.',
  },
]

export type Testimonial = { quote: string; name: string; business: string }

/** Add real client testimonials here once you have their permission. */
export const testimonials: Testimonial[] = []

export const expectations = [
  {
    title: 'Clear communication',
    description:
      'Plain-language updates at every step, so you always know what is being built and why.',
  },
  {
    title: 'Reliable, tested workflows',
    description:
      'Every automation is tested against real scenarios and edge cases before it goes live.',
  },
  {
    title: 'Documented handover',
    description:
      'You receive documentation of the workflow logic so your team can understand and maintain it.',
  },
]

export const skills = [
  { group: 'Workflow Automation', items: 'n8n, Zapier, Make.com' },
  { group: 'CRM & Sales', items: 'GoHighLevel' },
  { group: 'AI Tools', items: 'ChatGPT, AI-assisted workflow design' },
  { group: 'Integrations', items: 'Webhooks, APIs, JSON, app connectors' },
  { group: 'Google Workspace', items: 'Sheets, Forms, Gmail, Calendar, Drive' },
  { group: 'Messaging', items: 'Telegram, chatbot integrations' },
]
