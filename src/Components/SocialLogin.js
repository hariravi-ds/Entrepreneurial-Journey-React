function SocialLogin() {
    return (
      <div className="flex justify-center space-x-4 my-4">
        <p className="self-center text-secondary-text">Or</p>
        <img src="/images/social/google.png" alt="Google Login" className="h-8 cursor-pointer" />
        <img src="/images/social/facebook.png" alt="Facebook Login" className="h-8 cursor-pointer" />
        <img src="/images/social/github.png" alt="GitHub Login" className="h-8 cursor-pointer" />
      </div>
    );
  }
  
  export default SocialLogin;