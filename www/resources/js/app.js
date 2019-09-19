require('./bootstrap');
import Echo from 'laravel-echo';

let e = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001'
});

e.channel('laravel_realtime_database_chan-demo').listen('TestEvent', function(e) {
    console.log('TestEvent', e.param);
    document.getElementById('realtime').innerHTML = e.param;
});
