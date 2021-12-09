import React from 'react';
import './Login.scss';
import {InputArea} from '../../components/Input/Input';

export const Login = () => {
    return (
        <div>
            <div className='login'>
                <div className='login__title'>Вход</div>
                <InputArea type="text" placeholder="Email"/>
                <InputArea type="password" placeholder="Пароль"/>

                <button>Войти</button>
            </div>
        </div>
    )
}