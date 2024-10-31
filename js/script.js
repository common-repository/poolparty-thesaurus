jQuery(document).ready(function ($) {
    if (typeof(pp_thesaurus_suggest_url) == "string") {
        $("input.pp_thesaurus_input_term").each(function () {
            $(this).autocomplete(pp_thesaurus_suggest_url, {
                minChars: 2,
                matchContains: true,
                cacheLength: 10,
                max: 15,
                scroll: false
            }).result(function (event, item) {
                location.href = item[1];
            });
        });
    }
});
