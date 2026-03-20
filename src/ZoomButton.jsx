import React, { useState } from 'react';
import './ZoomButton.css';

const ZoomButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [meetingLink, setMeetingLink] = useState('');
    const [error, setError] = useState('');

    const handleStartZoom = async () => {
        setIsLoading(true);
        setError('');
        try {
            const response = await fetch('/api/zoom/create-meeting', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    topic: 'Virtual Coaching Session',
                    duration: 60,
                }),
            });
            const data = await response.json();
            if (data.join_url) {
                setMeetingLink(data.join_url);
                window.open(data.join_url, '_blank');
            }
        } catch (err) {
            setError('Failed to start Zoom meeting. Please try again.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="zoom-button-container">
            <button className="zoom-button" onClick={handleStartZoom} disabled={isLoading}>
                {isLoading ? '🔄 Starting...' : '🎥 Start Virtual Coaching'}
            </button>
            {meetingLink && (
                <div className="meeting-info">
                    <p>✅ Meeting started!</p>
                    <p className="small-text">If it didn't open, <a href={meetingLink} target="_blank" rel="noopener noreferrer">click here to join</a></p>
                </div>
            )}
            {error && (
                <div className="error-message">
                    ❌ {error}
                </div>
            )}
        </div>
    );
};

export default ZoomButton;