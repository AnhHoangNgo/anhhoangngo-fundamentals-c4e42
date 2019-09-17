const controller ={};
controller.loatScript = function(src){
	return new Promise((resolve, reject)=>{
	const script = document.createElement('script');
	script.src=src;
	document.head.append(script);
	script.onload=()=>{
		resolve();
	};
	script.onerror=()=>{
		reject(new Error('error loading...!'));
	}
})
}
controller.loatScript('https://code.jquery.com/jquery-3.4.1.min.js')
.then(()=>{
	$(document).ready(function(){
		$('#menu-bar').click(function(){
			$(this).toggleClass('open');
			$('#menu').toggleClass('open');
			$('#group').toggleClass('close');
			$('#mainPageHome').toggleClass('close')
		});
		console.log($('a[href*="#"]'))
		$('a[href*="#"]').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
		});
			const videos = $('scource')
			videos.forEach(video => {
				video.pause();
			});
		$('.fa-play-circle-o').click(()=> {
			videos.forEach((video)=>{
			if (video.paused) {
			  video.play();
			  $('.fa-play-circle-o').toggleClass('close')
			} else {
			  video.pause();
			}
		  })
	});
})
.catch((err)=>{
	console.log(err.message);
}))
