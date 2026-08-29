import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldCheck, ChevronRight, Check } from 'lucide-react';

const CheckItem = ({ children }: { children: React.ReactNode }) => {
  const [checked, setChecked] = useState(false);
  return (
    <label className="flex items-start space-x-4 py-2 cursor-pointer group">
      <div className="relative flex items-center justify-center mt-1.5 flex-shrink-0">
        <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${checked ? 'bg-slate-900 border-slate-900' : 'border-slate-400 bg-white group-hover:border-slate-600'}`}>
           {checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
        </div>
      </div>
      <span className={`text-lg font-serif leading-relaxed transition-colors ${checked ? 'text-slate-400' : 'text-slate-800'}`}>
        {children}
      </span>
    </label>
  );
};

export default function LeadMagnetArticle() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && experience) {
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    }
  };

  if (!isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 sm:p-8 font-sans">
        <div className="w-full max-w-xl bg-white rounded-md shadow-xl overflow-hidden border border-slate-200">
          <div className="p-8 sm:p-12 text-center">
            <Lock className="w-6 h-6 text-slate-800 mx-auto mb-6" strokeWidth={2.5} />
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight mb-4 leading-tight">
              El Framework Completo de Gestión de Cartera en Small & Mid-Caps de Alto Crecimiento
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-md mx-auto leading-relaxed">
              Accede a la guía detallada de 8 pasos, la estrategia de asignación de capital por tramos y la checklist de decisión antes de operar.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-800 mb-1.5">Nombre</label>
                <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded border border-slate-300 focus:ring-1 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all" placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-1.5">Email corporativo o principal</label>
                <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded border border-slate-300 focus:ring-1 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all" placeholder="tu@email.com" />
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-semibold text-slate-800 mb-1.5">Experiencia invirtiendo</label>
                <div className="relative">
                  <select id="experience" required value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full px-4 py-3 rounded border border-slate-300 focus:ring-1 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all bg-white appearance-none text-slate-800">
                    <option value="" disabled>Selecciona tu nivel...</option>
                    <option value="Principiante">Principiante</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                  </select>
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none rotate-90" />
                </div>
              </div>
              <button type="submit" className="w-full flex items-center justify-center space-x-2 bg-slate-900 hover:bg-black text-white px-6 py-4 rounded font-semibold text-base transition-all mt-8">
                <span>Desbloquear artículo completo y framework</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-center space-x-2 mt-6 text-xs text-slate-500 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Acceso instantáneo. Sin spam. Tus datos están seguros.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 font-serif pb-32">
      <div className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs sm:text-sm font-sans py-2 text-center tracking-wide">
        Acceso desbloqueado con éxito.
      </div>

      <main className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-20">
        <article>
          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-8">
              El Framework Completo de Gestión de Cartera en Small & Mid-Caps de Alto Crecimiento
            </h1>
            <div className="flex items-center space-x-4 text-sm text-slate-500 font-sans border-b border-slate-200 pb-8 uppercase tracking-wider">
              <span>Estrategia Avanzada</span>
              <span>•</span>
              <span>12 min de lectura</span>
            </div>
          </header>

          <div className="text-lg text-slate-800 leading-relaxed space-y-6">
            <p>
              Como creo que mucha gente se siente perdida o tiene dudas cuando empieza en el mundo de la inversión, he querido poner por escrito cómo gestiono una cartera de empresas de pequeña y mediana capitalización (small/mid caps) de alto crecimiento, por si a alguien le puede servir de referencia.
            </p>
            <p>
              Esto es el resultado de un proceso continuo de adaptación y cambio de estrategia: ir cogiendo conceptos de un sitio y de otro, probar qué encajaba y pulir errores hasta consolidar un sistema propio que creo que realmente me funciona y en el que confío de cara al futuro.
            </p>
            <p>
              Suele pensarse que la clave para lograr rentabilidades extraordinarias radica exclusivamente en dar con la empresa adecuada: identificar a tiempo al nuevo gigante del software, la compañía que dominará los chips de última generación o la biotecnológica con la patente definitiva.
            </p>
            <p className="font-bold text-slate-900">
              Ese enfoque es incompleto.
            </p>
            <p>
              En el universo de las empresas de pequeña y mediana capitalización con fuerte expansión, la selección de valores representa solo la mitad del trabajo. El otro 50%, a menudo el más crítico, es la gestión del tamaño de las posiciones.
            </p>
            <p>
              Los activos con mayor potencial son también los que entrañan un mayor riesgo estructural. Un valor que se multiplica por varios veces en tu cartera puede pasar a concentrar casi la mitad de tu capital sin que te des cuenta. Una tesis de inversión que era una ganga cuando la empresa cotizaba a un tamaño modesto puede perder todo su atractivo al alcanzar valoraciones exigentes. Del mismo modo, una promesa de crecimiento exponencial puede degenerar con el tiempo en una trampa de valor sin facturación real, emisiones continuas de acciones y pérdidas descontroladas.
            </p>
            
            <p>
              Cuando el objetivo es maximizar el retorno del capital, la pregunta correcta jamás debe ser: <strong>“¿Tiene calidad este negocio?”</strong>
            </p>

            <blockquote className="border-l-4 border-slate-900 pl-6 py-2 my-10 bg-slate-50">
              <span className="italic text-slate-700">La incógnita que realmente debes despejar es: “Con la valoración actual, el ritmo de ejecución de la directiva y la ponderación que tiene hoy en mi cartera, ¿la rentabilidad esperada justifica el riesgo que asumo?”</span>
            </blockquote>
            
            <p>
              A partir de esta premisa se articula todo el sistema.
            </p>
          </div>

          <nav className="bg-slate-50 border border-slate-200 p-6 sm:p-8 my-16 font-sans text-sm">
            <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Índice de contenidos</h3>
            <ul className="space-y-4 list-none pl-0">
               {[
                 { id: 'sec-1', text: '1. El principio fundamental: Comprar cuando la tesis mejora más rápido que la cotización' },
                 { id: 'sec-2', text: '2. Que una acción suba un 100%, 300% o 500% cambia el nivel de exigencia' },
                 { id: 'sec-3', text: '3. Cómo entrar en small-caps de crecimiento tras una fuerte subida' },
                 { id: 'sec-4', text: '4. Qué convierte a una small-cap en una oportunidad de compra' },
                 { id: 'sec-5', text: '5. Cuándo recortar posición: El arte de no recortar tus mejores valores antes de tiempo' },
                 { id: 'sec-6', text: '6. Cuándo vender por completo' },
                 { id: 'sec-7', text: '7. Correcciones: Cuándo promediar al alza/abajo vs. cuándo cortar pérdidas' },
                 { id: 'sec-8', text: '8. Lista de comprobación práctica (Comprar / Recortar / Vender)' },
                 { id: 'sec-9', text: '9. La mentalidad adecuada' },
                 { id: 'sec-10', text: '10. La regla final' }
               ].map((item) => (
                 <li key={item.id}>
                   <a href={`#${item.id}`} className="text-slate-600 hover:text-slate-900 underline decoration-slate-300 underline-offset-4 font-medium transition-colors">
                     {item.text}
                   </a>
                 </li>
               ))}
            </ul>
          </nav>

          <div className="text-lg text-slate-800 leading-relaxed space-y-6">
            
            <h2 id="sec-1" className="text-2xl sm:text-3xl font-bold text-slate-900 mt-20 mb-8 scroll-mt-12">
              1. El principio fundamental: Comprar cuando la tesis mejora más rápido que la cotización
            </h2>
            <p>
              En la inversión en small-caps de alto crecimiento, que el precio suba no es una razón automática para mantenerse al margen. De hecho, muchos de los valores que acaban multiplicándose por diez parecen caros al principio. Las grandes empresas suelen pasar de "demasiado arriesgadas" a "demasiado caras" sin parecer nunca baratas bajo métricas tradicionales.
            </p>
            <p>
              Pero existe una diferencia crucial. Que una cotización suba puede responder a dos motivos:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-6">
              <li className="pl-2">A. El mercado se está adaptando a la mejora de los fundamentales.</li>
              <li className="pl-2">B. La cotización se ha adelantado por completo a la tesis.</li>
            </ul>
            
            <blockquote className="border-l-4 border-slate-900 pl-6 py-2 my-10 bg-slate-50">
              <strong className="block text-slate-900 mb-2 font-sans text-xs uppercase tracking-wider">La regla es sencilla:</strong>
              <span className="italic text-slate-700">Aumenta exposición cuando la tesis mejore a mayor velocidad que el precio de la acción. Evita comprar cuando la cotización avance más rápido que los fundamentales.</span>
            </blockquote>
            <p>Esta sola premisa filtra la mayoría de los errores en el mercado.</p>


            <h2 id="sec-2" className="text-2xl sm:text-3xl font-bold text-slate-900 mt-20 mb-8 scroll-mt-12">
              2. Que una acción suba un 100%, 300% o 500% cambia el nivel de exigencia
            </h2>
            <p>
              Un valor que ha experimentado una revalorización fuerte no queda descartado automáticamente, pero exige un listón de prueba mucho más alto. Cuando una empresa pasa desapercibida, no tiene cobertura de analistas y cotiza a múltiplos derribados, se puede asumir cierto grado de incertidumbre. Si esa misma empresa ya ha triplicado su valor, la evidencia requerida debe ser superior.
            </p>
            <p className="font-bold text-slate-900 mt-8 mb-4">A mayor subida acumulada, más exigente debes ser con los siguientes puntos:</p>
            
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li className="pl-2">Aceleración real de la facturación.</li>
              <li className="pl-2">Cartera de pedidos firme y ejecutable.</li>
              <li className="pl-2">Validación manifiesta por parte de los clientes.</li>
              <li className="pl-2">Expansión de márgenes operativos.</li>
              <li className="pl-2">Reducción del riesgo de financiación.</li>
              <li className="pl-2">Balance saneado.</li>
              <li className="pl-2">Catalizadores claros a corto y medio plazo.</li>
              <li className="pl-2">Credibilidad del equipo gestor.</li>
              <li className="pl-2">Pruebas de que el mercado potencial (TAM) se está expandiendo.</li>
              <li className="pl-2">Evidencia de que la compañía se acerca al umbral de rentabilidad o a la escala operativa.</li>
            </ul>
            
            <p>
              Un gran movimiento alcista no es una señal de venta por sí solo, pero sí una alerta para preguntarse: <strong>¿ha mejorado el negocio lo suficiente como para justificar este nivel de precio?</strong>
            </p>
            <p>
              Si la acción ha subido un 200% pero los fundamentales solo han mejorado un 20%, la mayor parte del movimiento responde a una expansión de múltiplos. No significa que vaya a desplomarse, pero implica que los rendimientos futuros dependen ahora de hipótesis mucho más exigentes.
            </p>
            <p>
              Si la cotización ha subido un 100% pero la cartera de pedidos se ha triplicado, el balance se ha reforzado y el riesgo comercial ha caído drásticamente, es posible que el valor todavía tenga recorrido.
            </p>

            <blockquote className="border-l-4 border-slate-900 pl-6 py-2 my-10 bg-slate-50">
              <span className="italic text-slate-700">La clave no es el porcentaje de subida, sino la relación entre la evolución del precio y la reducción del riesgo operativo.</span>
            </blockquote>


            <h2 id="sec-3" className="text-2xl sm:text-3xl font-bold text-slate-900 mt-20 mb-8 scroll-mt-12">
              3. Cómo entrar en small-caps de crecimiento tras una fuerte subida
            </h2>
            <p>
              El error más común al operar con small-caps es construir una posición completa en pleno movimiento vertical. La acción sube un 30% en un día, un 80% en una semana o un 150% en un mes. Todo el mundo habla de ella, la narrativa parece obvia y aparece el miedo a quedarse fuera (FOMO).
            </p>
            <p className="font-bold text-slate-900">
              Ese es precisamente el momento en que se requiere mayor disciplina.
            </p>
            <p>
              Para empresas de pequeño tamaño y alto crecimiento, prefiero una construcción gradual de la posición:
            </p>
            
            <ul className="list-disc pl-6 space-y-4 my-8">
              <li className="pl-2"><strong>Posición inicial:</strong> Si la tesis es sólida pero el valor ya ha corrido, se entra con una posición pequeña. Esto evita el impacto psicológico de estar completamente fuera mientras se reserva liquidez para la volatilidad.</li>
              <li className="pl-2"><strong>Segundo tramo:</strong> Se añade si la acción corrige entre un 15% y un 30% sin que la tesis sufra ningún deterioro.</li>
              <li className="pl-2"><strong>Tercer tramo:</strong> Se incrementa tras confirmaciones fundamentales: resultados trimestrales, contratos relevantes, conversión de pedidos, revisión al alza de guías (guidance), mejora de márgenes o hitos regulatorios.</li>
              <li className="pl-2"><strong>Tramo final:</strong> Solo se completa la posición si la empresa mantiene la ejecución y la valoración sigue ofreciendo margen de seguridad. </li>
            </ul>

            <p>El objetivo no es acertar el suelo, sino evitar hacer la mayor compra en el momento de mayor carga emocional.</p>
            
            <h3 className="text-xl font-bold text-slate-900 mt-12 mb-6">Guía de referencia</h3>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li className="pl-2">Si la empresa está en fase inicial y no ha sido descubierta: puedes iniciar con un <strong>50%-70%</strong> de la posición objetivo.</li>
              <li className="pl-2">Si la acción ya se ha duplicado: inicia con un <strong>25%-40%</strong>.</li>
              <li className="pl-2">Si se ha triplicado o más: inicia con un <strong>10%-25%</strong>.</li>
              <li className="pl-2">Si la empresa no genera ingresos y ya cotiza a valoraciones multimillonarias: <strong>extrema la precaución</strong>.</li>
            </ul>
            <p className="italic text-slate-700">
              Las posiciones reducidas no demuestran falta de convicción. En la inversión de alto crecimiento, empezar con poco suele ser el precio de la supervivencia.
            </p>


            <h2 id="sec-4" className="text-2xl sm:text-3xl font-bold text-slate-900 mt-20 mb-8 scroll-mt-12">
              4. Qué convierte a una small-cap en una oportunidad de compra
            </h2>
            <p>
              Para construir una cartera de alto crecimiento, busco empresas donde el potencial no dependa de escenarios irreales. La small-cap ideal suele reunir varias de estas características:
            </p>
            
            <ul className="list-disc pl-6 space-y-5 my-8">
              <li className="pl-2">
                <strong>Un mercado amplio y en expansión:</strong> La empresa debe estar expuesta a una tendencia estructural, no a una moda pasajera (infraestructura de IA, redes eléctricas, interconexión óptica, modernización de defensa, robótica, almacenamiento energético o energía nuclear). Sin embargo, la temática no lo es todo: un mal negocio en un gran sector sigue siendo una mala inversión.
              </li>
              <li className="pl-2">
                <strong>Posición de cuello de botella:</strong> Las mejores oportunidades rara vez están en los ensambladores finales, sino en los proveedores clave. No se trata de "IA" en general, sino de equipos de potencia, refrigeración, conectores, memoria, componentes ópticos, infraestructura crítica de datos, sensores o equipos de ensayo. Los cuellos de botella otorgan poder de fijación de precios (pricing power).
              </li>
              <li className="pl-2">
                <strong>Tracción real de clientes:</strong> La empresa no debería tener que convencer al mercado de que existe demanda. Los clientes deben demostrarlo a través de pedidos firmes, proyectos piloto, contratos recurrentes o alianzas estratégicas con impacto económico.
              </li>
              <li className="pl-2">
                <strong>Apalancamiento operativo:</strong> El crecimiento de las ventas debe traducirse con el tiempo en un crecimiento más rápido del EBITDA o del flujo de caja libre. Si los ingresos se duplican pero las pérdidas también, la tesis falla.
              </li>
              <li className="pl-2">
                <strong>Un balance que permita ejecutar los plazos:</strong> Las empresas pequeñas suelen necesitar capital, pero la compañía no debe verse abocada a ampliaciones dilutivas continuas solo para mantenerse a flote. La dilución positiva financia crecimiento; la dilución negativa financia la supervivencia.
              </li>
              <li className="pl-2">
                <strong>Un equipo directivo que promete poco y entrega mucho:</strong> En empresas pequeñas, la calidad de la gestión es determinante. Una directiva demasiado promocional puede arruinar una buena tecnología. Un equipo riguroso puede generar valor incluso superando retrasos. Prefiero directivas que aporten métricas, plazos y rendición de cuentas en lugar de vagos adjetivos.
              </li>
            </ul>


            <h2 id="sec-5" className="text-2xl sm:text-3xl font-bold text-slate-900 mt-20 mb-8 scroll-mt-12">
              5. Cuándo recortar posición: El arte de no recortar tus mejores valores antes de tiempo
            </h2>
            <p>Uno de los mayores errores en la inversión en crecimiento es vender las empresas ganadoras demasiado pronto.</p>
            <p>
              Si buscas multiplicar tu cartera, necesitas dejar correr a las ganadoras. Una acción que se duplica no está cara por definición; una que se triplica no ha terminado necesariamente su ciclo. Muchas de las mejores empresas del mercado parecen "sobreextendidas" durante años.
            </p>
            <p className="font-bold text-slate-900">
              Sin embargo, dejar correr a las ganadoras no implica permitir que un solo valor acapare toda la cartera.
            </p>
            <p>Existen tres motivos principales para reducir una posición:</p>

            <h3 className="text-xl font-bold text-slate-900 mt-12 mb-4">Motivo 1: El peso de la posición se vuelve excesivo</h3>
            <p>Es la razón más objetiva para recortar.</p>
            <p>Si una posición pasa del 5% al 15% de tu cartera, es una excelente noticia. Si llega al 30%-40%, la cartera pierde su diversificación y pasa a depender de un único activo. Para una cartera concentrada de small-caps, este es un marco razonable:</p>
            
            <ul className="list-disc pl-6 space-y-2 my-6">
              <li className="pl-2"><strong>0-10%:</strong> Posición estándar.</li>
              <li className="pl-2"><strong>10-20%:</strong> Alta convicción, seguimiento estrecho.</li>
              <li className="pl-2"><strong>20-30%:</strong> Reservado solo para casos excepcionales.</li>
              <li className="pl-2"><strong>Más del 30%:</strong> Zona clara de toma de beneficios parciales.</li>
              <li className="pl-2"><strong>Más del 40%:</strong> Recorte prioritario salvo justificación extraordinaria.</li>
            </ul>
            <p>
              Esto no se hace porque la empresa haya empeorado, sino porque la concentración altera el perfil de riesgo global. Una posición racional al 8% puede ser una imprudencia al 38%. Al mercado le es indiferente cuál fue tu precio medio de compra; el riesgo de tu cartera se calcula sobre la valoración actual.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-12 mb-4">Motivo 2: La cotización supera a la ejecución operativa</h3>
            <p>
              Esto ocurre con frecuencia en valores de pequeña capitalización. La narrativa capta la atención de los inversores antes de dominar el mercado real. La acción se dispara y la valoración empieza a descontar varios años de ejecución impecable.
            </p>
            <p>Esto es especialmente peligroso cuando:</p>
            <ul className="list-disc pl-6 space-y-2 my-6">
              <li className="pl-2">La empresa aún no genera ingresos significativos.</li>
              <li className="pl-2">La facturación es insignificante en comparación con la capitalización bursátil.</li>
              <li className="pl-2">Los acuerdos anunciados no son vinculantes.</li>
              <li className="pl-2">El consumo de caja (cash burn) sigue siendo elevado.</li>
              <li className="pl-2">Persiste el riesgo de dilución.</li>
              <li className="pl-2">Los márgenes brutos no se han probado a escala.</li>
            </ul>
            <p>
              En estas circunstancias, reducir entre un 10% y un 30% la posición es una decisión prudente. No significa dar por muerta la tesis, sino reconocer que el precio actual descuenta una certeza excesiva.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-12 mb-4">Motivo 3: Existe un mejor uso para el capital dentro de la cartera</h3>
            <p>
              Cada posición debe competir por el capital disponible. Un activo puede seguir siendo atractivo, pero ser menos eficiente en términos de riesgo/beneficio que otra oportunidad de la cartera.
            </p>
            <p>
              Si un valor alcanza el 35% del patrimonio tras una gran racha mientras otra tesis de alta convicción sigue en el 4%, recortar el exceso del valor ganador para reasignar capital al valor infraponderado puede optimizar el conjunto de la cartera.
            </p>

            <blockquote className="border-l-4 border-slate-900 pl-6 py-2 my-10 bg-slate-50">
              <p className="m-0 mb-2 italic text-slate-700">La pregunta correcta no es: "¿Puede este valor seguir subiendo?"</p>
              <p className="m-0 font-bold text-slate-900">La pregunta clave es: "¿Sigue siendo esta la mejor alternativa ajustada por riesgo para mi siguiente euro?"</p>
            </blockquote>


            <h2 id="sec-6" className="text-2xl sm:text-3xl font-bold text-slate-900 mt-20 mb-8 scroll-mt-12">
              6. Cuándo vender por completo
            </h2>
            <p>Recortar es gestionar el riesgo; vender por completo es asumir el fracaso de la tesis.</p>
            <p>
              No conviene vender una small-cap de alto crecimiento únicamente por volatilidad. La volatilidad es el precio de entrada. Caídas del 30% al 50% son habituales en este segmento.
            </p>
            <p className="font-bold text-slate-900">
              Sin embargo, la venta debe ser total cuando la tesis original se rompe:
            </p>

            <ul className="list-disc pl-6 space-y-4 my-8">
              <li className="pl-2"><strong>Pérdida de relevancia estratégica:</strong> Si la tecnología, el producto o la solución de la empresa quedan desfasados o el mercado toma otra dirección, la tesis queda invalidada.</li>
              <li className="pl-2"><strong>Falta de tracción comercial:</strong> Para empresas en fases iniciales de ventas, el tiempo es determinante. Si la directiva pospone reiteradamente la comercialización y los ingresos no terminan de materializarse trimestre tras trimestre, la carga de la prueba pasa a ser en contra de la empresa.</li>
              <li className="pl-2"><strong>Dilución destructiva:</strong> La dilución es aceptable si financia crecimiento a altas tasas de retorno. Es inaceptable si solo sirve para cubrir el gasto corriente sin avances operativos. Las ampliaciones de capital reiteradas a precios de derribo son una señal de alarma clara.</li>
              <li className="pl-2"><strong>Pérdida de credibilidad del equipo gestor:</strong> Una de las señales de venta más tajantes.</li>
              <li className="pl-2"><strong>Incapacidad del balance para soportar los plazos:</strong> Una tecnología puede ser válida, pero si la empresa necesita cinco años para comercializarla y solo dispone de caja para doce meses, el accionista actual sufrirá el impacto de la reestructuración.</li>
            </ul>

            <blockquote className="border-l-4 border-slate-900 pl-6 py-2 my-10 bg-slate-50">
              <strong className="block text-slate-900 mb-2 font-sans text-xs uppercase tracking-wider">La prueba del inversor nuevo</strong>
              <span className="italic text-slate-700">Hazte esta pregunta: "Si no tuviera esta acción en cartera hoy, ¿la compraría a este precio, con esta información y con este perfil de riesgo/beneficio?" Si la respuesta es negativa, la posición debe reducirse o liquidarse. El precio de entrada es irrelevante; el mercado desconoce cuál es tu coste medio.</span>
            </blockquote>


            <h2 id="sec-7" className="text-2xl sm:text-3xl font-bold text-slate-900 mt-20 mb-8 scroll-mt-12">
              7. Correcciones: Cuándo promediar al alza/abajo vs. cuándo cortar pérdidas
            </h2>
            <p>
              En empresas de pequeña capitalización, las correcciones son inevitables. Lo importante es distinguir entre el deterioro del precio y el deterioro de la tesis.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-12 mb-4">Es oportuno añadir posición si:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="pl-2">La cotización cae pero los fundamentales mejoran.</li>
              <li className="pl-2">Los ingresos y la cartera de pedidos siguen creciendo.</li>
              <li className="pl-2">Los márgenes se mantienen estables o mejoran.</li>
              <li className="pl-2">La liquidez en balance es suficiente.</li>
              <li className="pl-2">La caída responde a una corrección generalizada del sector.</li>
              <li className="pl-2">No se ha perdido ningún cliente o contrato relevante.</li>
              <li className="pl-2">La valoración se vuelve sustancialmente más atractiva.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-12 mb-4">Evita promediar a la baja si:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="pl-2">La empresa incumple hitos operativos clave.</li>
              <li className="pl-2">Se recortan las previsiones de negocio.</li>
              <li className="pl-2">Se acelera el consumo de caja.</li>
              <li className="pl-2">Aumenta el riesgo de ampliación de capital dilutiva.</li>
              <li className="pl-2">Se debilita la demanda de los clientes.</li>
              <li className="pl-2">La directiva modifica la narrativa.</li>
              <li className="pl-2">La tesis original resulta más difícil de justificar.</li>
            </ul>

            <p className="font-bold text-slate-900">
              Promediar a la baja es una herramienta potente cuando el mercado se equivoca; es destructivo cuando quien se equivoca es la tesis.
            </p>


            <h2 id="sec-8" className="text-2xl sm:text-3xl font-bold text-slate-900 mt-20 mb-8 scroll-mt-12">
              8. Lista de comprobación práctica
            </h2>
            <p className="mb-10">Interactúa con esta lista antes de ejecutar cualquier orden en el mercado.</p>

            <div className="space-y-12">
              <div>
                <h3 className="font-bold text-slate-900 mb-6 font-sans uppercase tracking-widest text-sm border-b border-slate-200 pb-2">Antes de Comprar</h3>
                <div className="space-y-1">
                  <CheckItem>¿Qué ha cambiado en el negocio?</CheckItem>
                  <CheckItem>¿Mejora la tesis más rápido de lo que sube la cotización?</CheckItem>
                  <CheckItem>¿Está la empresa expuesta a una tendencia estructural real?</CheckItem>
                  <CheckItem>¿Existe demanda contrastada por parte de los clientes?</CheckItem>
                  <CheckItem>¿Es la estructura de balance suficientemente sólida?</CheckItem>
                  <CheckItem>¿El nivel de dilución previsto es asumible o peligroso?</CheckItem>
                  <CheckItem>¿Cuál es el próximo catalizador relevante?</CheckItem>
                  <CheckItem>¿Qué capitalización bursátil podría alcanzar razonablemente esta empresa a 5 años?</CheckItem>
                  <CheckItem>¿Qué factores deben cumplirse para lograr un retorno de x3?</CheckItem>
                  <CheckItem>¿Qué eventos invalidarían la tesis?</CheckItem>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-6 font-sans uppercase tracking-widest text-sm border-b border-slate-200 pb-2">Antes de Recortar</h3>
                <div className="space-y-1">
                  <CheckItem>¿Ha alcanzado la posición un peso excesivo en la cartera?</CheckItem>
                  <CheckItem>¿Ha avanzado la valoración por encima de la ejecución real?</CheckItem>
                  <CheckItem>¿Responde el movimiento al entusiasmo o a resultados concretos?</CheckItem>
                  <CheckItem>¿Existen alternativas con mejor relación riesgo/beneficio en la cartera?</CheckItem>
                  <CheckItem>¿Permite el recorte reducir riesgo sin renunciar al potencial alcista?</CheckItem>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-6 font-sans uppercase tracking-widest text-sm border-b border-slate-200 pb-2">Antes de Vender Totalmente</h3>
                <div className="space-y-1">
                  <CheckItem>¿Se ha roto la tesis inicial?</CheckItem>
                  <CheckItem>¿Ha perdido la directiva su credibilidad?</CheckItem>
                  <CheckItem>¿Se ha vuelto destructiva la dilución de capital?</CheckItem>
                  <CheckItem>¿Ha fracasado la tracción comercial esperada?</CheckItem>
                  <CheckItem>¿Es el balance incapaz de sostener la operativa?</CheckItem>
                  <CheckItem>¿Compraría esta acción hoy al precio actual?</CheckItem>
                </div>
              </div>
            </div>


            <h2 id="sec-9" className="text-2xl sm:text-3xl font-bold text-slate-900 mt-20 mb-8 scroll-mt-12">
              9. La mentalidad adecuada
            </h2>
            <p>
              El objetivo final no es acertar al 100%. El objetivo es permanecer en el juego el tiempo suficiente para que las empresas excepcionales ejecuten su interés compuesto.
            </p>
            <p>En la inversión en small-caps de alto crecimiento se requieren dos cualidades contrapuestas:</p>
            
            <ul className="list-disc pl-6 space-y-4 my-8">
              <li className="pl-2"><strong>Convicción:</strong> La fortaleza necesaria para mantener la posición a través de la volatilidad, las dudas del mercado y las caídas temporales.</li>
              <li className="pl-2"><strong>Flexibilidad:</strong> La capacidad analítica para reconocer cuándo la historia ha cambiado, cuándo la valoración ha ido demasiado lejos o cuándo surge una oportunidad superior.</li>
            </ul>

            <p>
              Los peores resultados provienen de carecer de ambas: comprar al calor del entusiasmo, vender con pánico en las caídas y negarse a cerrar posiciones en empresas cuya tesis está rota.
            </p>
            <p>
              Los inversores avanzados son pacientes sin caer en la obstinación, decididos sin ser imprudentes y analíticos sin dejarse llevar por narrativas promocionales. Entienden que una cartera no se construye operando a diario, pero tampoco manteniendo cualquier activo de forma ciega e indefinida.
            </p>

            <h2 id="sec-10" className="text-2xl sm:text-3xl font-bold text-slate-900 mt-20 mb-8 scroll-mt-12">
              10. La regla final
            </h2>
            <p>
              Para carteras de small-caps de alto crecimiento enfocadas en altos retornos, el esquema de trabajo es claro:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 my-8 font-bold text-slate-900">
              <li className="pl-2">Compra cuando el negocio reduzca sus riesgos operativos a mayor velocidad de lo que el mercado revalúa la acción.</li>
              <li className="pl-2">Recorta cuando la posición adquiera un peso excesivo o el precio se adelante demasiado a la ejecución real.</li>
              <li className="pl-2">Vende cuando la tesis original quede invalidada.</li>
            </ul>
            
            <p>Esa es la clave del proceso.</p>
            <p>
              Deja trabajar a las posiciones ganadoras, pero no permitas que un solo valor monopolice el riesgo de tu cartera. Aumenta exposición ante señales de solidez fundamental, pero evita perseguir velas verdes sin evidencias. Soporta la volatilidad del precio, pero nunca mantengas una tesis rota.
            </p>
            <p>
              En este segmento del mercado, el potencial alcista puede ser extraordinario, pero solo si el dimensionamiento de las posiciones, la disciplina en la valoración y el seguimiento de las tesis se gestionan con el mismo rigor que la selección de empresas.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
