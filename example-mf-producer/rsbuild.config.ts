import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3000,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: true,
    client: { // this is necessary for HMR to work correctly
      host: 'localhost',
      port: 3000,
      protocol: 'ws',
    },
  },
  output: {
    assetPrefix: 'http://localhost:3000/',
  },
  tools: {
    rspack: {
      output: {
        // You need to set a unique value that is not equal to other applications otherwise MHR will not work
        uniqueName: 'federation_provider123',
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'federation_provider',
          exposes: {
            './button': './src/components/button.tsx',
          },
          shared: ['react', 'react-dom'],
        }),
      ],
    },
  },
});
