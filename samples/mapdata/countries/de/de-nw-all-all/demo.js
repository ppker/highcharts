// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['de-nw-05382000-05382016', 0],
    ['de-nw-05334000-05334002', 1],
    ['de-nw-05758000-05758028', 2],
    ['de-nw-05166000-05166012', 3],
    ['de-nw-05166000-05166028', 4],
    ['de-nw-05374000-05374008', 5],
    ['de-nw-05374000-05374012', 6],
    ['de-nw-05566000-05566016', 7],
    ['de-nw-05766000-05766036', 8],
    ['de-nw-05370000-05370040', 9],
    ['de-nw-05362000-05362008', 10],
    ['de-nw-05362000-05362016', 11],
    ['de-nw-05166000-05166016', 12],
    ['de-nw-05562000-05562008', 13],
    ['de-nw-05562000-05562028', 14],
    ['de-nw-05962000-05962028', 15],
    ['de-nw-05374000-05374024', 16],
    ['de-nw-05566000-05566008', 17],
    ['de-nw-05566000-05566012', 18],
    ['de-nw-05154000-05154032', 19],
    ['de-nw-05758000-05758012', 20],
    ['de-nw-05758000-05758016', 21],
    ['de-nw-05758000-05758020', 22],
    ['de-nw-05754000-05754008', 23],
    ['de-nw-05754000-05754032', 24],
    ['de-nw-05124000-05124000', 25],
    ['de-nw-05374000-05374036', 26],
    ['de-nw-05962000-05962012', 27],
    ['de-nw-05120000-05120000', 28],
    ['de-nw-05954000-05954016', 29],
    ['de-nw-05554000-05554044', 30],
    ['de-nw-05554000-05554016', 31],
    ['de-nw-05378000-05378016', 32],
    ['de-nw-05378000-05378008', 33],
    ['de-nw-05766000-05766016', 34],
    ['de-nw-05378000-05378020', 35],
    ['de-nw-05370000-05370032', 36],
    ['de-nw-05370000-05370008', 37],
    ['de-nw-05554000-05554052', 38],
    ['de-nw-05554000-05554036', 39],
    ['de-nw-05554000-05554024', 40],
    ['de-nw-05554000-05554056', 41],
    ['de-nw-05162000-05162024', 42],
    ['de-nw-05162000-05162020', 43],
    ['de-nw-05758000-05758024', 44],
    ['de-nw-05558000-05558036', 45],
    ['de-nw-05562000-05562016', 46],
    ['de-nw-05558000-05558016', 47],
    ['de-nw-05766000-05766052', 48],
    ['de-nw-05158000-05158020', 49],
    ['de-nw-05762000-05762008', 50],
    ['de-nw-05762000-05762016', 51],
    ['de-nw-05966000-05966008', 52],
    ['de-nw-05374000-05374004', 53],
    ['de-nw-05566000-05566052', 54],
    ['de-nw-05566000-05566084', 55],
    ['de-nw-05334000-05334012', 56],
    ['de-nw-05366000-05366020', 57],
    ['de-nw-05366000-05366032', 58],
    ['de-nw-05382000-05382020', 59],
    ['de-nw-05382000-05382040', 60],
    ['de-nw-05362000-05362012', 61],
    ['de-nw-05382000-05382012', 62],
    ['de-nw-05334000-05334020', 63],
    ['de-nw-05762000-05762004', 64],
    ['de-nw-05774000-05774028', 65],
    ['de-nw-05774000-05774032', 66],
    ['de-nw-05754000-05754040', 67],
    ['de-nw-05770000-05770012', 68],
    ['de-nw-05766000-05766044', 69],
    ['de-nw-05954000-05954020', 70],
    ['de-nw-05954000-05954032', 71],
    ['de-nw-05954000-05954012', 72],
    ['de-nw-05774000-05774040', 73],
    ['de-nw-05774000-05774036', 74],
    ['de-nw-05954000-05954028', 75],
    ['de-nw-05382000-05382060', 76],
    ['de-nw-05154000-05154020', 77],
    ['de-nw-05154000-05154048', 78],
    ['de-nw-05554000-05554004', 79],
    ['de-nw-05566000-05566060', 80],
    ['de-nw-05154000-05154060', 81],
    ['de-nw-05970000-05970044', 82],
    ['de-nw-05378000-05378032', 83],
    ['de-nw-05966000-05966016', 84],
    ['de-nw-05970000-05970012', 85],
    ['de-nw-05315000-05315000', 86],
    ['de-nw-05158000-05158026', 87],
    ['de-nw-05382000-05382068', 88],
    ['de-nw-05382000-05382056', 89],
    ['de-nw-05966000-05966028', 90],
    ['de-nw-05970000-05970040', 91],
    ['de-nw-05366000-05366040', 92],
    ['de-nw-05382000-05382064', 93],
    ['de-nw-05970000-05970032', 94],
    ['de-nw-05382000-05382024', 95],
    ['de-nw-05970000-05970024', 96],
    ['de-nw-05958000-05958016', 97],
    ['de-nw-05966000-05966020', 98],
    ['de-nw-05970000-05970004', 99],
    ['de-nw-05966000-05966024', 100],
    ['de-nw-05974000-05974036', 101],
    ['de-nw-05958000-05958012', 102],
    ['de-nw-05774000-05774016', 103],
    ['de-nw-05958000-05958004', 104],
    ['de-nw-05974000-05974044', 105],
    ['de-nw-05170000-05170008', 106],
    ['de-nw-05112000-05112000', 107],
    ['de-nw-05158000-05158028', 108],
    ['de-nw-05566000-05566028', 109],
    ['de-nw-05566000-05566020', 110],
    ['de-nw-05382000-05382008', 111],
    ['de-nw-05314000-05314000', 112],
    ['de-nw-05382000-05382028', 113],
    ['de-nw-05914000-05914000', 114],
    ['de-nw-05954000-05954008', 115],
    ['de-nw-05154000-05154064', 116],
    ['de-nw-05154000-05154056', 117],
    ['de-nw-05154000-05154016', 118],
    ['de-nw-05154000-05154040', 119],
    ['de-nw-05366000-05366036', 120],
    ['de-nw-05362000-05362024', 121],
    ['de-nw-05758000-05758004', 122],
    ['de-nw-05758000-05758032', 123],
    ['de-nw-05766000-05766064', 124],
    ['de-nw-05774000-05774024', 125],
    ['de-nw-05754000-05754044', 126],
    ['de-nw-05962000-05962036', 127],
    ['de-nw-05962000-05962032', 128],
    ['de-nw-05962000-05962060', 129],
    ['de-nw-05770000-05770008', 130],
    ['de-nw-05166000-05166008', 131],
    ['de-nw-05154000-05154028', 132],
    ['de-nw-05358000-05358004', 133],
    ['de-nw-05334000-05334004', 134],
    ['de-nw-05554000-05554012', 135],
    ['de-nw-05554000-05554048', 136],
    ['de-nw-05554000-05554040', 137],
    ['de-nw-05554000-05554060', 138],
    ['de-nw-05554000-05554068', 139],
    ['de-nw-05974000-05974056', 140],
    ['de-nw-05978000-05978012', 141],
    ['de-nw-05978000-05978016', 142],
    ['de-nw-05362000-05362036', 143],
    ['de-nw-05166000-05166032', 144],
    ['de-nw-05166000-05166036', 145],
    ['de-nw-05362000-05362032', 146],
    ['de-nw-05978000-05978024', 147],
    ['de-nw-05978000-05978020', 148],
    ['de-nw-05158000-05158008', 149],
    ['de-nw-05158000-05158004', 150],
    ['de-nw-05558000-05558044', 151],
    ['de-nw-05558000-05558028', 152],
    ['de-nw-05358000-05358008', 153],
    ['de-nw-05358000-05358040', 154],
    ['de-nw-05962000-05962040', 155],
    ['de-nw-05170000-05170024', 156],
    ['de-nw-05170000-05170020', 157],
    ['de-nw-05962000-05962008', 158],
    ['de-nw-05378000-05378012', 159],
    ['de-nw-05378000-05378024', 160],
    ['de-nw-05374000-05374052', 161],
    ['de-nw-05154000-05154044', 162],
    ['de-nw-05158000-05158016', 163],
    ['de-nw-05162000-05162028', 164],
    ['de-nw-05362000-05362004', 165],
    ['de-nw-05162000-05162012', 166],
    ['de-nw-05358000-05358016', 167],
    ['de-nw-05358000-05358020', 168],
    ['de-nw-05358000-05358024', 169],
    ['de-nw-05358000-05358048', 170],
    ['de-nw-05566000-05566036', 171],
    ['de-nw-05558000-05558040', 172],
    ['de-nw-05566000-05566024', 173],
    ['de-nw-05334000-05334028', 174],
    ['de-nw-05334000-05334032', 175],
    ['de-nw-05362000-05362020', 176],
    ['de-nw-05974000-05974028', 177],
    ['de-nw-05358000-05358060', 178],
    ['de-nw-05358000-05358044', 179],
    ['de-nw-05970000-05970036', 180],
    ['de-nw-05154000-05154012', 181],
    ['de-nw-05170000-05170040', 182],
    ['de-nw-05766000-05766040', 183],
    ['de-nw-05766000-05766048', 184],
    ['de-nw-05358000-05358032', 185],
    ['de-nw-05978000-05978036', 186],
    ['de-nw-05974000-05974052', 187],
    ['de-nw-05974000-05974040', 188],
    ['de-nw-05774000-05774020', 189],
    ['de-nw-05170000-05170052', 190],
    ['de-nw-05154000-05154024', 191],
    ['de-nw-05566000-05566040', 192],
    ['de-nw-05170000-05170004', 193],
    ['de-nw-05170000-05170048', 194],
    ['de-nw-05382000-05382076', 195],
    ['de-nw-05374000-05374028', 196],
    ['de-nw-05366000-05366044', 197],
    ['de-nw-05358000-05358012', 198],
    ['de-nw-05566000-05566032', 199],
    ['de-nw-05566000-05566044', 200],
    ['de-nw-05116000-05116000', 201],
    ['de-nw-05166000-05166024', 202],
    ['de-nw-05166000-05166020', 203],
    ['de-nw-05962000-05962044', 204],
    ['de-nw-05962000-05962056', 205],
    ['de-nw-05170000-05170012', 206],
    ['de-nw-05554000-05554032', 207],
    ['de-nw-05334000-05334024', 208],
    ['de-nw-05382000-05382044', 209],
    ['de-nw-05154000-05154052', 210],
    ['de-nw-05566000-05566072', 211],
    ['de-nw-05170000-05170028', 212],
    ['de-nw-05766000-05766008', 213],
    ['de-nw-05711000-05711000', 214],
    ['de-nw-05122000-05122000', 215],
    ['de-nw-05158000-05158032', 216],
    ['de-nw-05978000-05978008', 217],
    ['de-nw-05113000-05113000', 218],
    ['de-nw-05382000-05382048', 219],
    ['de-nw-05366000-05366004', 220],
    ['de-nw-05382000-05382004', 221],
    ['de-nw-05370000-05370012', 222],
    ['de-nw-05334000-05334008', 223],
    ['de-nw-05358000-05358036', 224],
    ['de-nw-05366000-05366012', 225],
    ['de-nw-05162000-05162004', 226],
    ['de-nw-05770000-05770024', 227],
    ['de-nw-05770000-05770004', 228],
    ['de-nw-05362000-05362040', 229],
    ['de-nw-05962000-05962016', 230],
    ['de-nw-05962000-05962048', 231],
    ['de-nw-05766000-05766020', 232],
    ['de-nw-05766000-05766004', 233],
    ['de-nw-05766000-05766056', 234],
    ['de-nw-05762000-05762024', 235],
    ['de-nw-05762000-05762028', 236],
    ['de-nw-05766000-05766060', 237],
    ['de-nw-05766000-05766032', 238],
    ['de-nw-05770000-05770036', 239],
    ['de-nw-05558000-05558008', 240],
    ['de-nw-05558000-05558020', 241],
    ['de-nw-05114000-05114000', 242],
    ['de-nw-05913000-05913000', 243],
    ['de-nw-05562000-05562036', 244],
    ['de-nw-05562000-05562004', 245],
    ['de-nw-05978000-05978032', 246],
    ['de-nw-05558000-05558024', 247],
    ['de-nw-05974000-05974016', 248],
    ['de-nw-05974000-05974020', 249],
    ['de-nw-05566000-05566068', 250],
    ['de-nw-05754000-05754028', 251],
    ['de-nw-05754000-05754024', 252],
    ['de-nw-05570000-05570028', 253],
    ['de-nw-05570000-05570036', 254],
    ['de-nw-05754000-05754016', 255],
    ['de-nw-05754000-05754012', 256],
    ['de-nw-05562000-05562012', 257],
    ['de-nw-05374000-05374048', 258],
    ['de-nw-05382000-05382036', 259],
    ['de-nw-05962000-05962004', 260],
    ['de-nw-05374000-05374032', 261],
    ['de-nw-05382000-05382052', 262],
    ['de-nw-05374000-05374044', 263],
    ['de-nw-05558000-05558032', 264],
    ['de-nw-05566000-05566004', 265],
    ['de-nw-05758000-05758036', 266],
    ['de-nw-05117000-05117000', 267],
    ['de-nw-05962000-05962052', 268],
    ['de-nw-05774000-05774012', 269],
    ['de-nw-05974000-05974032', 270],
    ['de-nw-05974000-05974008', 271],
    ['de-nw-05974000-05974024', 272],
    ['de-nw-05374000-05374016', 273],
    ['de-nw-05334000-05334016', 274],
    ['de-nw-05370000-05370028', 275],
    ['de-nw-05958000-05958044', 276],
    ['de-nw-05170000-05170016', 277],
    ['de-nw-05512000-05512000', 278],
    ['de-nw-05170000-05170036', 279],
    ['de-nw-05566000-05566056', 280],
    ['de-nw-05758000-05758008', 281],
    ['de-nw-05966000-05966004', 282],
    ['de-nw-05754000-05754036', 283],
    ['de-nw-05958000-05958040', 284],
    ['de-nw-05958000-05958008', 285],
    ['de-nw-05958000-05958036', 286],
    ['de-nw-05970000-05970016', 287],
    ['de-nw-05554000-05554020', 288],
    ['de-nw-05554000-05554064', 289],
    ['de-nw-05762000-05762020', 290],
    ['de-nw-05370000-05370016', 291],
    ['de-nw-05370000-05370024', 292],
    ['de-nw-05370000-05370020', 293],
    ['de-nw-05382000-05382032', 294],
    ['de-nw-05513000-05513000', 295],
    ['de-nw-05911000-05911000', 296],
    ['de-nw-05570000-05570024', 297],
    ['de-nw-05515000-05515000', 298],
    ['de-nw-05558000-05558004', 299],
    ['de-nw-05770000-05770016', 300],
    ['de-nw-05570000-05570032', 301],
    ['de-nw-05570000-05570004', 302],
    ['de-nw-05158000-05158036', 303],
    ['de-nw-05158000-05158012', 304],
    ['de-nw-05915000-05915000', 305],
    ['de-nw-05154000-05154004', 306],
    ['de-nw-05754000-05754052', 307],
    ['de-nw-05366000-05366016', 308],
    ['de-nw-05366000-05366028', 309],
    ['de-nw-05566000-05566092', 310],
    ['de-nw-05566000-05566088', 311],
    ['de-nw-05566000-05566048', 312],
    ['de-nw-05358000-05358028', 313],
    ['de-nw-05358000-05358052', 314],
    ['de-nw-05566000-05566080', 315],
    ['de-nw-05762000-05762012', 316],
    ['de-nw-05316000-05316000', 317],
    ['de-nw-05378000-05378004', 318],
    ['de-nw-05370000-05370036', 319],
    ['de-nw-05370000-05370004', 320],
    ['de-nw-05358000-05358056', 321],
    ['de-nw-05111000-05111000', 322],
    ['de-nw-05162000-05162008', 323],
    ['de-nw-05570000-05570048', 324],
    ['de-nw-05570000-05570008', 325],
    ['de-nw-05158000-05158024', 326],
    ['de-nw-05962000-05962020', 327],
    ['de-nw-05562000-05562032', 328],
    ['de-nw-05754000-05754048', 329],
    ['de-nw-05554000-05554028', 330],
    ['de-nw-05570000-05570012', 331],
    ['de-nw-05570000-05570020', 332],
    ['de-nw-05770000-05770032', 333],
    ['de-nw-05570000-05570040', 334],
    ['de-nw-05974000-05974012', 335],
    ['de-nw-05374000-05374040', 336],
    ['de-nw-05762000-05762032', 337],
    ['de-nw-05774000-05774004', 338],
    ['de-nw-05954000-05954024', 339],
    ['de-nw-05170000-05170032', 340],
    ['de-nw-05374000-05374020', 341],
    ['de-nw-05558000-05558012', 342],
    ['de-nw-05774000-05774008', 343],
    ['de-nw-05954000-05954004', 344],
    ['de-nw-05570000-05570052', 345],
    ['de-nw-05754000-05754020', 346],
    ['de-nw-05334000-05334036', 347],
    ['de-nw-05570000-05570044', 348],
    ['de-nw-05562000-05562014', 349],
    ['de-nw-05162000-05162022', 350],
    ['de-nw-05978000-05978040', 351],
    ['de-nw-05562000-05562024', 352],
    ['de-nw-05916000-05916000', 353],
    ['de-nw-05562000-05562020', 354],
    ['de-nw-05962000-05962024', 355],
    ['de-nw-05154000-05154036', 356],
    ['de-nw-05958000-05958020', 357],
    ['de-nw-05958000-05958048', 358],
    ['de-nw-05754000-05754004', 359],
    ['de-nw-05770000-05770028', 360],
    ['de-nw-05970000-05970028', 361],
    ['de-nw-05970000-05970008', 362],
    ['de-nw-05766000-05766012', 363],
    ['de-nw-05958000-05958024', 364],
    ['de-nw-05762000-05762036', 365],
    ['de-nw-05154000-05154008', 366],
    ['de-nw-05366000-05366008', 367],
    ['de-nw-05554000-05554008', 368],
    ['de-nw-05382000-05382072', 369],
    ['de-nw-05770000-05770044', 370],
    ['de-nw-05566000-05566096', 371],
    ['de-nw-05766000-05766028', 372],
    ['de-nw-05958000-05958028', 373],
    ['de-nw-05958000-05958032', 374],
    ['de-nw-05166000-05166004', 375],
    ['de-nw-05770000-05770040', 376],
    ['de-nw-05362000-05362028', 377],
    ['de-nw-05566000-05566064', 378],
    ['de-nw-05366000-05366024', 379],
    ['de-nw-05966000-05966012', 380],
    ['de-nw-05162000-05162016', 381],
    ['de-nw-05770000-05770020', 382],
    ['de-nw-05170000-05170044', 383],
    ['de-nw-05974000-05974004', 384],
    ['de-nw-05974000-05974048', 385],
    ['de-nw-05119000-05119000', 386],
    ['de-nw-05978000-05978028', 387],
    ['de-nw-05954000-05954036', 388],
    ['de-nw-05766000-05766024', 389],
    ['de-nw-05570000-05570016', 390],
    ['de-nw-05566000-05566076', 391],
    ['de-nw-05970000-05970020', 392],
    ['de-nw-05978000-05978004', 393],
    ['de-nw-05378000-05378028', 394],
    ['de-nw-05762000-05762040', 395]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/de/de-nw-all-all'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/de/de-nw-all-all.js">Nordrhein-Westfalen</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});
