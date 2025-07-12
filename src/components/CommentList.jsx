function CommentList({ comments }) {
  if (comments.length === 0) {
    return <p className="text-gray-500">Belum ada komentar.</p>;
  }

  return (
    <ul className="list-disc pl-5 space-y-1">
      {comments.map((comment, i) => (
        <li key={i}>{comment}</li>
      ))}
    </ul>
  );
}

export default CommentList;
