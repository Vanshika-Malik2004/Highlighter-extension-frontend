import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - MARK Highlighter Extension",
  description: "Privacy Policy for MARK Highlighter Extension",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold tracking-wide hover:text-gray-700 transition-colors"
            >
              MARK
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy for Highlighter Extension
            </h1>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-600">
              <p className="m-0">
                <strong>Last Updated:</strong> January 15, 2025
              </p>
              <p className="m-0">
                <strong>Effective Date:</strong> January 15, 2025
              </p>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Thank you for using <strong>Highlighter Extension</strong> ("we,"
              "our," "the extension," or "the service"). Your privacy is
              important to us. This Privacy Policy explains what information we
              collect, how we use it, how we store it, and your rights regarding
              your data.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using Highlighter Extension, you acknowledge that you have read
              and understood this Privacy Policy and agree to its terms.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              1.1 Account Information
            </h3>
            <p className="text-gray-700 mb-3">
              When you create an account, we collect:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Email Address</strong>: Used for authentication and
                password recovery
              </li>
              <li>
                <strong>Password</strong>: Securely encrypted and stored through
                Supabase authentication (we never see your plaintext password)
              </li>
              <li>
                <strong>User ID</strong>: Automatically generated unique
                identifier for your account
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              1.2 Highlight Data
            </h3>
            <p className="text-gray-700 mb-3">
              When you create, edit, or save highlights, we collect:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Selected Text</strong>: The exact text content you
                choose to highlight on web pages
              </li>
              <li>
                <strong>Full URL</strong>: The complete web address (including
                query parameters and fragments) of the page where you created
                the highlight
              </li>
              <li>
                <strong>Notes</strong>: Any notes you add to your highlights
              </li>
              <li>
                <strong>Contextual Information</strong>: Text before and after
                your highlight (prefix and suffix) to help accurately restore
                highlights
              </li>
              <li>
                <strong>Position Data</strong>: Technical information including
                CSS paths, character offsets, and DOM positions needed to
                restore highlights accurately
              </li>
              <li>
                <strong>Highlight Colors</strong>: Your selected highlight
                colors
              </li>
              <li>
                <strong>Timestamps</strong>: When highlights were created,
                modified, or deleted
              </li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
              <p className="text-yellow-800 text-sm m-0">
                <strong>Important:</strong> We collect the{" "}
                <strong>full URL</strong> including query parameters (e.g.,{" "}
                <code>?id=123</code>) and hash fragments (e.g.,{" "}
                <code>#section</code>). This may inadvertently capture sensitive
                information embedded in URLs such as session tokens, user IDs,
                or tracking parameters.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              1.3 Technical Information
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Extension Version</strong>: To provide support and
                ensure compatibility
              </li>
              <li>
                <strong>Browser Type</strong>: For troubleshooting purposes
              </li>
              <li>
                <strong>Sync Status</strong>: To manage data synchronization
                between devices
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              1.4 Information We Do NOT Collect
            </h3>
            <p className="text-gray-700 mb-3">
              We <strong>DO NOT</strong> collect:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>Browsing history beyond pages where you create highlights</li>
              <li>Full page content (only text you explicitly select)</li>
              <li>Cookies or tracking data from websites you visit</li>
              <li>Analytics, telemetry, or usage statistics</li>
              <li>
                Device identifiers beyond what's necessary for authentication
              </li>
              <li>Location data</li>
              <li>Financial information</li>
              <li>Any data from pages where you don't create highlights</li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use your information solely to provide and improve our service:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2.1 Core Functionality
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Authenticate your identity and maintain your session</li>
              <li>Store and display your highlights across devices</li>
              <li>
                Synchronize highlights across multiple browsers and devices
              </li>
              <li>Restore highlights when you revisit web pages</li>
              <li>Allow you to edit, search, and delete your highlights</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              2.2 Communication
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Send password reset emails when requested</li>
              <li>Respond to support inquiries (if you contact us)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              2.3 Service Improvement
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Fix bugs and technical issues</li>
              <li>Improve highlight accuracy and performance</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-4">
              <p className="text-green-800 font-semibold mb-2 m-0">
                We do NOT:
              </p>
              <ul className="text-green-800 text-sm space-y-1 m-0 pl-4">
                <li>Use your data for advertising</li>
                <li>
                  Sell, rent, or share your data with third parties for
                  marketing
                </li>
                <li>Build user profiles for commercial purposes</li>
                <li>Track your behavior across websites</li>
              </ul>
            </div>
          </section>

          {/* 3. How We Store and Protect Your Data */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. How We Store and Protect Your Data
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3.1 Data Storage
            </h3>
            <p className="text-gray-700 mb-3">
              Your data is stored using <strong>Supabase</strong>, a trusted
              backend-as-a-service platform:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Service Provider</strong>: Supabase
                (https://supabase.com)
              </li>
              <li>
                <strong>Security Certification</strong>: SOC 2 Type II certified
              </li>
              <li>
                <strong>Compliance</strong>: GDPR and CCPA compliant
              </li>
              <li>
                <strong>Encryption</strong>: All data transmitted between your
                browser and Supabase is encrypted using HTTPS/TLS
              </li>
              <li>
                <strong>Password Security</strong>: Passwords are hashed using
                industry-standard algorithms (bcrypt) and never stored in
                plaintext
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              3.2 Local Storage
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                Highlights are cached locally in your browser's storage for
                offline access and performance
              </li>
              <li>
                Local data syncs with cloud storage when you're online and
                authenticated
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              3.3 Security Measures
            </h3>
            <p className="text-gray-700 mb-3">
              We implement industry-standard security practices:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>HTTPS/TLS encryption for all data in transit</li>
              <li>Secure authentication with hashed passwords</li>
              <li>
                Role-based access controls (users can only access their own
                data)
              </li>
              <li>Regular security updates and patches</li>
              <li>
                Protection against common vulnerabilities (SQL injection, XSS,
                CSRF)
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <p className="text-blue-800 text-sm m-0">
                <strong>Important Limitation:</strong> Your highlight data is{" "}
                <strong>not end-to-end encrypted</strong>. This means Supabase
                (and technically, we) can access your highlight content if
                necessary for system maintenance, legal compliance, or upon your
                request. We do not routinely access or review your highlights.
              </p>
            </div>
          </section>

          {/* 4. Data Sharing and Third Parties */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Data Sharing and Third Parties
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4.1 Third-Party Service Providers
            </h3>
            <p className="text-gray-700 mb-3">
              We share your data <strong>only</strong> with the following third
              party:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <p className="font-semibold text-gray-900 mb-2">
                Supabase (Backend Platform)
              </p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>
                  <strong>Purpose</strong>: Authentication, database storage,
                  and sync functionality
                </li>
                <li>
                  <strong>Data Shared</strong>: All data listed in Section 1
                  (account info, highlights, URLs)
                </li>
                <li>
                  <strong>Privacy Policy</strong>: https://supabase.com/privacy
                </li>
                <li>
                  <strong>Security</strong>: https://supabase.com/security
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              4.2 We Do NOT Share Data With:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Advertisers or marketing companies</li>
              <li>Data brokers</li>
              <li>Social media platforms</li>
              <li>
                Analytics companies (we don't use Google Analytics or similar
                services)
              </li>
              <li>Any other third parties, except as required by law</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              4.3 Legal Requirements
            </h3>
            <p className="text-gray-700 mb-3">
              We may disclose your information if required to:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                Comply with valid legal processes (subpoena, court order, search
                warrant)
              </li>
              <li>Protect our legal rights or defend against legal claims</li>
              <li>Prevent fraud, abuse, or security threats</li>
              <li>Protect the safety of users or the public</li>
            </ul>
            <p className="text-gray-700 italic">
              We will notify you of such requests unless prohibited by law.
            </p>
          </section>

          {/* 5. Your Rights and Choices */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Your Rights and Choices
            </h2>
            <p className="text-gray-700 mb-4">
              You have the following rights regarding your data:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  5.1 Access Your Data
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li>
                    View all your highlights anytime in the extension popup
                  </li>
                  <li>Request a complete copy of your data by emailing us</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  5.2 Modify Your Data
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li>Edit highlight colors and notes at any time</li>
                  <li>
                    Update your email address through your account settings
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  5.3 Delete Your Data
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li>
                    <strong>Individual Highlights</strong>: Delete any highlight
                    using the delete button
                  </li>
                  <li>
                    <strong>Complete Account Deletion</strong>: Contact us to
                    request complete account deletion. We will permanently
                    delete all your data within 30 days of your request.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  5.4 Export Your Data
                </h3>
                <p className="text-gray-700">
                  Request a machine-readable export of all your highlights (JSON
                  format) by contacting us
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  5.5 Disable the Extension
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li>
                    Toggle off the extension at any time to stop creating new
                    highlights
                  </li>
                  <li>
                    Uninstall the extension to completely stop all data
                    collection
                  </li>
                  <li>Sign out to prevent data synchronization</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  5.6 Opt-Out of Syncing
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li>
                    Use the extension while signed out to store highlights
                    locally only (no cloud sync)
                  </li>
                  <li>
                    Data will not be sent to Supabase unless you're logged in
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 6. Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Data Retention
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              6.1 Active Accounts
            </h3>
            <p className="text-gray-700">
              We retain your data as long as your account is active and you
              continue using the service
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
              6.2 Inactive Accounts
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Accounts inactive for 2 years may be marked for deletion</li>
              <li>We will attempt to notify you before deletion</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
              6.3 Deleted Accounts
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                After you request account deletion, all your data is permanently
                deleted within 30 days
              </li>
              <li>
                Backup copies may be retained for up to 90 days for disaster
                recovery purposes only
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
              6.4 Individual Highlights
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                Deleted highlights are removed immediately from active systems
              </li>
              <li>May persist in backups for up to 90 days</li>
            </ul>
          </section>

          {/* 7. Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Children's Privacy
            </h2>
            <p className="text-gray-700 mb-3">
              Highlighter Extension is not intended for children under 13 years
              of age. We do not knowingly collect personal information from
              children under 13.
            </p>
            <p className="text-gray-700">
              If you believe a child under 13 has provided us with personal
              information, please contact us immediately, and we will delete the
              information promptly.
            </p>
          </section>

          {/* 8. International Users */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. International Users and Data Transfers
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              8.1 Data Transfers
            </h3>
            <p className="text-gray-700">
              Your data is processed and stored on Supabase servers. By using
              our extension, you consent to the transfer of your information to
              countries that may have different data protection laws than your
              country of residence.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              8.2 European Union Users (GDPR Rights)
            </h3>
            <p className="text-gray-700 mb-3">
              If you're in the EU, you have additional rights under GDPR:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Right to Access</strong>: Obtain a copy of your personal
                data
              </li>
              <li>
                <strong>Right to Rectification</strong>: Correct inaccurate or
                incomplete data
              </li>
              <li>
                <strong>Right to Erasure</strong> ("Right to be Forgotten"):
                Request deletion of your data
              </li>
              <li>
                <strong>Right to Restrict Processing</strong>: Limit how we use
                your data
              </li>
              <li>
                <strong>Right to Data Portability</strong>: Receive your data in
                a portable format
              </li>
              <li>
                <strong>Right to Object</strong>: Object to processing of your
                data
              </li>
              <li>
                <strong>Right to Withdraw Consent</strong>: Withdraw consent at
                any time
              </li>
              <li>
                <strong>Right to Lodge a Complaint</strong>: File a complaint
                with your local data protection authority
              </li>
            </ul>
            <p className="text-gray-700 mt-3">
              To exercise these rights, contact us.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <p className="font-semibold text-gray-900 mb-2">
                Legal Basis for Processing:
              </p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>
                  <strong>Contract</strong>: To provide the service you
                  requested
                </li>
                <li>
                  <strong>Consent</strong>: When you create an account and use
                  the extension
                </li>
                <li>
                  <strong>Legitimate Interest</strong>: To improve and secure
                  our service
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              8.3 California Users (CCPA Rights)
            </h3>
            <p className="text-gray-700 mb-3">
              If you're a California resident, you have rights under CCPA:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Right to Know</strong>: What personal information we
                collect and how it's used
              </li>
              <li>
                <strong>Right to Delete</strong>: Request deletion of your
                personal information
              </li>
              <li>
                <strong>Right to Opt-Out</strong>: We do NOT sell your personal
                information (and never will)
              </li>
              <li>
                <strong>Right to Non-Discrimination</strong>: We will not
                discriminate against you for exercising your rights
              </li>
            </ul>
          </section>

          {/* 9. Browser Permissions */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Browser Permissions Explained
            </h2>
            <p className="text-gray-700 mb-4">
              Our extension requests the following Chrome permissions:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Permission
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Why We Need It
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      storage
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Save highlights locally and sync settings
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      tabs
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Identify which webpage you're on
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      activeTab
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Access the current page to create highlights
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      scripting
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Inject highlight markers into web pages
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      alarms
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Schedule periodic sync operations
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      all_urls
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Allow highlighting on any website you visit
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <p className="text-blue-800 text-sm m-0">
                <strong>Important:</strong> The <code>all_urls</code> permission
                allows the extension to work on any website you visit, but we{" "}
                <strong>only</strong> access page content when you explicitly
                select text to highlight. We do not read or collect data from
                pages where you don't create highlights.
              </p>
            </div>
          </section>

          {/* 10. Cookies and Tracking */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Cookies and Tracking
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                We do <strong>NOT</strong> use cookies for tracking
              </li>
              <li>
                We do <strong>NOT</strong> use web beacons, pixels, or
                fingerprinting
              </li>
              <li>
                We do <strong>NOT</strong> integrate with analytics services (no
                Google Analytics, Mixpanel, etc.)
              </li>
              <li>
                We use secure session tokens to keep you logged in (stored
                locally in your browser)
              </li>
            </ul>
          </section>

          {/* 11. Changes to Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time to reflect
              changes to our practices, legal requirements, or new features.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              11.1 Notification of Changes
            </h3>
            <p className="text-gray-700 mb-2">
              When we make material changes, we will:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>Update the "Last Updated" date at the top of this policy</li>
              <li>
                Display a notice in the extension (for significant changes)
              </li>
              <li>Email you (for major changes affecting your rights)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
              11.2 Your Continued Use
            </h3>
            <p className="text-gray-700">
              Your continued use of the extension after changes take effect
              constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* 12. Data Breach Notification */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Data Breach Notification
            </h2>
            <p className="text-gray-700 mb-3">
              In the unlikely event of a data breach that affects your personal
              information, we will:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>Notify you within 72 hours of discovering the breach</li>
              <li>Inform you of what data was affected</li>
              <li>Explain the steps we're taking to address the breach</li>
              <li>Provide guidance on protecting yourself</li>
            </ul>
          </section>

          {/* 13. Contact Us */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have questions, concerns, or requests regarding this
              Privacy Policy or your data:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Website</strong>:{" "}
                <a
                  href="https://highlighter-extension-frontend.vercel.app"
                  className="text-blue-600 hover:underline"
                >
                  https://highlighter-extension-frontend.vercel.app
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Response Time</strong>: We aim to respond to all
                inquiries within 48-72 hours
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              For data access, deletion, or export requests, please include:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>Your registered email address</li>
              <li>A description of your request</li>
              <li>Verification of your identity (for security purposes)</li>
            </ul>
          </section>

          {/* 14. Legal Compliance */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              14. Legal Compliance
            </h2>
            <p className="text-gray-700 mb-3">
              This extension and privacy policy comply with:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>General Data Protection Regulation (GDPR) - EU</li>
              <li>California Consumer Privacy Act (CCPA) - USA</li>
              <li>Chrome Web Store Developer Program Policies</li>
              <li>Supabase Terms of Service and Privacy Policy</li>
            </ul>
          </section>

          {/* 15. Your Consent */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              15. Your Consent
            </h2>
            <p className="text-gray-700 mb-3">
              By using Highlighter Extension, you consent to:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                The collection, use, and storage of your data as described in
                this policy
              </li>
              <li>The transfer of your data to Supabase servers</li>
              <li>The storage of full URLs including query parameters</li>
              <li>The synchronization of your highlights across devices</li>
            </ul>
            <p className="text-gray-700 font-semibold mt-4">
              You can withdraw consent at any time by signing out, uninstalling
              the extension, or requesting account deletion.
            </p>
          </section>

          {/* 16. Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              16. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-3">
              While we implement robust security measures, no system is
              completely secure. We cannot guarantee absolute security of your
              data. Use of this extension is at your own risk.
            </p>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <p className="text-red-800 text-sm m-0">
                <strong>Sensitive Information Warning:</strong> Avoid
                highlighting sensitive information such as passwords, credit
                card numbers, Social Security numbers, medical information, or
                any confidential personal information.
              </p>
            </div>
          </section>

          {/* 17. Transparency */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              17. Transparency
            </h2>
            <p className="text-gray-700">
              We believe in transparency. Our extension's code structure and
              data practices are as described in this policy. If you have
              technical questions about how we handle data, contact us.
            </p>
          </section>

          {/* Final Statement */}
          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <p className="text-center text-gray-700 font-semibold text-lg mb-4">
              By using Highlighter Extension, you acknowledge that you have read
              and understood this Privacy Policy.
            </p>
            <p className="text-center text-gray-600 text-sm">
              Highlighter Extension Privacy Policy - Version 1.0
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} MARK Highlighter Extension. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Questions about this policy?{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
