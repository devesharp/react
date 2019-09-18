import * as React from "react";
import * as ReactDOM from "react-dom";

export interface PClickOutside {
    onClickOutside: (evt?: Event) => any;
    onClickInside?: (evt?: Event) => any;
    children: JSX.Element;
}
interface SClickOutside {}

export default class ClickOutside extends React.Component<PClickOutside, SClickOutside> {
    state = {};

    areaRef: any = true;

    constructor(props: PClickOutside) {
        super(props);
        // this.areaRef = React.createRef<HTMLDivElement>();
        this.handleDocumentClick;
    }

    componentDidMount() {
        window.addEventListener("click", evt => this.handleDocumentClick(evt));
    }

    componentWillUnmount() {
        window.removeEventListener("click", evt => this.handleDocumentClick(evt));
    }

    handleDocumentClick(evt) {
        const area = ReactDOM.findDOMNode(this.refs.areaRef);

        if (area) {
            if (!area.contains(evt.target)) {
                this.props.onClickOutside(evt);
            } else {
                if (this.props.onClickInside) {
                    this.props.onClickInside(evt);
                }
            }
        }
    }

    /**
     * Render
     */
    render(): JSX.Element {
        return <div ref="areaRef">{this.props.children}</div>;
    }
}
