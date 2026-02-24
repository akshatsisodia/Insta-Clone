import "./features/shared/global.scss";
import { AuthProvider } from "./features/auth/auth.context";
import { router } from "./app.routes.jsx";
import { RouterProvider } from "react-router-dom";
import { PostContextProvider } from "./features/post/PostContext.jsx";

const App = () => {
  return (
    <PostContextProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </PostContextProvider>
  );
};

export default App;
