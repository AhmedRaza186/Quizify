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
            img: './quizAssets/frontend/HTML/1.png',
            questionsDetails: {
                questions: [{
                    order: 1,
                    question: "What does HTML stand for?",
                    options: ["Hyperlinks and Text Markup Language", "HyperText Markup Language", "Home Tool Markup Language", "Hyper Tool Management Language"],
                    correct: 1,
                    time: 30
                },
                {
                    order: 2,
                    question: "Who is making the Web standards?",
                    options: ["Google", "The World Wide Web Consortium (W3C)", "Microsoft", "Mozilla"],
                    correct: 1,
                    time: 30

                },
                {
                    order: 3,
                    question: "Which HTML element is used to define the document title?",
                    options: ["<head>", "<meta>", "<title>", "<header>"],
                    correct: 2,
                    time: 30

                },
                {
                    order: 4,
                    question: "What is the correct HTML element for inserting a line break?",
                    options: ["<break>", "<lb>", "<br>", "<hr>"],
                    correct: 2,
                    time: 30

                },
                {
                    order: 5,
                    question: "Which character is used to indicate an end(closing) tag?",
                    options: ["<", "/", "*", "^"],
                    correct: 1,
                    time: 30

                },
                {
                    order: 6,
                    question: "How can you make a numbered list in HTML?",
                    options: ["<ul>", "<list>", "<ol>", "<dl>"],
                    correct: 2,
                    time: 30

                },
                {
                    order: 7,
                    question: "Which HTML element is used to define an unordered list?",
                    options: ["<ul>", "<ol>", "<list>", "<dl>"],
                    correct: 0,
                    time: 30

                },
                {
                    order: 8,
                    question: "What is the correct HTML for making a checkbox?",
                    options: ["<input type='check'>", "<checkbox>", "<input type='checkbox'>", "<check>"],
                    correct: 2,
                    time: 30

                },
                {
                    order: 9,
                    question: "Which HTML element is used to specify a footer for a document or section?",
                    options: ["<bottom>", "<section>", "<footer>", "<aside>"],
                    correct: 2,
                    time: 30

                },
                {
                    order: 10,
                    question: "What is the correct HTML element for playing video files?",
                    options: ["<media>", "<video>", "<movie>", "<play>"],
                    correct: 1,
                    time: 30

                }
                ],
                hints: 0,
            }

        },
        {
            title: "Forms & Inputs", level: "Beginner", questions: 8,
            img: './quizAssets/frontend/HTML/2.png',
            questionsDetails: {
                questions: [
                    {
                        order: 1,
                        question: "Which HTML element is used to create a form?",
                        options: ["<input>", "<form>", "<fieldset>", "<search>"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 2,
                        question: "Which attribute is used to specify where to send the form-data when a form is submitted?",
                        options: ["method", "target", "action", "src"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 3,
                        question: "Which input type is best for entering a secret password?",
                        options: ["type='text'", "type='hidden'", "type='secret'", "type='password'"],
                        correct: 3,
                        time: 30
                    },
                    {
                        order: 4,
                        question: "How do you create a multi-line text input field?",
                        options: ["<input type='textarea'>", "<textblock>", "<textarea>", "<input type='textbox'>"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 5,
                        question: "Which attribute must be present on an input for its value to be sent during form submission?",
                        options: ["id", "name", "class", "value"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 6,
                        question: "How do you group related data in a form?",
                        options: ["<group>", "<section>", "<fieldset>", "<area>"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 7,
                        question: "Which input type allows the user to select ONLY ONE option from a list?",
                        options: ["type='checkbox'", "type='radio'", "type='list'", "type='select'"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 8,
                        question: "Which attribute is used to set a pre-defined value for an input field?",
                        options: ["placeholder", "value", "text", "default"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 9,
                        question: "What is the purpose of the <label> element?",
                        options: ["To style the text", "To define a clickable caption for an input", "To create a tooltip", "To validate the input"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 10,
                        question: "Which HTML5 attribute specifies that an input field must be filled out before submitting?",
                        options: ["validate", "important", "required", "needed"],
                        correct: 2,
                        time: 30
                    }
                ],
                hints: 0
            }

        },
        {
            title: "Semantic HTML", level: "Intermediate", questions: 12,
            img: './quizAssets/frontend/HTML/3.png',
            questionsDetails: {
                questions: [
                    {
                        order: 1,
                        question: "Which HTML element is used to define the main navigation block?",
                        options: ["<navigation>", "<nav>", "<menu>", "<links>"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 2,
                        question: "Which element represents a self-contained content like a blog post or news article?",
                        options: ["<section>", "<article>", "<div>", "<aside>"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 3,
                        question: "Which tag should be used for content that is tangentially related to the content around it (like a sidebar)?",
                        options: ["<aside>", "<sidebar>", "<related>", "<section>"],
                        correct: 0,
                        time: 30
                    },
                    {
                        order: 4,
                        question: "Which element defines the footer for a document or a section?",
                        options: ["<bottom>", "<end>", "<footer>", "<base>"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 5,
                        question: "What is the correct semantic element for a header of a document or section?",
                        options: ["<head>", "<top>", "<header>", "<heading>"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 6,
                        question: "Which element is used to group a set of <h1>-<h6> elements when they have multiple levels?",
                        options: ["<hgroup>", "<header>", "<titles>", "<headings>"],
                        correct: 0,
                        time: 30
                    },
                    {
                        order: 7,
                        question: "Which element is used to represent the main content of the <body>?",
                        options: ["<content>", "<main>", "<primary>", "<section>"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 8,
                        question: "Which tag is used to specify a caption for a <figure> element?",
                        options: ["<figcaption>", "<caption>", "<label>", "<legend>"],
                        correct: 0,
                        time: 30
                    },
                    {
                        order: 9,
                        question: "Which element represents a date and/or time?",
                        options: ["<datetime>", "<time>", "<calendar>", "<date>"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 10,
                        question: "Which element is used to mark a section of text that is quoted from another source?",
                        options: ["<quote>", "<cite>", "<blockquote>", "<q>"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 11,
                        question: "Which semantic element is used to highlight parts of a text because of their relevance in a specific context?",
                        options: ["<important>", "<bold>", "<mark>", "<highlight>"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 12,
                        question: "Which element acts as a container for details that the user can open and close on demand?",
                        options: ["<accordion>", "<summary>", "<details>", "<toggle>"],
                        correct: 2,
                        time: 30
                    }
                ],
                hints: 2
            }
        }
    ],
    "CSS": [
        {
            title: "CSS Fundamentals", level: "Beginner", questions: 10,
            img: './quizAssets/frontend/CSS/1.png',
            questionsDetails: {
                questions: [
                    {
                        order: 1,
                        question: "What does CSS stand for?",
                        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 2,
                        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
                        options: ["In the <body> section", "At the end of the document", "In the <head> section", "After the <html> tag"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 3,
                        question: "Which HTML tag is used to define an internal style sheet?",
                        options: ["<css>", "<script>", "<style>", "<link>"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 4,
                        question: "Which property is used to change the background color of an element?",
                        options: ["color", "bgcolor", "background-color", "fill"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 5,
                        question: "How do you select an element with the id 'header' in CSS?",
                        options: [".header", "header", "#header", "*header"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 6,
                        question: "How do you select all <p> elements inside a <div> element?",
                        options: ["div p", "div + p", "div.p", "div > p"],
                        correct: 0,
                        time: 30
                    },
                    {
                        order: 7,
                        question: "Which CSS property controls the text size?",
                        options: ["text-style", "font-size", "text-size", "font-weight"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 8,
                        question: "In the Box Model, which layer is outside the border?",
                        options: ["Padding", "Content", "Margin", "Outline"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 9,
                        question: "How do you make the text bold in CSS?",
                        options: ["font: bold", "style: bold", "font-weight: bold", "text-decoration: bold"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 10,
                        question: "What is the default value of the 'position' property?",
                        options: ["relative", "fixed", "absolute", "static"],
                        correct: 3,
                        time: 30
                    }
                ],
                hints: 0
            }
        },
        {
            title: "Flexbox & Grid", level: "Intermediate", questions: 14,
            img: './quizAssets/frontend/CSS/2.png',
            questionsDetails: {
                questions: [
                    {
                        order: 1,
                        question: "Which property is required to transform an element into a flex container?",
                        options: ["flex: 1", "display: flexbox", "display: flex", "flex-direction: row"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 2,
                        question: "Which justify-content value spreads items evenly with equal space between them, but no space at the edges?",
                        options: ["space-around", "space-evenly", "space-between", "center"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 3,
                        question: "To align flex items along the cross-axis, which property do you use on the container?",
                        options: ["justify-content", "align-content", "align-items", "align-self"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 4,
                        question: "What is the default value of the flex-direction property?",
                        options: ["column", "row-reverse", "row", "stack"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 5,
                        question: "Which property allows flex items to wrap onto multiple lines?",
                        options: ["flex-flow", "flex-wrap", "flex-line", "display-wrap"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 6,
                        question: "In CSS Grid, which property is used to set the size of the gaps between rows and columns?",
                        options: ["grid-gap", "margin", "gap", "grid-spacing"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 7,
                        question: "Which unit in CSS Grid represents a fraction of the available space in the container?",
                        options: ["vh", "fr", "%", "rem"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 8,
                        question: "How do you make a grid item span 3 columns?",
                        options: ["grid-column: 3", "grid-span: 3", "grid-column: span 3", "grid-template-columns: 3"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 9,
                        question: "Which Grid property allows you to name areas of the layout and reference them by name?",
                        options: ["grid-template-areas", "grid-area-names", "grid-names", "grid-section"],
                        correct: 0,
                        time: 30
                    },
                    {
                        order: 10,
                        question: "Which property is used on a flex ITEM to override the container's align-items value?",
                        options: ["align-content", "justify-self", "align-self", "flex-align"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 11,
                        question: "What does 'align-content' do in a flex container?",
                        options: ["Aligns individual items", "Aligns lines within a multi-line flex container", "Justifies items on the main axis", "Sets the flex-basis"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 12,
                        question: "Which CSS Grid function allows a track to repeat as many times as possible to fill the container?",
                        options: ["repeat(auto-fill, ...)", "repeat(all, ...)", "grid-repeat()", "fill-available"],
                        correct: 0,
                        time: 30
                    },
                    {
                        order: 13,
                        question: "Which flex property specifies the initial main size of a flex item?",
                        options: ["flex-grow", "flex-shrink", "flex-basis", "flex-width"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 14,
                        question: "Which property is a shorthand for grid-template-rows, grid-template-columns, and grid-template-areas?",
                        options: ["grid-layout", "grid", "grid-template", "display-grid"],
                        correct: 2,
                        time: 30
                    }
                ],
                hints: 2
            }
        },
        {
            title: "Responsive Design", level: "Intermediate", questions: 12,
            img: './quizAssets/frontend/CSS/3.png',
            questionsDetails: {
                questions: [
                    {
                        order: 1,
                        question: "What is the primary purpose of the 'viewport' meta tag?",
                        options: ["To speed up page loading", "To control how a page is scaled and rendered on mobile devices", "To define the character encoding", "To store user preferences"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 2,
                        question: "Which CSS unit is relative to 1% of the width of the viewport?",
                        options: ["vh", "rem", "vw", "em"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 3,
                        question: "What does 'Mobile First' design imply?",
                        options: ["Designing for desktop and hiding elements on mobile", "Designing the mobile layout first and then adding styles for larger screens", "Creating a separate app for mobile users", "Using only mobile-specific tags"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 4,
                        question: "Which Media Query feature is used to check the ratio of the width to the height of the viewport?",
                        options: ["device-ratio", "orientation", "aspect-ratio", "resolution"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 5,
                        question: "Which CSS property is often used with 'max-width: 100%' to make images responsive?",
                        options: ["display: block", "height: auto", "object-fit: cover", "position: relative"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 6,
                        question: "What is a 'breakpoint' in responsive design?",
                        options: ["A point where the website crashes", "The point at which a media query is applied to change the layout", "The end of a CSS file", "A specific pixel where an image breaks"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 7,
                        question: "Which CSS unit is best for accessible typography because it scales with browser settings?",
                        options: ["px", "rem", "pt", "vh"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 8,
                        question: "When using @media (min-width: 768px), which devices are targeted?",
                        options: ["Devices with a width of 768px or smaller", "Only devices exactly 768px wide", "Devices with a width of 768px or larger", "Only mobile phones"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 9,
                        question: "Which property can prevent an element from becoming wider than its container on mobile?",
                        options: ["width: 100%", "box-sizing: border-box", "overflow: hidden", "min-width: 0"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 10,
                        question: "What is the difference between 'em' and 'rem' units?",
                        options: ["No difference", "em is root-relative, rem is parent-relative", "rem is root-relative, em is parent-relative", "em is for mobile, rem is for desktop"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 11,
                        question: "Which CSS function allows you to set a value that changes between a minimum and maximum size depending on the viewport?",
                        options: ["calc()", "clamp()", "minmax()", "flex()"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 12,
                        question: "What does @media print { ... } do?",
                        options: ["Optimizes the screen for high-resolution printers", "Applies styles only when the page is being printed", "Changes the font to a typewriter style", "Enables 3D printing support"],
                        correct: 1,
                        time: 30
                    }
                ],
                hints: 2
            }
        }
    ],
    "JavaScript": [
        {
            title: "JS Basics", level: "Beginner", questions: 12,
            img: './quizAssets/frontend/JS/1.png',
            questionsDetails: {
                questions: [
                    {
                        order: 1,
                        question: "Inside which HTML element do we put the JavaScript?",
                        options: ["<scripting>", "<js>", "<javascript>", "<script>"],
                        correct: 3,
                        time: 30
                    },
                    {
                        order: 2,
                        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
                        options: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 3,
                        question: "How do you write 'Hello World' in an alert box?",
                        options: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
                        correct: 3,
                        time: 30
                    },
                    {
                        order: 4,
                        question: "How do you create a function in JavaScript?",
                        options: ["function:myFunction()", "function myFunction()", "function = myFunction()", "create myFunction()"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 5,
                        question: "How do you call a function named 'myFunction'?",
                        options: ["call myFunction()", "myFunction()", "call function myFunction()", "start myFunction()"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 6,
                        question: "How to write an IF statement in JavaScript?",
                        options: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 7,
                        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
                        options: ["if (i != 5)", "if i <> 5", "if i =! 5 then", "if (i !=== 5)"],
                        correct: 0,
                        time: 30
                    },
                    {
                        order: 8,
                        question: "How does a WHILE loop start?",
                        options: ["while i = 1 to 10", "while (i <= 10)", "while (i <= 10; i++)", "do while (i <= 10)"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 9,
                        question: "How can you add a comment in a JavaScript?",
                        options: ["'This is a comment", "", "//This is a comment", "*This is a comment*"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 10,
                        question: "What is the correct way to write a JavaScript array?",
                        options: ["var colors = 1 = ('red'), 2 = ('green')", "var colors = ['red', 'green']", "var colors = (1:'red', 2:'green')", "var colors = 'red', 'green'"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 11,
                        question: "Which operator is used to assign a value to a variable?",
                        options: ["x", "*", "-", "="],
                        correct: 3,
                        time: 30
                    },
                    {
                        order: 12,
                        question: "Which data type represents a logical entity and can have only two values: true and false?",
                        options: ["String", "Number", "Boolean", "Object"],
                        correct: 2,
                        time: 30
                    }
                ],
                hints: 1
            }
        },
        {
            title: "Arrays & Objects", level: "Intermediate", questions: 15,
            img: './quizAssets/frontend/JS/2.png',
            questionsDetails: {
                questions: [
                    {
                        order: 1,
                        question: "Which method adds one or more elements to the end of an array and returns the new length?",
                        options: ["pop()", "push()", "shift()", "join()"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 2,
                        question: "How do you access the value 'Blue' in: const colors = ['Red', 'Blue', 'Green']?",
                        options: ["colors[0]", "colors[1]", "colors.Blue", "colors(1)"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 3,
                        question: "Which method creates a new array with all elements that pass a test provided by a function?",
                        options: ["map()", "forEach()", "filter()", "reduce()"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 4,
                        question: "What is the correct way to find the number of items in an array named 'items'?",
                        options: ["items.count", "items.length", "items.size", "items.index"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 5,
                        question: "Which method is used to join all elements of an array into a string?",
                        options: ["concat()", "join()", "pop()", "toString()"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 6,
                        question: "How do you add a new property 'age' to an object named 'user'?",
                        options: ["user['age'] = 25", "user.age = 25", "Both of these", "None of these"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 7,
                        question: "Which method transforms an array by applying a function to all of its elements and building a new array?",
                        options: ["filter()", "map()", "reduce()", "every()"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 8,
                        question: "What is the result of [1, 2, 3].pop()?",
                        options: ["1", "3", "[1, 2]", "[2, 3]"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 9,
                        question: "Which of these methods specifically removes the FIRST element of an array?",
                        options: ["pop()", "slice()", "shift()", "unshift()"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 10,
                        question: "How do you delete a property 'name' from an object 'person'?",
                        options: ["delete person.name", "remove person.name", "person.name.delete()", "person.delete('name')"],
                        correct: 0,
                        time: 30
                    },
                    {
                        order: 11,
                        question: "What is the output of: typeof []?",
                        options: ["'array'", "'list'", "'object'", "'undefined'"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 12,
                        question: "Which method checks if every element in an array passes a specific condition?",
                        options: ["some()", "every()", "filter()", "find()"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 13,
                        question: "In an object, what are the variables called?",
                        options: ["Methods", "Keys", "Properties", "Elements"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 14,
                        question: "Which operator is used to copy the properties of one object into another (Shallow Copy)?",
                        options: ["...", "===", "&&", "||"],
                        correct: 0,
                        time: 30
                    },
                    {
                        order: 15,
                        question: "How do you check if a specific key exists in an object?",
                        options: ["object.hasKey('key')", "'key' in object", "object.contains('key')", "if(object == 'key')"],
                        correct: 1,
                        time: 30
                    }
                ],
                hints: 2
            }
        },
        {
            title: "DOM Manipulation", level: "Intermediate", questions: 10,
            img: './quizAssets/frontend/JS/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "Which method is the most efficient for selecting a single element by its ID?", 
                options: ["querySelector()", "getElementById()", "getElementsByClassName()", "getElementsByTagName()"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "What is the key difference between 'textContent' and 'innerHTML'?", 
                options: ["No difference", "innerHTML ignores HTML tags", "textContent only returns text; innerHTML parses HTML tags", "textContent is faster but less secure"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 3, 
                question: "How do you add a new class to an element without overwriting existing classes?", 
                options: ["element.className = 'new'", "element.setAttribute('class', 'new')", "element.classList.add('new')", "element.addClass('new')"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 4, 
                question: "Which event phase occurs first when an event is triggered?", 
                options: ["Bubbling phase", "Target phase", "Capturing phase", "Execution phase"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 5, 
                question: "Which method prevents an event from bubbling up the DOM tree?", 
                options: ["preventDefault()", "stopPropagation()", "stopImmediatePropagation()", "return false"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 6, 
                question: "How do you create a new <div> element in memory using JavaScript?", 
                options: ["document.createElement('div')", "document.newElement('div')", "parent.appendChild('div')", "document.insertElement('div')"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 7, 
                question: "What is 'Event Delegation' in JavaScript?", 
                options: ["Adding a listener to every child", "Attaching one listener to a parent to manage children", "Using Web Workers", "Removing all event listeners"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "Which method removes a child node from the DOM?", 
                options: ["child.delete()", "parent.removeChild(child)", "parent.deleteChild(child)", "child.removeParent()"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 9, 
                question: "Which method traverses UP the DOM tree to find the nearest ancestor matching a selector?", 
                options: ["findParent()", "closest()", "parent()", "querySelectorUp()"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 10, 
                question: "Which property allows you to change the CSS styles of an element directly?", 
                options: ["element.css", "element.style", "element.class", "element.stylesheet"], 
                correct: 1, 
                time: 30 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Fetch & Modules", level: "Intermediate", questions: 20,
            img: './quizAssets/frontend/JS/4.png',
            questionsDetails: {
                questions: [
                    {
                        order: 1,
                        question: "Which global method is used to start the process of fetching a resource from the network?",
                        options: ["getRequest()", "fetch()", "axios()", "xmlHTTPRequest()"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 2,
                        question: "What does the fetch() method return?",
                        options: ["A JSON object", "A Response object", "A Promise", "The requested data"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 3,
                        question: "How do you extract the JSON body content from a Fetch response?",
                        options: ["response.data", "response.getJSON()", "response.json()", "JSON.parse(response)"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 4,
                        question: "Which keyword is used to make a function return a Promise and allow the use of 'await'?",
                        options: ["promise", "async", "wait", "defer"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 5,
                        question: "In ES Modules, how do you export a single value as the primary export of a file?",
                        options: ["export primary", "export default", "export { value }", "module.exports"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 6,
                        question: "What is the correct syntax to import a default export from './math.js'?",
                        options: ["import { add } from './math.js'", "import math from './math.js'", "require('./math.js')", "import * as math from './math.js'"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 7,
                        question: "Which HTTP method is typically used to send new data to a server via fetch?",
                        options: ["GET", "PUSH", "POST", "SEND"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 8,
                        question: "How do you check if a fetch response was successful (status in range 200-299)?",
                        options: ["if (response.status == 200)", "if (response.ok)", "if (response.success)", "if (response.done)"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 9,
                        question: "Where should you place the 'await' keyword?",
                        options: ["Only inside an async function", "Anywhere in the script", "Inside a .then() block", "Before a variable declaration"],
                        correct: 0,
                        time: 30
                    },
                    {
                        order: 10,
                        question: "Which block is used to handle errors when using async/await?",
                        options: ["error/catch", "try/catch", "catch/finally", "try/except"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 11,
                        question: "What happens if you try to use 'import' in a script that isn't defined as type='module'?",
                        options: ["It works normally", "It reloads the page", "It throws a SyntaxError", "It imports as a string"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 12,
                        question: "How do you export multiple functions from one file?",
                        options: ["Using named exports", "Using a single default export", "You can't", "Using export.all"],
                        correct: 0,
                        time: 30
                    },
                    {
                        order: 13,
                        question: "Which property of the fetch options object is used to send headers?",
                        options: ["head", "metadata", "headers", "request-headers"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 14,
                        question: "What is the purpose of the 'body' property in a fetch request?",
                        options: ["To set the URL", "To define the response type", "To send data to the server", "To set the cookies"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 15,
                        question: "How do you rename an import (e.g., import 'add' as 'sum')?",
                        options: ["import { add as sum }", "import { add:sum }", "import { add } to sum", "import sum from add"],
                        correct: 0,
                        time: 30
                    },
                    {
                        order: 16,
                        question: "In a module, what is the value of 'this' at the top level?",
                        options: ["window", "global", "undefined", "module.exports"],
                        correct: 2,
                        time: 30
                    },
                    {
                        order: 17,
                        question: "Which function is used to convert a JavaScript object into a JSON string?",
                        options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 18,
                        question: "How do you perform multiple fetch requests simultaneously and wait for all to finish?",
                        options: ["Promise.all()", "Promise.race()", "await all fetch()", "fetch.multiple()"],
                        correct: 0,
                        time: 30
                    },
                    {
                        order: 19,
                        question: "What is 'Tree Shaking' in the context of JS Modules?",
                        options: ["Deleting unused files", "Removing unused code from the final bundle", "Minifying the code", "Sorting functions alphabetically"],
                        correct: 1,
                        time: 30
                    },
                    {
                        order: 20,
                        question: "Can you use 'await' at the top level of a module (outside a function)?",
                        options: ["Yes, in modern environments", "No, never", "Only in Node.js", "Only in .html files"],
                        correct: 0,
                        time: 30
                    }
                ],
                hints: 3
            }
        }
    ],
    "React": [
        {
            title: "JSX & Components", level: "Beginner", questions: 8,
            img: './quizAssets/frontend/React/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is JSX in React?", 
                options: ["A CSS framework", "A syntax extension for JavaScript", "A database management system", "A specialized browser"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "How do you embed a JavaScript expression inside JSX?", 
                options: ["Using ( )", "Using [ ]", "Using { }", "Using < >"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 3, 
                question: "In React, what is the 'root' element often called?", 
                options: ["The anchor", "The container", "The entry point", "The DOM node"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 4, 
                question: "Which naming convention is required for React Components?", 
                options: ["camelCase", "kebab-case", "PascalCase", "snake_case"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 5, 
                question: "How many elements can a React component return at its top level?", 
                options: ["Unlimited", "Exactly two", "Only one", "Up to five"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 6, 
                question: "What can you use to group multiple elements in JSX without adding extra nodes to the DOM?", 
                options: ["<div>", "<section>", "<Fragment> or <>", "<span>"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 7, 
                question: "Which attribute is used in JSX instead of the standard 'class' attribute?", 
                options: ["class", "className", "styleClass", "id"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "What are the two main types of components in React?", 
                options: ["Simple and Complex", "Functional and Class", "Input and Output", "Static and Dynamic"], 
                correct: 1, 
                time: 30 
            }
        ],
        hints: 1
    }
        },
        {
            title: "State & Props", level: "Intermediate", questions: 12,
            img: './quizAssets/frontend/React/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What are 'props' in a React component?", 
                options: ["Internal state of a component", "External inputs passed to a component", "Functions that handle events", "A way to style components"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "Can a component modify its own props?", 
                options: ["Yes, always", "Only in class components", "No, props are read-only", "Only if the parent allows it"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 3, 
                question: "Which Hook is used to add state to a functional component?", 
                options: ["useEffect", "useReducer", "useState", "useContext"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 4, 
                question: "What does the 'useState' hook return?", 
                options: ["The current state value only", "A function to update the state only", "An array with the current state and an updater function", "An object containing all state variables"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 5, 
                question: "How do you pass a prop named 'user' with the value 'Alex' to a Profile component?", 
                options: ["<Profile user='Alex' />", "<Profile val='Alex' />", "<Profile>Alex</Profile>", "<Profile Alex />"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 6, 
                question: "What is the 'one-way data flow' (unidirectional) in React?", 
                options: ["Data flows from Child to Parent", "Data flows from Parent to Child", "Data flows between siblings only", "Data flows directly from the database"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 7, 
                question: "When a component's state updates, what happens to the component?", 
                options: ["It is deleted", "It re-renders", "Nothing happens", "The browser reloads"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "How do you update a state variable 'count' based on its previous value safely?", 
                options: ["setCount(count + 1)", "setCount(prev => prev + 1)", "count = count + 1", "this.count++"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 9, 
                question: "What is the purpose of 'lifting state up'?", 
                options: ["To improve performance", "To share state between components by moving it to their closest common ancestor", "To move state to a global Redux store", "To hide state from child components"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 10, 
                question: "Can state be passed as a prop to a child component?", 
                options: ["No, state is private", "Yes, this is a common pattern", "Only if the state is a string", "Only in functional components"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 11, 
                question: "Which of the following is true about state?", 
                options: ["It is managed within the component", "It is passed from outside the component", "It cannot be changed", "It is used for static data"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 12, 
                question: "What happens if you try to render a boolean value directly in JSX (e.g. {true})?", 
                options: ["It renders 'true'", "It throws an error", "It renders nothing", "It renders '1'"], 
                correct: 2, 
                time: 30 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Hooks", level: "Intermediate", questions: 10,
            img: './quizAssets/frontend/React/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the primary purpose of the useEffect hook?", 
                options: ["To manage local component state", "To perform side effects in functional components", "To memoize expensive calculations", "To create refs for DOM elements"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "Where can you call Hooks in a React component?", 
                options: ["Inside loops or conditions", "Only at the top level of a functional component", "Inside nested functions", "In any JavaScript function"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 3, 
                question: "What happens if you provide an empty dependency array [] to useEffect?", 
                options: ["The effect runs on every re-render", "The effect runs only once after the initial render", "The effect never runs", "The component throws an error"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 4, 
                question: "How do you perform a 'cleanup' (like unsubscribing) in useEffect?", 
                options: ["Call a separate useCleanup hook", "Return a function from the effect callback", "Pass a cleanup flag in the dependency array", "Use the componentWillUnmount hook"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 5, 
                question: "Which hook should you use to access a DOM element directly?", 
                options: ["useState", "useContext", "useRef", "useMemo"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 6, 
                question: "What is the benefit of using the useMemo hook?", 
                options: ["It triggers a re-render", "It caches the result of an expensive calculation", "It simplifies component logic", "It prevents network requests"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 7, 
                question: "What is the difference between useMemo and useCallback?", 
                options: ["useMemo returns a value; useCallback returns a function", "useMemo is for state; useCallback is for effects", "useMemo is faster than useCallback", "There is no difference"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 8, 
                question: "Which hook allows you to consume values from a React Context provider without nesting?", 
                options: ["useProvider", "useGlobal", "useContext", "useStore"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 9, 
                question: "What does the 'useReducer' hook help with?", 
                options: ["Reducing the size of the bundle", "Managing complex state logic that involves multiple sub-values", "Optimizing image loading", "Connecting to a Redux store"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 10, 
                question: "Can you create your own custom hooks in React?", 
                options: ["No, hooks are built-in only", "Yes, by creating a function that starts with 'use'", "Yes, but only in class components", "Only if you use a specific library"], 
                correct: 1, 
                time: 30 
            }
        ],
        hints: 2
    }
        }
    ],
    "Node.js": [
        {
            title: "Node Basics", level: "Beginner", questions: 10,
            img: './quizAssets/backend/Node.js/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is Node.js?", 
                options: ["A programming language", "A JavaScript runtime built on Chrome's V8 engine", "A CSS framework", "A browser extension"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "Which command is used to initialize a new Node.js project and create a package.json file?", 
                options: ["node start", "npm install", "npm init", "node init"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 3, 
                question: "Which object is used in Node.js to access environment variables?", 
                options: ["window.env", "process.env", "system.env", "node.env"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 4, 
                question: "How do you import a built-in module like 'fs' in CommonJS (the default Node.js style)?", 
                options: ["import fs from 'fs'", "require('fs')", "load('fs')", "using fs"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 5, 
                question: "What does NPM stand for?", 
                options: ["Node Program Manager", "New Project Manager", "Node Package Manager", "Node Protocol Module"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 6, 
                question: "Which Node.js module is used for handling file paths?", 
                options: ["fs", "url", "path", "http"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 7, 
                question: "What is the purpose of the 'node_modules' folder?", 
                options: ["To store your source code", "To store external dependencies installed via npm", "To store configuration files", "To store the V8 engine"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "Which command is used to run a file named 'app.js' in the terminal?", 
                options: ["run app.js", "start app.js", "node app.js", "npm app.js"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 9, 
                question: "Node.js is primarily...", 
                options: ["Single-threaded and non-blocking", "Multi-threaded and blocking", "Synchronous only", "Used for frontend styling only"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 10, 
                question: "What is the default port for most Node.js development servers?", 
                options: ["80", "443", "3000", "There is no default; you must specify it"], 
                correct: 3, 
                time: 30 
            }
        ],
        hints: 0
    }
        },
        {
            title: "Express.js", level: "Intermediate", questions: 12,
            img: './quizAssets/backend/Node.js/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the primary role of middleware in an Express application?", 
                options: ["To serve HTML only", "To execute code, modify req/res, and pass control", "To compile JS into machine code", "To bridge the database and UI"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "Which method is used to define a route that handles HTTP POST requests?", 
                options: ["app.get()", "app.post()", "app.put()", "app.request()"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 3, 
                question: "In a route handler like '/user/:id', how do you access the value of 'id'?", 
                options: ["req.query.id", "req.params.id", "req.body.id", "req.id"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 4, 
                question: "What is the purpose of calling 'next()' in a middleware function?", 
                options: ["To restart the server", "To send a response", "To pass control to the next middleware", "To log an error"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 5, 
                question: "Which built-in middleware is used to parse incoming requests with JSON payloads?", 
                options: ["express.json()", "express.parse()", "body-parser", "express.static()"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 6, 
                question: "How do you serve static files like images or CSS in Express?", 
                options: ["app.use(express.static('folder'))", "app.get('/static')", "app.serve('files')", "res.sendFile('folder')"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 7, 
                question: "What is the correct signature for an error-handling middleware function?", 
                options: ["(req, res, next)", "(err, req, res, next)", "(err, next)", "(res, err)"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "Which method sends a JSON response and sets the correct Content-Type header?", 
                options: ["res.send()", "res.json()", "res.write()", "res.stringify()"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 9, 
                question: "Which Express method allows you to mount a specific router file to a path?", 
                options: ["app.mount()", "app.set()", "app.use()", "app.route()"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 10, 
                question: "What does the 'res.redirect()' method do?", 
                options: ["Refreshes the current page", "Sends a status code and new URL to the client", "Changes the server port", "Closes the connection"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 11, 
                question: "How do you get the value of a query string like '?search=books'?", 
                options: ["req.params.search", "req.body.search", "req.query.search", "req.search"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 12, 
                question: "What is the 'app.all()' method used for?", 
                options: ["To load all dependencies", "To handle all HTTP verbs for a specific path", "To clear the cache", "To start the server"], 
                correct: 1, 
                time: 30 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Middleware", level: "Intermediate", questions: 8,
            img: './quizAssets/backend/Node.js/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the correct order of arguments for a standard Express middleware function?", 
                options: ["(req, res, next)", "(res, req, next)", "(req, res)", "(next, req, res)"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 2, 
                question: "Which type of middleware is defined using 'app.use()' without a specific path?", 
                options: ["Router-level", "Application-level", "Error-handling", "Built-in"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 3, 
                question: "What happens if a middleware neither calls 'next()' nor sends a response?", 
                options: ["The server crashes", "The request is left hanging/timeouts", "Express calls next() automatically", "The next middleware runs anyway"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 4, 
                question: "How do you signal an error to Express from within a middleware function?", 
                options: ["throw new Error()", "next('error message')", "res.error()", "return 'error'"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 5, 
                question: "In what order does Express execute middleware mounted on the same path?", 
                options: ["Alphabetical order", "Random order", "The order they are defined in code", "Error handlers first"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 6, 
                question: "Which special string passed to next() bypasses the remaining middleware in a router stack?", 
                options: ["'skip'", "'route'", "'end'", "'break'"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 7, 
                question: "Which built-in middleware parses URL-encoded bodies (HTML form data)?", 
                options: ["express.json()", "express.urlencoded()", "express.form()", "express.static()"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "Where should error-handling middleware typically be defined in your app.js?", 
                options: ["At the very top", "Before all routes", "After all other routes and middleware", "In a separate process"], 
                correct: 2, 
                time: 30 
            }
        ],
        hints: 2
    }
        }
    ],
    "Databases": [
        {
            title: "SQL Basics", level: "Beginner", questions: 12,
            img: './quizAssets/backend/Databases/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What does SQL stand for?", 
                options: ["Strong Question Language", "Structured Query Language", "Structured Question Link", "System Query List"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "Which SQL statement is used to extract data from a database?", 
                options: ["GET", "OPEN", "EXTRACT", "SELECT"], 
                correct: 3, 
                time: 30 
            },
            { 
                order: 3, 
                question: "Which SQL statement is used to update data in a database?", 
                options: ["MODIFY", "UPDATE", "SAVE", "CHANGE"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 4, 
                question: "Which SQL statement is used to delete data from a database?", 
                options: ["COLLAPSE", "REMOVE", "DELETE", "DROP"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 5, 
                question: "How do you select all columns from a table named 'Customers'?", 
                options: ["SELECT [all] FROM Customers", "SELECT * FROM Customers", "SELECT Customers", "SELECT *.Customers"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 6, 
                question: "Which clause is used to filter records in a SELECT statement?", 
                options: ["WHERE", "WHILE", "IF", "FROM"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 7, 
                question: "Which SQL keyword is used to sort the result-set?", 
                options: ["ORDER BY", "SORT BY", "ARRANGE BY", "GROUP BY"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 8, 
                question: "What is the default sort order for the 'ORDER BY' clause?", 
                options: ["Descending", "Ascending", "Random", "Numerical"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 9, 
                question: "Which SQL statement is used to insert new data into a database?", 
                options: ["ADD RECORD", "INSERT INTO", "PUT", "INSERT NEW"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 10, 
                question: "Which keyword is used to return only different (unique) values?", 
                options: ["UNIQUE", "COUNT", "DIFFERENT", "DISTINCT"], 
                correct: 3, 
                time: 30 
            },
            { 
                order: 11, 
                question: "Which operator is used to select a value within a range?", 
                options: ["BETWEEN", "RANGE", "WITHIN", "INSIDE"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 12, 
                question: "In a relational database, what is a 'Primary Key'?", 
                options: ["A password", "A shared key", "A unique identifier for each record", "The table name"], 
                correct: 2, 
                time: 30 
            }
        ],
        hints: 1
    }
        },
        {
            title: "NoSQL Introduction", level: "Intermediate", questions: 10,
            img: './quizAssets/backend/Databases/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What does the term 'NoSQL' typically stand for in modern database contexts?", 
                options: ["No Selection Query Language", "Not Only SQL", "New Object Standard Logic", "Non-Sequential Ledger"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "Which NoSQL data model is used by MongoDB?", 
                options: ["Key-Value", "Wide-Column", "Document-Oriented", "Graph"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 3, 
                question: "What is a 'Schema-less' database?", 
                options: ["A database with no data", "A database that doesn't require a fixed table structure", "A database that only stores strings", "A database with no primary keys"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 4, 
                question: "Which format is most commonly used to represent documents in NoSQL databases?", 
                options: ["XML", "CSV", "JSON/BSON", "HTML"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 5, 
                question: "In NoSQL terminology, what is the equivalent of a 'Table' in a SQL database?", 
                options: ["Collection", "Field", "Row", "Database"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 6, 
                question: "What does 'Horizontal Scaling' (Sharding) refer to in NoSQL?", 
                options: ["Adding more RAM to one server", "Adding more servers to handle the load", "Deleting old data", "Optimizing indexes"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 7, 
                question: "Which type of NoSQL database is best suited for social networks and recommendation engines?", 
                options: ["Key-Value", "Document", "Graph", "Column-family"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 8, 
                question: "What is the 'CAP Theorem' in the context of distributed NoSQL databases?", 
                options: ["Create, Append, Post", "Consistency, Availability, Partition Tolerance", "Capacity, Accuracy, Performance", "Caching, Access, Privacy"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 9, 
                question: "In a document database, what is an 'Embedded Document'?", 
                options: ["A link to an external file", "A document stored inside another document", "A hidden backup of the data", "A primary key"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 10, 
                question: "What is the main advantage of NoSQL over SQL for Big Data applications?", 
                options: ["Better at handling complex JOINs", "Strict data integrity", "Flexibility and high-velocity data handling", "It uses less disk space"], 
                correct: 2, 
                time: 30 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Joins & Queries", level: "Intermediate", questions: 14,
            img: './quizAssets/backend/Databases/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "Which JOIN returns records that have matching values in both tables?", 
                options: ["LEFT JOIN", "INNER JOIN", "FULL JOIN", "RIGHT JOIN"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "Which JOIN returns all records from the left table and matched records from the right table?", 
                options: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "OUTER JOIN"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 3, 
                question: "What will a RIGHT JOIN return if there is no match in the left table?", 
                options: ["An error", "NULL values for the left table columns", "Nothing", "The entire left table"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 4, 
                question: "Which keyword is used to combine the result-set of two or more SELECT statements (removing duplicates)?", 
                options: ["COMBINE", "JOIN", "UNION", "GROUP BY"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 5, 
                question: "What is the purpose of the 'GROUP BY' statement?", 
                options: ["To sort data", "To group rows that have the same values into summary rows", "To join two tables", "To delete duplicate records"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 6, 
                question: "Which clause is used to filter the results of an aggregate function (like SUM or COUNT)?", 
                options: ["WHERE", "HAVING", "FILTER", "LIMIT"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 7, 
                question: "What is a 'Subquery' in SQL?", 
                options: ["A query nested inside another query", "A query that runs faster", "A backup of a query", "A query that only selects one column"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 8, 
                question: "Which aggregate function is used to calculate the total sum of a numeric column?", 
                options: ["TOTAL()", "COUNT()", "SUM()", "AVG()"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 9, 
                question: "In a JOIN, what is the 'ON' keyword used for?", 
                options: ["To specify the table name", "To define the join condition (matching columns)", "To sort the data", "To activate the database"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 10, 
                question: "What is a 'Self Join'?", 
                options: ["A join that runs automatically", "A regular join where a table is joined with itself", "A join between two identical databases", "A join that doesn't require an ON clause"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 11, 
                question: "What is the result of a CROSS JOIN?", 
                options: ["Only matching rows", "A Cartesian product (every row from table A with every row from table B)", "No rows", "Only rows that don't match"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 12, 
                question: "Which operator is used to search for a specified pattern in a column?", 
                options: ["MATCH", "CONTAINS", "LIKE", "SEARCH"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 13, 
                question: "What does the wildcard '%' represent in a LIKE operator?", 
                options: ["Exactly one character", "Zero, one, or multiple characters", "Only numeric characters", "Case-sensitive characters"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 14, 
                question: "What is an 'Alias' (AS) used for in SQL?", 
                options: ["To encrypt data", "To give a table or a column a temporary name", "To create a permanent table copy", "To define a primary key"], 
                correct: 1, 
                time: 30 
            }
        ],
        hints: 3
    }
        }
    ],
    "APIs": [
        {
            title: "REST API", level: "Beginner", questions: 10,
            img: './quizAssets/backend/APIs/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What does REST stand for?", 
                options: ["Relational State Transfer", "Representational State Transfer", "Remote Entry Service Type", "Resource External Standard Transfer"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "Which HTTP method is used to retrieve data from a server?", 
                options: ["POST", "PUT", "GET", "DELETE"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 3, 
                question: "What does it mean for a REST API to be 'Stateless'?", 
                options: ["The server stores client history", "The database cannot be updated", "Each request must contain all info needed to process it", "The API has no status codes"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 4, 
                question: "Which status code category indicates a successful request?", 
                options: ["1xx", "2xx", "4xx", "5xx"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 5, 
                question: "Which HTTP method is typically used to create a new resource?", 
                options: ["GET", "POST", "PATCH", "HEAD"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 6, 
                question: "What does a '404 Not Found' status code indicate?", 
                options: ["Server crash", "Client error (URL not found)", "Authentication failure", "Success but no data"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 7, 
                question: "Which HTTP method is used to replace an entire existing resource?", 
                options: ["GET", "PUT", "OPTIONS", "TRACE"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "Which data format is most commonly used in modern REST APIs?", 
                options: ["XML", "CSV", "JSON", "HTML"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 9, 
                question: "A '500 Internal Server Error' falls under which category?", 
                options: ["Client Error", "Server Error", "Redirection", "Informational"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 10, 
                question: "In the URL '/api/users/45', what does '45' usually represent?", 
                options: ["The API version", "The total number of users", "A unique ID for a specific user", "The server port"], 
                correct: 2, 
                time: 30 
            }
        ],
        hints: 2
    }
        },
        {
            title: "HTTP Methods", level: "Beginner", questions: 8,
            img: './quizAssets/backend/APIs/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "Which HTTP method is considered 'Idempotent', meaning multiple identical requests have the same effect as one?", 
                options: ["POST", "GET", "CONNECT", "None of them"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "Which method is used to update a resource partially, rather than replacing the whole thing?", 
                options: ["PUT", "POST", "PATCH", "UPDATE"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 3, 
                question: "Which of these is a 'Safe' method (it does not change the state of the server)?", 
                options: ["DELETE", "POST", "GET", "PUT"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 4, 
                question: "If you want to remove a user from a database via an API, which method should you use?", 
                options: ["REMOVE", "DELETE", "POST", "PATCH"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 5, 
                question: "What is the main difference between POST and PUT?", 
                options: ["POST is for reading, PUT is for writing", "POST is usually for creating, PUT is for replacing", "PUT is faster than POST", "There is no difference"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 6, 
                question: "Which method requests the headers of a resource but not the actual body?", 
                options: ["GET", "OPTIONS", "HEAD", "TRACE"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 7, 
                question: "Which method is used to describe the communication options (allowed methods) for a target resource?", 
                options: ["INFO", "OPTIONS", "GET", "SETTINGS"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "True or False: A GET request can have a body in standard REST practice.", 
                options: ["True", "False"], 
                correct: 1, 
                time: 30 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Authentication", level: "Intermediate", questions: 12,
            img: './quizAssets/backend/APIs/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the primary difference between Authentication and Authorization?", 
                options: ["They are the same thing", "Authentication is identity; Authorization is permissions", "Authentication is for admins; Authorization is for users", "Authorization happens before Authentication"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "What does 'JWT' stand for?", 
                options: ["Java Web Token", "JSON Web Token", "Joint Web Transfer", "JSON Weekly Token"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 3, 
                question: "Which of these is a common place to store a JWT on the client-side?", 
                options: ["Redux Store", "Local Storage or HttpOnly Cookies", "Global Variables", "System Registry"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 4, 
                question: "What are the three parts of a JWT?", 
                options: ["User, Pass, Secret", "Header, Payload, Signature", "Key, Value, ID", "Origin, Destination, Data"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 5, 
                question: "Why should you never store plain-text passwords in a database?", 
                options: ["It takes up too much space", "If the database is leaked, all accounts are compromised", "It makes the server slow", "SQL does not support strings"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 6, 
                question: "Which algorithm is commonly used to hash passwords in Node.js?", 
                options: ["bcrypt", "JSON.stringify", "Base64", "MD5"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 7, 
                question: "What is 'Salt' in the context of password hashing?", 
                options: ["A secret key known only to the user", "Random data added to a password before hashing", "A way to compress the password", "An encrypted cookie"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "What is the 'Bearer' token in an HTTP Header?", 
                options: ["A token that allows access to the server logs", "A type of security token sent in the Authorization header", "A token used only for images", "A server-side session ID"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 9, 
                question: "What is Multi-Factor Authentication (MFA)?", 
                options: ["Using multiple passwords", "Requiring two or more verification methods", "Logging in from multiple devices", "Changing your password frequently"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 10, 
                question: "What does the 'exp' claim in a JWT payload represent?", 
                options: ["Expected data", "Expiration time", "Export status", "Experience level"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 11, 
                question: "What is an 'HttpOnly' cookie?", 
                options: ["A cookie that can only be read by JavaScript", "A cookie that cannot be accessed by client-side scripts", "A cookie that only works on HTTP (not HTTPS)", "A cookie used for tracking ads"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 12, 
                question: "What happens if a JWT is intercepted and the secret key is unknown to the attacker?", 
                options: ["They can change the data but the signature will become invalid", "They can read the data but cannot modify it without breaking the signature", "They can do nothing; the data is encrypted", "The token automatically expires"], 
                correct: 1, 
                time: 30 
            }
        ],
        hints: 3
    }

        }
    ],
    "Docker": [
        {
            title: "Docker Basics", level: "Beginner", questions: 10,
            img: './quizAssets/backend/Docker/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the primary difference between a Docker container and a Virtual Machine (VM)?", 
                options: ["Containers share the host OS kernel; VMs include a full guest OS", "VMs are faster to start", "Containers only run on Linux", "There is no difference"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 2, 
                question: "What is a Docker Image?", 
                options: ["A running instance of an app", "A read-only blueprint for a container", "A backup of the host OS", "A GUI tool"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 3, 
                question: "Which file is used to define the instructions for building an image?", 
                options: ["docker-compose.yml", "package.json", "Dockerfile", "config.docker"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 4, 
                question: "Which command is used to create an image from a Dockerfile?", 
                options: ["docker run", "docker start", "docker build", "docker create"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 5, 
                question: "What is Docker Hub?", 
                options: ["A local storage folder", "A public registry for sharing images", "A hardware device", "The Docker CLI"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 6, 
                question: "Which Dockerfile instruction specifies the base image to use?", 
                options: ["START", "FROM", "RUN", "COPY"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 7, 
                question: "In 'docker run -p 8080:3000', what does the '-p' flag do?", 
                options: ["Sets a password", "Maps a host port to a container port", "Sets priority", "Prunes images"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "What happens to data inside a standard container when it is deleted?", 
                options: ["It is saved to the host", "It is permanently lost (ephemeral)", "It is moved to Docker Hub", "It is zipped"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 9, 
                question: "Which command lists all currently running containers?", 
                options: ["docker list", "docker ps", "docker show", "docker view"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 10, 
                question: "What is the purpose of a .dockerignore file?", 
                options: ["To skip errors", "To exclude files from the build context", "To uninstall Docker", "To list the authors"], 
                correct: 1, 
                time: 30 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Containers & Images", level: "Intermediate", questions: 10,
            img: './quizAssets/backend/Docker/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is a Docker 'Layer' in the context of an Image?", 
                options: ["A backup of the OS", "A read-only file system change from a Dockerfile instruction", "A physical partition on the hard drive", "A networking protocol"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "How does Docker optimize build speed when you change only the last line of a Dockerfile?", 
                options: ["It recompiles the whole image", "It uses Layer Caching for unchanged previous steps", "It compresses the files", "It skips the build process"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 3, 
                question: "What is the 'Copy-on-Write' (CoW) strategy?", 
                options: ["A backup strategy", "A way to share image layers while allowing containers to have their own writable layer", "A method for printing logs", "A Docker Hub upload protocol"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 4, 
                question: "Which Dockerfile instruction is preferred for long-running processes to allow for graceful shutdowns?", 
                options: ["CMD ['npm', 'start'] (exec form)", "CMD npm start (shell form)", "RUN npm start", "ENTRYPOINT start"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 5, 
                question: "What is a 'Multi-stage build' used for?", 
                options: ["Running multiple containers", "Reducing final image size by separating build tools from the runtime", "Deploying to multiple servers", "Running tests in parallel"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 6, 
                question: "What is the main difference between 'Bind Mounts' and 'Volumes'?", 
                options: ["Volumes are managed by Docker; Bind Mounts depend on host folder structure", "Volumes are slower", "Bind Mounts are more secure", "There is no difference"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 7, 
                question: "Which command would you use to see the individual layers and size of a specific image?", 
                options: ["docker list", "docker history <image_name>", "docker inspect", "docker layers"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "What is the purpose of the 'ENTRYPOINT' instruction compared to 'CMD'?", 
                options: ["It sets a command that cannot be easily overridden when the container starts", "It is only for environment variables", "It runs during the build phase", "It defines the base image"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 9, 
                question: "What is a 'Dangling Image'?", 
                options: ["An image with no tag, usually left over from a failed build", "An image currently being downloaded", "A highly optimized image", "An image with security vulnerabilities"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 10, 
                question: "In Docker networking, what is the default network type for a new container?", 
                options: ["Host", "None", "Bridge", "Overlay"], 
                correct: 2, 
                time: 30 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Docker Compose", level: "Intermediate", questions: 8,
            img: './quizAssets/backend/Docker/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the primary purpose of Docker Compose?", 
                options: ["To build a single Docker image", "To define and run multi-container applications", "To replace the Docker Engine", "To manage cloud billing"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "Which file format is used to configure Docker Compose services?", 
                options: ["JSON", "XML", "YAML", "TXT"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 3, 
                question: "Which command starts all services defined in a docker-compose.yml file in the background?", 
                options: ["docker-compose start", "docker-compose up -d", "docker-compose run", "docker-compose launch"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 4, 
                question: "What does the 'depends_on' property in a compose file achieve?", 
                options: ["It installs dependencies like npm", "It defines the order in which services are started", "It links a container to a physical hardware device", "It specifies the Docker version required"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 5, 
                question: "By default, how do containers within the same Docker Compose project communicate with each other?", 
                options: ["Via the host's public IP", "They cannot communicate by default", "Using the service names as hostnames over a shared network", "Through SSH tunnels"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 6, 
                question: "What is the effect of running 'docker-compose down'?", 
                options: ["It pauses the containers", "It stops and removes containers, networks, and images defined in the file", "It only stops the containers but keeps them in memory", "It reboots the host machine"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 7, 
                question: "How do you specify an environment variable for a service in a docker-compose.yml file?", 
                options: ["Using the 'env:' key", "Using the 'environment:' key", "Inside the 'Dockerfile' only", "Variables are not supported in Compose"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "Which command is used to view the aggregated logs of all running services in a Compose project?", 
                options: ["docker-compose view", "docker-compose show", "docker-compose logs", "docker-compose status"], 
                correct: 2, 
                time: 30 
            }
        ],
        hints: 2
    }
        }
    ],
    "Algebra": [
        {
            title: "Linear Equations", level: "Beginner", questions: 12,
            img: './quizAssets/Mathemetics/Algebra/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the value of x in the equation: x + 7 = 15?", 
                options: ["22", "8", "105", "1.5"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "Solve for y: y - 12 = 4.", 
                options: ["16", "8", "-8", "48"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 3, 
                question: "In the expression 5a - 9, which part is the 'coefficient'?", 
                options: ["a", "-9", "5", "14"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 4, 
                question: "Solve for m: 4m = 28.", 
                options: ["32", "24", "112", "7"], 
                correct: 3, 
                time: 30 
            },
            { 
                order: 5, 
                question: "What is the value of k in: k / 3 = 9?", 
                options: ["27", "3", "6", "12"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 6, 
                question: "Solve the two-step equation: 2x + 5 = 13.", 
                options: ["9", "6", "4", "5"], 
                correct: 2, 
                time: 45 
            },
            { 
                order: 7, 
                question: "Which operation should be performed first to solve: 3x - 4 = 11?", 
                options: ["Divide by 3", "Add 4 to both sides", "Subtract 11", "Multiply by 3"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "Solve for n: 10 - n = 6.", 
                options: ["16", "4", "-4", "60"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 9, 
                question: "What is the value of w in: w / 2 + 1 = 5?", 
                options: ["8", "12", "2", "10"], 
                correct: 0, 
                time: 45 
            },
            { 
                order: 10, 
                question: "Solve for z: 3z = 0.", 
                options: ["3", "-3", "Undefined", "0"], 
                correct: 3, 
                time: 30 
            },
            { 
                order: 11, 
                question: "What is the inverse operation of multiplication?", 
                options: ["Addition", "Subtraction", "Division", "Square Root"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 12, 
                question: "Solve for p: 7p - 2 = 12.", 
                options: ["1.4", "2", "14", "1"], 
                correct: 1, 
                time: 45 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Quadratic Equations", level: "Intermediate", questions: 10,
            img: './quizAssets/Mathemetics/Algebra/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What are the roots of the equation: x² - 5x + 6 = 0?", 
                options: ["x = -2, -3", "x = 2, 3", "x = 1, 6", "x = -1, -6"], 
                correct: 1, 
                time: 60 
            },
            { 
                order: 2, 
                question: "Which of the following represents the correct Quadratic Formula?", 
                options: [
                    "x = (-b ± √(b² - 4ac)) / 2a", 
                    "x = (b ± √(b² - 4ac)) / 2a", 
                    "x = (-b ± √(b² + 4ac)) / 2a", 
                    "x = -b ± √(b² - 4ac)"
                ], 
                correct: 0, 
                time: 45 
            },
            { 
                order: 3, 
                question: "What is the discriminant (D) of the equation: 2x² - 4x + 3 = 0?", 
                options: ["8", "40", "-8", "-40"], 
                correct: 2, 
                time: 45 
            },
            { 
                order: 4, 
                question: "If the discriminant of a quadratic equation is zero (D = 0), what is the nature of the roots?", 
                options: [
                    "Two distinct real roots", 
                    "Two complex roots", 
                    "One real, repeated root", 
                    "No solutions"
                ], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 5, 
                question: "Solve by completing the square: x² + 6x = 7.", 
                options: ["x = 1, -7", "x = 1, 7", "x = -1, 7", "x = -1, -7"], 
                correct: 0, 
                time: 90 
            },
            { 
                order: 6, 
                question: "What is the sum of the roots for the equation: 3x² - 9x + 5 = 0?", 
                options: ["5/3", "-3", "3", "9"], 
                correct: 2, 
                time: 45 
            },
            { 
                order: 7, 
                question: "In the standard form ax² + bx + c = 0, what does the 'c' represent on the graph of the parabola?", 
                options: ["The x-intercept", "The vertex", "The y-intercept", "The axis of symmetry"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 8, 
                question: "What constant must be added to x² - 10x to make it a perfect square trinomial?", 
                options: ["10", "100", "-25", "25"], 
                correct: 3, 
                time: 45 
            },
            { 
                order: 9, 
                question: "What are the roots of x² + 9 = 0 in the complex number system?", 
                options: ["x = ±3", "x = ±3i", "x = 3i", "No solution"], 
                correct: 1, 
                time: 45 
            },
            { 
                order: 10, 
                question: "If the coefficient 'a' in ax² + bx + c = 0 is negative, which way does the parabola open?", 
                options: ["Upward", "Downward", "To the right", "To the left"], 
                correct: 1, 
                time: 30 
            }
        ],
        hints: 2
    }

        },
        {
            title: "Polynomials", level: "Intermediate", questions: 8,
            img: './quizAssets/Mathemetics/Algebra/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "According to the Remainder Theorem, what is the remainder when P(x) is divided by (x - a)?", 
                options: ["P(-a)", "P(0)", "P(a)", "0"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 2, 
                question: "Which of these is a potential rational root of f(x) = 2x³ + x - 3 according to the Rational Root Theorem?", 
                options: ["2", "3/2", "2/3", "1/3"], 
                correct: 1, 
                time: 45 
            },
            { 
                order: 3, 
                question: "What is the degree of the polynomial: P(x) = 4x² - 5x⁵ + 2x - 1?", 
                options: ["2", "5", "4", "1"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 4, 
                question: "If (x + 2) is a factor of a polynomial P(x), then what must P(-2) equal?", 
                options: ["0", "2", "-2", "1"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 5, 
                question: "What is the leading coefficient of: f(x) = -3x⁴ + 2x² - 8?", 
                options: ["4", "2", "-8", "-3"], 
                correct: 3, 
                time: 20 
            },
            { 
                order: 6, 
                question: "How many complex roots (including real) does a 4th-degree polynomial have according to the Fundamental Theorem of Algebra?", 
                options: ["At most 4", "Exactly 4", "Infinitely many", "2"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 7, 
                question: "Describe the end behavior of f(x) = -2x⁴ (even degree, negative leading coefficient):", 
                options: ["Up on both sides", "Down on both sides", "Down-Left, Up-Right", "Up-Left, Down-Right"], 
                correct: 1, 
                time: 45 
            },
            { 
                order: 8, 
                question: "Using synthetic division to divide by (x - 3), what value is placed in the 'box'?", 
                options: ["-3", "0", "3", "1/3"], 
                correct: 2, 
                time: 20 
            }
        ],
        hints: 2
    }
        }
    ],
    "Geometry": [
        {
            title: "Triangles & Circles", level: "Beginner", questions: 12,
            img: './quizAssets/Mathemetics/Geometry/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "According to the Triangle Inequality Theorem, the sum of any two sides of a triangle must be:", 
                options: ["Equal to the third side", "Greater than the third side", "Less than the third side", "Exactly double the third side"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "Which term describes a triangle where all three interior angles are less than 90°?", 
                options: ["Obtuse", "Right", "Acute", "Scalene"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 3, 
                question: "In geometry, what is the definition of a 'Circle'?", 
                options: ["A round shape with four corners", "The set of all points in a plane at a fixed distance from a center", "A closed polygon with infinite sides", "An oval with equal axes"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 4, 
                question: "What is the relationship between an inscribed angle and the central angle that subtends the same arc?", 
                options: ["They are equal", "The inscribed angle is double the central angle", "The inscribed angle is half the central angle", "They add up to 180°"], 
                correct: 2, 
                time: 40 
            },
            { 
                order: 5, 
                question: "Which of the following describes a 'Scalene' triangle?", 
                options: ["Two sides are equal", "All sides are equal", "No sides are equal", "It contains a 90° angle"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 6, 
                question: "By definition, a 'Chord' of a circle is a line segment that:", 
                options: ["Passes through the center only", "Touches the outside of the circle at one point", "Connects any two points on the circle's boundary", "Is always equal to the radius"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 7, 
                question: "The 'Centroid' of a triangle is the point where which three lines meet?", 
                options: ["Altitudes", "Medians", "Angle Bisectors", "Perpendicular Bisectors"], 
                correct: 1, 
                time: 40 
            },
            { 
                order: 8, 
                question: "If a triangle has an obtuse angle, what is the maximum number of obtuse angles it can have?", 
                options: ["One", "Two", "Three", "Zero"], 
                correct: 0, 
                time: 20 
            },
            { 
                order: 9, 
                question: "What is the theoretical definition of the constant Pi (π)?", 
                options: ["Area divided by Radius", "Diameter divided by Circumference", "Circumference divided by Diameter", "Radius squared"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 10, 
                question: "A line that touches a circle at exactly one point is called a 'Tangent'. What is its relationship to the radius at that point?", 
                options: ["It is parallel", "It is twice the length", "It is perpendicular (90°)", "It is half the length"], 
                correct: 2, 
                time: 35 
            },
            { 
                order: 11, 
                question: "What is the 'Circumcenter' of a triangle?", 
                options: ["The center of the largest inscribed circle", "The point equidistant from all three vertices", "The center of mass", "The point where the heights meet"], 
                correct: 1, 
                time: 40 
            },
            { 
                order: 12, 
                question: "In a right triangle, the two non-right angles must always be:", 
                options: ["Supplementary (add to 180°)", "Complementary (add to 90°)", "Equal to each other", "Obtuse"], 
                correct: 1, 
                time: 30 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Coordinate Geometry", level: "Intermediate", questions: 10,
            img: './quizAssets/Mathemetics/Geometry/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What does a slope (m) of zero indicate about a line on the Cartesian plane?", 
                options: ["The line is vertical", "The line is horizontal", "The line passes through the origin", "The line does not exist"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 2, 
                question: "If two non-vertical lines are perpendicular, what is the theoretical relationship between their slopes (m1 and m2)?", 
                options: ["m1 = m2", "m1 + m2 = 0", "m1 * m2 = -1", "m1 * m2 = 1"], 
                correct: 2, 
                time: 35 
            },
            { 
                order: 3, 
                question: "What is the slope of a perfectly vertical line?", 
                options: ["Zero", "1", "-1", "Undefined"], 
                correct: 3, 
                time: 20 
            },
            { 
                order: 4, 
                question: "The 'Midpoint' of a line segment is conceptually defined as:", 
                options: ["The point furthest from the origin", "The average of the x-coordinates and the average of the y-coordinates", "The product of the coordinates", "The point where the line crosses the y-axis"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 5, 
                question: "In the slope-intercept form (y = mx + b), what does the constant 'b' represent?", 
                options: ["The rate of change", "The x-intercept", "The y-intercept", "The distance from the origin"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 6, 
                question: "If a line has a negative slope, in which direction does it tilt as you move from left to right?", 
                options: ["It tilts upwards", "It tilts downwards", "It remains perfectly flat", "It curves toward the y-axis"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 7, 
                question: "Which quadrant of the Cartesian plane contains only points where both x and y are negative?", 
                options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 8, 
                question: "What is the distance formula derived from?", 
                options: ["The Quadratic Formula", "The Pythagorean Theorem", "The Remainder Theorem", "The Law of Sines"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 9, 
                question: "A line that is parallel to the y-axis will have an equation in what form?", 
                options: ["y = b", "x = a", "y = mx", "xy = k"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 10, 
                question: "What is the coordinates of the 'Origin' in a 2D Cartesian system?", 
                options: ["(1, 1)", "(0, 1)", "(1, 0)", "(0, 0)"], 
                correct: 3, 
                time: 15 
            }
        ],
        hints: 2
    }
        },
        {
            title: "3D Shapes", level: "Intermediate", questions: 8,
            img: './quizAssets/Mathemetics/Geometry/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "According to Euler's Formula for polyhedra, what is the relationship between Faces (F), Vertices (V), and Edges (E)?", 
                options: ["F + V - E = 2", "F + E - V = 2", "V + E - F = 2", "F + V + E = 2"], 
                correct: 0, 
                time: 40 
            },
            { 
                order: 2, 
                question: "What defines a 'Platonic Solid'?", 
                options: ["Any shape with more than 4 sides", "A convex polyhedron where every face is a congruent regular polygon", "A 3D shape that can roll", "A shape with an infinite number of vertices"], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 3, 
                question: "How many Platonic Solids exist in three-dimensional geometry?", 
                options: ["3", "5", "8", "Infinite"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 4, 
                question: "A cylinder and a cone have the same base and height. Theoretically, how many times larger is the volume of the cylinder than the cone?", 
                options: ["2 times", "3 times", "4 times", "π times"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 5, 
                question: "What is the term for a 3D shape where every point on the surface is equidistant from a central point?", 
                options: ["Cylinder", "Cone", "Sphere", "Torus"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 6, 
                question: "In the context of 3D shapes, what is a 'Net'?", 
                options: ["The total volume of the shape", "A 2D pattern that can be folded to form a 3D solid", "The lines where two faces meet", "A tool used to measure curvature"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 7, 
                question: "Which 3D shape is formed by rotating a right-angled triangle around one of its legs?", 
                options: ["Sphere", "Cylinder", "Cone", "Prism"], 
                correct: 2, 
                time: 35 
            },
            { 
                order: 8, 
                question: "What is the theoretical difference between 'Lateral Surface Area' and 'Total Surface Area'?", 
                options: ["Lateral excludes the base(s); Total includes them", "Lateral is for curved surfaces only", "Total is for volume; Lateral is for area", "There is no difference"], 
                correct: 0, 
                time: 30 
            }
        ],
        hints: 3
    }
        }
    ],
    "Statistics & Probability": [
        {
            title: "Mean, Median, Mode", level: "Beginner", questions: 10,
            img: './quizAssets/Mathemetics/Statistics/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "Which measure is calculated by adding all values and dividing by the total number of values?", 
                options: ["Median", "Mode", "Mean", "Range"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 2, 
                question: "To find the Median of a data set, what is the mandatory first step?", 
                options: ["Find the highest value", "Order the data from least to greatest", "Divide the sum by two", "Count the frequency of each number"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 3, 
                question: "Which measure of central tendency is most affected by 'Outliers' (extreme values)?", 
                options: ["Mean", "Median", "Mode", "None of them"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 4, 
                question: "What does it mean if a data set is 'Bimodal'?", 
                options: ["It has no mode", "It has two modes", "The mean and median are equal", "It only has two data points"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 5, 
                question: "If a data set has an even number of values, how is the Median found?", 
                options: ["The largest value", "The mode of the set", "The average of the two middle values", "It cannot be determined"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 6, 
                question: "Which measure is best for categorical data, such as 'favorite color'?", 
                options: ["Mean", "Median", "Mode", "Range"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 7, 
                question: "In a perfectly symmetrical distribution (Bell Curve), how do the mean, median, and mode relate?", 
                options: ["Mean is highest", "Mode is highest", "They are all equal", "They are all zero"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 8, 
                question: "What does the 'Range' of a data set represent?", 
                options: ["The average value", "The middle value", "The most frequent value", "The difference between the highest and lowest values"], 
                correct: 3, 
                time: 25 
            },
            { 
                order: 9, 
                question: "If every number in a data set is increased by 5, what happens to the Mean?", 
                options: ["Stays the same", "Increases by 5", "Increases by 5 divided by n", "Multiplies by 5"], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 10, 
                question: "Why is the Median often used instead of the Mean for reporting household income?", 
                options: ["It is easier to calculate", "It is not skewed by very high-income earners", "It always results in a whole number", "It includes every person's exact salary"], 
                correct: 1, 
                time: 40 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Probability Basics", level: "Intermediate", questions: 12,
            img: './quizAssets/Mathemetics/Statistics/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the theoretical range of any probability value?", 
                options: ["-1 to 1", "0 to 100", "0 to 1", "Any positive number"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 2, 
                question: "If two events are 'Mutually Exclusive', what is the probability of them both occurring at the same time?", 
                options: ["0.5", "1", "0", "The product of their individual probabilities"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 3, 
                question: "Which rule is used to find the probability of Event A OR Event B occurring?", 
                options: ["The Multiplication Rule", "The Division Rule", "The Subtraction Rule", "The Addition Rule"], 
                correct: 3, 
                time: 25 
            },
            { 
                order: 4, 
                question: "In probability theory, what is the 'Sample Space'?", 
                options: ["The physical area where an experiment happens", "The set of all possible outcomes", "The most likely outcome", "The number of trials performed"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 5, 
                question: "Two events are 'Independent' if:", 
                options: ["One event cannot happen if the other does", "The outcome of one does not affect the probability of the other", "They always happen together", "Their probabilities add up to 1"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 6, 
                question: "What does the 'Complement' of Event A represent?", 
                options: ["The probability that Event A occurs", "The probability that Event A does NOT occur", "The inverse of Event A's probability", "Event A occurring twice"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 7, 
                question: "What is the sum of the probabilities of all possible outcomes in a sample space?", 
                options: ["0", "0.5", "1", "10"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 8, 
                question: "Which formula is used for 'Conditional Probability' P(A|B)?", 
                options: ["P(A) + P(B)", "P(A and B) / P(B)", "P(A) * P(B)", "P(B) / P(A)"], 
                correct: 1, 
                time: 40 
            },
            { 
                order: 9, 
                question: "If you draw a card from a deck and do NOT replace it before drawing a second, the events are:", 
                options: ["Independent", "Dependent", "Mutually Exclusive", "Equally Likely"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 10, 
                question: "The 'Law of Large Numbers' suggests that as you perform more trials:", 
                options: ["The results will become less predictable", "The experimental probability gets closer to the theoretical probability", "The probability of winning increases", "The sample space changes"], 
                correct: 1, 
                time: 40 
            },
            { 
                order: 11, 
                question: "Which visual tool is best for calculating probabilities of multiple sequential events?", 
                options: ["Venn Diagram", "Histogram", "Tree Diagram", "Scatter Plot"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 12, 
                question: "If P(A) = 0.3 and P(B) = 0.4, and they are independent, what is P(A and B)?", 
                options: ["0.7", "0.1", "0.12", "0.5"], 
                correct: 2, 
                time: 35 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Distributions", level: "Intermediate", questions: 10,
            img: './quizAssets/Mathemetics/Statistics/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "In a 'Normal Distribution', what percentage of data falls within one standard deviation of the mean?", 
                options: ["50%", "68%", "95%", "99.7%"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "If a distribution is 'Positively Skewed', in which direction is the long tail pointing?", 
                options: ["To the left", "To the right", "Toward the center", "Downwards"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 3, 
                question: "What is another name for a Normal Distribution?", 
                options: ["Poisson Distribution", "Gaussian Distribution", "Exponential Distribution", "Binomial Distribution"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 4, 
                question: "Which term describes a distribution that is more peaked (higher) than a normal distribution?", 
                options: ["Platykurtic", "Mesokurtic", "Leptokurtic", "Skewed"], 
                correct: 2, 
                time: 40 
            },
            { 
                order: 5, 
                question: "In a 'Positively Skewed' distribution, which measure of central tendency is typically the largest?", 
                options: ["Mode", "Median", "Mean", "Standard Deviation"], 
                correct: 2, 
                time: 45 
            },
            { 
                order: 6, 
                question: "A Binomial Distribution is used to model experiments where each trial has how many possible outcomes?", 
                options: ["One", "Two", "Three", "Any number"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 7, 
                question: "What happens to the shape of a Binomial Distribution as the number of trials (n) increases significantly?", 
                options: ["It becomes more skewed", "It stays the same", "It approximates a Normal Distribution", "It becomes flat"], 
                correct: 2, 
                time: 40 
            },
            { 
                order: 8, 
                question: "The 'Empirical Rule' (68-95-99.7) applies only to which type of distribution?", 
                options: ["Uniform", "Normal", "Bimodal", "Skewed"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 9, 
                question: "What is the total area under the curve of a probability density function (PDF)?", 
                options: ["0", "0.5", "1", "100"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 10, 
                question: "Which parameter of a Normal Distribution determines its 'spread' or width?", 
                options: ["Mean", "Median", "Standard Deviation", "Mode"], 
                correct: 2, 
                time: 30 
            }
        ],
        hints: 2
    }
        }
    ],
    "Debit & Credit": [
        {
            title: "Basic Rules", level: "Beginner", questions: 10,
            img: './quizAssets/Accounting/Debit-Credit/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "In accounting, what does the term 'Debit' literally signify regarding the T-account?", 
                options: ["An increase in value", "A decrease in value", "The left side of the account", "The right side of the account"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 2, 
                question: "Which of these account types is increased by a Debit entry?", 
                options: ["Liabilities", "Equity", "Assets", "Revenue"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 3, 
                question: "To increase a 'Liability' account (like Accounts Payable), which entry must be made?", 
                options: ["Debit", "Credit", "Internal Transfer", "Drawdown"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 4, 
                question: "According to the double-entry system, every transaction must affect at least how many accounts?", 
                options: ["One", "Two", "Three", "Four"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 5, 
                question: "If an Expense account is being recorded, is it typically recorded as a Debit or a Credit?", 
                options: ["Debit", "Credit", "Neither", "It depends on the payment method"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 6, 
                question: "What must be true for every single accounting transaction?", 
                options: ["Assets must equal Revenue", "Total Debits must equal Total Credits", "Cash must always increase", "Liabilities must be zero"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 7, 
                question: "Revenue accounts have a 'Normal Balance' on which side?", 
                options: ["Debit side", "Credit side", "Both sides", "The side that is currently higher"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 8, 
                question: "Which acronym is commonly used to remember which accounts increase with a Debit (Dividends, Expenses, Assets)?", 
                options: ["PEARL", "ALOE", "DEA", "CRUDE"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 9, 
                question: "When a business owner withdraws money for personal use (Drawings), how is this recorded?", 
                options: ["As a Credit to Drawings", "As a Debit to Drawings", "As a Debit to Revenue", "As a Credit to Assets"], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 10, 
                question: "If a company receives cash from a customer, the 'Cash' account (an Asset) is:", 
                options: ["Debited", "Credited", "Balanced", "Amortized"], 
                correct: 0, 
                time: 25 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Journal Entries", level: "Intermediate", questions: 12,
            img: './quizAssets/Accounting/Debit-Credit/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "A company performs services for a customer on account. Which accounts are affected?", 
                options: [
                    "Debit Cash; Credit Service Revenue", 
                    "Debit Accounts Receivable; Credit Service Revenue", 
                    "Debit Service Revenue; Credit Accounts Payable", 
                    "Debit Accounts Receivable; Credit Cash"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "What is the correct entry to record an adjusting entry for 'Depreciation'?", 
                options: [
                    "Debit Cash; Credit Equipment", 
                    "Debit Accumulated Depreciation; Credit Depreciation Expense", 
                    "Debit Depreciation Expense; Credit Accumulated Depreciation", 
                    "Debit Equipment; Credit Depreciation Expense"
                ], 
                correct: 2, 
                time: 40 
            },
            { 
                order: 3, 
                question: "A business receives cash for services to be performed in the future. This is recorded as:", 
                options: [
                    "Debit Cash; Credit Service Revenue", 
                    "Debit Cash; Credit Unearned Revenue", 
                    "Debit Unearned Revenue; Credit Cash", 
                    "Debit Accounts Receivable; Credit Service Revenue"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 4, 
                question: "When a company pays for a 1-year insurance policy in advance, the debit is to:", 
                options: ["Insurance Expense", "Cash", "Prepaid Insurance", "Accounts Payable"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 5, 
                question: "If a company pays a dividend to its shareholders, which account is typically debited?", 
                options: ["Retained Earnings (or Dividends)", "Cash", "Dividend Income", "Common Stock"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 6, 
                question: "Purchasing office supplies on credit results in which entry?", 
                options: [
                    "Debit Supplies; Credit Cash", 
                    "Debit Accounts Payable; Credit Supplies", 
                    "Debit Supplies; Credit Accounts Payable", 
                    "Debit Inventory; Credit Accounts Payable"
                ], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 7, 
                question: "When a customer pays off their existing balance (Accounts Receivable), the entry is:", 
                options: [
                    "Debit Cash; Credit Revenue", 
                    "Debit Accounts Receivable; Credit Cash", 
                    "Debit Cash; Credit Accounts Receivable", 
                    "Debit Accounts Payable; Credit Cash"
                ], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 8, 
                question: "Accrued interest expense at the end of the month requires which adjusting entry?", 
                options: [
                    "Debit Interest Expense; Credit Interest Payable", 
                    "Debit Interest Payable; Credit Interest Expense", 
                    "Debit Interest Expense; Credit Cash", 
                    "Debit Cash; Credit Interest Payable"
                ], 
                correct: 0, 
                time: 45 
            },
            { 
                order: 9, 
                question: "The entry to record the 'Cost of Goods Sold' (COGS) under a perpetual inventory system is:", 
                options: [
                    "Debit Inventory; Credit COGS", 
                    "Debit COGS; Credit Inventory", 
                    "Debit Sales; Credit Inventory", 
                    "Debit COGS; Credit Accounts Payable"
                ], 
                correct: 1, 
                time: 40 
            },
            { 
                order: 10, 
                question: "An 'Adjusting Entry' never involves which type of account?", 
                options: ["Assets", "Revenue", "Cash", "Expenses"], 
                correct: 2, 
                time: 35 
            },
            { 
                order: 11, 
                question: "Writing off a bad debt using the 'Allowance Method' involves a debit to:", 
                options: [
                    "Bad Debt Expense", 
                    "Allowance for Doubtful Accounts", 
                    "Accounts Receivable", 
                    "Cash"
                ], 
                correct: 1, 
                time: 50 
            },
            { 
                order: 12, 
                question: "The 'Closing Entry' for a revenue account involves:", 
                options: [
                    "Crediting the Revenue account", 
                    "Debiting the Revenue account and Crediting Income Summary", 
                    "Crediting Retained Earnings directly", 
                    "Debiting Cash"
                ], 
                correct: 1, 
                time: 45 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Trial Balance", level: "Intermediate", questions: 10,
            img: './quizAssets/Accounting/Debit-Credit/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the primary theoretical purpose of a Trial Balance?", 
                options: [
                    "To calculate net profit", 
                    "To ensure mathematical equality of debits and credits", 
                    "To list all daily transactions in chronological order", 
                    "To determine the market value of assets"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 2, 
                question: "If a Trial Balance is 'in balance,' does it guarantee that the accounting records are error-free?", 
                options: [
                    "Yes, it proves total accuracy", 
                    "No, because errors of principle or omission may still exist", 
                    "Yes, if the accountant signed it", 
                    "No, because the bank statement may differ"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 3, 
                question: "Which type of error occurs when a transaction is completely left out of the accounting records?", 
                options: ["Error of Omission", "Error of Commission", "Error of Principle", "Compensating Error"], 
                correct: 0, 
                time: 20 
            },
            { 
                order: 4, 
                question: "If an equipment purchase is incorrectly debited to the 'Repairs Expense' account, what is this called?", 
                options: ["Error of Omission", "Error of Principle", "Compensating Error", "Transposition Error"], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 5, 
                question: "Which of the following errors WOULD cause the Trial Balance totals to be unequal?", 
                options: [
                    "Recording a transaction twice", 
                    "Entering $540 as $450 in both debit and credit columns", 
                    "Posting only the debit side of a journal entry to the ledger", 
                    "Posting a debit to the wrong asset account"
                ], 
                correct: 2, 
                time: 40 
            },
            { 
                order: 6, 
                question: "What is a 'Suspense Account' used for in relation to a Trial Balance?", 
                options: [
                    "To store suspicious transactions", 
                    "To temporarily balance the accounts when the totals don't match", 
                    "To record depreciation of fixed assets", 
                    "To hold owner's equity"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 7, 
                question: "A 'Transposition Error' (e.g., writing 72 as 27) usually results in a difference that is divisible by which number?", 
                options: ["2", "5", "9", "10"], 
                correct: 2, 
                time: 40 
            },
            { 
                order: 8, 
                question: "Where do the figures in a Trial Balance come from?", 
                options: ["The Journal", "The Ledger account balances", "The Income Statement", "The Bank Statement"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 9, 
                question: "When are Trial Balances typically prepared?", 
                options: [
                    "After every transaction", 
                    "Only at the end of the fiscal year", 
                    "At the end of an accounting period before financial statements", 
                    "Before recording journal entries"
                ], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 10, 
                question: "An 'Error of Commission' involves posting a transaction to:", 
                options: [
                    "The wrong class of account (e.g., Asset vs Expense)", 
                    "The correct side of the wrong specific account (e.g., wrong customer)", 
                    "Both sides with the wrong amount", 
                    "Neither side of the ledger"
                ], 
                correct: 1, 
                time: 35 
            }
        ],
        hints: 2
    }
        }
    ],
    "Assets & Expenses": [
        {
            title: "Asset Types", level: "Beginner", questions: 8,
            img: './quizAssets/Accounting/Assets-Exp/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "In accounting theory, what is the primary characteristic of an 'Asset'?", 
                options: [
                    "A debt owed to a bank", 
                    "A resource controlled by the entity with expected future economic benefit", 
                    "The total revenue earned in a year", 
                    "The owner's personal savings"
                ], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 2, 
                question: "What is the defining time frame for a 'Current Asset'?", 
                options: [
                    "Expected to be converted to cash within 1 month", 
                    "Expected to be converted to cash within 1 year", 
                    "Must be held for at least 5 years", 
                    "There is no specific time frame"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 3, 
                question: "Which of the following is considered a 'Tangible' Fixed Asset?", 
                options: ["Brand Name", "Machinery", "Copyright", "Goodwill"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 4, 
                question: "Which specific non-current asset is theoretically never subject to depreciation?", 
                options: ["Vehicles", "Buildings", "Land", "Computers"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 5, 
                question: "An 'Intangible Asset' is a resource that:", 
                options: [
                    "Has no physical substance", 
                    "Cannot be valued in money", 
                    "Is always worth more than cash", 
                    "Is a liability in disguise"
                ], 
                correct: 0, 
                time: 25 
            },
            { 
                order: 6, 
                question: "Where is 'Inventory' typically classified on a standard Balance Sheet?", 
                options: ["Non-current Assets", "Current Liabilities", "Current Assets", "Owner's Equity"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 7, 
                question: "What does 'Accounts Receivable' represent?", 
                options: [
                    "Money the company owes to suppliers", 
                    "Money customers owe to the company", 
                    "Interest paid to the bank", 
                    "Tax refunds"
                ], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 8, 
                question: "Which of these is the most 'Liquid' asset a business can own?", 
                options: ["Equipment", "Inventory", "Cash and Cash Equivalents", "Prepaid Rent"], 
                correct: 2, 
                time: 15 
            }
        ],
        hints: 1
    }
        },
        {
            title: "Expense Classification", level: "Beginner", questions: 10,
            img: './quizAssets/Accounting/Assets-Exp/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the primary difference between an 'Expense' and an 'Asset'?", 
                options: [
                    "Expenses are larger amounts", 
                    "Assets provide future value; Expenses are consumed now", 
                    "Expenses are always paid in cash", 
                    "There is no difference"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 2, 
                question: "Which of these is a typical 'Operating Expense' (OPEX)?", 
                options: ["Purchasing a building", "Paying monthly rent", "Buying a new delivery van", "Repaying a loan principal"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 3, 
                question: "What does 'CAPEX' stand for in business theory?", 
                options: ["Capital Expenditure", "Cash Applied Expense", "Cost of Assets and Profits", "Capitalized Extra Cost"], 
                correct: 0, 
                time: 15 
            },
            { 
                order: 4, 
                question: "Which term describes expenses that do not change based on the volume of sales (e.g., Rent)?", 
                options: ["Variable Costs", "Fixed Costs", "Accrued Costs", "Deferred Costs"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 5, 
                question: "A 'Variable Cost' is an expense that:", 
                options: [
                    "Changes in direct proportion to production levels", 
                    "Is paid at different times each month", 
                    "Is optional for the business", 
                    "Only applies to taxes"
                ], 
                correct: 0, 
                time: 25 
            },
            { 
                order: 6, 
                question: "In the 'Matching Principle', when should an expense be recorded?", 
                options: [
                    "Only when the cash leaves the bank", 
                    "In the same period as the revenue it helped generate", 
                    "At the end of the fiscal year", 
                    "When the invoice is received"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 7, 
                question: "Which of the following is classified as a 'Selling and Distribution' expense?", 
                options: ["Office Salaries", "Factory Rent", "Advertising and Marketing", "Interest Expense"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 8, 
                question: "What is an 'Administrative Expense'?", 
                options: [
                    "Costs related to the general management of the company", 
                    "Costs related to making products", 
                    "Costs of shipping goods", 
                    "The cost of raw materials"
                ], 
                correct: 0, 
                time: 25 
            },
            { 
                order: 9, 
                question: "A 'Non-Cash Expense' is a cost that represents value loss without cash outflow. What is the most common example?", 
                options: ["Electricity Bill", "Depreciation", "Employee Bonuses", "Office Supplies"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 10, 
                question: "Direct Costs are expenses that can be:", 
                options: [
                    "Traced specifically to a product or service", 
                    "Paid only by the CEO", 
                    "Deducted from the bank automatically", 
                    "Ignored during tax season"
                ], 
                correct: 0, 
                time: 25 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Expense Recording", level: "Intermediate", questions: 12,
            img: './quizAssets/Accounting/Assets-Exp/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "According to the 'Matching Principle,' expenses should be recognized:", 
                options: [
                    "When the cash is actually paid out", 
                    "In the period when the related revenue is earned", 
                    "At the beginning of the fiscal year", 
                    "When the invoice is received by the mailroom"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "What is the theoretical definition of an 'Accrued Expense'?", 
                options: [
                    "An expense paid in advance", 
                    "An expense incurred but not yet paid or recorded", 
                    "A non-operating cost", 
                    "An expense that will never be paid"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 3, 
                question: "When an expense is 'Prepaid,' it is initially recorded on the Balance Sheet as:", 
                options: ["An Expense", "A Liability", "An Asset", "Equity"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 4, 
                question: "What is the primary purpose of an 'Adjusting Entry' for expenses at month-end?", 
                options: [
                    "To correct errors made by the bank", 
                    "To assign expenses to the correct accounting period", 
                    "To increase the company's cash balance", 
                    "To close the revenue accounts"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 5, 
                question: "Which of the following is a 'Non-Cash' expense that must be recorded periodically?", 
                options: ["Rent payment", "Utility bill", "Depreciation", "Sales commissions"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 6, 
                question: "If a company pays for 6 months of advertising in advance, how is this expense recognized over time?", 
                options: [
                    "All at once in the month of payment", 
                    "Equally over the 6-month period (Amortization)", 
                    "Only in the 6th month", 
                    "It is never recorded as an expense"
                ], 
                correct: 1, 
                time: 40 
            },
            { 
                order: 7, 
                question: "An 'Amortization' expense specifically refers to the spreading of costs for:", 
                options: ["Tangible Assets", "Intangible Assets", "Current Liabilities", "Inventory"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "Under 'Cash Basis' accounting, when is an expense recorded?", 
                options: [
                    "When the benefit is received", 
                    "When the cash is paid", 
                    "When the invoice is dated", 
                    "At the end of the year"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 9, 
                question: "What happens to the 'Prepaid Insurance' account as the insurance coverage is used up?", 
                options: [
                    "It increases with a debit", 
                    "It decreases with a credit, while Insurance Expense is debited", 
                    "It remains unchanged until the policy ends", 
                    "It is transferred to a Liability account"
                ], 
                correct: 1, 
                time: 45 
            },
            { 
                order: 10, 
                question: "Why are 'Bad Debt Expenses' recorded even before a customer officially defaults?", 
                options: [
                    "To comply with the Prudence/Conservatism principle", 
                    "To pay fewer taxes immediately", 
                    "Because the bank requires it", 
                    "To increase the value of Accounts Receivable"
                ], 
                correct: 0, 
                time: 45 
            },
            { 
                order: 11, 
                question: "Which account is credited when an Accrued Expense (like Wages) is recognized at year-end?", 
                options: ["Cash", "A Liability account (e.g., Wages Payable)", "An Asset account", "Owner's Capital"], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 12, 
                question: "The 'Cost of Goods Sold' (COGS) is an expense that is directly matched with:", 
                options: ["The total inventory in stock", "The revenue from the specific products sold", "The monthly rent", "The CEO's salary"], 
                correct: 1, 
                time: 35 
            }
        ],
        hints: 3
    }
        }
    ],
    "Liabilities, Revenue & Capital": [
        {
            title: "Liabilities Basics", level: "Beginner", questions: 10,
            img: './quizAssets/Accounting/Liabilities,Revenue-Capital/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "In accounting theory, what is the core definition of a 'Liability'?", 
                options: [
                    "The personal debt of the business owner", 
                    "A present obligation arising from past events, expected to result in an outflow of resources", 
                    "The total amount of cash kept in the office safe", 
                    "The profit remaining after all bills are paid"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 2, 
                question: "What is the primary criteria for a 'Current Liability'?", 
                options: [
                    "It must be paid within one year or the operating cycle", 
                    "It is a debt that never has to be paid back", 
                    "It is a debt owed only to the government", 
                    "It must be over $10,000"
                ], 
                correct: 0, 
                time: 20 
            },
            { 
                order: 3, 
                question: "Which of the following is a classic example of a 'Current Liability'?", 
                options: ["Accounts Receivable", "A 15-year Mortgage", "Accounts Payable", "Owner's Capital"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 4, 
                question: "What does 'Accounts Payable' theoretically represent?", 
                options: [
                    "Money customers owe to the business", 
                    "Money the business owes to suppliers for goods or services bought on credit", 
                    "The total wages paid to employees this year", 
                    "The value of the company's inventory"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 5, 
                question: "A 'Non-Current Liability' (Long-term) is an obligation that:", 
                options: [
                    "Is due to be settled in more than one year", 
                    "Is paid off every single month", 
                    "The company refuses to pay", 
                    "Is owed to the business by a bank"
                ], 
                correct: 0, 
                time: 20 
            },
            { 
                order: 6, 
                question: "Which of these is considered a 'Long-term' Liability?", 
                options: ["Utilities Payable", "Bonds Payable (due in 10 years)", "Wages Payable", "Unearned Revenue"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 7, 
                question: "Why is 'Unearned Revenue' classified as a liability?", 
                options: [
                    "Because it is money the company lost", 
                    "Because the company has a future obligation to provide a service or product", 
                    "Because it is a tax payment", 
                    "It is actually an asset, not a liability"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 8, 
                question: "What happens to a liability when it is paid off in cash?", 
                options: [
                    "The liability increases", 
                    "The liability decreases with a debit entry", 
                    "The liability stays the same", 
                    "The liability becomes an expense"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 9, 
                question: "An 'Accrued Liability' is best described as an expense that:", 
                options: [
                    "Has been paid but not yet used", 
                    "Has been incurred but not yet paid", 
                    "Was never recorded in the journal", 
                    "Is owed to the business owner"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 10, 
                question: "Which of the following is NOT a liability?", 
                options: ["Bank Loan", "Notes Payable", "Prepaid Rent", "Interest Payable"], 
                correct: 2, 
                time: 20 
            }
        ],
        hints: 1
    }
        },
        {
            title: "Revenue Recognition", level: "Intermediate", questions: 12,
            img: './quizAssets/Accounting/Liabilities,Revenue-Capital/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "According to the 5-step model, what is the first step in recognizing revenue?", 
                options: ["Determine price", "Identify the contract", "Identify performance obligations", "Transfer control"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 2, 
                question: "What is a 'Performance Obligation'?", 
                options: ["A legal fine", "A promise to transfer a distinct good or service", "The total contract value", "An interest payment"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 3, 
                question: "Revenue is recognized when 'Control' is transferred. Which is an indicator of control?", 
                options: ["Physical possession", "Legal title", "Significant risks/rewards of ownership", "All of the above"], 
                correct: 3, 
                time: 30 
            },
            { 
                order: 4, 
                question: "In a 'Point in Time' recognition, when is revenue recorded?", 
                options: ["When cash is received", "When ownership transfers", "At the end of the month", "When the order is placed"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 5, 
                question: "When is revenue recognized 'Over Time'?", 
                options: ["Selling a retail item", "A 12-month software subscription", "A one-time consultation", "A cash sale"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 6, 
                question: "What happens if a contract price is 'Variable' (e.g., bonuses or rebates)?", 
                options: ["It is ignored", "It is estimated and included in the transaction price", "It is recorded as an asset", "Revenue is never recognized"], 
                correct: 1, 
                time: 40 
            },
            { 
                order: 7, 
                question: "If a company receives cash before providing a service, the credit goes to:", 
                options: ["Service Revenue", "Unearned Revenue (Liability)", "Accounts Receivable", "Owner's Equity"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 8, 
                question: "Allocating the transaction price is based on the 'Stand-alone' price. This means:", 
                options: ["The price if sold separately", "The cost to manufacture", "The competitor's price", "The discounted price"], 
                correct: 0, 
                time: 35 
            },
            { 
                order: 9, 
                question: "Which of the following is NOT part of the 5-step revenue recognition model?", 
                options: ["Identify the contract", "Determine price", "Record the expense", "Allocate price"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 10, 
                question: "The 'Percentage of Completion' method is typically used for:", 
                options: ["Retail sales", "Long-term construction projects", "Monthly rent", "Dividends"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 11, 
                question: "A 'Distinct' good or service means it can be:", 
                options: ["Sold at a loss", "Enjoyed by the customer on its own", "Ignored by the accountant", "Returned within 30 days"], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 12, 
                question: "The 5-step model was primarily established by which standard?", 
                options: ["IFRS 15 / ASC 606", "The Tax Code", "The Bank Act", "The ISO 9001"], 
                correct: 0, 
                time: 30 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Capital Accounts", level: "Intermediate", questions: 8,
            img: './quizAssets/Accounting/Liabilities,Revenue-Capital/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What does the 'Capital Account' theoretically represent in a business?", 
                options: [
                    "The total cash stored in the bank", 
                    "The owner's residual interest in the assets after deducting liabilities", 
                    "The total revenue earned during the year", 
                    "The amount of debt the business owes to suppliers"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 2, 
                question: "Which of the following describes the theoretical impact of 'Drawings' on a Capital Account?", 
                options: [
                    "It increases capital because it is a business expense", 
                    "It decreases capital as it represents a withdrawal of resources by the owner", 
                    "It has no effect on the capital balance", 
                    "It increases liabilities"
                ], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 3, 
                question: "In a Partnership, why are separate Capital Accounts maintained for each partner?", 
                options: [
                    "To hide profits from the tax office", 
                    "To track individual equity, contributions, and share of profits/losses", 
                    "Because the bank requires separate bank accounts", 
                    "To prevent the business from becoming a corporation"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 4, 
                question: "Which closing entry is made to move 'Net Income' into the Capital Account at year-end?", 
                options: [
                    "Debit Capital; Credit Income Summary", 
                    "Debit Income Summary; Credit Capital", 
                    "Debit Revenue; Credit Capital", 
                    "Debit Capital; Credit Expenses"
                ], 
                correct: 1, 
                time: 40 
            },
            { 
                order: 5, 
                question: "What is the theoretical difference between 'Fixed' and 'Fluctuating' capital accounts?", 
                options: [
                    "Fixed accounts never change; Fluctuating accounts change daily", 
                    "Fixed accounts only record initial capital; Fluctuating accounts record all transactions including profits/drawings", 
                    "Fixed accounts are for cash; Fluctuating accounts are for assets", 
                    "There is no theoretical difference"
                ], 
                correct: 1, 
                time: 45 
            },
            { 
                order: 6, 
                question: "When an owner contributes a personal vehicle to the business, how is the Capital Account affected?", 
                options: [
                    "Capital is debited for the cost of the vehicle", 
                    "Capital is credited for the fair market value of the vehicle", 
                    "Capital is unchanged as it wasn't a cash contribution", 
                    "Capital is credited but only for the original purchase price"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 7, 
                question: "In a 'Current Account' (used in Fixed Capital systems), what does a debit balance typically indicate?", 
                options: [
                    "The partner has a surplus of profit", 
                    "The partner has withdrawn more than their share of profits (Overdrawn)", 
                    "The business is highly profitable", 
                    "The partner has made a new capital contribution"
                ], 
                correct: 1, 
                time: 40 
            },
            { 
                order: 8, 
                question: "Which accounting principle justifies treating the owner's capital as a 'liability' of the business to the owner?", 
                options: ["Matching Principle", "Going Concern Principle", "Business Entity Concept", "Materiality Principle"], 
                correct: 2, 
                time: 25 
            }
        ],
        hints: 2
    }
        }
    ],
    "Financial Statements": [
        {
            title: "Income Statement", level: "Intermediate", questions: 12,
            img: './quizAssets/Accounting/Financial Statements/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the primary theoretical difference between a 'Single-Step' and a 'Multi-Step' Income Statement?", 
                options: [
                    "Single-step includes taxes; Multi-step does not", 
                    "Multi-step separates operating from non-operating activities", 
                    "Single-step is only for large corporations", 
                    "There is no difference in the final Net Income"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 2, 
                question: "Which of the following is the correct formula for calculating 'Gross Profit'?", 
                options: [
                    "Net Sales - Operating Expenses", 
                    "Net Sales - Cost of Goods Sold (COGS)", 
                    "Total Revenue - Net Income", 
                    "Gross Sales - Tax"
                ], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 3, 
                question: "Where should 'Interest Expense' typically be classified on a Multi-Step Income Statement?", 
                options: [
                    "Operating Expenses", 
                    "Cost of Goods Sold", 
                    "Other Expenses and Losses (Non-Operating)", 
                    "Selling Expenses"
                ], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 4, 
                question: "What does 'EBIT' represent in financial analysis?", 
                options: [
                    "Earnings Before Interest and Taxes", 
                    "Every Business Incurs Taxes", 
                    "Earnings Before Inventory Totals", 
                    "Estimated Business Income Total"
                ], 
                correct: 0, 
                time: 15 
            },
            { 
                order: 5, 
                question: "How are 'Net Sales' theoretically calculated?", 
                options: [
                    "Gross Sales + Interest Income", 
                    "Gross Sales - (Sales Returns + Allowances + Discounts)", 
                    "Total Revenue - COGS", 
                    "Cash received from customers only"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 6, 
                question: "Which item is considered an 'Operating Expense'?", 
                options: ["Loss on sale of equipment", "Advertising Expense", "Income Tax Expense", "Interest on a bank loan"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 7, 
                question: "The 'Matching Principle' dictates that the Income Statement should show:", 
                options: [
                    "Only cash transactions", 
                    "Expenses in the same period as the revenue they helped generate", 
                    "Asset values at market price", 
                    "Future projected earnings"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "What is 'Operating Income'?", 
                options: [
                    "Gross Profit minus Operating Expenses", 
                    "Net Sales minus COGS", 
                    "The final bottom line after taxes", 
                    "Revenue from non-core business activities"
                ], 
                correct: 0, 
                time: 35 
            },
            { 
                order: 9, 
                question: "A 'Gain on Sale of Assets' is recorded in which section of the Income Statement?", 
                options: ["Operating Revenue", "Cost of Goods Sold", "Other Income and Gains", "Net Sales"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 10, 
                question: "Which of the following is a 'Non-Operating' item?", 
                options: ["Rent Expense", "Dividend Income", "Salaries Expense", "Utilities"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 11, 
                question: "What is the theoretical purpose of 'Comprehensive Income'?", 
                options: [
                    "To hide losses from investors", 
                    "To include all changes in equity except those from owner investments", 
                    "To replace the traditional Income Statement", 
                    "To calculate cash flow from operations"
                ], 
                correct: 1, 
                time: 40 
            },
            { 
                order: 12, 
                question: "The Income Statement is often called a 'Period' statement because:", 
                options: [
                    "It shows a snapshot of a single day", 
                    "It reports financial performance over a specific length of time", 
                    "It only includes periodic inventory", 
                    "It must be printed periodically"
                ], 
                correct: 1, 
                time: 20 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Balance Sheet", level: "Intermediate", questions: 10,
            img: './quizAssets/Accounting/Financial Statements/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "The Balance Sheet is often referred to as a 'Snapshot.' Why?", 
                options: [
                    "It shows transactions over a month", 
                    "It reports the financial position at a specific point in time", 
                    "It only includes cash transactions", 
                    "It is used only for internal audits"
                ], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 2, 
                question: "In what order are 'Current Assets' typically listed on a Balance Sheet?", 
                options: [
                    "Alphabetical order", 
                    "Order of decreasing liquidity", 
                    "Chronological order of purchase", 
                    "Random order"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 3, 
                question: "Which of the following is considered a 'Contra-Asset' account?", 
                options: ["Accounts Payable", "Accumulated Depreciation", "Unearned Revenue", "Prepaid Insurance"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 4, 
                question: "What does the 'Net Book Value' of a fixed asset represent?", 
                options: [
                    "The current market price", 
                    "Historical cost minus Accumulated Depreciation", 
                    "The original purchase price", 
                    "The replacement cost"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 5, 
                question: "Where would a '10-year Bank Loan' be classified if the next 12 months of payments are due soon?", 
                options: [
                    "Entirely as a Long-term Liability", 
                    "Split between Current and Long-term Liabilities", 
                    "As an Operating Expense", 
                    "As a reduction in Equity"
                ], 
                correct: 1, 
                time: 45 
            },
            { 
                order: 6, 
                question: "What is 'Working Capital' in the context of a Balance Sheet?", 
                options: [
                    "Total Assets minus Total Liabilities", 
                    "Current Assets minus Current Liabilities", 
                    "Cash minus Accounts Payable", 
                    "The owner's total investment"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 7, 
                question: "Which item is classified as an 'Intangible Asset'?", 
                options: ["Inventory", "Goodwill", "Equipment", "Notes Receivable"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 8, 
                question: "What is the theoretical impact on the Balance Sheet when a company issues new shares for cash?", 
                options: [
                    "Assets increase and Liabilities increase", 
                    "Assets increase and Equity increases", 
                    "Assets decrease and Equity increases", 
                    "Liabilities decrease and Equity increases"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 9, 
                question: "Under which section would 'Retained Earnings' be found?", 
                options: ["Current Assets", "Long-term Liabilities", "Owner's Equity", "Operating Revenue"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 10, 
                question: "A 'Classified Balance Sheet' differs from a standard one by:", 
                options: [
                    "Grouping assets and liabilities into functional subcategories", 
                    "Showing only the total amounts for each category", 
                    "Including the CEO's personal assets", 
                    "Using only tax-basis valuations"
                ], 
                correct: 0, 
                time: 30 
            }
        ],
        hints: 2
    }

        },
        {
            title: "Cash Flow Statement", level: "Intermediate", questions: 10,
            img: './quizAssets/Accounting/Financial Statements/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the primary purpose of the Cash Flow Statement?", 
                options: ["To show net profit", "To report cash receipts and payments during a period", "To list all company assets", "To calculate taxes owed"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 2, 
                question: "Which category covers the primary revenue-generating activities of a business?", 
                options: ["Investing Activities", "Financing Activities", "Operating Activities", "Equity Activities"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 3, 
                question: "Under the Indirect Method, why is Depreciation 'added back' to Net Income?", 
                options: ["It is a cash inflow", "It is a non-cash expense that reduced net income", "It is a tax refund", "It increases asset value"], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 4, 
                question: "The purchase of a new factory building would be classified as:", 
                options: ["Operating Activity", "Investing Activity", "Financing Activity", "Administrative Activity"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 5, 
                question: "Which of the following is a 'Financing Activity'?", 
                options: ["Selling inventory", "Paying dividends to shareholders", "Buying office supplies", "Collecting debt from customers"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 6, 
                question: "In the Operating section (Indirect), an increase in Accounts Receivable is:", 
                options: ["Added to Net Income", "Subtracted from Net Income", "Ignored", "Recorded as an investment"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 7, 
                question: "What is the 'Direct Method' of reporting cash flows?", 
                options: ["Estimating future cash", "Reporting major classes of gross cash receipts and payments", "Starting with Net Income and adjusting", "Only counting electronic transfers"], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 8, 
                question: "Which activity involves obtaining resources from owners and providing them with a return on their investment?", 
                options: ["Operating", "Investing", "Financing", "Production"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 9, 
                question: "If a company sells old equipment for cash, where does the cash received go?", 
                options: ["Investing Activities", "Operating Activities", "Financing Activities", "It is not recorded"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 10, 
                question: "What is the 'bottom line' of the Cash Flow Statement?", 
                options: ["Net Income", "Gross Margin", "Net Increase/Decrease in Cash", "Total Assets"], 
                correct: 2, 
                time: 20 
            }
        ],
        hints: 2
    }

        }
    ],
    "Basic Concepts": [
        {
            title: "Introduction to Economics", level: "Beginner", questions: 10,
            img: './quizAssets/Economics/Concepts/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the fundamental problem that Economics seeks to solve?", 
                options: ["Inflation", "Scarcity", "Poverty", "Overproduction"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 2, 
                question: "The value of the 'next best alternative' given up when making a choice is called:", 
                options: ["Accounting Cost", "Opportunity Cost", "Sunk Cost", "Fixed Cost"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 3, 
                question: "Which of the following is NOT one of the 'Four Factors of Production'?", 
                options: ["Land", "Labor", "Capital", "Money"], 
                correct: 3, 
                time: 20 
            },
            { 
                order: 4, 
                question: "In economics, the term 'Capital' specifically refers to:", 
                options: ["Cash in the bank", "Tools, machinery, and buildings used in production", "The owner's personal savings", "Government grants"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 5, 
                question: "What is a 'Command Economy'?", 
                options: ["An economy based on tradition", "An economy where the government makes all major decisions", "An economy driven solely by supply and demand", "An economy that only uses bartering"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 6, 
                question: "Macroeconomics is the study of:", 
                options: ["Individual households and firms", "The economy as a whole (inflation, GDP, etc.)", "The stock market only", "How to run a small business"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 7, 
                question: "Which economic concept explains why people usually buy more of a good when its price falls?", 
                options: ["The Law of Supply", "The Law of Demand", "The Law of Diminishing Returns", "The Law of Equilibrium"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 8, 
                question: "A 'Market Economy' is primarily regulated by:", 
                options: ["Central planners", "The price mechanism (Supply and Demand)", "Fixed historical traditions", "International treaties"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 9, 
                question: "What are 'Incentives' in economic theory?", 
                options: ["Rewards or penalties that motivate people to act", "The total cost of production", "Government regulations", "The physical location of a market"], 
                correct: 0, 
                time: 20 
            },
            { 
                order: 10, 
                question: "The 'Invisible Hand' is a concept introduced by Adam Smith to describe:", 
                options: ["Government control", "How self-interest helps the market stay efficient", "Illegal black market activities", "The role of labor unions"], 
                correct: 1, 
                time: 35 
            }
        ],
        hints: 1
    }
        },
        {
            title: "Scarcity & Choice", level: "Beginner", questions: 8,
            img: './quizAssets/Economics/Concepts/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "Why does scarcity exist in every society, regardless of wealth?", 
                options: [
                    "Because governments fail to distribute money", 
                    "Because resources are limited but human wants are unlimited", 
                    "Because there is not enough gold in the world", 
                    "Because of corporate greed"
                ], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 2, 
                question: "Which of the following is the best example of a 'Trade-off'?", 
                options: [
                    "Buying a used car instead of a new one", 
                    "Spending money on a movie ticket instead of saving for a video game", 
                    "Receiving a gift from a friend", 
                    "Working overtime to earn more money"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 3, 
                question: "A Production Possibilities Curve (PPC) is a graph that shows:", 
                options: [
                    "The price of goods in a market", 
                    "The different combinations of two goods an economy can produce", 
                    "The total amount of cash in an economy", 
                    "How much a consumer is willing to buy"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 4, 
                question: "If an economy is producing at a point INSIDE the PPC curve, it is:", 
                options: ["Operating efficiently", "Using all available resources", "Operating inefficiently or with unemployment", "Producing more than is possible"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 5, 
                question: "What would cause a PPC curve to shift 'Outward' (to the right)?", 
                options: [
                    "A decrease in the population", 
                    "Technological advances or an increase in resources", 
                    "A rise in the price of goods", 
                    "A change in consumer taste"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 6, 
                question: "What is the theoretical reason the PPC is usually bowed-out (concave)?", 
                options: [
                    "The Law of Demand", 
                    "The Law of Increasing Opportunity Costs", 
                    "The Law of Gravity", 
                    "The Law of Supply"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 7, 
                question: "Which of the following is a 'Need' rather than a 'Want' in economic theory?", 
                options: ["A smartphone", "Basic nutrition and water", "High-speed internet", "A luxury car"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 8, 
                question: "Thinking 'At the Margin' means a person makes a decision based on:", 
                options: [
                    "The total cost of all past actions", 
                    "The additional (marginal) cost vs. the additional benefit", 
                    "What their neighbors are doing", 
                    "The average cost of a product"
                ], 
                correct: 1, 
                time: 30 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Opportunity Cost", level: "Intermediate", questions: 10,
            img: './quizAssets/Economics/Concepts/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the key difference between 'Explicit Cost' and 'Implicit Cost'?", 
                options: [
                    "Explicit costs involve cash payments; Implicit costs are the value of resources used without a cash transaction", 
                    "Explicit costs are estimated; Implicit costs are recorded in ledgers", 
                    "There is no difference in economic theory", 
                    "Implicit costs only apply to corporations"
                ], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 2, 
                question: "A student spends 3 hours studying for an exam instead of working a job that pays $15/hour. What is the implicit opportunity cost?", 
                options: ["$0", "$15", "$45", "The grade they receive on the exam"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 3, 
                question: "Which of the following is an example of an 'Implicit Cost' for a business owner?", 
                options: ["Monthly rent payments", "Wages paid to employees", "The salary the owner could have earned working elsewhere", "Electricity bills"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 4, 
                question: "Economic Profit is calculated by subtracting which of the following from Total Revenue?", 
                options: ["Only Explicit Costs", "Only Implicit Costs", "Both Explicit and Implicit Costs", "Accounting Profit plus Tax"], 
                correct: 2, 
                time: 35 
            },
            { 
                order: 5, 
                question: "If 'Accounting Profit' is $100,000 and 'Implicit Costs' are $120,000, what is the Economic Profit?", 
                options: ["$220,000", "$20,000", "-$20,000", "$100,000"], 
                correct: 2, 
                time: 40 
            },
            { 
                order: 6, 
                question: "The 'Production Possibilities Frontier' (PPF) illustrates opportunity cost through:", 
                options: ["The total amount of money in the economy", "The slope of the curve (Trade-offs)", "The consumer price index", "The number of workers employed"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 7, 
                question: "Why does the 'Law of Increasing Opportunity Cost' occur?", 
                options: [
                    "Resources are not perfectly adaptable to producing all goods", 
                    "Inflation always makes things more expensive", 
                    "Governments set price floors", 
                    "Consumers always want more of every good"
                ], 
                correct: 0, 
                time: 40 
            },
            { 
                order: 8, 
                question: "Sunk costs should be _____ when calculating current opportunity costs.", 
                options: ["Added", "Subtracted", "Ignored", "Doubled"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 9, 
                question: "On a PPF curve, moving from one point on the line to another point on the line represents:", 
                options: ["Economic growth", "Economic decline", "A trade-off with an associated opportunity cost", "Inefficiency"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 10, 
                question: "A 'Normal Profit' occurs when Economic Profit is:", 
                options: ["Greater than Zero", "Zero", "Negative", "10% of Revenue"], 
                correct: 1, 
                time: 35 
            }
        ],
        hints: 2
    }
        }
    ],
    "Demand & Supply": [
        {
            title: "Law of Demand", level: "Beginner", questions: 10,
            img: './quizAssets/Economics/Demand&Supply/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What does the Law of Demand state about the relationship between price and quantity demanded?", 
                options: [
                    "As price increases, demand increases", 
                    "As price increases, quantity demanded decreases", 
                    "Price and demand are not related", 
                    "As price decreases, quantity demanded decreases"
                ], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 2, 
                question: "A Demand Curve is typically sloped in which direction?", 
                options: ["Upward", "Downward", "Horizontal", "Vertical"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 3, 
                question: "If the price of a burger drops, what is the likely result according to the Law of Demand?", 
                options: [
                    "People will buy fewer burgers", 
                    "The demand curve will shift left", 
                    "The quantity demanded will increase", 
                    "Supply will automatically decrease"
                ], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 4, 
                question: "Which of the following causes a 'Movement' along the demand curve rather than a 'Shift'?", 
                options: [
                    "A change in consumer income", 
                    "A change in the price of the good itself", 
                    "A change in the price of a substitute good", 
                    "A change in consumer tastes"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 5, 
                question: "If an increase in income leads to a decrease in demand for a good, that good is considered:", 
                options: ["A Normal Good", "An Inferior Good", "A Complementary Good", "A Luxury Good"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 6, 
                question: "What happens to the demand for hot dog buns if the price of hot dogs increases significantly?", 
                options: [
                    "Demand for buns increases", 
                    "Demand for buns decreases", 
                    "Demand for buns stays the same", 
                    "Hot dogs become an inferior good"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 7, 
                question: "Which term describes two goods that are used together, like printers and ink cartridges?", 
                options: ["Substitutes", "Complements", "Inferior Goods", "Capital Goods"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 8, 
                question: "A shift of the demand curve to the RIGHT indicates:", 
                options: [
                    "A decrease in demand", 
                    "An increase in demand", 
                    "A decrease in price", 
                    "The market is closing"
                ], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 9, 
                question: "If a celebrity endorsement makes a product more popular, which 'determinant of demand' has changed?", 
                options: ["Income", "Number of buyers", "Tastes and Preferences", "Expectations"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 10, 
                question: "The 'Income Effect' suggests that as prices drop, consumers feel:", 
                options: [
                    "Poorer and buy less", 
                    "Wealthier in terms of purchasing power and buy more", 
                    "Like the quality has decreased", 
                    "Nothing, because they only use credit cards"
                ], 
                correct: 1, 
                time: 35 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Law of Supply", level: "Beginner", questions: 12,
            img: './quizAssets/Economics/Demand&Supply/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "According to the Law of Supply, what is the relationship between price and quantity supplied?", 
                options: ["Inverse", "Direct", "Random", "Negative"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 2, 
                question: "A Supply Curve is typically sloped in which direction?", 
                options: ["Downward", "Horizontal", "Upward", "Circular"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 3, 
                question: "If the price of a product increases, what will producers generally do?", 
                options: ["Produce less to save costs", "Produce more to increase potential profit", "Stop production entirely", "Lower the quality"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 4, 
                question: "Which of the following causes a 'Movement' along the supply curve?", 
                options: ["A change in technology", "A change in the price of the good itself", "A change in the cost of labor", "A government subsidy"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 5, 
                question: "If the cost of raw materials increases, what happens to the supply curve?", 
                options: ["It shifts to the right", "It shifts to the left", "It moves downward along the curve", "It remains unchanged"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 6, 
                question: "What is the theoretical effect of a 'Subsidy' on supply?", 
                options: ["It decreases supply", "It increases supply by lowering production costs", "It has no effect on supply", "It causes a movement upward along the curve"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 7, 
                question: "Improved technology in a manufacturing plant usually results in:", 
                options: ["A leftward shift of the supply curve", "A rightward shift of the supply curve", "Higher prices for consumers", "Less quantity supplied"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 8, 
                question: "A 'Shift to the Left' of the supply curve represents:", 
                options: ["An increase in supply", "A decrease in supply", "An increase in quantity demanded", "A stable market"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 9, 
                question: "How does an increase in the number of sellers in a market affect the total market supply?", 
                options: ["It decreases", "It stays the same", "It increases", "It becomes vertical"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 10, 
                question: "If producers expect the price of their product to rise significantly next month, they might:", 
                options: ["Increase supply now", "Decrease supply now to sell later at a higher price", "Go out of business", "Increase demand"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 11, 
                question: "An excise tax on the production of a good will likely:", 
                options: ["Shift supply to the right", "Shift supply to the left", "Make the supply curve horizontal", "Increase the quantity supplied"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 12, 
                question: "The 'Profit Motive' is the primary reason the supply curve is:", 
                options: ["Downward sloping", "Upward sloping", "Irrelevant", "Negative"], 
                correct: 1, 
                time: 20 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Market Equilibrium", level: "Intermediate", questions: 10,
            img: './quizAssets/Economics/Demand&Supply/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "Market Equilibrium occurs when:", 
                options: [
                    "Quantity Demanded exceeds Quantity Supplied", 
                    "Quantity Supplied equals Quantity Demanded", 
                    "Price is at its highest possible point", 
                    "The government sets a fair price"
                ], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 2, 
                question: "If the market price is currently ABOVE the equilibrium price, what will develop?", 
                options: ["A shortage", "A surplus", "Market stability", "Increased demand"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 3, 
                question: "If Demand increases while Supply remains constant, what happens to Price and Quantity?", 
                options: [
                    "Price decreases, Quantity increases", 
                    "Price increases, Quantity increases", 
                    "Price increases, Quantity decreases", 
                    "Both stay the same"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 4, 
                question: "What is a 'Price Ceiling'?", 
                options: [
                    "A legal minimum price", 
                    "A legal maximum price set below equilibrium", 
                    "A tax on consumers", 
                    "The highest price a seller has ever charged"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 5, 
                question: "A 'Price Floor' (like minimum wage) set ABOVE equilibrium results in:", 
                options: ["A shortage", "A surplus (e.g., unemployment)", "Equilibrium", "Lower production costs"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 6, 
                question: "If both Supply and Demand increase at the same time, which variable's change is 'ambiguous' without knowing the size of the shifts?", 
                options: ["Price", "Quantity", "Both Price and Quantity", "Neither"], 
                correct: 0, 
                time: 45 
            },
            { 
                order: 7, 
                question: "The area above the supply curve but below the market price is called:", 
                options: ["Consumer Surplus", "Producer Surplus", "Deadweight Loss", "Tax Revenue"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "Consumer Surplus represents the difference between:", 
                options: [
                    "What consumers pay and production cost", 
                    "What consumers are willing to pay and what they actually pay", 
                    "Total revenue and total profit", 
                    "Supply and Demand"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 9, 
                question: "What does 'Deadweight Loss' represent?", 
                options: [
                    "The cost of shipping goods", 
                    "Lost total surplus due to market inefficiency (like a tax or ceiling)", 
                    "The weight of unsold inventory", 
                    "Government profit"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 10, 
                question: "If the price of a complement good (like coffee) increases, the equilibrium price for the original good (like sugar) will:", 
                options: ["Increase", "Decrease", "Stay the same", "Become infinite"], 
                correct: 1, 
                time: 35 
            }
        ],
        hints: 2
    }

        }
    ],
    "Price": [
        {
            title: "Price Determination", level: "Intermediate", questions: 12,
            img: './quizAssets/Economics/Price/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "In a free market, if there is a 'Shortage,' what is the primary mechanism for price determination?", 
                options: ["Government decree", "Prices rise until quantity demanded equals quantity supplied", "Producers lower prices to move stock", "Consumers stop buying entirely"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 2, 
                question: "What does the 'Price Mechanism' signal to producers?", 
                options: ["How much tax to pay", "Where resources are most needed based on consumer demand", "The cost of labor", "The historical value of the currency"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 3, 
                question: "If a per-unit tax is placed on a seller, how is the new market price determined?", 
                options: ["The supply curve shifts left, increasing the equilibrium price", "The demand curve shifts right", "The price stays the same but profit drops", "The government sets a new price manually"], 
                correct: 0, 
                time: 35 
            },
            { 
                order: 4, 
                question: "What is 'Tax Incidence'?", 
                options: ["The total amount of tax collected", "The study of who actually bears the economic burden of a tax", "The law that makes taxes mandatory", "A tax on luxury goods"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 5, 
                question: "When demand is highly INELASTIC, who usually bears the burden of a price increase caused by a tax?", 
                options: ["The Producer", "The Consumer", "The Government", "The Retailer"], 
                correct: 1, 
                time: 40 
            },
            { 
                order: 6, 
                question: "Which of the following describes a 'Black Market' price?", 
                options: ["A price set by the central bank", "A price determined illegally when a price ceiling creates a shortage", "The price of coal", "The discount price for wholesalers"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 7, 
                question: "In the 'Short Run,' prices are often 'sticky.' What does this mean?", 
                options: ["Prices change every second", "Prices do not adjust immediately to changes in economic conditions", "Prices are physically hard to change", "Prices only go up"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "How does an 'Export Subsidy' affect the domestic price of a good?", 
                options: ["It lowers the domestic price", "It raises the domestic price by encouraging sales abroad", "It has no effect on price", "It makes the good illegal to sell locally"], 
                correct: 1, 
                time: 40 
            },
            { 
                order: 9, 
                question: "What happens to price when a 'Technological Breakthrough' significantly reduces production costs?", 
                options: ["Supply shifts right, and the equilibrium price falls", "Supply shifts left, and price rises", "Demand shifts left", "The price remains the same to increase profit"], 
                correct: 0, 
                time: 25 
            },
            { 
                order: 10, 
                question: "The 'Invisible Hand' theory suggests that prices are determined by:", 
                options: ["Political leaders", "Collective self-interest of buyers and sellers", "Random chance", "The price of gold"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 11, 
                question: "What is a 'Price War' in the context of price determination?", 
                options: ["A legal battle between two firms", "Competitive price-cutting by firms to gain market share", "A tax dispute", "An increase in inflation"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 12, 
                question: "In a 'Monopoly,' how is price determined differently than in a competitive market?", 
                options: ["The market determines the price", "The firm is a 'price taker'", "The firm is a 'price maker' and sets the price to maximize profit", "The price is always the lowest possible"], 
                correct: 2, 
                time: 30 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Price Elasticity", level: "Intermediate", questions: 10,
            img: './quizAssets/Economics/Price/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What does a Price Elasticity of Demand (PED) coefficient of 0.5 indicate?", 
                options: ["Elastic demand", "Inelastic demand", "Unit elastic demand", "Perfectly elastic demand"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 2, 
                question: "Using the Total Revenue Test, if a price increase leads to a DECREASE in total revenue, demand is:", 
                options: ["Inelastic", "Elastic", "Unitary", "Perfectly Inelastic"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 3, 
                question: "Which of the following is a primary determinant of a good being highly elastic?", 
                options: ["Lack of substitutes", "The good is a necessity", "Availability of many close substitutes", "The short run time period"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 4, 
                question: "A perfectly vertical demand curve represents what kind of elasticity?", 
                options: ["Perfectly Elastic (-1)", "Perfectly Inelastic (0)", "Unit Elastic (1)", "Relatively Elastic"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 5, 
                question: "What is the formula for the Midpoint Method of elasticity?", 
                options: [
                    "Change in Q / Change in P", 
                    "[(Q2-Q1)/((Q2+Q1)/2)] / [(P2-P1)/((P2+P1)/2)]", 
                    "Total Revenue / Quantity", 
                    "Price x Quantity"
                ], 
                correct: 1, 
                time: 45 
            },
            { 
                order: 6, 
                question: "If demand is 'Unit Elastic,' a 10% increase in price will result in:", 
                options: ["A 20% drop in quantity", "A 10% drop in quantity", "No change in quantity", "A 5% drop in quantity"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 7, 
                question: "Cross-Price Elasticity measures how the quantity demanded of one good responds to:", 
                options: ["A change in consumer income", "A change in its own price", "A change in the price of another good", "A change in tax rates"], 
                correct: 2, 
                time: 30 
            },
            { 
                order: 8, 
                question: "If the Income Elasticity of Demand for a good is NEGATIVE, the good is:", 
                options: ["A Normal Good", "An Inferior Good", "A Substitute", "A Complement"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 9, 
                question: "As you move DOWN a linear demand curve, elasticity typically:", 
                options: ["Increases", "Decreases", "Stays the same", "Becomes infinite"], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 10, 
                question: "Luxuries tend to have _____ elasticity, while necessities tend to have _____ elasticity.", 
                options: ["High, Low", "Low, High", "Zero, Infinite", "Unitary, High"], 
                correct: 0, 
                time: 25 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Price Theory", level: "Intermediate", questions: 8,
            img: './quizAssets/Economics/Price/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "In Price Theory, what is the primary role of prices in a market economy?", 
                options: ["To ensure government tax revenue", "To act as signals for resource allocation", "To keep production costs high", "To prevent competition"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 2, 
                question: "What is the 'Signaling Function' of a price increase?", 
                options: [
                    "It signals to consumers to buy more", 
                    "It signals to producers that more resources should be allocated to this good", 
                    "It signals that the economy is in a depression", 
                    "It has no theoretical signaling value"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 3, 
                question: "According to the 'Incentive Function' of prices, a falling price encourages:", 
                options: ["Producers to enter the market", "Consumers to substitute away from the good", "Producers to leave the market or reduce output", "Government subsidies"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 4, 
                question: "The 'Equimarginal Principle' suggests consumers will allocate spending so that:", 
                options: [
                    "They buy the cheapest goods available", 
                    "The marginal utility per dollar spent is equal across all goods", 
                    "They spend exactly half their income on housing", 
                    "They save 10% of every paycheck"
                ], 
                correct: 1, 
                time: 40 
            },
            { 
                order: 5, 
                question: "In Price Theory, a 'Shadow Price' refers to:", 
                options: [
                    "The price of goods on the black market", 
                    "The estimated opportunity cost of a resource not traded in a formal market", 
                    "The price of goods during a total eclipse", 
                    "The discount offered to bulk buyers"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 6, 
                question: "The 'Rationing Function' of price ensures that:", 
                options: [
                    "Goods are distributed based on political status", 
                    "Limited resources go to those who value them most (measured by willingness to pay)", 
                    "Everyone gets an equal share regardless of price", 
                    "Prices never change"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 7, 
                question: "What happens to the price-signaling mechanism when a 'Price Floor' is effective?", 
                options: [
                    "It becomes more accurate", 
                    "It is distorted, leading to a surplus of resources in that sector", 
                    "It eliminates the need for supply and demand", 
                    "It guarantees economic growth"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 8, 
                question: "The concept of 'Arbitrage' helps determine prices by:", 
                options: [
                    "Setting legal price limits", 
                    "Eliminating price differences for the same good in different markets", 
                    "Increasing the cost of shipping", 
                    "Allowing governments to control inflation"
                ], 
                correct: 1, 
                time: 30 
            }
        ],
        hints: 2
    }
        }
    ],
    "National Income": [
        {
            title: "GDP Basics", level: "Intermediate", questions: 10,
            img: './quizAssets/Economics/National Income/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the primary difference between GDP and GNP?", 
                options: [
                    "GDP is adjusted for inflation; GNP is not", 
                    "GDP measures production within borders; GNP measures production by citizens regardless of location", 
                    "GDP includes government spending; GNP does not", 
                    "There is no difference"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 2, 
                question: "In the formula GDP = C + I + G + (X - M), what does 'I' represent?", 
                options: [
                    "Individual savings accounts", 
                    "Investment in capital goods, inventory, and structures", 
                    "Interest rates on government debt", 
                    "International aid"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 3, 
                question: "Which of the following is EXCLUDED from GDP calculation to avoid 'double counting'?", 
                options: ["Final goods", "Services", "Intermediate goods", "Exports"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 4, 
                question: "The purchase of a pre-owned (used) home is:", 
                options: [
                    "Included in the 'I' category of GDP", 
                    "Excluded from GDP (only the realtor's service fee is included)", 
                    "Included in the 'C' category", 
                    "Subtracted from Net Exports"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 5, 
                question: "What is the difference between Nominal GDP and Real GDP?", 
                options: [
                    "Nominal uses current prices; Real is adjusted for inflation", 
                    "Real uses current prices; Nominal is adjusted for inflation", 
                    "Nominal includes exports; Real does not", 
                    "Nominal is only for developed countries"
                ], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 6, 
                question: "Which category of the expenditure approach is typically the largest component of U.S. GDP?", 
                options: ["Government Spending (G)", "Investment (I)", "Consumption (C)", "Net Exports (NX)"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 7, 
                question: "A 'Transfer Payment,' such as Social Security, is:", 
                options: [
                    "Included in Government Spending (G)", 
                    "Excluded from GDP because no new good or service is produced", 
                    "Included in Consumption (C)", 
                    "Counted as an Export"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 8, 
                question: "The GDP Deflator is a price index used to:", 
                options: [
                    "Calculate the unemployment rate", 
                    "Convert Nominal GDP into Real GDP", 
                    "Measure the cost of living for the elderly", 
                    "Predict future stock market crashes"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 9, 
                question: "If a country's Imports (M) are greater than its Exports (X), Net Exports is:", 
                options: ["Positive", "Negative (Trade Deficit)", "Zero", "Not included in GDP"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 10, 
                question: "Which of the following is a limitation of GDP as a measure of well-being?", 
                options: [
                    "It doesn't account for non-market activities (like housework)", 
                    "It doesn't measure income inequality", 
                    "It ignores environmental degradation", 
                    "All of the above"
                ], 
                correct: 3, 
                time: 30 
            }
        ],
        hints: 2
    }
        },
        {
            title: "GNP & NNP", level: "Intermediate", questions: 8,
            img: './quizAssets/Economics/National Income/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the main factor that distinguishes GNP from GDP?", 
                options: [
                    "Inflation adjustments", 
                    "Ownership of the factors of production (Nationality)", 
                    "The inclusion of government spending", 
                    "The size of the population"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 2, 
                question: "How do you calculate GNP from GDP?", 
                options: [
                    "GDP + Net factor income from abroad", 
                    "GDP - Taxes", 
                    "GDP + Depreciation", 
                    "GDP / Population"
                ], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 3, 
                question: "What does the 'Net' in Net National Product (NNP) signify?", 
                options: [
                    "Income after taxes", 
                    "Total value after subtracting depreciation (capital consumption)", 
                    "Value after subtracting imports", 
                    "The amount of profit left for the government"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 4, 
                question: "If a Japanese company produces cars in the USA, that production is counted in:", 
                options: [
                    "Japan's GDP and USA's GNP", 
                    "USA's GDP and Japan's GNP", 
                    "USA's GDP and USA's GNP", 
                    "Only Japan's GDP"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 5, 
                question: "Depreciation is also known in national accounting as:", 
                options: ["Capital Consumption Allowance", "Net Investment", "Indirect Business Tax", "Inventory Change"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 6, 
                question: "Which formula correctly derives NNP?", 
                options: [
                    "NNP = GNP - Depreciation", 
                    "NNP = GDP + Exports", 
                    "NNP = National Income + Taxes", 
                    "NNP = GNP + Inflation"
                ], 
                correct: 0, 
                time: 20 
            },
            { 
                order: 7, 
                question: "Why might NNP be considered a more accurate measure of economic health than GNP?", 
                options: [
                    "It is a larger number", 
                    "It accounts for the 'wear and tear' on the economy's assets", 
                    "It includes illegal market activities", 
                    "It is easier to calculate"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "National Income (NI) is typically derived by taking NNP and:", 
                options: [
                    "Subtracting statistical discrepancy and indirect business taxes", 
                    "Adding depreciation back in", 
                    "Dividing by the exchange rate", 
                    "Subtracting net exports"
                ], 
                correct: 0, 
                time: 40 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Income Methods", level: "Intermediate", questions: 12,
            img: './quizAssets/Economics/National Income/3.png',
            questionsDetails: {
            questions: [
            { 
                order: 1, 
                question: "The Income Approach calculates GDP by adding together:", 
                options: ["All spending in the economy", "All income earned by factors of production", "Total taxes and total exports", "Bank deposits and loans"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 2, 
                question: "Which component of the Income Approach is typically the largest?", 
                options: ["Corporate Profits", "Rent", "Compensation of Employees (Wages/Salaries)", "Interest Income"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 3, 
                question: "What is 'Proprietors' Income'?", 
                options: ["Income earned by large corporations", "The net income of sole proprietorships and partnerships", "Government tax revenue", "Rental income from land"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 4, 
                question: "In the Income Approach, 'Depreciation' (Capital Consumption) must be added back because:", 
                options: ["It is a source of cash income", "It was not included in the 'Net' income figures initially", "It represents government subsidies", "It is a form of tax"], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 5, 
                question: "What is the 'Statistical Discrepancy' in national accounting?", 
                options: ["A math error by the government", "The difference between GDP measured by expenditure and GDP measured by income", "The rate of inflation", "The number of unemployed people not counted"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 6, 
                question: "Which of the following is NOT a component of 'National Income'?", 
                options: ["Wages", "Corporate Profits", "Transfer Payments", "Net Interest"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 7, 
                question: "Why are Indirect Business Taxes (like sales tax) included when moving from National Income to GDP?", 
                options: ["They are a form of profit for the firm", "They are part of the market price paid for goods but aren't earned by factors of production", "They represent investment in infrastructure", "They are deducted from wages"], 
                correct: 1, 
                time: 40 
            },
            { 
                order: 8, 
                question: "Rental Income in the Income Approach includes:", 
                options: ["Only cash paid for apartments", "The imputed rent of owner-occupied housing plus returns on property", "The price of buying a new house", "The interest paid on a mortgage"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 9, 
                question: "Corporate Profits are usually divided into which three categories?", 
                options: ["Revenue, Cost, and Tax", "Dividends, Retained Earnings, and Corporate Income Taxes", "Sales, Marketing, and R&D", "Wages, Rent, and Interest"], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 10, 
                question: "Net Interest refers to:", 
                options: ["Interest paid by households to banks", "Interest received by households minus interest paid by households", "The interest rate set by the Central Bank", "The total national debt"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 11, 
                question: "The formula 'Wages + Rent + Interest + Profits' helps determine:", 
                options: ["Gross Domestic Product", "National Income", "Personal Income", "Disposable Income"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 12, 
                question: "Personal Income differs from National Income because it includes:", 
                options: ["Corporate taxes", "Transfer payments (like Social Security)", "Depreciation", "Undistributed corporate profits"], 
                correct: 1, 
                time: 35 
            }
        ],
        hints: 2
    }
        }
    ],
    "International Trade": [
        {
            title: "Trade Theories", level: "Intermediate", questions: 10,
            img: './quizAssets/Economics/International Trade/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the core principle of Adam Smith’s 'Absolute Advantage'?", 
                options: [
                    "A country should produce everything it needs", 
                    "A country should specialize in goods it can produce more efficiently than others", 
                    "Trade is a zero-sum game", 
                    "Countries should only trade with neighbors"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 2, 
                question: "David Ricardo’s 'Comparative Advantage' suggests countries should trade based on:", 
                options: ["Total production capacity", "Lower opportunity costs", "Abundance of gold", "Lower labor wages only"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 3, 
                question: "In trade theory, if Country A can produce 10 shirts or 5 hats, what is the opportunity cost of 1 hat?", 
                options: ["0.5 shirts", "2 shirts", "10 shirts", "5 hats"], 
                correct: 1, 
                time: 40 
            },
            { 
                order: 4, 
                question: "The Heckscher-Ohlin Theory (Factor Proportions) states that trade is driven by:", 
                options: [
                    "Differences in consumer tastes", 
                    "Relative abundance of land, labor, and capital", 
                    "Government subsidies", 
                    "Military strength"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 5, 
                question: "What does the 'Leontief Paradox' highlight?", 
                options: [
                    "That trade always leads to inflation", 
                    "Evidence that the U.S. exported labor-intensive goods despite being capital-abundant", 
                    "That comparative advantage is a myth", 
                    "That tariffs always increase domestic wealth"
                ], 
                correct: 1, 
                time: 40 
            },
            { 
                order: 6, 
                question: "What is 'Mercantilism'?", 
                options: [
                    "A theory advocating for free trade", 
                    "An economic policy aimed at accumulating gold through trade surpluses", 
                    "The study of market equilibrium", 
                    "A theory focusing on digital currencies"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 7, 
                question: "The 'Terms of Trade' refers to:", 
                options: [
                    "The laws governing trade in a country", 
                    "The ratio of an index of export prices to an index of import prices", 
                    "The duration of a trade agreement", 
                    "The distance between trading partners"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "According to the New Trade Theory, why do similar countries trade similar goods?", 
                options: [
                    "Because of absolute advantage", 
                    "Economies of scale and network effects", 
                    "Political alliances", 
                    "Lack of natural resources"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 9, 
                question: "What is the primary goal of 'Protectionism'?", 
                options: [
                    "To increase global trade volume", 
                    "To shield domestic industries from foreign competition via tariffs or quotas", 
                    "To eliminate borders", 
                    "To decrease the price of imports"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 10, 
                question: "Intra-industry trade refers to:", 
                options: [
                    "Trading raw materials for finished goods", 
                    "The exchange of similar products belonging to the same industry (e.g., cars for cars)", 
                    "Trade within a single company", 
                    "Government-to-government bartering"
                ], 
                correct: 1, 
                time: 30 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Balance of Payments", level: "Intermediate", questions: 10,
            img: './quizAssets/Economics/International Trade/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "The Balance of Payments (BOP) is a record of all economic transactions between:", 
                options: [
                    "The government and its citizens", 
                    "Domestic residents and the rest of the world", 
                    "The Central Bank and commercial banks", 
                    "Exporters and Importers only"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 2, 
                question: "Which sub-account records the export and import of goods and services?", 
                options: ["Capital Account", "Financial Account", "Current Account", "Savings Account"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 3, 
                question: "A 'Trade Deficit' occurs specifically when:", 
                options: [
                    "Investment exceeds savings", 
                    "Imports of goods exceed exports of goods", 
                    "The government spends more than it collects in taxes", 
                    "Currency value increases"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 4, 
                question: "What is included in the 'Financial Account'?", 
                options: [
                    "Foreign Direct Investment (FDI) and portfolio investment", 
                    "Unilateral transfers and gifts", 
                    "Tourism spending", 
                    "Net exports of services"
                ], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 5, 
                question: "In BOP accounting, if a country has a Current Account deficit, it MUST have a:", 
                options: [
                    "Financial Account deficit", 
                    "Financial Account surplus", 
                    "Budget deficit", 
                    "High inflation rate"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 6, 
                question: "What does 'Foreign Direct Investment' (FDI) involve?", 
                options: [
                    "Buying stocks in a foreign company (less than 10%)", 
                    "Establishing a physical presence or significant control in a foreign business", 
                    "Lending money to a foreign government", 
                    "Sending humanitarian aid"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 7, 
                question: "Unilateral transfers, such as foreign aid or worker remittances, are recorded in the:", 
                options: ["Current Account", "Capital Account", "Official Reserves", "Trade Balance"], 
                correct: 0, 
                time: 30 
            },
            { 
                order: 8, 
                question: "When a central bank buys or sells foreign currency to influence the exchange rate, it is recorded in:", 
                options: ["Net Errors and Omissions", "Official Reserve Assets", "The Trade Balance", "The Budget Balance"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 9, 
                question: "A 'Credit' in the Balance of Payments results in:", 
                options: [
                    "Money flowing out of the country", 
                    "Money flowing into the country", 
                    "An increase in national debt", 
                    "A decrease in the money supply"
                ], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 10, 
                question: "Why is the BOP theoretically supposed to sum to zero?", 
                options: [
                    "Because trade is always equal", 
                    "Because it uses double-entry bookkeeping where every credit has a corresponding debit", 
                    "Because the IMF forces it to balance", 
                    "Because governments fix their exchange rates"
                ], 
                correct: 1, 
                time: 35 
            }
        ],
        hints: 2
    }
        },
        {
            title: "Trade Policies", level: "Intermediate", questions: 8,
            img: './quizAssets/Economics/International Trade/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "An 'Ad Valorem' tariff is calculated as:", 
                options: [
                    "A fixed dollar amount per unit imported", 
                    "A percentage of the total value of the imported good", 
                    "The difference between domestic and world prices", 
                    "A tax based on the weight of the good"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 2, 
                question: "What is the primary difference between a Tariff and an Import Quota?", 
                options: [
                    "Tariffs restrict quantity; Quotas raise revenue", 
                    "Tariffs raise revenue for the government; Quotas restrict quantity and generate 'quota rent'", 
                    "There is no economic difference", 
                    "Quotas are only used for services"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 3, 
                question: "What is a 'Voluntary Export Restraint' (VER)?", 
                options: [
                    "A tax paid by the consumer", 
                    "A quota on trade imposed from the exporting country's side, usually at the request of the importer", 
                    "A ban on all trade between two nations", 
                    "A subsidy for local farmers"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 4, 
                question: "The 'Infant Industry Argument' suggests that protectionism is justified if:", 
                options: [
                    "The industry produces goods for babies", 
                    "A new domestic industry needs time to become competitive against established foreign rivals", 
                    "The industry is failing and needs to be shut down", 
                    "The country wants to decrease its population"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 5, 
                question: "In the context of trade policy, what is 'Dumping'?", 
                options: [
                    "Disposing of waste in international waters", 
                    "Selling goods in a foreign market at a price below the cost of production or home market price", 
                    "Exporting goods without paying any tariffs", 
                    "Buying more imports than a country can afford"
                ], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 6, 
                question: "Who are the primary winners when a country imposes an import tariff?", 
                options: [
                    "Domestic consumers and foreign producers", 
                    "Domestic producers and the domestic government", 
                    "The shipping industry", 
                    "Foreign consumers"
                ], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 7, 
                question: "An 'Export Subsidy' generally results in:", 
                options: [
                    "Lower prices for domestic consumers", 
                    "Higher domestic prices as more goods are sent abroad", 
                    "Increased government revenue", 
                    "A decrease in total exports"
                ], 
                correct: 1, 
                time: 35 
            },
            { 
                order: 8, 
                question: "What does 'Deadweight Loss' represent in a tariff diagram?", 
                options: [
                    "The total tax revenue collected", 
                    "The efficiency loss to society because the tariff distorts consumption and production", 
                    "The cost of the goods themselves", 
                    "The profit made by foreign companies"
                ], 
                correct: 1, 
                time: 30 
            }
        ],
        hints: 2
    }
        }
    ],
    "Geography": [
        {
            title: "Continents & Oceans", level: "Beginner", questions: 10,
            img: './quizAssets/GK/Geography/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "How many continents are there on Earth?", 
                options: ["5", "6", "7", "8"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 2, 
                question: "Which is the largest continent by land area?", 
                options: ["Africa", "North America", "Asia", "Antarctica"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 3, 
                question: "Which ocean is the largest and deepest on Earth?", 
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], 
                correct: 3, 
                time: 15 
            },
            { 
                order: 4, 
                question: "Which continent is also a country?", 
                options: ["Europe", "Australia", "South America", "Africa"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 5, 
                question: "Which ocean is located between the Americas and Europe/Africa?", 
                options: ["Pacific Ocean", "Indian Ocean", "Atlantic Ocean", "Southern Ocean"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 6, 
                question: "In which continent is the Sahara Desert located?", 
                options: ["Asia", "Africa", "South America", "Australia"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 7, 
                question: "Which is the smallest continent by land area?", 
                options: ["Europe", "Australia", "Antarctica", "South America"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 8, 
                question: "Which ocean is found around the North Pole?", 
                options: ["Southern Ocean", "Arctic Ocean", "Indian Ocean", "Pacific Ocean"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 9, 
                question: "The Amazon Rainforest is located on which continent?", 
                options: ["Africa", "Asia", "South America", "North America"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 10, 
                question: "Which continent is known as the 'Frozen Continent' and has no permanent residents?", 
                options: ["North America", "Europe", "Antarctica", "Asia"], 
                correct: 2, 
                time: 15 
            }
        ],
        hints: -1
    }
        },
        {
            title: "Countries & Capitals", level: "Beginner", questions: 12,
            img: './quizAssets/GK/Geography/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the capital of France?", 
                options: ["Lyon", "Marseille", "Paris", "Nice"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 2, 
                question: "What is the capital of Japan?", 
                options: ["Osaka", "Kyoto", "Tokyo", "Nagoya"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 3, 
                question: "Which city is the capital of the United Kingdom?", 
                options: ["Edinburgh", "London", "Belfast", "Cardiff"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 4, 
                question: "What is the capital of Italy?", 
                options: ["Venice", "Milan", "Rome", "Florence"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 5, 
                question: "What is the capital of Canada?", 
                options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 6, 
                question: "What is the capital of Germany?", 
                options: ["Munich", "Berlin", "Frankfurt", "Hamburg"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 7, 
                question: "What is the capital of China?", 
                options: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 8, 
                question: "What is the capital of Brazil?", 
                options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 9, 
                question: "Which city is the capital of Egypt?", 
                options: ["Alexandria", "Luxor", "Cairo", "Giza"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 10, 
                question: "What is the capital of Australia?", 
                options: ["Sydney", "Melbourne", "Canberra", "Perth"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 11, 
                question: "What is the capital of India?", 
                options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 12, 
                question: "What is the capital of Mexico?", 
                options: ["Guadalajara", "Monterrey", "Mexico City", "Cancún"], 
                correct: 2, 
                time: 15 
            }
        ],
        hints: -1
    }
        },
        {
            title: "Physical Geography", level: "Intermediate", questions: 10,
            img: './quizAssets/GK/Geography/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the primary driver of tectonic plate movement?", 
                options: ["Tidal forces", "Convection currents in the mantle", "Earth's magnetic field", "Surface winds"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 2, 
                question: "The 'Ring of Fire' is a major area in the basin of the Pacific Ocean where many ________ occur.", 
                options: ["Tropical storms", "Earthquakes and volcanic eruptions", "Deep sea trenches", "Icebergs"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 3, 
                question: "What is the name of the supercontinent that existed roughly 335 million years ago?", 
                options: ["Gondwana", "Laurasia", "Pangea", "Atlantis"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 4, 
                question: "The 'Rain Shadow' effect refers to dry areas on the ________ side of a mountain.", 
                options: ["Windward (facing the wind)", "Leeward (away from the wind)", "Northern", "Summit"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 5, 
                question: "Which layer of the atmosphere contains the ozone layer and reflects UV radiation?", 
                options: ["Troposphere", "Stratosphere", "Mesosphere", "Exosphere"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 6, 
                question: "What geological process is responsible for creating the Himalayan Mountains?", 
                options: ["Volcanic activity", "Glacial erosion", "Collision of two continental plates", "Wind erosion"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 7, 
                question: "The Coriolis Effect causes winds in the Northern Hemisphere to deflect to the:", 
                options: ["Left", "Right", "North", "South"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 8, 
                question: "Which type of rock is formed from the cooling and solidification of magma or lava?", 
                options: ["Sedimentary", "Metamorphic", "Igneous", "Fossilized"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 9, 
                question: "What is the term for a semi-enclosed coastal body of water where fresh water meets the sea?", 
                options: ["Archipelago", "Estuary", "Isthmus", "Fjord"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 10, 
                question: "An 'Oxbow Lake' is a U-shaped body of water that forms when:", 
                options: ["A glacier melts", "A wide meander from the main stem of a river is cut off", "A volcano collapses", "Tectonic plates shift"], 
                correct: 1, 
                time: 35 
            }
        ],
        hints: -1
    }
        }
    ],
    "General Science": [
        {
            title: "Chemistry Basics", level: "Beginner", questions: 12,
            img: './quizAssets/GK/General Science/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What is the smallest unit of matter that retains the properties of an element?", 
                options: ["Molecule", "Atom", "Cell", "Neutron"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 2, 
                question: "Which subatomic particle has a positive charge?", 
                options: ["Electron", "Neutron", "Proton", "Positron"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 3, 
                question: "H2O is the chemical formula for which common substance?", 
                options: ["Hydrogen peroxide", "Salt", "Water", "Helium"], 
                correct: 2, 
                time: 10 
            },
            { 
                order: 4, 
                question: "On the Periodic Table, what is the symbol for the element Gold?", 
                options: ["Ag", "Gd", "Go", "Au"], 
                correct: 3, 
                time: 20 
            },
            { 
                order: 5, 
                question: "Which state of matter has a definite volume but no definite shape?", 
                options: ["Solid", "Liquid", "Gas", "Plasma"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 6, 
                question: "What is the pH level of pure water, indicating it is neutral?", 
                options: ["0", "1", "7", "14"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 7, 
                question: "Which gas do plants absorb from the atmosphere for photosynthesis?", 
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 8, 
                question: "The 'Atomic Number' of an element is determined by the number of ________ in its nucleus.", 
                options: ["Electrons", "Protons", "Neutrons", "Isotopes"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 9, 
                question: "What is the process of a solid changing directly into a gas called?", 
                options: ["Evaporation", "Condensation", "Sublimation", "Melting"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 10, 
                question: "Which element is the most abundant in Earth's atmosphere?", 
                options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 11, 
                question: "In an atom, where are the electrons located?", 
                options: ["Inside the nucleus", "Orbiting the nucleus", "Fixed in the proton", "In the center"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 12, 
                question: "Which of these is a 'Noble Gas'?", 
                options: ["Oxygen", "Chlorine", "Neon", "Iron"], 
                correct: 2, 
                time: 20 
            }
        ],
        hints: -1
    }
        },
        {
            title: "Physics Basics", level: "Beginner", questions: 10,
            img: './quizAssets/GK/General Science/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What force pulls objects toward the center of the Earth?", 
                options: ["Magnetism", "Gravity", "Inertia", "Friction"], 
                correct: 1, 
                time: 10 
            },
            { 
                order: 2, 
                question: "According to Newton's First Law, an object at rest tends to:", 
                options: ["Start moving", "Stay at rest", "Lose weight", "Change color"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 3, 
                question: "What is the primary source of energy for the Earth's ecosystem?", 
                options: ["The Moon", "The Sun", "Electricity", "Wind"], 
                correct: 1, 
                time: 10 
            },
            { 
                order: 4, 
                question: "Which state of energy is 'stored' energy, such as a rock sitting at the top of a hill?", 
                options: ["Kinetic Energy", "Thermal Energy", "Potential Energy", "Sound Energy"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 5, 
                question: "What do we call a material that allows electricity to flow through it easily?", 
                options: ["Insulator", "Conductor", "Resistor", "Reflector"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 6, 
                question: "Light traveling through a prism breaks into a rainbow. This process is called:", 
                options: ["Reflection", "Refraction", "Absorption", "Convection"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 7, 
                question: "Which of these is a measure of an object's speed in a specific direction?", 
                options: ["Mass", "Velocity", "Volume", "Density"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 8, 
                question: "Sound travels in the form of:", 
                options: ["Particles", "Waves", "Light", "Heat"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 9, 
                question: "What is the standard unit of measurement for force?", 
                options: ["Joule", "Watt", "Newton", "Volt"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 10, 
                question: "Energy created by the movement of atoms is known as:", 
                options: ["Mechanical Energy", "Chemical Energy", "Thermal (Heat) Energy", "Nuclear Energy"], 
                correct: 2, 
                time: 20 
            }
        ],
        hints: -1
    }
        },
        {
            title: "Biology Basics", level: "Intermediate", questions: 10,
            img: './quizAssets/GK/General Science/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "Which organelle is known as the 'control center' of the cell and contains DNA?", 
                options: ["Mitochondria", "Ribosome", "Nucleus", "Golgi Apparatus"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 2, 
                question: "In DNA, which nitrogenous base always pairs with Cytosine?", 
                options: ["Adenine", "Thymine", "Uracil", "Guanine"], 
                correct: 3, 
                time: 25 
            },
            { 
                order: 3, 
                question: "What is the process by which cells divide to produce two identical daughter cells?", 
                options: ["Meiosis", "Mitosis", "Osmosis", "Photosynthesis"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 4, 
                question: "According to Mendelian genetics, if an organism has two different alleles for a trait, it is:", 
                options: ["Homozygous", "Heterozygous", "Recessive", "Haploid"], 
                correct: 1, 
                time: 30 
            },
            { 
                order: 5, 
                question: "What is the primary product of photosynthesis that plants use for energy?", 
                options: ["Oxygen", "Carbon Dioxide", "Glucose", "Nitrogen"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 6, 
                question: "Which system in the human body is responsible for transporting oxygen and nutrients to tissues?", 
                options: ["Endocrine System", "Lymphatic System", "Circulatory System", "Respiratory System"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 7, 
                question: "What is the function of a 'Ribosome' in a cell?", 
                options: ["Energy production", "Waste removal", "Protein synthesis", "Lipid storage"], 
                correct: 2, 
                time: 25 
            },
            { 
                order: 8, 
                question: "In an ecosystem, which level consists of organisms that break down dead organic matter?", 
                options: ["Primary Consumers", "Decomposers", "Autotrophs", "Tertiary Consumers"], 
                correct: 1, 
                time: 25 
            },
            { 
                order: 9, 
                question: "Which molecule is often called the 'energy currency' of the cell?", 
                options: ["DNA", "RNA", "ATP", "Chlorophyll"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 10, 
                question: "A change in the DNA sequence that can lead to variations in a species is called a:", 
                options: ["Mutation", "Adaptation", "Selection", "Transcription"], 
                correct: 0, 
                time: 20 
            }
        ],
        hints: -1
    }
        }
    ],
    "Fun Play": [
        {
            title: "Flags & Countries", level: "Beginner", questions: 10,
            img: './quizAssets/GK/Fun/1.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "Which country does this flag belong to?", 
                imageURL: "https://flagcdn.com/w320/jp.png",
                options: ["South Korea", "Japan", "China", "Vietnam"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 2, 
                question: "Which country's flag features a red maple leaf in the center?", 
                imageURL: "https://flagcdn.com/w320/ca.png",
                options: ["USA", "Canada", "United Kingdom", "Australia"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 3, 
                question: "This 'Union Jack' is the national flag of which country?", 
                imageURL: "https://flagcdn.com/w320/gb.png",
                options: ["Australia", "New Zealand", "United Kingdom", "Iceland"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 4, 
                question: "Which European country uses this tricolor flag of Black, Red, and Gold?", 
                imageURL: "https://flagcdn.com/w320/de.png",
                options: ["Belgium", "Germany", "France", "Austria"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 5, 
                question: "Identify the country with this unique green, white, and red flag featuring an eagle?", 
                imageURL: "https://flagcdn.com/w320/mx.png",
                options: ["Italy", "Mexico", "Portugal", "Spain"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 6, 
                question: "Which country's flag is known as the 'Stars and Stripes'?", 
                imageURL: "https://flagcdn.com/w320/us.png",
                options: ["Liberia", "Malaysia", "USA", "Chile"], 
                correct: 2, 
                time: 10 
            },
            { 
                order: 7, 
                question: "This flag belongs to the largest country in South America. Which one is it?", 
                imageURL: "https://flagcdn.com/w320/br.png",
                options: ["Argentina", "Colombia", "Brazil", "Peru"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 8, 
                question: "Which country has a yellow sun with 8 rays and 3 stars on its flag?", 
                imageURL: "https://flagcdn.com/w320/ph.png",
                options: ["Philippines", "Thailand", "Indonesia", "Singapore"], 
                correct: 0, 
                time: 20 
            },
            { 
                order: 9, 
                question: "This flag with a blue cross on a white background belongs to which Nordic country?", 
                imageURL: "https://flagcdn.com/w320/fi.png",
                options: ["Sweden", "Norway", "Finland", "Denmark"], 
                correct: 2, 
                time: 20 
            },
            { 
                order: 10, 
                question: "Which country features a blue 'Ashoka Chakra' wheel in the center of its flag?", 
                imageURL: "https://flagcdn.com/w320/in.png",
                options: ["India", "Pakistan", "Bangladesh", "Sri Lanka"], 
                correct: 0, 
                time: 15 
            }
        ],
        hints: -1
    }
        },
        {
            title: "Logos & Brands", level: "Beginner", questions: 10,
            img: './quizAssets/GK/Fun/2.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "Which tech giant uses this iconic 'bitten apple' logo?", 
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                options: ["Microsoft", "Apple", "Samsung", "HP"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 2, 
                question: "This famous 'Swoosh' belongs to which sportswear brand?", 
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
                options: ["Adidas", "Puma", "Nike", "Reebok"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 3, 
                question: "Which fast-food chain is known for these 'Golden Arches'?", 
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg",
                options: ["Burger King", "Wendy's", "McDonald's", "Subway"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 4, 
                question: "Identify the brand behind this multi-colored 'G' logo.", 
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_\"G\"_logo.svg",
                options: ["Google", "Gatorade", "Gap", "Gucci"], 
                correct: 0, 
                time: 15 
            },
            { 
                order: 5, 
                question: "This 'Jumpman' silhouette is a sub-brand of Nike associated with which athlete?", 
                imageURL: "https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg",
                options: ["LeBron James", "Michael Jordan", "Kobe Bryant", "Stephen Curry"], 
                correct: 1, 
                time: 20 
            },
            { 
                order: 6, 
                question: "Which luxury car brand uses this 'Three-Pointed Star' in a circle?", 
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Benz_Logo_2010.svg",
                options: ["BMW", "Audi", "Mercedes-Benz", "Lexus"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 7, 
                question: "This blue bird was the long-time logo for which social media platform?", 
                imageURL: "https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg",
                options: ["Facebook", "Twitter", "LinkedIn", "Skype"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 8, 
                question: "Which beverage company uses this distinctive red and white script?", 
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
                options: ["Pepsi", "Red Bull", "Coca-Cola", "Dr. Pepper"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 9, 
                question: "This 'smiling arrow' suggests the company delivers everything from A to Z. Name it.", 
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
                options: ["eBay", "Amazon", "FedEx", "Walmart"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 10, 
                question: "Which entertainment company uses this 'Magic Castle' silhouette?", 
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Disney_logo.svg",
                options: ["Universal", "Warner Bros", "Disney", "Paramount"], 
                correct: 2, 
                time: 15 
            }
        ],
        hints: -1
    }

        },
        {
            title: "Symbols & Signs", level: "Beginner", questions: 8,
            img: './quizAssets/GK/Fun/3.png',
            questionsDetails: {
        questions: [
            { 
                order: 1, 
                question: "What does this common road sign indicate?", 
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Stop_sign.svg",
                options: ["Yield", "Stop", "No Entry", "One Way"], 
                correct: 1, 
                time: 10 
            },
            { 
                order: 2, 
                question: "This 'Three Chasing Arrows' symbol is the international sign for:", 
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/4/44/Recycle001.svg",
                options: ["Biohazard", "Recycling", "Flammable", "Compost"], 
                correct: 1, 
                time: 10 
            },
            { 
                order: 3, 
                question: "What is the meaning of this yellow triangular warning sign?", 
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/2/21/Warning_sign_high_voltage.svg",
                options: ["Slippery Floor", "Radiation", "High Voltage", "Toxic"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 4, 
                question: "On a digital interface, what action is usually represented by a 'Magnifying Glass' icon?", 
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/d/de/Google_Magnifying_Glass.svg",
                options: ["Zoom In", "Search", "Delete", "Settings"], 
                correct: 1, 
                time: 10 
            },
            { 
                order: 5, 
                question: "This red circular sign with a white horizontal bar means:", 
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/d/d6/No_entry.svg",
                options: ["No Parking", "No U-Turn", "No Entry", "End of Road"], 
                correct: 2, 
                time: 15 
            },
            { 
                order: 6, 
                question: "What does this 'Skull and Crossbones' symbol warn against?", 
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/1/13/Skull_and_crossbones.svg",
                options: ["Pirates Nearby", "Poison / Toxic Material", "Deep Water", "Electrical Danger"], 
                correct: 1, 
                time: 15 
            },
            { 
                order: 7, 
                question: "Which of these is the standard symbol for 'Bluetooth' connectivity?", 
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/d/da/Bluetooth.svg",
                options: ["Wi-Fi", "Bluetooth", "NFC", "Settings"], 
                correct: 1, 
                time: 10 
            },
            { 
                order: 8, 
                question: "The 'Heart' symbol in most apps typically allows a user to:", 
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Heart_corazón.svg",
                options: ["Share", "Save to Favorites / Like", "Delete", "Direct Message"], 
                correct: 1, 
                time: 10 
            }
        ],
        hints: -1
    }

        }
    ]
}


export { quizCategories }
export { quizCards }