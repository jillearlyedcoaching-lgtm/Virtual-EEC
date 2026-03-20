import React, { useState, useEffect } from 'react';

const MeetingDashboard = () => {
    const [meetings, setMeetings] = useState([]);
    const [meetingName, setMeetingName] = useState('');
    const [meetingTime, setMeetingTime] = useState('');
    const [isJoining, setIsJoining] = useState(false);

    useEffect(() => {
        // Fetch existing meetings (dummy function)
        const fetchMeetings = () => {
            // simulate fetching data
            const existingMeetings = [
                { id: 1, name: 'Math Meeting', time: '2026-03-20 10:00:00' },
                { id: 2, name: 'Science Meeting', time: '2026-03-21 14:00:00' }
            ];
            setMeetings(existingMeetings);
        };

        fetchMeetings();
    }, []);

    const handleScheduleMeeting = () => {
        const newMeeting = { id: meetings.length + 1, name: meetingName, time: meetingTime };
        setMeetings([...meetings, newMeeting]);
        setMeetingName('');
        setMeetingTime('');
    };

    const handleJoinMeeting = (id) => {
        setIsJoining(true);
        console.log(`Joining meeting with ID: ${id}`);
        // Logic to join meeting
    };

    return (
        <div>
            <h1>Meeting Dashboard</h1>
            <div>
                <h2>Schedule New Meeting</h2>
                <input 
                    type='text' 
                    placeholder='Meeting Name' 
                    value={meetingName} 
                    onChange={(e) => setMeetingName(e.target.value)}
                />
                <input 
                    type='datetime-local' 
                    value={meetingTime} 
                    onChange={(e) => setMeetingTime(e.target.value)}
                />
                <button onClick={handleScheduleMeeting}>Schedule Meeting</button>
            </div>
            <div>
                <h2>Existing Meetings</h2>
                <ul>
                    {meetings.map(meeting => (
                        <li key={meeting.id}>
                            {meeting.name} at {meeting.time} 
                            <button onClick={() => handleJoinMeeting(meeting.id)}>Join</button>
                        </li>
                    ))}
                </ul>
            </div>
            {isJoining && <p>Joining the meeting...</p>}
        </div>
    );
};

export default MeetingDashboard;
