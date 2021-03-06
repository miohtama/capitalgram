/**
 * Simple AJAX logic to call Netlify MailerLite subscription function.
 */
(function($) {

    function handleSubscription(e) {

        e.preventDefault();
        var form = $(e.target).parents("form");
        var email = form.find("input[name='email']").val();
        var url = form.attr("data-ajax-action");

        console.log("Subscribing to newsletter", url, email);

        // Simple state machine with CSS attributes
        form.find("button,input").attr("disabled", "disabled");
        form.find("input").attr("disabled", "disabled");
        form.find(".fa-spinner").show();
        form.find(".status-message").hide();

        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify({"email": email}),
            contentType: "application/json",
            timeout: 5000 // Netlify functions themselves have timeout of 10s
          }).always(cb);

        function cb(data, textStatus, xhr) {
            
            console.log("API response", data, textStatus, xhr);

            if(xhr.status == 200) {
                form.find(".status-success").fadeIn();
                form.find(".status-error").hide();
                form.find("button,input").hide();
            } else {
                if(xhr.responseText) {
                    form.find(".status-error-user").text(xhr.responseText);
                } else {
                    form.find(".status-error-user").text("Unknown error");
                }
                
                form.find(".status-error").show();                
            }

            form.find("button,input").removeAttr("disabled");
            form.find("input").removeAttr("disabled");
            form.find(".fa-spinner").hide();            
        }
        return false;
    }

    $(document).ready(function() {
        $(".form-newsletter button").click(handleSubscription);
    });

})(jQuery);