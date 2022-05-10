import { ThemeProvider } from "aiq-design-system";
import { QueryClient, QueryClientProvider } from "react-query";
import { I18nextProvider } from "react-i18next";
import theme from "../theme/aiqfome";
import i18n from "./i18n";

const queryClient = new QueryClient({
  defaultConfig: {
    queries: {
      retry: false,
      staleTime: 50,
      refetchOnMount: false,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    },
  },
});

export function Provider({ children }) {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme={theme}>{children}</ThemeProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
}
