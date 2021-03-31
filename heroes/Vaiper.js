import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import './skills.css';

export  function Vaiper() {
  return (
    <nav >
      
      <h1 className = 'name'> Vaiper </h1>
       <img style = {{height:150}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/viper_full.png?v=6299534?v=6299534'/>
<div className = 'skills' >
  
        
          <TouchableOpacity onPress = {()=>{ return (alert('СПОСОБНОСТЬ: Auto-Cast, Unit Target\nДЕЙСТВУЕТ: Вражеские юниты\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: Нет\nМОЖНО РАЗВЕЯТЬ: Да\nДобавляет к обычной атаке героя яд, уменьшающий скорость передвижения и сопротивление магии, а также наносящий периодический урон. Эффект яда складывается до 5 раз.\nДЛИТЕЛЬНОСТЬ: 4.0\nУРОН В СЕКУНДУ: 4 / 8 / 12 / 16\nЗАМЕДЛЕНИЕ ПЕРЕДВИЖЕНИЯ: 6% / 8% / 10% / 12%\nСОПРОТИВЛЕНИЕ МАГИИ: 3% / 5% / 7% / 9%\nМАКСИМУМ ЭФФЕКТОВ: 5\nВремя каста: 0s\nКулдаун: 0\nМана: 25\nВрождённое ядовитое дыхание низших драконов быстро высасывает жизненные силы жертвы.'))}}>
          <div className = 'MB' > 
      <img style = {{width: 105, height:105}} src='https://ru.dotabuff.com/assets/skills/viper-poison-attack-5218-027b16c504dd75d469e08500bc1e1ee9fab5ddb2f5b40d0e385210a99e8c62ca.jpg'></img> 
         <Text style = {{color:'#fff'}}>  POISON ATTACK</Text>
          </div>
          </TouchableOpacity>
                     <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ:Point Target\nУРОН:магический\nСКВОЗЬ НЕВОСПР. К МАГИИ:No\nГерой покрывает землю низшим токсином. Противники в отравленной области получают периодический урон, увеличивающийся со временем пребывания в ней, а их пассивные способности не работают.\nМИН. УРОН В СЕКУНДУ: 15 / 20 / 25 / 30\nМАКС. УРОН В СЕКУНДУ: 80 / 100 / 120 / 140\nМАКС. ДЛИТЕЛЬНОСТЬ ДЕЙСТВИЯ УРОНА: 4.0\nРАДИУС: 400\nДЛИТЕЛЬНОСТЬ: 8.0\nВремя каста: 0.2s\nКулдаун: \nМана: 70 / 80 / 90 / 100\nЯд нижних пределов делает смертельной каждую рану, каждую немощь.'); }}>
                     <div className = 'blink'>
                       <img style = {{width: 105, height:105}} src='https://ru.dotabuff.com/assets/skills/viper-nethertoxin-5219-ea9eba46defde035a654ed8b18694f1cf29077181515a0f3cc9fc44fcfb739d5.jpg'/>
                      <Text style = {{color:'#fff'}}>  NETHERTOXIN</Text>
                     </div>
                     </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ:Passive\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Да\nЕсли враг на расстоянии до 1400 нанесёт герою урон, то отравится заразным ядом, который наносит урон и замедляет атаки. Также способность увеличивает сопротивление магическому урону.\nПеремножается с другими источниками сопротивления магическому урону.\nДЛИТЕЛЬНОСТЬ: 4.0\nЗАМЕДЛЕНИЕ АТАКИ: 8 / 16 / 24 / 32\nСОПРОТИВЛЕНИЕ МАГИИ: 10% / 15% / 20% / 25%\nУРОН В СЕКУНДУ: 8 / 16 / 24 / 32\nМАКС. ДАЛЬНОСТЬ ДЕЙСТВИЯ: 1400\nРжавеющие прямо в руках щиты и мечи — обычное дело для тех, кто посмеет напасть на низшего дракона.')}}>
    <div className = 'conterSpell'>
       <img style = {{width: 105, height:105}} src = 'https://ru.dotabuff.com/assets/skills/viper-corrosive-skin-5220-5df44679d7e3e6c62c7ccffd7a49c70799530502b39736526e96a84445478ba6.jpg'/>
  <Text style = {{color:'#fff'}}>  CORROSIVE SKIN</Text>
  </div>
  </TouchableOpacity >
            <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ:Unit Target\nДЕЙСТВУЕТ: Enemy Units\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: Yes\nМОЖНО РАЗВЕЯТЬ: Нет\nЗамедляет скорость атаки и передвижения выбранного врага, при этом нанося ему периодический урон. Скорость цели постепенно восстанавливается.\nУлучшение Аганимом: Уменьшает расход маны и перезарядку.Увеличивает дальность применения.\nДЛИТЕЛЬНОСТЬ: 5.0\nУРОН В СЕКУНДУ: 80 / 120 / 160\nЗАМЕДЛЕНИЕ ПЕРЕДВИЖЕНИЯ: -40% / -60% / -80%\nЗАМЕДЛЕНИЕ АТАКИ: -40 / -60 / -80\nРАСХОД МАНЫ СО СКИПЕТРОМ: 125\nПЕРЕЗАРЯДКА СО СКИПЕТРОМ: 10.0\nДАЛЬНОСТЬ СО СКИПЕТРОМ: 900\nВремя каста: 0.3s\nКулдаун: 50 / 40 / 30 \nМана: 125 / 175 / 250\nКогда-то жестокого мага погубил самый опасный из ядов его питомца. Теперь же этот яд течёт по венам любого, кто дерзнёт противостоять низшему дракону.')}}><div className = 'ultimate'>
       
       <img style = {{width: 105, height:105}} src = "https://ru.dotabuff.com/assets/skills/viper-viper-strike-5221-a93cc2bfb0b7d72f8b3c36b91d1e029de5e5b08e62941150d4347af858b9f59b.jpg"/>
            <Text style = {{color:'#fff'}}>  VIPER STRIKE</Text>
            </div> </TouchableOpacity>
</div>

<div className = 'itemsHero'>
  <TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Tango\nЦена: 90 \nСъедает дерево, увеличивая восстановление здоровья на 7.0. Действует 16.0 сек. Если съесть деревце от Iron Branch, то восстановится в два раза больше здоровья. Изначально имеет 3 заряда. Можно применить на союзного героя, чтобы дать ему один Tango.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tango_lg.png'/>   
  </TouchableOpacity>  
  <TouchableOpacity className = 'early' onPress = {()=>{alert('Slippers of Agility\nЦена: 145\n+ 3 к ловкости\nЛёгкие ботинки, сделанные из кожи паука, обостряют ваше чутьё.')}}>
<img   style = {{width: 86}}  className = 'early' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/slippers_lg.png'/>    
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Iron Branch\nЦена: 50\n+ 1 ко всем атрибутам\nИспользование: Plant Tree\nСажает в указанное место маленькое счастливое деревце, которое исчезнет через 20 секунд.\nДальность применения: 400\nОбычная, казалось бы, веточка дарует владельцу стойкость железного дерева, с которого она срублена.')}}>
<img   style = {{width: 86}} className = 'early' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/branches_lg.png'/> 
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Circlet\nЦена: 155 \n+ 2 ко всем атрибутам\nЭлегантная тиара, предназначенная для человеческих принцесс.')}}>
<img  style = {{width: 86}} className = 'early' src = 'https://ru.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg'/>
</TouchableOpacity>
<TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Observer Ward\nЦена: Бесплатно\nИспользование: Plant\nУстанавливает невидимый тотем наблюдения, который даёт наземный обзор в радиусе 1400. Действует 6 мин.\nМожно передать один вард союзному герою, зажав клавишу Ctrl.\nДальность установки: 500\nКулдаун: 1\nВид полуразумного растения, который часто разводят начинающие волшебники.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/observer-ward-83cf10251bdc481b64577b1a22f793f26d736cada9f91b45b2c5b033c1e4f116.jpg'/>    
  </TouchableOpacity>
  <text className = 'earlyText'> Early game </text><img></img>

<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Wraith Band\nЦена: 510\n+ 5 к ловкости\n+ 2 к силе\n+ 2 к интеллекту\n+ 5 к скорости атаки\n+ 1.5 к броне\nТиара, от которой доносится лёгкий шёпот.')}}>
<img  className ='mid' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/wraith_band_lg.png'/>
</TouchableOpacity>
  <TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Power Treads\nЦена: 1400\n+ 45 к скорости передвижения\n+ 10 к выбранному атрибуту\n+ 25 к скорости атаки\nАктивная: Switch Attribute\nМеняет атрибут, который получает бонус: +10 к силе, ловкости или интеллекту.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nPower Treads можно собрать, используя Belt of Strength, Band of Elvenskin или Robe of the Magi.\nПара сапог, выделанных из жёсткой кожи, способна изменять свои свойства по желанию владельца')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/power-treads-ead692931ccfbcbb43f63b29d1282eb21a387e13eea6763a2b4117f8f3efc0cc.jpg'/>   
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Rod of Atos\nЦена: 2,750\n+ 20 к интеллекту\n+ 10 к силе\n+ 10 к ловкости\nАктивная: Cripple\nНа 2.0 сек. накладывает на цель оцепенение.\nДальность применения: 1100\nКулдаун: 18\nМана: 50\nЭффект можно развеять.\nВ этом простом на первый взгляд жезле заключено естество владыки чумы Атоса.')}}>
<img  className ='mid' src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/rod_of_atos_lg.png?3'/>  
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Hurricane Pike\nЦена: 4,525\n+ 13 к интеллекту\n+ 2.5 к восстановлению здоровья\n+ 20 к ловкости\n+ 15 к силе\nАктивная: Hurricane Thrust\nОтталкивает вражескую цель и владельца друг от друга на расстояние в 450. Если владелец сражается в дальнем бою, то после этого он следующие 5.0 секунд может совершить до 4 атак по цели без ограничения на расстояние. Скорость таких атак увеличена на 100.\nПри использовании на себя или союзников работает как Force Staff.\nДальность применения:\n• На союзников: 550\n• На врагов: 400\nПассивная: Dragons Reach\nУвеличивает дальность атаки героев дальнего боя на 140.\nКулдаун: 23\nМана: 100\nМожно применить на себя.\nНе прерывает действия цели.\nНе работает на существ под воздействием способностей Chronosphere, Duel или Black Hole.\nЛегендарная пика, в далеком прошлом служившая монаршим символом наездников на вивернах.')}}>
<img  className ='late' src = 'https://images.wikia.com/dota2_gamepedia/images/thumb/archive/1/13/20160530170926%21Hurricane_Pike_icon.png/88px-Hurricane_Pike_icon.png'/>
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Black King Bar\nЦена: 4,050\n+ 10 к силе\n+ 24 к урону\nАктивная: Avatar\nДаёт невосприимчивость к магии. Длительность уменьшается с каждым использованием.\nДлительность: 10.0 / 9.0 / 8.0 / 7.0 / 6.0 / 5.0\nТип развеивания: нормальное\nКулдаун: 70\nПокупка другого Black King Bar не обновит время его действия.\nИспользование Black King Bar снимает некоторые положительные эффекты.\nМощный посох, наделённый силой гигантов.')}}>
<img  className ='late' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/black_king_bar_lg.png?3'/>        
</TouchableOpacity>
   <text className = 'midText'> Mid game </text>   <img></img>


   <TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Wraith Band\nЦена: 510\n+ 5 к ловкости\n+ 2 к силе\n+ 2 к интеллекту\n+ 5 к скорости атаки\n+ 1.5 к броне\nТиара, от которой доносится лёгкий шёпот.')}}>
<img  className ='late' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/wraith_band_lg.png'/>       
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Boots of Travel\nЦена: 2,500\n+ 110 к скорости передвижения\nПЕРЕЗАРЯДКА ТЕЛЕПОРТАЦИИ: 40\nУлучшение Town Portal Scroll\nУлучшает свиток телепортации: он позволяет телепортироваться к существам, перезаряжается быстрее и не расходует заряды.\nОсновные бонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКрылатые сапоги, дарующие вездесущность.')}}>
<img  className ='late' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/travel_boots_lg.png?'/>
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Rod of Atos\nЦена: 2,750\n+ 20 к интеллекту\n+ 10 к силе\n+ 10 к ловкости\nАктивная: Cripple\nНа 2.0 сек. накладывает на цель оцепенение.\nДальность применения: 1100\nКулдаун: 18\nМана: 50\nЭффект можно развеять.\nВ этом простом на первый взгляд жезле заключено естество владыки чумы Атоса.')}}>
<img  className ='late' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/rod_of_atos_lg.png?3'/>    
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Hurricane Pike\nЦена: 4,525\n+ 13 к интеллекту\n+ 2.5 к восстановлению здоровья\n+ 20 к ловкости\n+ 15 к силе\nАктивная: Hurricane Thrust\nОтталкивает вражескую цель и владельца друг от друга на расстояние в 450. Если владелец сражается в дальнем бою, то после этого он следующие 5.0 секунд может совершить до 4 атак по цели без ограничения на расстояние. Скорость таких атак увеличена на 100.\nПри использовании на себя или союзников работает как Force Staff.\nДальность применения:\n• На союзников: 550\n• На врагов: 400\nПассивная: Dragons Reach\nУвеличивает дальность атаки героев дальнего боя на 140.\nКулдаун: 23\nМана: 100\nМожно применить на себя.\nНе прерывает действия цели.\nНе работает на существ под воздействием способностей Chronosphere, Duel или Black Hole.\nЛегендарная пика, в далеком прошлом служившая монаршим символом наездников на вивернах.')}}>
<img  className ='late' src = 'https://images.wikia.com/dota2_gamepedia/images/thumb/archive/1/13/20160530170926%21Hurricane_Pike_icon.png/88px-Hurricane_Pike_icon.png'/>
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Black King Bar\nЦена: 4,050\n+ 10 к силе\n+ 24 к урону\nАктивная: Avatar\nДаёт невосприимчивость к магии. Длительность уменьшается с каждым использованием.\nДлительность: 10.0 / 9.0 / 8.0 / 7.0 / 6.0 / 5.0\nТип развеивания: нормальное\nКулдаун: 70\nПокупка другого Black King Bar не обновит время его действия.\nИспользование Black King Bar снимает некоторые положительные эффекты.\nМощный посох, наделённый силой гигантов.')}}>
<img  className ='late' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/black_king_bar_lg.png?3'/>        
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Butterfly\nЦена: 5,275\n+ 30 к ловкости\n+ 35% к уклонению\n+ 30 к скорости атаки\n+ 25 к урону\nСкладывается по закону убывающей полезности с другими источниками уклонения.\nЭтот клинок могут обуздать лишь самые могучие и опытные воины, но владельцу он даёт невероятное проворство в бою.')}}>
<img  className ='late' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/butterfly_lg.png'/>      
    </TouchableOpacity>
    <text className = 'lateText'> Late game</text>
    </div>


<div className = 'others'>
    <TouchableOpacity order = '1' onPress = {()=> {alert('Pipe of Insight\nЦена: 3,425\n+ 8.5 к восстановлению здоровья\n+ 30% к сопротивлению магии\nАктивная: Barrier\nСоздаёт на владельце и окружающих его союзниках барьер, блокирующий 400 магического урона. Действует 12 сек.\nРадиус: 1200\nПассивная: Insight Aura\nДействует на союзников вокруг. Увеличивает их восстановление здоровья на 2.0 и сопротивление магии на 10%.\nРадиус: 1200\nКулдаун: 60\nМана: 100\nЭффект от нескольких Barrier не складывается.\nСочетается по закону убывающей полезности с другими источниками сопротивления магии.\nМогущественный артефакт таинственного происхождения. Он создаёт барьеры, защищающие от магических сил.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/pipe_lg.png'/>    
  </TouchableOpacity>
  <TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Sange and Yasha\nЦена: 4,100\n+ 16 к силе\n+ 16 к ловкости\n+ 20% к сопротивлению эффектам\n+ 16 к скорости атаки\n+ 10% к скорости передвижения\n+ 30% к здоровью от восстановления и вампиризма\nБонусы к скорости от нескольких предметов на основе Yasha не складываются.\nSange и Yasha, собранные вместе и ведомые лунным светом, становятся грозным оружием.')}}>
<img  className ='late' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/sange_and_yasha_lg.png?3'/>        
</TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Guardian Greaves\nЦена: 4,975\n+ 50 к скорости передвижения\n+ 250 к мане\n+ 4 к броне\nАктивная: Mend\nВосстанавливает 300 здоровья и 200 маны всем союзникам вокруг, а также снимает с владельца большинство отрицательных эффектов.\nРадиус: 1200\nТип развеивания: нормальное\nПассивная: Guardian Aura\nУвеличивает восстановление здоровья союзников на 2.5 и их броню на 3.0. Союзным героям с уровнем здоровья ниже 20% аура восстанавливает 16 здоровья в секунду и увеличивает броню на 10.\nРадиус: 1200\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКулдаун: 40\nАура усиливается только на героях.\nОдин из множества священных инструментов, созданных во славу Всезнания.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/guardian_greaves_lg.png?3'/>    
  </TouchableOpacity>
  <TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Heavens Halberd\nЦена: 3,850\n+ 20% к уклонению\n+ 20 к силе\n+ 20% к сопротивлению эффектам\n+ 30% к здоровью от восстановления и вампиризма\nАктивная: Disarm\nЛишает существо сил, отчего оно не может атаковать. Длительность бессилия зависит от типа атаки жертвы: 3.0 сек. в ближнем бою и 5.0 сек. в дальнем бою.\nДальность: 600\nКулдаун: 18\nМана: 100\nЭта алебарда движется со скоростью небольшого клинка, позволяя владельцу одержать победу в тех дуэлях, где более тяжёлое орудие не справилось бы.')}}>
<img  className ='mid' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/heavens_halberd_lg.png'/>    
  </TouchableOpacity> 
  <TouchableOpacity order = '1' onPress = {()=> {alert('Aghanims Scepter\nЦена: 4,200\n+ 10 ко всем атрибутам\n+ 175 к здоровью\n+ 175 к мане\nПассивная: Ability Upgrade\nУлучшает ульт и некоторые способности.\nСкипетр колдуна, мощью сходного с полубогами.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ultimate_scepter_lg.png'/>    
  </TouchableOpacity>

  <text className = 'otherText'> Other</text>
    </div>



    <div className = 'Talents'>
      <TouchableOpacity onPress = {()=> {alert('Poison Attack действует на постройки\n    25 level\nNethertoxin запрещает применять способности\n\n+70 к урону\n    20 level\n+80 к урону в секунду от Viper Strike\n\n+5 к показателям Corrosive Skin\n    15 level\n+100 к дальности атаки\n\n+8% к вампиризму заклинаниями\n    10 level\n+20 к скорости атаки')}}>
        <img style = {{ width: 150, height: 130 }} src='https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg' />
    </TouchableOpacity>
    <img style={{width:1000}}></img>
    </div>

    <div className='block'>
      <img style={{width:80,  marginBlockStart: 15}} className='' src='https://ru.dotabuff.com/assets/skills/viper-poison-attack-5218-027b16c504dd75d469e08500bc1e1ee9fab5ddb2f5b40d0e385210a99e8c62ca.jpg'/> 
     <div className= 'block1'>1</div>    <div className= 'block1'> </div>    <div className= 'block1'>3</div>    <div className= 'block1'> </div>     <div className= 'block1'>5</div>   <div className= 'block1'> </div>   <div className= 'block1'>7</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>   
    <img style={{width:80,  marginBlockStart: 15}} src='https://ru.dotabuff.com/assets/skills/viper-nethertoxin-5219-ea9eba46defde035a654ed8b18694f1cf29077181515a0f3cc9fc44fcfb739d5.jpg'/>
     <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>8</div>   <div className= 'block1'>9</div>   <div className= 'block1'>  </div>   <div className= 'block1'>11</div>  <div className= 'block1'>  </div>   <div className= 'block1'>13</div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/viper-corrosive-skin-5220-5df44679d7e3e6c62c7ccffd7a49c70799530502b39736526e96a84445478ba6.jpg'/>
     <div className= 'block1'> </div>     <div className= 'block1'>2</div>   <div className= 'block1'> </div>    <div className= 'block1'>4</div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>14</div>   <div className= 'block1'></div>   <div className= 'block1'>16</div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = "https://ru.dotabuff.com/assets/skills/viper-viper-strike-5221-a93cc2bfb0b7d72f8b3c36b91d1e029de5e5b08e62941150d4347af858b9f59b.jpg"/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'>6</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>12</div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'>18</div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg'/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>10</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'>15</div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    </div>
    </nav>
  );
}
