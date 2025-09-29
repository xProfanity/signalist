import Header from "@/components/Header";

interface LayoutProps {
  children: Readonly<React.ReactNode>;
}

/**
 * Wraps page content with a global header and a styled container.
 *
 * @param children - Content to render inside the layout container.
 * @returns The JSX element containing a Header and a container that wraps `children`.
 */
export default function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen text-gray-400">
      <Header />
      <div className="container py-10">{children}</div>
    </main>
  );
}
