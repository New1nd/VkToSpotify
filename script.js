$(document).ready(function () {
    var url, name = '', trek

    if($('#darkvk-minors').length == 1){
        var dark_vk = true;
    }


    setInterval(function () {
        $('.audio_row.audio_row_with_cover._audio_row').each(function (index) {

            if(dark_vk == true){
                $(this).css(
                    {
                        "background-color": "#000",
                        "border-left": "2px solid green"
                    }
                )
            }

            $(this).find('.audio_row__performers a').each(function () {
                name += $(this).text() + ' ';
            })

            trek = $(this).find('.audio_row__title_inner._audio_row__title_inner').text();
            url = 'https://open.spotify.com/search/' + name + ' ' + trek
            var name_trek = $(this).find('.audio_row__performer_title');

            if(name_trek.find('.link_spotify').length == 0) {
                name_trek.append(
                    '<a class="link_spotify" target="_blank" href="' + encodeURI(url) + '" ' +
                    'style="background: url(https://open.scdn.co/cdn/images/favicon32.a19b4f5b.png) center/cover no-repeat; ' +
                    'width: 16px; height: 16px;' +
                    'right: 0;' +
                    'position: absolute;' +
                    'top: 50%;' +
                    'margin-top: -8px;' +
                    'z-index: 999;' +
                    'text-decoration: none;' +
                    '"></a>'
                )
            }
            name = ''
        })
    }, 1000)
})