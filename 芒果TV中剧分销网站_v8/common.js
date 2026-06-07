
// ===== 数据 =====
const ALL_DRAMAS = [{"id": 1, "name": "陛下在左，将军在右", "genre": "古装爱情", "year": "2021", "episodes": 20, "duration": 200, "cast": ["王轩", "金佳遇", "金子璇", "陈田心", "林楷杰"], "poster": "https://4img.hitv.com/preview/internettv/sp_images/ott/2021/5/13/dianshiju/368296/20210513172412575-new.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/368296.html", "summary": "平平无奇的银行实习生宋青青（金子璇饰）职业技能满满，却因天生自带克星体质，饱受生活的困扰。一次意外中，宋青青变成每日睁开眼只需思考如何花钱的宁国首富千金宋青宁，然而她还没尽兴享受成为大小姐的快乐，就因克夫体质被新君（王轩饰）赐婚给镇北将军江景淮（金佳遇饰），并需完成“克夫”任务。在一次次与江景淮斗智斗勇的周旋中，宋青青最终收获爱情、友谊与成长，懂得了生活的真谛。"}, {"id": 2, "name": "危险良人", "genre": "古装爱情", "year": "2021", "episodes": 18, "duration": 180, "cast": ["肖然心", "孙栎涵", "石光", "刘雪帆"], "poster": "https://3img.hitv.com/preview/sp_images/2021/07/29/202107290907585459904.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/380281.html", "summary": "该剧讲述沈倾眉女扮男装成为橘井县县令，谢临舟意外失忆化身冷面师爷；从人人喊打的昏官到交口称赞的青天，他们一本正经地上演了一幕又一幕的啼笑皆非；随着两人默契合作，情愫渐生，谢临舟心动之后却被告知，作为杀手，他失忆前的最后一个目标，正是沈倾眉！"}, {"id": 3, "name": "恋爱指南我指北", "genre": "青春校园", "year": "2021", "episodes": 20, "duration": 200, "cast": ["李思奇", "文渊", "王祖一", "吕妍", "余衍隆", "叶皓然", "谢泽成"], "poster": "https://4img.hitv.com/preview/sp_images/2021/08/05/202108051656513692661.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/381014.html", "summary": "996游戏开发师谢恩与冰山男投资人仇景明，因一款圆梦游戏《白日梦想家》意外卷入游戏世界，重返校园，从甲乙方关系变成游戏绑定CP，二人因相反任务线天生对立，为了通关进行斗智斗勇的交锋，却意外开启了套路和互撩的蜜恋之旅。可是残酷游戏规则和惩罚机制却横亘在二人中间，在二选一的抉择中，他们面临考验……"}, {"id": 4, "name": "进击的皇后2", "genre": "古装爱情", "year": "2021", "episodes": 18, "duration": 190, "cast": ["王路晴", "丞磊", "尚思丞", "马小钦"], "poster": "https://0img.hitv.com/preview/sp_images/2021/08/05/202108051806326716004.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/385044.html", "summary": "梁微微再次进入古装剧中，发现自己成了人人喊打的暴君反派，日思夜想的景清竟然策划谋反要取自己性命。梁微微想方设法让景清恢复记忆，没想到景清这次居然成了动不动就爱哭的哭包将军。两人开始了鸡飞狗跳爆笑超甜的后宫生活，本以为甜甜的恋爱终于到来，但梁微微竟依然逃不过“反派必死”的命运……景清要如何拯救微微？"}, {"id": 5, "name": "金小气家族：花城热恋", "genre": "古装爱情", "year": "2021", "episodes": 20, "duration": 200, "cast": ["刘美彤", "文力", "关畅", "倪寒尽", "文渝淇"], "poster": "https://0img.hitv.com/preview/internettv/sp_images/ott/2021/9/18/dianshiju/389488/20210918111601213-new.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/389488.html", "summary": "花陵城头号花商—钱家，由五姐妹当家，大姐钱金金一心赚钱，二姐钱银银花城名媛，三姐钱珠珠武力惊人，四妹钱宝宝乖巧可爱，五妹钱贝贝鬼灵精怪。为获得皇商资格，钱金金十里红妆追求严家公子严耀玉，钱宝宝护姐心切，偷偷求嫁严耀玉的叔叔、严家当家人严齐。大婚现场，众人才发现这混乱姻缘......"}, {"id": 6, "name": "谎言使用法则", "genre": "现代爱情", "year": "2022", "episodes": 18, "duration": 180, "cast": ["陈俊宇", "牛玉坤", "宣淏", "石光", "郭倩雯"], "poster": "https://4img.hitv.com/preview/sp_images/2022/01/04/202201041030051595039.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/413438.html", "summary": "原本成熟冷酷的乔慕生在经历父母离异，双胞胎弟弟意外离世，为了保护妈妈在其面前扮演呆萌可爱的陆经年。乔慕生再次遇见苏念之际，想起他俩高中时候的一段过往也选择了用弟弟陆经年的身份重新和苏念相处，殊不知苏念早在年少时就芳心所属。谎言使用法则下是真心，一切“谎言”因乔慕生所起，在陆经年身上画上句号......"}, {"id": 7, "name": "念念无明", "genre": "古装爱情", "year": "2022", "episodes": 18, "duration": 180, "cast": ["胡丹丹", "杨泽", "肖然心", "王钧浩"], "poster": "https://3img.hitv.com/preview/sp_images/2022/04/02/202204021816337836332.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/436392.html", "summary": "风姿绰约的成衣坊老板娘司小念与清苦郎中晏无明喜结连理，然而大婚之日两人却纷纷离开，原来两人都隐藏着一个反转身份——杀手。面对内心的深爱与隐瞒，两人陷入深深的纠葛……"}, {"id": 8, "name": "郡主万福", "genre": "古装爱情", "year": "2022", "episodes": 18, "duration": 180, "cast": ["于轩晨", "李澳", "李梓伊", "王星玮", "飞尔多斯"], "poster": "https://1img.hitv.com/preview/sp_images/2022/04/24/202204241008147811054.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/443472.html", "summary": "北垣皇室有一个不为人知的秘密，历届皇帝都逃不过在青壮年就因病而死的结局。大皇子萧禾自从知道了这个秘密，与二皇子萧禹开始了一系列故意装弱装风流的戏码，就是为了不被立为太子。但这个局面被来联姻的东灵郡主傅祁打破，她怀着自己的目的一心要把萧禾扶上太子位……"}, {"id": 9, "name": "我迟到了那么多年", "genre": "现代爱情", "year": "2022", "episodes": 22, "duration": 220, "cast": ["肖雨", "曹恩齐", "肖然心", "王钧浩"], "poster": "https://2img.hitv.com/preview/sp_images/2022/12/28/202212280951180954368.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/512212.html", "summary": "内衣设计师姜喜乐以“令人社死”的方式重逢了十年前的暗恋对象丁冉，尴尬还不止于此，刚回到家，妈妈就发出要再婚的重磅宣言，而再婚对象竟然是丁冉的父亲。从青梅竹马到医生患者再到此时的重组家庭，有点复杂的关系萦绕不去，两段关乎少年时代的爱恋也再度重启......"}, {"id": 10, "name": "寒枝折不断", "genre": "古装爱情", "year": "2022", "episodes": 21, "duration": 210, "cast": ["朱丽岚", "李菲", "张景昀", "周微微", "李文茹", "赵一霖"], "poster": "https://1img.hitv.com/preview/sp_images/2022/12/29/202212290929379276737.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/508740.html", "summary": "千面暗探周青竹被一心信赖的太子李烨当作替罪羔羊，生死绝境下为北邑司大统领张小梅所救。两人同守屋檐，情意渐生，李烨却以恩情相挟，逼她从张小梅手中窃取千霞珠。周青竹一生悲苦，无所依傍，逐渐陷落于张小梅隐现的柔情，张小梅身负重任，隐忍克制，却割舍不掉周青竹的灿烂。家族、仇恨、前缘、皇权……一道道枷锁阻隔在二人之间，两人不断前行，只为一刻相守。"}, {"id": 11, "name": "江湖少年诀", "genre": "古装悬疑", "year": "2023", "episodes": 20, "duration": 200, "cast": ["陈俊宇", "李沛洋", "周微微", "尹蕊", "宣淏"], "poster": "https://3img.hitv.com/preview/sp_images/2023/01/10/202301100936278925062.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/457334.html", "summary": "讲述了记录宝藏埋藏处的“式微图”悄然现世，诸方势力为争夺宝藏各显神通，导致江湖风波不断。此时，在临安城中“玉祥戏班神秘失踪案”、“上塘河底白骨案”两起诡异凶案连发，少年成名的神探苏成熙、大墉城冷面捕头隋寒白、千机阁杀手越小荞结成联盟，追查真凶，保卫和平，维护正义的故事。"}, {"id": 12, "name": "我们之间的秘密", "genre": "现代爱情", "year": "2023", "episodes": 48, "duration": 480, "cast": ["刘海宽", "刘一曈", "王心妤", "赵轩", "滕爱弦", "梁弘立", "刘伶"], "poster": "https://4img.hitv.com/preview/sp_images/2023/12/15/202312151524577371405.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/610526.html", "summary": "国内首部澳门题材短剧，联动澳门社会文化司，作为献礼“澳门回归25周年”先导项目策划执行。故事呈现的是澳门成长起来的新一代年轻人，在老城区生活，在新地标奋斗的向阳人生。讲述外表冷峻的外来厨师王廷之及女儿王芊芊，与澳门当地小辣椒黄依琳及外婆张宝琴，因“房”结缘，因“美食”情感升温，最终在同一屋檐下携手走向爱情的暖心故事。"}, {"id": 13, "name": "那年夏天的秘密", "genre": "青春校园", "year": "2023", "episodes": 16, "duration": 240, "cast": ["黄子弘凡", "杨霖", "陈怡凡", "刘柠昊", "韩涛"], "poster": "https://0img.hitv.com/preview/sp_images/2023/06/15/202306150928462381581.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/335493.html", "summary": "讲述了几个年轻人在封闭空间中的互动，由此展开了一段关于青春与成长的故事。本是孩童之间最为简单的躲猫猫游戏，这个过程中的参与者，却被揭开了一段不为人知的的秘密，而这个游戏则变成了击垮几段坚固友谊的催化剂。"}, {"id": 14, "name": "MAX别这样", "genre": "现代爱情", "year": "2020", "episodes": 12, "duration": 120, "cast": ["董子鸣", "雷皓翔", "张心怡", "王晨艺"], "poster": "https://0img.hitv.com/preview/internettv/sp_images/ott/2020/9/8/dianshiju/344664/20200908092024349-new.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/344664.html", "summary": "妹妹高筱筱为走出失恋阴影，在网上订购了一款情感陪护型机器人男友，却不料被哥哥平凡意外启动。被唤醒的机器人Max将平凡视为自己的“主人”，开启全方位无死角的贴心照顾，让平凡避无可避。为摆脱Max，查李想了无数种方法，但都一一失败。表面看上去单纯无害的机器人，在一次意外中被兄妹俩发现了终极秘密……"}, {"id": 15, "name": "本宫今天不加班", "genre": "奇幻爱情", "year": "2020", "episodes": 12, "duration": 180, "cast": ["李澳", "谢治勋", "景研竣", "林子琳"], "poster": "https://1img.hitv.com/preview/internettv/sp_images/ott/2020/9/9/dianshiju/345185/20200909181838187-new.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/345185.html", "summary": "初入职场的实习生何皎皎，某天睡醒后竟意外拥有了一段古代记忆。记忆中一代皇后何明月靠着自己的聪明才智，从一个卑微宫女，一步步坐上了皇后的位置，于是，何姣姣决定利用何明月的后宫计谋，应对职场难题，升职打怪，让自己走上职业巅峰……"}, {"id": 16, "name": "我靠学习解锁超能力", "genre": "青春校园", "year": "2020", "episodes": 12, "duration": 150, "cast": ["倪言", "张浩哲", "金世康", "张珂源"], "poster": "https://4img.hitv.com/preview/sp_images/2020/12/15/20201215115143197.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/355342.html", "summary": "从不受人重视的学渣汤含山偶然进入一本悲剧言情小说中，成为了书里的小透明配角江牧，还意外拥有了能靠学习赚取积分，并获得超能力的学霸系统。为了不让自己喜欢的女生苏逸舟走上注定悲剧的结局，他决定出手改变原定男女主的命运。在这过程中，江牧不仅努力学习逐渐进步，还真正收获了宝贵的友情和爱情，最终找到了自己的人生价值。"}, {"id": 17, "name": "无法抗拒的恋爱", "genre": "奇幻爱情", "year": "2020", "episodes": 12, "duration": 150, "cast": ["王路晴", "佴一文", "崔绍阳", "淮文"], "poster": "https://4img.hitv.com/preview/internettv/sp_images/ott/2020/12/18/dianshiju/355005/20201218202522407-new.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/355005.html", "summary": "夏天天刚把校霸郭之宇调教成“忠犬”男友，就遭到了母亲何青柠的强烈反对，在何青柠心中，夏天天的公司总裁秦至才是完美女婿，她决心要亲自出手，却没料到，偶然的一天母女二人居然互换了身体！何青柠开始顶着女儿的身体为所欲为，夏天天则用母亲的身体奋起反击，俩人在鸡飞狗跳的互换人生中慢慢理解彼此。与此同时，两段高甜恋爱也正酝酿发酵......"}, {"id": 18, "name": "这届男团太难带了", "genre": "现代爱情", "year": "2021", "episodes": 12, "duration": 120, "cast": ["靳梦佳", "师子寻", "郭浩宇", "张屹杨", "刘松霖"], "poster": "https://0img.hitv.com/preview/internettv/sp_images/ott/2021/1/31/dianshiju/361365/20210131105114185-new.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/361365.html", "summary": "该剧讲述了一个娱乐圈顶级女经纪人，努力带火男团，在无数啼笑皆非的事件中却逐渐与每个人交心，展现了娱乐之下的阵痛成长。该剧以偶像团体成长揭秘镜头后不为人知的事情，直击相关行业下的年轻人在聚光灯下为梦想奋斗的成长经历。"}, {"id": 19, "name": "陛下在左，老板在右", "genre": "奇幻爱情", "year": "2021", "episodes": 18, "duration": 180, "cast": ["杨泽", "陈芳彤", "叶筱玮"], "poster": "https://4img.hitv.com/preview/sp_images/2021/02/10/20210210143814522.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/362469.html", "summary": "大芒定制短剧《陛下在左，老板在右》是一部讲述幻想跟老板谈恋爱的女主福宝，意外得到一本愿望笔记，并靠着笔记实现扑倒老板的愿望。这时突然从天而降一位自称是愿望笔记主人的古代皇子，为了拿回笔记，也对福宝开展追女攻势，从此福宝在两个男神之间不断周旋和动摇的都市甜宠的故事。"}, {"id": 20, "name": "满分追爱公式", "genre": "青春校园", "year": "2021", "episodes": 18, "duration": 180, "cast": ["周士原", "谢子然", "马萱", "张珀凡", "柴翊格"], "poster": "https://0img.hitv.com/preview/internettv/sp_images/ott/2021/3/6/dianshiju/363700/20210306140906923-new.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/363700.html", "summary": "讲述了数学小白叶安安被意外调剂到数学专业，偶然召唤出“数学之灵”束雪，并在这位“学科之神”的监督和辅助下开启学渣逆袭，也在这过程之中，两人渐渐互生好感，学习与恋爱齐头并进的校园甜宠故事。"}, {"id": 21, "name": "我的哈士奇男友", "genre": "现代爱情", "year": "2021", "episodes": 12, "duration": 180, "cast": ["陈芳彤", "丞磊", "高凯", "马小钦"], "poster": "https://0img.hitv.com/preview/sp_images/2021/03/17/20210317175444117.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/364664.html", "summary": "实习生宋乔欣偶然发现空降总裁白敬宇有着哈士奇的特性，白敬宇想方设法抓住女主把柄签订协议，约定互相不揭穿。生活相处中，历经矛盾冲突、欢喜、温暖，男女逐渐互相喜欢，最终走到一起。"}, {"id": 22, "name": "夫人，大可不必", "genre": "古装喜剧", "year": "2021", "episodes": 12, "duration": 180, "cast": ["彭雅琦", "高梓添", "赵一鸣", "韩晴", "方潇亦"], "poster": "https://2img.hitv.com/preview/sp_images/2021/02/05/20210205112239994.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/362075.html", "summary": "李朝盛年，白沙寨的女土匪白云凤为了替重病不治的父亲寻医，变卖了从朝廷官员手上截下的一车生辰纲，却不想招来灭寨之祸。白云凤本以为自己会就此银铛入狱，但令她做梦都没有想到的是，皇室家族皇甫伯不但没有将她问罪，反而要收她做儿媳妇？"}, {"id": 23, "name": "如果总裁成了我下属", "genre": "现代爱情", "year": "2021", "episodes": 12, "duration": 60, "cast": ["马小茜", "希尔力", "梁正群", "程柏儒", "赵明川", "崔梓熙", "吉元雪"], "poster": "https://1img.hitv.com/preview/sp_images/2021/04/05/20210405191835954.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/365125.html", "summary": "中二少年张敢敢误打误撞闯进入职场，意外地与狼性女老板古美玉交换了身份。强势女老板一下子掉落职场底层，而咸鱼新员工却不得不担起老板职责。两人用着对方的身体，遭遇了一系列职场挑战......咸鱼员工张敢敢不得不面对每天堆积如山的工作，狼性女老板则被迫过上了摸鱼偷懒的生活......从开始的不了解，到彼此携手，共同实现了职场与人生上的成长。"}, {"id": 24, "name": "全世界唯一的你", "genre": "现代爱情", "year": "2021", "episodes": 22, "duration": 220, "cast": ["杨了", "李政庭", "管乐", "王已歌", "曲羿成", "张紫琳"], "poster": "https://3img.hitv.com/preview/internettv/sp_images/ott/2021/8/24/dianshiju/386815/20210824124839612-new.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/386815.html", "summary": "霸道总裁女乐正曦拥有一个奇怪的超能力——她的头顶上永远浮着一个内存进度条，显示着内存值：60%、80%、100%，一旦内存值达到百分百，就会像超负荷运作的电脑一样浑身发烫，直至“休克宕机”。当霸道御姐乐正曦遇到阳光助理陈序，意外的身体接触，让她发现自己的内存值竟然可以快速降低！"}, {"id": 25, "name": "顾小姐的100次告白", "genre": "现代爱情", "year": "2021", "episodes": 8, "duration": 69, "cast": ["肖然心", "黄炫彰"], "poster": "https://0img.hitv.com/preview/sp_images/2021/09/24/202109241148211485049.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/390979.html", "summary": "情感博主陈蕊直播过程中出现意外，摇身变成小说里的女配角-顾乐儿，并获得系统任务：攻略“万年冰山霸总”苏白！只有苏白对其的好感值提升到百分之百，才能回到现实。变身后的顾乐儿屡战屡败，但对苏白一百八十度的态度转变，却引起了苏白的注意，阴差阳错成为其贴身助理，在不断的狗腿和嫌弃中慢慢融化苏白，并利用自己的实力帮助苏白度过事业上的难关。苏白也慢慢对顾乐儿发生了改观，从讨厌到好奇再到奋不顾身地爱上顾乐儿……"}, {"id": 26, "name": "我在古代当萌探", "genre": "古装爱情", "year": "2021", "episodes": 8, "duration": 69, "cast": ["杨馥羽", "贾浩渊", "马小钦"], "poster": "https://4img.hitv.com/preview/internettv/sp_images/ott/2021/10/8/dianshiju/391606/20211008085257909-new.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/391606.html", "summary": "剧本杀店老板胡蝶意外摔倒后成为剧本女主角蝴蝶，收获一名忠犬侍卫简临，却发现这根本不是她写的那个剧本！她必须拯救因剧本修改太多而充满戾气的简临，从而回到现代。胡蝶带着简临一步步搜证，却触发了一个又一个案件，在遭遇了追杀、维护、吃醋等经历后二人感情迅速升温。随着探案的深入，意外解锁了简临的真实身份—城主的遗腹子，背后的阴谋和真相在他们的调查中慢慢浮现。"}, {"id": 27, "name": "刺客学苑", "genre": "古装悬疑", "year": "2021", "episodes": 18, "duration": 190, "cast": ["许清雅", "常斌", "马小钦", "段星羽", "刘增宇"], "poster": "https://1img.hitv.com/preview/sp_images/2021/10/18/202110180845348982252.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/393355.html", "summary": "一群心怀济世理想的少年人在刺客学苑中苦修武艺，纷纷盼望完成学苑试炼，离苑行侠仗义。排行第一的学霸少女韩小楚首个获得试炼机会，眼看就能出师，却被吊儿郎当的废柴同学龙辟邪干扰，于最终试炼中失利。紧接着，一系列惊悚事件接连发生：试炼突然变成危及性命的追杀、废柴龙辟邪其实是武功绝顶的高手、追杀他们的人是学苑教师，而当死里逃生的韩小楚一觉醒来，却发现她唯一可以依靠的龙辟邪神秘失踪、同学们纷纷失忆……这座刺客学苑隐藏着无数秘密，韩小楚只能靠自己勘破一切，求得生路！"}, {"id": 28, "name": "为你千千万万遍", "genre": "现代爱情", "year": "2021", "episodes": 18, "duration": 180, "cast": ["方晓东", "张昕懿", "王思懿", "李哲豪", "赵泽帆", "李嘉祥"], "poster": "https://3img.hitv.com/preview/internettv/sp_images/ott/2021/10/25/dianshiju/395159/20211025213952760-new.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/395159.html", "summary": "郑泽远心爱的女孩黄诗洁突然遭遇车祸去世。为了拯救黄诗洁，泽远用她留下的那台相机穿越时空，回到了18岁高三汇演的那天......他不断的穿越时空，改变过去，却终究无法救回黄诗洁。直到最后泽远才发现，原来千万次穿越时间缝隙的人，从来不只是他一个......"}, {"id": 29, "name": "无法触碰的她", "genre": "现代悬疑", "year": "2021", "episodes": 20, "duration": 200, "cast": ["麦童", "魏晚秋", "何善凯", "张瑞"], "poster": "https://2img.hitv.com/preview/sp_images/2021/11/02/202111021023084908857.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/397577.html", "summary": "两年前，当红女演员舒星因参加一场晚宴被陷害杀人，舆论瞬间倾倒，她跌落深渊。蛰伏两年，她霸气复出，发誓一定要找回当年的真相，让所有做过错事的人都受到惩罚！随着计划展开，凌云、光月、苏雨、莫莉等人隐藏的秘密逐渐浮现，前男友顾晨和现男友景明也被卷入其中.......面对乱象丛生的复杂情感，众人会如何完成自己的救赎？"}, {"id": 30, "name": "假如这样", "genre": "现代剧情", "year": "2021", "episodes": 12, "duration": 120, "cast": ["娄艺潇", "衣云鹤"], "poster": "https://1img.hitv.com/preview/sp_images/2021/11/06/202111060854193525857.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/397884.html", "summary": "《假如这样》每集由3-5个高能段子构成，每个段子所有的人物和事物都要遵循一个设定的概念，去完成所有的行为和会话，反之所有发生的一切要服务于这个概念，乍一看或多或少有些反常规，但又都是认认真真的存在并且践行。每段剧情角色都呈现了不同人物性格、身份和不同年龄段对事物都有着各自的看法，在同一空间下产生戏剧冲突的搞笑情节，抒发了当代年轻人积极、努力的工作和生活态度，弘扬了热爱生活的正能量和对生活报之以歌的精神。"}, {"id": 31, "name": "兄长大人，解约吧！", "genre": "古装爱情", "year": "2021", "episodes": 18, "duration": 180, "cast": ["丞磊", "郑妙", "牛鑫"], "poster": "https://0img.hitv.com/preview/sp_images/2021/11/22/202111221713421964528.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/403141.html", "summary": "主要讲述来自十三线城市的少女黄梓轩为还清父亲欠下的巨额债务，与美妆商号老板冷耀祖签订协议，俩人摇身一变为“契约兄妹”，在联手掀起美妆狂潮的同时，冷耀祖发现了黄梓轩“双重间谍”的身份，“京城最抠首富”和“京漂财迷少女”由此开启一段心动狙击的故事。"}, {"id": 32, "name": "无法攻略的女人", "genre": "现代悬疑", "year": "2021", "episodes": 18, "duration": 180, "cast": ["谭盐盐", "李哲豪", "麦童"], "poster": "https://4img.hitv.com/preview/sp_images/2021/11/29/202111291636316632866.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/405073.html", "summary": "十五年前，鹿家姐妹在家中目睹父亲被人所害，幸及时躲起免于一难。父亲的死被合伙人赵文东伪装成自杀，公司也落入他手中。两姐妹誓要查明真相，为父伸张。不想让妹妹鹿汐有危险，姐姐鹿思决定独自调查，却不知妹妹已然置身其中。两姐妹以不同的调查方向逐渐逼近真相，同时情感生活也遭遇着巨大的挑战……"}, {"id": 33, "name": "钦天异闻录", "genre": "古装悬疑", "year": "2021", "episodes": 20, "duration": 200, "cast": ["曾姿晔", "韩东霖", "何善凯", "苏芮莹", "刘泳辰", "白杰", "宋南与"], "poster": "https://2img.hitv.com/preview/sp_images/2021/12/03/202112031619569565867.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/406233.html", "summary": "怪兽、异闻、秘境奇物、天外来客，超越普通人理解的事物，自古以来便在大自然的舞台与人类共存。钦天监就是一个守护人类，不被外来异种侵害的神秘组织。以巡天按察使童盼秋为首的热血小分队，侦破迷雾案件，揪出背后真凶守护人间安定。"}, {"id": 34, "name": "回到大婚那一天", "genre": "古装爱情", "year": "2021", "episodes": 8, "duration": 70, "cast": ["柯颖", "张瑞"], "poster": "https://1img.hitv.com/preview/sp_images/2021/12/11/202112110917535476635.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/407854.html", "summary": "2000年前的一个夜晚，大将军林贤路遇少女恒田并成婚，两人在小王爷刘悟的安排下将于三个月后成婚。哪知大婚之夜，林贤为救恒田被刺杀于乱刀之中。恒田从父亲手中偶得一神物“星宫盘”，启动后竟回到了大婚之前，然而恒田几次三番的营救都无法改变林贤被杀的结局，只得通过已知的线索一步步揭开幕后主使者的全盘计划。为追查真相，她跟随幕后主使者来到了2000年后的未来。本以为这一次可以和林贤相伴终生，却没想到落入了幕后主使者的圈套，她陷入了一个全新的时空迷局，难道只有放弃和林贤成婚，才能拯救她的爱人吗？"}, {"id": 35, "name": "又是努力的一天呢", "genre": "现代爱情", "year": "2021", "episodes": 28, "duration": 252, "cast": ["丁敬一", "张心怡", "初俊辰", "查祎琛", "白杰", "史雅欣"], "poster": "https://0img.hitv.com/preview/sp_images/2021/12/17/202112171541446654406.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/409554.html", "summary": "辛凡，一个立志35岁“提前退休”的郁郁青年。花千金，一个梦想打造本地最红奶茶店的元气少女。不着边际的两人因缘巧合合租在一起，鸡飞狗跳的喜剧生活就此展开。在上司肃度和周边人的感染下，辛凡“退休”的愿景逐渐消散，一群奋斗青年一同奔赴向前。决定奋斗前行，迈向不悔青春的辛凡，他对花千金的感情，也开始充满勇气…"}, {"id": 36, "name": "贩卖法术的杂货铺", "genre": "古装喜剧", "year": "2021", "episodes": 16, "duration": 160, "cast": ["赵晴", "吴迪飞", "王嘉萌", "妙静鸥", "明鹏", "李佳成", "王雅淇", "本杰明"], "poster": "https://4img.hitv.com/preview/sp_images/2021/12/26/202112261116266885311.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/411471.html", "summary": "在一次奇幻剧本大赛中，编剧创作了一个吊车尾二流捉妖师啸天遇上善良可爱的猫妖小七和一心寻妻的帅哥幽灵金城，尽管各有目的但又齐心协力寻找做好事的机会，帮助小七成仙的奇幻故事。三人集结后秉着好事寻不到，让坏事来寻我的原则，法术杂货铺正式开张。三人在破解不一样的难题中建立深厚友谊，在一场场啼笑皆非的助人为乐故事里展现人间的真情冷暖，同时也完成了三人各自的成长与蜕变。"}, {"id": 37, "name": "无法沉睡的她", "genre": "现代悬疑", "year": "2021", "episodes": 24, "duration": 240, "cast": ["朱嘉倩", "王溪鹭", "张浩哲", "刘宥畅"], "poster": "https://2img.hitv.com/preview/sp_images/2021/12/28/202112281627421081399.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/412070.html", "summary": "尹智莉为参加闺蜜李朵拉的婚礼来到如月别墅，却意外发现新郎林邱墨有着与自己男友张霄一样的脸。新郎与伴娘似乎关系密切，懦弱新娘仿佛自欺欺人，这里发生的一切都超出了尹智莉的想象，而朵拉的父亲李舟的离奇死亡，更是将尹智莉彻底卷入迷局。终于，尹智莉意识到，背后，有人在操控着一切……"}, {"id": 38, "name": "轰炸天团", "genre": "现代剧情", "year": "2021", "episodes": 20, "duration": 200, "cast": ["吴旭东", "蔡宇航", "王千一"], "poster": "https://1img.hitv.com/preview/sp_images/2021/12/30/202112301820514636131.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/409556.html", "summary": "空军飞行部队模拟舱内，刘禅与赵宇航作为本届学员中的佼佼者，展开了部队模拟战“第一机长”之争，却不料两人因战术分歧造成失误并得到回炉重造的惩罚：在限期内，两人必须带出两支能打胜仗的全新队伍，否则他们将面临被开除的危险。可是，这届队伍也太难带了，更难的是，还要挑战女中豪杰学院第一女机械师——桃夭夭!"}, {"id": 39, "name": "夏虫可语冰", "genre": "青春校园", "year": "2022", "episodes": 16, "duration": 160, "cast": ["姜之南", "杨玥", "周千筱", "卓依娜姆", "高天"], "poster": "https://3img.hitv.com/preview/sp_images/2022/02/11/202202111558091464388.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/424064.html", "summary": "当“求男心切”的少女夏汤媛遇到了“求胜心切”的魔鬼教练赵一冰，中北女子冰壶队一整个陷入了鸡飞狗跳。但为了让团队脱离危机，完成自己“带队拿冠军”的梦想，赵一冰只得留下了她，并且找来了“天才选手”韩心妍。经历过无数矛盾和摩擦，夏汤媛逐渐发现这些看似完全不在一个世界的女孩子们内心的共同热爱，也逐渐领略了冰壶运动的魅力。这一次，她们誓要让中北女子冰壶队站上领奖台，向所有人宣告女孩的力量。"}, {"id": 40, "name": "又是努力的一天呢 第二季", "genre": "现代爱情", "year": "2022", "episodes": 45, "duration": 450, "cast": ["丁敬一", "张心怡", "初俊辰", "查祎琛", "白杰", "张露曦"], "poster": "https://4img.hitv.com/preview/sp_images/2022/04/15/202204151149007212488.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/440484.html", "summary": "延续第一季的剧情，讲述了立志35岁“提前退休”的辛凡才刚踏出第一步就被现实打败了，花千金也面临店铺经营困扰无暇顾及感情......越来越多有趣的人，加入了这个热闹的小团体，这群年轻人依旧续写着他们的生活，继续上演着关于爱、温暖、奋斗与成长的故事。"}, {"id": 41, "name": "我的阳台男友", "genre": "现代爱情", "year": "2022", "episodes": 45, "duration": 450, "cast": ["丁敬一", "张心怡", "初俊辰", "查祎琛", "白杰", "张露曦"], "poster": "https://1img.hitv.com/preview/sp_images/2022/05/25/202205251522467015585.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/450446.html", "summary": "讲述了花千金和她的阳台租客——辛凡这对欢喜冤家嬉笑打闹，共同奋斗的故事。两人的感情在鸡飞狗跳的日常中日渐升级，好友肃度和蜜玥，也渐渐露出暧昧的苗头，“霸总”和小甜妹的爱情，浮出水面…与此同时，四小只也面临越来越多的糟心事，他们在生活的一地鸡毛中，继续上演着关于爱与成长的故事。"}, {"id": 42, "name": "族长的赘婿", "genre": "现代爱情", "year": "2022", "episodes": 9, "duration": 146, "cast": ["泰乐", "牛玉坤", "牛在在"], "poster": "https://0img.hitv.com/preview/sp_images/2022/06/23/202206231433492725006.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/456337.html", "summary": "不近人情只想追求利益的白鹭集团继承人陆傲天被误会带到了原始森林深处的“花城”酒店，被迫成为半原始部落族长段若柔的“赘婿”，意外发现此地竟与消失两年的母亲有关，在寻找母亲的过程中，体验了壮美大自然的无限美好，同时感受到天地之间有钱换不来真心。"}, {"id": 43, "name": "从前慢·白首要相离", "genre": "现代爱情", "year": "2022", "episodes": 18, "duration": 180, "cast": ["杜宁林", "梁丹妮", "梁国荣", "王侃"], "poster": "https://4img.hitv.com/preview/sp_images/2022/09/09/202209091251215999856.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/457620.html", "summary": "一场白首夫妻的“离婚大作战”，一次跨越五十年的“寻找真相之旅”。风起时，谁在说“要离别”？雨停后，听我说“我爱你”。"}, {"id": 44, "name": "我的超能力没有存在感", "genre": "现代悬疑", "year": "2022", "episodes": 12, "duration": 120, "cast": ["于小彬", "曹婉瑾"], "poster": "https://2img.hitv.com/preview/sp_images/2022/06/28/202206281624179322267.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/457347.html", "summary": "“大冤种”张伟从孩提时起到参加工作，身边的同学、老师、同事、领导，甚至是父母都经常忘记了他的存在，成为从小到大被忽略掉的“那个谁”，而这项看似“倒霉”的能力却无意中让他成为了一名顶尖特工，屡次上演除暴安良、大破反派、英雄救美的故事。"}, {"id": 45, "name": "开挖掘机怎么啦", "genre": "现代爱情", "year": "2022", "episodes": 18, "duration": 180, "cast": ["虞朗", "王佳璇"], "poster": "https://1img.hitv.com/preview/sp_images/2022/11/17/202211171842325815977.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/495897.html", "summary": "以职业教育为背景的都市轻喜剧，讲述了立志成为挖掘机大拿的女主杨晓琪与一心想成为美容美发界翘楚的男主白贺，在争夺学校至高荣誉的对决中从互为对手到惺惺相惜，和厨师班、汽修班同学结成跨技术专业小组参与学校助力乡村振兴工作的励志故事。影片贴合国家大力发展职业教育的主流导向与教育规划，通过青春洋溢的人物、幽默风趣的故事、生动感人的情节为职业教育的普及与宣传展开一副多姿多彩的画卷。"}, {"id": 46, "name": "画江湖之不良人 第一季", "genre": "古装悬疑", "year": "2022", "episodes": 18, "duration": 180, "cast": ["李砚", "曹赛亚", "何依蔓", "陈添祥", "周微微", "于雷"], "poster": "https://1img.hitv.com/preview/sp_images/2022/03/08/202203081529129134687.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/430445.html", "summary": "神秘少年李星云和师妹陆林轩初入江湖，便与通文馆张子凡、幻音坊姬如雪不打不相识意外成好友，却不知这四人其实均各自背负着秘密任务——寻找龙泉。四人组一边秉持少年意气共同抗敌，另一边努力隐藏秘密完成任务，这时候，消失已久的不良帅也重出江湖……龙泉背后的巨大秘密即将揭晓，李星云等四人的江湖之道危机四伏，他们将何去何从……"}, {"id": 47, "name": "爱恋告急", "genre": "现代爱情", "year": "2022", "episodes": 20, "duration": 200, "cast": ["梁田", "黎明旭"], "poster": "https://3img.hitv.com/preview/sp_images/2022/12/13/202212131452173529805.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/508420.html", "summary": "律师木茜与调解员欧洋因聚少离多爆发离婚，但因工作特殊属性又因不同的案件在职场上频繁相遇，双方也在处理的案件中进一步思考在婚姻中存在的问题。同时两人的关系如同猫狗爱恋彼此拉扯，在30天后两人能否找到属于自己的爱情答案？"}, {"id": 48, "name": "画江湖之不良人 第二季", "genre": "古装悬疑", "year": "2022", "episodes": 18, "duration": 180, "cast": ["李砚", "曹赛亚", "何依蔓", "陈添祥", "周微微"], "poster": "https://3img.hitv.com/preview/sp_images/2022/11/22/202211221044375186702.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/498468.html", "summary": "乱世起巨变，少年再成长。李星云身世之谜被揭开，玄冥教、通文馆与幻音坊为了得到这位“前朝皇子”纷纷使出自己的手段，张子凡和姬如雪因内心情愫陷入两难境地。殊不知，悄悄成长的李星云早已暗中布下棋局，隐藏的不良人势力集中浮现，众人真实身份纷纷反转。热血少年团为探寻心中侠义之道再次踏上路程。"}, {"id": 49, "name": "我等海风拥抱你", "genre": "现代爱情", "year": "2023", "episodes": 18, "duration": 180, "cast": ["乌日丽格", "魏子翔", "肖然心", "金浩鹏"], "poster": "https://1img.hitv.com/preview/sp_images/2023/05/08/202305080920186939982.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/545781.html", "summary": "腾跃集团的废柴继承者刘凡被人从游艇推下大海，醒来后发现自己身处荒岛，身边只有一位同样落难的可爱女孩，而这个叫陈佳琪的女孩看似乖巧恬静，却拥有与外貌截然相反的野外求生技能。在经历了一系列挫折和磨难后，刘凡发现这一切似乎都是父亲的“阴谋”，而自己的表哥刘资居然是幕后执行者。离开荒岛探寻家族集团幕后的真相成为刘凡的信念，但屡屡失败的尝试一次次将他击溃，陈佳琪则一直守护并支持着他，两人关系迅速升温。"}, {"id": 50, "name": "锋利的心动", "genre": "现代爱情", "year": "2023", "episodes": 22, "duration": 220, "cast": ["刘海宽", "周微微", "孙欣磊"], "poster": "https://2img.hitv.com/preview/sp_images/2023/11/08/202311080958497979080.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/599571.html", "summary": "被降职成普通员工的创意设计总监兰溪在闺蜜秦子越的鼓励下，接受了职位变化。兰溪决定从哪里跌倒就在哪里站起来，用实力证明自己的价值，重新适应职场新环境，却意外遭到了新任创意设计总监尙恬静的敌对。最终，兰溪通过自身不懈的努力和不断提升的“职场技能”，获得了“老同学”覃知行的认可，重新“燃起”这位铁面无私老板的“暗恋”情愫。"}, {"id": 51, "name": "有秘密的她", "genre": "现代悬疑", "year": "2023", "episodes": 20, "duration": 200, "cast": ["丁泽仁", "丁燃", "李沛洋", "李海珊", "余芷慧"], "poster": "https://2img.hitv.com/preview/sp_images/2023/12/04/202312040932469733756.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/457331.html", "summary": "讲述职业拳击手元蔷薇，因姐姐离奇“死亡”，根据线索发现冷血霸总安雪虎是头号嫌疑人，于是制定计划接近他，开启闪婚模式。婚后她发现凶手另有其人，随着真相慢慢浮出水面，她对安雪虎也逐渐动心，却万万没想到这一切都早已在他掌握之中，原来他已经暗恋了她多年，两人在相爱相杀，消除内心芥蒂，共同查出真相，走到了一起。"}, {"id": 52, "name": "有种味道叫清溪", "genre": "现代爱情", "year": "2024", "episodes": 12, "duration": 60, "cast": ["卢东旭", "尹蕊", "徐玉兰"], "poster": "https://2img.hitv.com/preview/sp_images/2024/08/22/202408221018063407998.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/683924.html", "summary": "主要讲述了美食博主林晓溪来到清溪村，意外邂逅对厨艺一窍不通的科技新农人陆翊宸，二人重振“清溪小馆”开启奇妙缘分的爱情故事。"}, {"id": 53, "name": "赎爱", "genre": "现代爱情", "year": "2024", "episodes": 18, "duration": 180, "cast": ["张柏嘉", "金泽", "李卓扬", "王思懿"], "poster": "https://0img.hitv.com/preview/sp_images/2024/09/30/202409301556148295883.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/694424.html", "summary": "失去至亲的蒋彤涅槃归来，一步步揭露幕后黑手的罪行，却陷入旧爱高修予的深情泥潭之中，是重拾爱情还是坚持执念？曾经的遗憾与误会，又该如何收场？"}, {"id": 54, "name": "一梦如故", "genre": "古装爱情", "year": "2024", "episodes": 18, "duration": 180, "cast": ["郭星冶", "金子璇"], "poster": "https://3img.hitv.com/preview/sp_images/2024/12/04/202412041152509418433.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/709211.html", "summary": "在人工智能盛行的大环境下，北漂多年的小编剧顾一梦与人工智能剧本创作软件的研发者言君故意外梦入软件开发的剧本世界，上演了一段于异世界逆天改命、互相救赎的宿命奇旅。"}, {"id": 55, "name": "狸猫书生", "genre": "古装悬疑", "year": "2025", "episodes": 20, "duration": 200, "cast": ["王一舟", "解鑫豪"], "poster": "https://4img.hitv.com/preview/sp_images/2025/01/10/202501101638334409527.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/722293.html", "summary": "讲述了书院学子陶生和王生被卷入一系列神秘死亡事件后，通过以传说中的“猫妖”和邪术为引线，逐渐揭露出事件之下关于权力腐败与学术欺诈的故事。"}, {"id": 56, "name": "见君心", "genre": "古装爱情", "year": "2025", "episodes": 24, "duration": 240, "cast": ["李岱昆", "方瑾"], "poster": "https://0img.hitv.com/preview/sp_images/2025/02/20/202502201906599454961.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/708511.html", "summary": "讲述了天晟国苏烈将军幼女苏凤止惨遭灭门之灾，三年后假扮盲女琴师苏锦接近九皇子简世琉，但却意外发现简世琉的惊人“秘密”，二人历经生死考验，从对立到携手铲除仇人的故事。"}, {"id": 57, "name": "继承风暴", "genre": "现代爱情", "year": "2025", "episodes": 24, "duration": 360, "cast": ["赵佳", "王星玮"], "poster": "https://1img.hitv.com/preview/sp_images/2025/03/14/202503141733039334287.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/722282.html", "summary": "女主戴熙丈夫出轨，因车祸和情人同时去世，葬礼上来了另一个第三者，声称怀了丈夫的孩子，要和戴熙争夺巨额遗产，围绕遗产继承，掀起一场有关亲情和伦理的继承风暴。"}, {"id": 58, "name": "乘风2025之三十而励", "genre": "现代剧情", "year": "2025", "episodes": 16, "duration": 208, "cast": ["王蓉", "谭薇", "郑湫泓", "孙悦", "蒋一侨", "许馨文", "姜杉"], "poster": "https://3img.hitv.com/preview/sp_images/2025/08/20/202508201511109477036.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/777257.html", "summary": "本片讲述了三位30+女性重拾梦想组建乐队，在职场与生活逆风中互助成长，诠释新时代女性追梦的坚韧与勇气，展现了女性逆境破局、互伴前行的精神锋芒。"}, {"id": 59, "name": "羽刃", "genre": "现代悬疑", "year": "2025", "episodes": 20, "duration": 200, "cast": ["白醋", "林子琳", "梁晓龙"], "poster": "https://1img.hitv.com/preview/sp_images/2025/09/15/202509150948044954034.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/787370.html", "summary": "本片讲述了刘迎迎以“参赛者”身份进入年年友娱乐城，本意是寻找个人身世真相，却一步步深入由资本操控的陷阱。在层层谜局中，她与原本立场对立的娱乐城经理可可从试探、怀疑走向信任和协作，完成了彼此认知与行动的成长转变。两人面对非法试验与权力胁迫，没有选择沉默或服从，而是在黑暗中互为支点，突破困局，揭露真相。"}, {"id": 60, "name": "狸猫书生2", "genre": "现代悬疑", "year": "2025", "episodes": 20, "duration": 200, "cast": ["王一舟", "解鑫豪"], "poster": "https://2img.hitv.com/preview/sp_images/2025/10/02/202510021421379291602.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/777385.html", "summary": "《狸猫书生2》延续第一部的嘉宾阵容，借狸猫的穿越之力，双男主通过时空穿越将古装奇幻与现代校园案件串联，在2005与2025年的时空间隙中不断反转，从而发现一场交织着谎言与真情的迷局。"}, {"id": 61, "name": "少年田野", "genre": "现代悬疑", "year": "2025", "episodes": 30, "duration": 450, "cast": ["邓泽鸣", "王乐夫", "李振宇", "李彦漫", "黄博远", "秦路鹿"], "poster": "https://4img.hitv.com/preview/sp_images/2025/09/29/202509291722599988963.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/794167.html", "summary": "正值青春期的少年田野，因深陷连环伤人事件而成为众人瞩目的焦点。随着检察官陈峰的深入调查，田野的身世之谜以及背后隐藏的复仇阴谋逐渐浮出水面。在陈峰的努力下，田野的真实身份被揭开，原来他竟是为了保护他人而甘愿顶罪的受害者。最终，在正义与爱的力量下，田野得以重生，而案件背后的黑手也得到了应有的惩罚。"}, {"id": 62, "name": "诶？差点真分了", "genre": "现代爱情", "year": "2025", "episodes": 14, "duration": 140, "cast": ["哈妮克孜", "肖凯中"], "poster": "https://0img.hitv.com/preview/sp_images/2025/08/26/202508261718378115719.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/785205.html", "summary": "相恋四年的陈嘉汶和沈梦在5月20日分手，醒来时两人陷入时间循环，无限重复的一天。尝试各种方式无果，两人选择在阴差阳错的寻死之后，终于触发了隐藏的“任务”。两人在相处四年的时间里，曾经对彼此说过的海誓山盟，如今成为了重重考验。"}, {"id": 63, "name": "全员加速中之赏金猎人", "genre": "民国悬疑", "year": "2025", "episodes": 16, "duration": 192, "cast": ["曹恩齐", "罗予彤", "李晋晔", "肖然心", "文东俊", "李彦漫", "张泽渊", "李学庆", "苏晓璐", "黄京蕾"], "poster": "https://2img.hitv.com/preview/sp_images/2025/11/14/202511141007349149517.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/786925.html", "summary": "本片讲述了在民国初年永新城，文物店李老爷子离奇遇害，数十箱文物失踪。新任探长叶寒舟携有旧怨的副探长骆亭查案，期间与舞台剧皇后杜晴多次交锋，而后一同查案。叶寒舟等人发现线索，却遭“赏金猎人”，三人小分队为守护文物与多方势力斗智斗勇、极限守宝的故事。"}, {"id": 64, "name": "焕心", "genre": "古装爱情", "year": "2025", "episodes": 24, "duration": 360, "cast": ["何昶希", "李佳洁", "包涵", "徐媛媛", "余沐阳"], "poster": "https://4img.hitv.com/preview/sp_images/2025/12/05/202512051619507604767.jpg?x-oss-process=image/resize,w_280,h_392/format,jpg", "link": "https://www.mgtv.com/h/815287.html", "summary": "神捕陈堰之在追查凶案的过程中，与青楼花魁月如环灵魂互换，二人不得不扮演对方生活，神捕侍客，花魁查案，为寻找真相，二人结下契约婚姻，结下了一段奇遇良缘。"}];
const ACTOR_MAP = {"王轩": [1], "金佳遇": [1], "金子璇": [1, 54], "陈田心": [1], "林楷杰": [1], "肖然心": [2, 7, 9, 25, 49, 63], "孙栎涵": [2], "石光": [2, 6], "刘雪帆": [2], "李思奇": [3], "文渊": [3], "王祖一": [3], "吕妍": [3], "余衍隆": [3], "叶皓然": [3], "谢泽成": [3], "王路晴": [4, 17], "丞磊": [4, 21, 31], "尚思丞": [4], "马小钦": [4, 21, 26, 27], "刘美彤": [5], "文力": [5], "关畅": [5], "倪寒尽": [5], "文渝淇": [5], "陈俊宇": [6, 11], "牛玉坤": [6, 42], "宣淏": [6, 11], "郭倩雯": [6], "胡丹丹": [7], "杨泽": [7, 19], "王钧浩": [7, 9], "于轩晨": [8], "李澳": [8, 15], "李梓伊": [8], "王星玮": [8, 57], "飞尔多斯": [8], "肖雨": [9], "曹恩齐": [9, 63], "朱丽岚": [10], "李菲": [10], "张景昀": [10], "周微微": [10, 11, 46, 48, 50], "李文茹": [10], "赵一霖": [10], "李沛洋": [11, 51], "尹蕊": [11, 52], "刘海宽": [12, 50], "刘一曈": [12], "王心妤": [12], "赵轩": [12], "滕爱弦": [12], "梁弘立": [12], "刘伶": [12], "黄子弘凡": [13], "杨霖": [13], "陈怡凡": [13], "刘柠昊": [13], "韩涛": [13], "董子鸣": [14], "雷皓翔": [14], "张心怡": [14, 35, 40, 41], "王晨艺": [14], "谢治勋": [15], "景研竣": [15], "林子琳": [15, 59], "倪言": [16], "张浩哲": [16, 37], "金世康": [16], "张珂源": [16], "佴一文": [17], "崔绍阳": [17], "淮文": [17], "靳梦佳": [18], "师子寻": [18], "郭浩宇": [18], "张屹杨": [18], "刘松霖": [18], "陈芳彤": [19, 21], "叶筱玮": [19], "周士原": [20], "谢子然": [20], "马萱": [20], "张珀凡": [20], "柴翊格": [20], "高凯": [21], "彭雅琦": [22], "高梓添": [22], "赵一鸣": [22], "韩晴": [22], "方潇亦": [22], "马小茜": [23], "希尔力": [23], "梁正群": [23], "程柏儒": [23], "赵明川": [23], "崔梓熙": [23], "吉元雪": [23], "杨了": [24], "李政庭": [24], "管乐": [24], "王已歌": [24], "曲羿成": [24], "张紫琳": [24], "黄炫彰": [25], "杨馥羽": [26], "贾浩渊": [26], "许清雅": [27], "常斌": [27], "段星羽": [27], "刘增宇": [27], "方晓东": [28], "张昕懿": [28], "王思懿": [28, 53], "李哲豪": [28, 32], "赵泽帆": [28], "李嘉祥": [28], "麦童": [29, 32], "魏晚秋": [29], "何善凯": [29, 33], "张瑞": [29, 34], "娄艺潇": [30], "衣云鹤": [30], "郑妙": [31], "牛鑫": [31], "谭盐盐": [32], "曾姿晔": [33], "韩东霖": [33], "苏芮莹": [33], "刘泳辰": [33], "白杰": [33, 35, 40, 41], "宋南与": [33], "柯颖": [34], "丁敬一": [35, 40, 41], "初俊辰": [35, 40, 41], "查祎琛": [35, 40, 41], "史雅欣": [35], "赵晴": [36], "吴迪飞": [36], "王嘉萌": [36], "妙静鸥": [36], "明鹏": [36], "李佳成": [36], "王雅淇": [36], "本杰明": [36], "朱嘉倩": [37], "王溪鹭": [37], "刘宥畅": [37], "吴旭东": [38], "蔡宇航": [38], "王千一": [38], "姜之南": [39], "杨玥": [39], "周千筱": [39], "卓依娜姆": [39], "高天": [39], "张露曦": [40, 41], "泰乐": [42], "牛在在": [42], "杜宁林": [43], "梁丹妮": [43], "梁国荣": [43], "王侃": [43], "于小彬": [44], "曹婉瑾": [44], "虞朗": [45], "王佳璇": [45], "李砚": [46, 48], "曹赛亚": [46, 48], "何依蔓": [46, 48], "陈添祥": [46, 48], "于雷": [46], "梁田": [47], "黎明旭": [47], "乌日丽格": [49], "魏子翔": [49], "金浩鹏": [49], "孙欣磊": [50], "丁泽仁": [51], "丁燃": [51], "李海珊": [51], "余芷慧": [51], "卢东旭": [52], "徐玉兰": [52], "张柏嘉": [53], "金泽": [53], "李卓扬": [53], "郭星冶": [54], "王一舟": [55, 60], "解鑫豪": [55, 60], "李岱昆": [56], "方瑾": [56], "赵佳": [57], "王蓉": [58], "谭薇": [58], "郑湫泓": [58], "孙悦": [58], "蒋一侨": [58], "许馨文": [58], "姜杉": [58], "白醋": [59], "梁晓龙": [59], "邓泽鸣": [61], "王乐夫": [61], "李振宇": [61], "李彦漫": [61, 63], "黄博远": [61], "秦路鹿": [61], "哈妮克孜": [62], "肖凯中": [62], "罗予彤": [63], "李晋晔": [63], "文东俊": [63], "张泽渊": [63], "李学庆": [63], "苏晓璐": [63], "黄京蕾": [63], "何昶希": [64], "李佳洁": [64], "包涵": [64], "徐媛媛": [64], "余沐阳": [64]};

// ===== 收藏功能 =====
const FAV_KEY = 'mgtv_favorites_v2';

function getFavorites() {
    try {
        const data = localStorage.getItem(FAV_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function saveFavorites(favs) {
    localStorage.setItem(FAV_KEY, JSON.stringify(favs));
    updateFavCount();
}

function toggleFavorite(dramaId) {
    let favs = getFavorites();
    const idx = favs.indexOf(dramaId);
    if (idx > -1) {
        favs.splice(idx, 1);
    } else {
        favs.push(dramaId);
    }
    saveFavorites(favs);
    updateAllFavButtons();
    return idx === -1;
}

function isFavorite(dramaId) {
    return getFavorites().includes(dramaId);
}

function updateFavCount() {
    const count = getFavorites().length;
    const badge = document.getElementById('fav-count');
    if (badge) badge.textContent = count;
}

function updateAllFavButtons() {
    document.querySelectorAll('.fav-action-btn').forEach(btn => {
        const id = parseInt(btn.dataset.id);
        const isFav = isFavorite(id);
        btn.classList.toggle('active', isFav);
        const heart = btn.querySelector('.heart');
        const text = btn.querySelector('.fav-text');
        if (heart) heart.textContent = isFav ? '❤️' : '🤍';
        if (text) text.textContent = isFav ? '已收藏' : '收藏';
    });
    document.querySelectorAll('.fav-btn').forEach(btn => {
        const id = parseInt(btn.dataset.id);
        const isFav = isFavorite(id);
        btn.classList.toggle('active', isFav);
        btn.textContent = isFav ? '❤️' : '🤍';
    });
}

// ===== 导出收藏夹为Excel =====
function exportFavorites() {
    const favIds = getFavorites();
    if (!favIds.length) {
        alert('收藏夹为空，请先收藏一些剧集！');
        return;
    }

    const favDramas = ALL_DRAMAS.filter(d => favIds.includes(d.id));

    const data = [
        ['序号', '剧名', '年份', '题材', '集数', '总时长(分钟)']
    ];
    favDramas.forEach((d, i) => {
        data.push([i + 1, d.name, d.year, d.genre, d.episodes, d.duration]);
    });

    if (typeof XLSX === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.sheetjs.com/xlsx-0.20.1/package/dist/xlsx.full.min.js';
        script.onload = function() {
            doExport(data);
        };
        document.head.appendChild(script);
    } else {
        doExport(data);
    }
}

function doExport(data) {
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, '我的收藏');
    ws['!cols'] = [{wch: 6}, {wch: 25}, {wch: 8}, {wch: 12}, {wch: 8}, {wch: 14}];
    const now = new Date();
    const dateStr = now.getFullYear() + '' + String(now.getMonth()+1).padStart(2,'0') + String(now.getDate()).padStart(2,'0');
    XLSX.writeFile(wb, '芒果TV收藏夹_' + dateStr + '.xlsx');
}

// ===== 搜索功能 =====
function performSearch(keyword) {
    if (!keyword || !keyword.trim()) return ALL_DRAMAS;
    const kw = keyword.toLowerCase().trim();
    return ALL_DRAMAS.filter(d => {
        const nameMatch = d.name.toLowerCase().includes(kw);
        const genreMatch = d.genre.toLowerCase().includes(kw);
        const castMatch = d.cast.some(c => c.toLowerCase().includes(kw));
        return nameMatch || genreMatch || castMatch;
    });
}

function renderSearchResults(results) {
    const container = document.getElementById('search-results-grid');
    const countEl = document.getElementById('search-count');
    if (!container) return;

    if (countEl) countEl.textContent = results.length;

    if (!results.length) {
        container.innerHTML = '<div class="no-results">😔 没有找到匹配的剧集，请尝试搜索剧名、演员或题材</div>';
        return;
    }

    let html = '<div class="drama-grid">';
    results.forEach(d => {
        const isFav = isFavorite(d.id);
        html += `
        <div class="drama-thumb" data-id="${d.id}">
            <a href="drama_${String(d.id).padStart(3,'0')}.html">
                <div class="thumb-img-wrapper">
                    <img src="${d.poster}" alt="${d.name}" onerror="this.src='https://via.placeholder.com/180x252/FF6A00/FFFFFF?text=芒果TV'">
                    <span class="thumb-episodes">${d.episodes}集</span>
                </div>
            </a>
            <div class="thumb-info">
                <div class="thumb-title-row">
                    <div class="thumb-title">${d.name}</div>
                    <button class="fav-btn ${isFav?'active':''}" data-id="${d.id}"
                        onclick="event.preventDefault();event.stopPropagation();toggleFavorite(${d.id});return false;">
                        ${isFav?'❤️':'🤍'}
                    </button>
                </div>
                <div class="thumb-year">${d.year}年 · ${d.genre}</div>
            </div>
        </div>`;
    });
    html += '</div>';
    container.innerHTML = html;
}

// ===== 演员筛选功能 =====
function showActorDramas(actorName) {
    const dramaIds = ACTOR_MAP[actorName] || [];
    const actorDramas = ALL_DRAMAS.filter(d => dramaIds.includes(d.id));

    document.querySelectorAll('.section-block').forEach(el => el.style.display = 'none');
    const searchArea = document.getElementById('search-results');
    if (searchArea) searchArea.style.display = 'none';

    let actorSection = document.getElementById('actor-section');
    if (!actorSection) {
        actorSection = document.createElement('div');
        actorSection.id = 'actor-section';
        actorSection.className = 'section-block actor-section';
        const contentArea = document.querySelector('.content-area');
        if (contentArea) contentArea.appendChild(actorSection);
    }
    actorSection.style.display = 'block';

    if (!actorDramas.length) {
        actorSection.innerHTML = `
            <h2 class="section-heading">👤 ${actorName} 参演剧集</h2>
            <div class="no-results">未找到该演员参演的剧集</div>
        `;
        return;
    }

    let html = '<h2 class="section-heading">👤 ' + actorName + ' 参演剧集 <span class="count-badge">' + actorDramas.length + '部</span></h2>';
    html += '<div class="drama-grid">';
    actorDramas.forEach(d => {
        const isFav = isFavorite(d.id);
        html += `
        <div class="drama-thumb" data-id="${d.id}">
            <a href="drama_${String(d.id).padStart(3,'0')}.html">
                <div class="thumb-img-wrapper">
                    <img src="${d.poster}" alt="${d.name}" onerror="this.src='https://via.placeholder.com/180x252/FF6A00/FFFFFF?text=芒果TV'">
                    <span class="thumb-episodes">${d.episodes}集</span>
                </div>
            </a>
            <div class="thumb-info">
                <div class="thumb-title-row">
                    <div class="thumb-title">${d.name}</div>
                    <button class="fav-btn ${isFav?'active':''}" data-id="${d.id}"
                        onclick="event.preventDefault();event.stopPropagation();toggleFavorite(${d.id});return false;">
                        ${isFav?'❤️':'🤍'}
                    </button>
                </div>
                <div class="thumb-year">${d.year}年 · ${d.genre}</div>
            </div>
        </div>`;
    });
    html += '</div>';
    actorSection.innerHTML = html;

    document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
}

// ===== 收藏页面 =====
function showFavorites() {
    const favIds = getFavorites();
    const favDramas = ALL_DRAMAS.filter(d => favIds.includes(d.id));

    document.querySelectorAll('.section-block').forEach(el => el.style.display = 'none');
    const searchArea = document.getElementById('search-results');
    if (searchArea) searchArea.style.display = 'none';
    const actorSection = document.getElementById('actor-section');
    if (actorSection) actorSection.style.display = 'none';

    let favSection = document.getElementById('favorites-section');
    if (!favSection) {
        favSection = document.createElement('div');
        favSection.id = 'favorites-section';
        favSection.className = 'section-block';
        const contentArea = document.querySelector('.content-area');
        if (contentArea) contentArea.appendChild(favSection);
    }
    favSection.style.display = 'block';

    if (!favDramas.length) {
        favSection.innerHTML = `
            <h2 class="section-heading">❤️ 我的收藏</h2>
            <div class="no-results">暂无收藏的剧集，在剧集详情页点击「收藏」按钮即可添加</div>
        `;
        return;
    }

    let html = '<h2 class="section-heading">❤️ 我的收藏 <span class="count-badge">' + favDramas.length + '部</span></h2>';
    html += '<div style="margin-bottom:20px;"><button class="export-btn" onclick="exportFavorites()">📥 导出收藏夹为Excel</button></div>';
    html += '<div class="drama-grid">';
    favDramas.forEach(d => {
        html += `
        <div class="drama-thumb" data-id="${d.id}">
            <a href="drama_${String(d.id).padStart(3,'0')}.html">
                <div class="thumb-img-wrapper">
                    <img src="${d.poster}" alt="${d.name}" onerror="this.src='https://via.placeholder.com/180x252/FF6A00/FFFFFF?text=芒果TV'">
                    <span class="thumb-episodes">${d.episodes}集</span>
                </div>
            </a>
            <div class="thumb-info">
                <div class="thumb-title-row">
                    <div class="thumb-title">${d.name}</div>
                    <button class="fav-btn active" data-id="${d.id}"
                        onclick="event.preventDefault();event.stopPropagation();toggleFavorite(${d.id});showFavorites();return false;">
                        ❤️
                    </button>
                </div>
                <div class="thumb-year">${d.year}年 · ${d.genre}</div>
            </div>
        </div>`;
    });
    html += '</div>';
    favSection.innerHTML = html;
}

function showAllSections() {
    const favSection = document.getElementById('favorites-section');
    if (favSection) favSection.style.display = 'none';
    const actorSection = document.getElementById('actor-section');
    if (actorSection) actorSection.style.display = 'none';
    const searchArea = document.getElementById('search-results');
    if (searchArea) searchArea.style.display = 'none';
    document.querySelectorAll('.section-block').forEach(el => el.style.display = 'block');
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', function() {
    updateFavCount();
    updateAllFavButtons();

    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const kw = e.target.value.trim();
            if (kw) {
                showAllSections();
                const results = performSearch(kw);
                renderSearchResults(results);
                if (searchResults) searchResults.style.display = 'block';
                document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
            } else {
                if (searchResults) searchResults.style.display = 'none';
                showAllSections();
            }
        });
    }

    const favLink = document.getElementById('fav-link');
    if (favLink) {
        favLink.addEventListener('click', function(e) {
            e.preventDefault();
            showFavorites();
            if (searchInput) searchInput.value = '';
            if (searchResults) searchResults.style.display = 'none';
            document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
            favLink.classList.add('active');
        });
    }

    document.querySelectorAll('.sidebar-item:not(#fav-link)').forEach(el => {
        el.addEventListener('click', function() {
            const favLink = document.getElementById('fav-link');
            if (favLink) favLink.classList.remove('active');
        });
    });
});
