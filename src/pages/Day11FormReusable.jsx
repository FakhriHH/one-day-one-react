import { useState } from "react";
import InputText from "../components/InputText11";
import Card11 from "../components/Card11";
import Button from "../components/Button11";
import Checkbox from "../components/Checkbox11";
import SelectInput from "../components/SelectInput11";

function Day11FormResuable() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);
    const [gender, setGender] = useState("");
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

            // Validasi nama
            if (name.trim() === "") {
                newErrors.name = "Nama wajib diisi";
            }

            // Validasi email
            if (email.trim() === "") {
              newErrors.email = "Email wajib diisi";
            } else {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(email)) {
                newErrors.email = "Format email tidak valid";
              }
            }

            // Validasi gender
            if (!gender) {
              newErrors.gender = "Jenis kelamin wajib dipilih";
            }

            // Validasi checkbox
            if (!agree) {
              newErrors.agree = "Kamu harus menyetujui persyaratan.";
            }

            // Jika ada error, set error state
            if (Object.keys(newErrors).length > 0) {
              setErrors(newErrors);
              setSubmitted(false);
              return;
            }

        // Jika lolos semua validasi
        setErrors({});
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
            <Card11>
                <h1 className="text-xl font-bold text-indigo-600 mb-4 text-center">
                    Day 11: Komponen Reusable
                </h1>

                <form onSubmit={handleSubmit}>
                    <InputText
                        label="Nama"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Masukkan nama"
                        error={errors.name}
                    />

                    <InputText
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Masukkan email"
                        error={errors.email}
                    />

                    <SelectInput
                        label="Jenis Kelamin"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        options={["Laki-laki", "Perempuan"]}
                        error={errors.gender}
                    />

                    <Checkbox
                        label="Saya setuju dengan syarat dan ketentuan"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                    />

                    {errors.agree && (
                        <p className="text-red-500 text-sm mt-1">{errors.agree}</p>
                    )}

                    {submitted && (
                        <p className="text-green-600 text-sm mb-2">
                            Data berhasil dikirim!
                        </p>
                    )}

                    <Button type="submit" className="w-full">
                        Kirim
                    </Button>
                </form>
            </Card11>
        </div>
    );
}

export default Day11FormResuable;