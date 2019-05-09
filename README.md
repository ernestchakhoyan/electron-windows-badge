# @ernestchakhoyan/electron-windows-badge ![CI status](https://img.shields.io/badge/ernest-ch-green.svg)


> Draws badge count on the app icon pinned to taskbar with Canvas . 


### Instalation

You can use ```npm``` to install it via command line.

```
npm install @ernestchakhoyan/electron-windows-badge
```

or ```yarn```

```
yarn add "@ernestchakhoyan/electron-windows-badge"
```

### Usage

1.Import `drawBadge` module into your *renderer* process
```diff
import drawBadge from "@ernestchakhoyan/electron-windows-badge";
```
or

```diff
const drawBadge =  require("@ernestchakhoyan/electron-windows-badge");
```

2.Call `drawBadge` function in the *renderer* process

```
drawBadge(badgeCount, badgeStyle)
```

**badgeCount** (number) - Badge count to draw

**badgeStyle** (Object) - Setting badge circle background color and text color

> **Please note that badgeStyle object is required and keep key names as in the example (backgroundColor, textColor)**

example
```
const badgeStyle = {
    backgroundColor: "#426991",
    textColor: "#e9e9e9"
    };
``` 


3.Handle `draw-windows-badge` message with `ipcMain` (Copy-paste this into your `main.js`)

```
ipcMain.on("draw-windows-badge", (event,badge) => {
    if (badge) {
        const img = nativeImage.createFromDataURL(badge);
        mainWindow.setOverlayIcon(img, "badgeIcon");
    } else {
        mainWindow.setOverlayIcon(null, "Removing Icon");
    }
});
```



## Author

* **Ernest Chakhoyan** 


## License

This project is licensed under the MIT License - see the LICENSE.md file for details

