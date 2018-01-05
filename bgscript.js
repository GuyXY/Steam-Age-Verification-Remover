let cookieInfo = {
    "name": "birthtime",
    "url": "http://store.steampowered.com"
};

const patcher = () => "0";

setCookies(cookieInfo, "store.steampowered.com", patcher);
setAutoCookiePatcher(cookieInfo, patcher);