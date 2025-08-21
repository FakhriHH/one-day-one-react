import { useState } from "react";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";
import SearchInput from "../components/SearchInput";
import Card11 from "../components/Card11";

function Day15CommentSearch() {
  const [comments, setComments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const editComment = (index, newText) => {
    const updated = [...comments];
    updated[index] = newText;
    setComments(updated);
  };

  const deleteComment = (index) => {
    const updated = comments.filter((_, i) => i !== index);
    setComments(updated);
  };

  // filter komentar berdasarkan search
  const filteredComments = comments.filter((comment) =>
    comment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <Card11>
        <h1 className="text-xl font-bold text-indigo-600 mb-4 text-center">
          Day 15: Pencarian Komentar
        </h1>

        {/* Tambah komentar */}
        <CommentInput onAdd={addComment} />

        {/* Input search */}
        <SearchInput searchTerm={searchTerm} onSearch={setSearchTerm} />

        {/* Tampilkan hasil */}
        {filteredComments.length > 0 ? (
          <CommentList
            comments={filteredComments}
            onEdit={editComment}
            onDelete={deleteComment}
          />
        ) : (
          <p className="text-gray-500">Tidak ada komentar ditemukan.</p>
        )}
      </Card11>
    </div>
  );
}

export default Day15CommentSearch;
