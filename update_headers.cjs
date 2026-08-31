const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  'text-xs font-bold uppercase tracking-widest text-slate-400">\n                  Puntos clave',
  'text-sm font-bold uppercase tracking-widest text-slate-400">\n                  Puntos clave'
);

content = content.replace(
  'text-xs font-bold uppercase tracking-widest text-slate-400">\n                    Índice del',
  'text-sm font-bold uppercase tracking-widest text-slate-400">\n                    Índice del'
);

fs.writeFileSync('src/App.tsx', content);
console.log('headers updated');
