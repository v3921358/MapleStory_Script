
var status = 0;  	
var itemS =  	
Array(
			Array(1702303,60000,"6W���"), //ʥ��������ʹ����(����)
			
			Array(1702302,60000,"6W���"), //���ս�


			
	
			Array(1702301,60000,"6W���"), //������

			Array(1702300,60000,"6W���"), //��Ҷ3����

			Array(1702299,60000,"6W���"), //�Ϲϵ���
			Array(1702298,60000,"6W���"), //������ڤ��
			Array(1702297,60000,"6W���"), //������ڤ��
			Array(1702296,60000,"6W���"), //ʥ��������ʹ����(˫�ֽ�)
			
	
			Array(1702295,60000,"6W���"), //����ħ����
			Array(1702288,60000,"6W���"), //��ҶǬ����
			Array(1702287,60000,"6W���"), //��Ҷ3����
			Array(1702285,60000,"6W���"), //��ɫ������ӾȦ
			Array(1702284,60000,"6W���"), //����������
			Array(1702283,60000,"6W���"), //����������
			Array(1702289,60000,"6W���"), //ʥ��������ʹ����(˫�ָ�)
			
		
			Array(1702282,60000,"6W���"), //�������촸
			Array(1702281,60000,"6W���"), //��Ҷ������
			Array(1702280,60000,"6W���"), //�ۺ캣������
			Array(1702279,60000,"6W���"), //��ɫ��������
			Array(1702278,60000,"6W���"), //��Ҷ3����
			Array(1702277,60000,"6W���"), //��ɫ������ӾȦ
			Array(1702276,60000,"6W���"), //��߽��˵Ĵ���
			Array(1702275,60000,"6W���"), //����������
			Array(1702274,60000,"6W���"), //����������
			Array(1702273,60000,"6W���"), //ʥ��������ʹ����(˫�ֶ���)
			

			Array(1702272,60000,"6W���"), //ʥ��������
			Array(1702271,60000,"6W���"), //������ʥǹ
			Array(1702270,60000,"6W���"), //������ʥǹ
			Array(1702269,60000,"6W���"), //ʥ��������ʹ����(ǹ)
		
			Array(1702268,60000,"6W���"), //������
		
			Array(1702266,60000,"6W���"), //���ϰ�
			Array(1702264,60000,"6W���"), //���ϰ�
			Array(1702263,60000,"6W���"), //���ϰ�
			Array(1702261,60000,"6W���"), //���ϰ�
			Array(1702260,60000,"6W���"), //���ϰ�
			Array(1702252,60000,"6W���"), //���ϰ�
			Array(1702262,60000,"6W���"), //��������
			Array(1092051,60000,"6W���"), //��������
			Array(1092040,60000,"6W���"), //��������
			Array(1092054,60000,"6W���"), //��������
			Array(1092053,60000,"6W���"), //��������
						Array(1122029,350000,"ð��֮��(սʿ)#r30#k��"),					
						Array(1122030,350000,"ð��֮��(��ʦ)#r30#kħ"),						
						Array(1122031,350000,"ð��֮��(����)#r30#k��"),						
						Array(1122032,350000,"ð��֮��(����)#r30#k��"),
						Array(1122033,350000,"ð��֮��(����)#r25#k��"),
						Array(1122034,500000,"ð��֮��(սʿ)#r50#k��"),
						Array(1122035,500000,"ð��֮��(��ʦ)#r50#kħ"),
						Array(1122036,500000,"ð��֮��(����)#r50#k��"),
						Array(1122037,500000,"ð��֮��(����)#r50#k��"),
						Array(1122038,500000,"ð��֮��(����)#r45#k��")
);                                              
var StringS;                                    
function start() {                              
	status = -1;                            
	action(1, 0, 0);                        
}                                               
                                                
function action(mode, type, selection) {        
	if (mode == -1) {                       
		cm.dispose();                   
	} else {                                
		if (status >= 0 && mode == 0) { 
			cm.dispose();           
			return;                 
		}                               
		if (mode == 1)                  
			status++;
		else
			status--;
		if (status == 0) {
				  cm.sendNext("5Ԫð�յ�������̳�[���������Ƶ�][װ�����������ӣ������ϸ�ĵȴ�]");   
		}else if (status == 1) {
				StringS = "����!����ǰ�ĵ��Ϊ#r " + cm.getPlayer().getCSPoints(0) + " #kѡ�������Ʒ.";
				for (var i = 0; i < itemS.length; i++){
					StringS += "\r\n#L" + i + "#" + itemS[i][2] + "#v" + itemS[i][0] + "#(��Ҫ#r" + itemS[i][1] + "#k���)#l"
				}
				cm.sendSimple(StringS);			 								     
		}else if (status == 2){
			if (cm.getPlayer().getCSPoints(0) >= itemS[selection][1]){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull()){
						cm.sendOk("������Ӧ����װ�����ճ�����");
						cm.dospose();
				}
				//cm.getPlayer().modifyCSPoints(0,cm.getPlayer().getCSPoints(0) - itemS[selection][1]);
				cm.getChar().modifyCSPoints(0,-itemS[selection][1]);
				cm.gainItem(itemS[selection][0],1);
				cm.sendOk("����ɹ�����鿴������")
				cm.dispose();
			}else{
				cm.sendOk("�������û���㹻�ĵ����������");
				cm.dispose();
			}
		}
	}
}