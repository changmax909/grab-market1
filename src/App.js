import "./App.css";
import MainPageComponent from "./main";
import {Switch, Route, Link, useHistory} from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import React, {useState, useEffect} from "react";
import {Button} from "antd";
import {DownloadOutlined} from "@ant-design/icons";

import MainPage1 from "./main/index1";
import UploadPage1 from "./upload/index1";
import ProductPage1 from "./product/index1";
import ChildComponent from "./child";
import TimerComponent from "./timer";

import axios from 'axios'


function App() {
    // history 객체에 들어가는 메소드를 통해 다른 경로로 이동을 가능하게 해준다.
    const history = useHistory();
    // // axios 통한 데이터 통신 방법 코드
    // const[result, setResult] = useState([]);
    // const requestFromServer = () => {
    //     axios.get('/api/testSelect').then((response) => {
    //         console.log(response.data)
    //         setResult(response.data)
    //     })
    // }
    // useEffect(requestFromServer, []);
    return (
        // <div>
        //     <div id="header">
        //         <div id="header-area">
        //             <Link to="/">
        //                 <img src="/images/icons/logo.png" />
        //             </Link>
        //             <Button size="large" onClick={function(){
        //                 history.push('/upload');
        //             }}
        //             icon={<DownloadOutlined />}
        //             >
        //                 상품 업로드
        //             </Button>
        //         </div>
        //     </div>
        //     <div id="body">
        //     <Switch>
        //         <Route exact={true} path="/">
        //             <MainPageComponent />
        //         </Route>
        //         <Route exact={true} path="/products/:id">
        //             <ProductPage />
        //         </Route>
        //         <Route exact={true} path="/upload">
        //             <UploadPage />
        //         </Route>
        //     </Switch>
        //     </div>
        //     <div id="footer"></div>
        // </div>

        <div>
            {/* 아래의 코드는 props 적용한 코드 */}
            {/*<ChildComponent name="그랩" age={30} />*/}
            {/*<ChildComponent name="민수" age={25} />*/}
            {/*<ChildComponent name="철수" age={30} />*/}

            {/* 타이머 랜더링하는 코드 */}
            {/*<TimerComponent />*/}

            {/* 아래 코드는 axios 데이터 통신 코드 */}
            {/*<p>{result.length > 0 && result[0].email}</p>*/}

            <div id="header">
                <div id="header-area">
                    {/*Link를 사용하여 메인 로고를 누르면 메인 페이지로 이동*/}
                    <Link to="/">
                        <img src="/images/icons/logo.png"/>
                    </Link>
                    {/*antd 를 사용하여 버튼 활성화*/}
                    <Button
                        size="large"
                        onClick={function () {
                            // history 코드를 통해 다른 경로로 이동
                            history.push('/upload');
                        }}
                        icon={<DownloadOutlined/>}
                    >
                        상품 업로드
                    </Button>
                </div>
            </div>
            <div id="body">
                <Switch>
                    <Route exact={true} path="/">
                        <MainPage1/>
                    </Route>
                    <Route exact={true} path="/products/:id">
                        <ProductPage1/>
                    </Route>
                    <Route exact={true} path="/upload">
                        <UploadPage1/>
                    </Route>
                </Switch>
            </div>
            <div id="footer"></div>
        </div>
    );
}

export default App;