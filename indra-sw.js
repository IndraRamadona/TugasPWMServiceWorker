
//bagian ini digunakan untuk instalasi service worker sehingga pada program yang kita jalankan dapat kita lihat bahwa service worker tersebut sudah terinstall//
self.addEventListener('install',	function(event)	{
		console.log('Service	worker	installing...');
		//	TODO	3.4:	Skip	waiting
		self.skipWaiting();
});
//	bagian ini digunakan untuk mengaktifkan service worker yang digunakan saat kita menggunakan service worker tersebut//
self.addEventListener('activate',	function(event)	{
		console.log('Service	worker	activating...');
});
// pada bagian ini digunakan untuk mengambil data yang dimana akan di request pada url yang di ambil//
self.addEventListener('fetch',	function(event)	{
		console.log('Fetching:',	event.request.url);
});