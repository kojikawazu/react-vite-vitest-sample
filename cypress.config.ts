import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Nodeイベントを設定する
    },
    baseUrl: "http://localhost:5173", // アプリケーションが実行されているURLに変更してください
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // テストファイルのパターン
    supportFile: false,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
