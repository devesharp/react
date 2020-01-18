import * as React from 'react';

interface PInitials {
    name: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    dark?: boolean;
    sizeCircle?: {
        width: number;
        height: number;
    };
}

const colorList = [
    '#3ec55d',
    '#00c5d6',
    '#f15588',
    '#ffb229',
    '#8f63ff',
    '#8f63ff',
    '#00b1cd'
];

const InitialsAvatar: React.FunctionComponent<PInitials> = props => {
    const initials = props.name[0].toUpperCase();

    /**
     * Resgatar cor de acordo com nome
     */
    const colorNumber = props.name
        .split('')
        .reduce(
            (previousValue, currentValue) =>
                previousValue + currentValue.charCodeAt(0),
            0
        );
    const color = colorList[colorNumber % colorList.length];

    const style: any = {
        color
    };

    if (!props.dark) {
        style.background = `${color}24`;
    }

    /**
     * Tamanho do size
     */
    let classStyle = 'initials-letter';

    switch (props.size) {
        case 'xs':
        case 's':
        case 'm':
        case 'l':
        case 'xl':
            classStyle += ` initials-${props.size}`;
            break;
    }

    if (props.sizeCircle) {
        style.width = `${props.sizeCircle.width}px`;
        style.height = `${props.sizeCircle.height}px`;
        style.lineHeight = `${props.sizeCircle.height}px`;
        style.fontSize = `${props.sizeCircle.height / 2}px`;
    }

    return (
        <div className={classStyle} style={style}>
            {initials}
        </div>
    );
};
export default InitialsAvatar;
