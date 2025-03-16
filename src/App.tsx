import React from "react";
import { FavoritesProvider } from "./context/FavoritesContext";
import Dashboard from "./Dashboard";
import Layout from "./layout";

const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </FavoritesProvider>
  );
};

export default App;

