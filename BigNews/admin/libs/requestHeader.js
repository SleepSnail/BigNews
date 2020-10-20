$(function () {
    $.ajaxSetup({
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', localStorage.getItem('token'));

        },
        error: function (xhr,status,err) {
            if (xhr.status == 404) {
                location.href = './404.html';
            } else if (xhr.status == 403) {
                alert('请先登录');
                location.href = './login.html';
            }
        }

    });
});