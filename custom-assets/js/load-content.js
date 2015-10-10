(function($){
    $(document).ready(function(){
        // Make sure the .html filename is the same as the .txt filename in content folder
        // to match up the correct content with the corresponding html template
        var url = location.pathname;
        var filename = url.split('/').pop().split('.')[0];
        
        function loadContent(file) {
            $('#content').load('../content/' + file + '.txt');
        }
        
        loadContent(filename);
    });
})(jQuery);