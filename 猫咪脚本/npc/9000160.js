
var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";////美化!
var ttt7 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var ttt6 ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //彩虹带
var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //爱心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //兔子蓝
var tz1 = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉

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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
        } 
    else if (status == 0) {
		var selStr = "\r\n#e#d#L33#猫咪冒险岛欢迎您。如果您对本服不了解请点这里#n#l#k\r\n";
		selStr +="\r\n#d  "+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+"#k\r\n";
		selStr +="#L15##r"+ttt3+"在线奖励#l#L17#"+ttt3+"充值奖励#l#k#b#L3##r"+ttt3+"组队任务#l#L5##r"+ttt3+"点卷中介#l\r\n\r\n";
		selStr +="#b#L11#"+ttt3+"挑战首领#l#L12#"+ttt3+"重置副本#l#L4##b"+ttt3+"美容美发#l#L14#"+ttt3+"解锁密码#l\r\n\r\n";
		selStr +="#b#L9#"+ttt3+"娱乐副本#l#L19#"+ttt3+"装备制作#l#b#L16#"+ttt3+"活动奖励#l#b#L20#"+ttt3+"绑定商城#l\r\n\r\n";
		selStr +=" #b#L21##r"+ttt2+"超聚划算理财礼包#l          #L999##r"+ttt2+"活跃度查询#l\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9310144, 1);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9310144, 9);
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9310144, 3);
            break;
	    case 999:
            cm.dispose();
            cm.openNpc(9900003, 23);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9900003, 9);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9900003, 15);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9310144, 4);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9310144, 6);
            break; 
        case 6:
            cm.dispose();
            cm.openNpc(9020000);
            break; 
        case 7:
            cm.dispose();
            cm.openNpc(2040034);
            break;
        case 10:
            cm.dispose();
            cm.openNpc(9900003, 10);
            break;
		case 9:
            cm.dispose();
            cm.openNpc(9900003, 108);
            break;
		case 11:
            cm.dispose();
            cm.openNpc(9900003, 13);
            break;
		case 12:
            cm.dispose();
            cm.openNpc(9900004, 3);
            break;
		case 13:
            cm.dispose();
            cm.openNpc(9900003, 110);
            break;
		case 14:
            cm.dispose();
            cm.openNpc(9900003, 111);
            break;
	    case 15:
            cm.dispose();
            cm.openNpc(9900003, 608);
            break;
		case 16:
	    //cm.sendOk("近期开放");
            cm.dispose();
	    cm.openNpc(9310144, 1);
            //cm.openShop(500);
            break;
		case 17:
            cm.dispose();
            cm.openNpc(9310144, 8);
            break;
		case 18:
	    cm.sendOk("近期开放");
            cm.dispose();
            //cm.openShop(600);
            break;
		case 19:
            cm.dispose();
            cm.openNpc(9900003, 24);
            break;
		case 20:
            cm.dispose();
            cm.openNpc(9310144, 3);
            break;
		case 21:
            cm.dispose();
            cm.openNpc(9310144, 17);
            break;
        case 33:
            cm.dispose();
            cm.openNpc(9330006);
            break;       













}
    }
}
