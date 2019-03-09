module.exports = function DropNotice(mod) {
	
	let enabled = true;
	
	mod.command.add('物品', () => {
		enabled = !enabled;
		mod.command.message('模块 ' + enabled ? '<font color="#56B4E9">开启</font>' : '<font color="#E69F00">关闭</font>');
	})
	
	mod.hook('S_SPAWN_DROPITEM', 6, (event) => {
		if(!enabled) return;
		switch (event.item) {
			case 368:
				sendMessage('╰綠寶石╯');break;
			case 369:
				sendMessage('╰鑽石╯');break;
			
			case 6700:
				sendMessage('╰項鏈刻印書-野獸强打III╯');break;
			case 6705:
				sendMessage('╰項鏈刻印書-强力的野獸强打III╯');break;
			case 6701:
				sendMessage('╰項鏈刻印書-野獸猛擊III╯');break;
			case 6706:
				sendMessage('╰項鏈刻印書-强力的野獸猛擊III╯');break;
			case 6702:
				sendMessage('╰項鏈刻印書-野獸快步III╯');break;
			case 6707:
				sendMessage('╰項鏈刻印書-强力的野獸快步III╯');break;
			
			case 6780:
				sendMessage('╰耳環刻印書-野獸强打III╯');break;
			case 6785:
				sendMessage('╰耳環刻印書-强力的野獸强打III╯');break;
			case 6781:
				sendMessage('╰耳環刻印書-野獸猛擊III╯');break;
			case 6786:
				sendMessage('╰耳環刻印書-强力的野獸猛擊III╯');break;
			case 6782:
				sendMessage('╰耳環刻印書-野獸快步III╯');break;
			case 6787:
				sendMessage('╰耳環刻印書-强力的野獸快步III╯');break;
			
			case 6940:
				sendMessage('╰腰帶刻印書-野獸强打III╯');break;
			case 6945:
				sendMessage('╰腰帶刻印書-强力的野獸强打III╯');break;
			case 6941:
				sendMessage('╰腰帶刻印書-野獸猛擊III╯');break;
			case 6946:
				sendMessage('╰腰帶刻印書-强力的野獸猛擊III╯');break;
			case 6942:
				sendMessage('╰腰帶刻印書-野獸快步III╯');break;
			case 6947:
				sendMessage('╰腰帶刻印書-强力的野獸快步III╯');break;
			
			case 6860:
				sendMessage('╰戒指刻印書-野獸强打III╯');break;
			case 6865:
				sendMessage('╰戒指刻印書-强力的野獸强打III╯');break;
			case 6861:
				sendMessage('╰戒指刻印書-野獸猛擊III╯');break;
			case 6866:
				sendMessage('╰戒指刻印書-强力的野獸猛擊III╯');break;
			case 6862:
				sendMessage('╰戒指刻印書-野獸快步III╯');break;
			case 6867:
				sendMessage('╰戒指刻印書-强力的野獸快步III╯');break;
			
			case 6958:
				sendMessage('╰胸針刻印書-野獸强打I╯');break;
			case 6961:
				sendMessage('╰胸針刻印書-野獸強打II╯');break;
			
			case 28600:
				sendMessage('╰金色碎片圖╯');break;
			case 28601:
				sendMessage('╰金色鈑金圖╯');break;
			case 28602:
				sendMessage('╰銀色碎片圖╯');break;
			case 28603:
				sendMessage('╰銀色鈑金圖╯');break;
			case 28607:
				sendMessage('╰加工圖:鑽石╯');break;
			
			case 28620:
				sendMessage('╰加工圖：不平衡的和諧╯');break;
			
			case 88631:
				sendMessage('╰力量初始面具╯');break;
			case 88632:
				sendMessage('╰暴擊初始面具╯');break;
			case 88633:
				sendMessage('╰暴威初始面具╯');break;
			case 88634:
				sendMessage('╰CD初始面具╯');break;
			case 88635:
				sendMessage('╰力量无限面具╯');break;
			case 88636:
				sendMessage('╰暴擊无限面具╯');break;
			case 88637:
				sendMessage('╰暴威无限面具╯');break;
			case 88638:
				sendMessage('╰CD无限面具╯');break;
			case 88784:
				sendMessage('╰力量超越面具╯');break;
			case 88785:
				sendMessage('╰暴擊超越面具╯');break;
			case 88786:
				sendMessage('╰暴威超越面具╯');break;
			case 88787:
				sendMessage('╰CD超越面具╯');break;
			
			case 88827:
				sendMessage('╰腰带增幅剂I╯');break;
			case 88828:
				sendMessage('╰项链增幅剂I╯');break;
			case 88829:
				sendMessage('╰耳环增幅剂I╯');break;
			case 88830:
				sendMessage('╰戒指增幅剂I╯');break;
			case 88831:
				sendMessage('╰饰环增幅剂I╯');break;
			
			case 88832:
				sendMessage('╰腰带增幅剂II╯');break;
			case 88833:
				sendMessage('╰项链增幅剂II╯');break;
			case 88834:
				sendMessage('╰耳环增幅剂II╯');break;
			case 88835:
				sendMessage('╰戒指增幅剂II╯');break;
			case 88836:
				sendMessage('╰饰环增幅剂II╯');break;
			
			case 96207:
				sendMessage('合成水晶原石VII');break;
			
			case 98281:
				sendMessage('╰傳説刻印書箱子╯');break;
			
			// case 98500:
				// sendMessage('╰阿勒堡雷亞金色結晶體╯');break;
			// case 98514:
				// sendMessage('╰阿勒堡雷亞銀色結晶體╯');break;
			
			case 98531:
				sendMessage('╰冰冷裝備箱╯');break;	
			case 98532:
				sendMessage('╰呼嘯裝備箱╯');break;
			
			default :
				break;
		}
	})
	
	function sendMessage(msg) {
		mod.command.message('发现 <font color="#00FFFF">' + msg + '</font>');
	}
	
}
