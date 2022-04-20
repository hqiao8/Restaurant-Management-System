import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import '../../App.css'

export default function CartPage() {

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
    const [itemPage, setItemPage] = useState(1);
    const [itemPrev, setItemPrev] = useState(true);
    const [itemNext, setItemNext] = useState(false);
    const [delivery, setDelivery] = useState(true);
    const [subtotal, setSubtotal] = useState(0);
    const [fees, setFees]= useState(0);
    const [total, setTotal] = useState(0);

    const handleCustomer = () => {
        axios.get('http://localhost:3000/api/cust', 
            {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => {}
        ).catch(err => {});
    };

    const handleCart = () => {
        axios.get('http://localhost:3000/api/order/retrieveOrder', 
            {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => {
            const endPage = Math.ceil(res.data.items.length / 3);
            const remainder = res.data.items.length % 3;
            switch(itemPage) {
                case endPage: 
                    switch(remainder) {
                        case 2:
                            handleItems(1, res.data.items[3*itemPage-3]);
                            handleItems(2, res.data.items[3*itemPage-2]);
                            setState1(true);
                            setState2(true);
                            setState3(false);
                            setQuantity3([]);
                            break;
                        case 0:
                            if(res.data.items.length === 0) {
                                setState1(false);
                                setState2(false);
                                setState3(false);
                                setQuantity1([]);
                                setQuantity2([]);
                                setQuantity3([]);
                            }
                            else {
                                handleItems(1, res.data.items[3*itemPage-3]);
                                handleItems(2, res.data.items[3*itemPage-2]);
                                handleItems(3, res.data.items[3*itemPage-1]);
                                setState1(true);
                                setState2(true);
                                setState3(true);
                            }
                            break;
                        default:
                            handleItems(1, res.data.items[3*itemPage-3]);
                            setState1(true);
                            setState2(false);
                            setState3(false);
                            setQuantity2([]);
                            setQuantity3([]);
                            break;
                    }
                    break;
                default:
                    handleItems(1, res.data.items[3*itemPage-3]);
                    handleItems(2, res.data.items[3*itemPage-2]);
                    handleItems(3, res.data.items[3*itemPage-1]);
                    setState1(true);
                    setState2(true);
                    setState3(true);
                    break;
            }
            setItemPrev(false);
            setItemNext(false);
            if(itemPage === 1) setItemPrev(true);
            if(itemPage === endPage) setItemNext(true);
        }).catch(err => {});
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

    const handleQuantity1 = () => {
        axios.put('http://localhost:3000/api/order/updateItem/', 
        {
            itemId: id1,
            quantity: quantity1
        },
        {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => {}
        ).catch(err => {})
    };

    const handleQuantity2 = () => {
        axios.put('http://localhost:3000/api/order/updateItem/', 
        {
            itemId: id2,
            quantity: quantity2
        },
        {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => {}
        ).catch(err => {})
    };

    const handleQuantity3 = () => {
        axios.put('http://localhost:3000/api/order/updateItem/', 
        {
            itemId: id3,
            quantity: quantity3
        },
        {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => {}
        ).catch(err => {})
    };

    const handleDeletion1 = async () => {
        const config = {
            method: 'delete',
            url: 'http://localhost:3000/api/order/deleteItem/',
            headers: {'auth-token': localStorage.getItem('token')}
        };
        const payload = {"itemId": id1};
        await axios(config, payload);
    };

    const handleDeletion2 = async () => {
        const config = {
            method: 'delete',
            url: 'http://localhost:3000/api/order/deleteItem/',
            headers: {'auth-token': localStorage.getItem('token')}
        };
        const payload = {"itemId": id2};
        await axios(config, payload);
    };

    const handleDeletion3 = async () => {
        const config = {
            method: 'delete',
            url: 'http://localhost:3000/api/order/deleteItem/',
            headers: {'auth-token': localStorage.getItem('token')}
        };
        const payload = {"itemId": id3};
        await axios(config, payload);
    };

    const handleDelivery = async (bool) => {
        await axios.put('http://localhost:3000/api/order/updateDelivery/', 
        {
            isDelivery: bool
        },
        {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => {}
        ).catch(err => {})
        setDelivery(!bool);
    };

    const handleAddress = async (e) => {
        await axios.put('http://localhost:3000/api/order/updateAddress/', 
        {
            address: e.target.value
        },
        {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => {}
        ).catch(err => {})
    };

    const handleSubtotal = async () => {
        const config = {
            method: 'get',
            url: 'http://localhost:3000/api/order/ItemTotal',
            headers: {'auth-token': localStorage.getItem('token')}
        };
        let res = await axios(config);
        setSubtotal(res.data.total);
    };

    const handleFees = () => {
        axios.get('http://localhost:3000/api/order/deliveryFees', 
            {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => setFees(res.data.delivery)
        ).catch(err => {});
    };

    const handleTotal = () => {
        axios.get('http://localhost:3000/api/order/orderTotal', 
            {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => setTotal(res.data.total)
        ).catch(err => {});
    };

    const handleCheckout = async () => {
        const config = {
            method: 'post',
            url: 'http://localhost:3000/api/order/finalizeOrder',
            headers: {'auth-token': localStorage.getItem('token')}
        };
        await axios(config);
    };

    const handleSignout = () => {
        localStorage.removeItem('token');
    };

    useEffect(() => handleCustomer(), []);
    useEffect(() => handleCart(), [itemPage]);
    useEffect(() => handleItem1(), [id1]);
    useEffect(() => handleItem2(), [id2]);
    useEffect(() => handleItem3(), [id3]);
    useEffect(() => {handleQuantity1(); handleSubtotal();}, [quantity1]);
    useEffect(() => {handleQuantity2(); handleSubtotal();}, [quantity2]);
    useEffect(() => {handleQuantity3(); handleSubtotal();}, [quantity3]);
    useEffect(() => handleFees(), [delivery]);
    useEffect(() => handleTotal(), [subtotal, fees]);

    return (
        <div className="main-page">
            <nav className="navbar">
                <Link to="/cust">Main</Link>
                <Link to="/cust/cart">My cart</Link>
                <Link to="/cust/order">Orders</Link>
                <Link to="/psd">Password</Link>
                <Link to="/" onClick={handleSignout}>Sign Out</Link>
            </nav>
            <div className="title">My Cart</div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                </tr>
                <tr className={state1.toString() + "Row"}>
                    <td>{item1.title}</td>
                    <td>{item1.description}</td>
                    <td>{price1}</td>
                    <td>
                        <button className="qtnBtn" disabled={!state1 || quantity1===1} onClick={() => setQuantity1(quantity1-1)}>-</button>
                        <input type="text" size="1" placeholder={quantity1} disabled={!state1} onChange={(e) => setQuantity1(parseInt(e.target.value))}/>
                        <button className="qtnBtn" disabled={!state1} onClick={() => setQuantity1(quantity1+1)}>+</button>
                    </td>
                    <td><button disabled={!state1} onClick={() => handleDeletion1()}>Delete</button></td>
                </tr>
                <tr className={state2.toString() + "Row"}>
                    <td>{item2.title}</td>
                    <td>{item2.description}</td>
                    <td>{price2}</td>
                    <td>
                        <button className="qtnBtn" disabled={!state2 || quantity2===1} onClick={() => setQuantity2(quantity2-1)}>-</button>
                        <input type="text" size="1" placeholder={quantity2} disabled={!state2} onChange={(e) => setQuantity2(parseInt(e.target.value))}/>
                        <button className="qtnBtn" disabled={!state2} onClick={() => setQuantity2(quantity2+1)}>+</button>
                    </td>
                    <td><button disabled={!state2} onClick={() => handleDeletion2()}>Delete</button></td>
                </tr>
                <tr className={state3.toString() + "Row"}>
                    <td>{item3.title}</td>
                    <td>{item3.description}</td>
                    <td>{price3}</td>
                    <td>
                        <button className="qtnBtn" disabled={!state3 || quantity3===1} onClick={() => setQuantity3(quantity3-1)}>-</button>
                        <input type="text" size="1" placeholder={quantity3} disabled={!state3} onChange={(e) => setQuantity3(parseInt(e.target.value))}/>
                        <button className="qtnBtn" disabled={!state3} onClick={() => setQuantity3(quantity3+1)}>+</button>
                    </td>
                    <td><button disabled={!state3} onClick={() => handleDeletion3()}>Delete</button></td>
                </tr>
            </table>
            <div className="display">
                <button disabled={itemPrev} onClick={() => setItemPage(itemPage-1)}>Previous</button>
                <button disabled={itemNext} onClick={() => setItemPage(itemPage+1)}>Next</button>
            </div>
            <div className="title">My Coupons</div>
            <table></table>
            <div>
                <label>Delivery Method: </label>
                <input type="radio" name="delivery" onClick={() => handleDelivery(false)}/>
                <label>Pick-up</label>
                <input type="radio" name="delivery" onClick={() => handleDelivery(true)}/>
                <label>Delivery</label>
                <input type="text" placeholder="Please enter your address" disabled={delivery} onChange={(e) => handleAddress(e)}/>
                <div align="right">Subtotal: {subtotal}</div>
                <div align="right">Fees: {fees}</div>
                <div align="right">Total: {total}</div>
                <div align="right"><button onClick={() => handleCheckout()}>Checkout</button></div>
            </div>
        </div>
    )
}