/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, useEffect } from 'react';
import { Text, PrimaryButton, MessageBarType, MessageBar } from '@fluentui/react';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { useAppDispatch } from 'app/hooks';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useGetAllUsersQuery } from '../gallery/services/galleryApi';
import { ControlledTextField } from './ControlledTextField';
import { User } from '../../types';

type AuthenticateRequest = {
    username: string;
    password: string;
};

const schema: yup.SchemaOf<AuthenticateRequest> = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is field'),
});

export default function Login() {
    const dispatch = useAppDispatch();
    const cookies = new Cookies();
    const users = useGetAllUsersQuery();
    const { handleSubmit, control } = useForm<AuthenticateRequest>({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        resolver: yupResolver(schema),
    });
    const [error, setError] = useState(false);
    const history = useHistory();

    const onSubmit = () => {
        handleSubmit(
            data => {
                const userlogged: User[] | undefined = users.data?.filter(
                    item =>
                        item.username === data.username && item.address.zipcode === data.password,
                );
                if (userlogged?.length === 0) {
                    setError(true);
                } else {
                    setError(false);
                    cookies.set(
                        'name',
                        `${userlogged && userlogged[0] ? userlogged[0].name : ''}`,
                        {
                            path: '/',
                        },
                    );
                    // globalUser = userlogged && userlogged[0] && userlogged[0].name;
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    history.push(`/gallery/${userlogged && userlogged[0] && userlogged[0].id}`);
                }
            },
            err => {
                console.log(err);
            },
        )();
    };

    return (
        <div className="login-container">
            <Text variant="xxLarge" className="font-extrabold">
                Sign in
            </Text>
            {error && (
                <MessageBar messageBarType={MessageBarType.error}>
                    Nombre de usuario o contraseña incorrecta.
                </MessageBar>
            )}
            <ControlledTextField
                required
                placeholder="Username"
                underlined
                className="mt-2 mb-2"
                control={control}
                name="username"
                disabled={users.isLoading}
            />
            <ControlledTextField
                required
                placeholder="Password"
                type="password"
                underlined
                canRevealPassword
                revealPasswordAriaLabel="Show password"
                className="mb-4"
                control={control}
                name="password"
                disabled={users.isLoading}
            />
            <div className="flex justify-end">
                <PrimaryButton type="submit" disabled={users.isLoading} onClick={onSubmit}>
                    Next
                </PrimaryButton>
            </div>
        </div>
    );
}
