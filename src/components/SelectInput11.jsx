function SelectInput({ label, options, value, onChange, error }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-semibold">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded"
      >
        <option value="">-- Pilih --</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default SelectInput;
