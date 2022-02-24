/* 부모컴포넌트에서 자식에게 값을 전달해주는 방식
객체에 담겨서 온다.
자식 컴포넌트 const counter = (props) =>{
    console.log(props);
}로 받는다
객체 담긴 걸 꺼내 쓰려면
const [count, setCount] = useState(props.newValue); 처럼 초기값에서 점표기법으로 값에 접근해서 꺼내쓴다

비구조화 할당을 활용하자면
부모에서
[...spread]로 값을 받아서
const counter = ({newValue})=>{
    const [count, setCount] = useState(newValue);
}
로 쓸 수 있다

전달 받는 값이 없어진다면 (undefined로 전달 되면 NaN이 나옴) 오류가 나오기에 이를 방지하기 위해서는
디폴트값을 설정해주는 것도 있다.
Counter.defaultProps = {
    newValue: 0,
};
*/

/* 짝수 만들기
const OddEvent = ({count}) =>{
    console.log(count);
    return (
        <div>
            {count % === 0? "짝수" : "홀수"}
        </div>
    )
};
export default OddEvent;

//리엑트 컴포넌트
본인이 관리하는 가진 state가 변화할 때마다 리렌더
프랍스가 변화할 떄마다 리렌더
내 부모가 변화하면 리렌더


*/