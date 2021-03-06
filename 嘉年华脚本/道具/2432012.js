status = -1;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var Star = "#fEffect/CharacterEff/1112904/2/1#";
/***************************************/
var cost = 100;  //每次消耗的HyPay额度
var itemList = Array(
Array(1152174, 50, 1, 3), //埃苏莱布斯骑士护肩
Array(1152176, 100, 1, 3), //埃苏莱布斯法师护肩
Array(1152177, 100, 1, 3), //埃苏莱布斯弓箭手护肩
Array(1152178, 100, 1, 3), //埃苏莱布斯飞侠护肩
Array(1152179, 300, 1, 3), //埃苏莱布斯海盗护肩
Array(1004422, 50, 1, 3), //埃苏莱布斯骑士头盔
Array(1004423, 100, 1, 3), //埃苏莱布斯法师帽
Array(1004424, 100, 1, 3), //埃苏莱布斯弓箭手帽
Array(1004425, 100, 1, 3), //埃苏莱布斯飞侠帽
Array(1004426, 300, 1, 3), //埃苏莱布斯海盗帽
Array(1102775, 100, 1, 3), //埃苏莱布斯骑士披风
Array(1102794, 100, 1, 3), //埃苏莱布斯魔法师披风
Array(1102795, 100, 1, 3), //埃苏莱布斯弓箭手披风
Array(1102796, 100, 1, 3), //埃苏莱布斯飞侠披风
Array(1102797, 300, 1, 3),  //埃苏莱布斯海盗披风
Array(1082636, 50, 1, 3),  //埃苏莱布斯骑士手套
Array(1082637, 300, 1, 3),  //埃苏莱布斯法师手套
Array(1082638, 300, 1, 3),  //埃苏莱布斯弓箭手手套
Array(1082639, 300, 1, 3),  //埃苏莱布斯飞侠手套
Array(1082640, 300, 1, 3),  //埃苏莱布斯海盗手套
Array(1052882, 300, 1, 3),  //埃苏莱布斯骑士套装
Array(1052887, 300, 1, 3),  //埃苏莱布斯魔法师套装
Array(1052888, 300, 1, 3),  //埃苏莱布斯弓箭手套装
Array(1052889, 300, 1, 3),  //埃苏莱布斯飞侠套装
Array(1052890, 300, 1, 3),  //埃苏莱布斯海盗套装
Array(1073030, 50, 1, 3),  //埃苏莱布斯骑士鞋
Array(1073032, 300, 1, 3),  //埃苏莱布斯法师鞋
Array(1073033, 300, 1, 3),  //埃苏莱布斯弓箭手鞋
Array(1073034, 300, 1, 3),  //埃苏莱布斯飞侠鞋
Array(1073035, 300, 1, 3)  //埃苏莱布斯海盗鞋
);

var itemList2 = Array(
Array(1212115, 90, 1, 3), // 埃苏莱布斯双头杖
Array(1222109, 250, 1, 3), // 埃苏莱布斯灵魂手铳
Array(1232109, 90, 1, 3), // 埃苏莱布斯亡命剑
Array(1402251, 90, 1, 3), // 埃苏莱布斯宽大刀
Array(1242116, 90, 1, 3), // 埃苏莱布斯能量剑
Array(1262017, 500, 1, 3), // 埃苏莱布斯ESP限制器
Array(1302333, 500, 1, 3), // 埃苏莱布斯军刀
Array(1312199, 90, 1, 3), // 埃苏莱布斯战斧
Array(1322250, 90, 1, 3), // 埃苏莱布斯战锤
Array(1332274, 90, 1, 3), // 埃苏莱布斯屠龙斩
Array(1342101, 90, 1, 3), // 埃苏莱布斯之刃
Array(1362135, 250, 1, 3), // 埃苏莱布斯折叠手杖
Array(1372222, 90, 1, 3), // 埃苏莱布斯短杖
Array(1382259, 90, 1, 3), // 埃苏莱布斯长杖
Array(1412177, 90, 1, 3), // 埃苏莱布斯大斧
Array(1422184, 90, 1, 3), // 埃苏莱布斯大锤
Array(1432214, 90, 1, 3), // 埃苏莱布斯穿透矛
Array(1442268, 90, 1, 3), // 埃苏莱布斯巨灵开山斧
Array(1452252, 90, 1, 3), // 埃苏莱布斯弓
Array(1462239, 100, 1, 3), // 埃苏莱布斯弩
Array(1472261, 500, 1, 3), // 埃苏莱布斯复仇斗拳
Array(1482216, 90, 1, 3), // 埃苏莱布斯拳甲
Array(1492231, 500, 1, 3), // 埃苏莱布斯枪
Array(1522138, 50, 1, 3), // 埃苏莱布斯双弩枪
Array(1532144, 500, 1, 3), // 埃苏莱布斯大炮
Array(1252093, 250, 1, 3), // 埃苏莱布斯魔法棒
Array(1542108, 350, 1, 3) // 埃苏莱布斯武士刀

);
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            im.sendOk("不想使用吗？…我的肚子里有各类#b奇特座椅或卷轴、装备、新奇道具#k哦！");
            im.dispose();
        }
        status--;

    }
    if (status == 0) {
	var txt = "#d六一儿童节来啦!\r\n";
        txt += "魔方 卷轴  埃苏 随即装备 等道具 [ #r还在等待吗#d ]\r\n\r\n#k";
		txt +="#L0#我要开礼包啦!#l";
        im.sendSimple(txt);
    } else if (status == 1) {
        if (selection == 0) {
            var chance = Math.floor(Math.random() * 500);
            var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        for (var i = 0; i < itemList2.length; i++) {
            if (itemList2[i][1] >= chance) {
                finalitem.push(itemList2[i]);
            }
        }
			if (finalitem.length != 0) {
				if(im.getSpace(2)>=4&&im.getSpace(5)>=3&&im.getSpace(4)>=1&&im.getSpace(1)>=1){
                var item;
                var random = new java.util.Random();
                var finalchance = random.nextInt(finalitem.length);
                var itemId = finalitem[finalchance][0];
                var quantity = finalitem[finalchance][2];
                var notice = finalitem[finalchance][3];
                item = im.gainGachaponItem(itemId, quantity, "[6.1直充138元宝箱]", notice);
                if (item != -1) {
						im.sendOk("你获得了 #b#z" + item + "##k " + quantity + "个。");
						im.gainItem(2049124,50);//正向
						im.gainItem(2340000,50);//祝福
						im.gainItem(2430068,4);//永远的火花
						im.gainItem(4001839,10000);//星星
						im.gainItem(5064000,50);//防爆
						im.gainItem(5062009,200);//超级神奇魔方
						im.gainItem(5062500,200);//大师魔方
						im.gainItem(5062024,100);//闪炫
						im.gainItem(2432012,-1);
					im.safeDispose();
				} else {
					im.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
					im.safeDispose();
				}	
			} else {
                    im.sendOk("请你确认在背包的装备(1格)，消耗(4格)，其他(1格)，特殊(1格)窗口中是否有一格以上的空间。");
					im.safeDispose();
            }
		}
    }
}
}