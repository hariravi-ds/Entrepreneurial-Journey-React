import React from 'react';

function SocialLogin() {
  return (
          <div className="flex justify-center items-center space-x-6">
            <button className="cursor-pointer rounded-full hover:scale-110 transition">
              <img
                src="/Images/Social/Google.svg"
                alt="Google"
                className="w-10 h-10"
              />
            </button>
            <button className="cursor-pointer rounded-full hover:scale-110 transition">
              <img
                src="/Images/Social/Facebook.png"
                alt="Facebook"
                className="w-10 h-10"
              />
            </button>
            <button className="cursor-pointer rounded-full hover:scale-110 transition">
              <img
                src="/Images/Social/Github.svg"
                alt="Github"
                className="w-10 h-10"
              />
            </button>
          </div>
  );
}

export default SocialLogin;