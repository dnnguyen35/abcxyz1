
let telegram = require('../../Models/Telegram');

module.exports = function(bot, id) {
	telegram.findOne({'form':id}, 'phone', function(err, data){
		if (data) {
			console.log(data)
			let opts = {
				parse_mode: 'markdown',
			    reply_markup: {
					keyboard: [
						[{text: 'CHIA SẺ SỐ ĐIỆN THOẠI', request_contact: true}],
					  [{text: 'OTP'}],
					  [{text: 'GIFTCODE'}],
				  ],
				  resize_keyboard: true,
			  }
			};
			let ChatText = `*🎯HƯỚNG DẪN🎯* \n👉 *Bảo Mật: *✅\n👉 *SĐT: *${data.phone}📱\n👉 Nhập *OTP* để nhận mã OTP mới\n👉 Nhập *GiftCode* Nhận ngay GiftCode khởi nghiệp.`
			bot.sendMessage(id, ChatText, opts);
		}else{
			let opts = {
				parse_mode: 'markdown',
			    reply_markup: {
			      	keyboard: [
				        [{text: 'CHIA SẺ SỐ ĐIỆN THOẠI', request_contact: true}],
						[{text: 'OTP'}],
						[{text: 'GIFTCODE'}],
				    ],
				    resize_keyboard: true,
			    }
			};
			//let ChatText = `Xin Chào, Đây là lần đầu tiên bạn sử dụng: 🎲*Go-88vn.ml *🎲\n👉 Bạn vui lòng ấn ☎️*CHIA SẺ SỐ ĐIỆN THOẠI* để sử dụng hệ thống`
			bot.sendMessage(id, '🎲*Go-88vn.ml*🎲  Đây là lần đầu tiên bạn sử dụng App OTP.\n👉 Bạn vui lòng ấn ☎️*CHIA SẺ SỐ ĐIỆN THOẠI* để lấy mã OTP miễn phí.', opts);
		}
	});
}
