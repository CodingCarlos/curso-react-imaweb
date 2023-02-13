import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import PostList from ".";
import Post from "../Post";
import { IPost } from "../../interfaces";
import { getPosts } from "../../services/post-mock";

const dummyPostList: IPost[] = getPosts();

// interface IMockPost {
//     post: IPost;
//     showComments?: boolean;
// }
// function MockPost(props: IMockPost) {
    
//     return (
//         <div>MOCK_POST</div>
//     )
// }

// jest.mock('../Post')

describe('PostList Component', () => {
    test('Renders a list of posts', () => {
        const result = render(
            <PostList list={dummyPostList} />
        , { wrapper: Router });

        // const elements = screen.getAllByText('MOCK_POST');
        const elements = result.container.querySelectorAll('body > div > *')
        expect(elements.length).toBe(dummyPostList.length);
    });

    test('If empty, does not render anything', () => {
        const result = render(
            <PostList list={[]} />
        , { wrapper: Router });

        // b) Contar elementos "primer nivel"
        const elements = result.container.querySelectorAll('body > div > *')
        expect(elements.length).toBe(0);
    });

    // test('Sends post prop to "Post" component', () => {
    //     let passedPostProp = null;

    //     Post.mockImplementation(function MockPost(props: IMockPost) {
    //         passedPostProp = props.post;    
    //         return (
    //             <div>MOCK_POST</div>
    //         )
    //     })

    //     const result = render(
    //         <HomeContext.Provider value={[[ dummyPostList[0] ], () => {}]}>
    //             <PostList list={dummyPostList} />
    //         </HomeContext.Provider>
    //     , { wrapper: Router });

    //     expect(passedPostProp).toBe(dummyPostList[0]);
    // })
});