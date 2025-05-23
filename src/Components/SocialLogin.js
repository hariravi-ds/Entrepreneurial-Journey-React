import React from 'react';

function SocialLogin() {
  return (
    <div className="flex justify-center gap-4 mb-4">
      {/* Google Button */}
      <button className="p-2 rounded-full flex items-center justify-center" >
        <img src="/images/social/google.png" alt="Google" className="w-6 h-6" />
      </button>

      {/* Facebook Button */}
      <button className="p-2 rounded-full flex items-center justify-center" >
        <img src="/images/social/facebook.png" alt="Facebook" className="w-6 h-6" />
      </button>

      {/* GitHub Button */}
      <button className="p-2 rounded-full flex items-center justify-center">
        <img src="/images/social/github.png" alt="GitHub" className="w-6 h-6" />
      </button>
    </div>
  );
}

export default SocialLogin;