import { useState } from "react";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";
import Card11 from "../components/Card11";
import ConfirmModal from "../components/ConfirmModal";

function Day14CommentCrud() {
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const confirmDelete = (index) => {
    setDeleteIndex(index);
    setIsModalOpen(true);
  };

  const deleteComment = () => {
    const updated = comments.filter((_, i) => i !== deleteIndex);
    setComments(updated);
    setIsModalOpen(false);
    setDeleteIndex(null);
  };

  const editComment = (index, newText) => {
    const updated = [...comments];
    updated[index] = newText;
    setComments(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <Card11>
        <h1 className="text-xl font-bold text-indigo-600 mb-4 text-center">
          Day 14: Konfirmasi Hapus Komentar
        </h1>

        <CommentInput onAdd={addComment} />
        <CommentList
          comments={comments}
          onDelete={confirmDelete}
          onEdit={editComment}
        />
      </Card11>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={deleteComment}
      />
    </div>
  );
}

export default Day14CommentCrud;
