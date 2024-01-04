import './index.css'
const TodoItem = (props) => {

    const onToggle = () => {
        props.ontoggle(props.id);
    }

    const onDelete = () => {
        props.onDelete(props.id);
    }
    return(
        <div className="button_wrapper" >
            <div>
                <label
                className={`todo-item-labe ${props.completed ? 'line-through' : ''}`} 
                onClick={ontoggle}>
                    <input type='checkbox'></input>
                </label>
            </div>
            <div className='text'>
                {props.content}

            </div>

            <button onClick={onDelete}>삭제하기</button>
        </div>
    )
}

export default TodoItem;