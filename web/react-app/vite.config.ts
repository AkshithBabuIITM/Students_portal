import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// @ts-ignore
import { config } from "dotenv";

config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: +process.env.PORT ?? 5001,
  },
  preview: {
    port: +process.env.PROD_PORT ?? 5000,
  },
});
