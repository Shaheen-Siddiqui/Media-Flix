//All Videos Data
import {v4 as uuid} from 'uuid'


// [7-3-5]
// category should be [**tahajjud**, Haram relationship, Twakkul, Ramadan, stress, Parda, LGBTQ, success & failure, generation-Z, GupShup]

const Tuaha_ibn_Jalil =
  "https://yt3.googleusercontent.com/ytc/AOPolaR9GLsAK98FCnGTQCRCPnB3mj3mRrNN_pSEmfCN=s176-c-k-c0x00ffffff-no-rj-mo";
const Muhammad_Ali =
  "https://yt3.googleusercontent.com/ytc/AOPolaTHtGD1Ah7eFldy_YAPSEjub5X3UGD_lu7y4OwNNQ=s176-c-k-c0x00ffffff-no-rj-mo";
const Abu_Saad =
  "https://yt3.googleusercontent.com/YaJ45p0uP7i0LkkGQS9gn0wUMOKTRoh031wuTCJ7YKvxhiDrEPtU1nuHLUbWf97D2ttTKLEcxw=s176-c-k-c0x00ffffff-no-rj-mo";
const Ahmed_Khan =
  "https://yt3.googleusercontent.com/gvEO3eKNmXycvV6nsNN0_tj12va9EiBaY119nWdB49PHmCN7k49VI_W_4WWz0Ih-fwR8O-k4=s176-c-k-c0x00ffffff-no-rj-mo";
const Mugheerah_Luqman =
  "https://yt3.googleusercontent.com/4SCoXagCTouJ1udJSaY2jt4gL64YdWbtNntu71eIKK7nm9uR522JgKnA_ICdBKWaDw-rcssT=s176-c-k-c0x00ffffff-no-rj-mo";

const Raja_Zia =
  "https://pbs.twimg.com/profile_images/1402659988036800516/N9XXNk2J_400x400.jpg";

const Ali_Ehttisham =
  "https://i0.wp.com/youthclub.pk/wp-content/uploads/2021/07/P1200021-copy6.jpg?fit=768%2C768&ssl=1";

const Wajih_Uddin =
  "https://yt3.googleusercontent.com/PXSnZOTMStXXurXzLy6RyWyaMVsm4xcWi0m849SUgwjwP4qk3qU-33BMCA21JCZDHF1CQDUnZQ=s176-c-k-c0x00ffffff-no-rj-mo";

//Creators;
let tuaha = "Tuaha ibn Jalil";
let ali = "Muhammad Ali";
let zia = "Raja Zia";
let luqman = "Mugheerah Luqman";
let ehttisham = "Ali Ehttisham";
let wajih = "Wajih_Uddin";
let saad = "Abu_Saad";
let ahmad = "Ehmad Khan";
export const YouthclubVideoList = [
  {
    _id: uuid(),
    title: "The Sajdah of Tahajjud | Reminder | Tuaha ibn Jalil",
    views: "149k",
    thumbnail: Tuaha_ibn_Jalil,
    src: "https://youtu.be/fYSpiOb1YWk",
    category: "Tahajjud prayer",
    videoThumbnail: "",
    creator: tuaha,
    videoThumbnail: "https://i.ytimg.com/vi/fYSpiOb1YWk/maxresdefault.jpg",
  },
  {
    _id: uuid(),
    title: "Raat Ko Uth k Tahajjud Parhny ka Maza | Let's Wake up For Tahajjud",
    views: "34k",
    src: "https://youtu.be/x1ILqK1YaSY?si=zhvAcJWEzFD_YXJB",
    thumbnail: Muhammad_Ali,
    category: "Tahajjud prayer",
    videoThumbnail: "https://i.ytimg.com/vi/x1ILqK1YaSY/maxresdefault.jpg",
    creator: ali,
  },
  {
    _id: uuid(),
    title:
      "The Secrets Of Tahajjud || Tuaha Ibn Jalil, Ali E And Abu Saad || #tahajjud Emotional Reminder",
    views: "55k",
    src: "https://youtu.be/yHNhR0ZT1JM?si=gDRSJQpEoFkwVKde",
    thumbnail: Tuaha_ibn_Jalil,
    category: "Tahajjud prayer",
    videoThumbnail: "https://i.ytimg.com/vi/yHNhR0ZT1JM/sddefault.jpg",
    creator: tuaha,
  },
  {
    _id: uuid(),
    title:
      "Jis Ghar Main Tahajjud Parhi Jati Hai | Tuaha Ibn Jalil | Beautiful Reminder by Tuaha Ibn Jalil",
    views: "461k",
    thumbnail: Tuaha_ibn_Jalil,
    src: "https://youtu.be/L5Rxa-fTHLs?si=jAc4m_9mhp_vSEKc",
    category: "Tahajjud prayer",
    videoThumbnail: "https://i.ytimg.com/vi/L5Rxa-fTHLs/maxresdefault.jpg",
    creator: tuaha,
  },
  {
    _id: uuid(),
    title: "Tips For Waking up in Tahajjud ",
    views: "76k",
    thumbnail: Abu_Saad,
    src: "https://youtu.be/YbswnVCO46w?si=h2Ykp0ZryPiINwEM",
    category: "Tahajjud prayer",
    videoThumbnail: "https://i.ytimg.com/vi/YbswnVCO46w/maxresdefault.jpg",
    creator: "Tuaha ibn Jalil | Abu Saad | Ali.E",
  },

  {
    _id: uuid(),
    title: "Sexual Desires! | Pooch Lo with Raja Zia - Ep.8",
    views: "238k",
    thumbnail: Raja_Zia,
    src: "https://youtu.be/CrdzKqcvyeo?si=NtHXH35zg6c3425Z",
    category: "Haram Relationship In Islam",
    videoThumbnail:
      "https://i.ytimg.com/vi/CrdzKqcvyeo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBC5gj0d8wk3vD_d9hRQ5GGX58Wpg",
    creator: zia,
  },
  {
    _id: uuid(),
    title: "GOLDEN TIP TO END A HARAM RELATIONSHIP",
    views: "97k",
    thumbnail: Tuaha_ibn_Jalil,
    src: "https://youtu.be/xEAdIwlIrNQ?si=U9VTrEDZjTPq3xv2",
    category: "Haram Relationship In Islam",
    videoThumbnail: "https://i.ytimg.com/vi/UGu34Z0s9PI/maxresdefault.jpg",
    creator: tuaha,
  },
  {
    _id: uuid(),
    title: "HOW TO END A HARAM RELATIONSHIP",
    views: "186k",
    thumbnail: Raja_Zia,
    src: "https://youtu.be/9_eSq7k8sP0?si=aW6H1wv0AbzXWEdn",
    category: "Haram Relationship In Islam",
    videoThumbnail: "https://i.ytimg.com/vi/9_eSq7k8sP0/sddefault.jpg",
    creator: zia,
  },
  {
    _id: uuid(),
    title: "This clip can make you end haraam relations.",
    views: "113k",
    thumbnail: Muhammad_Ali,
    src: "https://youtu.be/UbWsJXHJ6SY?si=toonmzIHWHyjgkHN",
    category: "Haram Relationship In Islam",
    videoThumbnail:
      "https://i.ytimg.com/vi/UbWsJXHJ6SY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGHIgTyg9MA8=&rs=AOn4CLAbLPEc_jOlQZD8wOaQwTN_MUBQ2w",
    creator: ali,
  },
  {
    _id: uuid(),
    title: "The Love of Allah || Dil Ki Baten",
    views: "344k",
    thumbnail: Mugheerah_Luqman,
    src: "https://youtu.be/4b6TYcEO824?si=_dn500qnig4Z3mCE",
    category: "Haram Relationship In Islam",
    videoThumbnail:
      "https://i.ytimg.com/vi/4b6TYcEO824/sddefault.jpg?v=63e392cb",
    creator: luqman,
  },
  {
    _id: uuid(),
    title:
      "Haram Relationships |Youth Club|@TuahaIbnJalil @AliEhttisham |Path to paradise",
    views: "79k",
    thumbnail: Abu_Saad,
    src: "https://youtu.be/BOXUvRGwrWc?si=YypZOw6vNAtt_hOb",
    category: "Haram Relationship In Islam",
    videoThumbnail: "https://i.ytimg.com/vi/BOXUvRGwrWc/hqdefault.jpg",
    creator: ehttisham,
  },
  {
    _id: uuid(),
    title: "Sacha Pyar | The 11th Hour | Ep. 7",
    views: "214k",
    thumbnail: Ali_Ehttisham,
    category: "Haram Relationship In Islam",
    videoThumbnail: "https://i.ytimg.com/vi/D-UkCVH4z64/mqdefault.jpg",
    creator: "Tuaha Ibn Jalil feat. Ali E. & Haider Kaiser",
  },

  {
    _id: uuid(),
    title: "Scarcity of Tawakkul | Loud & Clear",
    views: "930k",
    thumbnail: Tuaha_ibn_Jalil,
    src: "https://www.youtube.com/live/jroERDieleY?si=WY3rirOu8Rlyzf3o",
    category: "Tawakkul",
    videoThumbnail: "https://i.ytimg.com/vi/jroERDieleY/maxresdefault.jpg",
    creator: "Tuaha ibn Jalil, Ali E., & M. Ali",
  },
  {
    _id: uuid(),
    title:
      "Tawakkul on Allah SWT! | Spiritual Cardiology | Raja Zia ul Haq | Ep.6",
    views: "868k",
    thumbnail: Raja_Zia,
    src: "https://youtu.be/43n0w6yy3Do?si=jhqU0oFbIOCAD6q2",
    category: "Tawakkul",
    videoThumbnail:
      "https://i.ytimg.com/vi/lbbii0I-nhc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCUGaLHNFTPswt3IMgQV6QSY_sDqg",
    creator: zia,
  },
  {
    _id: uuid(),
    title: "Hope & Faith || The MA Podcast || S2 || Ep 28",
    views: "645k",
    thumbnail: Muhammad_Ali,
    src: "https://youtu.be/AXKjjfxNhJk?si=Iw66KT6gcnjl2Hta",
    category: "Tawakkul",
    videoThumbnail: "https://i.ytimg.com/vi/AXKjjfxNhJk/maxresdefault.jpg",
    creator: ali,
  },
  {
    _id: uuid(),
    title: "POWER OF ISTAGHFAR! | Wajih Uddin | Youth Club",
    views: "576k",
    thumbnail: Wajih_Uddin,
    src: "https://youtu.be/N2A8n5Ds1z8?si=Ozot3zwZ5kn3TMyX",
    category: "Tawakkul",
    videoThumbnail: "https://i.ytimg.com/vi/N2A8n5Ds1z8/maxresdefault.jpg",
    creator: wajih,
  },
  {
    _id: uuid(),
    title: "Tumhare Liye Allah Kafi hai | Powerful Reminder | Youth Express",
    views: "60k",
    thumbnail: "https://picsum.photos/311/174",
    src: "https://youtu.be/5PqLnStVcUU?si=mw9rCrX5Y0eLYguK",
    category: "Tawakkul",
    videoThumbnail: "https://i.ytimg.com/vi/5PqLnStVcUU/sddefault.jpg",
    creator: "Muhammed Ali, Raja Zia, Dr. Israr Ehmad",
  },

  //Ramadan
  {
    _id: uuid(),
    title: "Reflections From The Quran || Juz 1 || Ramadan 2023",
    views: "1375k",
    thumbnail: Muhammad_Ali,
    src: "https://youtu.be/tDmXpaQnr88?si=uAWLiBNvEce8OH0l",
    category: "Month Of Ramadaan Kareem",
    videoThumbnail: "https://i.ytimg.com/vi/tDmXpaQnr88/maxresdefault.jpg",
    creator: ali,
  },
  {
    _id: uuid(),
    title:
      "Sprint Mode - Last 10 days of Ramadan | 11th Hour - Season 2 | Last Episode | ",
    views: "127k",
    thumbnail: Tuaha_ibn_Jalil,
    src: "https://www.youtube.com/live/9LwNjBcs2rA?si=OujoYjLqrpKML4aT",
    category: "Month Of Ramadaan Kareem",
    videoThumbnail: "https://i.ytimg.com/vi/9LwNjBcs2rA/maxresdefault.jpg",
    creator: "TJ. Abu Saad & Ali E",
  },
  {
    _id: uuid(),
    title: "Taqwa in Ramazan | Exclusive Reminder | @abusaadyc",
    views: "37k",
    thumbnail: Abu_Saad,
    src: "https://youtu.be/oFhirRn1xUA?si=sRxeFPs9Y_6HMqc-",
    category: "Month Of Ramadaan Kareem",
    videoThumbnail: "https://i.ytimg.com/vi/kkGMdk8mG8U/sddefault.jpg",
    creator: saad,
  },
  {
    _id: uuid(),
    title:
      "2 Tips To Welcome This Ramazan | Exclusive Reminder | Tuaha Ibn Jalil",
    views: "81k",
    thumbnail: Tuaha_ibn_Jalil,
    src: "https://youtu.be/XcpanDtv1p0?si=WnkuLlCE6ZLjAi7h",
    category: "Month Of Ramadaan Kareem",
    videoThumbnail: "https://i.ytimg.com/vi/XcpanDtv1p0/sddefault.jpg",
    creator: tuaha,
  },
  {
    _id: uuid(),
    title:
      "HOW I USED TO SPEND RAMADAN | Abu Saad Youth Club | Abu Saad | Emotional Bayan |",
    views: "1k",
    thumbnail: Abu_Saad,
    src: "https://youtu.be/OulcJdNcUkw?si=_2Yd7cblzH8COQXO",
    category: "Month Of Ramadaan Kareem",
    videoThumbnail: "https://i.ytimg.com/vi/OulcJdNcUkw/sddefault.jpg",
    creator: saad,
  },
  {
    _id: uuid(),
    title:
      "Ramadan Goals: What Is My Plan For Ramadan | Beautiful Remainder | Emotional Bayan | Muhammad Ali",
    views: "17k",
    thumbnail: Muhammad_Ali,
    src: "https://youtu.be/jaNk7yVLNzQ?si=-dslgxQOCTRNR8Mr",
    category: "Month Of Ramadaan Kareem",
    videoThumbnail: "https://i.ytimg.com/vi/jaNk7yVLNzQ/maxresdefault.jpg",
    creator: ali,
  },
  {
    _id: uuid(),
    title: "Ramadan best tips | Youth Club",
    views: "404k",
    thumbnail: Ali_Ehttisham,
    src: "https://youtu.be/nEoTxewoCCQ?si=WIZJuAQ2F3zIbJ_P",
    category: "Month Of Ramadaan Kareem",
    videoThumbnail: "https://i.ytimg.com/vi/tJp-SYFl-yU/maxresdefault.jpg",
    creator: "Raja Zia ul Haq, Ali E, Abu Saad",
  },
  {
    _id: uuid(),
    title: "How to improve the month of Ramadan | youth club | YT Short",
    views: "305k",
    thumbnail: Raja_Zia,
    src: "https://youtu.be/lGriVRaVIz4?si=-8xhQ1KoMsoB4DqD",
    category: "Month Of Ramadaan Kareem",
    videoThumbnail: "https://i.ytimg.com/vi/XX20fV29sOM/mqdefault.jpg",
    creator: "Raja Zia ul Haq, Ali E, Abu Saad, Umer",
  },

  //Depration
  {
    _id: uuid(),
    title: "DEPRESSION AND ITS SOLUTION ᴴᴰ┇ FAQs ┇ Raja Zia Ul Haq",
    views: "39k",
    thumbnail: Raja_Zia,
    src: "https://youtu.be/CRn76psnslc?si=zzObj8i19cWKOrvx",
    category: "Depression",
    videoThumbnail: "https://i.ytimg.com/vi/CRn76psnslc/maxresdefault.jpg",
    creator: "PaperArtDimensions",
  },
  {
    _id: uuid(),
    title:
      "What is Anxiety #motivation #religion #islamreligion #health #mentalhealth #mentalhealthawareness",
    views: 1756,
    thumbnail: Ahmed_Khan,
    src: "https://www.youtube.com/shorts/eAehU8Ka8-E",
    category: "Depression",
    videoThumbnail:
      "https://i.ytimg.com/vi/w3yHI5zr4Ps/maxresdefault.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYciBJKDQwDw==&rs=AOn4CLBDyXzshf07XJrqcuzwThz8FkrEvg",
    creator: ahmad,
  },
  {
    _id: uuid(),
    title:
      "What is anxiety? How anxiety disorder can be cured | خیالات پرکیسےقابوپایاجائ",
    views: 1756,
    thumbnail: Ahmed_Khan,
    src: "https://youtu.be/oA_PZpY2xBM?si=3bYdaUB7r0c9Rk_O",
    category: "Depression",
    videoThumbnail:
      "https://i.ytimg.com/vi/hzY4AKheZdc/hq720.jpg?sqp=-oaymwEYCJUDENAFSFryq4qpAwoIARUAAIhC0AEB&rs=AOn4CLDgzrOOPhFQVW1lISKfyIsp4fPyQw",
    creator: "Dr Waseem",
  },
  {
    _id: uuid(),
    title: "Dont Hate Your Problems | By Mohammad Ali | Combat Kit Series",
    views: 1756,
    thumbnail: Muhammad_Ali,
    src: "https://youtu.be/Gs98Jyq7_i0?si=s0yyosKupep0SOxO",
    category: "Depression",
    videoThumbnail: "https://i.ytimg.com/vi/Gs98Jyq7_i0/mqdefault.jpg",
    creator: ali,
  },

  //parda
  {
    _id: uuid(),
    title: "Why to do Pardah ? || The MA Podcast",
    views: 633,
    thumbnail: Muhammad_Ali,
    src: "https://youtu.be/qNECffup744?si=F4r4mz3xyiz4e_MS",
    category: "Women Parda",
    videoThumbnail: "https://i.ytimg.com/vi/qNECffup744/maxresdefault.jpg",
    creator: ali,
  },
  {
    _id: uuid(),
    title: "AAO MIL KAR CHALAIN! | Aurat March 2021",
    views: 1756,
    thumbnail: Mugheerah_Luqman,
    src: "https://youtu.be/_ULuMQS8p4M?si=fccw2j_8xwnnRi1c",
    category: "Women Parda",
    videoThumbnail: "https://i.ytimg.com/vi/_ULuMQS8p4M/sddefault.jpg",
    creator: luqman,
  },
  {
    _id: uuid(),
    title: "HIJAB | Eye Opening Reminder | Abu Saad",
    views: 1756,
    thumbnail: Abu_Saad,
    src: "https://youtu.be/bW35LLtolrk?si=BvJIoTDeVsX5K93T",
    category: "Women Parda",
    videoThumbnail: "https://i.ytimg.com/vi/bW35LLtolrk/maxresdefault.jpg",
    creator: saad,
  },
  {
    _id: uuid(),
    title: "Hijab Controversy | Muhammad Ali | Youthclub Speakers",
    views: 1756,
    thumbnail: Muhammad_Ali,
    src: "https://youtu.be/8N1i4FALL2o?si=rF69gRI428Z4hRr4",
    category: "Women Parda",
    videoThumbnail: "https://i.ytimg.com/vi/8N1i4FALL2o/maxresdefault.jpg",
    creator: "ali",
  },

  //lgbtq
  {
    _id: uuid(),
    title:
      "Rise of Homosexuality in Pakistan | Emotional Reminder | By Raja Zia ul Haq",
    views: 1756,
    thumbnail: Raja_Zia,
    src: "https://youtu.be/8uvV4AtESs8?si=m792c-B2rQ_8WRVe",
    category: "LGBTQ",
    videoThumbnail: "https://i.ytimg.com/vi/8uvV4AtESs8/maxresdefault.jpg",
    creator: zia,
  },
  {
    _id: uuid(),
    title: "Platonic Relationship | Being Her! - Special Edition | Sara Asif",
    views: 1756,
    thumbnail: Raja_Zia,
    src: "https://youtu.be/cdZPg7891qw?si=GN1Ozy8kmBAWyFwA",
    category: "LGBTQ",
    videoThumbnail: "https://i.ytimg.com/vi/cdZPg7891qw/sddefault.jpg",
    creator: " Sara Asif",
  },
  {
    _id: uuid(),
    title:
      "MY CHILD IS GAY!!! What Should I Do? | LGBTQ Series - [Part 4/6] | Being Her! | Sara Asif",
    views: 1756,
    thumbnail: Raja_Zia,
    src: "https://youtu.be/HztYI1cKIgs?si=oKT8PUCfc87_8iM7",
    category: "LGBTQ",
    videoThumbnail: "https://i.ytimg.com/vi/HztYI1cKIgs/maxresdefault.jpg",
    creator: "Sara Asif",
  },
  {
    _id: uuid(),
    title: "COLOR ME HAPPY [Mini Version] - Workshop by Raja Zia ul Haq",
    views: 1756,
    thumbnail: Raja_Zia,
    src: "https://youtu.be/FY7hi4LAhYw?si=KZAf7bHkAsSd11MJ",
    category: "LGBTQ",
    videoThumbnail: "https://i.ytimg.com/vi/FY7hi4LAhYw/sddefault.jpg",
    creator: zia,
  },
  {
    _id: uuid(),
    title:
      "Gay Nikkah Astagfirullah!! LGBTQ.| Raja Zia ul haq Youth club Sessions",
    views: 1756,
    thumbnail: Raja_Zia,
    src: "https://youtu.be/W1TIP9f4Qmo?si=PO8_LG7kG5E-x4_J",
    category: "LGBTQ",
    videoThumbnail: "https://i.ytimg.com/vi/W1TIP9f4Qmo/sddefault.jpg",
    creator: zia,
  },
  {
    _id: uuid(),
    title:
      "Transgender Male Admission In Women Universities | Raja Zia Ul Haq & Youth Club | Syed Sheraz |",
    views: "175k",
    thumbnail: Raja_Zia,
    src: "https://youtu.be/LPu-TaYuN8Q?si=pga2s1d4rZyIcATt",
    category: "LGBTQ",
    videoThumbnail: "https://i.ytimg.com/vi/LPu-TaYuN8Q/maxresdefault.jpg",
    creator: zia,
  },

  //zen Z
  {
    _id: uuid(),
    title: "Generation Z | By Tuaha ibn Jalil",
    views: 1756,
    thumbnail: Tuaha_ibn_Jalil,
    src: "https://www.youtube.com/live/EeDE09Ip3qY?si=5UcpNM6WorezzQn5",
    category: "Let’s talk about Generation - Z",
    videoThumbnail: "https://i.ytimg.com/vi/EeDE09Ip3qY/maxresdefault.jpg",
    creator: tuaha,
  },
  {
    _id: uuid(),
    title:
      "Youth Issues - Generation Z | The Daily Dose - EP. 14 | Wajihuddin ft. M. Ali & Zarain S.",
    views: 1756,
    thumbnail: Muhammad_Ali,
    src: "https://www.youtube.com/live/7Kodg0LCYc0?si=REuxIJaBnD3egR-B",
    category: "Let’s talk about Generation - Z",
    videoThumbnail: "https://i.ytimg.com/vi/7Kodg0LCYc0/maxresdefault.jpg",
    creator: ali,
  },
  {
    _id: uuid(),
    title: "Let’s talk about Generation - Z || The Teen Show || Episode - 1",
    views: 1756,
    thumbnail: Muhammad_Ali,
    src: "https://www.youtube.com/live/GYQbqi8dT7o?si=yXbynr2uesx5asR6",
    category: "Let’s talk about Generation - Z",
    videoThumbnail: "https://i.ytimg.com/vi/GYQbqi8dT7o/maxresdefault.jpg",
    creator: ali,
  },
  {
    _id: uuid(),
    title: "Highlights from our Mega Event - Lahore | Winds Of Change",
    views: 1756,
    thumbnail: Mugheerah_Luqman,
    src: "https://youtu.be/KjwUYeLfiHc?si=Y6qx_kQX3WHueuJb",
    category: "Let’s talk about Generation - Z",
    videoThumbnail: "https://i.ytimg.com/vi/KjwUYeLfiHc/maxresdefault.jpg",
    creator: luqman,
  },
  {
    _id: uuid(),
    title: "How Co-education destroy our Gen | Youth Club",
    views: 1756,
    thumbnail: Ahmed_Khan,
    src: "https://youtu.be/kPERFm_I7zE?si=KAHB_nnuRSFZPdgd",
    category: "Let’s talk about Generation - Z",
    videoThumbnail: "https://i.ytimg.com/vi/4mR8RFyl8_8/maxresdefault.jpg",
    creator: "Muhammad Ali, Tuaha ibn Jalil, Ali E, Ahmed Khan",
  },
  {
    _id: uuid(),
    title: "Life of a Generation Z | Tuaha ibn Jalil#youthclub # shorts",
    views: 1756,
    thumbnail: Ali_Ehttisham,
    src: "https://youtu.be/Zy006WE5oiQ?si=AVWn6NXvyDZTmCSu",
    category: "Let’s talk about Generation - Z",
    videoThumbnail: "https://i.ytimg.com/vi/WJvrejzgDZY/maxresdefault.jpg",
    creator: ehttisham,
  },

  //gupshup
  {
    _id: uuid(),
    title: "GUP SHUP! | Wajih Uddin feat. YC Boys",
    views: 1756,
    thumbnail: Raja_Zia,
    src: "https://www.youtube.com/live/13WPuQ5MVro?si=ZRPblnDgDMVJcKqy",
    category: "GUP SHUP!",
    videoThumbnail:
      "https://i.ytimg.com/vi/upISOIyHdsg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCmTXyMMxDVVpiWaFQ9pyUXR2LTgw",
    creator: "YC Boys",
  },
  {
    _id: uuid(),
    title: "GupShup with Dr. Subayyal || By Brother Mohammad Ali",
    views: 1756,
    thumbnail: Muhammad_Ali,
    src: "https://youtu.be/lCE65xOHgx0?si=-Hq4TdHnA_2i5MPT",
    category: "GUP SHUP!",
    videoThumbnail: "https://i.ytimg.com/vi/lCE65xOHgx0/maxresdefault.jpg",
    creator: "Dr. Subayyal, Muhammed ali",
  },
  {
    _id: uuid(),
    title: "Talk Shawk | Tuaha ibn Jalil, Ali E., Khurram Alvi & Abu Saad",
    views: 1756,
    thumbnail: Tuaha_ibn_Jalil,
    src: "https://www.youtube.com/live/FJo2_0fpMD8?si=BoZoOnijZrCCNVcv",
    category: "GUP SHUP!",
    videoThumbnail: "https://i.ytimg.com/vi/KWoQmhTd39w/maxresdefault.jpg",
    creator: "Tuaha ibn Jalil, Ali E., Khurram Alvi & Abu Saad",
  },
  {
    _id: uuid(),
    title: "Funny Story of Moulvi | Exercise | Youth Club",
    views: 1756,
    thumbnail: Ali_Ehttisham,
    src: "https://youtu.be/TWOka_sjnEY?si=XFWvZkIIAGZ-zN_L",
    category: "GUP SHUP!",
    videoThumbnail: "https://i.ytimg.com/vi/TWOka_sjnEY/hqdefault.jpg",
    creator: "Tuaha ibn Jalil | Ali.E",
  },
];
