/**
 * Simple AJAX logic to call Netlify MailerLite subscription function.
 */
(function($) {

    function handleSubscription(e) {

        e.preventDefault();
        var form = $(e.target).parents("form");
        var email = form.find("input[name='email']").val();

        console.log("Subscribing to newsletter", e, form, email);
        
        form.find("button,input").attr("disabled", "disabled");
        form.find("input").attr("disabled", "disabled");
        form.find(".fa-spinner").show();
        form.find(".status-message").hide();

        $.post("/newsletter", {"email": email}, cb);

        function cb(data, textStatus, xhr) {
            console.log(data, textStatus, xhr);

            if(xhr.status == 200) {
                form.find(".status-success").show();
                form.find("button,input").hide();
            } else {
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