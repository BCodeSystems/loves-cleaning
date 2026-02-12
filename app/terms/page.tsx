

export default function TermsPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Terms of Service
        </h1>

        <p className="mt-4 text-sm text-slate-600">
          Effective Date: {new Date().getFullYear()}
        </p>

        <section className="mt-10 space-y-6 text-base leading-7 text-slate-700">
          <p>
            These Terms of Service ("Terms") govern your use of the Loves
            Cleaning website and services. By accessing our website or
            requesting services, you agree to these Terms.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            Services
          </h2>
          <p>
            Loves Cleaning provides residential and commercial cleaning services.
            Service availability, scope, and pricing may vary based on location,
            property condition, and scheduling.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            Quotes and Scheduling
          </h2>
          <p>
            Quotes provided through the website or phone/email are estimates and
            may change after an on-site assessment or based on additional
            requested services. Appointments are subject to availability.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            Cancellations and Rescheduling
          </h2>
          <p>
            Please contact us as soon as possible if you need to cancel or
            reschedule. Same-day cancellations may be subject to a cancellation
            fee.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            Access and Safety
          </h2>
          <p>
            You agree to provide safe access to the premises during the
            scheduled service time. Please secure pets and remove hazards.
            Loves Cleaning may refuse or pause service if conditions are unsafe.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            Payment
          </h2>
          <p>
            Payment terms will be communicated at the time of booking. Invoices
            are due upon receipt unless otherwise agreed in writing. Late
            payments may result in service suspension.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            Customer Responsibilities
          </h2>
          <p>
            To help us deliver the best results, you agree to:
          </p>
          <ul className="list-disc pl-6">
            <li>Provide accurate information about the space and requested services</li>
            <li>Secure valuables and sensitive items</li>
            <li>Notify us of fragile surfaces or special instructions</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            Disclaimers
          </h2>
          <p>
            While we strive for high-quality results, we do not guarantee that
            every stain or odor can be removed. Results may vary depending on
            surface condition and prior maintenance.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, Loves Cleaning will not be
            liable for indirect, incidental, special, or consequential damages.
            Our total liability for any claim related to services will not
            exceed the amount paid for the service giving rise to the claim.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            Website Use
          </h2>
          <p>
            You agree not to misuse the website, attempt unauthorized access,
            or interfere with site operation. Content on this website is
            provided for general information and may be updated without notice.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            Governing Law
          </h2>
          <p>
            These Terms are governed by the laws of the State of California,
            without regard to conflict of laws principles.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            Contact
          </h2>
          <p>
            If you have questions about these Terms, contact us at:
          </p>
          <p>
            Email: info@lovescleaning.com
            <br />
            Phone: (555) 555-5555
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            Changes to These Terms
          </h2>
          <p>
            We may update these Terms from time to time. Updates will be posted
            on this page with a revised effective date.
          </p>
        </section>
      </div>
    </main>
  );
}