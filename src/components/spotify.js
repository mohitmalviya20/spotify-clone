export const authEndPoint = "https://accounts.spotify.com/authorize";

const redeirectUri = "https://loving-haibt-395255.netlify.app";

const clientId = "927ea63cac1543178282835d44a027b1";

const scope = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((intial, item) => {
      let parts = item.split("=");
      intial[parts[0]] = decodeURIComponent(parts[1]);
      return intial;
    }, {});
};

export const loginURL = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redeirectUri}&scope=${scope.join(
  "%20"
)}&response_type=token&show_dialog=true`;
