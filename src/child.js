// function ChildComponent() {
//     const text = "안녕하세요~";
//     const sayHello = function(){
//         return <h3>누르면 반응해요!</h3>;
//     };
//     return (
//         <div>
//             <h1>{text}</h1>
//             {sayHello()}
//             <div onClick={sayHello()}>클릭해주세요!</div>
//             <p>안녕히 가세요!</p>
//         </div>
//     );
// }
// export default ChildComponent;

// function ChildComponent(props){
//     const {name, age} = props;
//     return (
//         <div>
//             <p>
//                 이름은 {name} 이며 {age}살 입니다.
//             </p>
//         </div>
//     );
// }
// export default ChildComponent;

function ChildComponent(props){
    const {name, age} = props;
    return (
        <div>
            <p>
                이름은 {name} 이며, {age}살 입니다.
            </p>
        </div>
    );
}
export default ChildComponent;