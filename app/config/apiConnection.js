var API_VERSION = 'v1';

var API_ADRESS;
if (window.location.host.indexOf('localhost') == -1) {
	API_ADRESS = 'http://api.mdg-technik.tk/' + API_VERSION + '/';	
} else {
	API_ADRESS = 'http://192.168.2.107:4000/' + API_VERSION + '/';
}

console.log(API_ADRESS);