# wasd-scroller-chrome-extension

I dont know what happned to our WASD scroller extension which was https://chrome.google.com/webstore/detail/bnclefcgenjnibloiidmhekpljjidfjh i saved the code here

you may install it as unpacked extension or you can install the crx file and whitelist the extension manually Hope this helps 

you may refer https://developer.chrome.com/docs/extensions/mv3/external_extensions/#registry 

and for manual white listing:

In Chrome / Edge, go to the following URL in the address bar (or open Extensions from Chrome menu -> More tools or Extensions from Edge menu).

Chrome: chrome://extensions/

Edge: edge://extensions/

Locate the extensions that are disabled by Chrome / Edge. Record the ID of the extension, which is in the format of long string, e.g. abcdefghijklmnopqrstuvwxyz.

Run Registry Editor (regedit).

Navigate to the following registry key:

Chrome: HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome

Edge: HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Edge

For Chrome, right click on Chrome and select New -> Key, and name the new key as ExtensionInstallWhitelist.

For Edge, right click on Edge and select New -> Key, and name the new key as ExtensionInstallAllowlist.

Note: Ignore this step if the key is already existed.

Right click on the new key created (i.e. ExtensionInstallWhitelist or ExtensionInstallAllowlist), and select New -> String Value. Name the new value with a sequential number, starting with 1, 2, 3, and so on. So if it’s the first extension to be allowed, name the new value as “1”.

For the value data, enter the ID of the extension you copied from step above so that the values look like:

1 REG_SZ abcdefghijklmnopqrstuvwxyz

Restart the browser and the disabled extensions should be automatically turned on.

Note: If you dont have the Chrome or Edge Key add it ex New -> Key and name it as Chrome  OR  Edge
like me I didnt have the Edge key in HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft needed to add that manually as well 

Good Luck :)
