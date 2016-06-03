/**
 * External dependencies
 */
import React from 'react';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import Notice from 'components/notice';
import Button from 'components/button';
import observe from 'lib/mixins/data-observe';
import { dismissNotice } from 'state/push-notifications/actions';
import {
	isApiReady,
	isAuthorized,
	isEnabled,
	isNoticeDismissed
} from 'state/push-notifications/selectors';

const PushNotificationPrompt = React.createClass( {
	displayName: 'PushNotificationPrompt',

	mixins: [ observe( 'user' ) ],

	propTypes: {
		user: React.PropTypes.object,
		section: React.PropTypes.oneOfType( [
			React.PropTypes.object,
			React.PropTypes.bool
		] ),
		isLoading: React.PropTypes.bool
	},

	pushUnsubscribedNotice: function() {
		const noticeText = (
			<div>
				<p>
					<strong>{ this.translate( 'Get notifications on your desktop!' ) }</strong> { this.translate( 'Instantly see your likes, comments, and more—even when you don\'t have WordPress.com open in your browser.' ) }
				</p>
				<p>
					{ this.translate(
						'{{enableButton}}Enable Browser Notifications{{/enableButton}}', {
							components: {
								enableButton: <Button className={ 'push-notification__prompt-enable' } onClick={ this.props.enable } />
							} }
					) }
				</p>
			</div>
		);

		return <Notice className="push-notification__notice" text={ noticeText } icon="bell" onDismissClick={ this.dismissNotice } />;
	},

	render: function() {
		if ( ! this.props.isApiReady ) {
			return null;
		}
		const user = this.props.user.get();

		if ( ! user || ! user.email_verified || this.props.isNoticeDismissed || this.props.isEnabled ) {
			return null;
		}

		if ( ! this.props.section || this.props.isLoading || 'notification-settings' === this.props.section.name || 'editor' === this.props.section.group ) {
			return null;
		}

		if ( ! ( this.props.isAuthorized && this.props.isEnabled && this.props.isNoticeDismissed ) ) {
			return null;
		}

		return this.pushUnsubscribedNotice();
	}
} );

export default connect(
	( state ) => {
		return {
			isApiReady: isApiReady( state ),
			isAuthorized: isAuthorized( state ),
			isEnabled: isEnabled( state ),
			isNoticeDismissed: isNoticeDismissed( state )
		};
	},
	{
		dismissNotice
	}
)( PushNotificationPrompt );
