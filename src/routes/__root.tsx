import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import appCss from "../styles.css?url";

// ============================================
// NOT FOUND COMPONENT
// ============================================
function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center border border-gold/40 px-6 py-2.5 text-xs tracking-[0.3em] uppercase text-gold hover:bg-gold hover:text-accent-foreground transition-all">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

// ============================================
// ERROR COMPONENT
// ============================================
function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-xl text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center border border-gold/40 px-6 py-2.5 text-xs tracking-[0.3em] uppercase text-gold hover:bg-gold hover:text-accent-foreground transition-all"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center border border-border px-6 py-2.5 text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

// ============================================
// ROOT SHELL — HTML document shell (server renders this)
// ============================================
function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

// ============================================
// ROOT COMPONENT — The actual app wrapper (client hydrates this)
// ============================================
function RootComponent() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <Toaster position="bottom-right" />
      </div>
    </QueryClientProvider>
  );
}

// ============================================
// ROUTE EXPORT
// ============================================
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sahiba Vij — Every Sparkle has Its Own Story" },
      { name: "description", content: "Story-driven luxury Indian jewellery in micron gold polish — wearable heirlooms inspired by Bajirao Mastani and Heeramandi." },
      { property: "og:title", content: "Sahiba Vij — Luxury Indian Jewellery" },
      { property: "og:description", content: "Story-driven jewellery in micron gold polish. Every sparkle has its own story." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});