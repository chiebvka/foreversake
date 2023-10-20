export default function BlogLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="min-h-screen relative text-foreground  w-full bg-background flex flex-col items-center ">
        {/* Include shared UI here e.g. a header or sidebar */}
        {children}
        
      </section>
    )
  }