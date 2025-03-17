import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <section className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h2 className="mb-2 tracking-[-.01em]">About Strata Management</h2>
          <p>
            In New South Wales, strata-titled apartment buildings are governed by the Strata Schemes Management Act (2015). Each building is subdivided into units, or lots, and are collectively part of the Owners Corporation (aka body corporate) which is responsible for things like the maintenance of common areas, and insurance for the building. For this, owners pay levies into an administration fund and capital works fund.
          </p>
        </section>
        <section className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h2 className="mb-2 tracking-[-.01em]">Strata Committee Responsibilities</h2>
          <p>
            The act sets out the responsibilities of the Strata Committee, which are elected representatives of the owners, responsible for managing the body corporate. There must be a Treasurer, Secretary and Chairperson, and it can have other members, up to a maximum of 9.
          </p>
        </section>
        <section className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h2 className="mb-2 tracking-[-.01em]">Manage Your Building</h2>
          <p>
            Imagine you have been elected to the committee and are now managing the building yourself. Use this website to support the management of the building.
          </p>
        </section>
        <section className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h2 className="mb-2 tracking-[-.01em]">Pending Levies</h2>
          <p>
            Keep track of pending levies that need to be paid into the administration fund and capital works fund. Ensure all owners are up-to-date with their payments to maintain the financial health of the building.
          </p>
        </section>
        <section className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h2 className="mb-2 tracking-[-.01em]">Insurance</h2>
          <p>
            The Owners Corporation is responsible for insuring the building. Make sure the insurance policy is current and covers all necessary aspects, including common areas and public liability.
          </p>
        </section>
        <section className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h2 className="mb-2 tracking-[-.01em]">Maintenance Checklist</h2>
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-200 px-4 py-2">Area</th>
                <th className="border border-gray-200 px-4 py-2">Status</th>
                <th className="border border-gray-200 px-4 py-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Lobby</td>
                <td className="border border-gray-200 px-4 py-2">Pending</td>
                <td className="border border-gray-200 px-4 py-2">Needs new paint</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Elevator</td>
                <td className="border border-gray-200 px-4 py-2">Completed</td>
                <td className="border border-gray-200 px-4 py-2">Serviced last month</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Roof</td>
                <td className="border border-gray-200 px-4 py-2">Pending</td>
                <td className="border border-gray-200 px-4 py-2">Inspection scheduled</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
