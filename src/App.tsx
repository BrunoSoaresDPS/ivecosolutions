import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import TireSuasDuvidas from "./pages/TireSuasDuvidas";
import QTool from "./pages/QTool";
import NexProConnect from "./pages/NexProConnect";
import SSTraining from "./pages/SSTraining";
import IvecoOn from "./pages/IvecoOn";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tire-suas-duvidas" element={<TireSuasDuvidas />} />
            <Route path="/qtool" element={<QTool />} />
            <Route path="/nexpro-connect" element={<NexProConnect />} />
            <Route path="/ss-training" element={<SSTraining />} />
            <Route path="/iveco-on" element={<IvecoOn />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
