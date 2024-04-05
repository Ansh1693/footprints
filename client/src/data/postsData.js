const postData = [{
    id: "1",
    name: "Mark Cunban",
    title: "title",
    description: "description",
    imgUrl: "https://images.unsplash.com/photo-1682686578456-69ae00b0ecbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    category: "youtube",
    textOnly: false,
    pinned: true
},
{
    id: "2",
    name: "Mark Wood",
    title: "How to not be good",
    description: "Today I was debugging an issue in react which my teammate was trying to fix for 2 days. I spent nearly 5 hours and finally found out the root cause which gave a dopamine rush (which stayed for an hour). These days very few things make me this happy. I like debugging so much (especially unfamiliar code).",
    imgUrl: "https://images.unsplash.com/photo-1691608153399-9c610a3dbfd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    category: "reddit",
    textOnly: true,
    pinned: true
},
{
    id: "3",
    name: "Mark Wood",
    title: "How to not be good",
    description: "Today I was debugging an issue in react which my teammate was trying to fix for 2 days.",
    imgUrl: "https://images.unsplash.com/photo-1682687218904-de46ed992b58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
    category: "youtube",
    textOnly: false,
    pinned: true
},
{
    id: "4",
    name: "Mark Wood",
    title: "How to not be good",
    description: "Today I was debugging an issue in react which my teammate was trying to fix for 2 days.",
    imgUrl: "https://images.unsplash.com/photo-1691608153399-9c610a3dbfd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    category: "twitter",
    textOnly: true,
    pinned: false
},
{
    id: "5",
    name: "Mark Wood",
    title: "How to not be good",
    description: "Today I was debugging an issue in react which my teammate was trying to fix for 2 days.",
    imgUrl: "https://images.unsplash.com/photo-1683009427037-c5afc2b8134d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "youtube",
    textOnly: false,
    pinned: false
},
{
    id: "6",
    name: "Mark Wood",
    title: "How to not be good",
    description: "Today I was debugging an issue in react which my teammate was trying to fix for 2 days.",
    imgUrl: "https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "youtube",
    textOnly: false,
    pinned: false
},
{
    id: "7",
    name: "Mark Wood",
    title: "How to not be good",
    description: "Today I was debugging an issue in react which my teammate was trying to fix for 2 days.",
    imgUrl: "https://images.unsplash.com/photo-1682685797886-79020b7462a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "youtube",
    textOnly: false,
    pinned: false
},
{
    id: "8",
    name: "Mark Wood",
    title: "How to not be good",
    description: "Today I was debugging an issue in react which my teammate was trying to fix for 2 days.",
    imgUrl: "https://images.unsplash.com/photo-1685450124852-81468027c7c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    category: "youtube",
    textOnly: false,
    pinned: false
}, {
    id: "9",
    name: "Mark Cunban",
    title: "title",
    description: "description",
    imgUrl: "https://images.unsplash.com/photo-1682686580922-2e594f8bdaa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    category: "article",
    textOnly: false,
    pinned: false
},
{
    id: "10",
    name: "Mark Wood",
    title: "How to not be good",
    description: "Today I was debugging an issue in react which my teammate was trying to fix for 2 days. I spent nearly 5 hours and finally found out the root cause which gave a dopamine rush (which stayed for an hour). These days very few things make me this happy. I like debugging so much (especially unfamiliar code).",
    imgUrl: "https://images.unsplash.com/photo-1691608153399-9c610a3dbfd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    category: "shopping",
    textOnly: true,
    pinned: false
}, {
    id: "11",
    name: "Mark Wood",
    title: "How to not be good",
    description: "Today I was debugging an issue in react which my teammate was trying to fix for 2 days. I spent nearly 5 hours and finally found out the root cause which gave a dopamine rush (which stayed for an hour). These days very few things make me this happy. I like debugging so much (especially unfamiliar code).",
    imgUrl: "https://images.unsplash.com/photo-1692278265637-c40e94af0cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=395&q=80",
    category: "pinterest",
    textOnly: true,
    pinned: false
}, {
    id: "12",
    name: "Mark Wood",
    title: "How to not be good",
    description: "Today I was debugging an issue in react which my teammate was trying to fix for 2 days. I spent nearly 5 hours and finally found out the root cause which gave a dopamine rush (which stayed for an hour). These days very few things make me this happy. I like debugging so much (especially unfamiliar code).",
    imgUrl: "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "imdb",
    textOnly: true,
    pinned: false
},
]


export default postData