var key = null;
var api = new PokerApi('http://0.0.0.0:3000');


var modal_close_handler = function(){

	$('#modal_close').click(function(){
        var name = 'Anon'+Math.floor((Math.random()*1000)+1);
		api_key = api.get_key(name);
        key = api_key.key;
		data = api.get_status(key);
        $('#player5 .well').html(name+'<br/>$1000');
		gameloop(data.players.length);
	});
}

var modal_submit_handler = function(){
	$('#modal_submit').click(function(){
        var name =  $('.modal-body input').val();
		api_key = api.get_key(name);
        key = api_key.key;
		data = api.get_status(key);
        $('#player5 .well').html(name+'<br/>$1000');
        console.log(data);
		gameloop(data.players.length);
	});
}

var bet_raise_button_handler = function(){
 $('#bet').click(function(){
	$('#bet_slider').toggle();
	$('#amount').toggle();
	if( $('#bet').html() == 'Bet' ){
		$('#bet').html('Submit');
		$('#bet_slider').val(0);
		$('#amount').html('$0');
	}
	else
		$('#bet').html('Bet');

	});

}

var bet_slider_handler = function(){
	$('#bet_slider').change(function(){
		var value = $('#bet_slider').val();
		if(value == $('#bet_slider').attr("max"))
			value = "All-in";
		else
			value = '$'+value;

		$('#amount').html(value);
	});
}

var gameloop = function(num_players){
	var table = new TableView(num_players);
	table.deal_players();
}

$(document).ready(function(){
	var table = new TableView(2);
	bet_raise_button_handler();
	bet_slider_handler();
	modal_submit_handler();
	modal_close_handler();
	table.start_of_round();
	$('#name input').val('Anon'+Math.floor((Math.random()*1000)+1));
	$('#name').modal('show');
});
