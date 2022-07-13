import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
const Rooms = () => {

    const [rooms, setRooms] = useState(null);

    useEffect(() => {
        fetch("https://localhost:7229/api/rooms")
        .then(response => response.json())
        .then(data => setRooms(data))
    }, []);

 

    if (rooms === null) return <div>Loading</div>;
    
    return (
        <table className="table table-striped table-bordered">
           <thead>
                <tr>
                    <th>Name</th>
                    <th>Max Visitors Count</th>
                    <th>Actions</th>
                </tr>
           </thead>
           <tbody>
                {rooms.map(r => (
                <tr key={r.id}>
                    <td>{r.name}</td>
                    <td>{r.maxVisitorsCount}</td>   
                    <td><Link className="btn btn-primary" to = {`/bookings/${r.id}`}>Book</Link></td> 
                </tr>
                    ))}
            </tbody>

        </table>
    );
}

export default Rooms;