const countryCodes = [
	{
		'country': 'Afghanistan',
		'iso2': 'AF',
		'prefix': 93,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Albania',
		'iso2': 'AL',
		'prefix': 355,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Algeria',
		'iso2': 'DZ',
		'prefix': 213,
		'format': '...-..-..-..',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Andorra',
		'iso2': 'AD',
		'prefix': 376,
		'format': '..-..-..',
		'minlen': 6,
		'maxlen': 6
	},
	{
		'country': 'Angola',
		'iso2': 'AO',
		'prefix': 244,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Anguilla',
		'iso2': 'AI',
		'prefix': 1264,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Antigua & Barbuda',
		'iso2': 'AG',
		'prefix': 1268,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Argentina',
		'iso2': 'AR',
		'prefix': 54,
		'format': '.-...-...-....',
		'minlen': 11,
		'maxlen': 11
	},
	{
		'country': 'Armenia',
		'iso2': 'AM',
		'prefix': 374,
		'format': '..-...-...',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Aruba',
		'iso2': 'AW',
		'prefix': 297,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Australia',
		'iso2': 'AU',
		'prefix': 61,
		'format': '.-....-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Austria',
		'iso2': 'AT',
		'prefix': 43,
		'format': '.............',
		'minlen': 4,
		'maxlen': 13
	},
	{
		'country': 'Azerbaijan',
		'iso2': 'AZ',
		'prefix': 994,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Bahamas',
		'iso2': 'BS',
		'prefix': 1242,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Bahrain',
		'iso2': 'BH',
		'prefix': 973,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Bangladesh',
		'iso2': 'BD',
		'prefix': 880,
		'format': '..........',
		'minlen': 7,
		'maxlen': 10
	},
	{
		'country': 'Barbados',
		'iso2': 'BB',
		'prefix': 1246,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Belarus',
		'iso2': 'BY',
		'prefix': 375,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Belgium',
		'iso2': 'BE',
		'prefix': 32,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Belize',
		'iso2': 'BZ',
		'prefix': 501,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Benin',
		'iso2': 'BJ',
		'prefix': 229,
		'format': '..-...-...',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Bermuda',
		'iso2': 'BM',
		'prefix': 1441,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Bhutan',
		'iso2': 'BT',
		'prefix': 975,
		'format': '..-...-...',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Bolivia',
		'iso2': 'BO',
		'prefix': 591,
		'format': '.-...-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Bosnia & Herzegovina',
		'iso2': 'BA',
		'prefix': 387,
		'format': '.........',
		'minlen': 8,
		'maxlen': 9
	},
	{
		'country': 'Botswana',
		'iso2': 'BW',
		'prefix': 267,
		'format': '..-...-...',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Brazil',
		'iso2': 'BR',
		'prefix': 55,
		'format': '..-.-....-....',
		'minlen': 11,
		'maxlen': 11
	},
	{
		'country': 'Brunei',
		'iso2': 'BN',
		'prefix': 673,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Bulgaria',
		'iso2': 'BG',
		'prefix': 359,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Burkina Faso',
		'iso2': 'BF',
		'prefix': 226,
		'format': '..-..-..-..',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Burundi',
		'iso2': 'BI',
		'prefix': 257,
		'format': '..-...-...',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Cambodia',
		'iso2': 'KH',
		'prefix': 855,
		'format': '.........',
		'minlen': 8,
		'maxlen': 9
	},
	{
		'country': 'Cameroon',
		'iso2': 'CM',
		'prefix': 237,
		'format': '....-.....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Canada',
		'iso2': 'CA',
		'prefix': 1,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Cape Verde',
		'iso2': 'CV',
		'prefix': 238,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Cayman Islands',
		'iso2': 'KY',
		'prefix': 1345,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Central African Republic',
		'iso2': 'CF',
		'prefix': 236,
		'format': '..-..-..-..',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Chad',
		'iso2': 'TD',
		'prefix': 235,
		'format': '..-..-..-..',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Chile',
		'iso2': 'CL',
		'prefix': 56,
		'format': '.-....-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'China',
		'iso2': 'CN',
		'prefix': 86,
		'format': '..-....-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Colombia',
		'iso2': 'CO',
		'prefix': 57,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Comoros',
		'iso2': 'KM',
		'prefix': 269,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Cook Islands',
		'iso2': 'CK',
		'prefix': 682,
		'format': '..-...',
		'minlen': 5,
		'maxlen': 5
	},
	{
		'country': 'Costa Rica',
		'iso2': 'CR',
		'prefix': 506,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Croatia',
		'iso2': 'HR',
		'prefix': 385,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Czechia',
		'iso2': 'CZ',
		'prefix': 420,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Dem. Rep. of the Congo',
		'iso2': 'CD',
		'prefix': 243,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Denmark',
		'iso2': 'DK',
		'prefix': 45,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Djibouti',
		'iso2': 'DJ',
		'prefix': 253,
		'format': '..-..-..-..',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Dominica',
		'iso2': 'DM',
		'prefix': 1767,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Dominican Republic',
		'iso2': 'DO',
		'prefix': 1,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Ecuador',
		'iso2': 'EC',
		'prefix': 593,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Egypt',
		'iso2': 'EG',
		'prefix': 20,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'El Salvador',
		'iso2': 'SV',
		'prefix': 503,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Equatorial Guinea',
		'iso2': 'GQ',
		'prefix': 240,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Estonia',
		'iso2': 'EE',
		'prefix': 372,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Ethiopia',
		'iso2': 'ET',
		'prefix': 251,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Fiji',
		'iso2': 'FJ',
		'prefix': 679,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Finland',
		'iso2': 'FI',
		'prefix': 358,
		'format': '..........',
		'minlen': 8,
		'maxlen': 10
	},
	{
		'country': 'France',
		'iso2': 'FR',
		'prefix': 33,
		'format': '.-..-..-..-..',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Gabon',
		'iso2': 'GA',
		'prefix': 241,
		'format': '..-..-..-..',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Gambia',
		'iso2': 'GM',
		'prefix': 220,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Georgia',
		'iso2': 'GE',
		'prefix': 995,
		'format': '...-..-..-..',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Germany',
		'iso2': 'DE',
		'prefix': 49,
		'format': '............',
		'minlen': 10,
		'maxlen': 11
	},
	{
		'country': 'Ghana',
		'iso2': 'GH',
		'prefix': 233,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Gibraltar',
		'iso2': 'GI',
		'prefix': 350,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Greece',
		'iso2': 'GR',
		'prefix': 30,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Greenland',
		'iso2': 'GL',
		'prefix': 299,
		'format': '...-...',
		'minlen': 6,
		'maxlen': 6
	},
	{
		'country': 'Grenada',
		'iso2': 'GD',
		'prefix': 473,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Guam',
		'iso2': 'GU',
		'prefix': 1671,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Guatemala',
		'iso2': 'GT',
		'prefix': 502,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Guinea',
		'iso2': 'GN',
		'prefix': 224,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Guinea-Bissau',
		'iso2': 'GW',
		'prefix': 245,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Haiti',
		'iso2': 'HT',
		'prefix': 509,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Honduras',
		'iso2': 'HN',
		'prefix': 504,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Hong Kong',
		'iso2': 'HK',
		'prefix': 852,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Hungary',
		'iso2': 'HU',
		'prefix': 36,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Iceland',
		'iso2': 'IS',
		'prefix': 354,
		'format': '.........',
		'minlen': 7,
		'maxlen': 9
	},
	{
		'country': 'India',
		'iso2': 'IN',
		'prefix': 91,
		'format': '..-....-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Indonesia',
		'iso2': 'ID',
		'prefix': 62,
		'format': '...........',
		'minlen': 9,
		'maxlen': 11
	},
	{
		'country': 'Iraq',
		'iso2': 'IQ',
		'prefix': 964,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Ireland',
		'iso2': 'IE',
		'prefix': 353,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Israel',
		'iso2': 'IL',
		'prefix': 972,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Italy',
		'iso2': 'IT',
		'prefix': 39,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Ivory Coast',
		'iso2': 'CI',
		'prefix': 225,
		'format': '..-..-..-..-..',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Jamaica',
		'iso2': 'JM',
		'prefix': 1,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Japan',
		'iso2': 'JP',
		'prefix': 81,
		'format': '..-....-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Jordan',
		'iso2': 'JO',
		'prefix': 962,
		'format': '.-....-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Kazakhstan',
		'iso2': 'KZ',
		'prefix': 7,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Kenya',
		'iso2': 'KE',
		'prefix': 254,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Kiribati',
		'iso2': 'KI',
		'prefix': 686,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Kuwait',
		'iso2': 'KW',
		'prefix': 965,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Kyrgyzstan',
		'iso2': 'KG',
		'prefix': 996,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Laos',
		'iso2': 'LA',
		'prefix': 856,
		'format': '..........',
		'minlen': 9,
		'maxlen': 10
	},
	{
		'country': 'Latvia',
		'iso2': 'LV',
		'prefix': 371,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Lebanon',
		'iso2': 'LB',
		'prefix': 961,
		'format': '........',
		'minlen': 7,
		'maxlen': 8
	},
	{
		'country': 'Lesotho',
		'iso2': 'LS',
		'prefix': 266,
		'format': '..-...-...',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Liberia',
		'iso2': 'LR',
		'prefix': 231,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Libya',
		'iso2': 'LY',
		'prefix': 218,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Liechtenstein',
		'iso2': 'LI',
		'prefix': 423,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Lithuania',
		'iso2': 'LT',
		'prefix': 370,
		'format': '...-.....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Luxembourg',
		'iso2': 'LU',
		'prefix': 352,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Macau',
		'iso2': 'MO',
		'prefix': 853,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Madagascar',
		'iso2': 'MG',
		'prefix': 261,
		'format': '..-..-...-..',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Malawi',
		'iso2': 'MW',
		'prefix': 265,
		'format': '.........',
		'minlen': 7,
		'maxlen': 9
	},
	{
		'country': 'Malaysia',
		'iso2': 'MY',
		'prefix': 60,
		'format': '..........',
		'minlen': 9,
		'maxlen': 10
	},
	{
		'country': 'Maldives',
		'iso2': 'MV',
		'prefix': 960,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Mali',
		'iso2': 'ML',
		'prefix': 223,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Malta',
		'iso2': 'MT',
		'prefix': 356,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Martinique',
		'iso2': 'MQ',
		'prefix': 596,
		'format': '...-..-..-..',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Mauritania',
		'iso2': 'MR',
		'prefix': 222,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Mauritius',
		'iso2': 'MU',
		'prefix': 230,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Mexico',
		'iso2': 'MX',
		'prefix': 52,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Moldova',
		'iso2': 'MD',
		'prefix': 373,
		'format': '..-...-...',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Monaco',
		'iso2': 'MC',
		'prefix': 377,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Mongolia',
		'iso2': 'MN',
		'prefix': 976,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Montenegro',
		'iso2': 'ME',
		'prefix': 382,
		'format': '..-...-...',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Montserrat',
		'iso2': 'MS',
		'prefix': 664,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Morocco',
		'iso2': 'MA',
		'prefix': 212,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Mozambique',
		'iso2': 'MZ',
		'prefix': 258,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Myanmar',
		'iso2': 'MM',
		'prefix': 95,
		'format': '..........',
		'minlen': 8,
		'maxlen': 10
	},
	{
		'country': 'Namibia',
		'iso2': 'NA',
		'prefix': 264,
		'format': '.-...-...',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Nepal',
		'iso2': 'NP',
		'prefix': 977,
		'format': '..-....-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Netherlands',
		'iso2': 'NL',
		'prefix': 31,
		'format': '.-....-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'New Zealand',
		'iso2': 'NZ',
		'prefix': 64,
		'format': '..........',
		'minlen': 8,
		'maxlen': 10
	},
	{
		'country': 'Nicaragua',
		'iso2': 'NI',
		'prefix': 505,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Niger',
		'iso2': 'NE',
		'prefix': 227,
		'format': '..-...-...',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Nigeria',
		'iso2': 'NG',
		'prefix': 234,
		'format': '..-....-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Norway',
		'iso2': 'NO',
		'prefix': 47,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Oman',
		'iso2': 'OM',
		'prefix': 968,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Pakistan',
		'iso2': 'PK',
		'prefix': 92,
		'format': '...-....-....',
		'minlen': 11,
		'maxlen': 11
	},
	{
		'country': 'Palau',
		'iso2': 'PW',
		'prefix': 680,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Palestine',
		'iso2': 'PS',
		'prefix': 970,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Panama',
		'iso2': 'PA',
		'prefix': 507,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Papua New Guinea',
		'iso2': 'PG',
		'prefix': 675,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Paraguay',
		'iso2': 'PY',
		'prefix': 595,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Peru',
		'iso2': 'PE',
		'prefix': 51,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Philippines',
		'iso2': 'PH',
		'prefix': 63,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Poland',
		'iso2': 'PL',
		'prefix': 48,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Portugal',
		'iso2': 'PT',
		'prefix': 351,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Puerto Rico',
		'iso2': 'PR',
		'prefix': 1,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Qatar',
		'iso2': 'QA',
		'prefix': 974,
		'format': '..-...-...',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Republic of the Congo',
		'iso2': 'CG',
		'prefix': 242,
		'format': '..-..-.....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Romania',
		'iso2': 'RO',
		'prefix': 40,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Russia',
		'iso2': 'RU',
		'prefix': 7,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Rwanda',
		'iso2': 'RW',
		'prefix': 250,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Samoa',
		'iso2': 'WS',
		'prefix': 685,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Sao Tome & Principe',
		'iso2': 'ST',
		'prefix': 239,
		'format': '..-....',
		'minlen': 6,
		'maxlen': 6
	},
	{
		'country': 'Saudi Arabia',
		'iso2': 'SA',
		'prefix': 966,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Senegal',
		'iso2': 'SN',
		'prefix': 221,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Serbia',
		'iso2': 'RS',
		'prefix': 381,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Seychelles',
		'iso2': 'SC',
		'prefix': 248,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Sierra Leone',
		'iso2': 'SL',
		'prefix': 232,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Singapore',
		'iso2': 'SG',
		'prefix': 65,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Slovakia',
		'iso2': 'SK',
		'prefix': 421,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Slovenia',
		'iso2': 'SI',
		'prefix': 386,
		'format': '..-...-...',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Solomon Islands',
		'iso2': 'SB',
		'prefix': 677,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Somalia',
		'iso2': 'SO',
		'prefix': 252,
		'format': '.........',
		'minlen': 8,
		'maxlen': 9
	},
	{
		'country': 'South Africa',
		'iso2': 'ZA',
		'prefix': 27,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'South Korea',
		'iso2': 'KR',
		'prefix': 82,
		'format': '..........',
		'minlen': 8,
		'maxlen': 10
	},
	{
		'country': 'South Sudan',
		'iso2': 'SS',
		'prefix': 211,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Spain',
		'iso2': 'ES',
		'prefix': 34,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Sri Lanka',
		'iso2': 'LK',
		'prefix': 94,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'St. Kitts & Nevis',
		'iso2': 'KN',
		'prefix': 1,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'St. Lucia',
		'iso2': 'LC',
		'prefix': 1,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'St. Vincent & the Grenadines',
		'iso2': 'VC',
		'prefix': 1,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Suriname',
		'iso2': 'SR',
		'prefix': 597,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Swaziland',
		'iso2': 'SZ',
		'prefix': 268,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Sweden',
		'iso2': 'SE',
		'prefix': 46,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Switzerland',
		'iso2': 'CH',
		'prefix': 41,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Taiwan',
		'iso2': 'TW',
		'prefix': 886,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Tajikistan',
		'iso2': 'TJ',
		'prefix': 992,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Tanzania',
		'iso2': 'TZ',
		'prefix': 255,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Thailand',
		'iso2': 'TH',
		'prefix': 66,
		'format': '.-....-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Timor-Leste',
		'iso2': 'TL',
		'prefix': 670,
		'format': '....-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Togo',
		'iso2': 'TG',
		'prefix': 288,
		'format': '..-..-..-..',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Tonga',
		'iso2': 'TO',
		'prefix': 676,
		'format': '..-...',
		'minlen': 5,
		'maxlen': 5
	},
	{
		'country': 'Trinidad & Tobago',
		'iso2': 'TT',
		'prefix': 868,
		'format': '...-....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Tunisia',
		'iso2': 'TN',
		'prefix': 216,
		'format': '..-...-...',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Turkey',
		'iso2': 'TR',
		'prefix': 90,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Turkmenistan',
		'iso2': 'TM',
		'prefix': 993,
		'format': '..-...-...',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Turks & Caicos Islands',
		'iso2': 'TC',
		'prefix': 1,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Uganda',
		'iso2': 'UG',
		'prefix': 256,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Ukraine',
		'iso2': 'UA',
		'prefix': 380,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'United Arab Emirates',
		'iso2': 'AE',
		'prefix': 971,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'United Kingdom',
		'iso2': 'GB',
		'prefix': 44,
		'format': '....-...-...',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'United States',
		'iso2': 'US',
		'prefix': 1,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Uruguay',
		'iso2': 'UY',
		'prefix': 598,
		'format': '.-...-....',
		'minlen': 8,
		'maxlen': 8
	},
	{
		'country': 'Uzbekistan',
		'iso2': 'UZ',
		'prefix': 998,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Vanuatu',
		'iso2': 'VU',
		'prefix': 678,
		'format': '..-.....',
		'minlen': 7,
		'maxlen': 7
	},
	{
		'country': 'Venezuela',
		'iso2': 'VE',
		'prefix': 58,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Vietnam',
		'iso2': 'VN',
		'prefix': 84,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Virgin Islands, British',
		'iso2': 'VG',
		'prefix': 1,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Virgin Islands, US',
		'iso2': 'VI',
		'prefix': 1,
		'format': '...-...-....',
		'minlen': 10,
		'maxlen': 10
	},
	{
		'country': 'Yemen',
		'iso2': 'YE',
		'prefix': 967,
		'format': '...-...-...',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Zambia',
		'iso2': 'ZM',
		'prefix': 260,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	},
	{
		'country': 'Zimbabwe',
		'iso2': 'ZW',
		'prefix': 263,
		'format': '..-...-....',
		'minlen': 9,
		'maxlen': 9
	}
]
export default countryCodes