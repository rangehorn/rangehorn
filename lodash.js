
	$('#startGame').click(function(){
       StartGame();
	});
//	$('#topic').click(function(){
 //      generateTopic();
		let bugtrack = [];
		var dictTopic = ['Выберите персонажа диснея для капитана: от персонажа, который совершенно ему не подходит, до персонажа, который идеально ему подходит.','Вы предводительствуете шервудским лесом. Изобразите, как стреляете из лука: от неуклюжего стрелка до робина гуда.','Друг отметил вас на фотографии в faсeбоok.Что вы делаете на этой фотографии? От чего-то неловкого до чего-то привлекательного.','«чтобы выиграть нобелевскую премию по экологии, я планирую…».Скажите, что вы сделаете: от «я не уверен, что это сработает» до «это очень экологично».','Какую документальную» передачу показывают сегодня вечером по телевизору? От темы, которая вас собершенно не интересует, до темы, которая вам крайне интерeсha.','Притворитесь гендальфом и скажите: «ты не пройдёшы».От самого неубедительного до самого убедительного способа.','О чём мечтают женщины: удобно устроиться на диване с бокалом белого вина за просмотром… закончите фразу: от слегка приятного до полного экстаза.','Все сидящие вокруг стола оказались вместе лифте.Изобразите звук выпущенных газов: от наиболее тихого до наиболее заметного.','Чью фотографию вы бы повесили на мишень для дартс? От «ни за что на свете» до «с лёгкостью!».','Вечер караоке!Вы поёте следующую песню: от «все спасаются бегством» до «все просят ещё».','Вы помогаете кому-то с переездом.Вас просят затащить что-то на 6-й этаж… что это? От самого лёгкого до самого тяжёлого и нестандартного.','Кистью руки изобразите на столе человека, садящегося на поезд: от «до отправления ещё час» до «поезд уже тронулся».','Чтобы продать ваш домразвалюху вы решаете добавить несколько деталей, которые улучшат вид и позволят вам продать дом за большие деньги. От наименее эффективных до наиболее эффективных.','Вы покупаете сувенир в сувенирной лавке кремля.Что вы купили? От наименее вероятного до наиболее вероятного.','У вас звонит телефон.Возьмите трубку и изобразите вашу реакцию: от стандартного звонка до неожиданного сюрприза.','Изобразите собаку, заметившую почтальона: от очаровательного щеночка до злой сторожевой собаки.','Ваш сосед слева суперзлодей.Посмотрите ему прямо в глаза и скажите: «я бэтмен».От наименее устрашающего до наиболее устрашающего.','Что если бы дейнерис была бы не матерью драконов, а матерью… кого?Закончите: от самого постыдного до самого благородного.','Назовите персонажа мультфильма: от самого маленького до самого большого.','Все игроки становятся учёными, создающими антропоморфных роботов.Какие из своих характеристик (физических или умственных) вы передадите своему роботу? От самого ужасного робота до самого невероятного робота.','Выберите персонажа диснея для капитана: от персонажа, который совершенно ему не подходит, до персонажа, который идеально ему подходит.','Друг отметил вас на фотографии в faсeвоok.Что вы делаете на этой фотографии? От чего-то неловкого до чего-то привлекательного.','Если бы вам нужно было нанять актёра на роль бога красоты и мужественности, какого бы актера (мёртвого или живого) вы выбрали: от худшего выбора до лучшего выбора.','Назовите ситуацию, которая пугает капитана: от небольшого дискомфорта до полного ужаса.','Вам звонит президент сша.Что бы вы хотели, чтобы он вам сказал? От самого плохого сюрприза до самого хорошего сюрприза.','Инспектор гаджет гордится своей новой идеей.Что это?От наименее полезного изобретения до наиболее полезного изобретения.','Вы пробрались в заброшенный дом посреди ночи.Вы сталкиваетесь лицом к лицу с кем-то ужасным.Кто это? От слегка пугающего до леденящего кровь.','Вы открываете свой ресторан.Как вы его назовёте?От заведения, в которое никто не захочет пойти, до заведения, которое каждый захочет посетить.','Вы звоните своей тёще после попойки.Что вы ей скажете? От того, что не повлечёт за собой никаких последствий, до того, из-за чего у вас будут большие проблемы.','Скажите: «моя тёща приезжает ко мне в гости»: от «это конец света» до «не могу дождаться».','Откройте крышку коробки с игрой. Сюрприз! Внутри тарантул! Изобразите свою реакцию: «от мне немного не по себе» до «я на грани обморока». ','Как называется музыкальная группа, которую вы создали вашими друзьями? От безобидной до хардкорной. ','Эта карта лотерейный билет. Притворитесь, что стираете зашитный слой. Изобразите свою реакцию на выигрыш: от 1 доллара до 100 миллионов долларов. ','Найдите работу для президента сша после того, как закончится его президентский срок: от наименее вероятной до наиболее вероятной. ','Вы решили списать на экзамене и спрятали шпаргалки у себя на теле. Покажите, как вы подглядываете собственные записи: от наименее удачного места до наиболее удачного места. ','Придумайте прозвище для своей второй половинки: от «нам пора расстаться» до «мы всегда будем вместе». ','Какая третья составляюшая хорошего отпуска: солнце, возможность забыть про все свои проблемы и… дополните: от кошмарного отпуска до идеального отпуска. ','Назовите вредную привычку: от такой, в которой легко признаться, до такой, в которой признаться очень тяжело. ','Вы взяли заложников. Что вы потребуете от властей? От самого незначительного требования до самого возмутительного требования. ','Изобразите дуэль на револьверах (как в лучших бестернах). Постарайтесь «выстрелить» раньше оппонента: от «вы жалкий» до «вы настоящий джон уэйн! ». ','В новогоднюю ночь к вам пришёл дед мороз, и вы хотите убедить его, что хорошо себя вели в уходящем году. Какой поступок вы назовёте? От самого банального до самого впечатляющего. ','Вы решили никуда не идти и пересмотреть все серии «друзей», сидя на диване. Придумайте оправдание: от наименее убедительного до наиболее убедительного.','Бэтмен решил заменить робина в борьбе против зла. Придумайте новый дуэт: «бэтмен и…». От худшего к лучшему. ','Возьмите воображаемую волшебную палочку и наложите заклятье на другого игрока: от вредного до полезного. ','О чём говорится в предсказании из вашего печенья? От самого простого до самого сложного для восприятия. ','Вот дерьмо! Туалет засорился, что вы можете использовать, чтобы прочистить его? От наименее эффективного до наиболее эффективного. ','Назовите изобретение из человеческой истории: от наименее революционного до наиболее революционного. ','Что вы положите в кровать, чтобы сделать её тёплой? От наименее эффективного до наиболее эффективного. ','Вы застряли в машине, пока дорогу переходит стадо пони. Постучите ладонью по коробке, чтобы просигналить: от наиболее тихого сигнала до наиболее громкого сигнала. ','Вы фитнес-тренер, изобразите новое упражнение, которому вы хотите научить вашу группу: от лёгкого разогрева до энергичного движения, которое заставит вас попотеть. ','Капитан не уверен, стоит ли ехать в другой город на выходные к своим родителям. Их город организует фестиваль… закончите предложение: от наименее заманчивого до наиболее заманчивого. ','Что бы вы взяли в поездку на мальдивы? От совершенно случайного до абсолютно необходимого предмета. ','Вечер кино! Назовите американскую комедию: от худшей к лучшей. ','Вы всемогущее божество, и вы наконец решили явить свой лик человечеству, что вы сделаете? От наименее эффектного до наиболее эффектного. ','Все на выборы! Кто (живой, мёртвый или выдуманный) станет лучшим президентом россии? От худшего к лучшему. ','Прочитайте смс-сообщение, которое получила ваша вторая половинка: от наиболее безобидного содержания до «мне точно изменяют! ». ','Если бы все игроки за этим столом провели бы выходные вместе, чем бы они занялись? От самого скучного до самого увлекательного. ','Добро пожаловать в парк развлечений! Какой аттракцион вы выберите? От наименее впечатляющего до наиболее впечатляющего. ','Придумайте название для следующего блокбастера: «бэтмен. Последний бой против…». Закончите фразу: от наименее вероятной до наиболее вероятной. ','Представьте, что вы собака, решившая переплыть реку: от спокойного ручья до сильного течения. ','На улице все глазеют на вас и оборачиваются, когда вы проходите мимо. Почему? От худшей причины до лучшей причины. ','Вы прочитали в журнале следующую статью: «будьте неотразимы: новая популярная диета поможет вам в этом. Ешьте только…». Закончите предложение: от худшего варианта к лучшему варианту. ','Вас арестовали и посадили в тюрьму. Но за что? От наименее серьёзного до наиболее серьёзного проступка. ','Изобразите: вы впервые оказались на ужине у родителей вашей второй половинки, вы вегетарианец, но вам подают стейк. Притворитесь, что прокалываете крышку от коробки ручкой: от «это ничем хорошим не кончится» до «всё идёт просто замечательно». ','Вы средневековый лорд. Что изображено на вашем гербе? От совершенно безобидного до вселяющего страх. ','Назовите одну причину вступить в брак: от самой плохой идеи до самой благородной идем. ','В окно только что влетела оса, и теперь она летает по комнате. Изобразите свою реакцию: от полного спокойствия до полной паники. ','Заяц уходит на пенсию. Кто-то должен подменить его в гонке, назовите животное: от самого медленного до самого быстрого. ','Это либо сработает, либо нет: назовите то, что позволит вам пройти через охрану аэропорта. От самого простого прохождения до самого сложного прохождения. ','Изобразите, как тянете воображаемую верёвку в зависимости от того, что на другом конце: от чего-то лёгкого до чего-то очень тяжёлого. ','Вы решили сыграть в огромную партию пряток по всему городу! Где вы спрячетесь? От «вас нашли почти сразу» до «вас так и не нашли». ','Представьте, что вы собака, решившая переплыть реку: от спокойного ручья до сильного течения. ','Возьмите закрытую коробку из-под игры: внутри неё ваш подарок на новый год. Откройте коробку и изобразите свою реакцию: от худшего подарка до лучшего подарка. ','Вы прочитали в журнале следующую статью: «будьте неотразимы: новая популярная диета поможет вам в этом. Ешьте только…». Закончите предложение: от худшего варианта к лучшему варианту. ','«срочные новости! Убийца дворецкий! Орудие убийства он нашёл на кухне». Назовите это орудие: от наименее эффектного до наиболее эффектного. ','Вы можете вернуться в прошлое, чтобы посмотреть на себя в 11 лет. Что бы вы сказали себе в детстве? От совершенно бесполезного до очень важного. ','Бросьте что-то (например, монетку): от самой короткой дистанции до самой длинной дистанции. ','Изобретение века! «трусы, которые…». Закончите фразу: от худшей идем до гениальной идеи. ','Изобразите, как вы сидите на табуретке и доите корову: от «ни капли» до «вы профессионал, молоко течёт рекой». ','Вы попали в небольшую аварию, столкнувшись с другой машиной. Кто выходит из другой машины? От «я не собираюсь договариваться» до «конечно, я за всё заплачу». ','Вы просыпаетесь с невероятной головной болью и обнаруживаете у себя на руке татуировку, что на ней изображено? От «мне срочно нужна помочь» до «клёвая татуировка». ','Что мисс мира может сказать в своей речи? От наименее вероятного до наиболее вероятного. ','Вы были арестованы за то, что выкопали туннель, ведущий от вашего дома к национальному банку, у вас есть право на один звонок, кому вы позвоните? От наименее разумного до наиболее разумного. ','Закончите вопрос, забитый в строку поисковика: «как мне…». От самого редкого до самого популярного варианта. ','Скажите «бу! » другому игроку: от милого и доброго до ужасающего. ','Коробка с игрой чем-то пахнет. Понюхайте её и изобразите свою реакцию: от «это невыносимая вонь» до «это самый чудесный запах». ','Назовите человека (живого или мертвого), который бы принял участие в вашей версии «большого брата»: от того, кто проиграет до того, кто выиграет. ','Если бы вы были президентом, какое министерство вы бы учредили? От такого, к которому никто бы не прислушивался, до того, которое всем интересно. ','Вы гадалка. Предскажите будущее клиента с помощью хрустального шара: от сплошных неудач до крупного везения. ','Изобразите чревовещателя. Пусть говорит ваша рука, что она говорит? От очень обидного до очень милого. ','У кого длиннее? Назовите животное в зависимости от длины его хвоста: от самого короткого до самого длинного. ','Туалет занят! Изобразите, что вам нужно сходить туалет: от наименее срочного до наиболее срочного. ','Какой маскарадный костюм вы посоветуете надеть капитану? От наименее подходящего до наиболее подходящего. ','Наконец-то вы стали верховным диктатором. Вы встаёте и произносите свою инаугурационную речь: «дорогой народ, моим первым указом будет…». От чего-то хорошего до чего-то ужасного. ','Если бы вы могли стать героем сериала, кого бы вы выбрали? От самого ужасного варианта до варианта зашей мечты. ','В комнате, в которой вы сейчас играете, спрятана камера наблюдения. Что вчера попало на запись? От наименее интересного события до наиболее интересного события. ','Вы усаживаетесь на своё место в самолёте и слышите, как пилот объявляет: «говорит командир корабля…». Закончите фразу: от обнадёживающей до вызывающей панику. ','Придумайте кличку для собаки: от наименее страшной до наиболее страшной. ','Изобразите, как вы заходите в море: от «бода ледяная» до «вода превосходная». ','Продайте одним предложением фильм, который вы хотели бы снять как режиссёр: от скукотищи, на которую никто не пойдёт, до крупного блокбастера. ','Возьмите игровую карту, передайте её своему соседу и похвастайтесь: «это моя членская карточка в…». Закончите предложение: от наименее престижного до наиболее престижного. ','Какой соус вы выберите к крылышкам? От худшего соуса до лучшего соуса. ','Вы приземлились на другой планете! Она сильно отличается от земли и полностью заселена… закончите предложение: от цивилизации, с которой вы не смогли бы сосуществовать, до цивилизации вашей мечты. ','Назовите предмет в зависимости от высоты, на которой вы можете его найти: от самой низкой до самой высокой. ','Изобразите животное, не называя его: от самого мелкого до самого крупного. ','Какую ошибку вы можете совершить во время прохождения интервью на должность вашей мечты? От «ничего страшного» до «вам конец». ','Вы случайно встретились с человеком, который увёл у вас любовь всей вашей жизни в старших классах… месть будет сладка, что вы сделаете? От мелочи до обиды на всю жизнь. ','Вы остановились в хостеле для молодёжи в комнате, рассчитанной на 12 человек. В комнату заходит группа… закончите предложение: от «спал как убитый» до «совсем не выспался (и готов их за это убить)». ','Назовите предмет, который можно использовать, чтобы устроить поджог: от наименее эффективного до наиболее эффективного. ','Изобразите, как вы скачете на лошади: от пони до неукротимого жеребца. ','Уста младенца глаголят истину, особенно на кассе супермаркета. Что может сказать ребенок в магазине: от наименее постыдного до наиболее постыдного для его родителей? ','Вас остановили за превышение скорости. Какую причину вы назовёте, чтобы отделаться от штрафа? От самой нелепой до самой правдоподобной. ','Потрясающе выглядишь! Назови предмет одежды или аксессуар: от самого устаревшего до самого модного. ','Назовите популярную личность в зависимости от количества подписчиков в instagram: от наименьшего до наибольшего. ','Новая карьера! Придумайте новую работу для капитана: от работы, с которой он навряд ли справится, до работы, для которой он был рождён. ','Вас атаковали пираты! Изобразите бой на рапирах: от полного провала до трюков, достойных зорро. ','Если борис пользуется успехом у женщин, это потому что… закончите предложение: от наименее привлекательного качества до наиболее привлекательного качества. ','Вы ждёте в приёмном отделении больницы, когда вдруг в помещение заходит человек с необычной травмой… что с ним случилось? От «очередь для всех» до «нужно немедленно пропустить его вне очереди». ','Изобразите, как бы заходите в салун на диком западе: от наименее впечатляющего появления до наиболее впечатляющего появления. ','Вас обвинили в убийстве в новогоднюю ночь. Какое у вас алиби? От «освободите его немедленно» до «он сядет надолго». ','Загадочный мужчина оставил сообщение на вашем автоответчике: «если вы готовы, ваша миссия…». Закончите предложение: от простой миссии до невыполнимой миссии. ','Если бы у вас была машина времени, которая могла бы доставить вас в доисторические времена, кого бы вы взяли с собой? От самого полезного компаньона до самого бесполезного компаньона. ','Вы осматриваете место преступления, назовите улику, которую вы нашли: от самой бесполезной до крайне полезной для поимки преступника. ','Дотроньтесь до коробки из-под игры указательным пальцем. Она под током! Изобразите вашу реакцию: от лёгкого до сильного удара током. ','Изобразите, как вы наливаете чай в чашку, держа чайник на разной высоте: от наименьшей высоты до наибольшей высоты. ','Поздравляем молодожёнов! Что вы подарите счастливой парочке? От дешёвого подарка до впечатляющего подарка. ','Где вы спрячетесь в случае зомбиапокалипсиса? От гарантированного выживания до верной смерти. ','Наступил сезон аллергии. Чихните: от еда заметного до оглушительного. ','Капитан затерялся в центре дождевых лесов амазонии вдали от цивилизации. Очевидно, он станет вторым тарзаном. Чего ему больше всего будет не хватать? От совсем чуть-чуть до невыносимо. ','Вы приглашены в храм судьбы в сердце джунглей… вашим соседям за столом приносят сорбет из обезьяньих мозгов. Что приносят вам? От отвратительного до восхитительного. ','Вы оказались в доме с призраками. Изобразите звук, который вам послышался: от слегка подозрительного до леденящего кровь. ','Что бы вы взяли в путешествие через всю сахару? От наиболее нелепого до наиболее полезного предмета. ','Вы играете роль супер злодея в следующем блокбастере, придумайте ваш псевдоним и вашу способность: от самых безобидных до самых ужасающих. ','Вы записали капитана на прослушивание в шоу талантов. Что вы ему посоветуете показать на сцене? От того, что у него точно не получится, до того, в чём он мастер. ','Что вы возьмёте с собой в случае нападения зомби? От наименее полезного до наиболее полезного. ','Прямо за этим столом началась эпидемия зомби. В какой город вы отправитесь? От наиболее близкого места до наиболее удалённого места. ','У капитана есть билеты на поездку вашей мечты, которые он собирается кому-то отдать. Пообещайте ему что-то, чтобы он выбрал вас: от наименее убедительного до наиболее убедительного. ','Вы оказались ночью в джунглях. Изобразите звуки, которые вы слышите: от успокаивающих до леденящих кровь. ','Вы заказали 1 предмет из интернета. Вам звонит курьер и говорит, что произошла ошибка, и вам привезут 1000 таких предметов, что вы пытались заказать? От худшей новости к лучшей новости. ','Назвался груздем полезай в… закончите фразу: от наиболее безобидной до наиболее устрашающей. ','Изобразите, как вы пробуете острое блюдо… от совсем не острого до обжигающего. ','Мистер бонд, если вы не назовёте секретный код, я… закончите фразу: от самой незначительной до самой страшной угрозы. ','Заголовок в жёлтой прессе: «в канаве было найдено тело знаменитости с высоким уровнем алкоголя в крови. Подробнее на странице 12», чью фотографию вы найдёте на странице 12? От наименее вероятного до наиболее вероятного. ','Вы предводительствуете шервинским лесом. Изобразите, как стреляете из лука: от неуклюжего стрелка до робина гуда. ','Вы на первом свидании. Произнесите фразу, которая должна выставить вас в лучшем свете: от худшей фразы к лучшей фразе. ','«чтобы выиграть нобелевскую премию по экологии, я планирую…». Скажите, что вы сделаете: от «я не уверен, что это сработает» до «это очень экологично». ','Коробке из-под игры грустно, потому что вы вот-вот уберёте её на полку, возьмите коробку в руки и скажите что-то: от наименее приободряющего до наиболее приободряющего. ','Какой у вас гороскоп на сегодня? От очень плохого дня до очень хорошего дня. ','В какой стране вы хотели бы провести остаток вашей жизни? От худшей идеи к лучшей идее. ','Вы оказались на боксёрском ринге, с какой знаменитостью (живой или мёртвой) вы будете биться? От «плёвое дело» до «живым я отсюда не выберусь». ','Изобразите сценку: разозлитесь на вашего соседа слева, как будто он непослушный ребенок. От непоседы до «совсем от рук отбился». ','Вы все игроки футбольной команды, и вы собрались 8 раздевалке после матча, опишите ваш лучший финт: от полного провала до ключа к победе. ','Чем вам заняться на выходных со своим 10-летним племянником? От «он вас возненавидит» до «он будет вас обожать». ','Чёрт! Туалетная бумага закончилась! Чем вы воспользуетесь вместо неё? От наименее эффективного до наиболее эффективного. ','Вы только что пересекли финишную черту марафона. Изобразите: от «вы корчитесь от боли» до «легче лёгкого». ','Вы человекоподобный робот. Изобразите ваши движения: от «не очень убедительного робота» до «идеальной копии человека». ','Надо же, как вы нарядились! Но подходит ли ваш наряд для того, чтобы залезть на эверест? Что на вас надето? От наименее подходящей одежды до наиболее подходящей одежды. ','Мужское счастье забуриться в свою мужскую берлогу, устроиться на диване с бутылкой пива в руке и посмотреть по телевизору… закончите: от слегка интересного до вызывающего восторг. ','Скажите: «земля плоская» с разной интонацией. От я не верю в это ни на секунду» до «я в этом уверен». ','Ваше лицо расклеено по всему городу в качестве рекламы продукта, какого продукта? От наименее привлекательного до наиболее привлекательного. ','Вы готовы праздновать день святого валентина. Всё на месте: приглушённый свет, свечи, шампанское и… закончите предложение: от наименее романтичного до наиболее романтичного. ','Ваш сосед испортил воздух. Отреагируйте: от тихого и незаметного до громкого и зловонного. ','Похмелье: как-то утром вы просыпаетесь и узнаёте, что натворили прошлой ночью. Расскажите историю целиком: от самого безобидного инцидента до полной катастрофы. ','На вас напали. Вы хотите удивить грабителя своими навыками боевых искусств. Встаньте в боевую стойку: от наименее правдоподобной до наиболее правдоподобной. ','Назовите место: от такого, которое вы бы срочно хотели покинуть, до такого, где вы бы хотели остаться навсегда. ','Когда вы идёте в гости, что вы берёте с собой? От самого очевидного до самого необычного. ','Вы дарите капитану футболку с надписью. Что написано на футболке? От «он никогда её не наденет» до «он будет носить её каждый день». ','Посмотрите своему соседу справа прямо в глаза и скажите, почему вы расстаётесь с ним: от самой глупой причины до самой серьёзной причины. ','Каким бы животным вы были в следующей жизни? От «ни за что на свете» до «определённо». ','Какой ресторан выбрал бы капитан для первого свидания? От наименее впечатляющего до наиболее впечатляющего. ','Вечер кино! Назовите кино, которое заставляет вас плакать: от пары слез до рыдания в голос. ','Как умирает злодей в конце фильма, который вы смотрите? От самой нелепой смерти до самой трагической смерти. ','Через 10 лет жизнь капитана совершенно изменится! Опишите её: от худшего варианта до лучшего варианта. ','Ваш босс объявил об изменениях в рабочих условиях: от худшего изменения до лучшего изменения. ','Вы создали революционную таблетку, которая защищает вас от любых проблем со здоровьем. Однако у неё есть побочный эффект… какой? От ерунды до серьёзной проблемы. ','Вы зарабатываете на жизнь продажей пылесосов. Что вы говорите, чтобы заинтересовать покупателей? От худшего до лучшего. ','Изобразите, что слушаете музыку в наушниках: от медляка до тяжёлого рока. ','Паспарту запускает вас в новую комнату в форте боярд, опишите это новое задание: от очень приятного до очень жестокого. ','Постучите пальцами по столу: от «очень медленно» до «невероятная ловкость рук». ','Вы капитан вашего собственного корабля. Как вы его назовёте? От наименее подходящего до наиболее подходящего. ','Вы покидаете остров в тихом океане ночью на вёсельной лодке. Вода полна акул и надвигается шторм, какой предмет вам нужен, чтобы выжить? От того, который вряд ли вам поможет в долгосрочной перспективе, до того, с помощью которого вы протянете дольше всего. ','Изобразите свою смерть в фильме: от короткой и безболезненной до растянутой агонии. ','Как бы вы провели романтичный вечер? От худшего к лучшему. ','Какую известную личность (живую или мёртвую) встретит капитан? От худшего сюрприза до лучшего сюрприза. ','Вы на банкете по случаю чьей-то свадьбы, вы встаёте, чтобы произнести тост! Расскажите короткую и неловкую историю о женихе и невесте: от слегка неловкой до «мы позовём охрану и выкинем вас с торжества». ','Вы сидите в компании за столом и пьёте аперитив, что вы принесли закусить или выпить? От самого дешёвого до самого дорогого. ','Придумайте прозвище для другого игрока, состоящее из названия животного и прилагательного: от наиболее милого до ужасно оскорбительного. ','Вы выиграли в лотерею! Прежде чем вы пойдёте и заберёте свой выигрыш, где вы спрячете выигрышный билет? От самого укромного места до самого очевидного места. ','Новое реалити-шоу называется «большой…»: от названия, которое привлечёт наименьшую аудиторию до названия, которое привлечёт наибольшую аудиторию. ','Представьте, что вы только что уронили себе что-то на ногу. Отреагируйте: от чего-то маленького и лёгкого до чего-то очень тяжёлого. ','Опишите воображаемое изобретение: от чего-то совершенно бесполезного до «все захотят его купить». ','Капитан не знает, чем бы заняться в воскресное утро. Посоветуйте ему что-то: от наиболее неприятного до наиболее приятного. ','Капитан оказался профессиональным рестлером! Он стоит в центре ринга в своём забавном костюме. Выкрикните его псевдоним соответствующим тоном: от унизительного до впечатляющего. ','Вы надрессировали свою собаку и теперь она может… закончите фразу: от наименее удивительного до наиболее удивительного! ','Вы пожарный и герой дня, потому что вы бросились в здание, охваченное пламенем, и вышли с… закончите предложение: от наименее героического поступка до наиболее героического поступка. ','Скажите: «мы вышли в финал! ». От «плевать я хотел на этот футбол» до кя самый ярый фанат футбола». ','Изобразите, как вы играете на воображаемой барабанной установке, с соответствующими звуками: от романтической баллады до тяжёлого рока. ','Вы выпрыгнули из самолёта, но вместо парашюта у вас за спиной оказался обычный рюкзак. Что в вашем рюкзаке? От наименее полезного до того, что спасёт вашу жизнь. ','Какой секретный ингредиент добавляют в спринг-роллы? От худшего к лучшему. ','Это невероятный прорыв! Вы изобрели двигатель, который работает на… закончите предложение: от «оригинально, но идея не очень» до «это топливо будущего! ». ','Все игроки вокруг этого стола оказались в заброшенном особняке. На часах полночь, вдруг с чердака доносятся странные звуки… как вы поступите? От сильного испуга до самой смелой реакции. ','Скажите: «привет», используя разную интонацию голоса: от наименее вежливой до наиболее вежливой. ','Победитель лотереи выиграл 5 миллионов долларов и потратил их на… закончите фразу: от наиболее нелепой покупки до хорошего вложения денег. ','Какую игрушку можно найти в детском обеде из ресторана быстрого питания? От худшего, что вы можете себе представить, до того, что точно понравится детям. ','Вы проходите мимо объекта современного искусства. Изобразите свою реакцию: от «я не понимаю, что это» до «как же это потрясающе». ','Ваш лучший друг знакомит вас с его новорождённым ребёнком. Изобразите, что вы думаете: от очень некрасивого ребенка до очаровательного ребёнка. ','Как вы назовёте своего ребёнка? От «он никогда меня не простит» до «его сверстники будут в восторге». ','Вы стоите на пьедестале и вам на шею вешают золотую медаль. Изобразите свою реакцию: от скромности до хвастовства. ','С каким выдуманным персонажем капитан провёл бы 10 часов в самолёте? От поездки, которую хочется забыть, до чудесной поездки. ','Невероятно, но папа римский не может оторваться от… закончите предложение: от наименее вероятного до наиболее вероятного. ','Вы собираетесь прыгнуть с парашютом. Наступила ваша очередь. Встаньте и изобразите, как вы подходите к открытой двери самолёта: от напуганного новичка до профессионального парашютиста. ','Расскажите о своей романтической поездке: от самого худшего сценария до самого лучшего сценария. ','Закончите фразу: «мир был бы лучше, если бы…», от неплохого решения до идеального решения. ','С помощью нового приложения для телефона «воскреситель» вы можете вернуть любую знаменитость к жизни. Кого бы вы выбрали? От худшей идеи до лучшей идеи. ','С кем (реальным или вымышленным) вы бы хотели оказаться на необитаемом острове? От худшего к лучшему. ','Вы гордитесь своим садом и показываете его своим друзьям: «смотрите! В самом центре стоит…», закончите предложение: от ужасного до восхитительного. ','Коробка из-под игры умеет говорить! Возьмите её в руки и поднесите её к уху, что она сказала вам? От самого обидного до самого приятного. ','Ваш сосед сверху сильно шумит… что он делает? От наименее раздражающего до наиболее раздражающего. ','Спойте йодль, традиционное тирольское пение, звучащее как «йодл-айиии-уууу»: от наиболее короткого звука до наиболее длинного звука. ','В загробной жизни капитан будет окружён… закончите фразу: от рая до ада. ','Ваша история посещаемых сайт об была случайно направлена вашему начальнику из-за вируса на вашем компьютере. Какой сайт возглавляет список? От такого, который принесёт вам больше всего неприятностей до такого, который все захотят посетить. ','Вы мэр москвы, какое здание вы возведёте, чтобы увековечить ваше имя в должности? От наименее престижного до наиболее престижного. ','Изобразите, как передаёте воображаемое яйцо другому игроку: от «очень осторожно» до «точно разовьётся». ','Ваша вторая половинка храпит. Как вы это прекратите? От наименее жестокого до наиболее жестокого способа. ','Ваша жена рожает уже более 24 часов и очень измотана, что вы скажете ей? От наименее приободрительного до наиболее приободрительного. ','Вы были лидером президентской гонки, но на поверхность всплыло нечто компрометирующее из вашего прошлого и попало в сми. Что вы натворили? От «я всё равно одержу победу» до «моей карьере конец». ','Вы делаете восковую эпиляцию на какой-то части вашего тела. Издайте соответствующий звук: от наименее болезненной до наиболее болезненной. ','Вы и ваша команда по футболу наконец-то договорились: талисманом вашей команды будет… от наименее впечатляющего до наиболее впечатляющего. ','Вы библиотекарь. Выдайте название книги (настоящей или выдуманной): от той, которую никто никогда не возьмет, до той, за которой выстраиваются очереди. ','Вы вдвоём. В приятном полумраке горят свечи и звучит музыка. Какая? От наименее подходящей до наиболее подходящей. ','Почему вы сегодня опоздали? Объясните причину: от самой банальной до самой невероятной. ','Вы сидите на унитазе… изобразите, как вы тужитесь: от «никаких усилий» до «страшного запора». ','Упс, ваш телефон зазвонил во время рабочего совещания. Какой рингтон стоит на вашем телефоне? От ничем не примечательного до крайне постыдного. ','Вам в дверь позвонил сборщик подписей за местного кандидата. Что вы скажете, чтобы от него избавиться: от вежливого до грубого. '];
		let counter_horn = -1;
		let counter_poop = 0;
		let round_counter = -1;
		let counter_friends;
function StartGame(){	
		counter_friends = Number($("#counterpeople").val());
		if(counter_friends)
		{
			if(counter_friends<=10)
			{
				if(counter_friends>8){
					counter_horn = 8;
				}
				else{counter_horn = counter_friends;}	
				round_counter = counter_friends;
				$( "#counter_poop").append(0);
				$( "#counter_horn").append(counter_horn);
	/*			$("main").append('<div id="addedButtons"></div>');
				var addButtonPoop = $('<div id="topic" class="text-center h_r"></div><input type="button" id = "generateTopic" class="btn btn-lg btn-danger" onClick="addHorn()" value="Востановить справедливость!"/>');
				var addButtonHorn = $('<div id="topic" class="text-center h_r"></div><input type="button" id = "generateTopic" class="btn btn-lg btn-danger" onClick="addPoop()" value="Эх, Ошибся..."/>');
				$("#addedButtons").append(addButtonHorn);
				$("#addedButtons").append(addButtonPoop);*/
				
			}
		}
		else{
			$( "#counter_poop").remove();
			$( "#counter_horn").remove();
		}
		$( "#startGame" ).remove();
		$( "#showShortRules" ).remove();
		$( "#fullRules" ).remove();
		$("#counterFriends").remove()
		$("#word3").remove();
		var nextButton = $('<div id="topic" class="text-center h_r"></div><div id ="nextButton" class="b-pos"><input type="button" id = "generateTopic" class="btn btn-lg btn-danger btn-block" onClick="generateTopic(dictTopic)" value="Следущая тема"/></div>');
		$("main").append(nextButton);
		generateTopic(dictTopic);
		$('html,body').scrollTop(0);
	};
	
function generateTopic(dictTopic){
		$("#topic").empty();
		if(round_counter==0||(counter_horn<=0&&round_counter!=-1)){
			let finish_text = "";
			if(counter_horn <= 0){
				finish_text = 'Это полный провал! Вы же только разогривались?<div class="div-img-finish"><img class = "img-finish" src="img/think.png"></div>';
			}
			else if(counter_poop>counter_horn){
				finish_text = 'Неплохо! Но вам стоит попробовать ещё: в следущий раз у вас точно получится!<div class="div-img-finish"><img class = "img-finish" src="img/drink.png"></div>';
			}
			else if(counter_poop<=counter_horn&&counter_poop>0){
				finish_text = 'Вы настоящие профессионалы!<div class="div-img-finish"><img class = "img-finish" src="img/drunk.png"></div>';
			}
			else{
				finish_text = 'Чемпионы! Вы закончили игру с идеальным счётом! Попробуйте экспертный вариант!<div class="div-img-finish"><img class = "img-finish" src="img/win.png"></div>'
			}
			$("#nextButton").remove();
			$("#topic").append('<div class="talk-bubble tri-right round border left-top topic_style"><div class="talktext"><p>' + finish_text+ "<br></p></div></div>");
			let newPage =  '<button id="fullRules" onclick="window.location.href=\'index.html\'" type="button" class="btn btn-lg btn-block btn-danger b-pos add_btn">Давай по новой!</button>'
			$("main").append(newPage);
			

		}
		else
		{
			var speachRight = "talk-bubble tri-right round border right-top";
			var speachLeft = "talk-bubble tri-right round border left-top";
			bugtrack = [];
			for (i = 0; i < 4; i++) {
				if(dictTopic.length>0)
				{
					topic = dictTopic.splice(Math.floor(Math.random()*dictTopic.length),1);
					bugtrack.push(topic);
			/*		let greenText = topic[0].match(/[^A-Za-zА-Яа-яЁё0-9][Оо]т[^A-Za-zА-Яа-яЁё0-9,"'.](.*)( до | к )/)[1];*/
			/*need write regex*/
					let greenTextTmp = topic[0].split(/[ .«?!][Оо]т /);
					let lastgreenTextTmp = greenTextTmp[greenTextTmp.length-1];
					let greenText = lastgreenTextTmp.replace(/(?!.*( до | к )).*/,'');
					/*let greenText = topic[0].match(/(?!.*( от )).*( до | к)/)[0];*/
				    let redText = topic[0].match(/(?!.*( до | к )).*/)[0];
					topic[0] = topic[0].replace(greenText, '<span class="greentext">$&</span>');
					topic[0] = topic[0].replace(redText.slice(2), '<span class="redtext">$&</span>');
					$("#topic").append('<div class="'+speachLeft+'"><div class="talktext"><p>' + topic[0]+ "<br></p></div></div>");
				}
			};
		}
		if(round_counter>=0){
			round_counter-=1;
		}
		$('html,body').scrollTop(0);

};

function addPoop(){
	if(counter_friends){
		counter_horn -=1;
		counter_poop +=1;
		$( "#counter_poop").empty().append(counter_poop);
		$( "#counter_horn").empty().append(counter_horn);
	}
};
function addHorn(){
	if(counter_friends){
		counter_horn +=1;
		counter_poop -=1;
		$( "#counter_poop").empty().append(counter_poop);
		$( "#counter_horn").empty().append(counter_horn);
	}
};
		
function ShowShortRules(){
	let speachLeft = "talk-bubble tri-right round border left-top topic_style";
	let textRules = 'Игра продолжается столько раундов, сколько игроков. В каждом новом раунде меняется капитан по кругу. Капитан получает случайным образом 4 темы. Затем всем игрокам выдаётся по специальной карте, которая известна только им. Карта содержит номер от 1 до 10. Капитан выбирает и озвучивает одну тему и первым дает ответ, в соответсвие с цифрой на своей карточке и далее по очереди отвечают все остальные. </br></br><span class="redtext">К примеру</span>, тема этого раунда кличка для собаки, нужно придумать от наименее до наиболее страшной. Лесси явно будет милой собачкой, в отличие от Убийцы почтальнонов. <span class="greentext">Главная задача</span> игроков придумать ответ таким образом, чтобы капитан смог в конце раунда распределить ответы от меньшей цифры к большей. А в случае ошибки, ваши жетоны из победной зоны единорогов будут перемещаться в зону какашек. И как только зона единорога опустеет, вы проиграли.</br><img  class = "rules-img" src="img/rules.png">'
	$( "#startGame" ).remove();
	$( "#showShortRules" ).remove();
	$( "#fullRules" ).remove();
	$("#counterFriends").remove()
	$("#word3").empty();
	let newPage =  '<button id="fullRules" onclick="window.location.href=\'index.html\'" type="button" class="btn btn-lg btn-block btn-danger b-pos add_btn">Назад!</button>';
	$("body").append(newPage);
	$("#word3").append('<div class="'+speachLeft+'"><div class="talktext"><p>' + textRules+ "<br></p></div></div>");

	$('html,body').scrollTop(0);
};
