f = open('src/data/activities.js', 'rb')
raw = f.read()
f.close()

# Find end marker
search_end = b'</div>\r\n\r\n      <h2 class="text-amber-400 font-mono text-2xl mb-6 flex items-center gap-3">\r\n        <span class="text-gray-600">03_</span>'
idx = raw.find(search_end)
print('End marker found at:', idx)
if idx != -1:
    print('Context before:', repr(raw[idx-100:idx+30]))
