// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// ORIGINAL config — sirf server entry. Koi spa/prerender nahi.
// Cloudflare Worker khud SSR chalata hai aur har route handle karta hai (404 issue nahi aata),
// isliye SPA/prerender ki zaroorat nahi — aur wahi crash kara rahe the.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});