var status = 0;
var tz9 = "#fEffect/CharacterEff/1112902/0/0#";  //蓝心

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "            #b"+tz9+"欢迎光临怪物公园兑换中心"+tz9+"\r\n"+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+"\r\n              #b#L4##v4001513##kx30 #r兑换 #v4001522##l\r\n              #b#L3##v4001515##kx20 #r兑换 #v4001522##l\r\n              #b#L0##v4001521##kx10 #r兑换 #v4001522##l\r\n              #L1##v4310020##kx1 #r兑换 #g1000点卷#l\r\n"+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+""+tz9+"\r\n#k#eP:所有碎片可在匠人街采药挖矿获得。———爱你哟！";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.haveItem(4001521,10)) {
		cm.gainItem(4001521, -10);
                cm.gainItem(4001522,1);
                cm.sendOk("兑换成功\r\n猫岛祝你游戏愉快!");
            } else {
                cm.sendOk("亲,你没有达到兑换要求,我不能与你兑换");
            }
            break;
        case 1:
            if (cm.haveItem(4310020,1)) {
		cm.gainItem(4310020, -1);
                cm.gainNX( + 1000);
                cm.sendOk("兑换成功\r\n猫岛祝你游戏愉快!");
            } else {
                cm.sendOk("亲,你没有达到兑换要求,我不能与你兑换");
            }
            break;
			case 3:
            if (cm.haveItem(4001515,20)) {
		cm.gainItem(4001515, -20);
                cm.gainItem(4001522,1);
                cm.sendOk("兑换成功\r\n猫岛祝你游戏愉快!");
            } else {
                cm.sendOk("亲,你没有达到兑换要求,我不能与你兑换");
            }
            break;
			case 4:
            if (cm.haveItem(4001513,30)) {
		cm.gainItem(4001513, -30);
                cm.gainItem(4001522,1);
                cm.sendOk("兑换成功\r\n猫岛祝你游戏愉快!");
            } else {
                cm.sendOk("亲,你没有达到兑换要求,我不能与你兑换");
            }
            break;
        }
        cm.dispose();
    }
}