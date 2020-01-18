import * as React from 'react';
import { storiesOf } from '@storybook/react';
import UserAvatar from './user-avatar';
import avatar from '../../../assets/avatar.jpeg';

const userWithImage = {
    name: 'John',
    image: avatar
};

const userWithoutImage = {
    name: 'John'
};

storiesOf('UI|UserAvatar', module)
    .add('with image', () => <UserAvatar user={userWithImage} />)
    .add('withou image', () => <UserAvatar user={userWithoutImage} />)
    .add('size xs with image', () => (
        <UserAvatar user={userWithImage} size="xs" />
    ))
    .add('size s with image', () => (
        <UserAvatar user={userWithImage} size="s" />
    ))
    .add('size m with image', () => (
        <UserAvatar user={userWithImage} size="m" />
    ))
    .add('size l with image', () => (
        <UserAvatar user={userWithImage} size="l" />
    ))
    .add('size xl with image', () => (
        <UserAvatar user={userWithImage} size="xl" />
    ))
    .add('size xl without image', () => (
        <UserAvatar user={userWithoutImage} size="xl" />
    ))
    .add('custom size (180x180)', () => (
        <UserAvatar
            user={userWithImage}
            sizeCircle={{ width: 180, height: 180 }}
        />
    ));
