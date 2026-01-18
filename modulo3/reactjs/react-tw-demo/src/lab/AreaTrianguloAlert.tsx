import React, { useState } from "react";

export default function LabTwAreaTriangulo() {
    const [base, setBase] = useState("");
    const [altura, setAltura] = useState("");

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const b = parseFloat(base);
        const h = parseFloat(altura);

        if (!isNaN(b) && !isNaN(h) && b > 0 && h > 0) {
            const area = (b * h) / 2;
            window.alert(`El área del triángulo es: ${area.toFixed(2)}`);
            setBase("");
            setAltura("");
        } else {
            window.alert("Por favor ingrese valores válidos para base y altura");
        }
    };

    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <div className="mx-auto max-w-3xl px-4 py-10">
                <h2 className="text-xl font-extrabold">LAB: Área del Triángulo</h2>

                <form onSubmit={submit} className="mt-5 max-w-xl space-y-3">
                    <label className="block text-sm font-semibold text-white/80">
                        Base
                    </label>

                    <input
                        className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-600/50"
                        type="number"
                        placeholder="Ingrese la base"
                        value={base}
                        onChange={(e) => setBase(e.target.value)}
                        required
                    />

                    <label className="block text-sm font-semibold text-white/80">
                        Altura
                    </label>

                    <input
                        className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-600/50"
                        type="number"
                        placeholder="Ingrese la altura"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        required
                    />

                    <button
                        className="h-11 rounded-xl bg-blue-600 px-5 font-semibold hover:bg-blue-500 transition"
                        type="submit"
                    >
                        Calcular área
                    </button>
                </form>
            </div>
        </main>
    );
}