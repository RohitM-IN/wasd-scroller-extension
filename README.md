# 🚀 WASD Scroller - Chrome / Edge Extension

WASD Scroller lets you scroll web pages using the **W**, **A**, **S**, and **D** keys.
Double-tap **CTRL** to enable or disable the feature.

---

## 🔄 Update

### ✅ Manifest V3 Migration

This extension has been updated to support **Manifest V3**, making it compatible with the latest versions of **Chrome** and **Edge**.

> 📝 If you were using the extension from the Chrome Web Store:
> [Original Extension Link](https://chrome.google.com/webstore/detail/bnclefcgenjnibloiidmhekpljjidfjh) — it may no longer be available.

---

## 🛠 Installation Options

### 1. 🔓 Load as an Unpacked Extension (Recommended for Devs)

1. Download or clone this repository.
2. Open Chrome or Edge.
3. Navigate to:

   * **Chrome**: `chrome://extensions/`
   * **Edge**: `edge://extensions/`
4. Enable **Developer Mode** (top right).
5. Click **Load unpacked** and select the folder containing this extension.

### 2. 📦 Install via `.crx` (For Admin/IT users)

You can manually install the `.crx` file (if available) and **whitelist** the extension to prevent it from being disabled by the browser.

---

## 🧩 Manual Whitelisting via Windows Registry (Advanced / IT Admins)

This is useful if your browser is managed by group policy or you're installing `.crx` files outside of the Web Store.

### ✳️ Steps:

1. Install the extension or load `.crx` manually and find the **Extension ID**
   Example: `bnclefcgenjnibloiidmhekpljjidfjh`

2. Open the **Registry Editor** (`regedit`)

3. Navigate to:

   * **Chrome**:
     `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome`

   * **Edge**:
     `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Edge`

4. Right-click the browser key (Chrome or Edge), and create a new key:

   * **Chrome** → `ExtensionInstallWhitelist`
   * **Edge** → `ExtensionInstallAllowlist`

5. Inside that new key:

   * Right-click → `New > String Value`
   * Name it: `1`
   * Set the value data to your extension ID
     e.g. `bnclefcgenjnibloiidmhekpljjidfjh`

6. ✅ Done. Restart the browser — the extension should now be enabled automatically.

> ⚠️ Don’t see the `Chrome` or `Edge` key?
> You may need to create it manually under:
> `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google`
> or
> `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft`

---

## ✅ Quick Notes

* This extension does not collect any data.
* Works on all pages (`<all_urls>`)
* Double-tap **CTRL** to toggle scrolling on/off.
* Default scroll step: **100px** (can be changed via storage)

---

## 🙌 Hope this helps!

If you face any issues loading or running the extension, feel free to open a GitHub issue or contact me.
Good luck, and happy scrolling! 🚀

