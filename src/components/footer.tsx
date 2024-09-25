export function Footer() {
  return (
    <footer className="relative px-4 overflow-x-clip">
      <div className="absolute h-[500px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-purple-500/40 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" />
      <div className="border-t border-white/15 py-6 text-sm lg:text-lg flex flex-col items-center">
        <div className="text-white/40">
          &copy; 2024. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
