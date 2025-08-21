import { useState } from "react";

function CommentItem({ text, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

    const handleSave = () => {
        onEdit(editedText);
        setIsEditing(false);
    };

    return (
        <li className="flex justify-between items-center bg-gray-100 p-2 rounded">
            {isEditing ? (
                <input
                    type="text"
                    className="flex-grow px-2 py-1 mr-2 border rounded"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
        />
            ) : (
                <span className="flex-grow">{text}</span>
            )}

            <div className="flex gap-2">
                {isEditing ? (
                    <button
                        className="text-green-600 text-sm hover:underline"
                        onClick={handleSave}
                    >
                        Simpan
                    </button>
                ) : (
                    <button
                        className="text-blue-600 text-sm hover:underline"
                        onClick={() => setIsEditing(true)}
                    >
                        Edit
                    </button>
                )}

                <button
                    className="text-red-500 text-sm hover:underline"
                    onClick={onDelete}
                >
                    Hapus
                </button>
            </div>
        </li>
    );
}

export default CommentItem;