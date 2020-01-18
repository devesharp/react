import * as React from 'react';

export interface PClickOutside {
    onClickOutside: (evt?: Event) => any;
    onClickInside?: (evt?: Event) => any;
    children: JSX.Element;
}

class ClickOutside extends React.Component<PClickOutside, any> {
    protected areaRef: React.RefObject<any>;

    constructor(props) {
        super(props);
        this.areaRef = React.createRef();
    }

    componentDidMount(): any {
        window.addEventListener('click', evt => this.handleDocumentClick(evt));
    }

    componentWillUnmount(): any {
        window.removeEventListener('click', evt =>
            this.handleDocumentClick(evt)
        );
    }

    handleDocumentClick(evt): any {
        const element = this.areaRef.current;

        if (element) {
            if (!element.contains(evt.target)) {
                this.props.onClickOutside(evt);
            } else if (this.props.onClickInside) {
                this.props.onClickInside(evt);
            }
        }
    }

    render(): any {
        return <div ref={this.areaRef}>{this.props.children}</div>;
    }
}

export default ClickOutside;
