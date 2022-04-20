import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import '../../App.css'

export default function CustomerPage() {

    const [type, setType] = useState("appetizer");
    const [item1, setItem1] = useState([]);
    const [item2, setItem2] = useState([]);
    const [item3, setItem3] = useState([]);
    const [price1, setPrice1] = useState([""]);
    const [price2, setPrice2] = useState([""]);
    const [price3, setPrice3] = useState([""]);
    const [page, setPage] = useState(1);
    const [itemBtn2, setItemBtn2] = useState(false);
    const [itemBtn3, setItemBtn3] = useState(false);
    const [prev, setPrev] = useState(true);
    const [next, setNext] = useState(false);

    const handleMenu = () => {
        axios.get('http://localhost:3000/api/menu/retrieveMenu/' + type
        ).then(res => {
            if(res.status !== 400)  {
                const endPage = Math.ceil(res.data.length / 3);
                const remainder = res.data.length % 3;
                handleItem(1, res.data[3*page-3]);
                switch(page) {
                    case endPage: 
                        switch(remainder) {
                            case 2:
                                handleItem(2, res.data[3*page-2]);
                                setItemBtn2(false);
                                setItemBtn3(true);
                                break;
                            case 0:
                                handleItem(2, res.data[3*page-2]);
                                handleItem(3, res.data[3*page-1]);
                                setItemBtn2(false);
                                setItemBtn3(false);
                                break;
                            default:
                                setItemBtn2(true);
                                setItemBtn3(true);
                                break;
                        }
                        break;
                    default:
                        handleItem(2, res.data[3*page-2]);
                        handleItem(3, res.data[3*page-1]);
                        setItemBtn2(false);
                        setItemBtn3(false);
                        break;
                }
                setPrev(false);
                setNext(false);
                if(page === 1) setPrev(true);
                if(page === endPage) setNext(true);
            }
        }).catch(err => {});
    };

    const handleCategory = (category) => {
        setType(category);
        setPage(1);
    };

    const handleItem = (i, data) => {
        switch(i) {
            case 1:
                setItem1(data);
                setPrice1(data.price.$numberDecimal);
                break;
            case 2:
                setItem2(data);
                setPrice2(data.price.$numberDecimal);
                break;
            case 3:
                setItem3(data);
                setPrice3(data.price.$numberDecimal);
                break;
            default:
                break;
        }
    }

    const handleSignout = () => {
        localStorage.removeItem('token');
    };

    useEffect(() => handleMenu(), [type, page]);

    return (
        <div className="main-page">
            <nav className="navbar">
                <Link to="/mgr">Main</Link>
                <Link to="/mgr/mgmt">Management</Link>
                <Link to="/psd">Password</Link>
                <Link to="/" onClick={handleSignout}>Sign Out</Link>
            </nav>
            <section className="welcome-section">
                <h1>
                    Welcome back Manager!
                </h1>
            </section>
            <div className="tab">
                <button onClick={()=>handleCategory("appetizer")}>
                    Appetizer
                </button>
                <button onClick={()=>handleCategory("breakfast")}>
                    Breakfast
                </button>
                <button onClick={()=>handleCategory("lunch_dinner")}>
                    Lunch/Dinner
                </button>
                <button onClick={()=>handleCategory("dessert")}>
                    Dessert
                </button>
                <button onClick={()=>handleCategory("beverage")}>
                    Beverage
                </button>
            </div>
            <div className="displayButtons">
                <button className="falseDisplayButton">
                    <p>{item1.title}</p>
                    <p>{item1.description}</p>
                    <p>${price1}</p>
                </button>
                <button className={itemBtn2.toString() + "DisplayButton"}>
                    <p>{item2.title}</p>
                    <p>{item2.description}</p>
                    <p>${price2}</p>
                </button>
                <button className={itemBtn3.toString() + "DisplayButton"}>
                    <p>{item3.title}</p>
                    <p>{item3.description}</p>
                    <p>${price3}</p>
                </button>
            </div>
            <div className="display">
                <button disabled={prev} onClick={() => setPage(page-1)}>Previous</button>
                <button disabled={next} onClick={() => setPage(page+1)}>Next</button>
            </div>
        </div>
    )
}