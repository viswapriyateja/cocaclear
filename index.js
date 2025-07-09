import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>CocaClear – Clarity in Every Sip</title>
      </Head>

      <main className="bg-white text-gray-800">
        {/* Header */}
        <header className="bg-aqua text-white py-6 text-center shadow">
          <h1 className="text-4xl font-bold">CocaClear</h1>
          <p className="text-lg mt-2">Clarity in Every Sip</p>
        </header>

        {/* Drink Collection */}
        <section className="py-12 px-6 bg-ocean">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Drinks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {["Pure Hydration", "Lime Fresh", "Berry Spark", "Coconut Chill", "Mint Calm", "Aloe Boost"].map((drink, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <div className="h-40 bg-aqua rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-center">{drink}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">About CocaClear</h2>
          <p className="text-lg text-gray-600">
            CocaClear is a modern health drink brand focused on natural hydration. Our water-based blends are infused with essential minerals and light flavors to keep your body refreshed and your mind clear. All our packaging is eco-friendly and 100% recyclable.
          </p>
        </section>

        {/* Contact Form */}
        <section className="bg-ocean py-16 px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">Get in Touch</h2>
          <form className="max-w-xl mx-auto space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <button type="submit" className="bg-aqua text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition">
              Send Message
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} CocaClear. All rights reserved.
        </footer>
      </main>
    </>
  );
}