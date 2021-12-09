const TRANSLATION_EN = {
    default: 'Default',
    native: 'Native',
    hide: 'Hide',
    show: 'Show',
    total: 'Total',
    visible: 'Visible',
    hidden: 'Hidden',
    enabled: 'Enabled',
    disabled: 'Disabled',
    auto: 'Automatic',
    manual: 'Manual',
    all: 'All',
    locked: 'Locked',
    complete: 'Complete',
    incomplete: 'Incomplete',
    games: 'Games',
    allgames: 'All Games',
    leavepro: 'Leaving Pro',
    bundles: 'Bundles',
    addons: 'Add-ons',
    wishlist: 'Wishlist',
    responsive: 'Responsive',
    windowed: 'Windowed Mode',
    fullscreen: 'Fullscreen',
    onsale: 'On Sale',
    prodeals: 'Pro Deals',
    userprofile: 'My Profile',
    usermedia: 'Captures & game states',
    searchbtnbase: 'Search on',
    avatarpopup: 'New avatar URL (empty for default):',
    date: 'Date',
    time: 'Time',
    sessiontime: 'Session time',
    codec: 'Codec',
    resolution: 'Resolution',
    hardware: 'Hardware',
    software: 'Software',
    trafficsession: 'Session traffic',
    trafficcurrent: 'Current traffic',
    trafficaverage: 'Average traffic',
    packetloss: 'Packets lost',
    framedrop: 'Frames dropped',
    latency: 'Latency',
    jitter: 'Jitter Buffer',
    decodetime: 'Decoding Time',
    compression: 'Compression',
    bitrate: 'Bitrate',
    streammon: 'Stream Monitor',
    stream: 'Stream',
    network: 'Network',
    session: 'Session',
    extdetail: 'Extended Details',
    maxresolution: 'Maximum Resolution',
    fps: 'Framerate',
    testdiscl: '<b>Disclaimer:</b> This game has yet to be tested.',
    datadiscl: 'This is the maximum framerate achieved when playing a game in 4K mode (requires Stadia Pro).\
        On games with a resolution/framerate toggle, resolution was picked. \
        This data is provided by <a href="https://twitter.com/OriginaIPenguin" target="_blank">@OriginaIPenguin</a> \
        and the full database can be found <a href="https://linktr.ee/StadiaDatabase" target="_blank">here</a>.',
    noteOne: '4K Mode',
    noteTwo: '30/60 FPS Toggle',
    noteThree: '60 FPS in 1080p mode',
    noteFour: '30 FPS in 1080p Mode',
    noteFive: 'Not compatible with 4K mode',
    unsupported: 'Unsupported',
    crossfriends: 'No Cross-platform Buddy System',
    filtersettings: 'Filter Settings',
    saturation: 'Saturation',
    contrast: 'Contrast',
    brightness: 'Brightness',
    sharpen: 'Sharpen',
    community: 'Community',
    speedtest: 'Speedtest',
    quickaccess: 'Quick Access',
    messages: 'Messages',
    comfeature: "Community Features",
    avatar: 'Avatar',
    interface: 'Interface',
    shortcut: 'StadiaIcons',
    shortcuttitle: 'Install a shortcut for',
    shortcutdesc: 'Allows you to install a shortcut for a game on your device.',
    stadiadatabase: 'Stadia Database',
    stadiadatabasedesc: 'Displays a "Extended Details" section on the store page of games, which showcases framerate, resolution and more about the game.',
    stadiahunters: 'Stadia Hunters',
    stadiahuntersdesc: 'Access to the Stadia Hunters community, including achievement tracking, guides, leaderboards and more. The perfect companion for achievement hunters.',
    stadiahunterstitle: 'on Stadia Hunters',
    stadiahunterslogin: 'Click to login',
    stadiahuntersnotfound: 'User not found',
    stadiahunterslevel: 'Level',
    stadiahuntersworldrank: 'World Rank',
    stadiahuntersxphover: 'Level Progress',
    gridsize: 'Grid Size',
    griddesc: 'Changes the amount of games per row in the library.',
    clock: 'Clock',
    clockdesc: 'Displays the current time on the friends list, as a in-game overlay, or both.',
    friendslist: 'Friends List',
    igoverlay: 'In-Game Overlay',
    listoverlay: 'List & Overlay',
    filter: 'Game Filter',
    filterdesc: 'Allows you to sort your library by hiding games. The filter can be toggled via the symbol, top-right above your games in the library.',
    invitebase: 'Copy invite link',
    inviteactive: 'Copied!',
    gamelabel: 'Game Labels',
    gamelabeldesc: 'Removes labels like "Pro" from games on the homescreen.',
    dimoverlay: 'Dimmed Overlay',
    dimoverlaydesc: 'Removes the dimming effect when opening the Stadia menu during gameplay.',
    homegallery: 'User Gallery',
    homegallerydesc: 'Hides the "Captures" area at the bottom of the homescreen.',
    quickprev: 'Message Preview',
    quickprevdesc: 'Hides the message preview in the friends list.',
    quickrep: 'Quick Reply',
    quickrepdesc: 'Hides the quick reply option in chats.',
    offlinefriend: 'Offline Friends',
    offlinefrienddesc: 'Hides offline friends in the friends list.',
    invisiblefriend: 'Invisible Friends',
    invisiblefrienddesc: 'Hides friends with unknown online status in the friends list.',
    notification: 'Notifications',
    notificationdesc: 'Display a notification when Stadia Enhanced updated to a new version ("Auto" hides after 5 seconds, "Manual" stays until user interaction).',
    streammode: 'Streaming Mode',
    streammodedesc: 'Enable to make certain elements (i.e. the friends list) unreadable while streaming (via tools like OBS / Discord).',
    catprev: 'Category Preview',
    catprevdesc: 'Hides the category tags when hovering over a game.',
    streammondesc: 'Activate to start the monitor whenever a game starts.',
    resolutiondesc: 'The targeted resolution for game streams. 1440p and 2160p require VP9 and Stadia Pro.',
    codecdesc: 'The codec used for game streams.',
    confirmreset: 'Are you sure you want to reset the settings?',
    statistics: 'Statistics',
    gamesfinished: 'Games Finished',
    achievementsunlocked: 'Achievements Unlocked',
    totalPlayTime: 'Total Playtime',
    splitstore: 'Split Store Lists',
    splitstoredesc: 'Splits store lists into two columns for a better overview.',
    inlineimage: 'Image Preview',
    inlinedesc: 'Replaces image links for common file formats (jpg/gif/png) with a clickable preview.',
    familyelements: 'Family-sharing options',
    familyelementsdesc: 'Hides the "Share this game with family" options.',
    donations: 'Donations',
    reportbug: 'Report a bug',
    exportset: 'Export settings',
    importset: 'Import settings',
    importerror: 'The file you are trying to open does not contain a valid Stadia Enhanced profile.',
    resetsettings: 'Reset settings'
}