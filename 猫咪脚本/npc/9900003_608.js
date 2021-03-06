
var status = -1;
var text;
var sel;
var time;
var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ca = java.util.Calendar.getInstance();
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒

// 每个礼包所需的在线时长
var condition = new Array(10, 30, 60, 120, 300, 600, 800, 1000);
var reward = new Array(// 礼包编号、道具id、数量
					// 礼包1
					Array(1, 5030022, 1),
					Array(1, 4001713, 1),
					Array(1, 2000005, 100),
					Array(1, 5062000, 2),
					Array(1, 2450020, 1),

					// 礼包2
					Array(2, 4001713, 3),
					Array(2, 2000005, 100),
					Array(2, 5062000, 5),
					Array(2, 2450020, 1),
					Array(2, 5062002, 2),

					// 礼包3
					Array(3, 5062500, 2),
					Array(3, 5062000, 5),
					Array(3, 5062002, 2),

					// 礼包4
					Array(4, 4001522, 2),
					Array(4, 5062000, 5),
					Array(4, 5062002, 3),
					Array(4, 5062500, 3),
					Array(4, 2049402, 1),
					Array(4, 4310110, 1),

					// 礼包5
					Array(5, 5062000, 5),
					Array(5, 5062002, 2),
					Array(5, 5062500, 5),
					Array(5, 4310110, 1),
					Array(5, 2049116, 1),
					Array(5, 2430205, 1),
					
					// 礼包6 
					Array(6, 5062000, 8),
					Array(6, 5062002, 3),
					Array(6, 5062500, 5),
					Array(6, 2049700, 1),
					Array(6, 2049124, 1),
					Array(6, 4310110, 1),
					
					// 礼包7
					Array(7, 5062000, 10),
					Array(7, 5062002, 4),
					Array(7, 5062500, 4),
					Array(7, 5064000, 2),
					Array(7, 2340000, 2), 
					Array(7, 2049700, 2),
					Array(7, 2049124, 2),
					Array(7, 4310110, 2),
					Array(7, 2431987, 1),//周年50箱子
					
					// 礼包8
					Array(8, 5064300, 1),
					Array(8, 2049116, 1),
					Array(8, 2049122, 1),
					Array(8, 5062000, 10),
					Array(8, 5062002, 50),
					Array(8, 5062500, 5),
					Array(8, 4000463, 1),
					Array(8, 5064000, 3),
					Array(8, 2340000, 3),
					Array(8, 2049752, 1),
					Array(8, 2049135, 2),
					Array(8, 4310110, 5),
					Array(8, 4001785, 6)
					);

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0)
	{
		cm.dispose();
		return;
	}
	if (mode == 1)
	{
		status++;
	} else {
		status--;
	}

	var time = cm.getPlayer().getTodayOnlineTime();
	var curlevel = -1;

	if (status == 0) {
		text = "#e#d您今天在猫咪冒险岛世界时长为： #r" + time + "#k #d分钟#n#k\r\n#e#d提示#n#k：#e#r23：50#n #b至#r #e00：10#n #b时无法领取在线奖励。#k\r\n#b请在 #e#r23：50#n#b 分前领取当天未领取的奖励。以免造成损失。#k\r\n #r800分钟（必得周年箱子）  300分钟可得3W抵用卷箱子\r\n";
		for (var i = 1; i <= condition.length; i++) {
			text += "#b#L" + i + "#"+aaa+" 领取在线" + condition[i-1] + "分钟奖励";
			if (cm.getBossLog("在线礼包" + i) > 0) {
				text += "(已领取)";
				curlevel = curlevel == -1 ? i : curlevel;
			}
			text += "#l\r\n";
		}
		text += "#k";
		cm.sendSimple(text);
	} else if (status == 1) {
		// 23:50 ~ 23: 59 前一天不领取的时间  00:00 ~ 00:10 第二天不领取的时间  
		if ((hour == 23 && (minute >= 50 && minute <= 59)) || (hour == 0 && (minute >= 0 && minute <= 10))){
			cm.sendOk("#d服务器当前时间： #r" + hour +" 时 " + minute + " 分 " + second + " 秒#k\r\n\r\n#e#d提示#n#k：#r23 ： 50 #b至#r 00 ： 10 #b时无法领取在线奖励。#k");
			cm.dispose();
			return;
		}
		if (cm.getBossLog("在线礼包" + selection) > 0) {
			cm.sendOk("这个礼包您已经领取过了");
			cm.dispose();
			return;
		}
		sel = selection;
		text = "\t\t\t\t#e#r- 在线 " + condition[selection - 1] + " 分钟奖励 -#k#n\r\n\r\n";
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == selection) {
				text += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
			}
		}
		cm.sendYesNo(text);
	} else if (status == 2) {
		if (time < condition[sel-1]) {
			cm.sendOk("在线时间不足，无法领取。");
			cm.dispose();
			return;
		}
		var rewardlist = new Array();
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == sel) {
				rewardlist.push(new Array(reward[i][1], reward[i][2]));
			}
		}
		if (!cm.canHoldSlots(rewardlist.length)) {
			cm.sendOk("包裹空间不足，请确保包裹每个栏位有至少 " + rewardlist.length + " 格空间");
			cm.dispose();
			return;
		}
		for (var i = 0; i < rewardlist.length; i++) {
			cm.gainItem(rewardlist[i][0], rewardlist[i][1]);
		}
		cm.setBossLog("在线礼包" + sel);
		cm.playerMessage(1, "领取成功！");
		cm.channelMessage(0x18, "『在线时间奖励』" + " : " + "玩家 " + cm.getChar().getName() + " 领取了在线 " + condition[sel-1] + " 分钟奖励。");
		if (sel == 5) {
			cm.finishActivity(120108);
		} else if (sel == 7) {
			cm.finishActivity(120109);
		}
		cm.dispose();
	}
}