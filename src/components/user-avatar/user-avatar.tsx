import * as React from 'react';
import InitialsAvatar from '../initials-avatar/initials-avatar';

interface PUserAvatar {
    user: {
        name: string;
        image?: string;
    };
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    sizeCircle?: {
        width: number;
        height: number;
    };
}

const UserAvatar: React.FunctionComponent<PUserAvatar> = props => {
    const style: any = {};

    /**
     * Tamanho do size
     */
    let classStyle = 'ds-user-avatar';

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
    }

    const { size } = props;
    const { name, image } = props.user;

    return image ? (
        <div className={classStyle} style={style}>
            <img src={image} />
        </div>
    ) : (
        <InitialsAvatar
            name={name}
            dark
            size={size}
            sizeCircle={props.sizeCircle}
        />
    );
};

export default UserAvatar;
