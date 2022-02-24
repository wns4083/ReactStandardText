/* State란?
 컴포넌트로 상태가 가변적 (유동적)인 요소를 설정

 new file
 >
 Couter.js
    import React, {useState} from 'react'; //State를 사용하기 위해서 불러옴
    const counter = () => {
        const [count, setCount] = useState(0); //비구조화 할당으로 사용
        const [기준, 변화값] = useState(초기값);
        const onIncrease = () =>{
            setCount(count + 1);
        };
        const onDecrease = () =>{
            setCount(count -1);
        };
        return (
            <div>
                <h2>{count}</h2>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDeCrease}>-</button>
            </div>
        )
    }
    export default counter;

    이동
    App.js
    import Counter from "./Counter";
    해주고
    return <div>
    에 <Counter/>
    </div>
*/