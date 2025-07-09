import { useState } from "react";

function Day10Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSubmitted(false);

        if(name.trim() === "" || email.trim() === "") {
            setError("Nama dan Email wajib diisi!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Format email tidak valid.");
            return;
        }

        setSubmitted(true);
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded shadow max-w-md w-full">
                <h2 className="text-xl font-bold text-center mb-4 text-indigo-600">
                    Day 10: Form Handling & Validasi
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-semibold">Name: </label>
                        <input type="text" className="w-full border px-4 py-2 rounded" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukan Nama" />
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">Email: </label>
                        <input type="text" className="w-full border px-4 py-2 rounded" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukan Email" />
                    </div>

                    {error && <p className="text-red-500">{error}</p>}
                    {submitted && <p className="text-green-600">Data Berhasil Dikirim</p>}

                    <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                        Kirim
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Day10Form;