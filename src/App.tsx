import { RouterProvider } from "react-router";
import router from "./router/router";
import ModalContextProvider from "./contexts/ModalProvider";
import BasketLayout from "./components/containers/BasketLayout";
import BasketContextProvider from "./contexts/BasketContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
      refetchOnWindowFocus: true
    }
  }
})

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ModalContextProvider>
          <BasketContextProvider>
            <RouterProvider router={router} />
          </BasketContextProvider>
        </ModalContextProvider>
        <ToastContainer />
      </QueryClientProvider>

    </div>
  );
}

export default App;
