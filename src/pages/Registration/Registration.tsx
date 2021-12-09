import React from 'react';
import {InputArea} from '../../components/Input/Input';
import {writeStateToCookie} from '../../utils/cookies';


const pushToCookie = () => {
    writeStateToCookie('3214124djasfasjfsatw421', 'token')
}

export const Registration = () => {
    return (
        <div>
            <div className='reg'>
                <div className='reg__title'>Вход</div>
                <InputArea type="text" placeholder="Email"/>
                <InputArea type="password1" placeholder="Пароль"/>
                <InputArea type="password2" placeholder="Повторите пароль"/>

                <button onClick={pushToCookie}>Зарегистрироваться</button>
            </div>
        </div>
    )
}