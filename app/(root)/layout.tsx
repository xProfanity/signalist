import Header from "@/components/Header";

interface LayoutProps {
  children: Readonly<React.ReactNode>;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen text-gray-400">
      <Header />
      <div className="container py-10">{children}</div>
    </main>
  );
}
