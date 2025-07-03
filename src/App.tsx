import { RouterProvider } from "react-router";
import router from "./router/router";
import ModalContextProvider from "./contexts/ModalProvider";
import BasketLayout from "./components/containers/BasketLayout";

function App() {
  return (
    <div>
      <ModalContextProvider>
        <BasketLayout>
          <RouterProvider router={router} />
        </BasketLayout>

      </ModalContextProvider>
    </div>
  );
}

export default App;
