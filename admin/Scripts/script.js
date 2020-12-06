function bs_input_file() {
    $(".btn-upload-img").click(function () {
        $('button.btn-choose').click();
    });

    $(".upload-container .close").click(function () {
        $('.upload-container img').attr('src', 'images/icons/no-img.png');
        $('.input-ghost').val('');
    });

    $(".input-file").before(
        function () {
            if (!$(this).prev().hasClass('input-ghost')) {
                var element = $("<input type='file' class='input-ghost' style='visibility:hidden; height:0'>");
                element.attr("name", $(this).attr("name"));
                element.change(function () {
                    element.next(element).find('input').val((element.val()).split('\\').pop());
                });
                $(this).find("button.btn-choose").click(function () {
                    element.click();
                });
                $(this).find("button.btn-reset").click(function () {
                    element.val(null);
                    $(this).parents(".input-file").find('input').val('');
                });
                $(this).find('input').css("cursor", "pointer");
                $(this).find('input').mousedown(function () {
                    $(this).parents('.input-file').prev().click();
                    return false;
                });
                return element;
            }
        }
    );

    $(".input-ghost").change(function () {
        readURL(this);
    });

}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.upload-container img').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}
function autoYoutube() {

    $(".youtube-url").on("input", function () {
        var value = $(this).val();
        var id = youtubeUrlToID(value);

        var iframe = $("#youtube-embed iframe");
        iframe.attr("src", "https://www.youtube.com/embed/" + id)

        var img = $(".youtube-thumb");
        img.attr("src", "https://img.youtube.com/vi/#/0.jpg".replace("#",id));
    })

}

function youtubeUrlToID(url) {
    var newval = '';

    if (newval = url.match(/(\?|&)v=([^&#]+)/)) {

        return newval.pop();

    } else if (newval = url.match(/(\.be\/)+([^\/]+)/)) {

        return newval.pop();

    } else if (newval = url.match(/(\embed\/)+([^\/]+)/)) {

        return newval.pop().replace('?rel=0', '');

    }

}
function createButtonForPictureList() {
    //tìm tất cả thẻ .card hiện có
    $("#picture-list .card").append(" <a href='#' class='btn btn-success btn-sm'><i class='fa fa-picture-o'></i>Thay hình</a>");

    // lọc theo từng card thêm vào 1 đoạn html nút nhấn
}

$(function () {
    $("#toogle-button").click(function () {
        //Kiểm tra trạng thái nút bấm
        if ($(this).hasClass("toogle-button close")) {
            $(this).removeClass("close");
            $("#main-menu").removeClass("col-lg-1").addClass("col-lg-4");
            $("#main-content").removeClass("col-lg-11").addClass("col-lg-8");
            $("#main-menu .menu .collapse .card-body").show();
            $("#main-menu .menu .card-header button:nth-child(2)").show();
            $("#main-menu .menu .card-header button:nth-child(1) i").removeClass("fa-3x");
            $("#main-menu .menu .card-header button:nth-child(1)").removeClass("fa-10px");
            $("#main-menu .account-info div").show();
            $("#main-menu .welcome-box span").show();
            $("#main-menu .welcome-box i").removeClass("center-align");
            $("#main-menu .footer .btn").show();
        }
        else {
            $(this).addClass("close");
            $("#main-menu").removeClass("col-lg-4").addClass("col-lg-1");
            $("#main-content").removeClass("col-lg-8").addClass("col-lg-11");
            $("#main-menu .menu .collapse .card-body").hide();
            $("#main-menu .menu .card-header button:nth-child(2)").hide();
            $("#main-menu .menu .card-header button:nth-child(1) i").addClass("fa-3x");
            $("#main-menu .menu .card-header button:nth-child(1)").addClass("fa-10px");
            $("#main-menu .account-info div").hide();
            $("#main-menu .welcome-box span").hide();
            $("#main-menu .welcome-box i").addClass("center-align");
            $("#main-menu .footer .btn").hide();
            $("#main-menu .footer .btn:last-child").show();
        }
    });
    //input_ArticelEdit
    bs_input_file();
    autoYoutube();
    createButtonForPictureList();
    $(".btnEdit").click(function () {
        $(this).parents("tr").addClass("d-none");
        $(this).parents("tr").next().removeClass("d-none");
        $(this).parents("tr").next().find(".btnCancel").addClass("show")
    });

    $(".btnCancel.show").click(function () {
        $(this).parents("tr").addClass("d-none");
        $(this).parents("tr").prev().removeClass("d-none");
        $(this).removeClass("show");
    });
});
