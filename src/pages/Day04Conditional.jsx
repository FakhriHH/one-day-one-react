import { useState } from "react";

function Day04Conditional() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fruits, setFruits] = useState(["Apel", "Jeruk", "Mangga"]);

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-center">
      <h1 className="text-2xl font-bold text-indigo-600 mb-4">Day 4: Conditional & List Rendering</h1>

      {/* Conditional Rendering */}
      <div className="mb-6">
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>

        <p className="mt-4 text-lg">
          {isLoggedIn ? "Selamat datang kembali!" : "Silakan login terlebih dahulu"}
        </p>
      </div>

      {/* List Rendering */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Daftar Buah:</h2>
        {fruits.length > 0 ? (
          <ul className="list-disc list-inside text-left mx-auto max-w-md">
            {fruits.map((fruit, index) => (
              <li key={index} className="text-gray-700">{fruit}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Tidak ada buah saat ini.</p>
        )}
      </div>
    </div>
  );
}

export default Day04Conditional;
