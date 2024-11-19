import React, { useState } from 'react';
import styles from './bottomsection.css'; // Import external CSS module

function BottomSection() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5001/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                alert('Subscription successful! Check your email for a welcome message.');
                setEmail(''); // Clear email input after success
            } else {
                const errorData = await response.json();
                console.error('Subscription failed:', errorData);
                alert(errorData.error || 'Subscription failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label}>SIGN UP FOR OUR DAILY INSIDER</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Subscribe</button>
            </form>
        </div>
    );
}

export default BottomSection;
