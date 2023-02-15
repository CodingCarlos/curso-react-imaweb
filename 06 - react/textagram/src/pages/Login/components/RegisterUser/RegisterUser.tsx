import React, { useRef } from "react";

interface IRegisterUserProps {
    onRegister: (data: object) => void;
}

function RegisterUser(props: IRegisterUserProps) {
    const username = useRef<HTMLInputElement>(null);
    const pic = useRef<HTMLInputElement>(null);

    function register(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        const registerData = {
            name: username.current?.value,
            pic: pic.current?.value,
        }

        props.onRegister(registerData);
    }

    return (
        <form onSubmit={register}>
            <p>
                <label htmlFor="name">User name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    ref={username}
                />
            </p>

            <p>
                <label htmlFor="pic">User photo url</label>
                <input
                    type="text"
                    name="pic"
                    id="pic"
                    ref={pic}
                />
            </p>

            <button type="submit">
                Create user
            </button>
        </form>
    )
}

export default RegisterUser;