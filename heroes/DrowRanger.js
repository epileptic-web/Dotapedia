import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import './skills.css';

export  function DrowRanger() {
  return (
    <nav >
      
      <h1 className = 'name'> Drow Ranger </h1>
              <img style = {{height: 150}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/drow_ranger_full.png?v=6432756?v=6432756'/>
<div className = 'skills' >
  
        
          <TouchableOpacity onPress = {()=>{ return (alert('СПОСОБНОСТЬ: Auto-Cast, Unit Target\nДЕЙСТВУЕТ: Enemy Units\nУРОН:физический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Да\nДобавляет к атакам героя замораживающий эффект, замедляющий передвижение цели на [1.5] сек. и наносящий дополнительный урон.\nКаждое попадание обновляет отсчёт до окончания замедления.\nЗАМЕДЛЕНИЕ: -16% / -32% / -48% / -64%\nДОП. УРОН: 5 / 10 / 15 / 20\nВремя каста: 0s\nКулдаун: 0 \nМана: 12\nПокрытые льдом стрелы беззвучно пронзают воздух, насквозь промораживая врагов.'))}}>
          <div className = 'MB' > 
      <img style = {{width: 105, height:105}} src='https://ru.dotabuff.com/assets/skills/drow-ranger-frost-arrows-5019-48a7f186819af575ed444e61d29758efbeed99ea7cdd4660ff07906188684e7e.jpg'></img> 
         <Text style = {{color:'#fff'}}>  POISON ATTACK</Text>
          </div>
          </TouchableOpacity>
                     <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Point Target\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Да\nВыпускает волну, которая отбрасывает вражеских существ и запрещает им колдовать. Чем ближе враг к вам, тем дальше его отбросит.\nШИРИНА: 250\nДЛИТЕЛЬНОСТЬ: 3 / 4 / 5 / 6\nМАКС. ДАЛЬНОСТЬ ТОЛЧКА: 450.0\nПРОДОЛЖИТЕЛЬНОСТЬ ТОЛЧКА: 0.6 / 0.7 / 0.8 / 0.9\nВремя каста: 0.25s\nКулдаун: 16 / 15 / 14 / 13\nМана: 90\nТраксекс предпочитает физический бой магическому, и, взывая к корням своей приёмной расы, запрещает использовать на поле боя любую магию.'); }}>
                     <div className = 'blink'>
                       <img style = {{width: 105, height:105}} src='https://ru.dotabuff.com/assets/skills/drow-ranger-gust-5632-e3eadc9778fad7e2d9e7dc46b8eda2acee7ceaa38e990d42fe79b1ae98187ece.jpg'/>
                      <Text style = {{color:'#fff'}}>  NETHERTOXIN</Text>
                     </div>
                     </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Point Target\nДЕЙСТВУЕТ: Enemy Units\nУРОН: физический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nПРЕРЫВАЕМАЯ — герой выпускает один залп стрел за другим, нанося врагам долю от основного урона и применяя на них усиленную способность Frost Arrows. Действует до [1.75] сек.\nЧИСЛО СТРЕЛ: 12\nДОЛЯ ОТ ОСНОВНОГО УРОНА: 85% / 110% / 135% / 160%\nЗАМЕДЛЕНИЕ ОТ СТРЕЛ: 1.25 / 2.0 / 2.75 / 3.5\nМНОЖИТЕЛЬ ДАЛЬНОСТИ АТАКИ: 2.0\nВремя каста: 0s\nКулдаун: 26 / 24 / 22 / 20\nМана: 50 / 70 / 90 / 110\nКогда лучница была юна, её попытки выпускать сразу несколько стрел считали пустой тратой времени. В войне Древних это умение стало вынужденной необходимостью.')}}>
    <div className = 'conterSpell'>
       <img style = {{width: 105, height:105}} src = 'https://ru.dotabuff.com/assets/skills/drow-ranger-multishot-343-e61a2224c30d27554ec00cfb9e2106cad0b6c789605499691ab2b6dc7f712886.jpg'/>
  <Text style = {{color:'#fff'}}>  MULTISHOT</Text>
  </div>
  </TouchableOpacity >
            <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Passive\nУРОН: физический\тСКВОЗЬ НЕВОСПР. К МАГИИ: Yes\nОпыт в бою позволяет герою стрелять метче и эффективнее. С каждой атакой есть вероятность выпустить стрелу, игнорирующую базовую броню врага. Также даёт герою и союзникам дальнего боя неподалёку дополнительную ловкость, зависящую от ловкости владельца. Способность не действует, если в радиусе 400 от её владельца есть вражеские герои.\nУлучшение Аганимом: Стрелы героя разделяются при попадании, нанося урон случайным существам вокруг цели. Каждая такая стрела считается обычной атакой, но наносит уменьшенный урон.\nАтакой под эффектом этой способности нельзя промахнуться.\nШАНС: 20% / 30% / 40%\nДОП. УРОН ПРИ СРАБАТЫВАНИИ: 70 / 80 / 90\nДОП. ЛОВКОСТЬ: 28% / 36% / 44%\nРАДИУС ДЕЙСТВИЯ: 1200\nДОП. СТРЕЛ СО СКИПЕТРОМ: 2\nСНИЖЕНИЕ УРОНА СО СКИПЕТРОМ: 50%\nТраксекс — воплощение мастерства стрельбы из лука.')}}><div className = 'ultimate'>
       
       <img style = {{width: 105, height:105}} src = "https://ru.dotabuff.com/assets/skills/drow-ranger-marksmanship-5022-34bb635e738fc0de7a900a4cd417ffef3eb3d63bcb49b3ce38d80358639a110b.jpg"/>
            <Text style = {{color:'#fff'}}>  VIPER STRIKE</Text>
            </div> </TouchableOpacity>
</div>

<div className = 'itemsHero'>
  <TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Tango\nЦена: 90 \nСъедает дерево, увеличивая восстановление здоровья на 7.0. Действует 16.0 сек. Если съесть деревце от Iron Branch, то восстановится в два раза больше здоровья. Изначально имеет 3 заряда. Можно применить на союзного героя, чтобы дать ему один Tango.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/tango-daa148575735568e612a4d16bb0055cc20ce83849d14d1aac3c54a05ccb1afb3.jpg'/>    
  </TouchableOpacity>
  <TouchableOpacity className = 'early' onPress = {()=>{alert('Slippers of Agility\nЦена: 145\n+ 3 к ловкости\nЛёгкие ботинки, сделанные из кожи паука, обостряют ваше чутьё.')}}>
<img   style = {{width: 86}}  className = 'early' src = 'https://ru.dotabuff.com/assets/items/slippers-of-agility-b777e3cb2b462098b8471b10d533469c0cba43933e291fddaf83282b000f7149.jpg'/>    
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Iron Branch\nЦена: 50\n+ 1 ко всем атрибутам\nИспользование: Plant Tree\nСажает в указанное место маленькое счастливое деревце, которое исчезнет через 20 секунд.\nДальность применения: 400\nОбычная, казалось бы, веточка дарует владельцу стойкость железного дерева, с которого она срублена.')}}>
<img   style = {{width: 86}} className = 'early' src = 'https://ru.dotabuff.com/assets/items/iron-branch-e66399d58be2b8b2d34e49dffb7304b82e0b1f06eb606ea50ed1b60bbbf1aad4.jpg'/> 
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Circlet\nЦена: 155 \n+ 2 ко всем атрибутам\nЭлегантная тиара, предназначенная для человеческих принцесс.')}}>
<img  style = {{width: 86}} className = 'early' src = 'https://ru.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg'/>
</TouchableOpacity>
<TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Slippers of Agility\nЦена: 145\n+ 3 к ловкости\nЛёгкие ботинки, сделанные из кожи паука, обостряют ваше чутьё.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/slippers-of-agility-b777e3cb2b462098b8471b10d533469c0cba43933e291fddaf83282b000f7149.jpg'/>    
  </TouchableOpacity>
  <text className = 'earlyText'> Early game </text><img></img>

<TouchableOpacity className ='mid' style = {{width: 86}} onPress = {()=>{alert('Wraith Band\nЦена: 510\n+ 5 к ловкости\n+ 2 к силе\n+ 2 к интеллекту\n+ 5 к скорости атаки\n+ 1.5 к броне\nТиара, от которой доносится лёгкий шёпот.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg'/>
</TouchableOpacity>
<TouchableOpacity className ='mid' style = {{width: 86}} onPress = {()=>{alert('Wraith Band\nЦена: 510\n+ 5 к ловкости\n+ 2 к силе\n+ 2 к интеллекту\n+ 5 к скорости атаки\n+ 1.5 к броне\nТиара, от которой доносится лёгкий шёпот.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg'/>
</TouchableOpacity>

  <TouchableOpacity className ='mid' style = {{width: 86}} onPress = {()=>{alert('Power Treads\nЦена: 1400\n+ 45 к скорости передвижения\n+ 10 к выбранному атрибуту\n+ 25 к скорости атаки\nАктивная: Switch Attribute\nМеняет атрибут, который получает бонус: +10 к силе, ловкости или интеллекту.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nPower Treads можно собрать, используя Belt of Strength, Band of Elvenskin или Robe of the Magi.\nПара сапог, выделанных из жёсткой кожи, способна изменять свои свойства по желанию владельца.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/power-treads-ead692931ccfbcbb43f63b29d1282eb21a387e13eea6763a2b4117f8f3efc0cc.jpg'/>   
</TouchableOpacity>
<TouchableOpacity className ='mid' style = {{width: 86}} onPress = {()=>{alert('Hurricane Pike\nЦена: 4,525\n+ 13 к интеллекту\n+ 2.5 к восстановлению здоровья\n+ 20 к ловкости\n+ 15 к силе\nАктивная: Hurricane Thrust\nОтталкивает вражескую цель и владельца друг от друга на расстояние в 450. Если владелец сражается в дальнем бою, то после этого он следующие 5.0 секунд может совершить до 4 атак по цели без ограничения на расстояние. Скорость таких атак увеличена на 100.\nПри использовании на себя или союзников работает как Force Staff.\nДальность применения:\n• На союзников: 550\n• На врагов: 400\nПассивная: Dragons Reach\nУвеличивает дальность атаки героев дальнего боя на 140.\nКулдаун: 23\nМана: 100\nМожно применить на себя.\nНе прерывает действия цели.\nНе работает на существ под воздействием способностей Chronosphere, Duel или Black Hole.\nЛегендарная пика, в далеком прошлом служившая монаршим символом наездников на вивернах.')}}>
<img  className ='mid' src='https://ru.dotabuff.com/assets/items/hurricane-pike-3af50aa5181d94db649e65729a3db1e7b43d8db111964a6b7012d91f468fdb28.jpg'/>  
</TouchableOpacity>
<TouchableOpacity className ='mid' style = {{width: 86}} onPress = {()=>{alert('Manta Style\nЦена: 4,600\n+ 10 к силе\n+ 26 к ловкости\n+ 10 к интеллекту\n+ 12 к скорости атаки\n+ 8% к скорости передвижения\nАктивная: Mirror Image\nСоздаёт 2 иллюзии вашего героя, которые существуют 20 сек.\nИллюзии ближнего боя наносят 33% урона и получают 350% урона.\nИллюзии дальнего боя наносят 28% урона и получают 400% урона.\nУ героев дальнего боя перезаряжается на 15.0 сек. дольше.\nТип развеивания: нормальное\nКулдаун: 45\тМана: 125\nПредмет используется 0.1 сек., во время которой его владелец неуязвим.\nИспользование снимает многие эффекты.\nБонусы к скорости от нескольких предметов на основе Yasha не складываются.\nТопор, созданный из отражающих материалов, которые вызывают смятение во вражеских рядах.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/manta-style-23dd1f7dc982b93e8b7b90ec76fc776fd22d88b94403aecfc4017d37625eea96.jpg'/>    
  </TouchableOpacity> 
   <text className = 'midText'> Mid game </text>  <img></img> 



   <TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Eye of Skadi\nЦена: 5,300\n+ 25 ко всем атрибутам\n+ 225 к здоровью\n+ 250 к мане\nПассивная: Cold Attack\nКаждая атака на 3.0 сек. замедляет передвижение и атаку цели, а также уменьшает её лечение, восстановление здоровья, вампиризм и вампиризм способностями на 40%. Замедление зависит от типа атаки жертвы: у существ дальнего боя замедляет передвижение на -50%, атаку — на -50. У существ ближнего боя замедляет передвижение на -25%, атаку — на -25.\nНевероятно редкий артефакт, охраняемый лазурными драконами.')}}>
<img  className = 'late' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/skadi_lg.png'/>      
    </TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Daedalus\nЦена:5,150\n+ 88 к урону\nПассивная: Critical Strike\nКаждая атака может с вероятностью в 30% нанести 225% урона.\nПостройкам дополнительный урон не наносится.\nОружие невероятной мощи, с которым нелегко управиться даже самому сильному воину.')}}>  
<img  className ='late' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/greater_crit_lg.png'/>       
</TouchableOpacity>
<TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Power Treads\nЦена: 1400\n+ 45 к скорости передвижения\n+ 10 к выбранному атрибуту\n+ 25 к скорости атаки\nАктивная: Switch Attribute\nМеняет атрибут, который получает бонус: +10 к силе, ловкости или интеллекту.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nPower Treads можно собрать, используя Belt of Strength, Band of Elvenskin или Robe of the Magi.\nПара сапог, выделанных из жёсткой кожи, способна изменять свои свойства по желанию владельца.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/power-treads-ead692931ccfbcbb43f63b29d1282eb21a387e13eea6763a2b4117f8f3efc0cc.jpg'/>
</TouchableOpacity>
<TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Hurricane Pike\nЦена: 4,525\n+ 13 к интеллекту\n+ 2.5 к восстановлению здоровья\n+ 20 к ловкости\n+ 15 к силе\nАктивная: Hurricane Thrust\nОтталкивает вражескую цель и владельца друг от друга на расстояние в 450. Если владелец сражается в дальнем бою, то после этого он следующие 5.0 секунд может совершить до 4 атак по цели без ограничения на расстояние. Скорость таких атак увеличена на 100.\nПри использовании на себя или союзников работает как Force Staff.\nДальность применения:\n• На союзников: 550\n• На врагов: 400\nПассивная: Dragons Reach\nУвеличивает дальность атаки героев дальнего боя на 140.\nКулдаун: 23\nМана: 100\nМожно применить на себя.\nНе прерывает действия цели.\nНе работает на существ под воздействием способностей Chronosphere, Duel или Black Hole.\nЛегендарная пика, в далеком прошлом служившая монаршим символом наездников на вивернах.')}}>
<img  className ='late' src='https://ru.dotabuff.com/assets/items/hurricane-pike-3af50aa5181d94db649e65729a3db1e7b43d8db111964a6b7012d91f468fdb28.jpg'/>    
</TouchableOpacity>
<TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Manta Style\nЦена: 4,600\n+ 10 к силе\n+ 26 к ловкости\n+ 10 к интеллекту\n+ 12 к скорости атаки\n+ 8% к скорости передвижения\nАктивная: Mirror Image\nСоздаёт 2 иллюзии вашего героя, которые существуют 20 сек.\nИллюзии ближнего боя наносят 33% урона и получают 350% урона.\nИллюзии дальнего боя наносят 28% урона и получают 400% урона.\nУ героев дальнего боя перезаряжается на 15.0 сек. дольше.\nТип развеивания: нормальное\nКулдаун: 45\тМана: 125\nПредмет используется 0.1 сек., во время которой его владелец неуязвим.\nИспользование снимает многие эффекты.\nБонусы к скорости от нескольких предметов на основе Yasha не складываются.\nТопор, созданный из отражающих материалов, которые вызывают смятение во вражеских рядах.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/manta-style-23dd1f7dc982b93e8b7b90ec76fc776fd22d88b94403aecfc4017d37625eea96.jpg'/>        
</TouchableOpacity>
<TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Butterfly\nЦена: 5,275\n+ 30 к ловкости\n+ 35% к уклонению\n+ 30 к скорости атаки\n+ 25 к урону\nСкладывается по закону убывающей полезности с другими источниками уклонения.\nЭтот клинок могут обуздать лишь самые могучие и опытные воины, но владельцу он даёт невероятное проворство в бою.')}}>
<img  className = 'late' src = 'https://ru.dotabuff.com/assets/items/butterfly-3070714854aa75101fb88872524456b5d8b723f163207b7d1ae51092017f9068.jpg'/>      
   </TouchableOpacity>
    <text className = 'lateText'> Late game</text>
    </div>

    <div className = 'others'>
    <TouchableOpacity order = '1' onPress = {()=> {alert('Ethereal Blade\nЦена: 4,500\n+ 40 к ловкости\n+ 10 к силе\n+ 10 к интеллекту\nАктивная: Ether Blast\nПридаёт цели бесплотную форму, которая полностью защищает от физического урона, но не позволяет атаковать и увеличивает получаемый магический урон на -40%. Действует 4.0 сек. на союзников и 4.0 сек. на врагов.\nТакже замедляет вражескую цель на -80% и наносит ей магический урон в размере 1.5 * ваш основной атрибут + 125.\nДальность применения: 800\nКулдаун: 20\nМана: 100\nИмеет общее время перезарядки с Ghost Scepter.\nСущества в призрачной форме получают на 40% больше магического урона.\nДлится на секунду больше на союзниках и на себе.\nИспользование Town Portal Scroll или Boots of Travel не развеивает бесплотную форму.\nЭффект можно развеять.\nЭтот мерцающий призрачный меч бьёт и и по физическому, и по магическому слою реальности.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/ethereal-blade-d70b20b6ded5b2dabdae9fb61f44d3a0ea22dd81eb4bcd792e442f2b35b5ae47.jpg'/>    
  </TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Black King Bar\nЦена: 4,050\n+ 10 к силе\n+ 24 к урону\nАктивная: Avatar\nДаёт невосприимчивость к магии. Длительность уменьшается с каждым использованием.\nДлительность: 10.0 / 9.0 / 8.0 / 7.0 / 6.0 / 5.0\nТип развеивания: нормальное\nКулдаун: 70\nПокупка другого Black King Bar не обновит время его действия.\nИспользование Black King Bar снимает некоторые положительные эффекты.\nМощный посох, наделённый силой гигантов.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/black-king-bar-fdce6ae49e6393d04aa3e258c70d43ddae5a9eba4fae8d46b5594a69d8f0fe5c.jpg'/>    
  </TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Shadow Blade\nЦена: 3,000\n+ 25 к урону\n+ 35 к скорости атаки\nАктивная: Shadow Walk\nДелает героя невидимым на 14.0 сек. или до момента, когда он совершит атаку или применит способность. Также увеличивает скорость передвижения на 20% и позволяет проходить сквозь существ.\nАтака, прерывающая невидимость, дополнительно нанесёт 175 физического урона.\nКулдаун: 28\nМана: 75\nЗадержка перед невидимостью — 0.3сек.\nЕсли невидимость кончится без атаки, дополнительный урон будет потерян.\nКлинок павшего короля позволяет передвигаться незаметно и наносить удар из тени.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/shadow-blade-06b2b46994817bba626219cb623637c7496a1dad1328bc4c681a6950338e9bf8.jpg'/>    
  </TouchableOpacity>
  <text className = 'otherText'> Other</text>
    </div>


    <div className = 'Talents'>
      <TouchableOpacity onPress = {()=> {alert('–30% перезарядки заклинаний\n    25 level\n+12 к шансу срабатывания Marksmanship\n\n+2.5 сек. безмолвия от Gust\n    20 level\n+28% к урону от Multishot\n\n–6.0 сек. перезарядки Multishot	\n    15 level\n+10 к ловкости\n\n+5 ко всем атрибутам\n    10 level\n+50% к ослеплению от Gust')}}>
        <img style = {{ width: 150, height: 130 }} src='https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg' />
    </TouchableOpacity>
    <img style={{width:1000}}></img>
    </div>

    <div className='block'>
      <img style={{width:80,  marginBlockStart: 15}} className='' src='https://ru.dotabuff.com/assets/skills/drow-ranger-frost-arrows-5019-48a7f186819af575ed444e61d29758efbeed99ea7cdd4660ff07906188684e7e.jpg'/> 
     <div className= 'block1'>1</div>    <div className= 'block1'> </div>    <div className= 'block1'>3</div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>9</div>   <div className= 'block1'>  </div>   <div className= 'block1'>11</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'></div>   
    <img style={{width:80,  marginBlockStart: 15}} src='https://ru.dotabuff.com/assets/skills/drow-ranger-gust-5632-e3eadc9778fad7e2d9e7dc46b8eda2acee7ceaa38e990d42fe79b1ae98187ece.jpg'/>
     <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>8</div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>  <div className= 'block1'>  </div>   <div className= 'block1'>13</div>    <div className= 'block1'>14</div>    <div className= 'block1'></div>   <div className= 'block1'>16</div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/drow-ranger-multishot-343-e61a2224c30d27554ec00cfb9e2106cad0b6c789605499691ab2b6dc7f712886.jpg'/>
     <div className= 'block1'> </div>     <div className= 'block1'>2</div>   <div className= 'block1'> </div>    <div className= 'block1'>4</div>     <div className= 'block1'>5</div>   <div className= 'block1'> </div>   <div className= 'block1'>7</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>   <div className= 'block1'></div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = "https://ru.dotabuff.com/assets/skills/drow-ranger-marksmanship-5022-34bb635e738fc0de7a900a4cd417ffef3eb3d63bcb49b3ce38d80358639a110b.jpg"/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'>6</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>12</div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'>18</div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg'/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>10</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>   <div className= 'block1'>15</div>  <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    </div>
    </nav>
  );
}