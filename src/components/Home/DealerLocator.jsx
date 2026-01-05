import React, { useState } from "react";
import { Search } from "lucide-react";

const dealerList = [
  { id: 1, name: "Kathmandu Dealer", location: "Kathmandu", phone: "+977 984-7130210" },
  { id: 2, name: "Butwal Dealer", location: "Butwal", phone: "+977 984-7130210" },
  { id: 3, name: "Janakpur Dealer", location: "Janakpur", phone: "+977 984-7130210" },
  { id: 4, name: "Mahendranagar Dealer", location: "Mahendranagar", phone: "+977 984-7130210" },
];

const DealerLocator = () => {
  const [search, setSearch] = useState("");

  const filteredDealers = dealerList.filter((d) =>
    d.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="dealerlocator" className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          Find <span className="text-cyan-600"> Nearest Dealer</span>
        </h2>

        {/* Search Box */}
        <div className="max-w-md mx-auto flex items-center gap-3 border rounded-xl px-4 py-2 shadow-sm">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by city (e.g. Kathmandu)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none bg-transparent"
          />
        </div>

        {/* Dealer List */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {filteredDealers.map((dealer) => (
            <div
              key={dealer.id}
              className="p-6 border rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">{dealer.name}</h3>
              <p className="text-gray-600">{dealer.location}</p>
              <a
                href={`tel:${dealer.phone}`}
                className="text-cyan-600 font-semibold mt-2 inline-block hover:underline"
              >
                {dealer.phone}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/dealers"
            className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg shadow hover:bg-cyan-700 transition"
          >
            View All Dealers
          </a>
        </div>

      </div>
    </section>
  );
};

export default DealerLocator;
