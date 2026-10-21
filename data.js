/**
 * Dangjin Tourist Guide - Data & Localization
 */

const APP_DATA = {
  destinations: [
    {
      id: "waemok",
      category: "nature",
      title: {
        en: "Waemok Village",
        ko: "왜목마을",
        ja: "ウェモク村",
        zh: "歪木村"
      },
      tagline: {
        en: "Rare spot to see both Sunrise & Sunset over the West Sea",
        ko: "서해안에서 일출과 일몰, 월출까지 모두 볼 수 있는 특별한 명소",
        ja: "西海で日の出と日の入りを同時に楽しめる特別な場所",
        zh: "西海岸同时欣赏日出与日落的绝美圣地"
      },
      description: {
        en: "Because the land extends northward like a heron's neck, you can watch both breathtaking sunrises and sunsets from the same beach. Famous for the soaring 'Bird of the Millennium' monument, romantic shoreline strolls, and fresh seasonal seafood.",
        ko: "왜가리 목처럼 북쪽으로 툭 튀어나온 독특한 지형 덕분에 한 곳에서 일출과 일몰, 월출을 모두 감상할 수 있는 당진의 대표 명소입니다. 새빛왜목 조형물과 해안 산책로가 일품입니다.",
        ja: "サギの首のように北へ突き出た独特の地形により、一箇所で日の出と日の入りの両方を眺めることができる全国的にも珍しいスポットです。",
        zh: "因地形如白鹭颈部般向北突起，是韩国罕见能在同一地点同时观赏日出、日落和月出的西海胜地。"
      },
      address: "26, Waemok-gil, Seongsan-myeon, Dangjin-si",
      addressKo: "충청남도 당진시 석문면 왜목길 26",
      tips: {
        en: "Best visited early morning for sunrise or late afternoon for sunset. Great sashimi & clam bake restaurants line the shore.",
        ko: "일출 또는 일몰 시간 30분 전 도착을 추천합니다. 해안가에 바지락 칼국수 및 조개구이 맛집이 많습니다.",
        ja: "日の出または日の入りの30分前に到着するのがおすすめです。海鮮焼きのお店が充実しています。",
        zh: "建议在日出或日落前半小时到达。海边有许多美味的烤贝和蛤蜊刀削面餐厅。"
      },
      tags: ["Sunrise", "Sunset", "Ocean Walk", "Seafood"],
      coords: { lat: 37.0371, lng: 126.5412 },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "solmoe",
      category: "culture",
      title: {
        en: "Solmoe Holy Ground",
        ko: "솔뫼성지",
        ja: "ソルモエ聖地",
        zh: "松山圣地"
      },
      tagline: {
        en: "The Bethlehem of Korea & Birthplace of St. Andrew Kim Dae-geon",
        ko: "한국인 최초의 사제 성 김대건 안드레아 신부 탄생지",
        ja: "韓国初の司祭・金大建神父の生誕地",
        zh: "韩国首位司铎金大建神父的诞生地"
      },
      description: {
        en: "Known as the birthplace of Father Andrew Kim Tae-gon (Korea's first Roman Catholic priest), Solmoe means 'hill with a pine forest'. Visited by Pope Francis during the 2014 Asian Youth Day, it offers a serene pine tree path and contemplative atmosphere.",
        ko: "‘소나무가 뫼(산)를 이루고 있다’는 뜻의 솔뫼성지는 한국인 최초의 가톨릭 사제인 성 김대건 신부의 생가가 복원되어 있으며, 2014년 프란치스코 교황이 방문하여 세계적인 성지로 자리매김했습니다.",
        ja: "韓国カトリック教会の父と呼ばれる金大建神父の生家が復元されており、2014年にはローマ教皇フランシスコも訪れた静謐で美しい松林の聖地です。",
        zh: "被誉为韩国天主教的发源地与摇篮。2014年教宗方济各曾到访此地，松林环绕、古朴宁静，具有极高的历史与灵性价值。"
      },
      address: "132, Solmoe-ro, Ugang-myeon, Dangjin-si",
      addressKo: "충청남도 당진시 우강면 솔뫼로 132",
      tips: {
        en: "Free admission. Audio guides available at the visitor center. Excellent peaceful walking trail among century-old pine trees.",
        ko: "입장료 무료. 소나무 숲길 산책로가 잘 정비되어 있어 힐링과 사색에 적합합니다.",
        ja: "入場無料。100年を超える松林の中を穏やかに散歩できるヒーリングスポットです。",
        zh: "免费入场。漫步在百年古松林间，环境庄重静谧，非常适合静思漫步。"
      },
      tags: ["UNESCO Heritage Related", "History", "Pope Francis", "Pine Forest"],
      coords: { lat: 36.8791, lng: 126.7578 },
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ami-art",
      category: "culture",
      title: {
        en: "Ami Art Museum",
        ko: "아미미술관",
        ja: "アミ美術館",
        zh: "峨嵋美术馆"
      },
      tagline: {
        en: "Idyllic ivy-draped rural school turned contemporary art gallery",
        ko: "폐교를 감성적인 예술 공간으로 재탄생시킨 자연 속 미술관",
        ja: "廃校をリノベーションした緑豊かな自然派アートミュージアム",
        zh: "常春藤掩映的废弃小学校改造而成的治愈系美术馆"
      },
      description: {
        en: "Once an abandoned elementary school, artists renovated this structure into an ultra-photogenic art museum enveloped in lush greenery and ivy. The whimsical suspended branch installations, airy corridors, and peaceful garden cafe make it an absolute Instagram favorite.",
        ko: "폐교된 초등학교를 아티스트들이 손수 가꾸어 감각적인 현대 미술 전시장과 야외 조각 공원으로 탈바꿈했습니다. 복도 천장에 설치된 형형색색의 모빌 작품과 담쟁이덩굴이 인생샷 명소로 유명합니다.",
        ja: "旧小学校を芸術家たちがリノベーション。ツタに覆われたレトロな校舎と現代美術が美しく調和し、フォトスポットとしても国内外で大人気です。",
        zh: "由废弃小学改建而成。外墙爬满常春藤，室内悬挂着梦幻艺术装置，伴有露天雕塑花园和咖啡厅，是拍照与艺术鉴赏的绝佳去处。"
      },
      address: "247, Nambu-ro, Sunseong-myeon, Dangjin-si",
      addressKo: "충청남도 당진시 순성면 남부로 247",
      tips: {
        en: "Admission: ~6,000 KRW. Photography is welcome everywhere. Enjoy a hot drip coffee at the Hanok cafe nestled behind the school.",
        ko: "입장료 성인 약 6,000원. 전시관 뒤쪽의 한옥 카페 '지베르니'에서 차 한 잔의 여유를 즐겨보세요.",
        ja: "入場料大人約6,000ウォン。どこを撮っても絵になる人気フォトスポット。敷地内カフェもおすすめ。",
        zh: "门票约6,000韩元。馆内任意角度均极具艺术美感，后方的韩屋咖啡厅非常惬意。"
      },
      tags: ["Art", "Photo Spot", "Modern Art", "Cafe"],
      coords: { lat: 36.8409, lng: 126.6668 },
      image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1577720643272-265f09367456?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sapgyoho",
      category: "attraction",
      title: {
        en: "Sapgyoho Tourist Park & Ferris Wheel",
        ko: "삽교호 관광지 & 놀이동산",
        ja: "挿橋湖（サプギョホ）観光地",
        zh: "插桥湖旅游区与游乐园"
      },
      tagline: {
        en: "Retro seaside amusement park with giant Ferris wheel & seafood feast",
        ko: "레트로 대관람차와 싱싱한 수산물 시장이 공존하는 테마 해양 공원",
        ja: "レトロな大観覧車と新鮮な魚介グルメが楽しめる海浜テーマパーク",
        zh: "复古摩天轮、滨海露天公园与海鲜市场的活力综合区"
      },
      description: {
        en: "Set where lake and sea meet at the massive Sapgyocheon Breakwater. Offers a whimsical vintage amusement park starring a colorful giant Ferris wheel overlooking the ocean, the Navy Marine Theme Park with real retired warships, and endless seafood restaurants.",
        ko: "바다와 호수가 만나는 수문 일대에 조성된 종합 해양 관광지입니다. 서해를 배경으로 돌아가는 대관람차는 로맨틱한 사진 명소이며, 함상공원 및 활어 회센터, 조개구이 골목이 풍성합니다.",
        ja: "海と湖が出会う場所に広がる総合レジャーパーク。レトロな観覧車からの絶景や退役軍艦を展示した海洋公園、海鮮市場が楽しめます。",
        zh: "位于海湖交汇的大坝旁。坐拥俯瞰大海的复古巨型摩天轮、退役军舰退役体验馆及热闹的海鲜刺身街，非常适合散步打卡。"
      },
      address: "Sapgyocheon-gil, Sinpyeong-myeon, Dangjin-si",
      addressKo: "충청남도 당진시 신평면 삽교천길 일원",
      tips: {
        en: "Ride the Ferris wheel right around golden hour. Try the roasted shellfish sets (Jogae-gui) paired with regional Korean rice wine.",
        ko: "일몰 즈음에 대관람차를 타면 환상적인 노을을 볼 수 있습니다. 회센터에서 조개구이나 회를 맛보세요.",
        ja: "夕暮れ時に観覧車に乗るとロマンチックな夕景が広がります。新鮮な貝焼き料理も絶品。",
        zh: "建议在傍晚黄昏搭乘摩天轮，俯瞰壮丽落日。周边有丰富的烤贝套餐与海鲜刺身。"
      },
      tags: ["Ferris Wheel", "Amusement Park", "Warship Museum", "Seafood Market"],
      coords: { lat: 36.8895, lng: 126.8202 },
      image: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "shinri",
      category: "culture",
      title: {
        en: "Sinri Holy Shrine",
        ko: "신리성지",
        ja: "シンリ聖地",
        zh: "新里圣地"
      },
      tagline: {
        en: "Minimalist European-style architecture across expansive green plains",
        ko: "드넓은 들판과 현대 건축물이 조화를 이루는 평화로운 순례지",
        ja: "広大な草原とモダン建築が織りなすフォトジェニックな巡礼地",
        zh: "广袤田野与极简现代建筑交融的洗涤心灵圣地"
      },
      description: {
        en: "Historically known as the 'Catacombs of Joseon Dynasty', Sinri was a secret stronghold for early Korean Catholics. Today it is renowned for its striking concrete chapel museum rising out of open meadows, resembling the romantic landscapes of southern France.",
        ko: "조선시대 천주교 박해 당시 신앙의 요람이자 '조선의 카타콤바'로 불렸던 곳입니다. 현대적이고 절제된 콘크리트 건축물과 푸른 평야가 그림 같은 풍광을 선사합니다.",
        ja: "かつて朝鮮のカタコンベと呼ばれた歴史的聖地。緑一面の草原に佇むモダンな建築と展望タワーは、静かで感動的な景観を誇ります。",
        zh: "曾被称为朝鲜的地下墓穴（Catacombs），是天主教历史重地。如今拥有如雕塑般矗立在平原上的现代美术馆式建筑，辽阔而神圣。"
      },
      address: "151, Pyeongya 6-ro, Hapdeok-eup, Dangjin-si",
      addressKo: "충청남도 당진시 합덕읍 평야6로 151",
      tips: {
        en: "Climb the tower inside the memorial hall for a 360-degree panoramic view of the Yedang Plains.",
        ko: "기념관 엘리베이터를 타고 전망대에 오르면 광활한 평야를 한눈에 조망할 수 있습니다.",
        ja: "記念館のタワー展望台に上ると、どこまでも続く平野を一望できます。",
        zh: "乘坐纪念馆电梯登上观景台，可360度俯瞰广阔无垠的平原风光。"
      },
      tags: ["Architecture", "Peaceful", "Viewpoint", "Historic"],
      coords: { lat: 36.8285, lng: 126.7904 },
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "agroland",
      category: "nature",
      title: {
        en: "Agroland Taeshin Farm",
        ko: "아그로랜드 태신목장",
        ja: "アグロランド 太新牧場",
        zh: "Agroland 太新牧场"
      },
      tagline: {
        en: "Korea's first dairy experience farm with seasonal flower fields",
        ko: "국내 최초의 낙농체험목장과 사계절 꽃이 만발하는 대자연 쉼터",
        ja: "四季の花々と動物たちと触れ合える韓国初の酪農体験牧場",
        zh: "广袤的绿色大牧场，四季花海与亲近动物的生态乐园"
      },
      description: {
        en: "A sprawling pastoral dairy ranch spanning 300,000 square meters. Visitors can hop onto tractor wagons, hand-feed cows and sheep, craft artisanal cheese and ice cream, and stroll through endless fields of barley, cosmos, or cherry blossoms depending on season.",
        ko: "약 30만 평에 이르는 드넓은 초지에서 트랙터 열차 탑승, 송아지 우유 먹이기, 치즈 및 아이스크림 만들기 등을 체험할 수 있으며, 계절마다 청보리와 코스모스 꽃밭이 장관을 이룹니다.",
        ja: "トラクターツアー、動物とのふれあい、チーズ作り体験などファミリーやカップルに大人気。季節ごとにポピーやコスモスの花畑が広がります。",
        zh: "占地约30万坪的生态牧场。可搭乘拖拉机列车、体验给小牛喂奶、亲手制作奶酪冰淇淋，春夏秋冬更有壮观的花田。"
      },
      address: "109-192, Sanghang-gil, Myeoncheon-myeon, Dangjin-si",
      addressKo: "충청남도 당진시 면천면 상항길 109-192",
      tips: {
        en: "Tractor ride is included in the entrance ticket. Perfect destination for family travelers and romantic nature lovers.",
        ko: "입장권에 트랙터 열차 탑승권이 포함되어 있습니다. 계절별 꽃 개화 시기에 맞추어 방문하면 최고의 사진을 남길 수 있습니다.",
        ja: "入場券にトラクター乗車が含まれています。春は青麦、秋はコスモスが特に見事です。",
        zh: "门票已包含拖拉机列车乘车体验。根据季节更替，春季青麦、秋季波斯菊最为动人。"
      },
      tags: ["Nature", "Animals", "Flower Field", "Family Friendly"],
      coords: { lat: 36.8122, lng: 126.6975 },
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80"
    }
  ],

  foods: [
    {
      id: "silchi",
      name: {
        en: "Silchi-hoe (Spring Whitebait)",
        ko: "장고항 실치회",
        ja: "シルチ（シラス刺身）",
        zh: "长古港 银鱼生鱼片 (Silchi)"
      },
      desc: {
        en: "Dangjin's Janggo-hang Port is famous for super-fresh tiny whitebait fish caught between March and May. Tossed with sweet tangy chili sauce, crisp water celery, and sesame oil.",
        ko: "매년 3~5월 장고항에서만 갓 잡은 싱싱한 상태로 맛볼 수 있는 봄철 별미입니다. 새콤달콤한 초고추장과 향긋한 미나리에 무쳐 먹습니다.",
        ja: "毎年春（3〜5月）にダンジン長古港で獲れる新鮮なシラス。甘辛い酢コチュジャンとセリで和えていただく春の絶品珍味です。",
        zh: "每年3至5月长古港特有的春季生鲜美味。肉质鲜嫩透明，拌以酸甜辣酱与水芹菜，口感清爽回甘。"
      },
      tag: "Seasonal Delicacy (Spring)",
      badgeColor: "#10b981",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ugang-rice",
      name: {
        en: "Haenaru Rice Delights & Gukbap",
        ko: "당진 해나루쌀 & 우렁이 쌈밥",
        ja: "ヘナル米とタニシの包みご飯 (ウロンサムパプ)",
        zh: "海渡米与田螺包饭 (Ureong Ssambap)"
      },
      desc: {
        en: "Dangjin produces the nationally praised premium 'Haenaru Rice'. Local eateries serve savory fermented soybean paste packed with freshwater snails (Ureong), wrapped with fresh crisp leaves.",
        ko: "서해안의 바닷바람과 비옥한 토양에서 자란 최고급 '해나루쌀' 밥에 쫄깃한 논우렁이 강된장을 듬뿍 얹어 싸먹는 당진 대표 토속 건강식입니다.",
        ja: "韓国トップブランド米『ヘナル米』の炊きたてご飯と、香ばしい田螺（タニシ）味噌を新鮮野菜に包んで食べる伝統健康食。",
        zh: "依托优质海风孕育出的韩国顶级‘海渡米’，搭配弹牙田螺肉与浓郁大酱炒制，裹入新鲜生菜，风味醇厚且健康。"
      },
      tag: "Local Specialty",
      badgeColor: "#f59e0b",
      image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "jogae-gui",
      name: {
        en: "Charcoal Clam Bake (Jogae-gui)",
        ko: "삽교호/왜목마을 조개구이 & 칼국수",
        ja: "焼き貝＆アサリカルグクス",
        zh: "炭火烤贝海鲜大餐 & 蛤蜊刀削面"
      },
      desc: {
        en: "A must-do Korean coastal dining experience: grill jumbo scallops, clams, and abalone over hot charcoal right at your table, followed by steaming seafood knife-cut noodles.",
        ko: "바다를 보며 숯불 위에 키조개, 가리비, 백합 등을 구워 먹고 칼칼하고 시원한 해물 바지락 칼국수로 마무리하는 서해 여행의 정석 코스입니다.",
        ja: "海を眺めながらホタテやタイラギ貝を炭火で豪快に焼き、最後はアサリ出汁たっぷりの手打ちうどん（カルグクス）で締めます。",
        zh: "西海岸经典体验：在桌旁现烤大扇贝、鲍鱼和蛤蜊，配上海鲜汤底浓郁的热气腾腾手擀蛤蜊面，暖胃又过瘾。"
      },
      tag: "Seaside Must-Eat",
      badgeColor: "#06b6d4",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "myeoncheon-dugyonju",
      name: {
        en: "Myeoncheon Dugyeonju (Azalea Wine)",
        ko: "국가무형문화재 면천 두견주",
        ja: "国家無形文化財・沔川ツツジ酒",
        zh: "韩国国家无形文化遗产 沔川杜鹃酒"
      },
      desc: {
        en: "Designated as Important Intangible Cultural Property No. 86-2, this traditional artisanal wine has over 1,100 years of history brewed with pure glutinous rice and fragrant spring azalea petals.",
        ko: "진달래꽃 꽃잎과 찹쌀로 100일간 정성껏 빚어내는 1,100년 전통의 약주입니다. 은은한 진달래 향기와 부드럽고 달콤한 감칠맛이 일품입니다.",
        ja: "春のツツジの花びらともち米で100日間醸造される歴史1,100年の伝統銘酒。甘く上品な花の香りと深いコクが特徴です。",
        zh: "以春季采集的杜鹃花瓣和糯米历时百日精酿而成，拥有1100余年历史，香气高雅甘甜，曾作为韩朝首脑会晤国宴酒。"
      },
      tag: "Cultural Heritage Beverage",
      badgeColor: "#8b5cf6",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80"
    }
  ],

  phrases: [
    {
      korean: "당진 버스터미널로 가주세요.",
      pronun: "Dangjin beoseu-teomineol-lo ga-ju-se-yo.",
      eng: "Please take me to Dangjin Bus Terminal.",
      category: "taxi"
    },
    {
      korean: "삽교호 놀이동산 가나요?",
      pronun: "Sap-gyo-ho nori-dongsan ga-na-yo?",
      eng: "Does this bus go to Sapgyoho Amusement Park?",
      category: "bus"
    },
    {
      korean: "여기 영어 메뉴판 있나요?",
      pronun: "Yeogi yeong-eo menyupan in-na-yo?",
      eng: "Do you have an English menu here?",
      category: "dining"
    },
    {
      korean: "신용카드 결제 되나요?",
      pronun: "Sin-yong-kadeu gyeol-je doe-na-yo?",
      eng: "Can I pay by credit card?",
      category: "shopping"
    },
    {
      korean: "조개구이 2인분 추천해 주세요.",
      pronun: "Jogae-gui i-in-bun chucheon-hae ju-se-yo.",
      eng: "Please recommend a clam bake set for 2 people.",
      category: "dining"
    },
    {
      korean: "사진 한 장만 찍어주실 수 있나요?",
      pronun: "Sajin han jang-man jjigeo-jusil su in-na-yo?",
      eng: "Could you take a photo for me, please?",
      category: "general"
    }
  ],

  itineraries: {
    daytrip: [
      {
        time: "09:30 AM",
        title: {
          en: "Arrive at Dangjin Terminal & Head to Solmoe Holy Ground",
          ko: "당진 버스터미널 도착 후 솔뫼성지로 이동",
          ja: "唐津ターミナル到着、ソルモエ聖地へ",
          zh: "抵达当津客运站，前往松山圣地"
        },
        desc: {
          en: "Take local bus or taxi (~20 mins). Walk along the tranquil 100-year-old pine forest path.",
          ko: "시내버스 또는 택시로 20분 이동. 백 년 된 소나무 숲길 산책.",
          ja: "タクシー等で約20分。樹齢100年を超える松林で心を落ち着ける朝の散策。",
          zh: "乘市内公交或出租车约20分钟。漫步百年古松林步道。"
        }
      },
      {
        time: "11:30 AM",
        title: {
          en: "Ami Art Museum Exploration & Cafe",
          ko: "아미미술관 감상 및 정원 카페 휴식",
          ja: "アミ美術館とレトロカフェ",
          zh: "漫游峨嵋美术馆与花园咖啡"
        },
        desc: {
          en: "Marvel at creative art installations in converted retro classrooms, and snap aesthetic photos.",
          ko: "폐교를 감각적으로 꾸민 실내외 전시 감상 및 감성 포토존 촬영.",
          ja: "緑あふれる旧校舎で現代アートを鑑賞し、映える写真を撮影。",
          zh: "在被绿植包围的旧校舍欣赏现代艺术展并拍照打卡。"
        }
      },
      {
        time: "01:30 PM",
        title: {
          en: "Authentic Haenaru Rice & Ureong Ssambap Lunch",
          ko: "우렁이 쌈밥 골목에서 든든한 점심 식사",
          ja: "名物ウロンサムパプのヘルシーランチ",
          zh: "品尝当津特产田螺菜包饭午餐"
        },
        desc: {
          en: "Indulge in organic steamed rice with flavorful chewy freshwater snail soybean paste wrapped in greens.",
          ko: "당진 해나루쌀 밥과 구수한 우렁이 쌈장 정식을 맛보세요.",
          ja: "旨みたっぷりの田螺味噌と地元名産ヘナル米のヘルシー定食。",
          zh: "鲜嫩爽脆的田螺肉与大酱相融，搭配当津优质米饭与有机蔬菜。"
        }
      },
      {
        time: "04:00 PM - Sunset",
        title: {
          en: "Sapgyoho Coastal Park & Sunset Ferris Wheel",
          ko: "삽교호 관광지 산책 및 노을 대관람차 탑승",
          ja: "挿橋湖（サプギョホ）の夕景と大観覧車",
          zh: "插桥湖滨海公园与黄昏摩天轮"
        },
        desc: {
          en: "Ride the iconic Ferris wheel as the sun dips below the horizon, followed by a seaside clam grill dinner.",
          ko: "바다 위로 펼쳐지는 붉은 노을을 대관람차에서 만끽하고 신선한 조개구이로 하루를 마무리.",
          ja: "夕暮れ時に観覧車に乗って海と夕陽を一望。夜は海沿いで香ばしい貝焼きディナー。",
          zh: "在摩天轮上俯瞰大海日落余晖，晚餐享用炭烤海鲜贝类大餐后返程。"
        }
      }
    ],

    coastal: [
      {
        time: "10:30 AM",
        title: {
          en: "Agroland Taeshin Farm Experience",
          ko: "아그로랜드 태신목장 트랙터 투어",
          ja: "アグロランドで自然体験",
          zh: "Agroland 太新牧场拖拉机漫游"
        },
        desc: {
          en: "Hop on a tractor wagon through sprawling meadows and photograph vibrant seasonal blossoms.",
          ko: "드넓은 푸른 목장 산책, 트랙터 탑승 및 귀여운 동물과의 만남.",
          ja: "広大な草原をトラクター列車で巡り、季節の花々や動物とふれあい。",
          zh: "乘坐拖拉机列车穿梭于绿草如茵的牧场与四季绚烂花海。"
        }
      },
      {
        time: "02:00 PM",
        title: {
          en: "Janggo-hang Port & Marine Promenade",
          ko: "장고항 해안 둘레길 및 신선한 해산물",
          ja: "長古港（ジャンゴハン）海岸ウォーキング",
          zh: "长古港海岸木栈道与港口漫步"
        },
        desc: {
          en: "Stroll along the wooden sea boardwalk observing scenic sea cliffs and fishermen boats.",
          ko: "노적봉 기암괴석과 바다를 따라 펼쳐진 데크길을 걷고 제철 해산물 즐기기.",
          ja: "奇岩絶壁と青い海が織りなす絶景デッキを散策。",
          zh: "沿海边木质栈道漫步，近距离观赏奇岩怪石与海港风情。"
        }
      },
      {
        time: "05:30 PM - Night",
        title: {
          en: "Waemok Village Sunset & Night Beach Chill",
          ko: "왜목마을 일몰 감상 및 백사장 밤산책",
          ja: "ウェモク村での夕陽とビーチナイト",
          zh: "歪木村日落美景与夜色沙滩"
        },
        desc: {
          en: "Watch the sun melt into the West Sea from the uniquely situated peninsula beach.",
          ko: "서해에서 가장 신비로운 일몰을 마주하고 해변가 카페에서 여유를 만끽합니다.",
          ja: "西海随一の美しい夕陽を眺め、波の音を聞きながらカフェでリラックス。",
          zh: "在韩国著名的东西两景半岛海滩等待夕阳坠入西海，度过浪漫夜晚。"
        }
      }
    ]
  },

  transportTips: [
    {
      title: {
        en: "From Seoul (Express Bus)",
        ko: "서울에서 당진 오는 방법",
        ja: "ソウルからのアクセス",
        zh: "从首尔出发（高速巴士）"
      },
      icon: "🚌",
      steps: [
        {
          en: "Depart from Seoul Express Bus Terminal (Gangnam) or Nambu Terminal.",
          ko: "서울고속버스터미널(강남) 또는 서울남부터미널에서 출발",
          ja: "ソウル高速バスターミナル（江南）または南部ターミナルから乗車",
          zh: "在首尔高速客运站（江南）或首尔南部客运站乘车"
        },
        {
          en: "Buses depart frequently every 20-30 minutes. Travel time is around 1h 30m.",
          ko: "배차 간격 20~30분, 소요 시간 약 1시간 30분",
          ja: "運行間隔20〜30分、所要時間は約1時間30分",
          zh: "每20~30分钟一班，车程仅约1小时30分钟"
        },
        {
          en: "Arrive at Dangjin Bus Terminal (당진버스터미널), where city buses and taxis connect directly.",
          ko: "당진버스터미널 도착 후 시내버스 및 택시 승강장 바로 이용 가능",
          ja: "唐津バスターミナル到着後、市内バスやタクシーに乗り換え可能",
          zh: "抵达当津综合客运站，站前即可便捷换乘市内公交或出租车"
        }
      ]
    },
    {
      title: {
        en: "From Incheon International Airport (ICN)",
        ko: "인천국제공항에서 당진 오는 방법",
        ja: "仁川国際空港からのアクセス",
        zh: "从仁川国际机场出发 (ICN)"
      },
      icon: "✈️",
      steps: [
        {
          en: "Take the direct intercity bus from Incheon Airport Terminal 1 / Terminal 2 toward Dangjin.",
          ko: "인천공항 T1/T2 버스 매표소에서 당진행 직통 시외버스 탑승",
          ja: "仁川空港第1・第2ターミナルより唐津行きの直行高速バスに乗車",
          zh: "在仁川机场T1或T2航站楼客运乘车点购买前往当津的直通巴士票"
        },
        {
          en: "Estimated journey time: approximately 1 hour 40 minutes to 2 hours.",
          ko: "소요 시간 약 1시간 40분 ~ 2시간",
          ja: "所要時間は約1時間40分〜2時間",
          zh: "行程耗时约1小时40分至2小时"
        },
        {
          en: "You can book tickets via the official 'BusTago' app or ticket kiosks at the airport.",
          ko: "공항 내 무인 발권기 또는 버스타고(Bustago) 앱으로 예매 가능",
          ja: "空港内の自動券売機またはBustagoアプリで事前予約可能",
          zh: "可通过机场自动售票机或BusTago移动端预约车票"
        }
      ]
    },
    {
      title: {
        en: "Getting Around Dangjin",
        ko: "당진 시내 이동 팁",
        ja: "唐津市内の移動ガイド",
        zh: "当津市内交通出行指南"
      },
      icon: "🚕",
      steps: [
        {
          en: "Kakao T App: Highly recommended for hailing taxis without Korean language barriers.",
          ko: "카카오 T 앱을 이용하면 언어 장벽 없이 손쉽게 택시 호출 가능",
          ja: "Kakao T（カカオタクシー）アプリを使えば韓国語が不安でも目的地まで呼べます",
          zh: "推荐下载Kakao T打车软件，输入英文或韩文目的地即可轻松叫车"
        },
        {
          en: "T-money Card: Fully supported on all local green Dangjin city buses.",
          ko: "전국 호환 교통카드(T-money 등)로 모든 시내버스 이용 가능",
          ja: "全国共通交通系カード（T-money）がすべての市内バスで利用可能",
          zh: "韩国全国通用的T-money交通卡可直接刷卡乘坐市内所有公交车"
        },
        {
          en: "Tourist Taxi: Available for 3-hour or 5-hour chartered tours from the terminal.",
          ko: "당진시 관광택시 대절 프로그램을 통해 편리하게 핵심 명소 투어 가능",
          ja: "主要観光地を効率よく巡るチャーター観光タクシーも利用可能",
          zh: "在综合站可申请包车式观光计程车服务，省心游历各大景区"
        }
      ]
    }
  ]
};

// UI Translations
const UI_TEXTS = {
  en: {
    heroPill: "✨ Official Foreign Traveler Companion",
    heroTitle: "Discover the Coastal Serenity of Dangjin",
    heroSubtitle: "Explore historic shrines, vintage seaside piers, dynamic sunrise coasts, and rich regional culinary treasures in Chungcheongnam-do, Korea.",
    stat1Label: "Fast Transit",
    stat1Val: "1h 30m from Seoul",
    stat2Label: "Top Wonders",
    stat2Val: "6 Must-Visit Spots",
    stat3Label: "Coastline",
    stat3Val: "East & West Ocean Vistas",
    stat4Label: "Specialty",
    stat4Val: "Haenaru Rice & Fresh Clams",
    filterAll: "All Attractions",
    filterNature: "Nature & Seas",
    filterCulture: "Culture & Heritage",
    filterAttraction: "Fun & Theme Parks",
    searchPlaceholder: "Search attractions, vibes, foods...",
    destinationsHeading: "Top Tourist Destinations",
    destinationsSubheading: "Curated must-visit highlights with foreigner-friendly tips and navigation guides",
    viewDetails: "View Details",
    copyAddress: "Copy Address",
    itineraryHeading: "Recommended Itineraries",
    itinerarySubheading: "Step-by-step curated travel courses designed for day-trippers and coastal explorers",
    tabDaytrip: "1-Day Classic Heritage & Pier",
    tabCoastal: "Scenic Nature & Romantic Coastline",
    foodHeading: "Signature Flavors of Dangjin",
    foodSubheading: "Authentic gastronomic experiences you won't find anywhere else",
    survivalHeading: "Essential Korean Travel Phrases",
    survivalSubheading: "Tap any phrase to copy or pronounce with ease",
    transitHeading: "How to Get to & Around Dangjin",
    transitSubheading: "Stress-free directions from Seoul, Incheon Airport, and local taxi guides",
    btnCopy: "Copy",
    copied: "Copied to clipboard!",
    favoriteAdded: "Saved to your favorites!",
    favoriteRemoved: "Removed from favorites."
  },
  ko: {
    heroPill: "✨ 외국인 여행객을 위한 당진 가이드",
    heroTitle: "서해의 숨은 보석, 당진으로의 초대",
    heroSubtitle: "서해안의 일출과 일몰, 아름다운 천주교 성지, 레트로 감성의 대관람차와 맛있는 먹거리가 있는 충남 당진을 경험해보세요.",
    stat1Label: "접근성",
    stat1Val: "서울에서 1시간 30분",
    stat2Label: "추천 명소",
    stat2Val: "당진 9경 & 핵심 명소",
    stat3Label: "자연 경관",
    stat3Val: "일출·일몰 공존 해변",
    stat4Label: "대표 미식",
    stat4Val: "해나루쌀 & 싱싱한 조개구이",
    filterAll: "전체 명소",
    filterNature: "자연 & 해변",
    filterCulture: "역사 & 문화",
    filterAttraction: "테마 & 랜드마크",
    searchPlaceholder: "명소 이름, 테마 등을 검색해보세요...",
    destinationsHeading: "당진 필수 관광 명소",
    destinationsSubheading: "외국인 여행자가 꼭 들러야 할 주요 명소와 상세 여행 팁",
    viewDetails: "상세보기",
    copyAddress: "주소 복사",
    itineraryHeading: "추천 여행 코스",
    itinerarySubheading: "당일치기 또는 해안 드라이브로 즐기는 최적의 동선",
    tabDaytrip: "당일 클래식 (문화 & 삽교호)",
    tabCoastal: "낭만 해안 & 목장 힐링",
    foodHeading: "당진의 대표 미식",
    foodSubheading: "서해안 청정 갯벌과 비옥한 토양이 선물한 최고의 맛",
    survivalHeading: "실전 한국어 여행 회화",
    survivalSubheading: "터치하여 택시기사나 식당 직원에게 바로 보여주세요",
    transitHeading: "당진 찾아오시는 길",
    transitSubheading: "서울, 인천공항에서 버스 탑승법 및 시내 교통 꿀팁",
    btnCopy: "복사",
    copied: "클립보드에 복사되었습니다!",
    favoriteAdded: "즐겨찾기에 저장되었습니다!",
    favoriteRemoved: "즐겨찾기에서 해제되었습니다."
  },
  ja: {
    heroPill: "✨ 唐津（ダンジン）外国人旅行者向けガイド",
    heroTitle: "西海の穏やかな魅力が宿る街、唐津（ダンジン）へ",
    heroSubtitle: "日の出と夕陽が輝く海岸、美しい歴史聖地、レトロな大観覧車と豊かな海鮮料理を満喫しましょう。",
    stat1Label: "所要時間",
    stat1Val: "ソウルから約1時間30分",
    stat2Label: "名所",
    stat2Val: "おすすめ主要スポット",
    stat3Label: "海の絶景",
    stat3Val: "日の出・日の入り",
    stat4Label: "グルメ",
    stat4Val: "名産米＆新鮮な焼き貝",
    filterAll: "すべてのスポット",
    filterNature: "自然・海",
    filterCulture: "歴史・文化",
    filterAttraction: "レジャー・テーマ",
    searchPlaceholder: "スポット名やテーマで検索...",
    destinationsHeading: "唐津（ダンジン）の人気スポット",
    destinationsSubheading: "外国人観光客に人気のスポットを厳選してご紹介",
    viewDetails: "詳細を見る",
    copyAddress: "住所をコピー",
    itineraryHeading: "モデルコース",
    itinerarySubheading: "日帰り旅行や海岸ドライブにぴったりのスケジュール",
    tabDaytrip: "王道の日帰りモデルコース",
    tabCoastal: "牧場＆海岸の癒やしコース",
    foodHeading: "唐津のローカルフード",
    foodSubheading: "ここでしか味わえない西海の滋味深い海の幸",
    survivalHeading: "旅行で使える韓国語フレーズ",
    survivalSubheading: "タップしてコピーし、タクシーやお店で見せて使えます",
    transitHeading: "アクセス＆市内移動ガイド",
    transitSubheading: "ソウルや仁川空港からの行き方と移動のコツ",
    btnCopy: "コピー",
    copied: "クリップボードにコピーしました！",
    favoriteAdded: "お気に入りに追加しました！",
    favoriteRemoved: "お気に入りから削除しました。"
  },
  zh: {
    heroPill: "✨ 当津外国游客中文旅行指南",
    heroTitle: "邂逅西海静谧之美：忠清南道 当津市",
    heroSubtitle: "探访海天一色的日出日落海角、百年静谧松林圣地、复古浪漫摩天轮以及最正宗的西海岸海鲜盛宴。",
    stat1Label: "便利交通",
    stat1Val: "首尔出发仅需1.5小时",
    stat2Label: "精选景点",
    stat2Val: "6大王牌打卡地",
    stat3Label: "自然奇观",
    stat3Val: "同处可观日出日落",
    stat4Label: "特色美食",
    stat4Val: "优质海渡米与炭火烤贝",
    filterAll: "全部景点",
    filterNature: "自然与海滨",
    filterCulture: "历史与文化",
    filterAttraction: "游乐与地标",
    searchPlaceholder: "搜索景点、氛围、美食...",
    destinationsHeading: "当津必游王牌景点",
    destinationsSubheading: "贴心整理的外籍游客专属打卡胜地与实用向导",
    viewDetails: "查看详情",
    copyAddress: "复制韩文地址",
    itineraryHeading: "经典推荐游览路线",
    itinerarySubheading: "精心规划的一日游与浪漫海岸自驾最佳路线",
    tabDaytrip: "经典文化与滨海一日游",
    tabCoastal: "自然牧场与落日海岸线",
    foodHeading: "舌尖上的当津特色美味",
    foodSubheading: "西海纯净水土孕育的无可替代的地道韩式风味",
    survivalHeading: "超实用韩国旅行必备会话",
    survivalSubheading: "点击即可复制韩文，在出租车或餐厅直接向工作人员出示",
    transitHeading: "如何前往当津与市内交通",
    transitSubheading: "包含首尔、仁川机场往返交通及出租车叫车贴士",
    btnCopy: "复制",
    copied: "已复制到剪贴板！",
    favoriteAdded: "已加入收藏夹！",
    favoriteRemoved: "已从收藏夹移除。"
  }
};
