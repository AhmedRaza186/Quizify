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
            'Price',
            'National Income',
            'International Trade'
        ]
    },
    {
        title: 'General Knowledge',
        subCategories: ['Geography', 'General Science', 'Fun Play']
    },
    {
        title: 'Coming Soon...'
    }
]


let quizCards = {
    "HTML": [
        {
            title: "HTML Basics", level: "Beginner", questions: 10,
            img: './quizAssets/frontend/HTML/1.png'
        },
        {
            title: "Forms & Inputs", level: "Beginner", questions: 8,
            img: './quizAssets/frontend/HTML/2.png'
        },
        {
            title: "Semantic HTML", level: "Intermediate", questions: 12,
            img: './quizAssets/frontend/HTML/3.png'
        }
    ],
    "CSS": [
        {
            title: "CSS Fundamentals", level: "Beginner", questions: 10,
            img: './quizAssets/frontend/CSS/1.png'
        },
        {
            title: "Flexbox & Grid", level: "Intermediate", questions: 14,
            img: './quizAssets/frontend/CSS/2.png'
        },
        {
            title: "Responsive Design", level: "Intermediate", questions: 12,
            img: './quizAssets/frontend/CSS/3.png'
        }
    ],
    "JavaScript": [
        {
            title: "JS Basics", level: "Beginner", questions: 12,
            img: './quizAssets/frontend/JS/1.png'
        },
        {
            title: "Arrays & Objects", level: "Intermediate", questions: 15,
            img: './quizAssets/frontend/JS/2.png'
        },
        {
            title: "DOM Manipulation", level: "Intermediate", questions: 10,
            img: './quizAssets/frontend/JS/3.png'
        },
        {
            title: "Fetch & Modules", level: "Intermediate", questions: 20,
            img: './quizAssets/frontend/JS/4.png'
        }
    ],
    "React": [
        {
            title: "JSX & Components", level: "Beginner", questions: 8,
            img: './quizAssets/frontend/React/1.png'
        },
        {
            title: "State & Props", level: "Intermediate", questions: 12,
            img: './quizAssets/frontend/React/2.png'
        },
        {
            title: "Hooks", level: "Intermediate", questions: 10,
            img: './quizAssets/frontend/React/3.png'
        }
    ],
    "Node.js": [
        {
            title: "Node Basics", level: "Beginner", questions: 10,
            img: './quizAssets/backend/Node.js/1.png'
        },
        {
            title: "Express.js", level: "Intermediate", questions: 12,
            img: './quizAssets/backend/Node.js/2.png'
        },
        {
            title: "Middleware", level: "Intermediate", questions: 8,
            img: './quizAssets/backend/Node.js/3.png'
        }
    ],
    "Databases": [
        {
            title: "SQL Basics", level: "Beginner", questions: 12,
            img: './quizAssets/backend/Databases/1.png'
        },
        {
            title: "NoSQL Introduction", level: "Intermediate", questions: 10,
            img: './quizAssets/backend/Databases/2.png'
        },
        {
            title: "Joins & Queries", level: "Intermediate", questions: 14,
            img: './quizAssets/backend/Databases/3.png'
        }
    ],
    "APIs": [
        {
            title: "REST API", level: "Beginner", questions: 10,
            img: './quizAssets/backend/APIs/1.png'
        },
        {
            title: "HTTP Methods", level: "Beginner", questions: 8,
            img: './quizAssets/backend/APIs/2.png'
        },
        {
            title: "Authentication", level: "Intermediate", questions: 12,
            img: './quizAssets/backend/APIs/3.png'
        }
    ],
    "Docker": [
        {
            title: "Docker Basics", level: "Beginner", questions: 10,
            img: './quizAssets/backend/Docker/1.png'
        },
        {
            title: "Containers & Images", level: "Intermediate", questions: 10,
            img: './quizAssets/backend/Docker/2.png'
        },
        {
            title: "Docker Compose", level: "Intermediate", questions: 8,
            img: './quizAssets/backend/Docker/3.png'
        }
    ],
    "Algebra": [
        {
            title: "Linear Equations", level: "Beginner", questions: 12,
            img: './quizAssets/Mathemetics/Algebra/1.png'
        },
        {
            title: "Quadratic Equations", level: "Intermediate", questions: 10,
            img: './quizAssets/Mathemetics/Algebra/2.png'
        },
        {
            title: "Polynomials", level: "Intermediate", questions: 8,
            img: './quizAssets/Mathemetics/Algebra/3.png'
        }
    ],
    "Geometry": [
        {
            title: "Triangles & Circles", level: "Beginner", questions: 12,
            img: './quizAssets/Mathemetics/Geometry/1.png'
        },
        {
            title: "Coordinate Geometry", level: "Intermediate", questions: 10,
            img: './quizAssets/Mathemetics/Geometry/2.png'
        },
        {
            title: "3D Shapes", level: "Intermediate", questions: 8,
            img: './quizAssets/Mathemetics/Geometry/3.png'
        }
    ],
    "Statistics & Probability": [
        {
            title: "Mean, Median, Mode", level: "Beginner", questions: 10,
            img: './quizAssets/Mathemetics/Statistics/1.png'
        },
        {
            title: "Probability Basics", level: "Intermediate", questions: 12,
            img: './quizAssets/Mathemetics/Statistics/2.png'
        },
        {
            title: "Distributions", level: "Intermediate", questions: 10,
            img: './quizAssets/Mathemetics/Statistics/3.png'
        }
    ],
    "Debit & Credit": [
        {
            title: "Basic Rules", level: "Beginner", questions: 10,
            img: './quizAssets/Accounting/Debit-Credit/1.png'
        },
        {
            title: "Journal Entries", level: "Intermediate", questions: 12,
            img: './quizAssets/Accounting/Debit-Credit/2.png'
        },
        {
            title: "Trial Balance", level: "Intermediate", questions: 10,
            img: './quizAssets/Accounting/Debit-Credit/3.png'
        }
    ],
    "Assets & Expenses": [
        {
            title: "Asset Types", level: "Beginner", questions: 8,
            img: './quizAssets/Accounting/Assets-Exp/1.png'
        },
        {
            title: "Expense Classification", level: "Beginner", questions: 10,
            img: './quizAssets/Accounting/Assets-Exp/2.png'
        },
        {
            title: "Expense Recording", level: "Intermediate", questions: 12,
            img: './quizAssets/Accounting/Assets-Exp/3.png'
        }
    ],
    "Liabilities, Revenue & Capital": [
        {
            title: "Liabilities Basics", level: "Beginner", questions: 10,
            img: './quizAssets/Accounting/Liabilities,Revenue-Capital/1.png'
        },
        {
            title: "Revenue Recognition", level: "Intermediate", questions: 12,
            img: './quizAssets/Accounting/Liabilities,Revenue-Capital/2.png'
        },
        {
            title: "Capital Accounts", level: "Intermediate", questions: 8,
            img: './quizAssets/Accounting/Liabilities,Revenue-Capital/3.png'
        }
    ],
    "Financial Statements": [
        {
            title: "Income Statement", level: "Intermediate", questions: 12,
            img: './quizAssets/Accounting/Financial Statements/1.png'
        },
        {
            title: "Balance Sheet", level: "Intermediate", questions: 10,
            img: './quizAssets/Accounting/Financial Statements/2.png'
        },
        {
            title: "Cash Flow Statement", level: "Intermediate", questions: 10,
            img: './quizAssets/Accounting/Financial Statements/3.png'
        }
    ],
    "Basic Concepts": [
        {
            title: "Introduction to Economics", level: "Beginner", questions: 10,
            img: './quizAssets/Economics/Concepts/1.png'
        },
        {
            title: "Scarcity & Choice", level: "Beginner", questions: 8,
            img: './quizAssets/Economics/Concepts/2.png'
        },
        {
            title: "Opportunity Cost", level: "Intermediate", questions: 10,
            img: './quizAssets/Economics/Concepts/3.png'
        }
    ],
    "Demand & Supply": [
        {
            title: "Law of Demand", level: "Beginner", questions: 10,
            img: './quizAssets/Economics/Demand-Supply/1.png'
        },
        {
            title: "Law of Supply", level: "Beginner", questions: 12,
            img: './quizAssets/Economics/Demand-Supply/2.png'
        },
        {
            title: "Market Equilibrium", level: "Intermediate", questions: 10,
            img: './quizAssets/Economics/Demand-Supply/3.png'
        }
    ],
    "Price": [
        {
            title: "Price Determination", level: "Intermediate", questions: 12,
            img: './quizAssets/Economics/Price/1.png'
        },
        {
            title: "Price Elasticity", level: "Intermediate", questions: 10,
            img: './quizAssets/Economics/Price/2.png'
        },
        {
            title: "Price Theory", level: "Intermediate", questions: 8,
            img: './quizAssets/Economics/Price/3.png'
        }
    ],
    "National Income": [
        {
            title: "GDP Basics", level: "Intermediate", questions: 10,
            img: './quizAssets/Economics/National Income/1.png'
        },
        {
            title: "GNP & NNP", level: "Intermediate", questions: 8,
            img: './quizAssets/Economics/National Income/2.png'
        },
        {
            title: "Income Methods", level: "Intermediate", questions: 12,
            img: './quizAssets/Economics/National Income/3.png'
        }
    ],
    "International Trade": [
        {
            title: "Trade Theories", level: "Intermediate", questions: 10,
            img: './quizAssets/Economics/International Trade/1.png'
        },
        {
            title: "Balance of Payments", level: "Intermediate", questions: 10,
            img: './quizAssets/Economics/International Trade/2.png'
        },
        {
            title: "Trade Policies", level: "Intermediate", questions: 8,
            img: './quizAssets/Economics/International Trade/3.png'
        }
    ],
    "Geography": [
        {
            title: "Continents & Oceans", level: "Beginner", questions: 10,
            img: './quizAssets/GK/Geography/1.png'
        },
        {
            title: "Countries & Capitals", level: "Beginner", questions: 12,
            img: './quizAssets/GK/Geography/2.png'
        },
        {
            title: "Physical Geography", level: "Intermediate", questions: 10,
            img: './quizAssets/GK/Geography/3.png'
        }
    ],
    "General Science": [
        {
            title: "Chemistry Basics", level: "Beginner", questions: 12,
            img: './quizAssets/GK/General Science/1.png'
        },
        {
            title: "Physics Basics", level: "Beginner", questions: 10,
            img: './quizAssets/GK/General Science/2.png'
        },
        {
            title: "Biology Basics", level: "Intermediate", questions: 10,
            img: './quizAssets/GK/General Science/3.png'
        }
    ],
    "Fun Play": [
        {
            title: "Flags & Countries", questions: 10,
            img: './quizAssets/GK/Fun/1.png'
        },
        {
            title: "Logos & Brands", questions: 10,
            img: './quizAssets/GK/Fun/2.png'
        },
        {
            title: "Symbols & Signs", questions: 8,
            img: './quizAssets/GK/Fun/3.png'
        }
    ]
}

export { quizCategories }
export { quizCards }