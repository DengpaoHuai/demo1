import { RouterProvider } from "react-router";
import router from "./router/router";
import ModalContextProvider from "./contexts/ModalProvider";
import BasketLayout from "./components/containers/BasketLayout";
import BasketContextProvider from "./contexts/BasketContextProvider";

function App() {
  return (
    <div>
      <ModalContextProvider>
        <BasketContextProvider>
          <RouterProvider router={router} />
        </BasketContextProvider>
      </ModalContextProvider>
    </div>
  );
}

export default App;
