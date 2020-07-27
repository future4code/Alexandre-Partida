import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import App from "./App";


test ("Testa botão para adicionar Post", () => {
    const {getByText, getByPlaceholderText, getByTestId} = render(<App/>);

    const inputPlace = getByPlaceholderText("Novo post");

    const addBotton = getByText(/Adicionar/i);

    fireEvent.change(inputPlace, {target: {value: "bananinha"}});

    fireEvent.click(addBotton);

    expect(getByTestId("postcard")).toBeInTheDocument();

});

test ("Usuário clica para curtir um post", () => {

    const {getByText, getByTestId} = render(<App/>);

    const buttonCurtir = getByTestId("curtir");

    fireEvent.click(buttonCurtir);

    expect(getByTestId("like-button")).toBeInTheDocument();

})