function Card ({ title, content }) {
    return (
        <div className="bg-white shadow p-4 rounded-lg border border-gray-200 max-w-md w-full">
            <h2 className="text-2xl font-bold text-blue-600">{title}</h2>
            <p className="mt-2 text-gray-700">{content}</p>
        </div>
    )
}

export default Card;