import * as React from 'react';

export interface PLogin {}
interface SLogin {}

export default class Login extends React.Component<PLogin, SLogin> {
  state = {}

  constructor(props: PLogin) {
    super(props);
  }

  /**
   * Render
   */
  render(): JSX.Element {
    return (<div className={'login'}></div>);
  }
}
