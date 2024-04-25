import { createI18n } from 'vue-i18n';
import en from './en.json';
import zhHans from './zh-Hans.json';
import kr from './ko-KR.json';
// json 文件里面定义的字段pages.json里面用就不能有中括号{}，否则会无效
// 例如：pages.json里面定义的字段为：'pages.home.title'，那么json文件里面就不能写成：{home: {title: 'xxx'}}
// 切换语言时要切换系统语言和il8n语言，否则会出现切换语言后，系统语言还是原来的语言，il8n语言切换了的情况
// uni.setLocale(item.value);
// locale.value = item.value;
const messages = {
    en:{
		...en,
		"desposit_top_des1": ({ named }:any) => {
			return `Send only ${named('coin')} to this deposit address.`
		},
		"desposit_top_des2": ({ named }:any) => {
			return `Sending coin or token other than ${named('coin')} to this address may result in the loss of youldeposit.`
		},
		"withdrawal_top_des1": ({ named }:any) => {
			return `For the safety of your funds, please verifyagain that your network is ${named('coin')}`
		},
		"ruler4": ({ list }:any) => {
			return `You will receive a value of ${list(0)} ${list(1)} assistance`
		},
	},
    'zh-Hans': {
		...zhHans,
		"desposit_top_des1": ({ named }:any) => {
			return `僅向此存款地址發送 ${named('coin')}!`
		},
		"desposit_top_des2":({ named }:any) => {
			return `向此地址發送非 ${named('coin')} 的幣種或代幣可能導致您的存款遺失。`
		},
		"withdrawal_top_des1": ({ named }:any) => {
			return `為了您的資金安全，請再次驗證您的網絡是否為 ${named('coin')}`
		},
		"ruler4": ({ list }:any) => {
			return `您將收到價值 ${list(0)} ${list(1)} 的幫助`
		},
	},
    'ko-KR': {
		...kr,
		"desposit_top_des1": ({ named }:any) => {
			return `${named('coin')} 만 이 입금 주소로 보내십시오.`
		},
		"desposit_top_des2": ({ named }:any) => {
			return `${named('coin')} 외의 코인 또는 토큰을 이 주소로 보내면 입금이 손실될 수 있습니다.`
		},
		"withdrawal_top_des1": ({ named }:any) => {
			return `자금 안전을 위해 네트워크가 ${named('coin')} 인지 다시 한 번 확인하십시오.`
		},
		"ruler4": ({ list }:any) => {
			return `${list(0)} ${list(1)} 보조금을 받게 됩니다`
		},
	},
};


const set_locale = (): string => {
    const il = uni.getLocale();
    // 判断il是否包含zh  中文强制转化为英文
    if (il.includes('zh')) {
        return 'zh-Hans';
    } else {
        return uni.getLocale();
    }
};

const i18nConfig = {
    locale: set_locale(), // set locale
    legacy: false, // With the Composition API pattern, you need to set it to false
    globalInjection: true, //the global effect is $t
    messages,
};

uni.setLocale(set_locale());
export const i18n = createI18n(i18nConfig);