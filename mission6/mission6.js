function newitem() {
    var newinfo = new Array();

    do {
        newinfo[0] = prompt('请问你所在的城市是？', '例如：北京.通州');
        var test1 = /^([\u4e00-\u9fa5]+\.)+/.test(newinfo[0]);
        if (newinfo[0] == null) {
            break;

        }
        if (test1 == false) {
            alert("输入有误，请输入城市名字");
        }
    } while (test1 == false && newinfo[0] != null);
    if (newinfo[0] == null) {
        return;
    }

    do {
        newinfo[1] = prompt('请问你期望的薪资是？（时薪）', '例如：25');
        var test2 = /^[0-9]+$/.test(newinfo[1]);
        if (newinfo[1] == null) {
            return;
        }
        if (test2 == false) {
            alert("输入有误，请输入正常数额");
        }
    } while (test2 == false && newinfo[1] != null);
    if (newinfo[1] == null) {
        return;
    }


    var nitem = document.createElement("div");
    nitem.innerHTML = "<div class=\"item\">\n" +
        "                <div class=\"item-left\">\n" +
        "                <div class=\"timetitle gray\">服务日起</div>\n" +
        "                <div class=\"time\">2015-10-12至2015-12-12</div>\n" +
        "            <div class=\"address gray\">" + newinfo[0] + "</div>\n" +
        "                </div>\n" +
        "                <div class=\"item-right\">\n" +
        "                <div class=\"pay red\">" + newinfo[1] + "</div>\n" +
        "            <div class=\"item-in\"></div>\n" +
        "                </div>\n" +
        "                </div>";
    document.getElementsByClassName('main')[0].appendChild(nitem);
}