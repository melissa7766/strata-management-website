Sure! Here's a basic example of how you can structure your `pages/index.js` file to reflect the Strata Management scenario in New South Wales:

```jsx
// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>StrataEase - Strata Management</title>
        <meta name="description" content="Manage your strata-titled apartment building with ease." />
      </Head>
      <header>
        <h1>Welcome to StrataEase</h1>
        <p>Your go-to solution for Strata Management in New South Wales.</p>
      </header>
      <main>
        <section>
          <h2>About Strata Management</h2>
          <p>
            In New South Wales, strata-titled apartment buildings are governed by the Strata Schemes Management Act (2015). Each building is subdivided into units, or lots, and are collectively part of the Owners Corporation (aka body corporate) which is responsible for things like the maintenance of common areas, and insurance for the building. For this, owners pay levies into an administration fund and capital works fund.
          </p>
        </section>
        <section>
          <h2>Strata Committee Responsibilities</h2>
          <p>
            The act sets out the responsibilities of the Strata Committee, which are elected representatives of the owners, responsible for managing the body corporate. There must be a Treasurer, Secretary and Chairperson, and it can have other members, up to a maximum of 9.
          </p>
        </section>
        <section>
          <h2>Manage Your Building</h2>
          <p>
            Imagine you have been elected to the committee and are now managing the building yourself. Use this website to support the management of the building.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 StrataEase. All rights reserved.</p>
      </footer>
    </div>
  );
}
