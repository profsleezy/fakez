import React from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const location = useLocation();
  const { state } = location;
  const { first_name, username, photo_url } = state || {};

  if (!state) {
    return <div className="profile-container">No user data available.</div>;
  }

  const decodedPhotoUrl = decodeURIComponent(photo_url);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="dashboard-title">{first_name}'s Dashboard</div>
        <div className="profile-section">
          <button className="log-out-button">Log Out</button>
          <img
            src={decodedPhotoUrl}
            alt={`${username}'s profile`}
            className="profile-image"
          />
        </div>
      </div>
      <div className="profile-content">
        <div className="card-container">
          <div className="credits-box-card">
            <div className="credits-title">Credits Balance</div>
            <div className="credits-amount">50</div>
          </div>
          <div className="buy-more-card">
            <button className="buy-more-button">Buy More Credits</button>
          </div>
        </div>
        {/* Additional content can be added here */}
      </div>
    </div>
  );
};

export default Profile;
