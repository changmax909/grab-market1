// import "./index.css";
// import React from "react";
// import axios from "axios";
// import {Link} from "react-router-dom";
//
// function MainPage1() {
//     const [products, setProducts] = React.useState([]);
//     React.useEffect(function () {
//         // axios.get("https://341cf269-c712-4751-a587-2c7fd1b972ec.mock.pstmn.io/products")
//         axios
//             .get("http://localhost:8081/products")
//             .then(function (result) {
//                 const products = result.data.products;
//                 setProducts(products);
//             })
//             .catch(function (error) {
//                 console.error("에러 발생 : ", error);
//             });
//     }, [])
//     return (
//         <div>
//             <div id="banner">
//                 <img src="images/banners/banner1.png"/>
//             </div>
//             <h1>판매되는 상품들</h1>
//             <div id="product-list">
//                 {products.map(function (product, index) {
//                     return (
//                         <div className="product-card">
//                             <Link className="product-link" to={`/products/${product.id}`}>
//                                 <div>
//                                     <img className="product-img" src={product.imageUrl}/>
//                                 </div>
//                                 <div className="product-contents">
//                                     <span className="product-name">{product.name}</span>
//                                     <span className="product-price">{product.price}원</span>
//                                     <div className="product-seller">
//                                         <img className="product-avatar" src="images/icons/avatar.png"/>
//                                         <span>{product.seller}</span>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }
//
// export default MainPage1;

import "./index1.css";
import axios from "axios";
import React from "react";
import {Link} from 'react-router-dom';

function MainPage1() {
    const [products, setProducts] = React.useState([]);
    //무한정 불려지는 네트워크 통신을 한번만 불러오게 해준다.
    React.useEffect(function () {
        //네트워크 통신
        axios
            .get("https://1a135b44-e524-4168-8a97-42364bfed983.mock.pstmn.io/products")
            .then(function (result) {
                const products = result.data.products;
                setProducts(products);
            })
            .catch(function (error) {
                console.error("에러 발생: ", error);
            });
    }, []);

    // //네트워크 통신
    // axios
    //     .get("https://341cf269-c712-4751-a587-2c7fd1b972ec.mock.pstmn.io/products")
    //     .then(function (result) {
    //         const products = result.data.products;
    //         setProducts(products);
    //     })
    //     .catch(function (error) {
    //         console.error("에러 발생: ", error);
    //     });
    return (
        <div>
            <div id="banner">
                <img src="/images/banners/banner1.png"/>
            </div>
            <h1>판매되는 상품들</h1>
            <div id="product-list">
                {
                    // map은 리턴이 가능하며 상품 카드 정보를 넣어준다. (product-list 갯수만큼 불러온다.)
                    products.map(function (product, index) {
                        return (
                            // 상품 카드
                            <div className="product-card">
                                <Link className="product-link" to={`/products/${product.id}`}>
                                    <div>
                                        {/*상품 이미지*/}
                                        <img className="product-img" src={product.imageUrl}/>
                                    </div>
                                    <div className="product-contents">
                                        {/*상품 이름*/}
                                        <span className="product-name">{product.name}</span>
                                        {/*상품 가격*/}
                                        <span className="product-price">{product.price}원</span>
                                        {/*판매자 정보*/}
                                        <div className="product-seller">
                                            {/*판매자 아바타 사진*/}
                                            <img className="product-avatar" src="/images/icons/avatar.png"/>
                                            {/*판매자 이름*/}
                                            <span>{product.seller}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                }
                {/*/!*상품 카드*!/*/}
                {/*<div className="product-card">*/}
                {/*    <div>*/}
                {/*        /!*상품 이미지*!/*/}
                {/*        <img className="product-img" src="/images/products/keyboard1.jpg"/>*/}
                {/*    </div>*/}
                {/*    <div className="product-contents">*/}
                {/*        /!*상품 이름*!/*/}
                {/*        <span className="product-name">키보드</span>*/}
                {/*        /!*상품 가격*!/*/}
                {/*        <span className="product-price">50000원</span>*/}
                {/*        /!*판매자 정보*!/*/}
                {/*        <div className="product-seller">*/}
                {/*            /!*판매자 아바타 사진*!/*/}
                {/*            <img className="product-avatar" src="/images/icons/avatar.png"/>*/}
                {/*            /!*판매자 이름*!/*/}
                {/*            <span>그랩</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default MainPage1;