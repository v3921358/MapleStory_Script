﻿var status = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconX = "#fEffect/CharacterEff/1112905/0/1#";
var iconStar = "#fEffect/CharacterEff/1112904/2/1#";
var icon1 = "#fEffect/CharacterEff/1042176/0/0#";
var iconHR = "#fEffect/CharacterEff/1082565/0/0#"
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var icon3 = "#fEffect/CharacterEff/1082565/4/0#";
var icon4 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var giftContent = Array(
  Array("1余额=3000点卷",   1, Array(
        Array(-1, 3000)
   )), 
  Array("10余额=30000点卷",   10, Array(
        Array(-1, 30000)
   )),
  Array("50余额=150000点卷",   50, Array(
        Array(-1, 150000)
   )),
  Array("100余额=300000点卷",   100, Array(
        Array(-1, 300000)
   )),
  Array("300余额=900000点卷",   300, Array(
        Array(-1, 900000)
   ))
);
var giftId = -1;
var gifts = null;
var price = 999;
var column = new Array("装备", "消耗", "设置", "其他", "商城");
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
        var text = "";
		text = "#r#e★★★★★★★★★『充值中心』★★★★★★★★★#d\r\n\r\n#k ";
        //text += "#e#b欢迎来到充值礼包商城，点击可以查看礼包内容哦！\r\n";
		text += ""+icon2+"您当前余额为：#r"+cm.getHyPay(1)+"#k "+"\t\t"+icon2+"累计充值：#r"+cm.getHyPay(3)+"#k\r\n";
        for(var key in giftContent) {
            text+="#b#L"+key+"#购买【#r#e"+giftContent[key][0]+"#n#b】 #e#d需要"+giftContent[key][1]+"余额#n#b#l#k\r\n";
        }
        cm.sendSimple(text);
    } else if (status == 1) {
        giftId = parseInt(selection);
        price = giftContent[giftId][1];
        gifts = giftContent[giftId][2];
        var text="#r#e"+giftContent[giftId][0]+"#n#b内容：\r\n";
        for(var key in gifts) {
            var itemId = gifts[key][0];
            var itemQuantity = gifts[key][1];
            text+="#i"+itemId+":##b" + (itemId == -1 ? "赠送点券" : "#z" + itemId + "#") + "#k #rx "+itemQuantity+"#k\r\n";
        }
        text+="\r\n#d是否花费#e#r"+price+"#n#d余额购买该礼包？#k";
        cm.sendYesNo(text);
    } else if (status == 2) {
        if (giftId!=-1 && gifts != null) {
            var needslot = new Array(0, 0, 0, 0, 0);
            for (var i in gifts) {
                var type = Math.floor(gifts[i][0] / 1000000);
                if (type == -1) {
                    continue;
                }
                needslot[type - 1] = needslot[type - 1] + 1;
            }
            for (var i = 0; i < 5; i++) {
                if (cm.getSpace(i + 1) < needslot[i]) {
                    cm.sendOk("您的" + column[i] + "栏位空间不足" + needslot[i] + "格，请清理后再来。");
                    cm.dispose();
                    return;
                }
            }
            if (cm.getHyPay(1) < price) {
                cm.sendOk("您的余额不足，请先充值后再购买。");
                cm.dispose();
                return ;
            }
            for(var key in gifts) {
                var itemId = gifts[key][0];
                var itemQuantity = gifts[key][1];
                if (itemId == -1) {
                    cm.gainNX(itemQuantity);
                } else {
                    cm.gainItem(itemId, itemQuantity);
                }
            }
            cm.addHyPay(price);
            cm.sendOk("恭喜您，购买成功！");
            cm.dispose();
        } else {
            cm.sendOk("购买错误！请联系管理员！");
            cm.dispose();
        }
    }
}