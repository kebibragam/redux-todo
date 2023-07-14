import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/app.css";
import TodoApp from "@/components/TodoApp";
import { Provider } from "react-redux";
import { reducer } from '@/reducer';
import { configureStore } from "@reduxjs/toolkit";

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);


const store = configureStore({reducer: reducer});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
