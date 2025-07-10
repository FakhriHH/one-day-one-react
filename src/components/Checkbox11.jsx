function Checkbox({ label, checked, onChange }) {
  return (
    <label className="inline-flex items-center gap-2 mb-4">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}

export default Checkbox;
