// import {useParams} from 'react-router-dom';
// import axios from "axios";
// import {useEffect, useState} from "react";
//
// function ProductPage1() {
//     const {id} = useParams();
//     const [product, setProduct] = useState(null);
//     useEffect(function () {
//         axios.get(`https://341cf269-c712-4751-a587-2c7fd1b972ec.mock.pstmn.io/products/${id}`)
//             .then(function (result) {
//                 setProduct(result.data);
//             })
//             .catch(function (error) {
//                 console.error(error);
//             });
//     }, []);
//
//     //방어 코드
//     if (product === null) {
//         return <h1>상품 정보를 받고 있습니다...</h1>
//     }
//
//     return (
//         <div>
//             <div id="image-box">
//                 <img src={"/" + product.imageUrl}/>
//             </div>
//             <div id="profile-box">
//                 <img src="/images/icons/avatar.png"/>
//                 <span>{product.seller}</span>
//             </div>
//             <div id="content-box">
//                 <div id="name">{product.name}</div>
//                 <div id="price">{product.price}원</div>
//                 <div id="createdAt">2023-03-22</div>
//                 <div id="description">{product.description}</div>
//             </div>
//         </div>
//     );
// }
//
// export default ProductPage1;

import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import "./index1.css";

function ProductPage() {
    //parameter(매개변수) 설정
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(function () {
        axios
            .get(
                `https://1a135b44-e524-4168-8a97-42364bfed983.mock.pstmn.io/products/${id}`
            )
            .then(function (result) {
                setProduct(result.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    // useState(null)일경우 오류 발생, 방어 코드를 통해 오류 방지
    if (product === null) {
        return <h1>상품 정보를 불러오는중...</h1>
    }

    return (
        <div>
            <div id="image-box">
                <img src={"/" + product.imageUrl}/>
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png"/>
                <span>{product.seller}</span>
            </div>
            <div id="contents-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}원</div>
                <div id="createdAt">2023년 2월 23일</div>
                <div id="description">{product.description}</div>
            </div>
        </div>
    );
}

export default ProductPage;