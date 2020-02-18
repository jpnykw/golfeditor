(() => {
    const update = () => {
        if (editor !== null) {
            document.querySelector('#count').innerText =   editor.getValue().length;
        }
        requestAnimationFrame(update);
    };

    update();
})();
