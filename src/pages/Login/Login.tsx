import React, {useCallback, useState} from 'react';
import './Login.scss';
import {InputArea} from '../../components/Input/Input';

export const Login = () => {
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    const onChangeEmail = useCallback((val: string) => setEmail(val), [email]);
    const onChangeToken = useCallback((val: string) => setToken(val), [token]);
    return (
        <div>
            <div className='login'>
                <div className='login__title'>Вход</div>
                <InputArea value={email} setValue={onChangeEmail} type="text" placeholder="Email"/>
                <InputArea value={token} setValue={onChangeToken} type="password" placeholder="Пароль"/>

                <button>Войти</button>
            </div>
        </div>
    )
}