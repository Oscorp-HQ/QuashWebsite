import React from "react";
import Head from "next/head";
import Link from "next/link";

function RefundCancellationPolicy() {
  return (
    <>
      <Head>
        <title>🐞 Quash - Streamlining QA Processes 🚀</title>
        <meta
          name="description"
          content="Bug & Crash Reporting for Mobile Developers"
          key="desc"
        />
      </Head>
      <div className="text-white p-4 mt-[96px]">
        <div className="max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Refund & Cancellation Policy for Quash
          </h1>

          <p className="mb-4">
            This Refund and Cancellation Policy (“Policy”) outlines the terms
            and conditions governing refunds and cancellations for the Quash
            application (“Quash”) provided by Quash. It’s essential to read and
            understand this Policy before using Quash. By using Quash, you agree
            to abide by this Policy.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">1. Cancellation</h2>
            <p>
              1.1. You may cancel your subscription to Quash at any time. The
              cancellation will take effect at the end of your current billing
              cycle.
            </p>
            <p>
              1.2. To cancel your subscription, please follow the provided
              instructions within the Quash application or contact our customer
              support.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">2. Refund</h2>
            <p>
              2.1. Quash offers a refund under specific conditions. You may be
              eligible for a refund in the following circumstances:
            </p>
            <ul className="pl-4 italic">
              <li>
                a. Within the first 10 days of your initial subscription, you
                are eligible for a full refund if you are dissatisfied with
                Quash’s performance and functionalities. After 10 days, no
                refunds will be provided for the initial subscription.
              </li>
              <li>
                b. For subscription renewals, if you request a refund within 3
                days from the renewal date, you will receive a refund for that
                renewal period.
              </li>
            </ul>
            <p>
              2.2. To request a refund, please contact our customer support and
              provide a valid reason for your refund request. We will review
              your request and process it in accordance with this Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              3. No Refund in Specific Cases
            </h2>
            <p>3.1. Quash does not offer refunds in the following cases:</p>
            <ul className="pl-4 italic">
              <li>
                a. If you have violated these Terms or the Quash Terms of Use.
              </li>
              <li>
                b. If you have used Quash in a manner that caused harm or
                disruption to the application or its users.
              </li>
              <li>
                c. For any subscription period beyond the 3-day window following
                a renewal.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">4. Refund Processing</h2>
            <p>
              4.1. Refunds will be processed to the original payment method used
              for the subscription. The processing time for refunds may vary
              depending on your payment provider.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              5. Changes to Subscription
            </h2>
            <p>
              5.1. You may change your subscription plan at any time. Any change
              will take effect at the end of your current billing cycle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              6. Contact Information
            </h2>
            <p>
              6.1. If you have any questions or need to initiate a cancellation
              or refund request, please contact our customer support at{" "}
              <Link href="mailto:hello@quashbugs.com" className="text-blue-500">
                hello@quashbugs.com
              </Link>
              .
            </p>
          </section>

          <p>
            By using Quash, you acknowledge that you have read, understood, and
            agreed to this Refund and Cancellation Policy. This Policy ensures
            transparency and fairness in our refund and cancellation procedures.
            If you have any concerns or require clarification regarding this
            Policy, we encourage you to reach out to our customer support before
            proceeding with any refund or cancellation requests.
          </p>
        </div>
      </div>
    </>
  );
}

export default RefundCancellationPolicy;
