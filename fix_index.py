import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Em dashes
content = content.replace('— Data into action.', 'Data into action.')
content = content.replace('Wisemetrics —', 'Wisemetrics:')
content = content.replace('A Wisemetrics existe nesse espaço — onde', 'A Wisemetrics existe nesse espaço, onde')
content = content.replace('— e sinal', 'e sinal')
content = content.replace('onde agir — e por', 'onde agir e por')
content = content.replace('recorrentes — sem depender', 'recorrentes, sem depender')
content = content.replace('Penalty — ', 'Penalty: ')
content = content.replace('ATMMOS — ', 'ATMMOS: ')
content = content.replace('Boticário — ', 'Boticário: ')
content = content.replace('mídia OOH — do dado', 'mídia OOH. Do dado')

# 2. OKLCH / Colors (We will update the CSS var block directly below)
# 3. CSS easing
content = re.sub(r'--ease:cubic-bezier\(\.2,\.6,\.2,1\);', '--ease:cubic-bezier(0.16,1,0.3,1);', content)
content = re.sub(r'--ease-in:cubic-bezier\(\.16,\.84,\.24,1\);', '--ease-in:cubic-bezier(0.7,0,0.84,0);', content)
content = re.sub(r'--ease-out:cubic-bezier\(\.4,0,1,1\);', '--ease-out:cubic-bezier(0.16,1,0.3,1);', content)

# 4. Pure black / white and rgba alphas based on pure black/white
content = content.replace('rgba(0,0,0,.05)', 'oklch(15% 0.01 60 / 0.05)')
content = content.replace('rgba(0,0,0,.08)', 'oklch(15% 0.01 60 / 0.08)')
content = content.replace('rgba(0,0,0,.16)', 'oklch(15% 0.01 60 / 0.16)')
content = content.replace('rgba(0,0,0,.24)', 'oklch(15% 0.01 60 / 0.24)')
content = content.replace('rgba(0,0,0,.7)', 'oklch(15% 0.01 60 / 0.7)')
content = content.replace('rgba(0,0,0,.8)', 'oklch(15% 0.01 60 / 0.8)')
content = content.replace('rgba(255,255,255,.02)', 'oklch(95% 0.01 60 / 0.02)')
content = content.replace('rgba(255,255,255,.04)', 'oklch(95% 0.01 60 / 0.04)')
content = content.replace('rgba(255,255,255,.25)', 'oklch(95% 0.01 60 / 0.25)')

# 5. JS Easing
content = content.replace("ease:'elastic.out(1,.5)'", "ease:'power3.out'")

# 6. Global typography limits
css_addition = """
p, .prob-r-body, .atu-desc, .meto-step-desc, .case-body p, .tcard-bio {
  max-width: 65ch;
}
img{display:block;max-width:100%}"""
content = content.replace("img{display:block;max-width:100%}", css_addition)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
