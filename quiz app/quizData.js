let quizCategories = [
    {
        title: 'Frontend Development',
        subCategories: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
        title: 'Backend Development',
        subCategories: ['Node.js', 'Databases', 'APIs', 'Docker']
    },
    {
        title: 'Mathematics',
        subCategories: ['Algebra', 'Geometry', 'Statistics & Probability']
    },
    {
        title: 'Accounting',
        subCategories: [
            'Debit & Credit',
            'Assets & Expenses',
            'Liabilities, Revenue & Capital',
            'Financial Statements'
        ]
    },
    {
        title: 'Economics',
        subCategories: [
            'Basic Concepts',
            'Demand & Supply',
            'Market & Price',
            'National Income',
            'International Trade'
        ]
    },
    {
        title: 'General Knowledge',
        subCategories: ['Geography', 'General Science', 'Countries']
    },
    {
        title: 'Coming Soon...'
    }
]

let quizCards = {
    "HTML": [
        { title: "HTML Basics", level: "Beginner", questions: 10 },
        { title: "Forms & Inputs", level: "Beginner", questions: 8 },
        { title: "Semantic HTML", level: "Intermediate", questions: 12 }
    ],
    "CSS": [
        { title: "CSS Fundamentals", level: "Beginner", questions: 10 },
        { title: "Flexbox & Grid", level: "Intermediate", questions: 14 },
        { title: "Responsive Design", level: "Intermediate", questions: 12 }
    ],
    "JavaScript": [
        { title: "JS Basics", level: "Beginner", questions: 12 },
        { title: "Arrays & Objects", level: "Intermediate", questions: 15 },
        { title: "DOM Manipulation", level: "Intermediate", questions: 10 },
        { title: "Fetch & Modules", level: "Intermediate", questions: 20 }
    ],
    "React": [
        { title: "JSX & Components", level: "Beginner", questions: 8 },
        { title: "State & Props", level: "Intermediate", questions: 12 },
        { title: "Hooks", level: "Intermediate", questions: 10 }
    ],
    "Node.js": [
        { title: "Node Basics", level: "Beginner", questions: 10 },
        { title: "Express.js", level: "Intermediate", questions: 12 },
        { title: "Middleware", level: "Intermediate", questions: 8 }
    ],
    "Databases": [
        { title: "SQL Basics", level: "Beginner", questions: 12 },
        { title: "NoSQL Introduction", level: "Intermediate", questions: 10 },
        { title: "Joins & Queries", level: "Intermediate", questions: 14 }
    ],
    "APIs": [
        { title: "REST API", level: "Beginner", questions: 10 },
        { title: "HTTP Methods", level: "Beginner", questions: 8 },
        { title: "Authentication", level: "Intermediate", questions: 12 }
    ],
    "Docker": [
        { title: "Docker Basics", level: "Beginner", questions: 10 },
        { title: "Containers & Images", level: "Intermediate", questions: 10 },
        { title: "Docker Compose", level: "Intermediate", questions: 8 }
    ],
    "Algebra": [
        { title: "Linear Equations", level: "Beginner", questions: 12 },
        { title: "Quadratic Equations", level: "Intermediate", questions: 10 },
        { title: "Polynomials", level: "Intermediate", questions: 8 }
    ],
    "Geometry": [
        { title: "Triangles & Circles", level: "Beginner", questions: 12 },
        { title: "Coordinate Geometry", level: "Intermediate", questions: 10 },
        { title: "3D Shapes", level: "Intermediate", questions: 8 }
    ],
    "Statistics & Probability": [
        { title: "Mean, Median, Mode", level: "Beginner", questions: 10 },
        { title: "Probability Basics", level: "Intermediate", questions: 12 },
        { title: "Distributions", level: "Intermediate", questions: 10 }
    ],
    "Debit & Credit": [
        { title: "Basic Rules", level: "Beginner", questions: 10 },
        { title: "Journal Entries", level: "Intermediate", questions: 12 },
        { title: "Ledger Posting", level: "Intermediate", questions: 10 }
    ],
    "Assets & Expenses": [
        { title: "Asset Types", level: "Beginner", questions: 8 },
        { title: "Expense Classification", level: "Beginner", questions: 10 },
        { title: "Expense Recording", level: "Intermediate", questions: 12 }
    ],
    "Liabilities, Revenue & Capital": [
        { title: "Liabilities Basics", level: "Beginner", questions: 10 },
        { title: "Revenue Recognition", level: "Intermediate", questions: 12 },
        { title: "Capital Accounts", level: "Intermediate", questions: 8 }
    ],
    "Financial Statements": [
        { title: "Income Statement", level: "Intermediate", questions: 12 },
        { title: "Balance Sheet", level: "Intermediate", questions: 10 },
        { title: "Cash Flow Statement", level: "Intermediate", questions: 10 }
    ],
    "Basic Concepts": [
        { title: "Introduction to Economics", level: "Beginner", questions: 10 },
        { title: "Scarcity & Choice", level: "Beginner", questions: 8 },
        { title: "Opportunity Cost", level: "Intermediate", questions: 10 }
    ],
    "Demand & Supply": [
        { title: "Law of Demand", level: "Beginner", questions: 10 },
        { title: "Law of Supply", level: "Beginner", questions: 12 },
        { title: "Market Equilibrium", level: "Intermediate", questions: 10 }
    ],
    "Market & Price": [
        { title: "Price Determination", level: "Intermediate", questions: 12 },
        { title: "Price Elasticity", level: "Intermediate", questions: 10 },
        { title: "Government Intervention", level: "Intermediate", questions: 8 }
    ],
    "National Income": [
        { title: "GDP Basics", level: "Intermediate", questions: 10 },
        { title: "GNP & NNP", level: "Intermediate", questions: 8 },
        { title: "Income Methods", level: "Intermediate", questions: 12 }
    ],
    "International Trade": [
        { title: "Trade Theories", level: "Intermediate", questions: 10 },
        { title: "Balance of Payments", level: "Intermediate", questions: 10 },
        { title: "Trade Policies", level: "Intermediate", questions: 8 }
    ],
    "Geography": [
        { title: "Continents & Oceans", level: "Beginner", questions: 10 },
        { title: "Countries & Capitals", level: "Beginner", questions: 12 },
        { title: "Physical Geography", level: "Intermediate", questions: 10 }
    ],
    "General Science": [
        { title: "Physics Basics", level: "Beginner", questions: 10 },
        { title: "Chemistry Basics", level: "Beginner", questions: 12 },
        { title: "Biology Basics", level: "Intermediate", questions: 10 }
    ],
    "Countries": [
        { title: "Country Facts", level: "Beginner", questions: 10 },
        { title: "Flags & Capitals", level: "Beginner", questions: 12 },
        { title: "Historical Events", level: "Intermediate", questions: 10 }
    ]
}

export { quizCategories }
export { quizCards }