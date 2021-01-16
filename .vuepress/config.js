module.exports = {
 title: 'Díra v dubu',
 description: '',

 themeConfig: {
   sidebar: [
     './uvod/',
     '/mapa/',
     './prehled-dobrodruzstvi/',
     './nahodne-udalosti/',
     './popis-oblasti/',
     './rozsireni-jeskyne/'
   ]
 },
 plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'G-5YV7F086QQ' // UA-00000000-0
      }
    ]
  ]
}
