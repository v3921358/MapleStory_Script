﻿/*双人特效椅子*/
var status = 0;
var choice;
var itemxh=new Array("3012001","3012003","3012006","3012007","3012008","3012010","3012011","3012016","3012017","3010736","3012018","3012019","3012020","3012021","3012022","3012023","3012024","3012025","3012026","3012027","3012028","3012030");
var itemxhcost=new Array("150000","150000","150000","150000","150000","150000","150000","150000","150000","150000","150000","150000","150000","150000","150000","150000","150000","150000","150000","150000","150000","150000");

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("好吧，欢迎下次继续光临！.");
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;

        if (status == 0) {
            choices = "请选择您要购买的道具：\r\n#r#e椅子已更新最新版本！#n#b";
            for (var i = 0; i < itemxh.length; i++) {
                choices += "\r\n#b#L" + i + "##v" + itemxh[i] + "##z" + itemxh[i] + "#　#d需要#r" + itemxhcost[i] + "#d点卷#k#l";
            }
            cm.sendSimpleS("" + choices,2);
        } else if (status == 1) {
                cm.sendGetNumber("你选择的商品为#b#v" + itemxh[selection] + "#售价为：" + itemxhcost[selection] + "点卷/张\r\n请输入你购买的数量",1,1,cm.getPlayer().getCSPoints(1));
		choice = selection;
        } else if (status == 2) {
            fee = selection;
            money = fee*itemxhcost[choice];
			if (cm.haveItem(4220098,1)){
				money = 1 ;
			}
            if (fee < 0) {
            cm.sendOk("不能输入0.或者你没有足够的点卷支付你要买的数量.!");
            cm.dispose();
            } else if (cm.getPlayer().getCSPoints(1) < money) {
            cm.sendOk("购买失败，你没有" + money + "点卷");
            cm.dispose();
            } else {
			cm.gainNX(-money);
            cm.gainItem(itemxh[choice], fee);
                cm.worldSpouseMessage(0x0D,"[双人特效椅子] :  "+ cm.getChar().getName() +"  在点卷商店购买了双人特效椅子!");
            cm.sendOk("恭喜，购买成功。");
            cm.dispose();
             }
        }
    }
}
