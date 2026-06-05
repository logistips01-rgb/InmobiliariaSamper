"use client";

import { useState } from "react";

interface ContactFormProps {
  propiedadId?: number;
  propiedadTitulo?: string;
}

export default function ContactForm({ propiedadId, propiedadTitulo }: ContactFormProps) {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: propiedadTitulo
      ? `Me interesa la propiedad: ${propiedadTitulo}. `
      : "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, propiedadId }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al enviar el mensaje");
      }

      setSuccess(true);
      setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-semibold text-green-800 mb-1">¡Mensaje enviado!</h3>
        <p className="text-green-700 text-sm">
          Hemos recibido tu consulta. Te contactaremos en breve.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-4 text-sm text-green-600 underline hover:no-underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="nombre" className="label">Nombre completo *</label>
        <input
          id="nombre"
          type="text"
          required
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          className="input-field"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="email" className="label">Correo electrónico *</label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input-field"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label htmlFor="telefono" className="label">Teléfono</label>
        <input
          id="telefono"
          type="tel"
          value={form.telefono}
          onChange={(e) => setForm({ ...form, telefono: e.target.value })}
          className="input-field"
          placeholder="600 000 000"
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="label">Mensaje *</label>
        <textarea
          id="mensaje"
          required
          rows={4}
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          className="input-field resize-none"
          placeholder="¿En qué podemos ayudarte?"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-secondary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Enviando..." : "Enviar mensaje"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Al enviar, aceptas que procesemos tus datos para atender tu consulta.
      </p>
    </form>
  );
}
