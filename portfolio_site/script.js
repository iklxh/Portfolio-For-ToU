document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.sidebar ul li a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const week = this.getAttribute('data-week');

            document.querySelectorAll('.week-content').forEach(div => div.style.display = 'none');
            document.getElementById('default-content').style.display = 'none';

            if (week === '1') {
                document.getElementById('week1').style.display = 'block';
            }
            if (week === '2') {
                document.getElementById('week2').style.display = 'block';
            }
            if (week === '3') {
                document.getElementById('week3').style.display = 'block';
            }
            if (week === '4') {
                document.getElementById('week4').style.display = 'block';
            }
        });
    });
});