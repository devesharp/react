import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ClickOutside from './click-outside';

storiesOf('ClickOutside', module).add('default', () => (
    <ClickOutside
        onClickOutside={action('click Outside')}
        onClickInside={action('click Inside')}
    >
        <div
            style={{
                backgroundColor: 'rgb(255, 255, 255)',
                display: 'inline-block',
                borderColor: 'rgb(218, 218, 218)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: '2px',
                padding: '5px 20px',
                fontWeight: 600,
                margin: '10px',
                color: '#6b6b6b',
                cursor: 'pointer'
            }}
        >
            Button
        </div>
    </ClickOutside>
));
