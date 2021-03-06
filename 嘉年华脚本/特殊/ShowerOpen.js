/*  创新型副本  
 *  组队任务副本
 *  功能：玩家进行答题、保护MOB、跳跳、消灭BOSS
 *  作者：AND 358122354
 */
var status = 0;
//限制等级
var minLevel = 100; //最低等级
var maxLevel = 255;//最高等级


//限制人数
var minPlayers = 1;
var maxPlayers = 6;

//怪物最大等级设置
var moblevel = 220;

//副本开关 开启、true 关闭、false
var open = true;

//组队log记录
var PQ = 'Shower金币';


//配置文件名称
var eventname = "Shower";


//设置每日次数
var maxenter = 999;

function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status >= 1 && mode == 0) {
        cm.sendOk("快捷寻找组队按热键“O”赶快加入组队来挑战组队任务吧。");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        var em = cm.getEventManager(eventname);
        var prop = em.getProperty("state");
        if (prop == null || prop.equals("0")) {
            var vipstr = "#r副本空闲#k";
        } else {
            var vipstr = "#b已经开启#k";
        }
                var pqtry = maxenter - cm.getPQLog(PQ);
                var rwpz = "";
                rwpz += "#e推荐等级：200 - 250";
                rwpz += "        推荐人数：1 - 1  \r\n#b已进行普通模式：" + cm.getPQLog(PQ) + " 次       剩余挑战次数：" + pqtry + " 次#k";
                rwpz += "\r\n普通模式状态：" + vipstr + "        #n";
                var zyms = "";
                zyms = "#e<组队 - 保护长老>#n\r\n#b#h0# \n\#k你现在想挑战这个副本吗?\r\n" + rwpz + "\r\n";
                zyms += "#L1##b是的,我们现在就去#l\r\n\r\n";
                cm.sendSimple(zyms);

    } else if (status == 1) {
        if (selection == 1) {
            if (cm.getParty() == null) { //判断组队
                cm.sendOk("你没有创建组队,无法入场。");
                cm.dispose();
            } else if (!cm.isLeader()) { // 判断组队队长
                cm.sendOk("请你们团队的队长和我对话。");
                cm.dispose();
            } else if (cm.getPQLog(PQ) >= maxenter) {
                cm.sendOk("你今天挑战次数已经用完了,请明天在来吧!");
                cm.dispose();
            } else if (!cm.allMembersHere()) {
                cm.sendOk("你的组队部分成员不在当前地图,请召集他们过来后在尝试。"); //判断组队成员是否在一张地图..
                cm.dispose();
            } else {
                var party = cm.getParty().getMembers();
                var mapId = cm.getMapId();
                var next = true;
                var levelValid = 0;
                var inMap = 0;

                var it = party.iterator();
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    if (cPlayer.getLevel() >= minLevel && cPlayer.getLevel() <= maxLevel) {
                        levelValid += 1;
                    } else {
                        //cm.sendOk("组队成员 " + minPlayers + " 人以上 " + maxPlayers + "人 以下 所有成员等级 "+ minLevel +" 以上 "+ maxLevel +" 以下才可以入场。");
                        cm.dispose();
                        next = false;
                    }
                    if (cPlayer.getMapid() == mapId) {
                        inMap += 1;
                    }
                }
                if (party.size() > maxPlayers || inMap < minPlayers) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager(eventname);
                    if (em == null || open == false) {
                        cm.sendSimple("配置文件不存在,请联系管理员。");
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null || prop.equals("0")) {
                            em.startInstance(cm.getParty(), cm.getMap(),198);
                        } else {
                            cm.sendSimple("已经有队伍在进行了,请换其他频道尝试。");
                        }

                        cm.setPQLog(PQ);
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("组队成员 " + minPlayers + " 人以上 " + maxPlayers + "人 以下 所有成员等级 " + minLevel + " 以上 " + maxLevel + " 以下才可以入场。");
                    cm.dispose();
                }
            }
        } else if (selection == 2) {
            cm.warp(211061001, 0);
            cm.dispose();
        }






    } else if (mode == 0) {
        cm.dispose();
    }
}
