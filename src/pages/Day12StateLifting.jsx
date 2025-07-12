import { useState } from "react";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";
import Card11 from "../components/Card11";

function Day12StateLifting() {
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <Card11>
        <h1 className="text-xl font-bold text-indigo-600 mb-4 text-center">
          Day 12: State Lifting
        </h1>

        <CommentInput onAdd={addComment} />
        <CommentList comments={comments} />
      </Card11>
    </div>
  );
}

export default Day12StateLifting;
