import React, {useEffect, useState} from 'react';

export const required = value => (value ? undefined : 'Поле не может быть пустым');
export const mustBeNumber = value => (isNaN(value) || null ? 'Значение должно быть числом' : undefined);
export const validPassword = value => (/^[A-Za-z]+[0-9]|[0-9]+[A-Za-z]+$/.test(value) ? undefined : 'Поле должно содержать цифры и буквы латинского алфавита');
export const validEmail = value => (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value) ? undefined : 'Значение почты не валидно');
export const length = value => (/^.{6,64}$/.test(value) ? undefined : 'Длина поля должна быть от 6 до 64 символов');
export const minAge = min => value =>
    isNaN(value) || value >= min ? undefined : `Вам должно быть больше ${min} лет`;
export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);
