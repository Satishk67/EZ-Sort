import "./LoginPage.css";
function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo">
            <i className="fas fa-sort-amount-up"></i>
            <h1>EzSort</h1>
          </div>
          <p className="welcome-text">
            Welcome back! Please sign in to your account.
          </p>
        </div>

        <form className="login-form" id="loginForm">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick="togglePassword()"
              >
                <i className="fas fa-eye" id="toggleIcon"></i>
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" id="remember" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="sign-in-btn">
            <span>Sign In</span>
            <i className="fas fa-arrow-right"></i>
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <div className="social-login">
            <button type="button" className="social-btn google-btn">
              <i className="fab fa-google"></i>
              Continue with Google
            </button>
            <button type="button" className="social-btn github-btn">
              <i className="fab fa-github"></i>
              Continue with GitHub
            </button>
          </div>

          <div className="signup-link">
            <p>
              Don't have an account? <a href="#">Sign up here</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
