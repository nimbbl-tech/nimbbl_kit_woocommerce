jQuery(document).ready(function() {
    var options = {
        "access_key": nimbbl_wc_checkout_vars.access_key,
        "order_id": nimbbl_wc_checkout_vars.order_id,
        "callback_url": nimbbl_wc_checkout_vars.callback_url,
		"redirect":true,
    };
	console.log(options);
	window.checkout = new NimbblCheckout(options);
    window.checkout.open(nimbbl_wc_checkout_vars.order_id);
});