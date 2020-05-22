// @flow

import { Spotlight } from '@atlaskit/onboarding';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import { continueOnboarding } from '../actions';

type Props = {

    /**
     * Redux dispatch.
     */
    dispatch: Dispatch<*>;
};

/**
 * Server Setting Spotlight Component.
 */
class ServerSettingSpotlight extends Component<Props, *> {
    /**
     * Initializes a new {@code ServerSettingSpotlight} instance.
     *
     * @inheritdoc
     */
    constructor(props: Props) {
        super(props);

        this._next = this._next.bind(this);
    }

    /**
     * Render function of component.
     *
     * @returns {ReactElement}
     */
    render() {
        return (
            <Spotlight
                actions = { [
                    {
                        onClick: this._next,
                        text: 'Weiter'
                    }
                ] }
                dialogPlacement = 'left top'
                target = { 'server-setting' } >
                {
                    unescape('Hier geben Sie den Namen des Servers ein, den Sie verwenden '
                           + 'm%F6chten. Unser Server konferenz.pohle.de ist bereits '
                           + 'voreingestellt.')
                }
            </Spotlight>
        );
    }

    _next: (*) => void;

    /**
     * Close the spotlight component.
     *
     * @returns {void}
     */
    _next() {
        this.props.dispatch(continueOnboarding());
    }
}

export default connect()(ServerSettingSpotlight);

