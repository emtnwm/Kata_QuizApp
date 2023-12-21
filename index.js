playButton = e => {
    const qAmount = document.getElementById('questionAmount').value;
    localStorage.setItem('questionAmount', qAmount);
};