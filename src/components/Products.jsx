import { useState } from "react";

const productsData = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$59",
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1516264664731-76b5d0b9119f?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$35",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1595044426077-d36d9236c968?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1619983081563-430f636a6a23?w=500&auto=format&fit=crop&q=60",
  },
];


export default function Products() {
  const [search, setSearch] = useState("");

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Search Bar */}
      <div className="max-w-3xl mx-auto p-6">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transform transition-all p-5 flex flex-col items-center text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-blue-600 font-bold mt-2 text-lg">{product.price}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
