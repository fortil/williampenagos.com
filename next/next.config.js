const withCSS = require('@zeit/next-css')
module.exports = Object.assign({
  exportPathMap: function (defaultPathMap) {
    return {
      '/': { page: '/', name: 'about' },
      '/experience': { page: '/experience', name: 'experience' },
      '/presentations': { page: '/presentations', name: 'presentations' },
      '/skills': { page: '/skills', name: 'skills' },
    }
  }
}, withCSS())