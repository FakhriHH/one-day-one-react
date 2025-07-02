import Card from "../components/Card";

function Day05Reusable() {
    const data = [
        { title: "React", content: "Library frontend modern dari Meta" },
        { title: "Tailwind CSS", content: "Utility-first CSS framework " },
        { title: "Vite", content: "Build tool super cepat untuk proyek modern." }
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">Day 5: Props & Komponen Reusable</h1>

            <div className="flex flex-col items-center gap-4">
                {data.map((item, index) => (
                    <Card key={index} title={item.title} content={item.content} />
                ))}
            </div>
        </div>
    );
}

export default Day05Reusable;