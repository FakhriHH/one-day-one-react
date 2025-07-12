import { useState } from "react";

function CommentInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tulis komentar..."
        className="w-full px-4 py-2 border rounded"
      />
      <button
        onClick={handleAdd}
        className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Tambah
      </button>
    </div>
  );
}

export default CommentInput;
 