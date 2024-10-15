const todolist = [
    {
        id: '1',
        title: 'What to learn',
        filter: 'all'
    },
    {
        id: '2',
        title: 'What to learn',
        filter: 'all'
    }
]
const tasks = {
    [todolist[0].id]: [
        {id: 3, title: '"HTML', isDone: false},
        {id: 4, title: '"HTML', isDone: false},
        {id: 5, title: '"HTML', isDone: false},
    ],
    [todolist[1].id]: [
        {id: 3, title: '"HTML', isDone: false},
        {id: 4, title: '"HTML', isDone: false},
        {id: 5, title: '"HTML', isDone: false},
    ]
}
console.log([1, 2, 3, 4, 5].reduce((acc, el) => acc += el, 0))