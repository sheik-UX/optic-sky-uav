import subprocess
import os

viewports = [
    (1440, 900, "desktop_1440"),
    (1024, 768, "tablet_landscape_1024"),
    (768, 1024, "tablet_portrait_768"),
    (390, 844, "mobile_390"),
    (320, 568, "narrow_mobile_320")
]

os.makedirs("scratch/screenshots", exist_ok=True)
edge_exe = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

print("--- Testing Viewports & Responsive Rendering ---")

for w, h, name in viewports:
    screenshot_file = f"scratch/screenshots/{name}.png"
    cmd = [
        edge_exe,
        "--headless",
        f"--window-size={w},{h}",
        f"--screenshot={screenshot_file}",
        "http://127.0.0.1:4174/"
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if os.path.exists(screenshot_file):
        size_kb = round(os.path.getsize(screenshot_file) / 1024, 1)
        print(f"[PASS] Rendered {name} ({w}x{h}): Screenshot created ({size_kb} KB)")
    else:
        print(f"[FAIL] Rendered {name} ({w}x{h}): Failed to create screenshot")

print("\nAll responsive viewport tests completed!")
