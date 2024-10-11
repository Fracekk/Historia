$(function() {
    var inputs = $('.input');
    var paras = $('.description-flex-container').find('p');
    resetState();

    function resetState() {
        inputs.removeClass('active');
        paras.removeClass('active');
        inputs.first().addClass('active'); 
        paras.first().addClass('active');
    }

    // Obsługuje kliknięcia na inputy
    inputs.click(function() {
        var t = $(this),
            ind = t.index(),
            matchedPara = paras.eq(ind);
        t.add(matchedPara).addClass('active');
        inputs.not(t).removeClass('active');
        paras.not(matchedPara).removeClass('active');
    });
});
