var status = -1;
var j = java.lang.Math.floor(Math.random() * 9);
var k = java.lang.Math.floor(Math.random() * 9);

function action(mode, type, selection) {
	if(cm.getMap().getAllMonstersThreadsafe().size() == 0){
	for(var i = j; i <= j; i++){
        if (j == 0) {
	   cm.gainItem(3990000,1);
        } else if(j == 1) {
	   cm.gainItem(3990001,1);
        } else if(j == 2) {
	   cm.gainItem(3990002,1);
        } else if(j == 3) {
	   cm.gainItem(3990003,1);
        } else if(j == 4) {
	   cm.gainItem(3990004,1);
        } else if(j == 5) {
	   cm.gainItem(3990005,1);
        } else if(j == 6) {
	   cm.gainItem(3990006,1);
        } else if(j == 7) {
	   cm.gainItem(3990007,1);
        } else {
	   cm.gainItem(3990008,1);
        }
	   cm.dispose();
	}
	for(var i = k; i <= k; i++){
	if(k == 0 || k == 1 || k == 2 || k == 3){
	   cm.gainItem(4310036,1);
        } else if(k == 4 || k == 5 || k == 6 || k == 7) {
	   cm.gainItem(4310036,2);
	} else {
	   cm.gainItem(4310036,3);
	}
	   cm.dispose();
	}
	if(cm.getPlayer().getMapId() == 262030300){
	   cm.warp(262030000);
	} else if(cm.getPlayer().getMapId() == 910024000){
	   cm.warp(910023000);
	} else if(cm.getPlayer().getMapId() == 240080500){
	   cm.warp(240080050);
	}
	} else if(!cm.haveMonster(9410165) && !cm.haveMonster(9410166) && !cm.haveMonster(9410167) && !cm.haveMonster(9410168) && cm.getPlayer().getMapId() == 744000001){
	for(var i = j; i <= j; i++){
        if (j == 0) {
	   cm.gainItem(3990000,1);
        } else if(j == 1) {
	   cm.gainItem(3990001,1);
        } else if(j == 2) {
	   cm.gainItem(3990002,1);
        } else if(j == 3) {
	   cm.gainItem(3990003,1);
        } else if(j == 4) {
	   cm.gainItem(3990004,1);
        } else if(j == 5) {
	   cm.gainItem(3990005,1);
        } else if(j == 6) {
	   cm.gainItem(3990006,1);
        } else if(j == 7) {
	   cm.gainItem(3990007,1);
        } else {
	   cm.gainItem(3990008,1);
        }
	   cm.dispose();
	}
	for(var i = k; i <= k; i++){
	if(k == 0 || k == 1 || k == 2 || k == 3){
	   cm.gainItem(4310036,1);
        } else if(k == 4 || k == 5 || k == 6 || k == 7) {
	   cm.gainItem(4310036,2);
	} else {
	   cm.gainItem(4310036,3);
	}
	   cm.warp(744000000);
	   cm.dispose();
	}
	} else {
	   cm.dispose();
	   cm.sendOk("请检查地图上是否还存在怪物，否则无法领取奖励！");
	}
}