import React from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css';
import TextField from '@mui/joy/Textarea';
import { FormControlLabel, Switch, Select, MenuItem } from '@mui/material';


const Profile = () => {
  const location = useLocation();
  const { state } = location;
  const { first_name, username, photo_url } = state || {};

  if (!state) {
    return <div>No user data available.</div>;
  }

  const decodedPhotoUrl = decodeURIComponent(photo_url);

  return (
    <div>
      {/* Container for profile image and dashboard title */}
      <div className="profile-header">
        <img
          src={decodedPhotoUrl}
          alt={`${username}'s profile`}
          className="profile-image"
        />
        <div>
          <h1 className="dashboard-title">{username}'s Dashboard</h1>
          <div className="welcome-text">
            <p>Welcome in, {first_name}</p>
            <img src="/wavinghand.png" alt="Icon" className="png-icon" />
          </div>
        </div>
      </div>
      
      <div className="profile-content">
        <div className="card-container">
          <div className="credits-box-card">
            <div className="circle-container">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.5 13.05H24.3C21.6 13.05 19.35 15.3 19.35 18V18.15C19.35 20.85 21.6 23.1 24.3 23.1H27V24C27 25.8 25.65 27.15 24.15 27.15H8.85C7.35 27 6 25.65 6 23.85V12.15C6 10.35 7.35 9 8.85 9H24.15C25.2 9 26.25 9.6 26.7 10.8C27 11.55 27.9 11.85 28.65 11.55C29.4 11.25 29.7 10.35 29.4 9.6C28.5 7.35 26.4 6 24.15 6H8.85C5.7 6 3 8.7 3 12.15V23.85C3 27.3 5.7 30 8.85 30H24.15C27.45 30 30 27.3 30 23.85V22.65C31.35 22.05 32.25 20.7 32.25 19.2V16.8C32.25 14.7 30.6 13.05 28.5 13.05ZM22.35 18.15V17.85C22.35 16.8 23.25 15.9 24.3 15.9H28.5C28.95 15.9 29.25 16.2 29.25 16.65V19.2C29.25 19.65 28.95 19.95 28.5 19.95H24.3C23.25 19.95 22.35 19.2 22.35 18.15Z" fill="grey"/></svg>
            </div>
            <div className="credits-title-card">
              <div className="credits-title">Your Current Credits</div>
              <div className="credits-number">12</div>
            </div>
            <div className="circle-containerdos">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.6269 6.9H25.3881V6C25.3881 5.1 24.791 4.5 23.8955 4.5C23 4.5 22.403 5.1 22.403 6V6.9H16.7313C15.8358 6.9 15.2388 7.5 15.2388 8.4C15.2388 9.3 15.8358 9.9 16.7313 9.9H22.5522V10.8C22.5522 11.7 23.1493 12.3 24.0448 12.3C24.9403 12.3 25.5373 11.7 25.5373 10.8V9.9H27.7761C28.8209 9.9 29.8657 10.8 29.8657 12V14.1H5.98507V12C5.98507 10.8 7.02985 9.9 8.22388 9.9H10.4627V10.8C10.4627 11.7 11.0597 12.3 11.9552 12.3C12.8507 12.3 13.4478 11.7 13.4478 10.8V8.4V6C13.4478 5.1 12.8507 4.5 11.9552 4.5C11.0597 4.5 10.4627 5.1 10.4627 6V6.9H8.22388C5.23881 6.9 3 9.15 3 12V26.4C3 29.25 5.23881 31.5 8.22388 31.5H27.7761C30.6119 31.5 33 29.25 33 26.4V12C32.8507 9.15 30.6119 6.9 27.6269 6.9ZM27.6269 28.5H8.22388C7.02985 28.5 5.98507 27.6 5.98507 26.4V17.1H29.8657V26.4C29.8657 27.6 28.8209 28.5 27.6269 28.5Z" fill="grey"/></svg>
            </div>
            <div className="credits-amount-card">
              <div className='creditsamt'>Your Weekly Credits</div>
              <div className="credits-amount">9</div>
            </div>
          </div>
          <div className="buy-more-card">
            <div className='maintext'><h3>Purchase More Credits</h3></div>
            <div className="buy-more-card-content">
              <div className="buy-more-card-item">
                <h3>10 CREDITS</h3>
                <p>Get 10 more fansign generations for only $5</p>
                <button className="buy-more-button">Purchase</button>
              </div>
              <div className="buy-more-card-item">
                <h3>20 CREDITS</h3>
                <p>Get 20 more fansign generations for only $10</p>
                <button className="buy-more-button">Purchase</button>
              </div>
              <div className="buy-more-card-item">
                <h3>50 CREDITS</h3>
                <p>Get 50 more fansign generations for only $20</p>
                <button className="buy-more-button">Purchase</button>
              </div>
            </div>
          </div>

        </div>
        <div className="additional-card">
  {/* Add TextField on the left side */}
  <TextField
    variant="soft"
    placeholder="Display text on your fakesign..."
    sx={{
      color: 'white',
      width: '50%',
      height: '70%',
      position: 'absolute',
      top: '60px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      marginRight: '1rem',
      backgroundColor: '#444444',
      borderRadius: '8px',
      '& .MuiInputBase-root': {
        color: 'white',
      },
    }}
  />

  {/* Dropdown next to the TextField */}
  <Select
    defaultValue=""
    placeholder="Select an image"
    sx={{
      width: '20%',
      height: '25%',
      position: 'absolute',
      top: '60px',
      left: '55%',
      backgroundColor: '#444444',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      color: 'white',
      '& .MuiSelect-select': {
        padding: '8px',
      },
    }}
    renderValue={(selected) => {
      if (selected.length === 0) {
        return <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Pick an image</span>;
      }
      return selected;
    }}
  >
    <MenuItem value="" disabled>
      Pick an image
    </MenuItem>
    <MenuItem value="option1">Option 1</MenuItem>
    <MenuItem value="option2">Option 2</MenuItem>
    <MenuItem value="option3">Option 3</MenuItem>
  </Select>

  {/* Switches below the Select */}
  <div style={{ position: 'absolute', top: '110px', left: '55%', width: '40%' }}>
    <FormControlLabel
      control={<Switch />}
      label="Black and White"
      sx={{ color: 'white', marginBottom: '10px' }}
    />
    <FormControlLabel
      control={<Switch />}
      label="Unblur"
      sx={{ color: 'white', marginBottom: '10px' }}
    />
    <FormControlLabel
      control={<Switch />}
      label="Sharpen"
      sx={{ color: 'white', marginBottom: '10px' }}
    />
  </div>
</div>
      </div>
    </div>
  );
};

export default Profile;
