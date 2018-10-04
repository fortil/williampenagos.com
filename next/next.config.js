module.exports = {
  exportPathMap: function (defaultPathMap) {
    return {
      '/': { page: '/', name: 'about' },
      '/experience': { page: '/experience', name: 'experience' },
      '/speaks': { page: '/speaks', name: 'speaks' },
    }
  }
}