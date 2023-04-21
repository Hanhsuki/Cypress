import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth:1920,
  video: false,
  evn: {
    userName : ''
  },
  retries : 1,
  //Cách 2 để config retry
  retries: {
    runMode: 2,
    openMode: 0
  },
  //Lưu trử biến môi trường
  e2e: {
    setupNodeEvents(on, config){
      const userName = process.evn.DB_USERNAME
      const passWord = process.evn.DB_PASSWORD

      if(!passWord){
        throw new Error("missing PASSWORD environment valiable")
      }

      config.env = {userName, passWord}
      return config
    },
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*']

  },
});
