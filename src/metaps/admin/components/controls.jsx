import { __ } from '@wordpress/i18n';
import {
    TextControl,
    CheckboxControl,
} from '@wordpress/components';

const PrefixOrderTextControl = ( { value, onChange } ) => {
    return (
        <TextControl
            label={ __( 'Prefix Order', 'metaps-for-woocommerce' ) }
            className={ "prefix_order_text" }
			onChange={ onChange }
            value={ value }
            help={ __( 'Please input Word for prefix of Order Number and Customer ID. Alphabet only.', 'metaps-for-woocommerce' ) }
        />
    );
};

const CreditCardCheckControl = ( { value, onChange } ) => {
    return (
        <CheckboxControl
            label={ __( 'Credit Card', 'metaps-for-woocommerce' ) }
            help={ __( 'Please check it if you want to use the payment method of %s.', 'metaps-for-woocommerce' ).replace( '%s', __( 'Credit Card', 'metaps-for-woocommerce' ) ) }
            className={ "credit_card_check" }
            checked={ value }
            onChange={ onChange }
        />
    );
};

const CreditCardTokenCheckControl = ( { value, onChange } ) => {
    return (
        <CheckboxControl
            label={ __( 'Credit Card with Token', 'metaps-for-woocommerce' ) }
            help={ __( 'Please check it if you want to use the payment method of %s.', 'metaps-for-woocommerce' ).replace( '%s', __( 'Credit Card with Token', 'metaps-for-woocommerce' ) ) }
            className={ "credit_card_token_check" }
            checked={ value }
            onChange={ onChange }
        />
    );
};

const ConveniencePaymentsCheckControl = ( { value, onChange } ) => {
    return (
        <CheckboxControl
            label={ __( 'Convenience Payments', 'metaps-for-woocommerce' ) }
            help={ __( 'Please check it if you want to use the payment method of %s.', 'metaps-for-woocommerce' ).replace( '%s', __( 'Convenience Payments', 'metaps-for-woocommerce' ) ) }
            className={ "convenience_payments_check" }
            checked={ value }
            onChange={ onChange }
        />
    );
};

const PayEasyPaymentCheckControl = ( { value, onChange } ) => {
    return (
        <CheckboxControl
            label={ __( 'Pay-Easy Payment', 'metaps-for-woocommerce' ) }
            help={ __( 'Please check it if you want to use the payment method of %s.', 'metaps-for-woocommerce' ).replace( '%s', __( 'Pay-Easy Payment', 'metaps-for-woocommerce' ) ) }
            className={ "pay_easy_payment_check" }
            checked={ value }
            onChange={ onChange }
        />
    );
};

export {
    PrefixOrderTextControl,
    CreditCardCheckControl,
    CreditCardTokenCheckControl,
    ConveniencePaymentsCheckControl,
    PayEasyPaymentCheckControl,
};
