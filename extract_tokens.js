const fs = require('fs');

const css = fs.readFileSync('wisemetrics.css', 'utf8');
const designSystem = {
  colors: {
    paper: {},
    ink: {},
    signal: {},
    semantic: {},
    data: {}
  },
  typography: {
    fonts: {},
    sizes: {}
  },
  spacing: {},
  radii: {},
  shadows: {},
  motion: {},
  layout: {}
};

// Extract tokens from :root
const rootMatch = css.match(/:root\s*{([^}]+)}/);
if (rootMatch) {
  const rootContent = rootMatch[1];
  const regex = /--wm-([a-zA-Z0-9-]+):\s*([^;]+);/g;
  let match;
  
  while ((match = regex.exec(rootContent)) !== null) {
    const key = match[1];
    const value = match[2].trim();
    
    if (key.startsWith('paper-')) designSystem.colors.paper[key.replace('paper-', '')] = value;
    else if (key.startsWith('ink-')) designSystem.colors.ink[key.replace('ink-', '')] = value;
    else if (key.startsWith('signal-')) designSystem.colors.signal[key.replace('signal-', '')] = value;
    else if (key.startsWith('data-')) designSystem.colors.data[key.replace('data-', '')] = value;
    else if (['amber-400', 'amber-500', 'danger', 'success', 'warning', 'info'].includes(key)) designSystem.colors.semantic[key] = value;
    else if (key.startsWith('font-')) designSystem.typography.fonts[key.replace('font-', '')] = value;
    else if (key.startsWith('text-')) designSystem.typography.sizes[key.replace('text-', '')] = value;
    else if (key.startsWith('s-')) designSystem.spacing[key.replace('s-', '')] = value;
    else if (key.startsWith('r-')) designSystem.radii[key.replace('r-', '')] = value;
    else if (key.startsWith('shadow-') || key.startsWith('glow-')) designSystem.shadows[key] = value;
    else if (key.startsWith('ease-') || key.startsWith('dur-')) designSystem.motion[key] = value;
    else if (['container', 'gutter'].includes(key)) designSystem.layout[key] = value;
  }
}

// Extract semantic roles for themes
['dark', 'light'].forEach(theme => {
  designSystem.colors[theme] = {};
  const themeMatch = css.match(new RegExp(`\\[data-theme="${theme}"\\]\\s*{([^}]+)}`));
  if (themeMatch) {
    const themeContent = themeMatch[1];
    const regex = /--([a-zA-Z0-9-]+):\s*([^;]+);/g;
    let match;
    
    while ((match = regex.exec(themeContent)) !== null) {
      designSystem.colors[theme][match[1]] = match[2].trim();
    }
  }
});

fs.writeFileSync('design_system.json', JSON.stringify(designSystem, null, 2));
console.log('Design system JSON generated at design_system.json');
