( function ($) {
	// OBJ CONSTRUCTOR FOR SECTION
	// 	(SECTION WILL HAVE EXPLICIT INLINE HEIGHT AND WIDTH STYLES) 


  $.fn.sp = function(moveset){

		const moveFunction = (direction,t,l) =>{
			if(direction==='d'){
				$('.pathfinder').css('transform',`translate(${l.start},${t.next})`);	
			}else if (direction === 'r'||direction === 'd1'){
				console.log(l.next, t.next);
				$('.pathfinder').css('transform',`translate(${l.next},${t.next})`);
			}else if(direction ==='r1'){
				$('.pathfinder').css('transform',`translate(${l.next},${t.start})`);
			}
			else if (direction === 'l'){
				$('.pathfinder').css('transform',`translate(${l.next},${t.start})`);
			}


			// CUSTOM DIRECTIONS
			else if (direction === 'r2'){
				$('.pathfinder').css('transform','translate(-350vw,-200vh)');
			}else if (direction === 'l2'){
				$('.pathfinder').css('transform','translate(-300vw,300vh)');	
			}else if (direction === 'u2'){
				$('.pathfinder').css('transform','translate(-350vw,300vh)');
			}


		};	

		const inversePosition = (position) =>{
			const num = Number(position.slice(0,-2))*-1;
			return `${num}px`;
		};

		$(this).each(function(i){
			$(this).on('click',function(){

				const index = i;

				const top = {
					next: inversePosition(
								$(this)
									.parent()
									.next()
									.css('top')
							),
					start:inversePosition(
								$(this)
									.parent()
									.css('top')
							),
				};

				const left = {
					next: inversePosition(
								$(this)
									.parent()
									.next()
									.css('left')
								),
					start:inversePosition(
									$(this)
										.parent()
										.css('left')
								),															 
				};

				let timing = 0;
				
				moveset[i].forEach( function(direction, index) {
					setTimeout(function(){
						moveFunction(direction,top,left)
					},timing)
					timing+=400;				
				});

				timing = 0;

			});
		});
	};

})(jQuery);

// const movement = [
// 	['d','r'],
// 	['d','r'],
// 	['r2','u2','l2'],
// 	['l'],
// 	['l'],
// 	['d','r'],
// 	['r1','d1'],
// ];

// $('.btn__progress').sp(movement);
