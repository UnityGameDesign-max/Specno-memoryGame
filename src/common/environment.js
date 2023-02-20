export const Environments = {
    Local: {
        name: 'Local',
        uiHost: 'http://localhost:3000',
        assetBase: 'http://localhost:3000/assets/'
    },
    Prod: {
        name: 'Prod',
        uiHost: 'https://specno-memory.web.app/',
        assetBase: 'http://localhost:3000/assets/'
    }
};

const currentHost = 
!!window
&& !!window.location
&& typeof window.location.hostname === 'string'
&& window.location.hostname.toLowerCase();

let currentEnvironment;

switch (currentHost) {
    case Environments.Local.uiHost:
        currentEnvironment = Environments.Local;
        break;
    case Environments.Prod.uiHost:
        currentEnvironment = Environments.Prod;
        break;
    default:
        currentEnvironment = Environments.Prod;
        break;
}

export const Environment = currentEnvironment;