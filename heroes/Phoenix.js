import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import './skills.css';

export  function Phoenix() {
  return (
    <nav >
      
      <h1 className = 'name'> Phoenix </h1>
       <img style={{height:150}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/phoenix_full.png?v=6299534?v=6299534'/>
<div className = 'skills' >
  
        
          <TouchableOpacity onPress = {()=>{ return (alert('СПОСОБНОСТЬ: Point Target\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Да\nГерой летит вперёд по дуге, замедляя всех врагов на своём пути и нанося им периодический урон, а затем возвращается в исходную точку. Если применить способность Supernova, полёт прервётся.\nПолёт длится 2(3)сек. Его можно прервать, применив эту способность повторно.\nРАСХОД ЗДОРОВЬЯ: 15%\nДАЛЬНОСТЬ ПОЛЕТА: 1400\nДЛИТЕЛЬНОСТЬ ГОРЕНИЯ: 4.0\nУРОН В СЕКУНДУ: 10 / 30 / 50 / 70\nЗАМЕДЛЕНИЕ ПЕРЕДВИЖЕНИЯ: 19% / 22% / 25% / 28%\nВремя каста: 0.2s\nКулдаун: 36 / 34 / 32 / 30\nМана: 0\nХоть путешествия в космосе этому существу не чужды, полёт под куполом атмосферы приносит ему несравнимое удовольствие.'))}}>
          <div className = 'MB' > 
      <img style = {{width: 105, height:105}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/phoenix_icarus_dive_hp1.png?v=6299534'></img> 
        <Text style = {{color:'#fff'}}>  ICARUS DIVE</Text>
          </div>
          </TouchableOpacity>
                     <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: No Target\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Да\nПризывает 4 огненных духа, которые кружатся вокруг героя. Каждого из них по отдельности можно выпустить в указанную точку. Долетев до неё, дух подожжёт всех противников вокруг себя, нанося им периодический урон и уменьшая их скорость атаки.\nДухи дают обзор по месту попадания на 1 секунду.\nРАСХОД ЗДОРОВЬЯ: 20%\nВРЕМЯ ЖИЗНИ ДУХОВ: 20.0\nОБЛАСТЬ ДЕЙСТВИЯ ДУХА: 175\nДЛИТЕЛЬНОСТЬ ГОРЕНИЯ: 4.0\nЗАМЕДЛЕНИЕ АТАКИ: -80 / -100 / -120 / -140\nУРОН В СЕКУНДУ: 15 / 35 / 55 / 75\nКулдаун: 51 / 44 / 37 / 30\nМана: 120\nНепрерывно сокращающееся звёздное ядро часто испускает скоротечные всплески разумного света.'); }}>
                     <div className = 'blink'>
                       <img style = {{width: 105, height:105}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/phoenix_fire_spirits_hp1.png?v=6299534'/>
                     <Text style = {{color:'#fff'}}>  FIRE SPIRITS</Text>
                     </div>
                     </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Point Target\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Нет\nГерой выпускает из себя луч света ценой собственного здоровья. Луч наносит урон врагам и исцеляет союзников на определенное число плюс процент от общего запаса здоровья. Этот процент тем выше, чем дольше применяется луч.\nШирина луча — 130, длина — 1250.\nДействие заканчивается при оглушении, безмолвии, проклятье, сне или поднятии в воздух.\nАктивация предметов и других способностей не отменяет применение этой способности.\nЗАТРАТЫ ЗДОРОВЬЯ В СЕКУНДУ: 6%\nБАЗОВЫЙ УРОН В СЕКУНДУ: 14 / 20 / 26 / 32\nМАКС. УРОН: 1.5% / 3.25% / 5.0% / 6.75%\nБАЗОВОЕ ЛЕЧЕНИЕ В СЕКУНДУ: 7 / 10 / 13 / 16\nМАКС. ЛЕЧЕНИЕ: 0.625% / 1.25% / 1.875% / 2.5%\nВремя каста: 0.01s\nКулдаун: 30\nМана: 100\nПотоки, что несут энергию звезды, не шире нескольких атомов.')}}>
    <div className = 'conterSpell'>
       <img style = {{width: 105, height:105}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/phoenix_sun_ray_hp1.png?v=6299534'/>
  <Text style = {{color:'#fff'}}>  SUN RAY</Text>
  </div>
  </TouchableOpacity >
            <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: No Target\nДЕЙСТВУЕТ: Allied Heroes\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: Yes\nМОЖНО РАЗВЕЯТЬ: Нет\nГерой прекращает свою жизнь ради шанса переродиться. Он превращается в горящее солнце, которое могут уничтожить атаками вражеские герои. Солнце обжигает врагов в большом радиусе, а спустя [6] сек. взрывается, оглушая всех врагов вокруг. Герой появляется на месте взрыва с полным запасом здоровья, маны и без перезарядки на других способностях.\nТИП РАЗВЕИВАНИЯ: сильное\nУлучшение с Аганимом: Увеличивает число атак для уничтожения солнца, а также позволяет применять эту способность на союзного героя, чтобы переродиться вместе с ним.\nРАДИУС: 1300\nУРОН В СЕКУНДУ: 60 / 90 / 120\nДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ: 2.0 / 2.5 / 3.0\nАТАК ДЛЯ УНИЧТОЖЕНИЯ: 6 / 8 / 10\nАТАК ДЛЯ УНИЧТОЖЕНИЯ СО СКИПЕТРОМ: 7 / 10 / 13\nДАЛЬНОСТЬ ПРИМЕНЕНИЯ СО СКИПЕТРОМ: 500\nВремя каста: 0.01s\nКулдаун: 110\nМана: 200\nСолнечный жар сверхновой звезды может быть смертелен, но из его пламени в бесконечность устремляются всё новые лучи.')}}><div className = 'ultimate'>
       <img style = {{width: 105, height:105}} src = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/phoenix_supernova_hp1.png?v=6299534"/>
            <Text style = {{color:'#fff'}}>  SUPERNOVA</Text>
            </div> </TouchableOpacity>

  
   
</div>





<div className = 'itemsHero'>
  <TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Tango\nЦена: 90 \nСъедает дерево, увеличивая восстановление здоровья на 7.0. Действует 16.0 сек. Если съесть деревце от Iron Branch, то восстановится в два раза больше здоровья. Изначально имеет 3 заряда. Можно применить на союзного героя, чтобы дать ему один Tango.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/tango-daa148575735568e612a4d16bb0055cc20ce83849d14d1aac3c54a05ccb1afb3.jpg'/>    
  </TouchableOpacity>
   <TouchableOpacity className = 'early' onPress={()=>{alert('Iron Branch\nЦена: 50\n+ 1 ко всем атрибутам\nИспользование: Plant Tree\nСажает в указанное место маленькое счастливое деревце, которое исчезнет через 20 секунд.\nДальность применения: 400\nОбычная, казалось бы, веточка дарует владельцу стойкость железного дерева, с которого она срублена.')}}>
<img   style = {{width: 86}} className = 'early' src = 'https://ru.dotabuff.com/assets/items/iron-branch-e66399d58be2b8b2d34e49dffb7304b82e0b1f06eb606ea50ed1b60bbbf1aad4.jpg'/> 
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Iron Branch\nЦена: 50\n+ 1 ко всем атрибутам\nИспользование: Plant Tree\nСажает в указанное место маленькое счастливое деревце, которое исчезнет через 20 секунд.\nДальность применения: 400\nОбычная, казалось бы, веточка дарует владельцу стойкость железного дерева, с которого она срублена.')}}>
<img   style = {{width: 86}} className = 'early' src = 'https://ru.dotabuff.com/assets/items/iron-branch-e66399d58be2b8b2d34e49dffb7304b82e0b1f06eb606ea50ed1b60bbbf1aad4.jpg'/> 
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Healing Salve\nЦена: 110\nИспользование: Salve\nУвеличивает восстановление здоровья выбранного существа на 40. Действует 10 сек.\nВосстановление прекращается, если получить урон от вражеского героя или Рошана.\nДальность применения: 250\nЭффект можно развеять.\nМагическая мазь, которая может быстро исцелить даже самые глубокие раны.')}}>
<img  style = {{width: 86}} className = 'early' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/36/Healing_Salve_icon.png/revision/latest/scale-to-width-down/88?cb=20160530170815'/>
</TouchableOpacity>
<TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Faerie Fire\nЦена: 70\n+ 2 к урону\nИспользование: Imbue\nМгновенно восстанавливает 85 здоровья.\nКулдаун: 5\nПризрачное пламя с незатухающих останков Древа доброты горит в любом мире.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/faerie-fire-5949939dff4d93cdd79213c780a35c6be0b86699b56751affea7aeeabb9e05b1.jpg'/>    
  </TouchableOpacity>
  
  <text className = 'earlyText'> Early game </text> <img></img>
  <TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Magic Wand\nЦена: 450\n+ 3 ко всем атрибутам\nАктивная: Energy Charge\nМгновенно восстанавливает 15 здоровья и маны за каждый имеющийся заряд.\nМожет иметь до 20 зарядов. Получает один заряд каждый раз, когда видимый враг в радиусе 1200 использует способность.\nКулдаун: 13\nПолучает заряды, когда видимый враг в радиусе 1200 использует способность.\nПредметы и некоторые способности не добавляют зарядов.\nПростая волшебная палочка, в которой концентрируют магическую энергию начинающие волшебники и великие колдуны.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/magic-wand-7a4f7e78733470ac31dd40d01c85661493535044e799bc6676971fb90e2ed747.jpg'/>
  </TouchableOpacity>
  <TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Tranquil Boots\nЦена: 925\n+ 70 к скорости передвижения\n+ 14 к восстановлению здоровья\nПассивная: Break\nЕсли владельца атаковало существо или он атаковал героя, то предмет 13 сек. будет восстанавливать на 14 здоровья в секунду меньше, а бонус к скорости передвижения уменьшится до 45.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКулдаун: 13\nХоть эти сапоги и увеличивают живучесть владельца, они не слишком надёжны.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/tranquil-boots-76c5cdb0e48894bdccd475d3547a0ead656741461de4f06feaba182c30467aab.jpg'/>
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress = {()=>{alert('Veil of Discord\nЦена: 1,525\n+ 4 ко всем атрибутам\nАктивная: Magic Weakness\nОслабляет врагов в области радиусом 600, отчего они получают на 18% больше урона от заклинаний.\nДальность применения: 1000\nДлительность: 16.0 сек.\nПассивная: Basilius Aura\nУвеличивает восстановление маны союзников на 1.5.\nРадиус: 1200\nКулдаун: 25\nМана: 50\nЭффект можно развеять.\nГоловной убор испорченных магов.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/veil-of-discord-d4c01d20607b62bbe04fe81544392e44398791284dc3863256a33fd2cc4b8710.jpg'/>   
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress = {()=>{alert('Euls Scepter of Divinity\nЦена: 2,725\n+ 10 к интеллекту\n+ 5.0 к восстановлению маны\n+ 20 к скорости передвижения\nАктивная: Cyclone\nПоднимает выбранную цель в воздух, делая её неуязвимой на 2.5 сек. Можно использовать только на себя или противника.\nЕсли применить на врага, то по приземлении он получит 50 магического урона.\nДальность применения: 575\nТип развеивания: нормальное\nКулдаун: 23\nМана: 175\nНельзя применять на союзников.\nИспользование на себя проходит сквозь невосприимчивость к магии.\nИспользование снимает некоторые положительные и отрицательные эффекты.\nЭффект можно развеять.\nЗагадочный скипетр, прошедший сквозь века, позволяет творить своими непокорными ветрами как добрые, так и злые дела.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/euls-scepter-of-divinity-a918c5d71bdf0c63e6a1d5406bb460d1f317ae6d4a4ffed2980530327fe54d58.jpg'/>  
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress = {()=>{alert('Urn of Shadows\nЦена: 840\n+ 1.5 к восстановлению маны\n+ 2 ко всем атрибутам\n+ 2.0 к броне\nАктивная: Soul Release\nЭффект зависит от выбранной цели: либо увеличивает восстановление здоровья союзника на 30, либо наносит противнику 25 урона в секунду.\nДействует 8.0 сек.\nПолучает заряды каждый раз, когда в радиусе 1400 умирает вражеский герой. Заряд получит только один, ближайший к умершему герою предмет.\nДальность применения: 950\nКулдаун: 7\nПустая урна получает 2 заряда.\nЕсли применить на противника, на которого уже действует этот предмет, длительность эффекта обновится.\nЭффект можно развеять.')}}>
<img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/58/Urn_of_Shadows_icon.png/revision/latest/scale-to-width-down/88?cb=20160530173928'/>    
</TouchableOpacity> 

   <text className = 'midText'> Mid game </text>  <img></img>   
<TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Magic Wand\nЦена: 450\n+ 3 ко всем атрибутам\nАктивная: Energy Charge\nМгновенно восстанавливает 15 здоровья и маны за каждый имеющийся заряд.\nМожет иметь до 20 зарядов. Получает один заряд каждый раз, когда видимый враг в радиусе 1200 использует способность.\nКулдаун: 13\nПолучает заряды, когда видимый враг в радиусе 1200 использует способность.\nПредметы и некоторые способности не добавляют зарядов.\nПростая волшебная палочка, в которой концентрируют магическую энергию начинающие волшебники и великие колдуны.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/magic-wand-7a4f7e78733470ac31dd40d01c85661493535044e799bc6676971fb90e2ed747.jpg'/>
  </TouchableOpacity>  
  <TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Tranquil Boots\nЦена: 925\n+ 70 к скорости передвижения\n+ 14 к восстановлению здоровья\nПассивная: Break\nЕсли владельца атаковало существо или он атаковал героя, то предмет 13 сек. будет восстанавливать на 14 здоровья в секунду меньше, а бонус к скорости передвижения уменьшится до 45.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКулдаун: 13\nХоть эти сапоги и увеличивают живучесть владельца, они не слишком надёжны.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/tranquil-boots-76c5cdb0e48894bdccd475d3547a0ead656741461de4f06feaba182c30467aab.jpg'/>
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Veil of Discord\nЦена: 1,525\n+ 4 ко всем атрибутам\nАктивная: Magic Weakness\nОслабляет врагов в области радиусом 600, отчего они получают на 18% больше урона от заклинаний.\nДальность применения: 1000\nДлительность: 16.0 сек.\nПассивная: Basilius Aura\nУвеличивает восстановление маны союзников на 1.5.\nРадиус: 1200\nКулдаун: 25\nМана: 50\nЭффект можно развеять.\nГоловной убор испорченных магов.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/veil-of-discord-d4c01d20607b62bbe04fe81544392e44398791284dc3863256a33fd2cc4b8710.jpg'/>
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Euls Scepter of Divinity\nЦена: 2,725\n+ 10 к интеллекту\n+ 5.0 к восстановлению маны\n+ 20 к скорости передвижения\nАктивная: Cyclone\nПоднимает выбранную цель в воздух, делая её неуязвимой на 2.5 сек. Можно использовать только на себя или противника.\nЕсли применить на врага, то по приземлении он получит 50 магического урона.\nДальность применения: 575\nТип развеивания: нормальное\nКулдаун: 23\nМана: 175\nНельзя применять на союзников.\nИспользование на себя проходит сквозь невосприимчивость к магии.\nИспользование снимает некоторые положительные и отрицательные эффекты.\nЭффект можно развеять.\nЗагадочный скипетр, прошедший сквозь века, позволяет творить своими непокорными ветрами как добрые, так и злые дела.')}}>
<img  className ='late' src= 'https://ru.dotabuff.com/assets/items/euls-scepter-of-divinity-a918c5d71bdf0c63e6a1d5406bb460d1f317ae6d4a4ffed2980530327fe54d58.jpg'/>    
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Spirit Vessel\nЦена: 2,940\n+ 250 к здоровью\n+ 1.5 к восстановлению маны\n+ 2 ко всем атрибутам\n+ 2.0 к броне\nАктивная: Soul Release\nЭффект зависит от выбранной цели. Если применить на противника, то он будет терять 4.0% от своего текущего запаса здоровья, а также получать на 45% меньше здоровья от любого лечения, восстановления и вампиризма. Помимо этого, способность наносит 35 урона в секунду.\nЕсли применить на союзника, увеличивает его восстановление здоровья на 40 в секунду.\nДействует 8.0 сек.\nПолучает заряды каждый раз, когда в радиусе 1400 умирает вражеский герой. Заряд получит только один, ближайший к умершему герою предмет.\nДальность применения: 950\nКулдаун: 7\nСотворена богом, желавшим изловить души остальных.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2a/Spirit_Vessel_icon.png/revision/latest/scale-to-width-down/86?cb=20171101184152'/>        
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Shivas Guard\nЦена: 4,850\n+ 30 к интеллекту\n+ 15 к броне\nАктивная: Arctic Blast\nВыпускает морозную волну, которая наносит противникам 200 магического урона и на 4.0 сек. снижает их скорость передвижения на -40%.\nРадиус: 900\nПассивная: Freezing Aura\nСнижает скорость атаки противников на -45, а их лечение, восстановление здоровья и вампиризм — на 25%.\nРадиус: 1200\nКулдаун: 30\nМана: 100\nВолна распространяется за 2,57сек.\nМорозная волна следует за владельцем.\nЭффект от нескольких Freezing Aura не складывается.\nЭффект можно развеять.\nГоворят, когда-то этот артефакт принадлежал богине, и он не теряет былого могущества по сей день.')}}>
<img  className = 'late' src = 'https://ru.dotabuff.com/assets/items/shivas-guard-c5ca9a34428ba32ea0600cfdf9db58c92151629057f3a6ccce6016a27f7d6005.jpg'/>      
   </TouchableOpacity>
    <text className = 'lateText'> Late game</text>
    </div>

    <div className = 'others'>
    <TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Heavens Halberd\nЦена: 3,850\n+ 20% к уклонению\n+ 20 к силе\n+ 20% к сопротивлению эффектам\n+ 30% к здоровью от восстановления и вампиризма\nАктивная: Disarm\nЛишает существо сил, отчего оно не может атаковать. Длительность бессилия зависит от типа атаки жертвы: 3.0 сек. в ближнем бою и 5.0 сек. в дальнем бою.\nДальность: 600\nКулдаун: 18\nМана: 100\nЭта алебарда движется со скоростью небольшого клинка, позволяя владельцу одержать победу в тех дуэлях, где более тяжёлое орудие не справилось бы.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/heavens-halberd-a952b98b9cd926388cffad2049730a3682b84c87402f5116f33bb9bcbe0197da.jpg'/>    
  </TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Meteor Hammer\nЦена: 2,350\n+ 8 ко всем атрибутам\n+ 6.5 к восстановлению здоровья\n+ 2.5 к восстановлению маны\nАктивная: Meteor Hammer\nПРЕРЫВАЕМАЯ — призывает метеорит, который после небольшой задержки бьёт по области радиусом 315. Удар наносит урон вражеским существам и постройкам, оглушает их на 1.75 сек. и поджигает, нанося периодический урон в течение 6 сек.\nУрон постройкам при ударе: 75\nПериодический урон постройкам: 50\nУрон существам при ударе: 150\nПериодический урон существам: 90\nВремя применения: 2.5 сек.\nЗадержка после применения: 0.5 сек.\nКулдаун: 24\nМана: 12\nЭтот зачарованный молот сковали из металла, который обнаружили в руинах деревни, уничтоженной великим звездопадом.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/54/Meteor_Hammer_icon.png/revision/latest/scale-to-width-down/88?cb=20171030224231'/>    
  </TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Refresher Orb\nЦена: 5,000\n+ 13 к восстановлению здоровья\n+ 12.0 к восстановлению маны\nАктивная: Reset\nСбрасывает время перезарядки всех ваших предметов и способностей.\nКулдаун: 180\nМана: 375\nМогущественный артефакт, созданный для магов.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/refresher-orb-0a1b1c68e6f6226054633c30ee221d8020800a6800089013781d517343061c9e.jpg'/>    
  </TouchableOpacity>
 
  <text className = 'otherText'> Other</text>
    </div>




    <div className = 'Talents'>
      <TouchableOpacity onPress = {()=> {alert('+1.5% к урону от макс. здоровья у Sun Ray\n    25 level\n+3 к атакам для уничтожения Supernova\n\nSun Ray во время Supernova\n    20 level\n+1100 к дальности Icarus Dive\n\n+500 к здоровью\n    15 level\n+25 к урону в секунду от Fire Spirits\n\n+6% к урону от заклинаний\n    10 level\n+18% к замедлению от Icarus Dive')}}>
        <img style = {{ width: 150, height: 130 }} src='https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg' />
    </TouchableOpacity>
    <img style={{width:1000}}></img>
    </div>

    


    <div className='block'>
      <img style={{width:80,  marginBlockStart: 15}} className='' src='https://static.wikia.nocookie.net/dota2_gamepedia/images/0/00/Icarus_Dive_icon.png/revision/latest/scale-to-width-down/128?cb=20140128194651'/> 
     <div className= 'block1'> </div>     <div className= 'block1'>2</div>   <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>13</div>    <div className= 'block1'>14</div>    <div className= 'block1'></div>   <div className= 'block1'>16</div>   <div className= 'block1'></div>  <div className= 'block1'></div>   
    <img style={{width:80,  marginBlockStart: 15}} src='https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cf/Fire_Spirits_icon.png/revision/latest/scale-to-width-down/128?cb=20140128194659'/>
     <div className= 'block1'>1</div>     <div className= 'block1'> </div>   <div className= 'block1'>3</div>   <div className= 'block1'> </div>     <div className= 'block1'>5</div>   <div className= 'block1'> </div>   <div className= 'block1'>7</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>  <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/df/Sun_Ray_icon.png/revision/latest/scale-to-width-down/128?cb=20140128194638'/>
     <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>    <div className= 'block1'>4</div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>8</div>   <div className= 'block1'>9</div>   <div className= 'block1'>  </div>   <div className= 'block1'>11</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>   <div className= 'block1'></div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = "https://static.wikia.nocookie.net/dota2_gamepedia/images/a/aa/Supernova_icon.png/revision/latest/scale-to-width-down/128?cb=20140128194632"/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'>6</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>12</div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'>18</div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg'/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>10</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'>15</div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    </div>
    </nav>
  );
}




