import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import LoginContext from "../../contexts/LoginContext";
import Topbar from ".";
import { IUsuario } from "../../interfaces";

describe('Topbar Component', () => {
    test('Renderiza bien', () => {
        render(<Router><Topbar /></Router>);
        const texto = screen.getByText('Textagram');
        expect(texto).toBeInTheDocument();
        expect(texto.getAttribute('href')).toBe('/');
    });

    test('By default, expect not to be logged', () => {
        render(<Router><Topbar /></Router>);
        // const [,link] = screen.getAllByRole('link');
        const link = screen.getByText(/Haz Login/i);
        expect(link).toBeInTheDocument();
        expect(link.getAttribute('href')).toBe('/login');
    });

    test('If explicitly logged-out, shows a login link', () => {
        render(
            <LoginContext.Provider value={[null, () => {}]}>
                <Router>
                    <Topbar />
                </Router>
            </LoginContext.Provider>
        );
        
        const link = screen.getByText(/Haz Login/i);
        expect(link).toBeInTheDocument();
        expect(link.getAttribute('href')).toBe('/login');
    });

    test('If logged, shows a link with your user name', () => {
        const fakeLoggedUser:IUsuario = {
            name: "Demo Demorado"
        }
        render(
            <LoginContext.Provider value={[fakeLoggedUser, () => {}]}>
                <Router>
                    <Topbar />
                </Router>
            </LoginContext.Provider>
        );
        const link = screen.getByText(fakeLoggedUser.name);
        expect(link).toBeInTheDocument();
        const expectedLink = `/user/${fakeLoggedUser.name}`;
        expect(link.getAttribute('href')).toBe(expectedLink);
    });
});
