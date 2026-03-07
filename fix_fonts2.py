f = open('src/data/activities.js', 'r', encoding='utf-8')
content = f.read()
f.close()

# Replace ALL remaining text-[10px] with text-xs
new_content = content.replace('text-[10px]', 'text-xs')

# Also replace text-[11px] with text-xs
new_content = new_content.replace('text-[11px]', 'text-xs')

f = open('src/data/activities.js', 'w', encoding='utf-8')
f.write(new_content)
f.close()

import re
sizes = re.findall(r'text-\[10px\]|text-xs|text-\[11px\]|text-sm', new_content)
from collections import Counter
print("Final result:", Counter(sizes))
print("Done - all small text upgraded!")
