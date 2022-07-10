import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";

const Bookings = () => {
    //states for changing some values to submit the form
    const { roomId } = useParams();
    const [booking, setBooking] = useState('')
    const [dateFrom, setDateFrom] = useState('')
    const [dateTo, setDateTo] = useState('')
    const [visitorsCount, setVisitorsCount] = useState(1)

    //state for response of submit  (true/false)
    const [uploaded, setUploaded] = useState(false)

    //event for submitting the form
    function submit(e) {
        e.preventDefault()
        const booking = { roomId: parseInt(roomId), dateFrom, dateTo, visitorsCount }
        const strBooking = JSON.stringify(booking)
        console.log(strBooking)
        fetch(`https://localhost:7229/api/bookings`,
            {
                method: 'Post',
                mode: 'cors',
                body: strBooking,
                headers: {           
                    'content-type' : 'application/json'
                }
            }
        )
            .then(() => setUploaded(true))
    }
    if (uploaded) {
        return <Navigate to="/rooms" />
    }

    return (
        <form onSubmit={submit}>
            <div>
                <label>
                    Date from:
                    <input type='date' value={dateFrom} onChange={(e) => { setDateFrom(e.target.value) }} />
                </label>
            </div>
            <div>
                <label>
                    Date to:
                    <input type='date' value={dateTo} onChange={(e) => { setDateTo(e.target.value) }} />
                </label>
            </div>
            <div>
                <label>
                    Number of visitors:
                    <input type='number' value={visitorsCount} onChange={(e) => { setVisitorsCount(parseInt(e.target.value)) }} />
                </label>
            </div>
            <div>
                <button type="sumbit">Submit</button>
            </div>
        </form>
    );

}

export default Bookings;