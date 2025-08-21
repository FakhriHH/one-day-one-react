import { useState } from "react";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";
import Card11 from "../components/Card11";

function Day13CommentCrud() {
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const deleteComment = (index) => {
    const updated = comments.filter((_, i) => i !== index);
    setComments(updated);
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
            Day 13: Edit & Delete Komentar
        </h1>

        <CommentInput onAdd={addComment} />
        <CommentList
          comments={comments}
          onDelete={deleteComment}
          onEdit={editComment}
        />
      </Card11>
    </div>
  );
}

export default Day13CommentCrud;
