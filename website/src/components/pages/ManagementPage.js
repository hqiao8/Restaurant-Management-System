import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import '../../App.css'

const handleSignout = () => {
    localStorage.removeItem('token');
};

export default function ManagementPage() {

    const [state1, setState1] = useState(true);
    const [state2, setState2] = useState(true);
    const [state3, setState3] = useState(true);
    const [id1, setID1] = useState("");
    const [id2, setID2] = useState("");
    const [id3, setID3] = useState("");
    const [hours1, setHours1] = useState("");
    const [hours2, setHours2] = useState("");
    const [hours3, setHours3] = useState("");
    const [times1, setTimes1] = useState([]);
    const [times2, setTimes2] = useState([]);
    const [times3, setTimes3] = useState([]);
    const [rating1, setRating1] = useState([]);
    const [rating2, setRating2] = useState([]);
    const [rating3, setRating3] = useState([]);
    const [page, setPage] = useState(1);
    const [prev, setPrev] = useState(true);
    const [next, setNext] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(5);
    const [type, setType] = useState("appetizer");

    const handleStaff = () => {
        axios.get('http://localhost:3000/api/manager/getStaff', 
            {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => {
            const endPage = Math.ceil(res.data.length / 3);
            const remainder = res.data.length % 3;
            switch(page) {
                case endPage: 
                    switch(remainder) {
                        case 2:
                            setState1(true);
                            setState2(true);
                            setState3(false);
                            setID1(res.data[3*page-3]._id);
                            setID2(res.data[3*page-2]._id);
                            setID3("");
                            setHours1(res.data[3*page-3].hours);
                            setHours2(res.data[3*page-2].hours);
                            setHours3("");
                            setTimes1(res.data[3*page-3].ratings.length + res.data[3*page-3].orders.length);
                            setTimes2(res.data[3*page-2].ratings.length + res.data[3*page-2].orders.length);
                            setTimes3([]);
                            setRating3([]);
                            break;
                        case 0:
                            if(res.data.length === 0) {
                                setState1(false);
                                setState2(false);
                                setState3(false);
                                setID1("");
                                setID2("");
                                setID3("");
                                setHours1("");
                                setHours2("");
                                setHours3("");
                                setTimes1([]);
                                setTimes2([]);
                                setTimes3([]);
                                setRating1([]);
                                setRating2([]);
                                setRating3([]);
                            }
                            else {
                                setState1(true);
                                setState2(true);
                                setState3(true);
                                setID1(res.data[3*page-3]._id);
                                setID2(res.data[3*page-2]._id);
                                setID3(res.data[3*page-1]._id);
                                setHours1(res.data[3*page-3].hours);
                                setHours2(res.data[3*page-2].hours);
                                setHours3(res.data[3*page-1].hours);
                                setTimes1(res.data[3*page-3].ratings.length + res.data[3*page-3].orders.length);
                                setTimes2(res.data[3*page-2].ratings.length + res.data[3*page-2].orders.length);
                                setTimes3(res.data[3*page-1].ratings.length + res.data[3*page-1].orders.length);
                            }
                            break;
                        default:
                            setState1(true);
                            setState2(false);
                            setState3(false);
                            setID1(res.data[3*page-3]._id);
                            setID2("");
                            setID3("");
                            setHours1(res.data[3*page-3].hours);
                            setHours2("");
                            setHours3("");
                            setTimes1(res.data[3*page-3].ratings.length + res.data[3*page-3].orders.length);
                            setTimes2([]);
                            setTimes3([]);
                            setRating2([]);
                            setRating3([]);
                            break;
                    }
                    break;
                default:
                    setState1(true);
                    setState2(true);
                    setState3(true);
                    setID1(res.data[3*page-3]._id);
                    setID2(res.data[3*page-2]._id);
                    setID3(res.data[3*page-1]._id);
                    setHours1(res.data[3*page-3].hours);
                    setHours2(res.data[3*page-2].hours);
                    setHours3(res.data[3*page-1].hours);
                    setTimes1(res.data[3*page-3].ratings.length + res.data[3*page-3].orders.length);
                    setTimes2(res.data[3*page-2].ratings.length + res.data[3*page-2].orders.length);
                    setTimes3(res.data[3*page-1].ratings.length + res.data[3*page-1].orders.length);
                    break;
            }
            setPrev(false);
            setNext(false);
            if(page === 1) setPrev(true);
            if(page === endPage) setNext(true);
        }
        ).catch(err => {});
    };

    const handleHour1 = (e) => {
        axios.put('http://localhost:3000/api/manager/setHours', 
        {
            "staffId": id1,
            "hours": e.target.value
        },
        {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => {}
        ).catch(err => {})
    };

    const handleHour2 = (e) => {
        axios.put('http://localhost:3000/api/manager/setHours', 
        {
            "staffId": id2,
            "hours": e.target.value
        },
        {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => {}
        ).catch(err => {})
    };

    const handleHour3 = (e) => {
        axios.put('http://localhost:3000/api/manager/setHours', 
        {
            "staffId": id3,
            "hours": e.target.value
        },
        {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => {}
        ).catch(err => {})
    };

    const handleRating1 = () => {
        axios.get('http://localhost:3000/api/manager/staffRatings/' + id1, 
            {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => {setRating1(res.data.rating)}
        ).catch(err => {});
    };

    const handleRating2 = () => {
        axios.get('http://localhost:3000/api/manager/staffRatings/' + id2, 
            {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => {setRating2(res.data.rating)}
        ).catch(err => {});
    };

    const handleRating3 = () => {
        axios.get('http://localhost:3000/api/manager/staffRatings/' + id3, 
            {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => {setRating3(res.data.rating)}
        ).catch(err => {});
    };

    const handleSubmit = () => {
        axios.post('http://localhost:3000/api/manager/addItem', 
        {
            "title": title,
            "description": description,
            "price": price,
            "type": type
        },
        {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => {}
        ).catch(err => {})
    };

    useEffect(() => handleStaff(), []);
    useEffect(() => handleRating1(), [id1]);
    useEffect(() => handleRating2(), [id2]);
    useEffect(() => handleRating3(), [id3]);

    return (
        <div className="main-page">
            <nav className="navbar">
                <Link to="/mgr">Main</Link>
                <Link to="/mgr/mgmt">Management</Link>
                <Link to="/psd">Password</Link>
                <Link to="/" onClick={handleSignout}>Sign Out</Link>
            </nav>
            <div className="title">Staff</div>
            <table>
                <tr>
                    <th>StaffID</th>
                    <th>Hours</th>
                    <th>Service Times</th>
                    <th>Average Rating</th>
                </tr>
                <tr className={state1.toString() + "Row"}>
                    <td>{id1}</td>
                    <td>
                        <input type="text" size="25" placeholder={hours1} disabled={!state1} onChange={(e) => handleHour1(e)}/>
                    </td>
                    <td>{times1}</td>
                    <td>{rating1}</td>
                </tr>
                <tr className={state2.toString() + "Row"}>
                    <td>{id2}</td>
                    <td>
                        <input type="text" size="25" placeholder={hours2} disabled={!state2} onChange={(e) => handleHour2(e)}/>
                    </td>
                    <td>{times2}</td>
                    <td>{rating2}</td>
                </tr>
                <tr className={state1.toString() + "Row"}>
                    <td>{id3}</td>
                    <td>
                        <input type="text" size="25" placeholder={hours3} disabled={!state3} onChange={(e) => handleHour3(e)}/>
                    </td>
                    <td>{times3}</td>
                    <td>{rating3}</td>
                </tr>
            </table>
            <div className="display">
                <button disabled={prev} onClick={() => setPage(page-1)}>Previous</button>
                <button disabled={next} onClick={() => setPage(page+1)}>Next</button>
            </div>
            <div className="title">Add an Item</div>
            <form align="center" onSubmit={handleSubmit}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} required />
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} required />
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="text" onChange={(e) => setPrice(parseInt(e.target.value))} required />
                </p>
                <select name="food_type" value={type} onChange={(e) => setType(e.target.value)} required>
                        <option value="appetizer">
                            Appetizer
                        </option>
                        <option value="breakfast">
                            Breakfast
                        </option>
                        <option value="lunch_dinner">
                            Lunch/Dinner
                        </option>
                        <option value="dessert">
                            Dessert
                        </option>
                        <option value="beverage">
                            Beverage
                        </option>
                    </select>
                <p>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </div>
    )
}