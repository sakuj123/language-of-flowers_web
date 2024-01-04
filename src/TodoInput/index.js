import './index.css';
import { useState } from 'react';

const TodoInput = (props) => {
    const [content, setContent] = useState('');

    const changeContent = (event) => {
        setContent(event.target.value);
    };

    const onSubmit = () =>{
        props.onAdd(content)

        setContent('');
    }

    return(
        <div className='todo-input-wr'>
            <input 
            className='todo-input'
            value={content}
            onChange={changeContent}
            />

            <button
            className='todo-submit' 
            onClick= {onSubmit}>
                확인</button>
        </div>
    )
}

export default TodoInput;