// src/screens/LandingPage/TwitterEmbed.jsx
import React, { useEffect } from 'react';

const TwitterEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="twitter-container">
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          🚀 Exciting News! Our Airdrop Registration Starts on July 17th! 🎉<br /><br />
          To celebrate, we&#39;re giving away 1 SOL to the top Sardine who follows these steps:<br /><br />
          1️⃣ Follow <a href="https://twitter.com/SardanaCoin?ref_src=twsrc%5Etfw">@sardanacoin</a><br />
          2️⃣ Comment on this post<br />
          3️⃣ Retweet this post to spread the word!<br /><br />
          The Sardine with the most likes and… <a href="https://t.co/uGuIZjC8hd">pic.twitter.com/uGuIZjC8hd</a>
        </p>
        &mdash; Sardana (@SardanaCoin) <a href="https://twitter.com/SardanaCoin/status/1807139225256554990?ref_src=twsrc%5Etfw">June 29, 2024</a>
      </blockquote>
    </div>
  );
};

export default TwitterEmbed;
