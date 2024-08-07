import * as process from 'node:process'
import { defineConfig } from 'cypress'
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset'

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'cypress',
      bundler: 'vite',
      webServerConfig: {
        reuseExistingServer: true,
      },
      webServerCommands: {
        default: 'nx run @milkdown/e2e:start',
      },
      ciWebServerCommand: 'nx run @milkdown/e2e:start',
    }),
    baseUrl: 'http://localhost:5173',
  },
  retries: process.env.CI ? 2 : 0,
})
