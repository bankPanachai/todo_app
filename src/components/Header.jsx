export function Header(props) {
    const { todos } = props
    const todosLength = todos.length
    const isTaskPlural = todosLength != 1 ? 'tasks': 'task'
    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} open {isTaskPlural}</h1>
        </header>
    )
}