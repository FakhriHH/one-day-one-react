import { useState } from 'react'; // 1. Import hook

function Counter() {
  const [count, setCount] = useState(0); // 2. Inisialisasi state count

  const handleClick = () => {
    setCount(count + 1); // 3. Fungsi untuk menaikkan angka
  };

  return (
    <div className="text-center mt-8">
      <p className="text-xl">Nilai saat ini: {count}</p> {/* 4. Menampilkan nilai */}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700"
        onClick={handleClick} // 5. Menangani klik tombol
      >
        Tambah
      </button>
    </div>
  );
}

export default Counter;
