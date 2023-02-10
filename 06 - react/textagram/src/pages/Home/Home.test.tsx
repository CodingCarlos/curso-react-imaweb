import React from "react";
import { MemoryRouter, MemoryRouter as Router } from "react-router-dom";
import { screen, render } from "@testing-library/react";
import Home from ".";
import { getPosts } from '../../services/post';


describe('Home Page', () => {
    beforeEach(() => {
        jest.mock('../../services/post', () => {
            const originalModule = jest.requireActual('../../services/post');
            return {
                __esModule: true,
                ...originalModule,
                getPosts: jest.fn(),
            }
        });
    });

    test('Llama al servicio post/getPosts', () => {
        // getPosts.toHabe(),
        render(<Home />, {wrapper: Router});
        expect(getPosts).toHaveBeenCalled();
    });
})