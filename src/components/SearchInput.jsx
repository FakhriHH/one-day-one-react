function SearchInput({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Cari komentar..."
      className="w-full px-4 py-2 border rounded mb-4"
    />
  );
}

export default SearchInput;
