var isoVillages = {
    'name': 'Bugambo',
    'lat': '0.8970166000000022',
    'long': '33.39893489999997',

    'name': 'Buganza',
    'lat': '0.8453280000000231',
    'long': '33.433343899999954',

    'name': 'Bugole A',
    'lat': '0.8683849999999976',
    'long': '33.382454999999936',

    'name': 'Bugole B',
    'lat': '0.8527656000000022',
    'long': '33.373872000000006',

    'name': 'Bugongo A',
    'lat': '0.8630280000000112',
    'long': '33.39781700000003',

    'name': 'Bugongo B',
    'lat': '0.8541590000000057',
    'long': '33.39529300000004',

    'name': 'Bukyeega',
    'lat': '0.7941138000000139',
    'long': '33.4319706',

    'name': 'Bunyokano',
    'lat': '0.8673802000000016',
    'long': '33.4082042',

    'name': 'Busaala',
    'lat': '0.808081400000012',
    'long': '33.42802240000003',

    'name': 'Busakaire',
    'lat': '0.879166000000019',
    'long': '33.38932180000006',

    'name': 'Busoigi',
    'lat': '0.8786537999999963',
    'long': '33.40477099999998',

    'name': 'Buwumba',
    'lat': '0.8285069999999863',
    'long': '33.4343738',

    'name': 'Buyunga',
    'lat': '0.863843000000015',
    'long': '33.428709000000026',

    'name': 'Buzaya',
    'lat': '0.8910460000000094',
    'long': '33.41290600000002',

    'name': 'Ikumbya',
    'lat': '0.8779671999999938',
    'long': '33.44116329999997',

    'name': 'Kabuli 1',
    'lat': '0.8784890000000011',
    'long': '33.427318000000014',

    'name': 'Kabuli 2',
    'lat': '0.8766488999999923',
    'long': '33.416100700000015',

    'name': 'Kiringa A',
    'lat': '0.8329696999999938',
    'long': '33.420125900000016',

    'name': 'Kiringa B',
    'lat': '0.8134022999999982',
    'long': '33.417551',

    'name': 'Kiwanyi 1',
    'lat': '0.8190666000000089',
    'long': '33.433343899999954',

    'name': 'Kiwanyi 2',
    'lat': '0.7989198000000097',
    'long': '33.422872600000005',

    'name': 'Kyendabawala',
    'lat': '0.866638900000017',
    'long': '33.426228700000024',

    'name': 'Madhimasu',
    'lat': '0.8059572999999999',
    'long': '33.44055370000001',

    'name': 'Malobi A and B',
    'lat': '0.871444800000015',
    'long': '33.45455279999999',

    'name': 'Namabwere 1',
    'lat': '0.8272050000000034',
    'long': '33.39704000000006',

    'name': 'Namabwere 2',
    'lat': '0.8388055999999934',
    'long': '33.40690799999993',

    'name': 'Namakumya',
    'lat': '0.8532236000000194',
    'long': '33.40768920000005',

    'name': 'Namusiisi',
    'lat': '0.8570650000000077',
    'long': '33.43251499999997',

    'name': 'Nawandala',
    'lat': '0.835544400000004',
    'long': '33.38321870000004',

    'name': 'Nawangaiza 1',
    'lat': '0.808081400000012',
    'long': '33.40484809999998',

    'name': 'Nawangaiza 2',
    'lat': '0.8061933000000043',
    'long': '33.390428499999985'
};

function getVillageid(villageName) {
    for (let key in isoVillages) {
        if (isoVillages[key] === villageName)
            return { key, villageName }
    }
    return "Village does not exist"
}

export default getVillageid
