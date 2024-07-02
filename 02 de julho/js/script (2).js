function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };
    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.915347183871, lng: -49.084651042392046, titulo: 'Oktoberfest', descricao: 'Música, alegria, tradição, energia e muita animação, reunidos em um lugar que representa um pedacinho da Alemanha no Brasil' },
        { lat: -26.913226873421866,  lng: -49.08546397423348, titulo: 'Natal em Blumenau', descricao: 'Neste ano você e sua família estão convidados a participar de uma experiência única, repleta de novidades e cheia de magia natalina.' },
        { lat: -26.91955848004435, lng: -49.06608083005444, titulo: 'Páscoa em Blumenau', descricao: 'Blumenau se prepara para celebrar a Páscoa com uma programação especial que promete encantar os visitantes.' }
    ];
    // Criação do mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: blumenau
    });
    // Adicionando marcadores no mapa
    locaisEventos.forEach(function(evento) {
        var marker = new google.maps.Marker({
            position: { lat: evento.lat, lng: evento.lng },
            map: map,
            title: evento.titulo
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<h5>' + evento.titulo + '</h5><p>' + evento.descricao + '</p>'
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    });
}