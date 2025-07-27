import React from 'react';
import './PrivacyPolicy.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className='container'>
      <div className="privacy-container">
        <div className="privacy-policy-content">
          <h1>Privacy Policy</h1>
          <p><strong>Effective Date:</strong> [Insert Date]</p>

          <section>
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy outlines how <strong>SreeDeals</strong> (“we”, “our”, “us”) collects, uses, and protects the personal information you provide while using our website <strong>[https://www.sreedeals.com]</strong>.
              By accessing or using our platform, you agree to the terms described in this policy.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <ul>
              <li><strong>Personal Data:</strong> Name, email address, phone number (if submitted).</li>
              <li><strong>Device Info:</strong> IP address, browser type, OS, device type.</li>
              <li><strong>Usage Data:</strong> Pages viewed, click behavior, story interactions.</li>
              <li><strong>Cookies:</strong> Session IDs, preferences, and ad-related tracking.</li>
              <li><strong>Payment Info:</strong> Collected securely via third-party processors if applicable.</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Collect Data</h2>
            <ul>
              <li>Through forms (contact, newsletter, feedback)</li>
              <li>Browser cookies and local storage</li>
              <li>Analytics tools like Google Analytics</li>
              <li>Third-party integrations (AdSense, embedded media, payment services)</li>
            </ul>
          </section>

          <section>
            <h2>4. Purpose of Data Collection</h2>
            <ul>
              <li>To improve story relevance and website performance</li>
              <li>To personalize your user experience</li>
              <li>To send optional newsletters (only with consent)</li>
              <li>To process purchases or subscriptions (if applicable)</li>
              <li>To ensure site security and monitor abuse</li>
            </ul>
          </section>

          <section>
            <h2>5. Data Storage & Protection</h2>
            <ul>
              <li>Data is stored on secure, access-controlled servers</li>
              <li>SSL encryption is used for all transmitted data</li>
              <li>Regular vulnerability scans and updates</li>
            </ul>
            <p>While we take appropriate precautions, no method of online transmission is 100% secure.</p>
          </section>

          <section>
            <h2>6. User Rights</h2>
            <p><strong>Under GDPR or CCPA, you may request to:</strong></p>
            <ul>
              <li>Access the data we hold about you</li>
              <li>Request corrections or deletion of your data</li>
              <li>Withdraw consent to data processing</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            <p>To exercise these rights, contact us at <strong>[Insert Email Address]</strong>.</p>
          </section>

          <section>
            <h2>7. Third-Party Sharing</h2>
            <p>We may share your data with:</p>
            <ul>
              <li>Trusted service providers (e.g., hosting, analytics, payment processors)</li>
              <li>Advertisers such as Google AdSense (anonymized or with consent)</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p>We do not sell your personal information.</p>
          </section>

          <section>
            <h2>8. Cookies & Tracking</h2>
            <p>We use cookies and tracking technologies to:</p>
            <ul>
              <li>Enhance user experience and navigation</li>
              <li>Measure website performance and traffic</li>
              <li>Serve personalized ads via third parties</li>
            </ul>
            <p>You may manage or disable cookies through your browser settings.</p>
          </section>

          <section>
            <h2>9. Policy Updates</h2>
            <p>
              We may update this policy from time to time. Changes will be posted on this page with a new effective date.
              Continued use of the site indicates acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2>10. Contact Information</h2>
            <p>
              If you have questions or wish to make a data request, please contact:
            </p>
            <p><strong>Email:</strong> [Insert Email Address]</p>
            <p><strong>Address:</strong> [Insert Physical Address if applicable]</p>
          </section>

          <p>
            This Privacy Policy complies with data protection laws such as the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
