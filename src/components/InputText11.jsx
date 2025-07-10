function InputText ({ label, value, onChange, placeholder, error }) {
    return (
        <div className="mb-4">
            <label className="block mb-1 font-semibold">{label}</label>
            <input 
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-4 py-2 border rounded"
             />
             {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}

export default InputText;