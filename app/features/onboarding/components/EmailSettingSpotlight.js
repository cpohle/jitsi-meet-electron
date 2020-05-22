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
 * Email Setting Spotlight Component.
 */
class EmailSettingSpotlight extends Component<Props, *> {
    /**
     * Initializes a new {@code EmailSettingSpotlight} instance.
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
                target = { 'email-setting' } >
                {
                    unescape('Die E-Mail Adresse, die Sie hier eingeben, wird benutzt, um einen '
                           + 'Avatar von gravatar.com zu holen und anzuzeigen, wenn Sie kein '
                           + 'Videobild ver%F6ffentlichen. Sie m%FCssen hier keine E-Mail Adresse '
                           + 'eingeben, wenn Sie das nicht m%F6chten, dann werden einfach Ihre '
                           + 'Initialen angezeigt.')
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

export default connect()(EmailSettingSpotlight);

