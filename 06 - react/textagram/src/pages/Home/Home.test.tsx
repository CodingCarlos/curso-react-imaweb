import React from "react";
import { MemoryRouter, MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from '../../redux/store';
import { screen, render } from "@testing-library/react";
import Home from ".";
import { getPosts } from '../../services/post';
// import { getPosts, PostState } from '../../redux/postSlice';


// Mockea el servicio
jest.mock('../../services/post');
// jest.mock('../../redux/postSlice', () => {
//     const realModule = jest.requireActual('../../redux/postSlice');
//     return realModule;
//     // return {
//     //     ...realModule,
//     //     // getPosts: jest.fn(),
//     // };
// } );

// const setup = () => {
//     (getPosts as jest.Mock).mockImplementation(jest.fn());
// }

// Guarda una referencia al mock
const mockGetPosts = jest.mocked(getPosts, true);

describe('Home Page', () => {
    beforeEach(() => {
        // Limpia cualquier implementación (resetea el mock a su valor por defecto)
        mockGetPosts.mockClear();
        // (getPosts as jest.Mock).mockClear();
    });

    test('Llama al servicio post/getPosts', () => {
        // Define la implementación del mock
        mockGetPosts.mockImplementation(() => [{
            id: '',
            usuario: {
              name: "Paco",
              pic: "https://randomuser.me/api/portraits/lego/6.jpg"
            },
            contenido: "Hola, soy un post",
            comentarios: [
              {
                usuario: {
                  name: "Paco",
                  pic: "https://randomuser.me/api/portraits/lego/6.jpg"
                },
                comentario: "Vaya pedazo de post",
              },
            ],
          }]);

        // expect(getPosts).not.toHaveBeenCalled();
        render((
            <Provider store={store}>
                <Home />
            </Provider>
        ), {wrapper: Router});
        // expect(getPosts).toHaveBeenCalled();
    });
})