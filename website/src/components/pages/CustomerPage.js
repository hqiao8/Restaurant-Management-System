import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import '../../App.css'

export default function CustomerPage() {

    const [fName, setFName] = useState("");
    const [favor, setFavor] = useState([]);
    const [type, setType] = useState("appetizer");
    const [items, setItems] = useState([]);
    const [item1, setItem1] = useState([]);
    const [item2, setItem2] = useState([]);
    const [item3, setItem3] = useState([]);
    const [page, setPage] = useState(1);
    const [itemBtn1, setItemBtn1] = useState(false);
    const [itemBtn2, setItemBtn2] = useState(false);
    const [itemBtn3, setItemBtn3] = useState(false);
    const [prev, setPrev] = useState(true);
    const [next, setNext] = useState(false);

    const navigate = useNavigate();

    const handleCustomer = () => {
        axios.get('http://localhost:3000/api/cust', 
            {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => {
            if(res.status != 400 && res.status != 401) {
                setFName(res.data.fName);
            }
        })
        .catch(err => {});
    };

    const handleMenu = () => {
        const url = 'http://localhost:3000/api/menu/retrieveMenu/' + type;
        axios.get(url)
            .then(res => {
            if(res.status == 400) {
                setItemBtn1(true);
                setItemBtn2(true);
                setItemBtn3(true);
                setPrev(true);
                setNext(true);
            }
            else {
                setItems(res.data.filter(item => item.type === type));
                const pages = Math.ceil(items.length/3);
                if(pages == 1) {
                    setItem1(items[0]);
                    setItemBtn1(false);
                    if(items.length == 3) {
                        setItem2(items[1]);
                        setItem3(items[2]);
                        setItemBtn2(false);
                        setItemBtn3(false);
                    }
                    else {
                        setItem2(items[1]);
                        setItemBtn2(false);
                        setItemBtn3(true);
                    }
                    setPrev(true);
                    setNext(true);
                }
                else if(page = 1) {
                    setItem1(items[0]);
                    setItem2(items[1]);
                    setItem3(items[2]);
                    setItemBtn1(false);
                    setItemBtn2(false);
                    setItemBtn3(false);
                    setPrev(true);
                    setNext(false);
                }
                else if(page = pages) {
                    setItem1(items[3*page-3]);
                    setItemBtn1(false);
                    if(items.length == 3*page) {
                        setItem2(items[3*page-2]);
                        setItem3(items[3*page-1]);
                        setItemBtn2(false);
                        setItemBtn3(false);
                    }
                    else {
                        setItem2(items[3*page-2]);
                        setItemBtn2(false);
                        setItemBtn3(true);
                    }
                    setPrev(false);
                    setNext(true);
                }
                else {
                    setItem1(items[3*page-3]);
                    setItem2(items[3*page-2]);
                    setItem3(items[3*page-1]);
                    setItemBtn1(false);
                    setItemBtn2(false);
                    setItemBtn3(false);
                    setPrev(false);
                    setNext(false);
                }
            }
        })
        .catch(err => {});
    };

    const handleSignout = () => {
        localStorage.removeItem('token');
    };

    const handleUpdate = () => {
        handleCustomer();
        handleMenu();
    };
    useEffect(() => handleUpdate(), []);

    return (
        <div className="main-page">
            <nav className="navbar">
                <Link to="">My cart</Link>
                <Link to="">Orders</Link>
                <Link to="">Coupons</Link>
                <Link to="">Dependents</Link>
                <Link to="/psd">Password</Link>
                <Link to="/" onClick={handleSignout}>Sign Out</Link>
            </nav>
            <section className="welcome-section">
                <h1>
                    Welcome back {fName}!
                </h1>
            </section>
            <div className="tab">
                <button onClick={()=>{setType("appetizer");handleUpdate();}}>
                    Appetizer
                </button>
                <button onClick={()=>{setType("breakfast");handleUpdate();}}>
                    Breakfast
                </button>
                <button onClick={()=>{setType("lunch_dinner");handleUpdate();}}>
                    Lunch/Dinner
                </button>
                <button onClick={()=>{setType("dessert");handleUpdate();}}>
                    Dessert
                </button>
                <button onClick={()=>{setType("beverage");handleUpdate();}}>
                    Beverage
                </button>
            </div>
            <div className="displayButtons">
                <button className="displayButton" type="button" disabled={itemBtn1}>
                    <p>{item1.title}</p>
                    
                    <span>Add to cart</span>
                </button>
                <button className="displayButton" type="button" disabled={itemBtn2}>
                    <p>{item2.title}</p>
                    
                    <span>Add to cart</span>
                </button>
                <button className="displayButton" type="button" disabled={itemBtn3}>
                    <p>{item3.title}</p>
                    
                    <span>Add to cart</span>
                </button>
            </div>
            <div className="display">
                <button type="button" disabled={prev} onClick={()=>setPage(page-1)}>Previous</button>
                <button type="button" disabled={next} onClick={()=>setPage(page+1)}>Next</button>
            </div>
        </div>
    )
}