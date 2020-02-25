const $navigation = document.getElementById('navigation');

console.log($navigation);
$navigation.querySelector('.navigation-toggle').addEventListener('click', () => {
    $navigation.querySelector('.navigation-content').classList.toggle('active');
    $navigation.querySelector('.x').classList.toggle('active');
    $navigation.querySelector('.y').classList.toggle('active');
    $navigation.querySelector('.z').classList.toggle('active');
});