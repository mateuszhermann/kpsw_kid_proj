module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    
    {
      name: '@electron-forge/maker-dmg',
      config: {
        //background: './assets/dmg-background.png',
        format: 'ULFO'
      }
    },
    
   
  ],
};
