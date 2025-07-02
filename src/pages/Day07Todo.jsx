import { useState } from "react";

function Day07Todo(){
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim() === "") return;

        setTasks([...tasks, task]);
        setTask("");
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
                Day 7: To Do List
            </h1>

            <div className="max-2-xl mx-auto bg-white shadow p-6 rounded-lg">
                <div className="flex gap-2 mb-4">
                    <input 
                        type="text" 
                        placeholder="Masukan teks...."
                        className="flex=grow px-4 py-2 border rounded"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700" onClick={addTask}>
                        Tambah
                    </button>
                </div>

                {tasks.length === 0 ? (
                    <p className="text-gray-500 text-center">Belum ada task</p>
                ) : (
                    <ul className="space-y-2">
                        {tasks.map((t, index) => (
                            <li key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded shadow-sm">
                                <span>{t}</span>
                                <button onClick={() => deleteTask(index)} className="text-sm text-red-500 hover:underline">Hapus</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Day07Todo;