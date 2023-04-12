$(document).ready(function() {
    $('.box').click(function(event) {
        if(event.target !== this) {
            return;
        }
        let emptyBox = $('.empty');
        let emptyBoxId = emptyBox.attr('id');
        let emptyRowIndex = emptyBoxId.charAt(1);
        let emptyColIndex = emptyBoxId.charAt(4);

        let clickedBox = $(this);
        let clickedBoxId = clickedBox.attr('id');
        let clickedRowIndex = clickedBoxId.charAt(1);
        let clickedColIndex = clickedBoxId.charAt(4);

        if(Math.abs(clickedColIndex - emptyColIndex) + Math.abs(clickedRowIndex - emptyRowIndex) == 1) {
            clickedBox.addClass('empty');
            emptyBox.removeClass('empty');

            emptyBox.html(clickedBox.html());
            clickedBox.text('');
        }
    });
});