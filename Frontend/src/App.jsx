import "./features/shared/global.scss";
import { AuthProvider } from "./features/auth/auth.context";
import { router } from "./app.routes.jsx";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
};

export default App;
