var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(4001017, 800), //火眼
Array(4031179, 400), //D片
Array(4032246, 400), //魂魄
Array(2460004, 1), //放大镜
Array(3010001, 40), //蓝色木椅
Array(4006000, 10), //魔法石
Array(4006001, 10), //召回石
Array(2120000, 1), //宠物食品
Array(2050004, 2), //万能疗伤药
Array(2000005, 6), //超级药水
Array(2000004, 2), //特殊药水
Array(2030004, 1), //射手村回城卷
Array(2030000, 1) //回城卷
);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "亲爱的 #r#h ##k 您好，请点击图片购买物品：\r\n#b注意：请自己留出空格！\r\n";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":# ";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("请输入你请你输入想要购买的数量\r\n\r\n#r1个需要" + (itemlist[selects][1]*500) + "个#b游戏币#k", 1, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("你想购买" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]*500) + "游戏币。");
        } else if (a == 3) {
            if (cm.getPlayer().getMeso() >= buynum * itemlist[selects][1]*500) {
                cm.gainMeso(-buynum * itemlist[selects][1]*500);
                cm.gainItem(itemlist[selects][0], buynum);
				cm.worldSpouseMessage(0x20,"[平民商城] ：" + "玩家 " + cm.getChar().getName() + " 用金币购买了杂货商品,离超神更近了一步！");                
				cm.sendOk("购买成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的游戏币。或背包空格");
                cm.dispose();
            }
        }
    }//mode
}//f