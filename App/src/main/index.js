'use strict'

import { app, BrowserWindow, Menu, ipcMain } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  Menu.setApplicationMenu(null) // 隐藏菜单栏
  mainWindow = new BrowserWindow({
    height: 500,
    useContentSize: true,
    width: 400,
    frame: false
  })

  mainWindow.loadURL(winURL)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  ipcMain.on('login-window', () => {
    mainWindow.setSize(1022, 670)
  })
  ipcMain.on('reset-window', () => {
    mainWindow.setSize(500, 400)
  })
  // 关闭
  ipcMain.on('close', e =>
    mainWindow.close()
  )
  // 最大化
  ipcMain.on('max-window', () => {
    mainWindow.maximize()
  })
  // 最小化
  ipcMain.on('min-window', () => {
    mainWindow.minimize()
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
