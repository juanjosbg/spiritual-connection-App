import { useState } from "react";
import { supabase } from "./lib/supabaseClient";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      // ✅ 1️⃣ Crear usuario en Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name },
        },
      });

      if (error) throw error;

      setMessage("✅ Registro exitoso. Revisa tu correo para confirmar tu cuenta.");
      console.log("Usuario registrado:", data);

      // Limpia los campos
      setEmail("");
      setPassword("");
      setName("");
    } catch (err: any) {
      setMessage(`❌ Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-16 p-6 bg-white text-amber-500 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
        Crear cuenta
      </h2>

      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Correo</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="tu@email.com"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white font-medium py-2 rounded-lg hover:bg-indigo-700 transition disabled:bg-gray-400"
        >
          {loading ? "Registrando..." : "Registrarse"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 text-center ${
            message.startsWith("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
