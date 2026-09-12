/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CheckCircle2, Loader2, Mail } from 'lucide-react';

export default function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const responseText = await response.text();
      let result: { error?: string } = {};

      try {
        result = JSON.parse(responseText);
      } catch {
        throw new Error('El servidor de suscripciones no está conectado.');
      }

      if (!response.ok) throw new Error(result.error || 'No se pudo completar la suscripción.');

      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'No se pudo completar la suscripción.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center py-6 px-4 sm:py-12 sm:px-6 lg:px-8 font-sans text-[#111827] selection:bg-gray-200">
      
      {/* Contenedor Principal (Tarjeta) */}
      <main className="max-w-2xl w-full bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-5 sm:p-10 lg:p-12">
        
        {/* Etiqueta Superior */}
        <span className="inline-block text-xs sm:text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4 sm:mb-6">
          La newsletter diaria de Arturo Girbes
        </span>

        {/* Titular */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight mb-5 sm:mb-6">
          Hay cosas que empiezas a ver cuando llevas un tiempo pensando en dinero.
        </h1>

        {/* Cuerpo del Texto */}
        <div className="text-[15px] sm:text-base lg:text-lg text-gray-600 space-y-3.5 sm:space-y-4.5 leading-relaxed">
          <p>Una noticia que cambia cómo ves una empresa.</p>
          <p>Una acción que merece una segunda mirada.</p>
          <p>Una idea que te hace replantearte algo.</p>
          <p>O una reflexión que se te queda dando vueltas.</p>
          <p><strong className="font-semibold text-gray-900">De eso va esta newsletter.</strong></p>
          <p>Sin sermones. Sin correos interminables.</p>
          <p><strong className="font-semibold text-gray-900">Historias, ideas y descubrimientos breves.</strong> Menos de 2 minutos, mientras te tomas el café.</p>
          <p>Si te sirve, te quedas con la idea. Si no, borras el correo y a otra cosa.</p>
          <p><strong className="font-semibold text-gray-900">Deja tu email. Mañana empezamos.</strong></p>
        </div>

        {/* Zona del Formulario */}
        <div className="mt-7 sm:mt-9">
          {status === 'success' ? (
            <div className="flex items-center gap-3 bg-green-50 text-green-800 p-4 rounded-xl border border-green-200 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-green-600" />
              <p className="text-sm sm:text-base font-medium">
                ¡Casi listo! Revisa tu bandeja de entrada para confirmar tu suscripción.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico..."
                  disabled={status === 'loading'}
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-300 bg-gray-50 text-[15px] sm:text-base text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all shadow-xs disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto h-12 px-6 rounded-xl bg-[#111827] text-white font-medium hover:bg-black active:scale-[0.98] transition-all flex items-center justify-center shrink-0 shadow-xs text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  'Empezar a recibirla gratis'
                )}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="text-sm text-red-600 mt-3" role="alert">
              {errorMessage}
            </p>
          )}

          {/* Micro-copy inferior */}
          <p className="text-xs sm:text-sm text-gray-400 mt-3.5 text-center sm:text-left">
            Gratis. Sin spam. Te das de baja con un solo clic cuando quieras.
          </p>
        </div>
      </main>
      
    </div>
  );
}
