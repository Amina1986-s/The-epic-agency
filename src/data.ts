import { 
  Zap, Bot, GitMerge, Compass, Eye, Languages, 
  Database, ShieldCheck, Palette, FlaskConical,
  Activity, DollarSign, ShoppingBag, GraduationCap,
  Megaphone, Factory, Building, Headphones,
  Cpu, TrendingUp, BarChart3, Network
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tag?: string;
  icon: any;
  featuredImg?: string;
  metrics?: { label: string; value: string }[];
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  icon: any;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  portraitUrl: string;
  rating: number;
}

export interface CaseStudyItem {
  id: string;
  category: string;
  client: string;
  title: string;
  description: string;
  metrics: { label: string; value: string; percentage?: number }[];
  quote?: string;
  quoteAuthor?: string;
  quoteRole?: string;
  authorPortrait?: string;
  visualImgUrl: string;
}

// NAVIGATION
export const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'Services', id: 'services' },
  { name: 'Solutions', id: 'solutions' },
  { name: 'Case Studies', id: 'cases' },
  { name: 'Contact', id: 'contact' }
];

// SERVICES LIST (Bento-grid & Services view)
export const servicesData: ServiceItem[] = [
  {
    id: 'ai-automation',
    title: 'Cognitive Automation',
    description: 'Eliminate repetitive tasks with intelligent workflows that learn and adapt to your business environment in real-time. Optimize resource allocation and accelerate critical workflows.',
    icon: Zap,
    tag: 'Enterprise Ready',
    featuredImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWTINt7RCECgSYd1kyp64EkeC_N8IYI_gfuOc7CNL0B4L09BnuMKQOtnAGJU6pHJhKD3RqLSe-qGHAmvfLhhuipfaAxdqkGu53YMAy72wV2TMGrrZIL8OJhajHvBCnAc-u2eFRLaK3t-Zrv1D15GPydBQYSqfwut7MozjWbvaJ1jojUFo3rwkAqt2RooOjvKS-ocILcY0qZyKtfCdSJpLXj0HFehjWH24PnpHgEjvZYN5DH4rLimHYW5n1R_BHZChXBme6yQeB6w'
  },
  {
    id: 'custom-agents',
    title: 'Custom AI Agents',
    description: 'Deploy 24/7 digital specialists trained specifically on your proprietary data and operational goals, capable of processing nuanced customer demands.',
    icon: Bot,
    tag: 'v4.2 PRO'
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics',
    description: 'Turn raw data into actionable foresight. Forecast market trends, demand flows, and consumer behaviors with up to 99% accuracy driven by private models.',
    icon: TrendingUp
  },
  {
    id: 'enterprise-infra',
    title: 'Enterprise-Grade Infrastructure',
    description: 'Scalable, secure, and resilient architectures designed to support global operations without latency, backed by rigorous zero-trust frameworks.',
    icon: Network,
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Latency', value: '<2ms' }
    ]
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Predictive modeling and data science infrastructures that turn raw unstructured data into actionable strategic foresight and corporate advantage.',
    icon: GitMerge
  },
  {
    id: 'ai-consulting',
    title: 'AI Consulting',
    description: 'Strategic roadmap development for enterprises looking to integrate advanced machine learning models into their core operations safely and efficiently.',
    icon: Compass
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description: 'Advanced image and video analysis systems for automated quality control, remote surveying, physical security, and autonomous navigation.',
    icon: Eye
  },
  {
    id: 'nlp-systems',
    title: 'NLP Systems',
    description: 'Context-sensitive sentiment analysis, high-speed multilingual translation, and organic conversational interfaces that build emotional connection.',
    icon: Languages
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    description: 'Robust, compliant ingestion pipeline construction ensuring your AI agents receive optimal, clean, and real-time datastreams without interruption.',
    icon: Database
  },
  {
    id: 'ai-ethics',
    title: 'AI Ethics & Safety',
    description: 'Comprehensive compliance audits and custom alignment frameworks ensuring your models meet global corporate regulations and ethical standards.',
    icon: ShieldCheck
  },
  {
    id: 'generative-media',
    title: 'Generative Media',
    description: 'Production-grade visual generation engines, complex custom audio models, and high-stakes immersive marketing simulation assets.',
    icon: Palette
  },
  {
    id: 'rnd-lab',
    title: 'AI Innovation Lab (R&D)',
    description: 'Priority access to our experimental computation testing environments where we evaluate advanced agentic swarms, multi-modal neural links, and quantum-ready modeling.',
    icon: FlaskConical,
    tag: 'Apply for Access'
  }
];

// SOLUTIONS LIST (Solutions page)
export const solutionsData: SolutionItem[] = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Precision diagnostics and patient management systems driven by ethical neural networks and real-time biometric analysis.',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA6qUZg7WKOZ1Tl_qcCz5-RmW81bEeeQVG1bsTpXwXIr8QZ5i1MszF_Gfkdsq9QQZ_GfJEY3EsLBLHM5la76lHz1EqaNXoFcAHnjazrChC8CYy9hjmU-oeUQOZI9QgAR8D9YUMv-XB-XY_mR1Y3712JrTbr2SpCpKLHA4gR3JeTzUJa_KYX3otxfhH4AKNb5tY3HaSlWCOZ7_Q3RYlZQKKBj8m5mC_dKglsWecMDYK0oDefSVOk2dOQKXNYOUD3y4pzaXeScw6Mw',
    icon: Activity
  },
  {
    id: 'finance',
    title: 'Finance',
    description: 'Autonomous risk assessment, regulatory audits, and algorithmic fraud detection designed for the complex volatility of global financial markets.',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrEAdikYY72JUQ5pIHHzhi7XkFto4j6lU3sJmkXcdn2IA_iaNK0Y-Ro200iDlIfpMKmJBG5WBMQTgMZFImAijiuKy6RfO46ywi7lnKBDDTD2bv-UaOrOUWS1es4aR0W-SdGdcvU-bafYwSB5_cwEMZgDytBj_lyb03w9vKmGV90jAD6T6jgo2SEx0hx_dm5nOEBHDgPQaqb62uR1BQNlP1xnfZWTRW9nGcR0uI1EFU-uq_8rVmeyHLJsEa4IBgykJ2QRFvjhupfg',
    icon: DollarSign
  },
  {
    id: 'retail',
    title: 'Retail',
    description: 'Hyper-personalized automated consumer journeys, sensory marketing networks, and predictive retail omnichannel supply loops.',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcartSkONNjh8wxRrstt68ePklg798weecBFQdSoGHLITEsG_LRnsg_-UisTzaJR6ZLiULCWSRLKDYYIuTqB8zpwHmHhQ6IaT0GO4SkhAZXRj6G34MpNwHqZ5VR-CF0skE-wi7gENKFqQGjVQDoY1uJY3av8YZBNRnB3Oo-_a3M6he_YRp2z-BuKjbr6nieIWKzYOydp49JyF6wksKHdXppd_s6bsLGsd-yadYgQlXzhbHHz5qkrzFTnd0iUFc4odBuuRUnp-vFQ',
    icon: ShoppingBag
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Adaptive contextual learning platforms that co-evolve with the intellect, engineering custom modules and AI mentors for technical training.',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALFo_gL9l3lF-cNEaJUzQzvL_bLf4W_Axbl_I-qk6GDozC5RbYuvv8JRezg8ritiQg_3LIg5jjKAEiM2QjulMPEwtgdyTEoUz0R0kJvatAYc3jDL966yuYS_04qzQsUhC-ueVnVPwnjYtr22p498oF5pGXULYmUd5_cjQLLOjtUCBAVrmXL_Zi3q3zK4N34FlN40i36XAagwMR-A5C8d2VtLNXEjRarow_ctu7P1n-2lbyULooHiAuslXkzYkJxb8IdEQcHZKOwg',
    icon: GraduationCap
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Generative creative asset suites, real-time demand-intent mapping, and NLP sentiment sensors that forecast viral cultural trends.',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5ex5Pz_sr5ZZr24vwBRhT028krdihSlsds2a0Kr6o4eRCcr-FPzhqh_uDwFDrp56BpHkxjGhwgzEtySuF1eo3Auwe3aiBDqcjTQmgdWiIKQDn5wV9OT0UAnj5lCxeSyis9GWUNJop-FP0DrvBOfKtF02TlvxY2oc5nXYpfJCT0m1ulwhB9TcI8SfiCSYmItCHv1eEbPmYJp1HzL1HMbpBLM8RHO_CUzOvXS_bQ_SOohGE2nfz2_YDxXst6f-P0dkR4BSqppaSZA',
    icon: Megaphone
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'High-precision sensory predictive maintenance and smart kinetic robotics for zero-defect production arrays and autonomous logistics.',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUp7SkL5rHOokctdet-PBwrrHUfIcvy-RYMduKjX7iRrOwjCJggVQ2aFXkTp3Q0924rtovUOMfCQascZ_3rgDR_7rkbEjdwlaBefTgQfY56Ka-u0wFmZzjiK6he8BxosdlGHAi9btKYvbENmNJPmjBQE3YrFrNF4dS80Lnkw2KsSFz4gy6L1h7YHIGslqVsdaZrlq4_OdAqASEL_Vs5hnckEgldZ2kMyC7tgQAocsD5NWNPDy1vO5d_4iLDKkl3XBaN0Am4Ed-6A',
    icon: Factory
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Dynamic asset valuations, neural geographical tracking, and smart-property IoT matrices optimizing utility and climate footprint.',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhRaxo6iyKawY8za9F6OgQM8_V3SOUcb8mbkkf3Lh_N5gw8IdQvTyfCZK-oCGTzsvUZOESJoh8u69LuCuw-3Dr15JAGtT2iZ4_dKPjSMLup9D3i7bqjZ1WXmgEMpLnEjBuZPbkkv65aon18KDvgAd_piAKaDdmsjChGtBy02ZNsriudyWBHMGs_Bq3YembqtBFLc4pHIzsglalIMV1-zYo7Pgo0OhdurM-8Q61_z3CgKXZDP_EL8x5Cnd4261S38ln2crgLdwd6A',
    icon: Building
  },
  {
    id: 'customer-support',
    title: 'Customer Support',
    description: 'Autonomous customer agents delivering flawless multi-lingual empathy, immediate technical diagnostic solutions, and real-time database syncing.',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWB2iaO_RsOTDAplkruygtOjYlG5CQch3xUQFQlFcUDKzmFpSedrwlxVPcv6QwWiyjpUPlvpTlwy4UcAmiD44gqyY-Sbtb5T7pBcYPlDJp7DnABucftq6pl6rCQoTSdStmmDoo8wlB6Bk71sbabQS8fTGCUPztlIFKTk_c4lC0ihE_WcmDpdfVi3wE11pqHP_asza3nzajtzBRWvthMOqETJ9qmTMwYTg623ChvBMcPj0HVtG9jijXbhutj5KsyhsF4JzPkkEdQA',
    icon: Headphones
  }
];

// TESTIMONIALS
export const testimonialsData: TestimonialItem[] = [
  {
    quote: "AI Powerful Agency transformed our customer support overnight. Their agents handle 85% of queries with more empathy and accuracy than our human staff ever did. Pure magic.",
    author: "Marcus Sterling",
    role: "CEO, Zenith Global",
    portraitUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAip-aOnd3z6l75Y0bnP5Cor_ScjkAEFXkCLSNiQZH0xRX8onDx6UY1PiHpQ9Popu7KGrxCudY6jG780RqHa2hVq1nk8-wupsoH5M8693TcFS7VbFQW4lh7HMKVpGcDoTNuZBbBauELf6Tg72EUq_Md9J00aPCeULuFB55pKQ2zVoNLBvvHsvm0d0x3eCjMOEO986KA1AQO-OIPCmHlkWHkevke8bDNfjC9YJmXRr2hnSZ0X-KwXC0AgmfeTFtd4XiTa5keQLV-Sg",
    rating: 5
  },
  {
    quote: "The predictive analytics suite they built for us identified a $40M market gap that we were completely blind to. Their AI is not just software; it's a strategic partner.",
    author: "Sarah Chen",
    role: "CTO, HyperScale Inc.",
    portraitUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMqS2xdPynD4EsKE6_K6IkAJC1n8JGiqGBEKo4R4wZiH9hWGg3O0BHQVkw9lYXHqnPyAurh0xh0g2LwKcPEFZK39nzHOFSJPuacnSfw6Rzd_sDzaTehy6pPdIClJAzuD8SuHQFgPj6Ak_eH23keqGgf-LIve67-C-AXE6Slm5ihcApBmENlIy1bOL4LSc8c2jSmQ2zQGV1tYyHQmgUUqXkZ0gK5ZjqhHMz8sKDtTcbPBppYQ3WlOrbxWNgH5QdG_jfRpme-Alptw",
    rating: 5
  },
  {
    quote: "I've worked with many tech agencies, but none have the sheer technical firepower this team brings. They solved our data bottleneck in under 3 weeks.",
    author: "Julian Vane",
    role: "Managing Partner, Alpha Capital",
    portraitUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWavtsvR_KMSKIHKrh0ni6PdgAb6tyVtPunWeQ7qj_-KsbNblutzrrEQ82KZvgbdpxzIUyleGIjx2nySpvQUJ56umgzBLNbQYbH1wIaXK6yVuIVcydtxfYscNz4kx6razFCq9xpktKaKhm4xA9dGyuYv1smD64GuqJw4g4EcW5bx4RaWh9rzpU2BuZSbW3WTR82WUvulRhwNQARDiXbcS_T_Z6kx1jpbUrJYVU_folF9tAah8Jw6fKd79y5-Hy3r2pqKdgtzADSA",
    rating: 5
  }
];

// CASE STUDIES DETAIL
export const casesData: CaseStudyItem[] = [
  {
    id: 'risk-assessment',
    category: 'FINTECH',
    client: 'Global Capital Group',
    title: 'Autonomous Risk Assessment Pipeline',
    description: 'We implemented a real-time neural network to analyze cross-border transaction anomalies. The system replaced a manual review process involving 40 analysts, accelerating high-value clearances securely.',
    metrics: [
      { label: 'Decision Latency Speedup', value: '-94%', percentage: 94 },
      { label: 'Clearing Accuracy Rate', value: '99.98%', percentage: 100 }
    ],
    quote: "The integration was seamless. We didn't just automate; we evolved. The agency delivered a system that thinks three steps ahead of the market.",
    quoteAuthor: "Marcus Chen",
    quoteRole: "CTO",
    authorPortrait: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsJ_DJ6p48IrgtVWrwvnA9OuoMnTVyD7oTYU8TV38ZK8-sj99TJa4G8dXJ1fmv0s-qPwCIeD7CY_mvjEazS0jrXVn5DkVR2eCpqdgSQWSghMJxOKU2eaUpam-sdXVrGPUyJATsTr8mpTBWs7mSvL8nyuQZlG5-xsjDttEwj4iJLoLYQ2vh2NnEEIdCnEp8l5ExpXXYP4SmTjhiI9yAcwrIlhPCbTvUanTbmb46XyO8S3d0a78B8n_Jz9tbef7uN3orZaXD4W2UiA",
    visualImgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8SgmL_SZZAvXh1KzSOg9PgHJpHZ8d2_nN6wt3gDPRLfhmWLhFk6UFfxbWMT51JC8D8DoN5uxYMHOVcBOOeOe6sg-FwG2s65RXgEMfaU-RKtZLDTrFOEug7c82UqWl0fLQE1-8MEEihXsfCcQpIKtMg4AJFMJmM2763fbxCmefypxkmoMx4u2s4IOXZj5fRSAW5u87v87-i_HBy7ZlOCf848izs_GJKPL6FRPRUcHkt9rXf-_K-p_WjcLwoWIDpw-ztj2RcI3s_Q"
  },
  {
    id: 'neural-sync',
    category: 'MANUFACTURING',
    client: 'Nexus Industrial',
    title: 'Predictive Maintenance & Supply Neural-Sync',
    description: 'A custom-built AI engine forecasting supply chain bottlenecks 14 days before occurrence, synchronizing production lines with global logistics data and local hardware sensors.',
    metrics: [
      { label: 'Annual Margin Growth', value: '+$4.2M' },
      { label: 'Logistics Velocity', value: '320%' }
    ],
    visualImgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBta_c-HDSuZ2CQ87pMS4FsEkisOy0ycYv-MCfzLbyjkZrDTvsR85uwg52nCmeKamD879kZIUW4K7tmGQquSza7zGbS-7ki3fdQl56tO83m6LATSVwaYBLvDM8_C_LdYoSs5E4b8AVBXG6ZLJIaFUBWdLKxEL8FZPLOYQaxoQxVG1nau39aiWO48ALf3roxw0oTOrBt1o1sW-mlyzf6f2N2l1I06gX9QTcHi_un03LUcn4LwtBxNXCgkD7xkrOqKnHsA0pOWcJn0w"
  }
];

// FAQ SECTION
export const faqData = [
  {
    question: 'How long does custom model deployment take?',
    answer: 'Typical enterprise implementations range from 4 to 12 weeks depending on data complexity, pipeline architectures, and legacy system compatibility. We provide a full technical roadmap with clear milestones after our initial diagnostic consultation.'
  },
  {
    question: 'Is our corporate data used for global training?',
    answer: 'Absolutely not. We prioritize rigid enterprise security. Your proprietary corporate dataset remains in a strictly isolated, zero-trust virtual instance and is never used for training other client models or external global weights.'
  },
  {
    question: 'Do you offer ongoing technical maintenance?',
    answer: 'Yes, all of our custom enterprise systems include dedicated 24/7 technical monitoring SLA, real-time drift checking, and bi-weekly neural-weight optimizations to ensure performance remains optimal over time.'
  }
];
