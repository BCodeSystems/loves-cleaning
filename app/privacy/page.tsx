

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-slate-600">
          Effective Date: {new Date().getFullYear()}
        </p>

        <section className="mt-10 space-y-6 text-base leading-7 text-slate-700">
          <p>
            Loves Cleaning respects your privacy and is committed to protecting
            your personal information. This Privacy Policy explains what
            information we collect, how we use it, and your rights under
            California law, including the California Consumer Privacy Act
            (CCPA), as amended by the CPRA.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            Information We Collect
          </h2>
          <p>
            We may collect the following categories of personal information
            when you submit a form, request a quote, or contact us:
          </p>
          <ul className="list-disc pl-6">
            <li>Name</li>
            <li>Business Name (for commercial inquiries)</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Service request details</li>
          </ul>
          <p>
            We may also collect limited technical information such as IP
            address, browser type, and usage data for website security and
            analytics purposes.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6">
            <li>Respond to inquiries and provide quotes</li>
            <li>Schedule and manage cleaning services</li>
            <li>Communicate regarding services or updates</li>
            <li>Improve our website and customer experience</li>
          </ul>
          <p>
            We do not sell your personal information.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            California Privacy Rights (CCPA/CPRA)
          </h2>
          <p>
            If you are a California resident, you have the right to:
          </p>
          <ul className="list-disc pl-6">
            <li>Request access to the personal information we collect about you</li>
            <li>Request deletion of your personal information</li>
            <li>Request correction of inaccurate personal information</li>
            <li>Opt out of the sale or sharing of personal information (we do not sell personal information)</li>
            <li>Not be discriminated against for exercising your privacy rights</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the
            information below.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            Data Retention
          </h2>
          <p>
            We retain personal information only as long as necessary to fulfill
            the purposes described in this policy or as required by law.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            Security
          </h2>
          <p>
            We implement reasonable administrative, technical, and physical
            safeguards designed to protect your personal information from
            unauthorized access, disclosure, or misuse.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise
            your privacy rights, please contact us at:
          </p>
          <p>
            Email: info@lovescleaning.com
            <br />
            Phone: (555) 555-5555
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Updates will
            be posted on this page with a revised effective date.
          </p>
        </section>
      </div>
    </main>
  );
}