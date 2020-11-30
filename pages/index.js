import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="masthead items-center bg-gray flex justify-center flex-col text-center">
          <h1 className="mx-auto text-5xl md:text-8xl  mt-2 ">
            VELETZAS <br /> SERVICE
          </h1>

          <h2 className=" mx-auto mt-2 mb-8 ">
            Leading Auto Repair Shop in Athens
          </h2>
          <Link href="#about">
            <a
              href="#about"
              className="rounded flex items-center justify-center px-6  py-4 border  text-gray-300"
            >
              Περισσότερα &nbsp;&nbsp;
            </a>
          </Link>
        </div>

        <section id="about" className="about-section text-gray-400 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-left">
              <h4 className="text-3xl text-white">Περισσότερα για εμάς</h4>
              <img className="my-8 w-full" src="/images/sunergio.jpg" alt="" />
              <p className="leading-relaxed  ">
                Η Veletzas Service διαθέτει Πολύχρονη εμπειρία και τεχνογνωσία
                Επιθεώρησης Οχημάτων για να διατηρήσει το όχημά σας σε ομαλή
                λειτουργία. Προσφέρουμε την υψηλότερη ποιότητα εξυπηρέτησης
                πελατών και αντιμετωπίζουμε το αυτοκίνητό σας σαν να ήταν δικό
                μας.Δοκιμάστε μας και Θα εκπλαγείτε από τη διαφορά που θα κάνουν
                οι υπηρεσίες μας.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="text-gray-700 body-font">
          <div className="container px-5 py-10  mx-auto">
            <h1 className="flex items-center lg:w-3/5 mx-auto mb-10 border-gray-200 sm:flex-row flex-col text-2xl font-bold">
              Υπηρεσίες
            </h1>
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Με τον όρο Lorem ipsum αναφέρονται τα κείμενα εκείνα τα οποία
                  είναι ακατάληπτα,
                </p>
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base">
                  Με τον όρο Lorem ipsum αναφέρονται τα κείμενα εκείνα τα οποία
                  είναι ακατάληπτα, δεν μπορεί δηλαδή κάποιος να βγάλει κάποιο
                  λογικό νόημα από αυτά, και έχουν δημιουργηθεί με σκοπό να
                  παρουσιάσουν στον αναγνώστη μόνο τα γραφιστικά χαρακτηριστικά,
                  αυτά καθ' εαυτάoutine.
                </p>
              </div>
              <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx={6} cy={6} r={3} />
                  <circle cx={6} cy={18} r={3} />
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  The 400 Blows
                </h2>
                <p className="leading-relaxed text-base">
                  Με τον όρο Lorem ipsum αναφέρονται τα κείμενα εκείνα τα οποία
                  είναι ακατάληπτα, δεν μπορεί δηλαδή κάποιος να βγάλει κάποιο
                  λογικό νόημα από αυτά, και έχουν δημιουργηθεί με σκοπό να
                  παρουσιάσουν στον αναγνώστη μόνο τα γραφιστικά χαρακτηριστικά,
                  αυτά καθ' εαυτά
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-2/3 w-full mx-auto overflow-auto">
              <h1 className="flex text-2xl font-bold">Τιμές</h1>
              <br />
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">
                      Plan
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                      Speed
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                      Storage
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                      Price
                    </th>
                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tr rounded-br" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3">Start</td>
                    <td className="px-4 py-3">5 Mb/s</td>
                    <td className="px-4 py-3">15 GB</td>
                    <td className="px-4 py-3 text-lg text-gray-900">Free</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      Pro
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      25 Mb/s
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      25 GB
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                      $24
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      Business
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      36 Mb/s
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      40 GB
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                      $50
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                      Exclusive
                    </td>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                      48 Mb/s
                    </td>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                      120 GB
                    </td>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                      $72
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="contact" className="text-gray-700 body-font relative">
          <div className="absolute inset-0 ">
            <iframe
              className="shadow-lg"
              style={{ marginLeft: "12.5%" }}
              width="75%"
              height="100%"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=(Μιχάλης+Βελέντζας)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            />
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 shadow-lg bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Επικοινωνία
              </h2>

              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                />
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </section>
      </main>
      <br />
      <hr />

      <footer className="text-gray-700 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2020 —
            <a
              href="mailto:mpoapostolis@gmail.com"
              className="text-gray-600 ml-1"
            >
              mpoapostolis
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
