function Day06Tailwind() {
    return(
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-700 text-center mb-6">
                Day 6 : Tailwind Utility & Responsive Design
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
                        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                            Card #{item}
                        </h2>
                        <p className="text-gray-600">
                            Ini adalah contoh card responsif dengan Tailwind
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Day06Tailwind;