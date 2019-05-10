'use strict';
const { ipcRenderer } = require("electron");

module.exports = function drawBadge(totalBadgeCount, badgeStyle) {
    const {
        backgroundColor,
        textColor
    } = badgeStyle;

    const drawOptions = {
        canvasHeight: 140,
        canvasWidth: 140
    };
    const {
        canvasWidth,
        canvasHeight
    } = drawOptions;
    const canvas = document.createElement("canvas");
    canvas.height = canvasHeight;
    canvas.width = canvasWidth;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = backgroundColor;
    ctx.beginPath();
    ctx.ellipse(70, 70, 70, 70, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.textAlign = "center";
    ctx.fillStyle = textColor;
    let text = (totalBadgeCount) || "1";
    if (text.length > 2) {
        text = "99+";
        ctx.font = "75px sans-serif";
        ctx.fillText(`${text}`, 70, 98);
    } else if (text.length > 1) {
        ctx.font = "70px sans-serif";
        ctx.fillText(text + "", 70, 105);
    } else {
        ctx.font = "100px sans-serif";
        ctx.fillText(text, 70, 112);
    }

    const badge = (totalBadgeCount) ? canvas.toDataURL() : null;
    return totalBadgeCount >= 0 && ipcRenderer.send("draw-windows-badge", badge);
};
