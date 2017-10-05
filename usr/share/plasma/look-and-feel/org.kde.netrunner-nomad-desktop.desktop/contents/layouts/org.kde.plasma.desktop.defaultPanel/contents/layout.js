panel = new Panel
panel.location = "bottom"
panel.alignment = "center"

// Add widgets
var menu = panel.addWidget("org.kde.plasma.nomadmenu")

panel.addWidget("org.nomad-shell.panel.separator")

panel.addWidget("org.kde.plasma.appmenu")
panel.addWidget("org.kde.plasma.panelspacer")
var systray = panel.addWidget("org.nomad.systemtray")

// Don't load widgets overwriten in nomad
var systrayContainmentId = systray.readConfig('SystrayContainmentId')
var systrayContainer = desktopById(systrayContainmentId)
systrayContainer.currentConfigGroup = ['General']
systrayContainer.writeConfig("knownItems", "org.kde.plasma.networkmanagement,org.kde.plasma.notifications,org.kde.plasma.mediacontroller,org.kde.plasma.devicenotifier,org.kde.plasma.volume")

panel.addWidget("org.nomad.clock")

panel.locked = true
