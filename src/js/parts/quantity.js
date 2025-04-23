export class Quantity {
    init() {
        this.PlusMinusQuantity();
    }

    PlusMinusQuantity() {
        $(document).ready(function () {
            const $plus = $(".plus"),
                $minus = $(".minus"),
                $num = $(".num");

            if (localStorage["num"]) {
                $num.text(localStorage.getItem("num"));
            } else {
                let a = "1";
                $num.text(a);
            }

            $plus.on("click", function () {
                let a = parseInt($num.text(), 10);
                a++;
                a = (a < 10) ? a : a.toString();
                localStorage.setItem("num", a);
                $num.text(localStorage.getItem("num"));
            });

            $minus.on("click", function () {
                let a = parseInt($num.text(), 10);
                if (a > 1) {
                    a--;
                    a = (a < 10) ? a : a.toString();
                    localStorage.setItem("num", a);
                    $num.text(localStorage.getItem("num"));
                }
            });
        });
    }
}