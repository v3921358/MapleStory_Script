function start() {
        im.gainItem(2430241, -1);
		//im.gainItem(3010180, 1);// HP椅子
		//im.gainItem(3012003, 1);// 爱心椅子
		im.gainItem(3010583, 1);// 蛇椅子
		//im.gainItem(3010682, 1);// 天文台椅子
		im.gainItem(2000005, 300);// 超级药水
		im.gainItem(5150040, 5);// 皇家理发
		im.gainItem(5152053, 5);// 皇家整容
		im.gainItem(5150052, 2);// 万能高级美发
		im.gainItem(5153015, 2);// 万能护肤
		im.gainItem(5152057, 2);// 万能高级整形
		im.gainItem(5211060, 1, 2 * 60 * 60 * 1000);// 三倍经验
		im.gainItem(5360015, 1, 2 * 60 * 60 * 1000);// 双爆
		//im.gainItem(5050000, 100);// 洗血的能力值
		im.gainItem(5072000, 5);// 高质地喇叭
		//im.gainItem(5060000, 3);// 装备刻名 X3
		im.gainItem(2431092, 1);//特殊超级礼包
		//im.gainItem(1112164, 1, 2 * 60 * 60 * 1000);//夏日甜心名片戒指 24小时
		//im.gainItem(1112276, 1, 2 * 60 * 60 * 1000);//夏日甜心聊天戒指 24小时
		im.gainItem(1102630, 1, 1);// 浪漫四翼天使 24小时
		//im.gainItem(1102709, 1, 1);// 双色糖果翅膀 1天
		im.gainItem(1112918, 1, 3);// 回归戒指 X1 72小时
		im.sendOk("恭喜您获得 #r管理员送出的礼物#k 。");
		//im.worldSpouseMessage(0x20,"『新手驾到』：恭喜玩家 "+ im.getChar().getName() +" 来到了China冒险岛。热烈祝贺他(她)吧。");
		im.dispose(); 
}
