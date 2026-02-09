export const profile = {
  name: "JOSEPH RAJU MYLA",
  headline: "Trust & Safety | Content Review Specialist | Data-Driven Analyst",
  location: "Dublin, Ireland",
  phone: "+353 83 392 6542",
  email: "josephmyla987@gmail.com",
  linkedIn: "https://www.linkedin.com/in/joseph-raju-myla-18979514a",
  profileImage: "/profile.JPG",

  summary:
    "Detail-oriented Trust & Safety professional combining analytical expertise with disciplined content review, strong emotional resilience, and policy adherence. Experienced in evaluating high-volume user content, applying evolving guidelines, and conducting thorough investigations with objectivity and accuracy.",

  summaryShort:
    "Trust & Safety professional combining analytical expertise with content review, emotional resilience, and policy adherence. Committed to safeguarding online communities.",

  competencies: [
    "Emotional Resilience & Stress Management",
    "Communication (strong written and verbal English)",
    "Objectivity & Integrity",
    "Attention to Detail",
    "Critical Thinking",
    "Cultural Awareness",
    "Teamwork & Independence",
    "Flexible Scheduling (24/7 ops)",
    "Adaptability",
    "Quality & Efficiency",
  ],

  experience: [
    {
      company: "Amazon",
      location: "Dublin, Ireland",
      title: "Operations Associate – Process & Data Quality Support",
      dates: "Oct 2025 – Present",
      responsibilities: [
        "Apply guidelines to review, classify, and validate operational data and system content.",
        "Investigate complex content and data issues, escalate as needed, and support resolution with technical partners.",
        "Work with cross-functional teams to refine policies, improve workflows, and ensure adherence to quality and compliance standards.",
        "Document process flows, classification criteria, and quality checkpoints to strengthen operational consistency.",
      ],
      achievements: [
        "Improved data quality review scores by identifying systematic inconsistencies and recommending corrective actions.",
        "Reduced average resolution time for data quality escalations by ~20% through improved workflow and documentation.",
      ],
    },
    {
      company: "Infosys Limited",
      location: "India",
      title: "Data Analyst / Junior Data Engineering Support",
      dates: "Aug 2021 – Dec 2023",
      responsibilities: [
        "Performed detailed data profiling and validation to ensure accuracy across enterprise systems.",
        "Applied structured rulesets and logic to classify data for reporting and quality monitoring.",
        "Automated recurring reports and enhanced dashboard visibility to support KPI tracking and performance evaluation.",
        "Collaborated with stakeholders to clarify requirements and translate business needs into technical solutions.",
      ],
      achievements: [
        "Automated 50+ recurring reports, saving ~40 hours per month and increasing reliability of performance data.",
        "Built dashboard tools reducing manual effort by ~70%, leading to faster insights and more informed decision-making.",
      ],
    },
  ],

  education: [
    {
      degree: "Master's degree in Data Analytics",
      institution: "National College of Ireland",
      dates: "2024 – 2025",
    },
    {
      degree: "Bachelor's degree in Computer Science and Engineering",
      institution: "Lovely Professional University",
      dates: "2016 – 2020",
    },
  ],

  certifications: [
    { name: "Deloitte – Data Analytics Job Simulation" },
    { name: "IBM – Data Fundamentals" },
  ],

  skills: {
    "Trust & Safety": [
      "Content Review",
      "Policy Adherence",
      "Escalation Workflows",
      "Quality & Compliance",
    ],
    "Data Quality": [
      "Data Profiling",
      "Classification & Validation",
      "Process Documentation",
      "Operational Consistency",
    ],
    "Analysis & Reporting": [
      "Data Analysis",
      "Dashboard Development",
      "KPI Tracking",
      "Automated Reporting",
    ],
    "Collaboration": [
      "Cross-functional Teams",
      "Stakeholder Communication",
      "Requirements Translation",
      "Technical Solutions",
    ],
  },

  additionalInfo: [
    "Comfortable and flexible 24/7 shift schedules.",
    "Strong emotional resilience and commitment to quality outcomes in fast-paced, sensitive content environments.",
    "Excellent communication, teamwork, and analytical skills.",
  ],
} as const;

export type Profile = typeof profile;
