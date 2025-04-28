export class Header {
    init() {
        this.HeaderMenu();
    }

    HeaderMenu() {
        $(document).ready(function () {
            $(".burger-menues").click(function () {
                $(this).addClass("header-active");
            });
        });
    }
}