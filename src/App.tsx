/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CheckCircle2, Loader2, Mail } from 'lucide-react';

export default function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Cambiamos el estado a loading para simular el envío
    setStatus('loading');

    // Aquí iría la integración real (ej. MailerLite endpoint)
    // Simulamos un retraso de red de 1.5s
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
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
          Un correo corto cada mañana.<br className="hidden sm:block" /> Una idea práctica antes de que empiece tu día.
        </h1>

        {/* Cuerpo del Texto */}
        <div className="text-[15px] sm:text-base lg:text-lg text-gray-600 space-y-3.5 sm:space-y-4.5 leading-relaxed">
          <p>Hola, soy Arturo.</p>
          <p>
            Escribo sobre <strong className="font-semibold text-gray-900">inversión, bolsa y psicología financiera</strong> desde la práctica real. Analizo negocios, experimento con estrategias y comparto las lecciones que me deja equivocarme.
            También alguna reflexión.
          </p>
          <p>
            Nada de un sermón ni correos interminables.
          </p>
          <p>
            Son <strong className="font-semibold text-gray-900">historias breves y directas</strong>. Se leen en <strong className="font-semibold text-gray-900">menos de 2 minutos</strong> mientras te tomas el café.
          </p>
          <p>
            Si te sirve lo que lees, aplicas la idea. Si no, borras el correo y a otra cosa.
          </p>
          <p className="pt-1">
            Escribe tu email abajo y mañana a primera hora tienes la primera edición en tu bandeja de entrada.
          </p>
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

          {/* Micro-copy inferior */}
          <p className="text-xs sm:text-sm text-gray-400 mt-3.5 text-center sm:text-left">
            Gratis. Sin spam. Te das de baja con un solo clic cuando quieras.
          </p>
        </div>
      </main>
      
    </div>
  );
}
