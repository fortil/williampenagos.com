const withCSS = require('@zeit/next-css')

module.exports = Object.assign({
  exportPathMap: function (defaultPathMap) {
    return {
      '/': { page: '/', name: 'about' },
      '/experience': { page: '/experience', name: 'experience' },
      '/speaks': { page: '/speaks', name: 'speaks' },
    }
  }
}, withCSS())