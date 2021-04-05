const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let tabukontrol = await db.fetch("tabukontrol");
  if (tabukontrol === 0)
    return message.channel.send(
      "Sadece bir etkinlik yöneticisi izin verdiği zaman oyun oynanabilir."
    );

  let kisi = message.mentions.users.first();
  if (!kisi) return message.reply("Bir kişi seçmelisin");

  const vampir = new Discord.MessageEmbed();
  vampir.setColor("GREEN");
  vampir.setTitle("KELİME: VAMPİR");
  vampir.setImage(
    "https://i.pinimg.com/originals/9a/70/4c/9a704cbc7e2229099b7a022a2f019ec1.gif"
  );
  vampir.addField("1- ", "Kan");
  vampir.addField("2- ", "Özel Rol");
  vampir.addField("3- ", "Soluk Ten");
  vampir.addField("4- ", "Sivri Diş");
  vampir.addField("5- ", "Rumpel");

  const catal = new Discord.MessageEmbed();
  catal.setColor("GREEN");
  catal.setTitle("KELİME: ÇATALAĞIZ");
  catal.setImage(
    "https://i.pinimg.com/originals/e3/03/0f/e3030f65cda1acc8f9ed9eb3101d6e18.gif"
  );
  catal.addField("1- ", "Yılan");
  catal.addField("2- ", "Harry");
  catal.addField("3- ", "Konuşmak");
  catal.addField("4- ", "Dil");
  catal.addField("5- ", "Luther");

  const kurt = new Discord.MessageEmbed();
  kurt.setColor("GREEN");
  kurt.setTitle("KELİME: KURT ADAM");
  kurt.setImage(
    "https://i.pinimg.com/originals/07/be/1b/07be1b9b3423a0d1493700f313ff8f87.gif"
  );
  kurt.addField("1- ", "Dolunay");
  kurt.addField("2- ", "Lupin");
  kurt.addField("3- ", "Auuuu");
  kurt.addField("4- ", "Hayvan");
  kurt.addField("5- ", "Dönüşmek");

  const veela = new Discord.MessageEmbed();
  veela.setColor("GREEN");
  veela.setTitle("KELİME: VEELA");
  veela.setImage("https://thumbs.gfycat.com/EnergeticGrimyGharial-max-1mb.gif");
  veela.addField("1- ", "Annabeth");
  veela.addField("2- ", "Güzel Kız");
  veela.addField("3- ", "Fleur");
  veela.addField("4- ", "Erkek");
  veela.addField("5- ", "Etkilemek");

  const deligoz = new Discord.MessageEmbed();
  deligoz.setColor("GREEN");
  deligoz.setTitle("KELİME: DELİGÖZ");
  deligoz.setImage(
    "https://pa1.narvii.com/6244/619ab8545f3250430c5d2e81df33601e7b856872_hq.gif"
  );
  deligoz.addField("1- ", "Moody");
  deligoz.addField("2- ", "Leonard");
  deligoz.addField("3- ", "Ateş Kadehi");
  deligoz.addField("4- ", "Görmek");
  deligoz.addField("5- ", "Pelerin");

  const animagus = new Discord.MessageEmbed();
  animagus.setColor("GREEN");
  animagus.setTitle("KELİME: ANİMAGUS");
  animagus.setImage("https://fantazya.org/wp-content/uploads/2020/01/jjj.gif");
  animagus.addField("1- ", "Çapulcular");
  animagus.addField("2- ", "Hayvan");
  animagus.addField("3- ", "Dönüşmek");
  animagus.addField("4- ", "Canlı");
  animagus.addField("5- ", "McGonagall");

  const maledictus = new Discord.MessageEmbed();
  maledictus.setColor("GREEN");
  maledictus.setTitle("KELİME: MALEDICTUS");
  maledictus.setImage(
    "https://i.pinimg.com/originals/04/98/7f/04987f526b0352b4962e0597d8a4a51b.gif"
  );
  maledictus.addField("1- ", "Nagini");
  maledictus.addField("2- ", "Hayvan");
  maledictus.addField("3- ", "Dönüşmek");
  maledictus.addField("4- ", "Yılan");
  maledictus.addField("5- ", "Lanet");

  const meta = new Discord.MessageEmbed();
  meta.setColor("GREEN");
  meta.setTitle("KELİME: METAMORFMAGUS");
  meta.setImage(
    "https://i.pinimg.com/originals/85/c8/f1/85c8f13a1be8889151b17211ec861dd0.gif"
  );
  meta.addField("1- ", "Renk");
  meta.addField("2- ", "Tonks");
  meta.addField("3- ", "Dönüşmek");
  meta.addField("4- ", "Şekil");
  meta.addField("5- ", "Biçim");

  const goru = new Discord.MessageEmbed();
  goru.setColor("GREEN");
  goru.setTitle("KELİME: GÖRÜ");
  goru.setImage(
    "https://pa1.narvii.com/5945/62d6ca1c810d30698915bf08d84898e0da198d69_hq.gif"
  );
  goru.addField("1- ", "Dora");
  goru.addField("2- ", "Trelawney");
  goru.addField("3- ", "Kehanet");
  goru.addField("4- ", "Gelecek");
  goru.addField("5- ", "Görmek");

  const ksks = new Discord.MessageEmbed();
  ksks.setColor("GREEN");
  ksks.setTitle("KELİME: KARANLIK SANATLARA KARŞI SAVUNMA");
  ksks.setImage(
    "https://i.pinimg.com/originals/11/aa/4a/11aa4a8dbdd42816676b3530cc0a80ed.gif"
  );
  ksks.addField("1- ", "Ders");
  ksks.addField("2- ", "Tılsım");
  ksks.addField("3- ", "Öğrenmek");
  ksks.addField("4- ", "Hogwarts");
  ksks.addField("5- ", "Snape");

  const tils = new Discord.MessageEmbed();
  tils.setColor("GREEN");
  tils.setTitle("KELİME: TILSIM");
  tils.setImage(
    "https://i.pinimg.com/originals/4a/7c/26/4a7c26d4b31c9df57131435622b9b64e.gif"
  );
  tils.addField("1- ", "Ders");
  tils.addField("2- ", "KSKS");
  tils.addField("3- ", "Öğrenmek");
  tils.addField("4- ", "Hogwarts");
  tils.addField("5- ", "Flitwick");

 const syb = new Discord.MessageEmbed();
  syb.setColor("GREEN");
  syb.setTitle("KELİME: SİHİRLİ YARATIKLARIN BAKIMI");
  syb.setImage(
    "https://i.pinimg.com/originals/98/73/8e/98738efd8a19141bf7542e0d5ebd13f1.gif"
  );
  syb.addField("1- ", "Ders");
  syb.addField("2- ", "KSKS");
  syb.addField("3- ", "Öğrenmek");
  syb.addField("4- ", "Hogwarts");
  syb.addField("5- ", "Hagrid");

  const iksir = new Discord.MessageEmbed();
  iksir.setColor("GREEN");
  iksir.setTitle("KELİME: İKSİR");
  iksir.setImage(
    "http://pa1.narvii.com/5836/eeac56d2f0dcaf08227090bea6eff6ad898b13e5_00.gif"
  );
  iksir.addField("1- ", "Ders");
  iksir.addField("2- ", "KSKS");
  iksir.addField("3- ", "Öğrenmek");
  iksir.addField("4- ", "İçmek");
  iksir.addField("5- ", "Snape");

  const bitkibilim = new Discord.MessageEmbed();
  bitkibilim.setColor("GREEN");
  bitkibilim.setTitle("KELİME: BİTKİBİLİM");
  bitkibilim.setImage(
    "https://img-s1.onedio.com/id-5c2e10f5e52c391d1d757370/rev-0/w-900/h-369/f-gif/s-53e5efc1587dbaa6eb082a23eb4c3f71642a711f.gif"
  );
  bitkibilim.addField("1- ", "Ders");
  bitkibilim.addField("2- ", "KSKS");
  bitkibilim.addField("3- ", "Öğrenmek");
  bitkibilim.addField("4- ", "Luther");
  bitkibilim.addField("5- ", "Adamotu");

  const hog = new Discord.MessageEmbed();
  hog.setColor("GREEN");
  hog.setTitle("KELİME: HOGWARTS");
  hog.setImage("https://trhogwarts.com/wp-content/uploads/2020/12/giphy1.gif");
  hog.addField("1- ", "Okul");
  hog.addField("2- ", "Büyük Salon");
  hog.addField("3- ", "Ortak Salon");
  hog.addField("4- ", "Harry");
  hog.addField("5- ", "Nerede?");

  const rom = new Discord.MessageEmbed();
  rom.setColor("GREEN");
  rom.setTitle("KELİME: ROMULUS P. LENOIR");
  rom.setImage(
    "https://i.pinimg.com/originals/fa/4d/07/fa4d0731a92a69228a61f89d35597189.gif"
  );
  rom.addField("1- ", "Profesör");
  rom.addField("2- ", "KSKS");
  rom.addField("3- ", "Kel");
  rom.addField("4- ", "Yağız");
  rom.addField("5- ", "Sen ... musun?");

  const luther = new Discord.MessageEmbed();
  luther.setColor("GREEN");
  luther.setTitle("KELİME: LUTHER SALVADOR MATTYEV");
  luther.setImage(
    "https://i.pinimg.com/originals/92/70/d6/9270d6453755a4198515ba80afd7eefb.gif"
  );
  luther.addField("1- ", "Profesör");
  luther.addField("2- ", "Bitkibilim");
  luther.addField("3- ", "Çatalağız");
  luther.addField("4- ", "Okay Deniz");
  luther.addField("5- ", "Yılan");

  const amras = new Discord.MessageEmbed();
  amras.setColor("GREEN");
  amras.setTitle("KELİME: AMRAS MUNEZ N. BLANC");
  amras.setImage(
    "https://i.pinimg.com/originals/d7/04/14/d704144f2c9207d7a8ad53e11ed5ab4d.gif"
  );
  amras.addField("1- ", "Rol Moderatörü");
  amras.addField("2- ", "Osman");
  amras.addField("3- ", "Yaş");
  amras.addField("4- ", "Tasarım");
  amras.addField("5- ", "Taha Şahin");

  const beti = new Discord.MessageEmbed();
  beti.setColor("GREEN");
  beti.setTitle("KELİME: ANNABETH DARK");
  beti.setImage(
    "https://media.discordapp.net/attachments/709903558157271171/822873940351254578/GIF-210228_015029.gif"
  );
  beti.addField("1- ", "Kurgu Yazarı");
  beti.addField("2- ", "Veela");
  beti.addField("3- ", "Betiley");
  beti.addField("4- ", "Kaos");
  beti.addField("5- ", "Onua");

  const raven = new Discord.MessageEmbed();
  raven.setColor("GREEN");
  raven.setTitle("KELİME: RAVEN MABLATKSY");
  raven.setImage(
    "https://media1.tenor.com/images/95ebecca5abc4fe9b6015aaaaa331195/tenor.gif?itemid=12370592"
  );
  raven.addField("1- ", "Rehber");
  raven.addField("2- ", "İbrahim");
  raven.addField("3- ", "Tasarımcı");
  raven.addField("4- ", "Cüce");
  raven.addField("5- ", "Dansçı");

  const murver = new Discord.MessageEmbed();
  murver.setColor("GREEN");
  murver.setTitle("KELİME: MÜRVER ASA");
  murver.setImage(
    "https://i.pinimg.com/originals/9d/af/23/9daf2351c0f575b66f61eb87d5ebf92a.gif"
  );
  murver.addField("1- ", "Ölüm Yadigarları");
  murver.addField("2- ", "Ağaç");
  murver.addField("3- ", "Büyü/Sihir");
  murver.addField("4- ", "Dumbledore");
  murver.addField("5- ", "İtaat Etmek");

  const zihn = new Discord.MessageEmbed();
  zihn.setColor("GREEN");
  zihn.setTitle("KELİME: ZİHNEFEND");
  zihn.setImage(
    "https://media.harrypotterfanzone.com/snape-uses-legilimens.gif"
  );
  zihn.addField("1- ", "Akıl Okumak");
  zihn.addField("2- ", "Legilimens");
  zihn.addField("3- ", "Severus Snape");
  zihn.addField("4- ", "Sızmak");
  zihn.addField("5- ", "Karanlık Sanatlar");

  const zihne = new Discord.MessageEmbed();
  zihne.setColor("GREEN");
  zihne.setTitle("KELİME: ZİHNEBEND");
  zihne.setImage(
    "http://images2.fanpop.com/image/photos/9500000/OOTP-occlumency-animation-severus-snape-9571716-550-200.gif"
  );
  zihne.addField("1- ", "Akıl Okumak");
  zihne.addField("2- ", "Korumak");
  zihne.addField("3- ", "Meditasyon");
  zihne.addField("4- ", "Engellemek");
  zihne.addField("5- ", "Odaklanmak");

  const unic = new Discord.MessageEmbed();
  unic.setColor("GREEN");
  unic.setTitle("KELİME: TEK BOYNUZLU AT/UNICORN");
  unic.setImage(
    "https://imgtrend.mynet.com/2015/09/23/03081233611681/source.gif"
  );
  unic.addField("1- ", "Asa Özü");
  unic.addField("2- ", "Sihirli Yaratık");
  unic.addField("3- ", "Kıl");
  unic.addField("4- ", "Ölümsüzlük");
  unic.addField("5- ", "Kan");

  const atad = new Discord.MessageEmbed();
  atad.setColor("GREEN");
  atad.setTitle("KELİME: AT ADAM");
  atad.setImage(
    "https://1.bp.blogspot.com/-b_oDkFNwRjM/Xt0VCEJ-ocI/AAAAAAAAOxY/m2fsXaJl77Ajiszn4xprlnndX0G5pQ6GQCLcBGAsYHQ/s1600/Centaurs%2B%2528II%2529.gif"
  );
  atad.addField("1- ", "Firenze");
  atad.addField("2- ", "Melez");
  atad.addField("3- ", "Karanlık Orman");
  atad.addField("4- ", "Dolores Umbridge");
  atad.addField("5- ", "Sihirli Yaratık");

  const anka = new Discord.MessageEmbed();
  anka.setColor("GREEN");
  anka.setTitle("KELİME: ANKA KUŞU");
  anka.setImage("https://media.giphy.com/media/brcFv2nx8PEVa/giphy.gif");
  anka.addField("1- ", "Fenix");
  anka.addField("2- ", "Dumbledore");
  anka.addField("3- ", "Cisimlenmek");
  anka.addField("4- ", "Taşımak");
  anka.addField("5- ", "Sihirli Yaratık");

  const bayk = new Discord.MessageEmbed();
  bayk.setColor("GREEN");
  bayk.setTitle("KELİME: BAYKUŞ");
  bayk.setImage("https://i.pinimg.com/originals/00/d6/81/00d681475636de6f017aeefe7197a8f6.gif");
  bayk.addField("1- ", "Posta");
  bayk.addField("2- ", "Hedwig");
  bayk.addField("3- ", "Uçmak");
  bayk.addField("4- ", "Kuş");
  bayk.addField("5- ", "Mektup");
    
  const fuphup = new Discord.MessageEmbed();
  fuphup.setColor("GREEN");
  fuphup.setTitle("KELİME: FUPHUP");
  fuphup.setImage("http://pa1.narvii.com/6666/36a1f83307a25d001fb97b7a6ade527cca94b043_00.gif");
  fuphup.addField("1- ", "Sihirli Yaratık");
  fuphup.addField("2- ", "Tüy");
  fuphup.addField("3- ", "Renkli");
  fuphup.addField("4- ", "Kuş");
  fuphup.addField("5- ", "Susturma Büyüsü");
  
  const kabu = new Discord.MessageEmbed();
  kabu.setColor("GREEN");
  kabu.setTitle("KELİME: KABULUK");
  kabu.setImage("https://img.women.com/images/images/000/181/269/original/tumblr_om2ypdbqms1qjz9w2o3_500.gif?1558478922");
  kabu.addField("1- ", "Ağaç");
  kabu.addField("2- ", "Yaprak");
  kabu.addField("3- ", "Dal");
  kabu.addField("4- ", "Küçük");
  kabu.addField("5- ", "Korunmak");
  
  const gorunmezlik = new Discord.MessageEmbed();
  gorunmezlik.setColor("GREEN");
  gorunmezlik.setTitle("KELİME: GÖRÜNMEZLİK PELERİNİ");
  gorunmezlik.setImage("https://media.vanityfair.com/photos/560178403a02e0b16051f6c5/master/w_1600%2Cc_limit/harrypotterinvisible.gif");
  gorunmezlik.addField("1- ", "Deligöz");
  gorunmezlik.addField("2- ", "Saklanmak");
  gorunmezlik.addField("3- ", "Gizlenmek");
  gorunmezlik.addField("4- ", "Harry Potter");
  gorunmezlik.addField("5- ", "Görmek");
  
  const capulcu = new Discord.MessageEmbed();
  capulcu.setColor("GREEN");
  capulcu.setTitle("KELİME: ÇAPULCU HARİTASI");
  capulcu.setImage("https://burrow.hogwartsishere.com/media/book_covers/AD.gif");
  capulcu.addField("1- ", "Muziplik Tamamlandı");
  capulcu.addField("2- ", "Hayırlı Bir Şey");
  capulcu.addField("3- ", "Gizli Geçit");
  capulcu.addField("4- ", "Harry Potter");
  capulcu.addField("5- ", "Parşömen");
  
  const cizkipir = new Discord.MessageEmbed();
  cizkipir.setColor("GREEN");
  cizkipir.setTitle("KELİME: CIZKIPIR");
  cizkipir.setImage("https://pa1.narvii.com/6342/57898ee8fb71967aee4fb4011bacadf487adb5ec_hq.gif");
  cizkipir.addField("1- ", "İğne");
  cizkipir.addField("2- ", "Asa Özü");
  cizkipir.addField("3- ", "Böcek");
  cizkipir.addField("4- ", "Mavi");
  cizkipir.addField("5- ", "Sokmak");
  
  const asa = new Discord.MessageEmbed();
  asa.setColor("GREEN");
  asa.setTitle("KELİME: ASA");
  asa.setImage("https://pa1.narvii.com/6315/33e30f85f1e8e23c9382ca20cd2d847534d65a40_hq.gif");
  asa.addField("1- ", "Öz");
  asa.addField("2- ", "Ağaç");
  asa.addField("3- ", "Dal");
  asa.addField("4- ", "Büyü");
  asa.addField("5- ", "Mürver");
  
  const inkantasyon = new Discord.MessageEmbed();
  inkantasyon.setColor("GREEN");
  inkantasyon.setTitle("KELİME: İNKANTASYON");
  inkantasyon.setImage("http://i.giphy.com/Es8BGPvUSkNGg.gif");
  inkantasyon.addField("1- ", "Sözcük");
  inkantasyon.addField("2- ", "Büyü");
  inkantasyon.addField("3- ", "Söylemek");
  inkantasyon.addField("4- ", "Asa");
  inkantasyon.addField("5- ", "Tılsım");
  
  const bakan = new Discord.MessageEmbed();
  bakan.setColor("GREEN");
  bakan.setTitle("KELİME: SİHİR BAKANLIĞI");
  bakan.setImage("https://25.media.tumblr.com/tumblr_mei6z6Ddd91rijbg1o1_500.gif");
  bakan.addField("1- ", "Cornelius Fudge");
  bakan.addField("2- ", "Edith Gray");
  bakan.addField("3- ", "Azkaban");
  bakan.addField("4- ", "Büyüceşura");
  bakan.addField("5- ", "Daire");
  
 const seher = new Discord.MessageEmbed();
  seher.setColor("GREEN");
  seher.setTitle("KELİME: SEHERBAZ");
  seher.setImage("https://www.dailydot.com/wp-content/uploads/7d9/51/ea035b0b7e1221b3.gif");
  seher.addField("1- ", "Ölüm Yiyen");
  seher.addField("2- ", "Alastor Moody");
  seher.addField("3- ", "Azkaban");
  seher.addField("4- ", "Bakanlık");
  seher.addField("5- ", "Karanlık Sanatlar");
  
  const olumy = new Discord.MessageEmbed();
  olumy.setColor("GREEN");
  olumy.setTitle("KELİME: ÖLÜM YİYEN");
  olumy.setImage("https://pa1.narvii.com/6115/598ffcf294752c737e88eda49ecf9ba87181d24a_hq.gif");
  olumy.addField("1- ", "Seherbaz");
  olumy.addField("2- ", "Dark(Karanlık) Lord");
  olumy.addField("3- ", "Kötü");
  olumy.addField("4- ", "Lanet");
  olumy.addField("5- ", "Karanlık Sanatlar");
  
  const darkl = new Discord.MessageEmbed();
  darkl.setColor("GREEN");
  darkl.setTitle("KELİME: DARK(KARANLIK) LORD");
  darkl.setImage("https://img-s2.onedio.com/id-5892127913679aaa14203235/rev-0/w-500/s-f2de90c2c606d1b24ad0fa99562dc33a33c09992.gif");
  darkl.addField("1- ", "Voldemort/Tom Riddle");
  darkl.addField("2- ", "Ölüm Yiyen");
  darkl.addField("3- ", "Lider");
  darkl.addField("4- ", "Kötü");
  darkl.addField("5- ", "Karanlık Sanatlar");
  
  const spec = new Discord.MessageEmbed();
  spec.setColor("GREEN");
  spec.setTitle("KELİME: SPECTRECPECS");
  spec.setImage("https://i.pinimg.com/originals/f6/89/9f/f6899f2b3ba77e127ef5927e22e45886.gif");
  spec.addField("1- ", "Luna Lovegood");
  spec.addField("2- ", "Hayalet");
  spec.addField("3- ", "Gözlük");
  spec.addField("4- ", "Pembe");
  spec.addField("5- ", "Dırdırcı");
  
  const quid = new Discord.MessageEmbed();
  quid.setColor("GREEN");
  quid.setTitle("KELİME: QUIDDITCH");
  quid.setImage("http://trhogwarts.com/wp-content/uploads/2016/05/giphy.gif");
  quid.addField("1- ", "Stadyum");
  quid.addField("2- ", "Süpürge");
  quid.addField("3- ", "Snitch");
  quid.addField("4- ", "Oyun Oynamak");
  quid.addField("5- ", "Haxball");
  
  const bombarda = new Discord.MessageEmbed();
  bombarda.setColor("GREEN");
  bombarda.setTitle("KELİME: BOMBARDA");
  bombarda.setImage("https://static.wikia.nocookie.net/harrypotter/images/8/8b/Bombarda_POA_2.gif/revision/latest?cb=20110816174245");
  bombarda.addField("1- ", "Patlatmak");
  bombarda.addField("2- ", "Tılsım");
  bombarda.addField("3- ", "Duvar");
  bombarda.addField("4- ", "Yıkmak");
  bombarda.addField("5- ", "GÜM");
  
  const aguamenti = new Discord.MessageEmbed();
  aguamenti.setColor("GREEN");
  aguamenti.setTitle("KELİME: AGUAMENTI");
  aguamenti.setImage("https://media.giphy.com/media/eO28X88bhD2De/giphy.gif");
  aguamenti.addField("1- ", "Bardak");
  aguamenti.addField("2- ", "Su");
  aguamenti.addField("3- ", "İçmek");
  aguamenti.addField("4- ", "Doldurmak");
  aguamenti.addField("5- ", "Sıvı");
  
  const avada = new Discord.MessageEmbed();
  avada.setColor("GREEN");
  avada.setTitle("KELİME: AVADA KEDAVRA");
  avada.setImage("https://i.pinimg.com/originals/4c/3e/87/4c3e875acc88eb82996f522fe33c3ebd.gif");
  avada.addField("1- ", "Affedilmez Lanet");
  avada.addField("2- ", "Yeşil");
  avada.addField("3- ", "Ölüm");
  avada.addField("4- ", "Harry Potter");
  avada.addField("5- ", "Hortkuluk");
  
  const crucio = new Discord.MessageEmbed();
  crucio.setColor("GREEN");
  crucio.setTitle("KELİME: CRUCIO");
  crucio.setImage("https://static.wikia.nocookie.net/harrypotter/images/9/9c/Voldemort_crucio_harry.gif/revision/latest/top-crop/width/360/height/450?cb=20170730184619");
  crucio.addField("1- ", "Affedilmez Lanet");
  crucio.addField("2- ", "İşkence Etmek");
  crucio.addField("3- ", "Moody");
  crucio.addField("4- ", "Barty Crouch Jr.");
  crucio.addField("5- ", "Örümcek");
  
  const aresto = new Discord.MessageEmbed();
  aresto.setColor("GREEN");
  aresto.setTitle("KELİME: ARRESTO MOMENTUM");
  aresto.setImage("https://static.wikia.nocookie.net/about-the-harry-potter/images/8/81/Wandless_magic.gif/revision/latest/scale-to-width-down/340?cb=20150110124156");
  aresto.addField("1- ", "Düşmek");
  aresto.addField("2- ", "Yavaşlatmak");
  aresto.addField("3- ", "Tılsım");
  aresto.addField("4- ", "Büyü/Sihir");
  aresto.addField("5- ", "Asa");
  
  const riddik = new Discord.MessageEmbed();
  riddik.setColor("GREEN");
  riddik.setTitle("KELİME: RIDDIKULUS");
  riddik.setImage("https://fantastikcanavarlar.com/wp-content/uploads/2016/06/lupin-riddikulus.gif");
  riddik.addField("1- ", "Remus Lupin");
  riddik.addField("2- ", "Böcürt");
  riddik.addField("3- ", "Gülünç");
  riddik.addField("4- ", "Korku");
  riddik.addField("5- ", "Komik");
  
  const expec = new Discord.MessageEmbed();
  expec.setColor("GREEN");
  expec.setTitle("KELİME: EXPECTO PATRONUM");
  expec.setImage("https://i.pinimg.com/originals/91/e6/1e/91e61e40a30699ec31bb6bbe28dd2029.gif");
  expec.addField("1- ", "Ruh Emici");
  expec.addField("2- ", "Geyik");
  expec.addField("3- ", "Karanlık Sanatlara Karşı Savunma");
  expec.addField("4- ", "Kovmak");
  expec.addField("5- ", "Patronus");
  
  const accio = new Discord.MessageEmbed();
  accio.setColor("GREEN");
  accio.setTitle("KELİME: ACCIO");
  accio.setImage("https://img-s2.onedio.com/id-535908dc418a2cea4535a437/rev-1/w-500/o-82x37/s-1649d3067993b6c1e281e405eae3998661e263e8.gif");
  accio.addField("1- ", "Çağırmak");
  accio.addField("2- ", "Uzak");
  accio.addField("3- ", "Eşya");
  accio.addField("4- ", "Almak");
  accio.addField("5- ", "Süpürge");
  
  const obliviate = new Discord.MessageEmbed();
  obliviate.setColor("GREEN");
  obliviate.setTitle("KELİME: OBLIVIATE");
  obliviate.setImage("https://listelist.com/wp-content/uploads/2013/09/obliviate-harry-potter-buyuleri.gif");
  obliviate.addField("1- ", "Unutturmak");
  obliviate.addField("2- ", "Hafızasını Silmek");
  obliviate.addField("3- ", "Hermione");
  obliviate.addField("4- ", "Anı");
  obliviate.addField("5- ", "Zihin");
  
  const ruhem = new Discord.MessageEmbed();
  ruhem.setColor("GREEN");
  ruhem.setTitle("KELİME: RUH EMİCİ");
  ruhem.setImage("https://acciowizardsunite.com/wp-content/uploads/2019/04/dementors-kiss-gif.gif");
  ruhem.addField("1- ", "Korku");
  ruhem.addField("2- ", "Mutsuzluk");
  ruhem.addField("3- ", "Patronus");
  ruhem.addField("4- ", "Azkaban");
  ruhem.addField("5- ", "Öpücük");
   
  const liste = [
    vampir,
    catal,
    aresto,
    expec,
    ruhem,
    accio,
    riddik,
    kurt,
    avada,
    bombarda,
    crucio,
    obliviate,
    aguamenti,
    veela,
    olumy,
    quid,
    deligoz,
    spec,
    darkl,
    animagus,
    maledictus,
    meta,
    goru,
    ksks,
    tils,
    syb,
    iksir,
    bitkibilim,
    hog,
    rom,
    luther,
    amras,
    beti,
    raven,
    murver,
    zihn,
    zihne,
    unic,
    atad,
    anka,
    bayk,
    kabu,
    fuphup,
    capulcu,
    gorunmezlik,
    asa,
    cizkipir,
    inkantasyon,
    bakan,
    seher,
    
  ];

  var yanit = liste[Math.floor(Math.random() * liste.length)];

  message.author.send(yanit);
  kisi.send(yanit);

  message.channel.send("Yarışmacıya ve hakeme kelime gönderildi.");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "tabu",
  description: "İstediğiniz şeyi bota yazdırır.",
  usage: "yaz [yazdırmak istediğiniz şey]"
};
