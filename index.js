module.exports = function DropNotice(mod) {
	
	let enabled = true;
	
	mod.command.add('Item', () => {
		enabled = !enabled;
		mod.command.message('Mod ' + enabled ? '<font color="#56B4E9">On</font>' : '<font color="#E69F00">Off</font>');
	})
	
	mod.hook('S_SPAWN_DROPITEM', 6, (event) => {
		if(!enabled) return;
		switch (event.item) {
			case 368:
				sendMessage('Emerald');break;
			case 369:
				sendMessage('Diamond');break;
			
			case 6700:
				sendMessage('Necklace Etching: Pumped III');break;
			case 6705:
				sendMessage('Necklace Etching: Relentless Pumped III');break;
			case 6701:
				sendMessage('Necklace Etching: Keen III');break;
			case 6706:
				sendMessage('Necklace Etching: Relentless Keen III');break;
			case 6702:
				sendMessage('Necklace Etching: Swift III');break;
			case 6707:
				sendMessage('Necklace Etching: Relentless Swift III');break;
			
			case 6780:
				sendMessage('Earring Etching: Pumped III');break;
			case 6785:
				sendMessage('Earring Etching: Relentless Pumped III');break;
			case 6781:
				sendMessage('Earring Etching: Keen III');break;
			case 6786:
				sendMessage('Earring Etching: Relentless Keen III');break;
			case 6782:
				sendMessage('Earring Etching: Swift III');break;
			case 6787:
				sendMessage('Earring Etching: Relentless Swift III');break;
			
			case 6940:
				sendMessage('Belt Etching: Pumped III');break;
			case 6945:
				sendMessage('Belt Etching: Relentless Pumped III');break;
			case 6941:
				sendMessage('Belt Etching: Keen III');break;
			case 6946:
				sendMessage('Belt Etching: Relentless Keen III');break;
			case 6942:
				sendMessage('Belt Etching: Swift III');break;
			case 6947:
				sendMessage('Belt Etching: Relentless Swift III');break;
			
			case 6860:
				sendMessage('Ring Etching: Pumped III');break;
			case 6865:
				sendMessage('Ring Etching: Relentless Pumped III');break;
			case 6861:
				sendMessage('Ring Etching: Keen III');break;
			case 6866:
				sendMessage('Ring Etching: Relentless Keen III');break;
			case 6862:
				sendMessage('Ring Etching: Swift III');break;
			case 6867:
				sendMessage('Ring Etching: Relentless Swift III');break;
			
			case 6958:
				sendMessage('Brooch Etching: Pumped I');break;
			case 6961:
				sendMessage('Brooch Etching: Pumped II');break;
			
			case 28600:
				sendMessage('Design: Golden Daric');break;
			case 28601:
				sendMessage('Design: Golden Plate');break;
			case 28602:
				sendMessage('Design: Silver Siglo');break;
			case 28603:
				sendMessage('Design: Silver Plate');break;
			case 28607:
				sendMessage('Design: Diamond');break;
			
			case 28620:
				sendMessage('Design: Harmonious Imbalance');break;
			
			case 88631:
				sendMessage('Powerful Onset Mask');break;
			case 88632:
				sendMessage('Keen Onset Mask');break;
			case 88633:
				sendMessage('Bitter Onset Mask');break;
			case 88634:
				sendMessage('Energetic Onset Mask');break;
			case 88635:
				sendMessage('Powerful Infinity Mask');break;
			case 88636:
				sendMessage('Keen Infinity Mask');break;
			case 88637:
				sendMessage('Bitter Infinity Mask');break;
			case 88638:
				sendMessage('Energetic Infinity Mask');break;
			case 88784:
				sendMessage('Powerful Transcendent Mask');break;
			case 88785:
				sendMessage('Keen Transcendent Mask');break;
			case 88786:
				sendMessage('Bitter Transcendent Mask');break;
			case 88787:
				sendMessage('Energetic Transcendent Mask');break;
			
			case 88827:
				sendMessage('Belt Amplifier I');break;
			case 88828:
				sendMessage('Necklace Amplifier I');break;
			case 88829:
				sendMessage('Earring Amplifier I');break;
			case 88830:
				sendMessage('Ring Amplifier I');break;
			case 88831:
				sendMessage('Circlet Amplifier I');break;
			
			case 88832:
				sendMessage('Belt Amplifier II');break;
			case 88833:
				sendMessage('Necklace Amplifier II');break;
			case 88834:
				sendMessage('Earring Amplifier II');break;
			case 88835:
				sendMessage('Ring Amplifier II');break;
			case 88836:
				sendMessage('Circlet Amplifier II');break;
			
			case 96207:
				sendMessage('Dyad Niveot Structure');break;
			
			case 98281:
				sendMessage('Superior Etching Box');break;
			
			// case 98500:
				// sendMessage('Golden Talent');break;
			// case 98514:
				// sendMessage('Silver Talent');break;
			
			case 88988:
				sendMessage('Blightoath Handwear Chest');break;	
			case 88991:
				sendMessage('Blightoath Footwear Chest');break;
				
			case 88982:
				sendMessage('Blightoath Weapon Chest');break;	
			case 88985:
				sendMessage('Blightoath Armor Chest');break;
				
            case 88996:
				sendMessage('Celestial Treasure Chest');break;
			case 88996:
				sendMessage('Celestial Treasure Chest');break;
				
			case 88852:
				sendMessage('Energetic Bahaar Mask');break;	
			case 88851:
				sendMessage('Bitter Bahaar Mask');break;	
			case 88850:
				sendMessage('Keen Bahaar Mask');break;	
			case 88849:
				sendMessage('Powerful Bahaar Mask');break;	
			
			default :
				break;
		}
	})
	
	function sendMessage(msg) {
		mod.command.message('Found <font color="#00FFFF">' + msg + '</font>');
	}
	
}
