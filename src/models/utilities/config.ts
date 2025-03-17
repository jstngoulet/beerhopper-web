interface ENV_KEYS {
    SERVER_HOST: string;
    SERVER_API_KEY: string;
}

const DEFAULT_KEYS: ENV_KEYS = {
    SERVER_HOST: process.env.REACT_APP_API_SERVER_HOST || "", 
    SERVER_API_KEY: process.env.REACT_APP_SERVER_API_KEY || ""
}

export default DEFAULT_KEYS;
