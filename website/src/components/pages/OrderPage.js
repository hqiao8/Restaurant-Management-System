import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import '../../App.css'

export default function OrderPage() {

    const [orders, setOrders] = useState([]);
    const [id1, setID1] = useState("");
    const [id2, setID2] = useState("");
    const [id3, setID3] = useState("");
    const [state1, setState1] = useState(true);
    const [state2, setState2] = useState(true);
    const [state3, setState3] = useState(true);
    const [quantity1, setQuantity1] = useState([]);
    const [quantity2, setQuantity2] = useState([]);
    const [quantity3, setQuantity3] = useState([]);
    const [item1, setItem1] = useState([]);
    const [item2, setItem2] = useState([]);
    const [item3, setItem3] = useState([]);
    const [price1, setPrice1] = useState([]);
    const [price2, setPrice2] = useState([]);
    const [price3, setPrice3] = useState([]);
    const [rating1, setRating1] = useState([]);
    const [rating2, setRating2] = useState([]);
    const [rating3, setRating3] = useState([]);
    const [staffRating, setStaffRating] = useState([]);
    const [itemPage, setItemPage] = useState(1);
    const [itemPrev, setItemPrev] = useState(true);
    const [itemNext, setItemNext] = useState(false);
    const [orderPage, setOrderPage] = useState(0);

    const handleCustomer = () => {
        axios.get('http://localhost:3000/api/cust', 
            {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => {setOrders(res.data.orderHistory)}
        ).catch(err => {});
    };

    const handleOrder = () => {
        const endPage = Math.ceil(orders[orderPage].length / 3);
            const remainder = orders[orderPage].length % 3;
            switch(itemPage) {
                case endPage: 
                    switch(remainder) {
                        case 2:
                            handleItems(1, orders[orderPage].items[3*itemPage-3]);
                            handleItems(2, orders[orderPage].items[3*itemPage-2]);
                            setState1(true);
                            setState2(true);
                            setState3(false);
                            setQuantity3([]);
                            setRating1(3);
                            setRating2(3);
                            setRating3([]);
                            break;
                        case 0:
                            if(orders[orderPage].items.length === 0) {
                                setState1(false);
                                setState2(false);
                                setState3(false);
                                setRating1([]);
                                setRating2([]);
                                setRating3([]);
                            }
                            else {
                                handleItems(1, orders[orderPage].items[3*itemPage-3]);
                                handleItems(2, orders[orderPage].items[3*itemPage-2]);
                                handleItems(3, orders[orderPage].items[3*itemPage-1]);
                                setState1(true);
                                setState2(true);
                                setState3(true);
                                setRating3(3);
                                setRating3(3);
                                setRating3(3);
                            }
                            break;
                        default:
                            handleItems(1, orders[orderPage].items[3*itemPage-3]);
                            setState1(true);
                            setState2(false);
                            setState3(false);
                            setRating3(3);
                            setQuantity2([]);
                            setQuantity3([]);
                            setRating2([]);
                            setRating3([]);
                            break;
                    }
                    break;
                default:
                    handleItems(1, orders[orderPage].items[3*itemPage-3]);
                    handleItems(2, orders[orderPage].items[3*itemPage-2]);
                    handleItems(3, orders[orderPage].items[3*itemPage-1]);
                    setState1(true);
                    setState2(true);
                    setState3(true);
                    setRating1(3);
                    setRating2(3);
                    setRating3(3);
                    break;
            }
            setItemPrev(false);
            setItemNext(false);
            if(itemPage === 1) setItemPrev(true);
            if(itemPage === endPage) setItemNext(true);
    };

    const handleItems = (i, data) => {
        switch(i) {
            case 1:
                setID1(data.itemId);
                setQuantity1(data.quantity);
                break;
            case 2:
                setID2(data.itemId);
                setQuantity2(data.quantity);
                break;
            case 3:
                setID3(data.itemId);
                setQuantity3(data.quantity);
                break;
            default:
                break;
        }
    }

    const handleItem1 = () => {
        axios.get('http://localhost:3000/api/menu/retrieveItem/' + id1
        ).then(res => {
            if(res.status !== 400) {
                setItem1(res.data);
                setPrice1(res.data.price.$numberDecimal);
            }
        }
        ).catch(err => {})
    };
    
    const handleItem2 = () => {
        axios.get('http://localhost:3000/api/menu/retrieveItem/' + id2
        ).then(res => {
            if(res.status !== 400) {
                setItem2(res.data);
                setPrice2(res.data.price.$numberDecimal);
            }
        }
        ).catch(err => {})
    };

    const handleItem3 = () => {
        axios.get('http://localhost:3000/api/menu/retrieveItem/' + id3
        ).then(res => {
            if(res.status !== 400) {
                setItem3(res.data);
                setPrice3(res.data.price.$numberDecimal);
            }
        }
        ).catch(err => {})
    };

    const handleRating1 = async () => {
        const config = {
            method: 'post',
            url: 'http://localhost:3000/api/cust/rateItem',
            headers: {'auth-token': localStorage.getItem('token')}
        };
        const payload = {"itemId": id1, "rating": rating1};
        await axios(config, payload);
    };

    const handleRating2 = async () => {
        const config = {
            method: 'post',
            url: 'http://localhost:3000/api/cust/rateItem',
            headers: {'auth-token': localStorage.getItem('token')}
        };
        const payload = {"itemId": id2, "rating": rating2};
        await axios(config, payload);
    };

    const handleRating3 = async () => {
        const config = {
            method: 'post',
            url: 'http://localhost:3000/api/cust/rateItem',
            headers: {'auth-token': localStorage.getItem('token')}
        };
        const payload = {"itemId": id3, "rating": rating3};
        await axios(config, payload);
    };

    const handleSignout = () => {
        localStorage.removeItem('token');
    };
    
    useEffect(() => handleCustomer(), []);
    useEffect(() => handleOrder(), [orders, itemPage]);
    useEffect(() => handleItem1(), [id1]);
    useEffect(() => handleItem2(), [id2]);
    useEffect(() => handleItem3(), [id3]);
    useEffect(() => handleRating1(), [rating1]);
    useEffect(() => handleRating2(), [rating2]);
    useEffect(() => handleRating3(), [rating3]);

    return (
        <div className="main-page">
            <nav className="navbar">
                <Link to="/cust">Main</Link>
                <Link to="/cust/cart">My cart</Link>
                <Link to="/cust/order">Orders</Link>
                <Link to="/psd">Password</Link>
                <Link to="/" onClick={handleSignout}>Sign Out</Link>
            </nav>
            <div className="title">My Order</div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Rating</th>
                </tr>
                <tr className={state1.toString() + "Row"}>
                    <td>{item1.title}</td>
                    <td>{item1.description}</td>
                    <td>{price1}</td>
                    <td>{quantity1}</td>
                    <td>
                        <button className="qtnBtn" disabled={!state1 || rating1===1} onClick={() => setRating1(rating1-1)}>-</button>
                        <label>{rating1}</label>
                        <button className="qtnBtn" disabled={!state1 || rating1===5} onClick={() => setRating1(rating1+1)}>+</button>
                    </td>
                </tr>
                <tr className={state2.toString() + "Row"}>
                    <td>{item2.title}</td>
                    <td>{item2.description}</td>
                    <td>{price2}</td>
                    <td>{quantity2}</td>
                    <td>
                        <button className="qtnBtn" disabled={!state2 || rating2===1} onClick={() => setRating2(rating2-1)}>-</button>
                        <label>{rating2}</label>
                        <button className="qtnBtn" disabled={!state2 || rating2===5} onClick={() => setRating2(rating2+1)}>+</button>
                    </td>
                </tr>
                <tr className={state3.toString() + "Row"}>
                    <td>{item3.title}</td>
                    <td>{item3.description}</td>
                    <td>{price3}</td>
                    <td>{quantity3}</td>
                    <td>
                        <button className="qtnBtn" disabled={!state3 || rating3===1} onClick={() => setRating3(rating3-1)}>-</button>
                        <label>{rating3}</label>
                        <button className="qtnBtn" disabled={!state3 || rating3===5} onClick={() => setRating3(rating3+1)}>+</button>
                    </td>
                </tr>
            </table>
            <div className="display">
                <button disabled={itemPrev} onClick={() => setItemPage(itemPage-1)}>Previous</button>
                <button disabled={itemNext} onClick={() => setItemPage(itemPage+1)}>Next</button>
            </div>
            <div align="right">Delivery Method: {orders[orderPage].isDelivery ? "Delivery" : "Pick-up"}</div>
            <div align="right">Address: {orders[orderPage].address}</div>
            <div align="right">Time: {orders[orderPage].time}</div>
            <div align="right">Subtotal: {orders[orderPage].itemTotal}</div>
            <div align="right">Fees: {orders[orderPage].deliveryFees}</div>
            <div align="right">Total: {orders[orderPage].total}</div>
            <div align="right">
                <button className="qtnBtn" disabled={staffRating===1} onClick={() => setRating3(staffRating-1)}>-</button>
                <label>{staffRating}</label>
                <button className="qtnBtn" disabled={staffRating===5} onClick={() => setRating3(staffRating+1)}>+</button>
            </div>
            <div align="right">Status: {orders[orderPage].isCompelte ? "Compelted" : "Processing"}</div>
            <div className="display">
                <button disabled={orderPage===0} onClick={() => {setOrderPage(orderPage-1); setItemPage(1);}}>Previous</button>
                <button disabled={orderPage===orders.length-1} onClick={() => {setOrderPage(orderPage+1); setItemPage(1);}}>Next</button>
            </div>
        </div>
    )
}