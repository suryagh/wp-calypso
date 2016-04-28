import React from 'react';

/**
 * Internal dependencies
 */
import FormTextInput from 'components/forms/form-text-input';
import Gridicon from 'components/gridicon';

export default React.createClass( {
	displayName: 'JetpackConnectExampleConnect',

	render() {
		return (
			<div className="jetpack-connect__example">
				<div className="jetpack-connect__browser-chrome jetpack-connect__site-url-input-container">
					<div className="jetpack-connect__browser-chrome-dot"></div>
					<div className="jetpack-connect__browser-chrome-dot"></div>
					<div className="jetpack-connect__browser-chrome-dot"></div>

					<div className="site-address-container">
						<Gridicon
							size={ 24 }
							icon="globe" />
						<FormTextInput
							className="jetpack-connect__browser-chrome-url"
							disabled="true"
							placeholder={ this.translate( 'make this the site url' ) } />
					</div>

				</div>
				//<img src="" />
			</div>
		);
	}
} );
