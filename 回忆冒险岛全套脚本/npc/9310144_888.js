
var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";////美化!
var ttt7 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var ttt6 ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

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
		var text = "收集字母#v3991011##v3991004##v3994083##v3994073##v3994079#即可兑换一个开心转盘箱子。任何怪物都有可能爆出字母，加油哦！\r\n";
		text += "#b#L1#我要兑换#l";
		cm.sendSimple(text);
		//cm.dispose();
	} else if (status == 1) {
		cm.sendGetNumber("请输入你想要兑换的数量：", 0, 0, 999999);
	} else if (status == 2) {
		var num = selection;
		if (cm.haveItem(3991011, num) && cm.haveItem(3991004, num) && cm.haveItem(3994083, num) && cm.haveItem(3994073, num) &&  cm.haveItem(3994079, num)) {
			if (cm.getSpace(2) >= 1) {
				cm.gainItem(2432353, num);
				cm.gainItem(3991011, -num);
				cm.gainItem(3991004, -num);
				cm.gainItem(3994083, -num);
				cm.gainItem(3994073, -num);
				cm.gainItem(3994079, -num);
				cm.sendOk("成功兑换了"+num+"个#b#v2432353##t2432353##k。");
				cm.dispose();
			} else {
				cm.sendOk("您的消耗栏空间不足，无法兑换");
				cm.dispose();
			}
		} else {
			cm.sendOk("您没有足够的字母！无法完成兑换");
			cm.dispose(); 
		}
	}
}
