import CommentItem from "./CommentItem";

function CommentList({ comments, onDelete, onEdit }) {
  if (comments.length === 0) {
    return <p className="text-gray-500">Belum ada komentar.</p>;
  }

  return (
     <ul className="space-y-2">
      {comments.map((comment, i) => (
        <CommentItem
          key={i}
          text={comment}
          onDelete={() => onDelete(i)}
          onEdit={(newText) => onEdit(i, newText)}
        />
      ))}
    </ul>
  );
}

export default CommentList;
