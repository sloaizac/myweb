export const skills = {
    "html": ["html", "jsx", "handlebars", "jinja"],
    "css": ["CSS", "sass", "bootstrap"],
    "javascript": ["javascript", "react", "node"],
    "backend": ["flask", "django", "postgreSQL", "mongoDB"],
    "others": ["github"]
}

export const projects = [
    {
        name: 'planner',
        state: 'finalized',
        description: "Planner is an application that allows users to have an account in which they can save notes, create projects, to-do lists and organize their agenda thanks to the calendar of events.",
        technologies: ['CSS', 'bootstrap', 'react', 'mysql', 'node'],
        photos: ['planner1.png', 'planner2.png', 'planner3.png', 'planner4.png'],
        github: 'https://github.com/sloaizac/task-app',
        url: 'https://planner-task-app.herokuapp.com/'
    },
    {
        name: 'books-review',
        state: 'finalized',
        description: "Books reviews is an application that allows you to search the books of your interest within our database, read other people's reviews, their current rating and create your own reviews.",
        technologies: ['html', 'bootstrap', 'jinja', 'flask', 'postgreSQL'],
        photos: ['books1.png', 'books2.png', 'books3.png'],
        github: 'https://github.com/sloaizac/book-reviews',
        youtube: 'https://www.youtube.com/watch?v=YolwvMh1Lu4'
    },
    {
        name: 'flack',
        state: 'finalized',
        description: "Flack is an interactive open chat, in which the user can create new channels or join existing channels to message.",
        technologies: ['html', 'jinja', 'bootstrap', 'javascript', 'flask'],
        photos: ['chat1.png'],
        github: 'https://github.com/sloaizac/book-reviews',
        youtube: 'https://www.youtube.com/watch?v=XM1tlawvXWI'
    },
    {
        name: 'super pizza',
        state: 'in progress',
        description: "Website designed with a pizza restaurant in mind where customers can view the menu, select their products and add them to the shopping cart in addition to being able to leave their opinions.",
        technologies: ['html', 'bootstrap', 'javascript', 'django'],
        photos: ['pizza1.png', 'construction.jpeg'],
        github: 'https://github.com/sloaizac/super-pizza'
    },
    {
        name: 'my web',
        state: 'in progress',
        description: "This place where i can share my work and communicate with you",
        technologies: ['CSS', 'bootstrap', 'react', 'javascript'],
        photos: ['construction.jpeg'],
        github: '',
        url: ''
    }
]

