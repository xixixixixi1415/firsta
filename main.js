const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // 建立瀏覽器視窗
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // 載入您的 index.html
  win.loadFile('index.html');
}

// 當 Electron 準備好時，建立視窗
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 當所有視窗關閉時，結束程式（Mac 系統除外）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
