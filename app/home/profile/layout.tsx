export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <div className="flex flex-col mx-auto text-center min-h-screen w-full bg-profile bg-cover bg-no-repeat bg-center py-4 px-8 sm:px-20">
      {children}
    </div>
    )
  }