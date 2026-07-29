import { CheckCircle2, Eye, EyeOff, Heart, Lock, Mail, Phone, Sparkles } from 'lucide-react';
import { useState, type FormEvent, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import googleIcon from '/google.svg';
import './LoginPage.css';
import { apiPost } from '../../../lib/apiClient';
import { logFrontendAction } from '../../../lib/actionLogger';

type LoginResponse = {
  success: boolean;
  message: string;
  role: 'volunteer' | 'admin' | 'guest';
  redirectTo: string;
};

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage('Signing in…');

    try {
      const response = await apiPost<LoginResponse, { email: string; password: string }>('/auth/login', {
        email,
        password,
      });

      setStatusMessage(response.message);
      void logFrontendAction({
        eventType: 'login_submit',
        element: 'Sign In',
        route: '/login',
        metadata: { role: response.role, success: response.success },
      });

      if (response.success) {
        navigate(response.redirectTo);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      setStatusMessage(`Login failed: ${message}`);
      void logFrontendAction({
        eventType: 'login_failed',
        element: 'Sign In',
        route: '/login',
        metadata: { details: message },
      });
    }
  }

  return (
    <main className="login-page">
      <section className="login-shell">
        <div className="brand-panel">
          <p className="brand-kicker">SAAJHA</p>

          <h1>
            Stronger connections.
            <span>Brighter futures.</span>
          </h1>

          <p className="brand-description">
            Saajha helps volunteers reach families, complete follow-ups, and create meaningful impact in every child's journey.
          </p>

          <div className="feature-grid">
            <FeatureCard icon={<Phone size={26} />} title="Call & Connect" description="Reach parents with ease" />
            <FeatureCard icon={<Sparkles size={26} />} title="Track & Follow-up" description="Stay organized and never miss a follow-up" />
            <FeatureCard icon={<Heart size={26} />} title="Create Impact" description="Stronger families, better outcomes" />
          </div>
        </div>

        <div className="form-panel">
          <div className="login-card">
            <div className="login-header">
              <h2>Saajha</h2>
              <p>Please sign in to continue.</p>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="field-group">
                <label htmlFor="email">Email or Phone Number</label>
                <div className="input-wrapper">
                  <Mail size={20} />
                  <input id="email" type="text" placeholder="Enter email or phone number" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <Lock size={20} />
                  <input id="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} />
                  <button type="button" className="show-password" onClick={() => setShowPassword((current) => !current)}>
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
                </div>
              </div>

              <div className="form-row">
                <label className="checkbox-label">
                  <input type="checkbox" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} />
                  <span>Remember me</span>
                </label>

                <button type="button" className="link-button">
                  Forgot Password?
                </button>
              </div>

              {statusMessage ? <p className="text-sm text-[#51617D]">{statusMessage}</p> : null}

              <button type="submit" className="primary-button">
                <Lock size={18} />
                Sign In
              </button>

              <div className="divider">
                <span />
                <p>or</p>
                <span />
              </div>

              <button type="button" className="google-button">
                <img src={googleIcon} alt="" className="google-icon" />
                Sign in with Google
              </button>
            </form>

            <div className="login-footer">
              <p>
                <CheckCircle2 size={16} />
                Secure login <span>•</span> Your data is safe with us
              </p>

              <p>
                Need help? <button type="button">Contact Support</button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <article className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default LoginPage;
