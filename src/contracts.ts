export interface NoiaNodeSettings {
    isHeadless: boolean;
    userDataPath?: string;
    settingsPath: string;
    storageDir: string;
    storageSize: string;
    domain: string;
    ssl: boolean;
    privateKeyPath: string;
    crtPath: string;
    crtBundlePath: string;
    publicIp: string;
    http: boolean;
    httpIp: string;
    httpPort: string;
    ws: boolean;
    wsIp: string;
    wsPort: string;
    wrtc: boolean;
    wrtcControlPort: string;
    wrtcControlIp: string;
    wrtcDataPort: string;
    wrtcDataIp: string;
    walletAddress: string;
    walletMnemonic: string;
    walletProviderUrl: string;
    client: string;
    masterAddress: string;
    whitelistMasters: string[];
    controller: boolean;
    controllerIp: string;
    controllerPort: string;
    skipBlockchain: boolean;
    nodeId: string;
}
