import React from "react";

function TimerComponent(){
    // const [time, setTime] = React.useState(0);
    // console.log('컴포넌트 업데이트!');
    // function updateTime(){
    //     setTime(time + 1);
    // };
    // return (
    //     <div>
    //         <h3>{time}초</h3>
    //         <button onClick={updateTime}>1씩 올려주세요.</button>
    //     </div>
    // );

    // 에러 발생하는 로직
    // const [time, setTime] = React.useState(0);
    // console.log('컴포넌트 업데이트!');
    // setTime(time + 1);
    // return (
    //     <div>
    //         <h3>{time}초</h3>
    //         <button>1씩 올려주세요.</button>
    //     </div>
    // );

    //useEffect 를 사용
    // const[time, setTime] = React.useState(0);
    // React.useEffect(() => {
    //     setTime(time + 1);
    //     console.log('컴포넌트가 화면에 처음 렌더링될 때 딱 한번 실행됨');
    // },[]);
    // return(
    //     <div>
    //         <h3>{time}초</h3>
    //         <button>1씩 올려주세요</button>
    //     </div>
    // );
};
export default TimerComponent;