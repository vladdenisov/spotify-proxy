# Spotify Proxy ![npm bundle size](https://img.shields.io/bundlephobia/minzip/spotify-proxy) ![npm](https://img.shields.io/npm/dy/spotify-proxy) ![npm](https://img.shields.io/npm/v/spotify-proxy)

Simple NodeJS Proxy with whitelisted only Spotify addresses.   
Prevents from optional data usage. Increases Spotify app speed.

## Installation

Use the package manager [npm](https://npmjs.com) to install spotify-proxy.

```bash
npm i -g spotify-proxy
```

Setup Proxy in Spotify App: 

1. Head to Settings
2. Scroll to `Advanced Settings`
3. Find proxy
4. Configure it as:   
  **Proxy type**: `HTTP`   
  **HOST**: `localhost`  
  **PORT**: `8080`
  
### **Optional:**   
  If you want, you can change proxy port by setting your enviroment variables: 

  #### Windows
  ```cmd
  set PORT=<port you want to use>
  ```

  #### Linux
  ```bash
  export PORT=<port you want to use>
  ```

  Make sure to __check your Spotify app proxy settings__ after this.

## Usage
__Normal mode (recommended):__
```bash
spotify-proxy
```

Verbose mode (for debug):
```bash
spotify-proxy -v
```

## Disclaimer
### **I do not accept any liability or responsibility. Use at your own risk. Made only for educational purposes.**

## Acknowledgments

* Used [spotify-adblock-macos](https://github.com/AnanthVivekanand/spotify-adblock-macos) idea and some basic code.

## License
[MIT](https://choosealicense.com/licenses/mit/)
