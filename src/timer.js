// import React from "react";
//
// function TimerComponent(){
//     // const [time, setTime] = React.useState(0);
//     // console.log('컴포넌트 업데이트!');
//     // function updateTime(){
//     //     setTime(time + 1);
//     // };
//     // return (
//     //     <div>
//     //         <h3>{time}초</h3>
//     //         <button onClick={updateTime}>1씩 올려주세요.</button>
//     //     </div>
//     // );
//
//     // 에러 발생하는 로직
//     // const [time, setTime] = React.useState(0);
//     // console.log('컴포넌트 업데이트!');
//     // setTime(time + 1);
//     // return (
//     //     <div>
//     //         <h3>{time}초</h3>
//     //         <button>1씩 올려주세요.</button>
//     //     </div>
//     // );
//
//     //useEffect 를 사용
//     // const[time, setTime] = React.useState(0);
//     // React.useEffect(() => {
//     //     setTime(time + 1);
//     //     console.log('컴포넌트가 화면에 처음 렌더링될 때 딱 한번 실행됨');
//     // },[]);
//     // return(
//     //     <div>
//     //         <h3>{time}초</h3>
//     //         <button>1씩 올려주세요</button>
//     //     </div>
//     // );
// };
// export default TimerComponent;

// import React from "react";
//
// function TimerComponent(){
//     //1. 기본 useState 방법
//     //
//     // // time에는 기본 값으로 0이 들어갑니다.
//     // const [time, setTime] = React.useState(0);     // state를 만듭니다.
//     // console.log('컴포넌트 업데이트!');      // time이 업데이트될 때마다 계속 호출됩니다.
//     // function updateTime(){
//     //     setTime(time + 1);
//     // }
//     // return (
//     //     <div>
//     //         <h3>{time}초</h3>
//     //         {/* 클릭할 때마다 setTime으로 state를 업데이트해줍니다. */}
//     //         <button onClick={updateTime}>1초 올려주세요.</button>
//     //     </div>
//     // );
//
//     // 2. useEffect 정상 실행
//     // const[time, setTime] = React.useState(0);
//     // React.useEffect(() => {
//     //     setTime(time + 1);  //state를 바꿔서 또 렌더링이 되더라도 setTime은 호출되지 않습니다.
//     //     console.log('컴포넌트가 화면에 랜더링될때 한번 실행')
//     // },[]);
//     //
//     //
//
//     // 3. useEffect 오류 발생
//     // const[time, setTime] = React.useState(0);
//     // React.useEffect(() => {
//     //     setTime(time + 1);      //state의 time을 업데이트하면 useEffect안의 함수가 또 실행됩니다.
//     //     console.log('time이 바뀔때마다 계속 업데이트 ');
//     // },[time]);                  //time이 업데이트 될때마다 함수가 실행됩니다.
// }
// export default TimerComponent;

import React from "react";
function TimerComponent(){
    const [time, setTime] = React.useState(0);
    console.log("컴포넌트 업데이트");
    React.useEffect(function() {
        setTime(time + 1);
    },[]);
    return (
        <div>
            <h3>{time}초</h3>
            <button>1씩 오름</button>
        </div>
    );
}
export default TimerComponent;