'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js": "0b821dcb4f94d309e8fe058b127d288a",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"version.json": "d161e637f898d27e785f5c868eb1fe69",
"index.html": "6dec71aa46671f9b5431b3cc76e9cd9a",
"/": "6dec71aa46671f9b5431b3cc76e9cd9a",
"favicon.png": "da6acf277eb47530664358a37348a8b7",
"assets/FontManifest.json": "37743dae92c152d98295f166ec3f487e",
"assets/AssetManifest.bin.json": "ca15716d12e53f58ce8e52e5256f8f57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/C_PointsInfo.json": "bbb26b8ae81f77044f261bb7bbd91265",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/z_PointsInfo.json": "f4d4b1ee7a7b5a30855f2acabacb22b4",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/t_PointsInfo.json": "2d57aaeab53afc6a3b8ce7acf9a67e96",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/n_lower_PointsInfo.json": "600b5cb77a6310562d24e5bf1e285de5",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/f_lower_PointsInfo.json": "90eda69990ae1adc9e01b0fca10a4d6e",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/R_PointsInfo.json": "d3367b9bb36647989a68d3a8be5fc306",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/u_lower_PointsInfo.json": "faf31e11eab8ed6271357dd30dc060e9",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/x_PointsInfo.json": "d3fb2a79a193ad3220f8178fb6b0db08",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/q_PointsInfo.json": "0d5f6385aa3b212e8e62519d1a4b01b4",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/j_lower_PointsInfo.json": "dfe4754dbf61a16d940f0c1783a777e3",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/i_PointsInfo.json": "e89cf7697004191b28cf41d0332ad687",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/e_lower_PointsInfo.json": "3edcb71ef216cf4c543473eb54402e1b",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/p_PointsInfo.json": "2ead5b7c0767e10815151162c08641a8",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/N_PointsInfo.json": "3363bca88e997caeb13c99198cc88a6e",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/b_lower_PointsInfo.json": "722b82eea764ae3bb9396c997e1fdfc2",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/d_lower_PointsInfo.json": "f602351590420ba876cdecec1dccc102",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/S_PointsInfo.json": "15b8807d0c066ea02d5a9f895b15467a",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/l_lower_PointsInfo.json": "250105ae9f6c681d29561602134592d7",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/h_lower_PointsInfo.json": "43f2d6183d38aa1bea88bad7c611ab8a",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/K_PointsInfo.json": "894707190ffa87889626a8bb6b8e9a74",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/A_PointsInfo.json": "d606ffe9084e307598d481be6a9613e1",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/v_PointsInfo.json": "23c7aaf9335783640912c9ada38e1ba4",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/g_lower_PointsInfo.json": "12912ef2019d4596ece585165e169a38",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/y_PointsInfo.json": "aa75b681fbf5b1edff04c024c7a7f18f",
"assets/packages/tracing_game/assets/phontics_assets_points/english_phontics/M_PointsInfo.json": "2b8135a3b9cdff280d6ebdb32510da31",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/non_big_PointsInfo.json": "6cf2c451d1f96b8706138f3e8cb111f1",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/zen_big_PointsInfo.json": "eabefcd9986d35ad31f739c964e558f4",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/lam_big_PointsInfo.json": "2c44bf80f6b01cd18ffe4515a8a6931c",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/tha2_big_PointsInfo.json": "f2768aee3b015905dfccdd80616b06f2",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/lam_small_PointsInfo.json": "9a8ac2cb45c1bcd31aac0f0b3d932f23",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/3en_big_PointsInfo.json": "bca8bca3dd96649a538dfdeebe333361",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/heh_3_PointsInfo.json": "68a826d4f79d86984d617e9b90f7b84f",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/kaf_big_PointsInfo.json": "fe47c1bad406ac9abe552123c570a39b",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/ha2_small_PointsInfo.json": "16ece3b3695eb8ea4ab1f0ea6ef44763",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/dad_small_PointsInfo.json": "ec90fce1ad1259fd6aca4cd9e6320615",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/ya2_big_PointsInfo.json": "16356980267e117208bc93eaed908537",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/ghen_big_PointsInfo.json": "6837b7db60f2957eb2b6e22ccd038984",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/ta2_small_PointsInfo.json": "674b3e8b2f14a40bba573fa013fa5c8e",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/gem_big_PointsInfo.json": "a2767ff1b3235a0f7a01a54539af58da",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/sen_big_PointsInfo.json": "e4324602b7a5f95c51b7f4ad0011bbce",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/zal_big_PointsInfo.json": "9d874aee5ac0aedddc7416a57a861bcc",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/heh_2_PointsInfo.json": "448692596cf4bcd8ca57a925f92ac8ba",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/mem_small_PointsInfo.json": "d4493486af16f255a3508fd1a87b03db",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/heh_4_PointsInfo.json": "419aae6ce4b31aa7b0f14783d1345800",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/heh_1_PointsInfo.json": "26df45ca3940db03afd0563fbdab95af",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/ha2_big_PointsInfo.json": "42aa5d044b9c03321a8f3ec74af98dc0",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/dad_big_PointsInfo.json": "a6b544e0576192da5446ad5816efc7d7",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/mem_big_PointsInfo.json": "c98ab0354294fb526855d21797d10fc4",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/sad_big_PointsInfo.json": "58e20849ab8affebc8d899bd3306ef91",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/ra2_big_PointsInfo.json": "83c4f54238c8b66360944156a79f8cf0",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/waw_big_PointsInfo.json": "672f827d49faa6331058e420d9c21d21",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/fa2_big_PointsInfo.json": "a3713e97bf3bd5f13d4ad9ebe5d3091b",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/ba2_big_PointsInfo.json": "f00400f13dbd155f2eb0112f6e5aa6d9",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/alef_big_PointsInfo.json": "3e6acbd9d42b8e655aefe950a8abedce",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/sen_small_PointsInfo.json": "297b86d09a579bcd86419aa9b77230db",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/shen_big_PointsInfo.json": "97346792c87e41b632a146a693e6d96f",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/3en_small_PointsInfo.json": "9761737367f8aad701bdd034e2bbffd6",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/ghen_small_PointsInfo.json": "9ce2e389accd8feeac3a165f91bb01c7",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/theh_big_PointsInfo.json": "72d9bd6f569256afc5c56c49872786e0",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/ba2_small_PointsInfo.json": "f336c9673eef04eaecd8e58e25fdb660",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/theh_small_PointsInfo.json": "b570b009be9a005051b33c44123fcd8d",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/khah_small_PointsInfo.json": "f048a8ac067696607308b228121f0546",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/sad_small_PointsInfo.json": "f1c6463cdf878b52ea4bc52e4ecab8e8",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/ta2_big_PointsInfo.json": "9125567e259283516a4557db1b870526",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/fa2_small_PointsInfo.json": "e0e593ae9ab4f67dc32874c193d572c9",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/qaf_small_PointsInfo.json": "f23d683a74c03a33e0fe214dde665d1a",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/dal_big_PointsInfo.json": "154cdf8d2e1d8662a678bc71023b3803",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/ya2_small_PointsInfo.json": "df1c0ba22e7113c76dd49032f70fa1de",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/shen_small_PointsInfo.json": "7c4facc64b36532d9da717b3fcf2b4dd",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/non_small_PointsInfo.json": "e4c6739ad348697347da2bb3d712adc5",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/gem_small_PointsInfo.json": "353a51de419a5ee02e60b3d3ba5a1593",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/tah_big_PointsInfo.json": "a1bba0ebe636ea808c4c92e00dc54d8f",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/kaf_small_PointsInfo.json": "02a7ab165c0cdf84f442be7e8e7c0124",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/qaf_big_PointsInfo.json": "57fc975a879c54bdeba816651a034c25",
"assets/packages/tracing_game/assets/phontics_assets_points/arabic_phontics/khah_big_PointsInfo.json": "b2212e8357493ead98397dfef3dde620",
"assets/packages/tracing_game/assets/phontics_assets_points/numbers_phontics/4_PointsInfo.json": "36c24285d8bb0f18a5813a4319ae05dc",
"assets/packages/tracing_game/assets/phontics_assets_points/numbers_phontics/9_PointsInfo.json": "3064434799e59c26197e1213fc2ef21b",
"assets/packages/tracing_game/assets/phontics_assets_points/numbers_phontics/10_PointsInfo.json": "e1b2a9b5e29e1c0cbf54d76210505b66",
"assets/packages/tracing_game/assets/phontics_assets_points/numbers_phontics/3_PointsInfo.json": "6e7cfcdadfb05cfeaf119f1eb3618ceb",
"assets/packages/tracing_game/assets/phontics_assets_points/numbers_phontics/6_PointsInfo.json": "286590aba6326e3cea4b0d3d6d299739",
"assets/packages/tracing_game/assets/phontics_assets_points/numbers_phontics/7_PointsInfo.json": "2dfa3830d896e87ddf84a2dcdf23399e",
"assets/packages/tracing_game/assets/phontics_assets_points/numbers_phontics/8_PointsInfo.json": "f6b25cf4569677be7afe771c71d81fd4",
"assets/packages/tracing_game/assets/phontics_assets_points/numbers_phontics/2_PointsInfo.json": "de8a764651d9a85a74c2dd6a3f47c2f1",
"assets/packages/tracing_game/assets/phontics_assets_points/numbers_phontics/0_PointsInfo.json": "5816dde903a7f11ccda3e6e1cc9d57fc",
"assets/packages/tracing_game/assets/phontics_assets_points/numbers_phontics/5_PointsInfo.json": "661eddd78f83f8e8d0bf59b1fbd64973",
"assets/packages/tracing_game/assets/phontics_assets_points/numbers_phontics/1_PointsInfo.json": "891912dc980f1d6d3dd6f7b3af5fb40f",
"assets/packages/tracing_game/assets/phontics_assets_points/math_shapes/triangle1_PointsInfo.json": "7bec6580bd0fc223895bb9b7f38dba0a",
"assets/packages/tracing_game/assets/phontics_assets_points/math_shapes/circle_PointsInfo.json": "8edb691a4ed73a2cc55721e4dec7cba1",
"assets/packages/tracing_game/assets/phontics_assets_points/math_shapes/triangle2_PointsInfo.json": "e1cd89c96ed892196183e4f3d4dcf204",
"assets/packages/tracing_game/assets/phontics_assets_points/math_shapes/triangle4_PointsInfo.json": "570c143e8dd9a433ae33b636398cf04c",
"assets/packages/tracing_game/assets/phontics_assets_points/math_shapes/rectangle_PointsInfo.json": "3175a69bfc0dc6035569ba3618d66dcd",
"assets/packages/tracing_game/assets/phontics_assets_points/math_shapes/triangle3_PointsInfo.json": "a1a00b9de90f8cd8bd436bd94ea9bf81",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/E_PointsInfo.json": "6d07c54c62b2ced414174cf1c758ca2a",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/B_PointsInfo.json": "59c15c8e28a66acc59ec038920b014c1",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/R_PointsInfo.json": "4d39b9dbce03ed93ee3a36e2f6d63d51",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/Q_PointsInfo.json": "cb6375b9de810f44e122624291de331c",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/T_PointsInfo.json": "8122dcbf394a69545206367cd3614803",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/U_PointsInfo.json": "2b412c22a36feca9c5642e12263431be",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/P_PointsInfo.json": "682f8406e75194d413c0f5b125daf7f7",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/D_PointsInfo.json": "19648ac0e27977fd9f140867cadc6144",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/L_PointsInfo.json": "b276dfa472ee77c471fac3d3b7f446f6",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/p_lowercase_PointsInfo.json": "942eee5b9c4dcf9705db1302f641de9e",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/J_PointsInfo.json": "ee15f6607f0e369f9fd92a298ccd2c97",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/G_PointsInfo.json": "c0d7779bb08dae868254e5fa10b42883",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/W_PointsInfo.json": "19c5aa5f361d21769df0bfe78975d399",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/i_lowercase_PointsInfo.json": "8aadf467b13507eb090b0eca535c2b97",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/H_PointsInfo.json": "3cf16616c9d9c57daddfbf8138e66cb7",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/O_PointsInfo.json": "61d7c33db57fa8408aa208df1c23a9aa",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/A_PointsInfo.json": "cb9f57e55d3a2490807c8b196d4337c9",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/F_PointsInfo.json": "ee0902729bae21c8011dfa121d369a90",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/I_PointsInfo.json": "00d4722d4b37a7d25a6a4b96ac5df7ee",
"assets/packages/tracing_game/assets/phontics_assets_points/english_upper_phonetics/M_PointsInfo.json": "5dfd736a511704b26b43f48e46cbe2d2",
"assets/packages/tracing_game/assets/images/position_2_finger.png": "80eb103fb7cfe5caef55c9ca55d288ed",
"assets/fonts/Belanosima/Belanosima-Bold.ttf": "a185b607130f07a6c3390741207a06da",
"assets/fonts/Belanosima/Belanosima-Regular.ttf": "dfc8bf24a88e20b5d33aba0d0f0cab93",
"assets/fonts/Belanosima/Belanosima-SemiBold.ttf": "f56774b13535a9a8bb6b04b16cc02ded",
"assets/fonts/MaterialIcons-Regular.otf": "b0331c805d12a40d8d4bf8c0ff19351d",
"assets/fonts/Montserrat/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "6e7bd3eacb1d1088e5063e375fc467aa",
"assets/fonts/Montserrat/Montserrat-Medium.ttf": "ee130b491bf120cdb261d27ec29e2805",
"assets/fonts/Montserrat/Montserrat-Thin.ttf": "a6cfec0cb3e946398cffcd4fa7ac61d1",
"assets/fonts/Montserrat/Montserrat-Black.ttf": "fec107cbca01aaa4df92aae1c49752dd",
"assets/fonts/Montserrat/Montserrat-Bold.ttf": "354dc625a35bef1b6ec00a79c6cfc0c8",
"assets/fonts/Montserrat/Montserrat-ExtraLight.ttf": "432be4a65a340e38f31651576ec58487",
"assets/fonts/Montserrat/Montserrat-Light.ttf": "e1d9d4d7fc9ff0f24b901292a900ef66",
"assets/fonts/Montserrat/Montserrat-ExtraBold.ttf": "1497e6fee4dd060b35f6b49e4241cb3f",
"assets/NOTICES": "72abab9c5efab45b2feac8715d0f0e6e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "b2a17925cedfbdf5767b6f08c14a18d2",
"assets/assets/images/studentIcons/smile3.svg": "bf24cc5c3fac489d030445e6b565c6dd",
"assets/assets/images/studentIcons/smile6.svg": "77d362e36b93fbf02189df6dddc011e3",
"assets/assets/images/studentIcons/smile1.svg": "01578eb396049bfd3204010109da80cc",
"assets/assets/images/studentIcons/smile5.svg": "3f82bbf9ff6f34c158d43882515a95eb",
"assets/assets/images/studentIcons/smile2.svg": "6788087c22675e215cba6f5b6185a8bb",
"assets/assets/images/studentIcons/smile4.svg": "b9d7c0926174a9ab125b4a9b6916abb9",
"assets/assets/images/backgrounds/lpBGClouds.svg": "0cccf953e21cd2a7bdff2bbb382820ec",
"assets/assets/images/backgrounds/mainMenuBG.svg": "d6edffe582b32b1e07a75488da4afdcf",
"assets/assets/images/backgrounds/FTGFaceBG.svg": "8116b627c355d9ba1370940583dc0305",
"assets/assets/images/backgrounds/letterPopBG.svg": "2693237af2a541c4ff09695efe340661",
"assets/assets/images/backgrounds/FTGMouth.svg": "58f03b3836cbf18095f2b5b97231a3f8",
"assets/assets/images/backgrounds/LPCloudBg.svg": "65bd3b36131f741e8931393c450e5b52",
"assets/assets/images/backgrounds/ltSelectLetterBG.svg": "fc7dd46de3d3899601a03ee89e2aa95f",
"assets/assets/images/backgrounds/letterTrailBG.svg": "658a8a4f44e0926e2a9306b64050bace",
"assets/assets/images/backgrounds/landingPageBG.svg": "dfa09d8bfe8a2024cf9d7e37b2f8de8b",
"assets/assets/images/backgrounds/loginScreenBackground.svg": "4ce6d30e039e939708a57d23cd973163",
"assets/assets/images/backgrounds/alphabetAdventuresBigBackground.svg": "071fb7b331a6f30abf01cbe1def306a1",
"assets/assets/images/decorationImages/picturePartyCartoon.svg": "f96bf1420de43fff024fb8a20a46b8ee",
"assets/assets/images/decorationImages/alphabetAdventuresCartoon.svg": "212106e1773c885111c552ee34b25f57",
"assets/assets/images/decorationImages/balloon2.svg": "f8e8b07eaf7f78a7586043f4ffd59992",
"assets/assets/images/decorationImages/balloon4.svg": "2e5e2509731c10eed0b06bcd436babdb",
"assets/assets/images/decorationImages/balloon1.svg": "be91285ae1dca4940b6c41373e68a94e",
"assets/assets/images/decorationImages/balloon5.svg": "7ed2fc58c8569c36540c0dd86b34754a",
"assets/assets/images/decorationImages/wordBuilderCartoon.svg": "623380c100e1fc6f78e276370b7e43b8",
"assets/assets/images/decorationImages/LPBalloon.svg": "e543433eb49adeaf86f6a4114abded64",
"assets/assets/images/decorationImages/balloon3.svg": "5c66368d3549176c5a5c25d58281398c",
"assets/assets/images/smallUI/settingsIcon.svg": "5d15dd93408451021aef06cfe3820f1d",
"assets/assets/images/smallUI/teacherIndicator.svg": "a3a794758d308bc69684de734e9b4670",
"assets/assets/images/smallUI/studentIndicator.svg": "181da08c197024ade8c3f1add29a9fc5",
"assets/assets/sounds/matchTheCase/applause.mp3": "54f7794f5013ad23725fb70e4476136e",
"assets/assets/sounds/matchTheCase/mtcInstructions.mp3": "83b727c5448022ec88241fc1a7bb5ab4",
"assets/assets/sounds/letters/N.mp3": "e76ca4cbaa6a7c9093f0e4b94bceb524",
"assets/assets/sounds/letters/C.mp3": "8fb4978640daccbe55f50ef027a38995",
"assets/assets/sounds/letters/J.mp3": "f2a3ab6afd69e386b866a28e1065d2eb",
"assets/assets/sounds/letters/L.mp3": "3a6d8df20631e3a99b2e3351c496078f",
"assets/assets/sounds/letters/W.mp3": "78e941008a0238140cb1c087bf71976c",
"assets/assets/sounds/letters/S.mp3": "1c146b593edf2438dbc1ce34cd3d1d62",
"assets/assets/sounds/letters/U.mp3": "b63649ac78708399eab8c0e2732c6d7e",
"assets/assets/sounds/letters/B.mp3": "10b1ccb97ae645bc6245bb077767c29c",
"assets/assets/sounds/letters/Z.mp3": "d75c4b02b06ba794862f922ad5df56e7",
"assets/assets/sounds/letters/I.mp3": "4702e7e33db6acddb66d1c9cac85e9c6",
"assets/assets/sounds/letters/X.mp3": "6ae44494475ebfb6de34e6e6e142f81f",
"assets/assets/sounds/letters/T.mp3": "9604e85a786a89f3f8efd1a52cefa964",
"assets/assets/sounds/letters/H.mp3": "1166e8b0e7bf602ac5764263515b137a",
"assets/assets/sounds/letters/D.mp3": "d0232d050338fa0d1042c59827dd30f1",
"assets/assets/sounds/letters/E.mp3": "798ebc36fcbd7677b4acd387f22bf58c",
"assets/assets/sounds/letters/K.mp3": "310cc4e747746f8dda4a5de3b79a1f12",
"assets/assets/sounds/letters/G.mp3": "e58e9c1706f4b831450ca7677e0c47df",
"assets/assets/sounds/letters/Y.mp3": "a46e7558aa5d14580856475b829e8310",
"assets/assets/sounds/letters/P.mp3": "4c6a385a5d73753b52e683efdcf57ce5",
"assets/assets/sounds/letters/F.mp3": "ac698434b94902f45c282641a8ad9782",
"assets/assets/sounds/letters/A.mp3": "7f29d8553ce681c4953a5a48a4c7ccad",
"assets/assets/sounds/letters/Q.mp3": "b3d5753270fa362062859eb8026e20fd",
"assets/assets/sounds/letters/R.mp3": "f17f77577593dd119fc059ac668f7a82",
"assets/assets/sounds/letters/O.mp3": "1dc020a61c86f9d5077082702b28ed14",
"assets/assets/sounds/letters/V.mp3": "2a0b865616dfe6a2976183b4639d07df",
"assets/assets/sounds/letters/M.mp3": "779688b232ab64fb1800202f6070a799",
"assets/AssetManifest.bin": "cd1f57e871aa3e56a1a6a7414d65b99f",
"manifest.json": "388302dbb220e77a39c7213c2a74c386",
"icons/Icon-512.png": "acd5152919c6152c84567cbe630ef9f4",
"icons/Icon-maskable-512.png": "acd5152919c6152c84567cbe630ef9f4",
"icons/Icon-192.png": "276d8527916bb35d9e1c62e0bf5081f1",
"icons/Icon-maskable-192.png": "276d8527916bb35d9e1c62e0bf5081f1",
"flutter_bootstrap.js": "ca30472ca41faf0bc02f35af8652eabe"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
