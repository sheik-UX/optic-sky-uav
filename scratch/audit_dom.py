import re

with open('scratch/rendered_dom.html', 'r', encoding='utf-8') as f:
    dom = f.read()

imgs = re.findall(r'<img[^>]+src=[\'"]([^\'"]+)[\'"]', dom)
print('Total rendered img elements:', len(imgs))
print('Unique image sources:', len(set(imgs)))

for prefix in ['serket', 'cascata', 'whistling', 'branding']:
    matches = [i for i in imgs if prefix in i]
    print(f'  {prefix}: {len(matches)} image elements')

videos = re.findall(r'Supplied Video Reels \((\d+)\)', dom)
print('Video section indicators:', videos)

# Check all anchor hrefs
anchors = re.findall(r'<a[^>]+href=[\'"]([^\'"]+)[\'"]', dom)
print('Total anchors:', len(anchors))
nav_anchors = [a for a in anchors if a.startswith('#')]
print('Section hash links:', set(nav_anchors))
