var status = -1;
var beauty = 0;
var tosend = 0;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("如果您需要点卷中介的话，那么请下次来找我！");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            cm.sendSimple("欢迎使用点卷中介系统\r\n说明:\r\n#r(点卷<-1500点卷/个--中介费为100点卷->#v4000463#国庆纪念币)\r\n#k#l请想好了再兑换哦!!!\r\n\r\n您当前点卷为:#r " + cm.getPlayer().getCSPoints(1) + " #k点\r\n国庆纪念币为:#r " + cm.getItemQuantity(4000463) + " #k个\r\n\r\n#b#L0#我要兑换物品#l\r\n#L1#我要兑换点卷#l");
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换.");
                cm.dispose();
            }
            if (selection == 0) {
                if (cm.getSpace(4) < 5) {
                    cm.sendOk("你的背包“其它”空间不足!请至少有5个空间以上.");
                    cm.dispose();
                } else if (cm.getPlayer().getCSPoints(1) / 1500 == 0) {
                    cm.sendNext("您的点卷不足，无法兑换国庆纪念币。");
                    status = -1;
                } else {
                    beauty = 1;
                    cm.sendGetNumber("请输入点卷兑换国庆纪念币的数量:\r\n兑换比例为 1500 : 1\r\n", 1, 1, cm.getPlayer().getCSPoints(1) / 1500);
                }
            } else if (selection == 1) {
                if (cm.getItemQuantity(4000463) == 0) {
                    cm.sendNext("您的国庆纪念币不足，无法兑换点卷。");
                    status = -1;
                } else {
                    beauty = 2;
                    cm.sendGetNumber("请输入国庆纪念币兑换点卷的数量:\r\n兑换比例为 1 : 1400\r\n", 1, 1, cm.getItemQuantity(4000463));
                }
            }
        } else if (status == 2) {
            if (beauty == 1) {
                if (cm.getSpace(4) < 5) {
                    cm.sendOk("你的背包“其它”空间不足!请至少有5个空间以上.");
                    cm.dispose();
                } else if (selection <= 0) {
                    cm.sendOk("输入的兑换数字错误.");
                    cm.dispose();
                } else if (cm.getPlayer().getCSPoints(1) >= selection * 1500) {
                    cm.gainNX( - selection * 1500);
                    cm.gainItem(4000463, selection);
                    cm.sendOk("您成功将#r " + (selection * 1500) + " #k点卷换为国庆纪念币#v4000463# x #r" + selection + " #k")
                } else {
                    cm.sendNext("您的输入的数量错误，无法兑换国庆纪念币。");
                    cm.dispose();
                }
            } else if (beauty == 2) {
                if (cm.haveItem(4000463, selection)) {
                    cm.gainItem(4000463, -selection);
                    cm.gainNX( + 1400 * selection);
                    cm.sendOk("您成功将国庆纪念币#v4000463# x #r" + selection + " #k换为#r " + (1400 * selection) + " #k点卷。");
                } else {
                    cm.sendNext("您的输入的数量错误，无法兑换点卷。");
                    cm.dispose();
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}