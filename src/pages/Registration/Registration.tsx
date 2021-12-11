import React, {useCallback, useState} from 'react';
import {InputArea} from '../../components/Input/Input';
import {deleteStateFromCookie, writeStateToCookie} from '../../utils/cookies';


export const Registration = () => {
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    const onChangeEmail = useCallback((val: string) => setEmail(val), [email]);
    const onChangeToken = useCallback((val: string) => setToken(val), [token]);
    const pushToCookie = () => {
        writeStateToCookie({email, token}, 'authotization_user');
        deleteStateFromCookie('authotization_user');
    };
    return (
        <div>
            <div className='reg'>
                <div className='reg__title'>Вход</div>
                <InputArea setValue={onChangeEmail} value={email}
                           type="text" placeholder="Email"/>
                <InputArea setValue={onChangeToken} value={token}
                           type="text" placeholder="Token"/>
                {/*<InputArea type="password1" placeholder="Пароль"/>*/}
                {/*<InputArea type="password2" placeholder="Повторите пароль"/>*/}

                <button onClick={pushToCookie}>Зарегистрироваться</button>
            </div>
        </div>
    )
}