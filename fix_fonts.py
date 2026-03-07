f = open('src/data/activities.js', 'r', encoding='utf-8')
content = f.read()
f.close()

# Find the index of the platforms section to only replace within that scope
# We don't want to change things outside the PR02 activity content

# Replace font sizes:
# text-[10px] -> text-xs  (10px -> 12px, standard tailwind small)
# text-xs -> text-sm      (12px -> 14px, more readable)
# Also handle text-[10px] used in uppercase labels (section titles) -> text-xs

# Strategy: only replace inside the PR02 section (after line 1130 roughly)
# Find the PR02 section marker
pr02_start = content.find('ANÁLISIS INDIVIDUAL DE LAS 8 PLATAFORMAS')
if pr02_start == -1:
    pr02_start = content.find('ANALISIS INDIVIDUAL DE LAS 8 PLATAFORMAS')
    
# Find the end of activities section (closing the PR02 main div)
# We'll do a global replace for safety since the sizes are consistent
before = content[:pr02_start] if pr02_start > 0 else ''
after_start = content[pr02_start:] if pr02_start > 0 else content

print(f"PR02 section starts at: {pr02_start}")
print(f"Total length: {len(content)}")

# In the PR02 section, make these replacements:
# text-[10px] (tiny labels/badge text) -> text-xs (12px) 
# text-xs (body text inside cards) -> text-sm (14px)

# First: replace text-xs -> text-sm in the PR02 section
after_start = after_start.replace('text-xs text-gray-400 leading-relaxed', 'text-sm text-gray-400 leading-relaxed')
after_start = after_start.replace('text-xs text-gray-500', 'text-sm text-gray-500')
after_start = after_start.replace('text-xs text-gray-300', 'text-sm text-gray-300')

# Then: replace text-[10px] (card content text) -> text-xs
# But keep text-[10px] for uppercase labels (they're fine at 10px with UPPERCASE tracking)
# Actually let's bump ALL [10px] to text-xs for readability
after_start = after_start.replace(
    'class="text-[10px] text-gray-500 leading-relaxed"',
    'class="text-xs text-gray-500 leading-relaxed"'
)
after_start = after_start.replace(
    'class="text-[10px] text-gray-500 italic"',
    'class="text-xs text-gray-500 italic"'
)
after_start = after_start.replace(
    'class="text-[10px] text-gray-500"',
    'class="text-xs text-gray-500"'
)
after_start = after_start.replace(
    'class="text-[10px] text-gray-400 mt-1"',
    'class="text-xs text-gray-400 mt-1"'
)

# For the uppercase tracking labels, keep them at text-xs (bump from [10px]) 
after_start = after_start.replace(
    'class="text-amber-400 font-bold text-[10px] uppercase block mb-1"',
    'class="text-amber-400 font-bold text-xs uppercase block mb-1"'
)
after_start = after_start.replace(
    'class="text-blue-400 font-bold text-[10px] uppercase block mb-1"',
    'class="text-blue-400 font-bold text-xs uppercase block mb-1"'
)
after_start = after_start.replace(
    'class="text-green-400 font-bold text-[10px] uppercase block mb-1"',
    'class="text-green-400 font-bold text-xs uppercase block mb-1"'
)
after_start = after_start.replace(
    'class="text-red-400 font-bold text-[10px] uppercase block mb-1"',
    'class="text-red-400 font-bold text-xs uppercase block mb-1"'
)
after_start = after_start.replace(
    'class="text-cyan-400 font-bold text-[10px] uppercase block mb-1"',
    'class="text-cyan-400 font-bold text-xs uppercase block mb-1"'
)
after_start = after_start.replace(
    'class="text-purple-400 font-bold text-[10px] uppercase block mb-1"',
    'class="text-purple-400 font-bold text-xs uppercase block mb-1"'
)
after_start = after_start.replace(
    'class="text-orange-400 font-bold text-[10px] uppercase block mb-1"',
    'class="text-orange-400 font-bold text-xs uppercase block mb-1"'
)
after_start = after_start.replace(
    'class="text-gray-300 font-bold text-[10px] uppercase block mb-1"',
    'class="text-gray-300 font-bold text-xs uppercase block mb-1"'
)

# Section header labels (h4 elements)
after_start = after_start.replace(
    'class="text-amber-400 font-bold uppercase tracking-widest text-[10px]"',
    'class="text-amber-400 font-bold uppercase tracking-widest text-xs"'
)
after_start = after_start.replace(
    'class="text-blue-400 font-bold uppercase tracking-widest text-[10px]"',
    'class="text-blue-400 font-bold uppercase tracking-widest text-xs"'
)
after_start = after_start.replace(
    'class="text-green-400 font-bold uppercase tracking-widest text-[10px]"',
    'class="text-green-400 font-bold uppercase tracking-widest text-xs"'
)
after_start = after_start.replace(
    'class="text-red-400 font-bold uppercase tracking-widest text-[10px]"',
    'class="text-red-400 font-bold uppercase tracking-widest text-xs"'
)
after_start = after_start.replace(
    'class="text-cyan-400 font-bold uppercase tracking-widest text-[10px]"',
    'class="text-cyan-400 font-bold uppercase tracking-widest text-xs"'
)
after_start = after_start.replace(
    'class="text-purple-400 font-bold uppercase tracking-widest text-[10px]"',
    'class="text-purple-400 font-bold uppercase tracking-widest text-xs"'
)
after_start = after_start.replace(
    'class="text-orange-400 font-bold uppercase tracking-widest text-[10px]"',
    'class="text-orange-400 font-bold uppercase tracking-widest text-xs"'
)
after_start = after_start.replace(
    'class="text-gray-300 font-bold uppercase tracking-widest text-[10px]"',
    'class="text-gray-300 font-bold uppercase tracking-widest text-xs"'
)

# Badge/tag spans
after_start = after_start.replace(
    'class="text-[10px] bg-',
    'class="text-xs bg-'
)

# Also update table font sizes
after_start = after_start.replace(
    'class="text-[10px] uppercase',
    'class="text-xs uppercase'
)
after_start = after_start.replace(
    'class="text-[11px]',
    'class="text-xs'
)

# Also fix the gray-300 critical analysis label
after_start = after_start.replace(
    'class="text-gray-300 text-[10px] font-bold uppercase block mb-1"',
    'class="text-gray-300 text-xs font-bold uppercase block mb-1"'
)

new_content = before + after_start

f = open('src/data/activities.js', 'w', encoding='utf-8')
f.write(new_content)
f.close()

# Verify
f2 = open('src/data/activities.js', 'r', encoding='utf-8')
c2 = f2.read()
f2.close()
import re
sizes = re.findall(r'text-\[10px\]|text-xs|text-\[11px\]|text-sm|text-\[12px\]', c2)
from collections import Counter
print("After replacement:", Counter(sizes))
print("Done!")
