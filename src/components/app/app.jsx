import '../app/app.scss'
import { useRef } from 'react';

const App = () => {
    // Створення посилання на DOM-елемент
    const inputRef = useRef(null);

    const handleClick = () => {
        // Фокусування на введенні після кліку на кнопці
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    );

    }

    export default App