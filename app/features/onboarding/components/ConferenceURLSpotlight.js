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
 * Conference URL Spotlight Component.
 */
class ConferenceURLSpotlight extends Component<Props, *> {
    /**
     * Initializes a new {@code ComponentURLSpotlight} instance.
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
                dialogPlacement = 'bottom center'
                target = { 'conference-url' } >
                {
                    unescape('Geben Sie den Namen der Konferenz ein, an welcher Sie teilnehmen '
                           + 'm%F6chten. Als Moderator (Sie m%FCssen sich dann anmelden) k%F6nnen '
                           + 'Sie einfach einen neuen Namen eingeben und die Konferenz er%F6ffnen. '
                           + 'Teilen Sie den Namen der Konferenz dann den anderen Teilnehmern mit.')
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

export default connect()(ConferenceURLSpotlight);

