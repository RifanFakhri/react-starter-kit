import { BrowserRouter } from "react-router-dom";
import QueryClientProvider from "@/app/providers/QueryClientProvider";
import { AuthProvider } from "@/app/providers/AuthProvider";
import AppRouter from "@/app/router";

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;