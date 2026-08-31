const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace key point titles
content = content.replace(
  /className="text-sm font-semibold text-slate-900">La Regla/g,
  'className="text-base font-semibold text-slate-900">La Regla'
);
content = content.replace(
  /className="text-sm font-semibold text-slate-900">Entrada/g,
  'className="text-base font-semibold text-slate-900">Entrada'
);
content = content.replace(
  /className="text-sm font-semibold text-slate-900">Criterios/g,
  'className="text-base font-semibold text-slate-900">Criterios'
);
content = content.replace(
  /className="text-sm font-semibold text-slate-900">Filtros/g,
  'className="text-base font-semibold text-slate-900">Filtros'
);
content = content.replace(
  /className="text-sm font-semibold text-slate-900">Checklist/g,
  'className="text-base font-semibold text-slate-900">Checklist'
);

// Replace key point descriptions
content = content.replace(
  /className="text-xs text-slate-600 mt-1 leading-relaxed">(\s*Cómo capturar)/g,
  'className="text-sm text-slate-600 mt-1.5 leading-relaxed">$1'
);
content = content.replace(
  /className="text-xs text-slate-600 mt-1 leading-relaxed">(\s*Validar la)/g,
  'className="text-sm text-slate-600 mt-1.5 leading-relaxed">$1'
);
content = content.replace(
  /className="text-xs text-slate-600 mt-1 leading-relaxed">(\s*Reglas claras)/g,
  'className="text-sm text-slate-600 mt-1.5 leading-relaxed">$1'
);
content = content.replace(
  /className="text-xs text-slate-600 mt-1 leading-relaxed">(\s*Parámetros)/g,
  'className="text-sm text-slate-600 mt-1.5 leading-relaxed">$1'
);
content = content.replace(
  /className="text-xs text-slate-600 mt-1 leading-relaxed">(\s*6 preguntas)/g,
  'className="text-sm text-slate-600 mt-1.5 leading-relaxed">$1'
);

// Replace index grid size
content = content.replace(
  /className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700"/g,
  'className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700"'
);

fs.writeFileSync('src/App.tsx', content);
console.log('updated text sizes');
