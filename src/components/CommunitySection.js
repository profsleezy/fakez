import React from 'react';
import './CommunitySection.css'; // Import the CSS file

const CommunitySection = () => {
  return (
    <section className="community-section" id="communities">
      <h2 className="community-title">Join Our Community</h2>
      <div className="community-container">
        <div className="community-card">
          <div className="community-icon">
            {/* Example icons, replace with actual SVGs or image URLs */}
            <img src="/icons/discord-icon.svg" alt="Discord" className="icon" />
          </div>
          <h3>Discord</h3>
          <p>Join our Discord server to chat with other members and get the latest updates.</p>
          <a href="https://discord.gg/your-invite-link" className="community-link">Join Discord</a>
        </div>
        <div className="community-card">
          <div className="community-icon">
            {/* Example icons, replace with actual SVGs or image URLs */}
            <img src="/icons/reddit-icon.svg" alt="Reddit" className="icon" />
          </div>
          <h3>Reddit</h3>
          <p>Visit our subreddit to participate in discussions and share your experiences.</p>
          <a href="https://reddit.com/r/your-subreddit" className="community-link">Visit Reddit</a>
        </div>
        <div className="community-card">
          <div className="community-icon">
            {/* Example icons, replace with actual SVGs or image URLs */}
            <img src="/icons/twitter-icon.svg" alt="Twitter" className="icon" />
          </div>
          <h3>Twitter</h3>
          <p>Follow us on Twitter for updates and announcements.</p>
          <a href="https://twitter.com/your-twitter-handle" className="community-link">Follow Twitter</a>
        </div>
        <div className="community-card">
          <div className="community-icon">
            {/* Example icons, replace with actual SVGs or image URLs */}
            <img src="/icons/facebook-icon.svg" alt="Facebook" className="icon" />
          </div>
          <h3>Facebook</h3>
          <p>Like our Facebook page to stay connected and receive news.</p>
          <a href="https://facebook.com/your-facebook-page" className="community-link">Like Facebook</a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
