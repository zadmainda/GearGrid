export class AuthModal {
  constructor() {
    this.initializeModals();
    this.signinModal = document.getElementById('signin-modal');
    this.signupModal = document.getElementById('signup-modal');
    this.trigger = document.getElementById('header-auth-trigger');
    this.attachListeners();
  }

  initializeModals() {
    // Only inject modals once (check if they exist)
    if (document.getElementById('signin-modal')) return;

    const modalsHTML = `
      <!-- Sign In Modal -->
      <section class="auth-modal" id="signin-modal">
        <div class="auth-modal_overlay"></div>
        <div class="auth-modal_content">
          <button class="modal-close" aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div class="signup signup-active">
            <div class="signup_img">
              <div class="header_logo">
                <a href="#">GearGrid</a>
              </div>
              <img src="./assets/images/signup-popup/signup.png" alt="">
            </div>
            <div class="signup_form">
              <h4 class="signup_headline">Sign In</h4>
              <span>Don't have an account yet? <a href="#" class="switch-to-signup">Sign Up</a></span>
              <form action="">
                <input type="text" placeholder="Your Username or email" required>
                <input type="password" placeholder="Password" required>
                <div class="signup_policy">          
                  <input type="checkbox" id="privacybox">
                  <label for="privacybox">Remember me</label>
                  <span>Forgot your password?</span>
                </div>
                <button type="submit">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- Sign Up Modal -->
      <section class="auth-modal" id="signup-modal">
        <div class="auth-modal_overlay"></div>
        <div class="auth-modal_content">
          <button class="modal-close" aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div class="signup signup-active">
            <div class="signup_img">
              <div class="header_logo">
                <a href="#">GearGrid</a>
              </div>
              <img src="./assets/images/signup-popup/signup.png" alt="">
            </div>
            <div class="signup_form">
              <h4 class="signup_headline">Sign Up</h4>
              <span>Already have an account? <a href="#" class="switch-to-signin">Sign In</a></span>
              <form action="">
                <input type="text" placeholder="Your Name" required>
                <input type="text" placeholder="Username" required>
                <input type="email" placeholder="Email address" required>
                <input type="password" placeholder="Password" required>
                <div class="signup_policy">          
                  <input type="checkbox" id="privacybox-signup">
                  <label for="privacybox-signup">I agree with Privacy policy and Terms of Use</label>
                </div>
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;

    // Inject at end of body
    document.body.insertAdjacentHTML('beforeend', modalsHTML);
  }

  attachListeners() {
    // Trigger button
    this.trigger?.addEventListener('click', (e) => {
      e.preventDefault();
      this.open('signin');
    });

    // Close buttons
    this.signinModal?.querySelector('.modal-close')?.addEventListener('click', () => {
      this.close('signin');
    });

    this.signupModal?.querySelector('.modal-close')?.addEventListener('click', () => {
      this.close('signup');
    });

    // Overlay click to close
    this.signinModal?.querySelector('.auth-modal_overlay')?.addEventListener('click', () => {
      this.close('signin');
    });

    this.signupModal?.querySelector('.auth-modal_overlay')?.addEventListener('click', () => {
      this.close('signup');
    });

    // Switch between signin and signup
    this.signinModal?.querySelector('.switch-to-signup')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.close('signin');
      this.open('signup');
    });

    this.signupModal?.querySelector('.switch-to-signin')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.close('signup');
      this.open('signin');
    });
  }

  open(type) {
    const modal = type === 'signin' ? this.signinModal : this.signupModal;
    if (modal) {
      modal.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    }
  }

  close(type) {
    const modal = type === 'signin' ? this.signinModal : this.signupModal;
    if (modal) {
      modal.classList.remove('modal-open');
      document.body.style.overflow = '';
    }
  }
}