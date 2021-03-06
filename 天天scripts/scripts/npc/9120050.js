var status = 0;
var minLevel = 180;
var maxLevel = 255;
var minPartySize = 1;
var maxPartySize = 1;

function start()
{
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection)
{
	if (mode == -1)
	{
		cm.dispose();
	}
	else
	{
		if (mode == 0 && status == 0)
		{
			cm.dispose();
			return;
		}
		if (mode == 1) status++;
		else status--;
		if (cm.getPlayer().getClient().getChannel() == 1 || cm.getPlayer().getClient().getChannel() == 2 || cm.getPlayer().getClient().getChannel() == 3)
		{
			if (status == 0)
			{
				if (cm.getMap().getId() == 802000821)
				{
					status = 1;
					cm.sendYesNo("你想出去吗？");
				}
				else
				{
					cm.sendSimple(
						"- #e#d英雄救美#k#n:\r\n\r\n#b10.8号本是黄晓明与angelababy一生中最幸福的日子，可良辰却动用了他在Shang Hai的势力，强行夺走baby带入了自己的洞房。召唤师峡谷的勇士们，赶紧去拯救你们心目中的女神吧！！！。。#k\r\n副本要求：\r\n#r1). 可在1,2,3线可挑战。\r\n2). 组队员等级必须要在" +
						minLevel + "级以上。\r\n3). 组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n4). (每个账号每天只能完成一次)\r\n\r\n#L0#[执行]angelababy解救战#l\r\n#L1#兑换[坚韧的意志] 7个6000W#l")
				}
			}
			else if (status == 1)
			{
				if (selection == 0)
				{
					if (cm.getParty() == null)
					{ // 没有组队
						cm.sendOk("请组队后和我谈话。");
						cm.dispose();
					}
					else if (!cm.isLeader())
					{ // 不是队长
						cm.sendOk("队长必须在这里。请让他和我说话。");
						cm.dispose();
					}
					else if (cm.getMap(802000821).getCharactersSize() > 0)
					{
						cm.sendOk("本次从欧拉拉解救公主副本已经在进行中。请等待或者换线后尝试..");
						cm.dispose();
					}
					else
					{
						if (cm.getBossLog("欧拉拉") < 2 || cm.getPlayer().isGM())
						{
							//if (cm.checkPartyEventCount("欧拉拉1")){
							var party = cm.getParty().getMembers();
							var mapId = cm.getPlayer().getMapId();
							var next = true;
							var levelValid = 0;
							var inMap = 0;
							var it = party.iterator();
							while (it.hasNext())
							{
								var cPlayer = it.next();
								if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel))
								{
									levelValid += 1;
								}
								else
								{
									next = false;
								}
								if (cPlayer.getMapid() == mapId)
								{
									inMap += 1;
								}
							}
							if (party.size() < minPartySize || party.size() > maxPartySize || inMap < minPartySize)
							{
								next = false;
							}
							if (next)
							{
								var em = cm.getEventManager("Aufhaven");
								if (em == null)
								{
									cm.sendOk("此任务正在建设当中。");
								}
								else
								{
									var prop = em.getProperty("state");
									if (prop.equals("0") || prop == null)
									{
										em.startInstance(cm.getParty(), cm.getMap(), 198);
										cm.setBossLog("欧拉拉");
										cm.worldSpouseMessage(0x20, "[angelababy解救战] ：玩家 " + cm.getChar().getName() + " 继承了小明的意志,Baby在人在!");
										cm.dispose();
										return;
									}
									else
									{
										cm.sendOk("怪任务里面已经有人了，请稍等！");
									}
								}
								cm.dispose();
							}
							else
							{
								cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel +
									"级以上。\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
								cm.dispose();
							}
							// } else {
							//	cm.sendOk("请检查队伍中是否存在已完成次数#b队员#k。");
							//	cm.dispose();
							//	}
						}
						else
						{
							cm.sendOk("对不起，该帐号每天只能进入2次。\r\n");
							cm.dispose();
						}
					} //判断组队
				}
				else if (selection == 1)
				{
					//cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
					// cm.dispose();
					if (cm.itemQuantity(04033297) >= 7)
					{
						cm.gainItem(04033297, -7);
						cm.gainMeso(6000 * 10000); //兑换成功
						cm.sendOk("兑换成功.请查看背包");
						cm.dispose();
					}
					else
					{
						cm.sendOk("你没有7个#v04033297#");
						cm.dispose();
					}
					return;
				}
			}
			else if (status == 2)
			{
				cm.warp(802000820);
				cm.dispose();
			}
		}
		else
		{
			cm.dispose();
			cm.sendOk("只有在1,2,3频道才可以参加任务。");
		}
	}
}
