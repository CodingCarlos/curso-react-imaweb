import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import UserPicName from ".";
import { IUsuario } from "../../interfaces";

const demoUsuario: IUsuario = {
    name: "Demo Demington",
    pic: "https://thispersondoesnotexist.com/image"
}

describe('UserPicName Component', () => {
    describe('Renderiza bien', () => {
        test('El nombre de usuario', () => {
            render(<Router><UserPicName usuario={demoUsuario} /></Router>);
            const nameElement = screen.getByText(demoUsuario.name);
            expect(nameElement).toBeInTheDocument();
        });
    
        test('La foto está bien', () => {
            render(<Router><UserPicName usuario={demoUsuario} /></Router>);
            const image = screen.getByRole('img');
            expect(image).toBeInTheDocument();
            expect(image.getAttribute('src')).toBe(demoUsuario.pic);
        });
    
        test('El link lleva al perfil', () => {
            render(<Router><UserPicName usuario={demoUsuario} /></Router>);
            const link = screen.getByRole('link');
            expect(link).toBeInTheDocument();
            const expectedLink = `/user/${demoUsuario.name}`;
            expect(link.getAttribute('href')).toBe(expectedLink);
        });
    });

    describe('La propiedad "big"', () => {
        test('Por defecto (sin prop big) NO tiene clase modificadora', () => {
            const result = render(<Router><UserPicName usuario={demoUsuario}/></Router>)
            const elemento = result.container.querySelector('.user-pic-name--big');
            expect(elemento).toBe(null);
        });

        test('Con la prop big tiene clase modificadora', () => {
            const result = render(<Router><UserPicName big usuario={demoUsuario}/></Router>)
            const elemento = result.container.querySelector('.user-pic-name--big');
            expect(elemento).toBeDefined();
            expect(elemento).not.toBe(null);
        });
    })
});
