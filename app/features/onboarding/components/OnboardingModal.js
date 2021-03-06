// @flow

import { Modal } from '@atlaskit/onboarding';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import OnboardingModalImage from '../../../images/onboarding.png';

import config from '../../config';

import { skipOnboarding, continueOnboarding } from '../actions';

type Props = {

    /**
     * Redux dispatch.
     */
    dispatch: Dispatch<*>;
};

/**
 * Onboarding Modal Component.
 */
class OnboardingModal extends Component<Props, *> {
    /**
     * Initializes a new {@code OnboardingModal} instance.
     *
     * @inheritdoc
     */
    constructor(props: Props) {
        super(props);

        // Bind event handlers.
        this._skip = this._skip.bind(this);
        this._next = this._next.bind(this);
    }

    /**
     * Render function of component.
     *
     * @returns {ReactElement}
     */
    render() {
        return (
            <Modal
                actions = { [
                    {
                        onClick: this._next,
                        text: 'Tour starten'
                    },
                    {
                        onClick: this._skip,
                        text: unescape('%DCberspringen')
                    }
                ] }
                heading = { `Willkommen zum ${config.appName}` }
                image = { OnboardingModalImage } >
                {
                    unescape('Sehen Sie sich die wichtigsten Funktionen in einer kleinen Tour durch die App an!')
                }
            </Modal>
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

    _skip: (*) => void;

    /**
     * Skips all the onboardings.
     *
     * @returns {void}
     */
    _skip() {
        this.props.dispatch(skipOnboarding());
    }

}

export default connect()(OnboardingModal);
