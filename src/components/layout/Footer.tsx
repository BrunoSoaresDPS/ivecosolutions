export function Footer() {
  return (
    <footer className="bg-muted border-t border-border py-3 sm:py-4 px-3 sm:px-6 text-center no-print">
      <p className="text-xs sm:text-sm text-muted-foreground">
        Conteúdo interno – uso corporativo
      </p>
      <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
        © {new Date().getFullYear()} IVECO. Todos os direitos reservados.
      </p>
    </footer>
  );
}
