const blogData = [
    {
        id: 1,
        title: "What does it take to become a web developer?",
        image: "https://i.ibb.co.com/m5yGbdk/1707248882061.jpg",
        date: "10 Oct 2023",
        tag: "Web Developer",
        author: "Sinan",
        readTime: "1 Min",
        description: "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet...",
        content: "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet. It ranges from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. Core skills include HTML, CSS, JavaScript, and backend languages like Node.js or Python.",
        likes: 120,
        comments: [
            { user: "Alice", text: "Great article!", date: "2026-01-03" },
            { user: "Bob", text: "Very helpful, thanks.", date: "2026-01-04" }
        ]
    },
    {
        id: 2,
        title: "The Future of AI in Software Engineering",
        image: "https://i.ibb.co.com/m5yGbdk/1707248882061.jpg",
        date: "12 Oct 2023",
        tag: "Artificial Intelligence",
        author: "Sinan",
        readTime: "3 Min",
        description: "Artificial Intelligence is rapidly transforming how we write code. From copilots to autonomous agents, the landscape is shifting...",
        content: "Artificial Intelligence is rapidly transforming how we write code. From copilots to autonomous agents, the landscape is shifting. Developers are now orchestrators of AI tools rather than just typists of syntax. This shift requires a new set of skills, focusing more on system design and problem-solving than rote memorization of libraries.",
        likes: 85,
        comments: []
    },
    {
        id: 3,
        title: "Mastering React Hooks",
        image: "https://i.ibb.co.com/m5yGbdk/1707248882061.jpg",
        date: "15 Oct 2023",
        tag: "React JS",
        author: "Sinan",
        readTime: "5 Min",
        description: "Hooks have revolutionized React development. Learn how to use useEffect, useState, and custom hooks effectively...",
        content: "Hooks have revolutionized React development. Learn how to use useEffect, useState, and custom hooks effectively. Understanding dependency arrays and closure traps is crucial for building bug-free React applications. This guide covers advanced patterns and best practices.",
        likes: 200,
        comments: []
    },
    {
        id: 4,
        title: "CSS Grid vs Flexbox",
        image: "https://i.ibb.co.com/m5yGbdk/1707248882061.jpg",
        date: "18 Oct 2023",
        tag: "CSS",
        author: "Sinan",
        readTime: "4 Min",
        description: "When should you use Grid? When is Flexbox better? A comprehensive guide to modern CSS layout techniques...",
        content: "When should you use Grid? When is Flexbox better? A comprehensive guide to modern CSS layout techniques. Grid is perfect for 2D layouts, while Flexbox shines in 1D content alignment. We explore real-world examples where combining both yields the best results.",
        likes: 45,
        comments: []
    },
    {
        id: 5,
        title: "Optimizing Web Performance",
        image: "https://i.ibb.co.com/m5yGbdk/1707248882061.jpg",
        date: "20 Oct 2023",
        tag: "Performance",
        author: "Sinan",
        readTime: "6 Min",
        description: "Slow websites kill conversions. Discover techniques to speed up your load times, from lazy loading to code splitting...",
        content: "Slow websites kill conversions. Discover techniques to speed up your load times, from lazy loading to code splitting. We discuss the importance of Core Web Vitals and how to measure and improve them using modern tools.",
        likes: 300,
        comments: []
    },
    {
        id: 6,
        title: "Understanding TypeScript Generics",
        image: "https://i.ibb.co.com/m5yGbdk/1707248882061.jpg",
        date: "22 Oct 2023",
        tag: "TypeScript",
        author: "Sinan",
        readTime: "7 Min",
        description: "Generics allow for reusable and type-safe code. Dive deep into how they work and when to use them...",
        content: "Generics allow for reusable and type-safe code. Dive deep into how they work and when to use them. Whether you are building a library or a complex application, generics provide the flexibility needed without sacrificing type safety.",
        likes: 150,
        comments: []
    }
];

export default blogData;
