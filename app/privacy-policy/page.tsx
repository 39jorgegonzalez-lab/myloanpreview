import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
  <Navbar />

  <main className="bg-slate-100 min-h-screen py-16 px-6">
    <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-10 md:p-14">

      <h1 className="text-4xl font-bold text-slate-900 mb-10">
        Privacy Policy
      </h1>

      <div className="space-y-8 text-slate-700 leading-8">

        <div>
          <h2 className="text-xl font-bold text-blue-700 mb-2">
            Information Collection
          </h2>
          <p>
            MYLOANPREVIEW may collect non-personal analytics information to improve website functionality and user experience.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-blue-700 mb-2">
            Analytics
          </h2>
          <p>
            We may use analytics services such as Google Analytics to better understand website traffic and usage patterns.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-blue-700 mb-2">
            Cookies
          </h2>
          <p>
            This website may use cookies and similar technologies to improve site functionality and performance.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-blue-700 mb-2">
            Personal Information
          </h2>
          <p>
            MYLOANPREVIEW does not require users to create accounts or submit sensitive financial information to use basic calculators.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-blue-700 mb-2">
            Third-Party Services
          </h2>
          <p>
            Third-party tools or partners may have separate privacy policies that govern their services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-blue-700 mb-2">
            Policy Updates
          </h2>
          <p>
            This privacy policy may be updated periodically as the website evolves.
          </p>
        </div>

      </div>
    </div>
  </main>

  <Footer />
</>
  )
}