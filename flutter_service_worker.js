'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "9af06e48da64666f86da8314e75ae190",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e3b44cf6b370eb1be189f7f73d10eed2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1ebdc9f77f27d2ec916b047148728b31",
".git/logs/refs/heads/main": "754bc487a3912d5e8613da148bbc00bc",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/00/1e1a21d74893211d3b4e37350a42bb56e44715": "c3abafb547c23326a5b6b9f3671043ac",
".git/objects/00/78842fa558b0944911ee1c6f295326c882bbb6": "770cf6f3548ea8fbbf756bacca5fcfd7",
".git/objects/09/a2947bb99f4657c8a52b14901a191c5673ad3c": "8beeefaeb99776aba9ea1691e9775f11",
".git/objects/0c/4c6e43cf17751247470776801194d0aa62b3f9": "415a3ce9626afa9f02315ac9b2a7872a",
".git/objects/0d/989fffe832532d49571b3486d496ec54b83b40": "a706cd246e4d3c843d373b3ce92f6fec",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/e36c1ff8f6b9277f2c58a75c84e1817c7a90af": "bc08890f47c10473c146b82f8168e39a",
".git/objects/17/37d5ca0f9d3ff79ef19a21bb105566404b9168": "456fb0d687b6e201fb98bfcf9f978bf4",
".git/objects/1f/747585f870c9a2a6ec9140c24f69d52add019a": "07cfca4d72246968c52ad8447a18f83d",
".git/objects/21/cb1d464e6752d16cede6e8c9e80eb0599c4cd9": "d90f1d8229be50cf13c798f59d7e6253",
".git/objects/23/76949c3fcb42a994b1e69827821ee4ae9210dc": "6b701d5a2f98e19ddcbc69df70d95e22",
".git/objects/28/010521188d3972fa1a9b48c646662e369bb0e1": "6d32c090276fee264984523418f3b26a",
".git/objects/29/30b0e1753416e12f4268a98f9a5e8be35778a3": "1e787c669c61d9a7173bd1d627323108",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/2d823e8f0496a0b46dd6c0520ea5a160113f13": "79fb6220e6391bb05201fd5e12a3152c",
".git/objects/30/f89a255fd8db0b3a1558f95d598b5a25b94f9b": "d96d8702b91e6c2dff76598bf8d595d0",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/36/1856abc03b639cc82c19e1b8d7701d02753132": "a9499e5053281397732aa835ffd1b3b7",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3b/9b39f0678dad1da32816c51da69542d3200716": "72254cf0c0d0cccceaf1b7cf5f420256",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/0db702c66c16ed3b22081125a088c4e8b6f867": "23f7ba9db476e12e4114bce546ab0db5",
".git/objects/48/45359de68d2f1791d8ec1bb302936a9a5117ca": "0ccb95cf27b48d3aaa0f44996a8007c8",
".git/objects/48/463c8bd0cbf53f1e67dee585fdda200c7a58fe": "ed560904804bf9cd59f0a1ceb33aef8e",
".git/objects/48/b7ef617271ba5102d741d864b50cd424925d1d": "1acfbb35aae597afdc65a27fa5c9d74c",
".git/objects/48/bc7acf74e9e79ff51656520c4e7292c6bdd6cf": "248fb20f0b8475b7e3d7a2400cac7333",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/c32ca73ae8351b5e5ed88ec2b4b64a46adace3": "00387df8848479db0494006627648145",
".git/objects/4d/19f704f5bf5118e2292daa2204f57723333034": "d0995e6ab70c26999f683ba6a7c338b1",
".git/objects/4d/e773478696dfeae219e157455957e446003c96": "dd822834e6d3656b7ac546b542103a42",
".git/objects/53/519ceadd2e48b0e3167bc20daa42b40211aca6": "ab3287e9d9586013d1b5bb99cc2ef094",
".git/objects/53/c3cf69a18348cd5a5fdb2bb360625d210b3e81": "e923b5ccde100a62112f4ab44235bae2",
".git/objects/55/0a3b3ed7f9c62a943ae0e7763ca5e0a7f21fc3": "ee815baaec0b86aa787bfcbf0e796af5",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/683563a29f971813a9d67b86376df7a3e24934": "62c9c445b79c25cf7f31baa0f5a8dfa7",
".git/objects/58/352d45b5bf71b9468f333ca7a5669506c478e9": "300938a7d8c3c40725a0726db3c39757",
".git/objects/58/6e6fa4074bf699a51ef199087207a49867b89e": "18bba158745808828462f490402714c4",
".git/objects/59/11d304818d059f097c9a70e53dbcc7e6437fa0": "e1ee00dcc531e68aaf2d62ae03087089",
".git/objects/59/95435171f576ef5047c0da7a71971012a7cc14": "e7c8fdb0c1b91d909ab933f4388b1604",
".git/objects/5a/47bf112517eb0623c3a2c7cea422ded093e2ce": "de50cfe82de60aa79adb701db01ba90b",
".git/objects/5e/e775fc254550355f5e015ad7573299aaedd132": "55d4af030c41b22e2e4dd5a4af52179c",
".git/objects/63/7db4117e0d138b02e213f871231b4bd3cb82be": "015cd612b5f64adb5b611e44654d67f9",
".git/objects/68/e511564e9a2d725c315631b35ee8e03d4dc77d": "a0080d207a75809e63e6c7074626f158",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/9606a2a1ee25d271b8afaad95bbd79dd66f21b": "2be67c90f501fb64e0513c4faeef0e0a",
".git/objects/70/d60cc456b2bf4a9216b450a61c4877214de608": "e9d1c8a0b5cd9243e7ef787c624bc2f2",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/76/5ded732f4383154e156001838d6b0eef1ed75f": "6054f807e3212ef70ee88e0fd4684834",
".git/objects/77/a282eba99bce25434bbcf05ebf33c43fe0c223": "fd8929c14673efa7b331f01b376fe1ea",
".git/objects/78/58103c903fcaec50d46782a9dcb51b6563e961": "81887fe9fb63c2841b41a51c7ccb3a23",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/8587d7a35ce9ba27ed9926bf8c65ff1e50f758": "d6239afbd8093b3916ac2025a73a4af8",
".git/objects/7d/a44d50d4a20b23707b7d89ef3b5cc385d0f4ac": "9948edf92688c732efdaae2e22e6a71c",
".git/objects/80/68d95a5e39daabc170e38d2b501d3d49b2cb1f": "52195d49c89e695d08c2d6bda059eeda",
".git/objects/80/fc981860a9dd7f6de3e66e8f77a58ec9345366": "2986d40fff3fdfd1cb3eb8efed7db206",
".git/objects/82/018726c89d7af55af05dc9e5f79533837fa5f4": "267fa81030397a54be63fc191825f122",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/27cff642e4420fd8204048bb72c23f7830ee1d": "7c406dcd41db980bb6376f94a704cfb7",
".git/objects/8f/68b5de4babf0873bac57507c640dece1b944f6": "5321966d021cfae24711dccb1fae06f1",
".git/objects/92/2791cb36f3fe8c17f01208af150ab03a7f12e6": "1e0ae127231075ed5d7313d4fc5454a8",
".git/objects/93/61a3bbfea53914147cfc12b6056eab221896fd": "9df7ac7f69771a9554b02694723ff4d0",
".git/objects/93/dd2c6d3437fa6744ab68d562c575e903134d9f": "6ff89552550c723eac7f34cf61aba39b",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/99/d526c78c83ab4bd3c5a3c4c2e38eb3bdc60e40": "0a2b4ad6d735eda34ef7333d684dfbb1",
".git/objects/9c/98e9f002d4a85d2df244d7db8248882635941d": "ff947999c2926a00a911b76e6733def5",
".git/objects/9f/1103ab6a4525ac2f88184fb14d8157a85e6951": "535784757d972d759abb44b6ff7f0ca2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/5ce4c6e0aa7acdceedab35309ecdf99a0d5ad0": "bcae2556988475ed2df9aee48e25f6e9",
".git/objects/a6/89faf8fb63ccc502b5c3a7c8d85bb9ac0d6489": "bde431fc0efd1abe441debaf6a48696e",
".git/objects/ab/3a9e7d0d970b9d9034d6a0c5f0b6350ea7362f": "a2322a306f22c74e6bf2205644d39ff1",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/28f27cf7b61987530a286f0c96e780900e0832": "35f2f48600b102834e1c2f69444cadf0",
".git/objects/ad/37593207b0538a9b71dcdb2efa70bd60ab323d": "ed925f37a994534164764bb0bc0726c2",
".git/objects/b0/360bda247944e1e4207237e58eafc4ea8ac681": "0a8b73a8ad43675ce0b4e0ee10e17d99",
".git/objects/b4/59f97ba0110fc48c489b379479abfa38ea4f36": "4fd8ea84918d31924dcecc57d1e6b7a7",
".git/objects/b5/c41a8fded61f314b7045541fd57ad51518bcd5": "51d5cab2773f854554db08aa57585231",
".git/objects/b6/a41a5113c371d99961c3e20a55268f15f13daf": "7805cebea74ae8b072a0b80e6b2c496b",
".git/objects/bb/b2362da9d77b707c092fa8968fde934a08d04b": "dd0be283ab2b1c6469a86b7687abc84c",
".git/objects/bb/f0d9fb01e2ceafc7a98e1304ec14bdc9e5d5b4": "df61cbc52c5b95529de19ae67b9bd34b",
".git/objects/bc/82105a5edc225ef3a45354441586cd960ee14b": "791d3893c8a9eb41d30b94137e5d4bac",
".git/objects/bf/eb56907cc1c483877fc193c01db4c6b9ef550e": "c89d2bab89bf889b425b4079eb9325b8",
".git/objects/c0/1c3d775a8f951b0fd5a3834a50a2a70bf7d41d": "6cbabf9d607e2ed0cfd6dfaff0109001",
".git/objects/c1/5fd47397f554e20ec7e4e24d03b8ad3143321f": "e86db9e74642c024a6e2a1cf9ac6d3d5",
".git/objects/c3/c6c62f00ad88355267df7fcb795f678798933d": "e5f1e73a717f9a90c70621cd79468d39",
".git/objects/c4/16072f08f06238e392c1ba656f4ba94d3a6fbc": "4e4b5c08ea868f61bbd1ba7d09990c2b",
".git/objects/c8/6dc8ca23ca47a7221d1b1800c5befbc5997d1c": "30456e1de3f8b7fc704c58869e3428d0",
".git/objects/c9/236394eba614767491f8987e5d313e0edbc723": "40b0251fe56e4df7fbc30ada83854a9c",
".git/objects/c9/7068ed01143188cae360519fe44c5764f36058": "285c4feb8c5bc8bc75dbd301020b8ce3",
".git/objects/cb/6ea1eed6eb956212b4efbb9f6defd941e73325": "08cfcb4f5264559ea3326e12a95a712a",
".git/objects/ce/390debe2318400dfa5c553ab70d8955f52cb19": "57e8c6cf5501ce7bcec6b252df3cfc2e",
".git/objects/d5/ffb210139882f9b8db92e0037dc843418f6653": "d00bad799ff6519e6d59896f537ae0a4",
".git/objects/d8/60e0fa176831cf8800b0a704e19fb4e3b4a85a": "9d612078622b7a72e2f1565eb640c905",
".git/objects/d8/95bf1557327377a4b23b5a2493c50cb2655c40": "f5b6e46bd3e8e55cb4d22822a6492d36",
".git/objects/d9/315870250701333c7d0357183ba18e6b15e39f": "ac2fa26690070b30b3ad2cdbe4cf9518",
".git/objects/da/971661242e6cfdc392d0b4e2d04f298d35364d": "dba03f6d6363ac34a368499f783fadf9",
".git/objects/dc/aa0cc0cd14f29ed04112b549a306c9647c75cb": "6b25ae5ff66982e66923c63e6cd5351e",
".git/objects/de/8bd2874322660a7890afa7e881b23c529c354d": "daafbb9d9d3c33aebd01b084321f3c8c",
".git/objects/e3/3c417969fe2351a03948b9f2ca2b677cb183e1": "864e0390c63516cd88787b2ad724e7e5",
".git/objects/e3/e964c6f4c7ffc8964964ab041654cb5bd0790c": "9cc78ed743d0be85719bd464b3c2169e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/26c60a7d075272086052353110ab5ff6784e26": "f776e2957cad6a1b207bb4075437185f",
".git/objects/ef/4782991e9ef57e5429f2aa6a78771333f54ebb": "b532ae7fbeb63461c5da955c27783df7",
".git/objects/ef/723a162bab7e3ee9e257ffc4c3edae5d2ac7b5": "3ccc2de5a51a7d26a30218b76acb684c",
".git/objects/f1/8e5b6146af4d4d8adc2feea61e61351f71e213": "a72406c6a1002809d3732277add50ca7",
".git/objects/f2/24f62ea8f78f76e3ec92b7bf56775ccbf7a4fa": "805270570dd6040826e0cb24bdd8aac9",
".git/objects/f7/6967d577a70ce46d2b6ed98aab860ead7bbd32": "e0e84cb49c48198a2358be2b8c37c42f",
".git/objects/f8/b9659a8102a5544363a583fd99a188d8d7cbd2": "f281274bbbaba93536e74f451db8908b",
".git/objects/f9/ddaadc1e6a57dca70f87c18c375b4b24e5bb39": "2540bb6c4c8d36e97682461e1ea53603",
".git/objects/fa/450e2498849b1b5619383335c8f9805218b5ec": "db17468859a1a3f839e97e69458dd5eb",
".git/objects/ff/cf3b0e600fb4b5b7b52987991fb2b7cfccf9b2": "a5d93a295846386f37c2b44a618d0097",
".git/refs/heads/main": "89253a6002d971d6246912f694d2e3a8",
"assets/AssetManifest.json": "ef8525ae570a5b0a43ba6edc4814f61c",
"assets/assets/fonts/Anurati-Regular.otf": "ca8632f4d0aacae4633cbfc2f1a673f1",
"assets/assets/Icons/anonymous.png": "9659b4d2cd32a3b3fa4b7e53c118c3ae",
"assets/assets/Icons/cart.png": "806f542ddcc060e939e2c3d2cf2b58b4",
"assets/assets/Icons/categories.png": "7ce9420e29bbfa27b8e4a8a40d575c6e",
"assets/assets/Icons/edit.png": "e5746e6163957c3a900efbb64e1d1e5f",
"assets/assets/Icons/email%25201.png": "fb1bee4e43b21a61fbfe090892b64115",
"assets/assets/Icons/error.png": "120cc167873e0b66cfa56c1d7d5431d6",
"assets/assets/Icons/eye.png": "bb8e6498d17a21face18972834122eed",
"assets/assets/Icons/eyeslash.png": "28c8381f4fa169269a046378e44b63bf",
"assets/assets/Icons/free_shipping.png": "25797999024cc98d35dd5dab9d312d35",
"assets/assets/Icons/google.png": "e9612850a6cb55eb547266043e1eef86",
"assets/assets/Icons/heart.png": "bed171f38bc538c188efa49f41318255",
"assets/assets/Icons/home.png": "f57db47d10f091d8444fcc4295956854",
"assets/assets/Icons/icons8-walter-white-50.png": "111e87d80ba7de57ced322118c67b79a",
"assets/assets/Icons/id-card.png": "616fa1cfc0657c9ecd6fcd7d7e65031e",
"assets/assets/Icons/img.png": "b0baca6ea97ddc40e2b8730534428f18",
"assets/assets/Icons/instagram.png": "72a4b561233cbeed9b490e76dd57af83",
"assets/assets/Icons/left-arrow.png": "6d1d15a6fcb6c36927cd3114a2159cdb",
"assets/assets/Icons/logout.png": "a9817b1d64b1cb0718ef1ca1f0f450cb",
"assets/assets/Icons/menu.png": "aa6495a8a949baa810b6238a3e0295eb",
"assets/assets/Icons/passwordcheck.png": "7ba122482936e58346c2ce4877c4101c",
"assets/assets/Icons/product.png": "d5010d3e6317b3dd4c9c7aa400447a05",
"assets/assets/Icons/right-arrow.png": "3b6e1869ac79ce4644bc6b83890c6357",
"assets/assets/Icons/telephone.png": "91c5bf318e2109f33be1796a061f0d61",
"assets/assets/Icons/tick.png": "7125d7b67bca49d2e90031568a1c3b1b",
"assets/assets/Icons/tik-tok.png": "5f1413ca184c7e24e1d213fcc43c6a82",
"assets/assets/Icons/tracking.png": "c7ea0a3f98ed85f9844cf72587393440",
"assets/assets/Icons/user.png": "e9ace2e2dac30ed544ae393f52a0a0e0",
"assets/assets/Icons/user2.png": "a48aca275e3dbe9a00d8f90e095f25ae",
"assets/assets/Icons/X.png": "629adbacbc09a1b24270ad1d65b4b3ba",
"assets/assets/images/81.png": "b25c74bd483ad1d67567db3f063605f5",
"assets/assets/images/background.png": "37d2c2a963c4f847ad684e89600bc8a1",
"assets/assets/images/cashOnDelivery.png": "a62d74c352d809509d376432e3f31602",
"assets/assets/images/girl_on_form.png": "d35c2edf65ac4b96ad4675027241410c",
"assets/assets/images/Logo.png": "b5533f09e892ecea08ee16947f912d9c",
"assets/assets/images/profile.png": "739297c3ec0f727c32c8135aca85df15",
"assets/assets/images/whatsapp.png": "7611f02494be1e121a6f6a391d3eafdc",
"assets/assets/lottie/Loading.json": "719829bb31e38b0107b5ec737edf4fbd",
"assets/FontManifest.json": "0156b79137a0e95d56fd535eee05dad9",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/loading.gif": "6d8ddcff565e848515beda699d0bb464",
"assets/NOTICES": "2aaf5dfc0de0cb49bb46758f29c1a98c",
"assets/packages/animated_snack_bar/assets/monochrome/check-circle.svg": "f6d9dd67711da5b6d4d965f66c10cd07",
"assets/packages/animated_snack_bar/assets/monochrome/comment-dots.svg": "44311bf381ea1155bfe38c40d44c577a",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-circle.svg": "63ffc503c8e024f9752866e021afb744",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-octagon.svg": "ab5fb6de2478b95f911cebb5cf6af9c3",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-triangle.svg": "10427de487dc532646c4a11f6be3fe84",
"assets/packages/animated_snack_bar/assets/regular/check-circle.svg": "0936541fbbf9ebf325169373c2d2439a",
"assets/packages/animated_snack_bar/assets/regular/exclamation-circle.svg": "69c777fe5b9ffd2f8286ca47f98d1a31",
"assets/packages/animated_snack_bar/assets/regular/exclamation-triangle.svg": "57a895d149648e4b69c7681d4efb2052",
"assets/packages/animated_snack_bar/assets/regular/info-circle.svg": "e733e8ecda8758e6b69d20cc1ca1c6c4",
"assets/packages/checkout_screen_ui/assets/images/apple-32.png": "9093edf287db8600bc186e9607916a04",
"assets/packages/checkout_screen_ui/assets/images/card_amex.png": "650359dc6d2af46ed20ccfcdac4719a6",
"assets/packages/checkout_screen_ui/assets/images/card_diners.png": "bfe3fd25d256a0601bd4017ffe9a6f84",
"assets/packages/checkout_screen_ui/assets/images/card_discover.png": "cc6e7458dcfe4f92b84610962c14f81d",
"assets/packages/checkout_screen_ui/assets/images/card_jcb.png": "87c7684e033657125bc99e305077c318",
"assets/packages/checkout_screen_ui/assets/images/card_mastercard.png": "b82d1e23200eb0108333da2d3667e4ef",
"assets/packages/checkout_screen_ui/assets/images/card_union_pay.png": "c986b0160e7b00a20e490a24c56f3ba0",
"assets/packages/checkout_screen_ui/assets/images/card_visa.png": "85d57bb0a82e92e6f4c17a1cd3a84d0a",
"assets/packages/checkout_screen_ui/assets/images/cvv_back.png": "474f6db18bbadfb28bfd98a4e79fc713",
"assets/packages/checkout_screen_ui/assets/images/cvv_front.png": "9169b9b152e3dae3e736f49e56746483",
"assets/packages/checkout_screen_ui/assets/images/G_mark_small.png": "3853bea160f56119432927417c4ed5b2",
"assets/packages/checkout_screen_ui/assets/images/pay_option_cash.png": "32d5c80cdfdd328d831cfad26942a9b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/android-chrome-192x192.png": "6757547a37843f5f64d770d41d0fc873",
"icons/android-chrome-512x512.png": "924c01e258c28ec64b55240a75f306ae",
"icons/apple-touch-icon.png": "263768184fa7f142d08ce8584723c45c",
"index.html": "b264ea9a001266fb143d7fab94bce30a",
"/": "b264ea9a001266fb143d7fab94bce30a",
"logo.png": "2b69c2cf3eefd8169a671c8360367744",
"main.dart.js": "989137c8248253a5c1a03f0d22506e12",
"manifest.json": "01a1c7064af8e4bb839e1b4f1f88f9dc",
"version.json": "cc6dd881fdc3b79dc84c0b5686451518"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
