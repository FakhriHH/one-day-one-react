import { useState, useEffect } from "react";

function Day09LocalStorage() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
     const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        console.log("Data dari localStorage:", storedTasks);
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
        setIsLoaded(true);
    }, []);

    useEffect(() => {
    if (isLoaded) {
      console.log("Simpan ke localStorage:", tasks);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    }, [tasks, isLoaded]);

    const addTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks, task]);
        setTask("");
    };

    const deleteTask = (index) => {
        const updated = tasks.filter((_, i) => i !== index);
        setTasks(updated);
    };

    return(
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
                Day 9: useEffect & LocalStorage
            </h1>

            <div className="max-w-xl mx-auto bg-white shadow p-6 rounded-lg">
                <div className="flex gap-2 mb-4">
                    <input 
                        type="text" 
                        placeholder="Tambah task...."
                        className="flex-grow px-4 py-2 border rounded"
                        value={task}
                        onChange={(e) => setTask(e.target.value)} 
                    />
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700" onClick={addTask}>
                        Tambah
                    </button>
                </div>

                {tasks.length === 0 ? (
                    <p className="text-gray-500 text-center">Belum ada task.</p>
                ) : (
                    <ul className="space-y-2">
                        {tasks.map((t, index) => (
                            <li key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded shadow-sm">
                                <span>{t}</span>
                                <button onClick={() => deleteTask(index)} className="text-sm text-red-500 hover:underline">
                                    Hapus
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Day09LocalStorage;