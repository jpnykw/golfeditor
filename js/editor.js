let editor = null;

(() => {
    const keyBuffer = [];

    window.onload = () => {
        editor = ace.edit('editor');
        editor.$blockScrolling = Infinity;
        editor.setFontSize(15);
        editor.getSession().setMode("ace/mode/typescript");
        editor.setTheme('ace/theme/tomorrow_night_eighties');
        editor.setValue('// write your nice golfed-code in here.');
        editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        });

        const editorElement = document.getElementById('editor');

        editorElement.addEventListener('keydown', (event) => {
            keyBuffer[event.keyCode] = true;

            if (keyBuffer[13] && (keyBuffer[17] || keyBuffer[91])) {
                keyBuffer[13] = false;
                keyBuffer[17] = false;
                keyBuffer[91] = false;
                render(editor.getValue());
            }
        });

        editorElement.addEventListener('keyup', (event) => {
            keyBuffer[event.keyCode] = false;
        });
    };
})();
