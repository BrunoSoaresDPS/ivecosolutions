export function Footer() {
  return (
    <footer className="bg-muted border-t border-border py-4 px-6 text-center no-print">
      <p className="text-sm text-muted-foreground">
        Conteúdo interno – uso corporativo
      </p>
      <p className="text-xs text-muted-foreground mt-1">
        © {new Date().getFullYear()} IVECO. Todos os direitos reservados.
      </p>
    </footer>
  );
}
