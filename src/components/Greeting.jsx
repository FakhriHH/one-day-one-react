function Greeting ({ name }) {
    return (
        <p className="text-lg text-gray-700 mt-4">
            Selamat datang, <span className="font-semibold">{name}</span>
        </p>
    );
}

export default Greeting;