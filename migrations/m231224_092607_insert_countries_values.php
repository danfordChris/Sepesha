<?php

use yii\db\Migration;

/**
 * Class m231224_092607_insert_countries_values
 */
class m231224_092607_insert_countries_values extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->batchInsert('{{%countries}}', ['country_id', 'iso', 'name', 'iso3', 'phonecode', 'continent_code', 'continent_name'], [
            [1, 'TZ', 'Tanzania', 'TZA', 255, 'AF', 'Africa'],
            [2, 'AX', 'Aland Islands', 'ALA', 358, 'EU', 'Europe'],
            [3, 'AL', 'Albania', 'ALB', 355, 'EU', 'Europe'],
            [4, 'DZ', 'Algeria', 'DZA', 213, 'AF', 'Africa'],
            [5, 'AS', 'American Samoa', 'ASM', 1684, 'OC', 'Oceania'],
            [6, 'AD', 'Andorra', 'AND', 376, 'EU', 'Europe'],
            [7, 'AO', 'Angola', 'AGO', 244, 'AF', 'Africa'],
            [8, 'AI', 'Anguilla', 'AIA', 1264, 'NA', 'North America'],
            [9, 'AQ', 'Antarctica', 'ATA', 0, 'AN', 'Antarctica'],
            [10, 'AG', 'Antigua and Barbuda', 'ATG', 1268, 'NA', 'North America'],
            [21, 'BY', 'Belarus', 'BLR', 375, 'EU', 'Europe'],
            [22, 'BE', 'Belgium', 'BEL', 32, 'EU', 'Europe'],
            [23, 'BZ', 'Belize', 'BLZ', 501, 'NA', 'North America'],
            [24, 'BJ', 'Benin', 'BEN', 229, 'AF', 'Africa'],
            [25, 'BM', 'Bermuda', 'BMU', 1441, 'NA', 'North America'],
            [26, 'BT', 'Bhutan', 'BTN', 975, 'AS', 'Asia'],
            [27, 'BO', 'Bolivia', 'BOL', 591, 'SA', 'South America'],
            [28, 'BQ', 'Bonaire, Sint Eustatius and Saba', 'BES', 599, 'NA', 'North America'],
            [29, 'BA', 'Bosnia and Herzegovina', 'BIH', 387, 'EU', 'Europe'],
            [30, 'BW', 'Botswana', 'BWA', 267, 'AF', 'Africa'],
            [31, 'BV', 'Bouvet Island', 'BVT', 47, 'AN', 'Antarctica'],
            [32, 'BR', 'Brazil', 'BRA', 55, 'SA', 'South America'],
            [33, 'IO', 'British Indian Ocean Territory', 'IOT', 246, 'AS', 'Asia'],
            [34, 'BN', 'Brunei', 'BRN', 673, 'AS', 'Asia'],
            [35, 'BG', 'Bulgaria', 'BGR', 359, 'EU', 'Europe'],
            [36, 'BF', 'Burkina Faso', 'BFA', 226, 'AF', 'Africa'],
            [37, 'BI', 'Burundi', 'BDI', 257, 'AF', 'Africa'],
            [38, 'KH', 'Cambodia', 'KHM', 855, 'AS', 'Asia'],
            [39, 'CM', 'Cameroon', 'CMR', 237, 'AF', 'Africa'],
            [40, 'CA', 'Canada', 'CAN', 1, 'NA', 'North America'],
            [41, 'CV', 'Cape Verde', 'CPV', 238, 'AF', 'Africa'],
            [42, 'KY', 'Cayman Islands', 'CYM', 1345, 'NA', 'North America'],
            [43, 'CF', 'Central African Republic', 'CAF', 236, 'AF', 'Africa'],
            [44, 'TD', 'Chad', 'TCD', 235, 'AF', 'Africa'],
            [45, 'CL', 'Chile', 'CHL', 56, 'SA', 'South America'],
            [46, 'CN', 'China', 'CHN', 86, 'AS', 'Asia'],
            [47, 'CX', 'Christmas Island', 'CXR', 61, 'AS', 'Asia'],
            [48, 'CC', 'Cocos (Keeling) Islands', 'CCK', 61, 'AS', 'Asia'],
            [49, 'CO', 'Colombia', 'COL', 57, 'SA', 'South America'],
            [50, 'KM', 'Comoros', 'COM', 269, 'AF', 'Africa'],
            [51, 'CG', 'Congo', 'COG', 242, 'AF', 'Africa'],
            [52, 'CD', 'Democratic Republic of the Congo', 'COD', 243, 'AF', 'Africa'],
            [53, 'CK', 'Cook Islands', 'COK', 682, 'OC', 'Oceania'],
            [54, 'CR', 'Costa Rica', 'CRI', 506, 'NA', 'North America'],
            [55, 'CI', 'Cote d\'Ivoire', 'CIV', 225, 'AF', 'Africa'],
            [56, 'HR', 'Croatia', 'HRV', 385, 'EU', 'Europe'],
            [57, 'CU', 'Cuba', 'CUB', 53, 'NA', 'North America'],
            [58, 'CW', 'Curacao', 'CUW', 599, 'NA', 'North America'],
            [59, 'CY', 'Cyprus', 'CYP', 357, 'EU', 'Europe'],
            [60, 'CZ', 'Czech Republic', 'CZE', 420, 'EU', 'Europe'],
            [61, 'DK', 'Denmark', 'DNK', 45, 'EU', 'Europe'],
            [62, 'DJ', 'Djibouti', 'DJI', 253, 'AF', 'Africa'],
            [63, 'DM', 'Dominica', 'DMA', 1767, 'NA', 'North America'],
            [64, 'DO', 'Dominican Republic', 'DOM', 1809, 'NA', 'North America'],
            [65, 'EC', 'Ecuador', 'ECU', 593, 'SA', 'South America'],
            [66, 'EG', 'Egypt', 'EGY', 20, 'AF', 'Africa'],
            [67, 'SV', 'El Salvador', 'SLV', 503, 'NA', 'North America'],
            [68, 'GQ', 'Equatorial Guinea', 'GNQ', 240, 'AF', 'Africa'],
            [69, 'ER', 'Eritrea', 'ERI', 291, 'AF', 'Africa'],
            [70, 'EE', 'Estonia', 'EST', 372, 'EU', 'Europe'],
            [71, 'ET', 'Ethiopia', 'ETH', 251, 'AF', 'Africa'],
            [72, 'FK', 'Falkland Islands (Malvinas)', 'FLK', 500, 'SA', 'South America'],
            [73, 'FO', 'Faroe Islands', 'FRO', 298, 'EU', 'Europe'],
            [74, 'FJ', 'Fiji', 'FJI', 679, 'OC', 'Oceania'],
            [75, 'FI', 'Finland', 'FIN', 358, 'EU', 'Europe'],
            [76, 'FR', 'France', 'FRA', 33, 'EU', 'Europe'],
            [77, 'GF', 'French Guiana', 'GUF', 594, 'SA', 'South America'],
            [78, 'PF', 'French Polynesia', 'PYF', 689, 'OC', 'Oceania'],
            [79, 'TF', 'French Southern Territories', 'ATF', 262, 'AN', 'Antarctica'],
            [80, 'GA', 'Gabon', 'GAB', 241, 'AF', 'Africa'],
            [81, 'GM', 'Gambia', 'GMB', 220, 'AF', 'Africa'],
            [82, 'GE', 'Georgia', 'GEO', 995, 'AS', 'Asia'],
            [83, 'DE', 'Germany', 'DEU', 49, 'EU', 'Europe'],
            [84, 'GH', 'Ghana', 'GHA', 233, 'AF', 'Africa'],
            [85, 'GI', 'Gibraltar', 'GIB', 350, 'EU', 'Europe'],
            [86, 'GR', 'Greece', 'GRC', 30, 'EU', 'Europe'],
            [87, 'GL', 'Greenland', 'GRL', 299, 'NA', 'North America'],
            [88, 'GD', 'Grenada', 'GRD', 1473, 'NA', 'North America'],
            [89, 'GP', 'Guadeloupe', 'GLP', 590, 'NA', 'North America'],
            [90, 'GU', 'Guam', 'GUM', 1671, 'OC', 'Oceania'],
            [91, 'GT', 'Guatemala', 'GTM', 502, 'NA', 'North America'],
            [92, 'GG', 'Guernsey', 'GGY', 44, 'EU', 'Europe'],
            [93, 'GN', 'Guinea', 'GIN', 224, 'AF', 'Africa'],
            [94, 'GW', 'Guinea-Bissau', 'GNB', 245, 'AF', 'Africa'],
            [95, 'GY', 'Guyana', 'GUY', 592, 'SA', 'South America'],
            [96, 'HT', 'Haiti', 'HTI', 509, 'NA', 'North America'],
            [97, 'HM', 'Heard Island and Mcdonald Islands', 'HMD', 0, 'AN', 'Antarctica'],
            [98, 'VA', 'Holy See (Vatican City State)', 'VAT', 39, 'EU', 'Europe'],
            [99, 'HN', 'Honduras', 'HND', 504, 'NA', 'North America'],
            [100, 'HK', 'Hong Kong', 'HKG', 852, 'AS', 'Asia'],
            [101, 'HU', 'Hungary', 'HUN', 36, 'EU', 'Europe'],
            [102, 'IS', 'Iceland', 'ISL', 354, 'EU', 'Europe'],
            [103, 'IN', 'India', 'IND', 91, 'AS', 'Asia'],
            [104, 'ID', 'Indonesia', 'IDN', 62, 'AS', 'Asia'],
            [105, 'IR', 'Iran, Islamic Republic of', 'IRN', 98, 'AS', 'Asia'],
            [106, 'IQ', 'Iraq', 'IRQ', 964, 'AS', 'Asia'],
            [107, 'IE', 'Ireland', 'IRL', 353, 'EU', 'Europe'],
            [108, 'IM', 'Isle of Man', 'IMN', 44, 'EU', 'Europe'],
            [109, 'IL', 'Israel', 'ISR', 972, 'AS', 'Asia'],
            [110, 'IT', 'Italy', 'ITA', 39, 'EU', 'Europe'],
            [111, 'JM', 'Jamaica', 'JAM', 1876, 'NA', 'North America'],
            [112, 'JP', 'Japan', 'JPN', 81, 'AS', 'Asia'],
            [113, 'JE', 'Jersey', 'JEY', 44, 'EU', 'Europe'],
            [114, 'JO', 'Jordan', 'JOR', 962, 'AS', 'Asia'],
            [115, 'KZ', 'Kazakhstan', 'KAZ', 7, 'AS', 'Asia'],
            [116, 'KE', 'Kenya', 'KEN', 254, 'AF', 'Africa'],
            [117, 'KI', 'Kiribati', 'KIR', 686, 'OC', 'Oceania'],
            [118, 'KP', ' Democratic People\'s Republic of Korea', 'PRK', 850, 'AS', 'Asia'],
            [119, 'KR', 'Korea, Republic of', 'KOR', 82, 'AS', 'Asia'],
            [120, 'KW', 'Kuwait', 'KWT', 965, 'AS', 'Asia'],
            [121, 'KG', 'Kyrgyzstan', 'KGZ', 996, 'AS', 'Asia'],
            [122, 'LA', 'Lao People\'s Democratic Republic', 'LAO', 856, 'AS', 'Asia'],
            [123, 'LV', 'Latvia', 'LVA', 371, 'EU', 'Europe'],
            [124, 'LB', 'Lebanon', 'LBN', 961, 'AS', 'Asia'],
            [125, 'LS', 'Lesotho', 'LSO', 266, 'AF', 'Africa'],
            [126, 'LR', 'Liberia', 'LBR', 231, 'AF', 'Africa'],
            [127, 'LY', 'Libya', 'LBY', 218, 'AF', 'Africa'],
            [128, 'LI', 'Liechtenstein', 'LIE', 423, 'EU', 'Europe'],
            [129, 'LT', 'Lithuania', 'LTU', 370, 'EU', 'Europe'],
            [130, 'LU', 'Luxembourg', 'LUX', 352, 'EU', 'Europe'],
            [131, 'MO', 'Macao', 'MAC', 853, 'AS', 'Asia'],
            [132, 'MK', 'The Former Yugoslav Republic of Macedonia', 'MKD', 389, 'EU', 'Europe'],
            [133, 'MG', 'Madagascar', 'MDG', 261, 'AF', 'Africa'],
            [134, 'MW', 'Malawi', 'MWI', 265, 'AF', 'Africa'],
            [135, 'MY', 'Malaysia', 'MYS', 60, 'AS', 'Asia'],
            [136, 'MV', 'Maldives', 'MDV', 960, 'AS', 'Asia'],
            [137, 'ML', 'Mali', 'MLI', 223, 'AF', 'Africa'],
            [138, 'MT', 'Malta', 'MLT', 356, 'EU', 'Europe'],
            [139, 'MH', 'Marshall Islands', 'MHL', 692, 'OC', 'Oceania'],
            [140, 'MQ', 'Martinique', 'MTQ', 596, 'NA', 'North America'],
            [141, 'MR', 'Mauritania', 'MRT', 222, 'AF', 'Africa'],
            [142, 'MU', 'Mauritius', 'MUS', 230, 'AF', 'Africa'],
            [143, 'YT', 'Mayotte', 'MYT', 262, 'AF', 'Africa'],
            [144, 'MX', 'Mexico', 'MEX', 52, 'NA', 'North America'],
            [145, 'FM', 'Federated States of Micronesia', 'FSM', 691, 'OC', 'Oceania'],
            [146, 'MD', 'Republic of Moldova', 'MDA', 373, 'EU', 'Europe'],
            [147, 'MC', 'Monaco', 'MCO', 377, 'EU', 'Europe'],
            [148, 'MN', 'Mongolia', 'MNG', 976, 'AS', 'Asia'],
            [149, 'ME', 'Montenegro', 'MNE', 382, 'EU', 'Europe'],
            [150, 'MS', 'Montserrat', 'MSR', 1664, 'NA', 'North America'],
            [151, 'MA', 'Morocco', 'MAR', 212, 'AF', 'Africa'],
            [152, 'MZ', 'Mozambique', 'MOZ', 258, 'AF', 'Africa'],
            [153, 'MM', 'Myanmar', 'MMR', 95, 'AS', 'Asia'],
            [154, 'NA', 'Namibia', 'NAM', 264, 'AF', 'Africa'],
            [155, 'NR', 'Nauru', 'NRU', 674, 'OC', 'Oceania'],
            [156, 'NP', 'Nepal', 'NPL', 977, 'AS', 'Asia'],
            [157, 'NL', 'Netherlands', 'NLD', 31, 'EU', 'Europe'],
            [158, 'NC', 'New Caledonia', 'NCL', 687, 'OC', 'Oceania'],
            [159, 'NZ', 'New Zealand', 'NZL', 64, 'OC', 'Oceania'],
            [160, 'NI', 'Nicaragua', 'NIC', 505, 'NA', 'North America'],
            [161, 'NE', 'Niger', 'NER', 227, 'AF', 'Africa'],
            [162, 'NG', 'Nigeria', 'NGA', 234, 'AF', 'Africa'],
            [163, 'NU', 'Niue', 'NIU', 683, 'OC', 'Oceania'],
            [164, 'NF', 'Norfolk Island', 'NFK', 672, 'OC', 'Oceania'],
            [165, 'MP', 'Northern Mariana Islands', 'MNP', 1670, 'OC', 'Oceania'],
            [166, 'NO', 'Norway', 'NOR', 47, 'EU', 'Europe'],
            [167, 'OM', 'Oman', 'OMN', 968, 'AS', 'Asia'],
            [168, 'PK', 'Pakistan', 'PAK', 92, 'AS', 'Asia'],
            [169, 'PW', 'Palau', 'PLW', 680, 'OC', 'Oceania'],
            [170, 'PS', 'Palestine, State of', 'PSE', 970, 'AS', 'Asia'],
            [171, 'PA', 'Panama', 'PAN', 507, 'NA', 'North America'],
            [172, 'PG', 'Papua New Guinea', 'PNG', 675, 'OC', 'Oceania'],
            [173, 'PY', 'Paraguay', 'PRY', 595, 'SA', 'South America'],
            [174, 'PE', 'Peru', 'PER', 51, 'SA', 'South America'],
            [175, 'PH', 'Philippines', 'PHL', 63, 'AS', 'Asia'],
            [176, 'PN', 'Pitcairn', 'PCN', 870, 'OC', 'Oceania'],
            [177, 'PL', 'Poland', 'POL', 48, 'EU', 'Europe'],
            [178, 'PT', 'Portugal', 'PRT', 351, 'EU', 'Europe'],
            [179, 'PR', 'Puerto Rico', 'PRI', 1, 'NA', 'North America'],
            [180, 'QA', 'Qatar', 'QAT', 974, 'AS', 'Asia'],
            [181, 'RE', 'Reunion', 'REU', 262, 'AF', 'Africa'],
            [182, 'RO', 'Romania', 'ROU', 40, 'EU', 'Europe'],
            [183, 'RU', 'Russian Federation', 'RUS', 7, 'EU', 'Europe'],
            [184, 'RW', 'Rwanda', 'RWA', 250, 'AF', 'Africa'],
            [185, 'BL', 'Saint Barthelemy', 'BLM', 590, 'NA', 'North America'],
            [186, 'SH', 'Saint Helena', 'SHN', 290, 'AF', 'Africa'],
            [187, 'KN', 'Saint Kitts and Nevis', 'KNA', 1869, 'NA', 'North America'],
            [188, 'LC', 'Saint Lucia', 'LCA', 1758, 'NA', 'North America'],
            [189, 'MF', 'Saint Martin (French part)', 'MAF', 590, 'NA', 'North America'],
            [190, 'PM', 'Saint Pierre and Miquelon', 'SPM', 508, 'NA', 'North America'],
            [191, 'VC', 'Saint Vincent and the Grenadines', 'VCT', 1784, 'NA', 'North America'],
            [192, 'WS', 'Samoa', 'WSM', 685, 'OC', 'Oceania'],
            [193, 'SM', 'San Marino', 'SMR', 378, 'EU', 'Europe'],
            [194, 'ST', 'Sao Tome and Principe', 'STP', 239, 'AF', 'Africa'],
            [195, 'SA', 'Saudi Arabia', 'SAU', 966, 'AS', 'Asia'],
            [196, 'SN', 'Senegal', 'SEN', 221, 'AF', 'Africa'],
            [197, 'RS', 'Serbia', 'SRB', 381, 'EU', 'Europe'],
            [198, 'SC', 'Seychelles', 'SYC', 248, 'AF', 'Africa'],
            [199, 'SL', 'Sierra Leone', 'SLE', 232, 'AF', 'Africa'],
            [200, 'SG', 'Singapore', 'SGP', 65, 'AS', 'Asia'],
            [201, 'SX', 'Sint Maarten (Dutch part)', 'SXM', 1721, 'NA', 'North America'],
            [202, 'SK', 'Slovakia', 'SVK', 421, 'EU', 'Europe'],
            [203, 'SI', 'Slovenia', 'SVN', 386, 'EU', 'Europe'],
            [204, 'SB', 'Solomon Islands', 'SLB', 677, 'OC', 'Oceania'],
            [205, 'SO', 'Somalia', 'SOM', 252, 'AF', 'Africa'],
            [206, 'ZA', 'South Africa', 'ZAF', 27, 'AF', 'Africa'],
            [207, 'GS', 'South Georgia and the South Sandwich Islands', 'SGS', 500, 'AN', 'Antarctica'],
            [208, 'SS', 'South Sudan', 'SSD', 211, 'AF', 'Africa'],
            [209, 'ES', 'Spain', 'ESP', 34, 'EU', 'Europe'],
            [210, 'LK', 'Sri Lanka', 'LKA', 94, 'AS', 'Asia'],
            [211, 'SD', 'Sudan', 'SDN', 249, 'AF', 'Africa'],
            [212, 'SR', 'Suriname', 'SUR', 597, 'SA', 'South America'],
            [213, 'SJ', 'Svalbard and Jan Mayen', 'SJM', 47, 'EU', 'Europe'],
            [214, 'SZ', 'Swaziland', 'SWZ', 268, 'AF', 'Africa'],
            [215, 'SE', 'Sweden', 'SWE', 46, 'EU', 'Europe'],
            [216, 'CH', 'Switzerland', 'CHE', 41, 'EU', 'Europe'],
            [217, 'SY', 'Syrian Arab Republic', 'SYR', 963, 'AS', 'Asia'],
            [218, 'TW', 'Province of China Taiwan', 'TWN', 886, 'AS', 'Asia'],
            [219, 'TJ', 'Tajikistan', 'TJK', 992, 'AS', 'Asia'],
            [220, 'AF', 'Afghanistan', 'AFG', 93, 'AS', 'Asia'],
            [221, 'TH', 'Thailand', 'THA', 66, 'AS', 'Asia'],
            [222, 'TL', 'Timor-Leste', 'TLS', 670, 'AS', 'Asia'],
            [223, 'TG', 'Togo', 'TGO', 228, 'AF', 'Africa'],
            [224, 'TK', 'Tokelau', 'TKL', 690, 'OC', 'Oceania'],
            [225, 'TO', 'Tonga', 'TON', 676, 'OC', 'Oceania'],
            [226, 'TT', 'Trinidad and Tobago', 'TTO', 1868, 'NA', 'North America'],
            [227, 'TN', 'Tunisia', 'TUN', 216, 'AF', 'Africa'],
            [228, 'TR', 'Turkey', 'TUR', 90, 'EU', 'Europe'],
            [229, 'TM', 'Turkmenistan', 'TKM', 993, 'AS', 'Asia'],
            [230, 'TC', 'Turks and Caicos Islands', 'TCA', 1649, 'NA', 'North America'],
            [231, 'TV', 'Tuvalu', 'TUV', 688, 'OC', 'Oceania'],
            [232, 'UG', 'Uganda', 'UGA', 256, 'AF', 'Africa'],
            [233, 'UA', 'Ukraine', 'UKR', 380, 'EU', 'Europe'],
            [234, 'AE', 'United Arab Emirates', 'ARE', 971, 'AS', 'Asia'],
            [235, 'GB', 'United Kingdom', 'GBR', 44, 'EU', 'Europe'],
            [236, 'US', 'United States', 'USA', 1, 'NA', 'North America'],
            [237, 'UM', 'United States Minor Outlying Islands', 'UMI', 1, 'OC', 'Oceania'],
            [238, 'UY', 'Uruguay', 'URY', 598, 'SA', 'South America'],
            [239, 'UZ', 'Uzbekistan', 'UZB', 998, 'AS', 'Asia'],
            [240, 'VU', 'Vanuatu', 'VUT', 678, 'OC', 'Oceania'],
            [241, 'VE', 'Bolivarian Republic of Venezuela', 'VEN', 58, 'SA', 'South America'],
            [242, 'VN', 'Viet Nam', 'VNM', 84, 'AS', 'Asia'],
            [243, 'VG', 'Virgin Islands, British', 'VGB', 1284, 'NA', 'North America'],
            [244, 'VI', 'Virgin Islands, U.S.', 'VIR', 1340, 'NA', 'North America'],
            [245, 'WF', 'Wallis and Futuna', 'WLF', 681, 'OC', 'Oceania'],
            [246, 'EH', 'Western Sahara', 'ESH', 212, 'AF', 'Africa'],
            [247, 'YE', 'Yemen', 'YEM', 967, 'AS', 'Asia'],
            [248, 'ZM', 'Zambia', 'ZMB', 260, 'AF', 'Africa'],
            [249, 'ZW', 'Zimbabwe', 'ZWE', 263, 'AF', 'Africa'],
            [250, 'AX', 'Aland Islands', 'ALA', 358, 'EU', 'Europe'],
            [251, 'BQ', 'Sint Eustatius and Saba Bonaire', 'BES', 599, 'NA', 'North America'],
            [252, 'CW', 'Curacao', 'CUW', 599, 'NA', 'North America']
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m231224_092607_insert_countries_values cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m231224_092607_insert_countries_values cannot be reverted.\n";

        return false;
    }
    */
}
