import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy for Quash SDK</h1>
        {/* <p className="mb-2">Effective Date: August 25, 2023</p> */}

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to Quash, a software development kit designed to enhance developers' ability to monitor and manage bugs
            and crashes within their applications. At Quash, we prioritize the privacy of our users. This privacy policy outlines
            our practices concerning the collection, use, and sharing of your information. By using Quash and its services, you
            signify your acceptance of this privacy policy.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">2. Information We Collect</h2>
          <p>a) Direct Information</p>
          <p>When you register for Quash, you may be asked to provide details such as:</p>
          <ul className="list-disc pl-4">
            <li>Email address</li>
            <li>Full Name</li>
            <li>Organization's name and address</li>
          </ul>
          <p>b) Automatic Information</p>
          <p>Upon integration with your application, Quash collects information such as:</p>
          <ul className="list-disc pl-4">
            <li>Detailed bug and crash reports</li>
            <li>Device type, brand, and OS version</li>
            <li>Session replays and in-app activities</li>
          </ul>
          <p>c) Integration Data</p>
          <p>When linking with third-party platforms like JIRA, we may obtain:</p>
          <ul className="list-disc pl-4">
            <li>JIRA user identifiers, issue details, and correspondence data</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">3. Purpose of Data Collection</h2>
          <p>The data we gather aids us in:</p>
          <ul className="list-disc pl-4">
            <li>Constructing and overseeing bug reports with proficiency</li>
            <li>Augmenting user experience by comprehensively understanding and rectifying issues</li>
            <li>Offering seamless integrations with platforms like JIRA to better streamline issue tracking</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">4. Data Storage and Security</h2>
          <p>We store user data in secure cloud databases with data centers located in the United States. Rigorous security measures,
            such as end-to-end encryption, multi-factor authentication, and regular security audits, are employed to safeguard your data.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">5. Third-party Integrations</h2>
          <p>While we cooperate with platforms like JIRA to augment our service offering, we consistently maintain user privacy and
            the sanctity of data. Only necessary data is shared with these platforms, ensuring limited exposure and enhanced protection.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">6. User Rights</h2>
          <p>a) Access</p>
          <p>At any point, you can request a detailed copy of the data we have stored about you.</p>
          <p>b) Modification</p>
          <p>Should you find discrepancies in your data, you have the right to request its amendment.</p>
          <p>c) Deletion</p>
          <p>You can petition for the removal of your data from our records at any time.</p>
          <p>d) Opt-out</p>
          <p>You retain the choice to opt out of data sharing agreements or to refuse specific types of notifications.</p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">7. Cookies and Tracking</h2>
          <p>To streamline user interactions, we employ cookies and similar tracking mechanisms. These can be modified or disabled from
            within your web browser settings.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">8. Data Retention</h2>
          <p>Data associated with users is retained for a period of 36 months. Post this duration, it is permanently deleted.
            However, exceptions may occur if certain data is mandated to be retained due to legal obligations.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">9. Children's Privacy</h2>
          <p>Quash services are tailored for professionals and are not intended for children under the age of 13. We take stringent measures
            to ensure we do not inadvertently collect data from this demographic.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">10. Changes to This Privacy Policy</h2>
          <p>Amendments to this policy may be undertaken periodically. In such cases, users will be promptly notified either via email or
            through a conspicuous notice on our platform.
          </p>
        </section>

        {/* Section 11 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">11. Contact Information</h2>
          <p>For queries, concerns, or feedback regarding this privacy policy, please reach out to us at [hello@quashbugs.com].</p>
        </section>

        {/* Section 12 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">12. Consent</h2>
          <p>Engaging with Quash and its associated services indicates your agreement with the stipulations set forth in this privacy policy.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
