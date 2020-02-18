let editor = null;

(() => {
    window.onload = () => {
        editor = ace.edit('editor');
        editor.$blockScrolling = Infinity;
        editor.setFontSize(25);
        editor.getSession().setMode("ace/mode/typescript");
        editor.setTheme('ace/theme/tomorrow_night_eighties');
        editor.setValue('// write your nice golfed-code in here.');
        editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        });

        editor.addEventListener('change', () => count.update());
    };
})();
