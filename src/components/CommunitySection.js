import React from 'react';
import './CommunitySection.css'; // Import the CSS file

const CommunitySection = () => {
  return (
    <section className="community-section" id="communities">
      <h2 className="community-title">Join Our Community</h2>
      <div className="platform-pillars">
        <div className="platform-pillar">
          <div className="pillar-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" class="ai ai-DiscordFill"><path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/></svg>
          </div>
          <h3>Discord</h3>
          <p>Engage in real-time conversations, get updates, and be part of our lively discussions.</p>
          <a href="https://discord.gg/" className="pillar-link">Join Now</a>
        </div>
        <div className="platform-pillar">
          <div className="pillar-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" class="ai ai-TelegramFill"><g clip-path="url(#clip0_331_272)"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM12.43 8.859c-1.167.485-3.5 1.49-6.998 3.014-.568.226-.866.447-.893.663-.046.366.412.51 1.034.705.085.027.173.054.263.084.613.199 1.437.432 1.865.441.389.008.823-.152 1.302-.48 3.268-2.207 4.955-3.322 5.061-3.346.075-.017.179-.039.249.024.07.062.063.18.056.212-.046.193-1.84 1.862-2.77 2.726-.29.269-.495.46-.537.504-.094.097-.19.19-.282.279-.57.548-.996.96.024 1.632.49.323.882.59 1.273.856.427.291.853.581 1.405.943.14.092.274.187.405.28.497.355.944.673 1.496.623.32-.03.652-.331.82-1.23.397-2.126 1.179-6.73 1.36-8.628a2.111 2.111 0 0 0-.02-.472.506.506 0 0 0-.172-.325c-.143-.117-.365-.142-.465-.14-.451.008-1.143.249-4.476 1.635z"/></g><defs><clipPath id="clip0_331_272"><rect width="24" height="24"/></clipPath></defs></svg>
          </div>
          <h3>Telegram</h3>
          <p>Participate in community-driven discussions and share your stories with like-minded individuals.</p>
          <a href="https://telegram.com/" className="pillar-link">Join Discussion</a>
        </div>
        <div className="platform-pillar">
          <div className="pillar-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" class="ai ai-XFill"><path d="M13.808 10.469L20.88 2h-1.676l-6.142 7.353L8.158 2H2.5l7.418 11.12L2.5 22h1.676l6.486-7.765L15.842 22H21.5l-7.693-11.531zm-2.296 2.748l-.752-1.107L4.78 3.3h2.575l4.826 7.11.751 1.107 6.273 9.242h-2.574l-5.12-7.541z"/></svg>
          </div>
          <h3>Twitter</h3>
          <p>Stay updated with our latest news and join the conversation with our followers.</p>
          <a href="https://twitter.com/" className="pillar-link">Follow Us</a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
