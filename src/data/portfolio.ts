import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Jainab Bee",
    "title": "Software Engineering Student",
    "email": "jainabbee94@gmail.com",
    "phone": "+91 9509310354",
    "linkedin": "linkedin.com/in/jainab-bee",
    "github": "",
    "location": "",
    "summary": "Software engineering student with a strong foundation in C, C++, Java, and Python. Experienced in full-stack web development with a focus on data structures, algorithms, and emerging technologies including AI/ML, Web3, and blockchain. Proven ability to build scalable applications and contribute to open source projects."
  },
  "experience": [
    {
      "title": "Web Development Intern",
      "company": "KistechnoSoftware InHouse",
      "dates": "July 2025 - August 2025",
      "description": "Developed a full-stack Expense Tracker application using various web technologies.",
      "highlights": [
        "Implemented user authentication, transaction management, and automated financial reporting features.",
        "Designed responsive UI and integrated database with backend logic for seamless data flow and storage."
      ]
    },
    {
      "title": "Open Source Contributor",
      "company": "GirlScript Summer of Code",
      "dates": "July 2025 - October 2025",
      "description": "Contributed code to multiple open-source repositories, improving functionality and fixing bugs.",
      "highlights": [
        "Collaborated with global developer community using Git, GitHub, and agile methodologies."
      ]
    },
    {
      "title": "Scholar - Web3 & Blockchain",
      "company": "SheFi Program",
      "dates": "June 2025 - August 2025",
      "description": "Completed intensive training in Web3, blockchain technology, and decentralized finance.",
      "highlights": [
        "Applied knowledge through collaborative coding challenges and blockchain development projects."
      ]
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Technology - Computer Science Engineering (AI)",
      "institution": "Swami Keshvanand Institute of Technology, Jaipur",
      "years": "Sept 2024 - Sept 2028",
      "gpa": "9.68/10.0"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "Expense Tracker Application",
      "description": "Built responsive web application for financial management with CRUD operations and data visualization.",
      "technologies": [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "MySQL",
        "Supabase"
      ],
      "link": "",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "falling-snow",
  "about": "split",
  "experience": "timeline",
  "projects": "grid",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "modern",
  "colorPalette": "slate"
};
