import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import './skills.css';

export  function QueenofPain() {
  return (
    <nav >
      
      <h1 className = 'name'> Queen of Pain </h1>
       <img style = {{height:150}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/queenofpain_full.png?v=6299534?v=6299534'/>
<div className = 'skills' >
  
        
          <TouchableOpacity onPress = {()=>{ return (alert('СПОСОБНОСТЬ: Unit Target\nДЕЙСТВУЕТ: Enemy Units\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Да\nБросает кинжал, который наносит урон при попадании и отравляет цель на [15] сек. Жертва передвигается медленнее и каждые 3.0 сек. получает урон от яда.\nВраг под воздействием этой способности со временем восстанавливает потерянную скорость.\nЕсли здоровье цели упадёт ниже 25%, её смогут добить её же союзники.\nУРОН ОТ ПОПАДАНИЯ: 30 / 60 / 90 / 120\nПЕРИОДИЧЕСКИЙ УРОН: 30 / 50 / 70 / 90\nЗАМЕДЛЕНИЕ ПЕРЕДВИЖЕНИЯ: -20% / -35% / -50% / -65%\nВремя каста: 0.4s\nКулдаун: 16 / 12 / 8 / 4\nМана: 110 / 120 / 130 / 140\nАкаша обожает растягивать страдания жертвы, пронзив её отравленным кинжалом.'))}}>
          <div className = 'MB' > 
      <img style = {{width: 105, height:105}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/queenofpain_shadow_strike_hp1.png?v=6299534'></img> 
         <Text style = {{color:'#fff'}}>  SHADOW STRIKE</Text>
          </div>
          </TouchableOpacity>
                     <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Point Target\nТелепортация на короткую дистанцию, позволяющая ворваться в схватку или быстро из неё сбежать.\nПозволяет сбить с цели многие направленные в героя снаряды.\nДАЛЬНОСТЬ: 1300\nКулдаун: 0.33s\nКулдаун: 15 / 12 / 9 / 6\nМана: 60\nНегласная королева сделала себе имя, не оставляя без боли ни одного подданного.'); }}>
                     <div className = 'blink'>
                       <img style = {{width: 105, height:105}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/queenofpain_blink_hp1.png?v=6299534'/>
                      <Text style = {{color:'#fff'}}>  BLINK</Text>
                     </div>
                     </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: No Target\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nГерой издаёт пронзительный вопль, нанося урон всем врагам поблизости.\nНаносит урон невидимым врагам.\nСнаряд этой способности нельзя сбить с цели.\nУрон: 75 / 150 / 225 / 300\nРАДИУС: 525\nВремя каста: 0s\nКулдаун: 7\nМана: 80 / 100 / 120 / 140\nАкаша одурманивает противников своим сладострастным голосом, когда крадёт их души..')}}>
    <div className = 'conterSpell'>
       <img style = {{width: 105, height:105}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/queenofpain_scream_of_pain_hp1.png?v=6299534'/>
  <Text style = {{color:'#fff'}}>  SCREAM OF PAIN</Text>
  </div>
  </TouchableOpacity >
            <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Point Target\nУРОН: чистый\nСКВОЗЬ НЕВОСПР. К МАГИИ: Yes\nСоздаёт перед героем гигантскую звуковую волну, отталкивающую врагов и наносящую им огромный урон.\nУлучшение Аганимом: Увеличивает урон и уменьшает перезарядку.\nЗадевает существ на расстоянии до 1150 единиц.\nМАКС. ШИРИНА ВОЛНЫ: 450\nУРОН: 340 / 450 / 560\nПЕРЕЗАРЯДКА СО СКИПЕТРОМ: 40.0\nУРОН СО СКИПЕТРОМ: 390 / 500 / 610\nДАЛЬНОСТЬ ОТТАЛКИВАНИЯ: 350\nВремя каста: 0.452s\nКулдаун: 125\nМана: 250 / 400 / 550\nСамая изысканная пытка Акаши — звуковая волна, добивающая её многострадальных противников.')}}><div className = 'ultimate'>
       
       <img style = {{width: 105, height:105}} src = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/queenofpain_sonic_wave_hp1.png?v=629953"/>
            <Text style = {{color:'#fff'}}>  SONIC WAVE</Text>
            </div> </TouchableOpacity>
</div>

<div className = 'itemsHero'>
  <TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Tango\nЦена: 90 \nСъедает дерево, увеличивая восстановление здоровья на 7.0. Действует 16.0 сек. Если съесть деревце от Iron Branch, то восстановится в два раза больше здоровья. Изначально имеет 3 заряда. Можно применить на союзного героя, чтобы дать ему один Tango.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/tango-daa148575735568e612a4d16bb0055cc20ce83849d14d1aac3c54a05ccb1afb3.jpg'/>    
  </TouchableOpacity>
  <TouchableOpacity className = 'early' onPress = {()=>{alert('Slippers of Agility\nЦена: 145\n+ 3 к ловкости\nЛёгкие ботинки, сделанные из кожи паука, обостряют ваше чутьё.')}}>
<img   style = {{width: 86}}  className = 'early' src = 'https://ru.dotabuff.com/assets/items/mantle-of-intelligence-34ec413360674e4471df7af1d5fdae33e9913f678bcf9c649d595d44d2cfd867.jpg'/>    
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Iron Branch\nЦена: 50\n+ 1 ко всем атрибутам\nИспользование: Plant Tree\nСажает в указанное место маленькое счастливое деревце, которое исчезнет через 20 секунд.\nДальность применения: 400\nОбычная, казалось бы, веточка дарует владельцу стойкость железного дерева, с которого она срублена.')}}>
<img   style = {{width: 86}} className = 'early' src = 'https://ru.dotabuff.com/assets/items/iron-branch-e66399d58be2b8b2d34e49dffb7304b82e0b1f06eb606ea50ed1b60bbbf1aad4.jpg'/> 
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Circlet\nЦена: 155 \n+ 2 ко всем атрибутам\nЭлегантная тиара, предназначенная для человеческих принцесс.')}}>
<img  style = {{width: 86}} className = 'early' src = 'https://ru.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg'/>
</TouchableOpacity>
<TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Circlet\nЦена: 155 \n+ 2 ко всем атрибутам\nЭлегантная тиара, предназначенная для человеческих принцесс.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg'/>    
  </TouchableOpacity>
  <TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Faerie Fire\nЦена: 70\n+ 2 к урону\nИспользование: Imbue\nМгновенно восстанавливает 85 здоровья.\nКулдаун: 5\nПризрачное пламя с незатухающих останков Древа доброты горит в любом мире.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/faerie-fire-5949939dff4d93cdd79213c780a35c6be0b86699b56751affea7aeeabb9e05b1.jpg'/>    
  </TouchableOpacity>
  <text className = 'earlyText'> Early game </text>

<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Null Talisman\nЦена: 510\n+ 5 к интеллекту\n+ 2 к силе\n+ 2 к ловкости\n+ 3% к урону от заклинаний\n+ 0.6 к восстановлению маны\nНебольшой драгоценный камень на нескольких цепочках.')}}>
<img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/90/Null_Talisman_icon.png/revision/latest/scale-to-width-down/88?cb=20160530171748'/>
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Null Talisman\nЦена: 510\n+ 5 к интеллекту\n+ 2 к силе\n+ 2 к ловкости\n+ 3% к урону от заклинаний\n+ 0.6 к восстановлению маны\nНебольшой драгоценный камень на нескольких цепочках.')}}>
<img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/90/Null_Talisman_icon.png/revision/latest/scale-to-width-down/88?cb=20160530171748'/>
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Bottle\nЦена: 625\nАктивная: Regenerate\nТратит один заряд, чтобы постепенно восстановить цели 125 здоровья и 75 маны за 2.5 сек. Восстановление прекращается при получении урона от вражеских героев или Рошана.\nЗаряды можно восполнить возле союзного фонтана.\nЗажмите Ctrl, чтобы применить на союзника.\nДальность применения: 350\nПассивная: Store Rune\nВ бутыль можно поместить одну руну, чтобы воспользоваться ей позже. Помещённая в бутыль руна задействуется сама спустя две минуты.\nРуны полностью наполняют бутыль.\nКулдаун: 0.5\nМожно передавать союзникам. Бутыль с руной передать нельзя.\nЕсли курьер несёт неполную бутыль, он передвигается на 30% медленнее.\nСтарая бутыль, пережившая много веков. Любое её содержимое становится зачарованным.')}}>
<img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fa/Bottle_%28Full%29_icon.png/revision/latest/scale-to-width-down/88?cb=20160530164631'/>    
  </TouchableOpacity> 
  <TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Power Treads\nЦена: 1400\n+ 45 к скорости передвижения\n+ 10 к выбранному атрибуту\n+ 25 к скорости атаки\nАктивная: Switch Attribute\nМеняет атрибут, который получает бонус: +10 к силе, ловкости или интеллекту.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nPower Treads можно собрать, используя Belt of Strength, Band of Elvenskin или Robe of the Magi.\nПара сапог, выделанных из жёсткой кожи, способна изменять свои свойства по желанию владельца.')}}>
<img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/6b/Power_Treads_icon.png/revision/latest/scale-to-width-down/88?cb=20160530172508'/>
</TouchableOpacity>
<TouchableOpacity onPress = {()=> {alert('Black King Bar\nЦена: 4,050\n+ 10 к силе\n+ 24 к урону\nАктивная: Avatar\nДаёт невосприимчивость к магии. Длительность уменьшается с каждым использованием.\nДлительность: 10.0 / 9.0 / 8.0 / 7.0 / 6.0 / 5.0\nТип развеивания: нормальное\nКулдаун: 70\nПокупка другого Black King Bar не обновит время его действия.\nИспользование Black King Bar снимает некоторые положительные эффекты.\nМощный посох, наделённый силой гигантов.')}}>
<img  style = {{width: 86}} className = 'mid' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/72/Black_King_Bar_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163925'/>    
  </TouchableOpacity>
  <TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Orchid Malevolence\nЦена: 3,475\n+ 20 к интеллекту\n+ 25 к скорости атаки\n+ 30 к урону\n+ 4.0 к восстановлению маны\nАктивная: Soul Burn\nЗапрещает выбранной цели использовать способности на 5.0 сек. По окончании эффекта жертве наносится магический урон в размере 30.0% от урона, полученного за время действия.\nДальность применения: 900\nКулдаун: 18\nМана: 100\nЭффект можно развеять.\nГранатовый посох, выкованный из сущности огненного демона.')}}>
<img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/ad/Orchid_Malevolence_icon.png/revision/latest/scale-to-width-down/88?cb=20160530172207'/>    
  </TouchableOpacity> 
   <text className = 'midText'> Mid game </text>  


   <TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Scythe of Vyse\nЦена: 5,575\n+ 10 к силе\n+ 10 к ловкости\n+ 35 к интеллекту\n+ 9.0 к восстановлению маны\nАктивная: Hex\nПревращает цель в безобидную зверушку на 3.5 сек. Жертва не может атаковать, применять способности или использовать предметы, а её базовая скорость падает до 140.0.\nМгновенно уничтожает иллюзии.\nДальность применения: 800\nКулдаун: 22\nМана: 250\nЖертва имеет базовую скорость в 140, но не теряет эффекты, дающие максимальную скорость.\nЭффект снимается только сильным развеиванием.\nЭту реликвию, что находится под стражей культа Вайз, жаждет заполучить любой маг.')}}>  
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_ru_gamepedia/images/5/54/Scythe_of_Vyse_icon.png/revision/latest/scale-to-width-down/88?cb=20170816162922'/>       
</TouchableOpacity>
<TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Magic Wand\nЦена: 450\n+ 3 ко всем атрибутам\nАктивная: Energy Charge\nМгновенно восстанавливает 15 здоровья и маны за каждый имеющийся заряд.\nМожет иметь до 20 зарядов. Получает один заряд каждый раз, когда видимый враг в радиусе 1200 использует способность.\nКулдаун: 13\nПолучает заряды, когда видимый враг в радиусе 1200 использует способность.\nПредметы и некоторые способности не добавляют зарядов.\nПростая волшебная палочка, в которой концентрируют магическую энергию начинающие волшебники и великие колдуны.')}}>
<img  className = 'late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/74/Magic_Wand_icon.png/revision/latest/scale-to-width-down/88?cb=20160829124055'/>
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Bottle\nЦена: 625\nАктивная: Regenerate\nТратит один заряд, чтобы постепенно восстановить цели 125 здоровья и 75 маны за 2.5 сек. Восстановление прекращается при получении урона от вражеских героев или Рошана.\nЗаряды можно восполнить возле союзного фонтана.\nЗажмите Ctrl, чтобы применить на союзника.\nДальность применения: 350\nПассивная: Store Rune\nВ бутыль можно поместить одну руну, чтобы воспользоваться ей позже. Помещённая в бутыль руна задействуется сама спустя две минуты.\nРуны полностью наполняют бутыль.\nКулдаун: 0.5\nМожно передавать союзникам. Бутыль с руной передать нельзя.\nЕсли курьер несёт неполную бутыль, он передвигается на 30% медленнее.\nСтарая бутыль, пережившая много веков. Любое её содержимое становится зачарованным.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fa/Bottle_%28Full%29_icon.png/revision/latest/scale-to-width-down/88?cb=20160530164631'/>    
  </TouchableOpacity> 
<TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Power Treads\nЦена: 1400\n+ 45 к скорости передвижения\n+ 10 к выбранному атрибуту\n+ 25 к скорости атаки\nАктивная: Switch Attribute\nМеняет атрибут, который получает бонус: +10 к силе, ловкости или интеллекту.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nPower Treads можно собрать, используя Belt of Strength, Band of Elvenskin или Robe of the Magi.\nПара сапог, выделанных из жёсткой кожи, способна изменять свои свойства по желанию владельца.')}}>
<img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/6b/Power_Treads_icon.png/revision/latest/scale-to-width-down/88?cb=20160530172508'/>
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Black King Bar\nЦена: 4,050\n+ 10 к силе\n+ 24 к урону\nАктивная: Avatar\nДаёт невосприимчивость к магии. Длительность уменьшается с каждым использованием.\nДлительность: 10.0 / 9.0 / 8.0 / 7.0 / 6.0 / 5.0\nТип развеивания: нормальное\nКулдаун: 70\nПокупка другого Black King Bar не обновит время его действия.\nИспользование Black King Bar снимает некоторые положительные эффекты.\nМощный посох, наделённый силой гигантов.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/72/Black_King_Bar_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163925'/>        
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Bloodthorn\nЦена: 6,475\n+ 25 к интеллекту\n+ 90 к скорости атаки\n+ 30 к урону\n+ 5.5 к восстановлению маны\nАктивная: Soul Rend\nЗапрещает выбранной цели использовать способности на 5.0 сек. По окончании эффекта жертве наносится магический урон в размере 30.0% от урона, полученного за время действия.\nПо цели невозможно промахнуться, а все атаки по ней с вероятностью в 100.0% наносят 130.0% урона.\nДальность применения: 900\nКулдаун: 15\nМана: 100\nПостройкам дополнительный урон не наносится.\nЭффект можно развеять.\\nЭтот ненавистный клинок впивается в тело извивающейся жертвы сильнее с каждым её предсмертным движением.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_ru_gamepedia/images/f/f4/Bloodthorn_icon.png/revision/latest/scale-to-width-down/88?cb=20170816162932'/>      
    </TouchableOpacity>
    <text className = 'lateText'> Late game</text>
    </div>



<div className = 'others'>
  <TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Shivas Guard\nЦена: 4,850\n+ 30 к интеллекту\n+ 15 к броне\nАктивная: Arctic Blast\nВыпускает морозную волну, которая наносит противникам 200 магического урона и на 4.0 сек. снижает их скорость передвижения на -40%.\nРадиус: 900\nПассивная: Freezing Aura\nСнижает скорость атаки противников на -45, а их лечение, восстановление здоровья и вампиризм — на 25%.\nРадиус: 1200\nКулдаун: 30\nМана: 100\nВолна распространяется за 2,57сек.\nМорозная волна следует за владельцем.\nЭффект от нескольких Freezing Aura не складывается.\nЭффект можно развеять.\nГоворят, когда-то этот артефакт принадлежал богине, и он не теряет былого могущества по сей день.')}}>
<img  className = 'late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b6/Shiva%27s_Guard_icon.png/revision/latest/scale-to-width-down/88?cb=20160530173326'/>      
   </TouchableOpacity>
  <TouchableOpacity onPress = {()=> {alert('Assault Cuirass\nЦена: 5,075\n+ 30 к скорости атаки\n+ 10 к броне\nПассивная: Assault Aura\nУвеличивает броню союзных построек и существ на 5, а их скорость атаки — на 30. Снижает броню врагов на -5.\nРадиус: 1200\nЭтот жуткий доспех, выкованный в кузнях нижних пределов, способен укрепить и ускорить целую армию.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d3/Assault_Cuirass_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163712'/>    
  </TouchableOpacity>
  <TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Euls Scepter of Divinity\nЦена: 2,725\n+ 10 к интеллекту\n+ 5.0 к восстановлению маны\n+ 20 к скорости передвижения\nАктивная: Cyclone\nПоднимает выбранную цель в воздух, делая её неуязвимой на 2.5 сек. Можно использовать только на себя или противника.\nЕсли применить на врага, то по приземлении он получит 50 магического урона.\nДальность применения: 575\nТип развеивания: нормальное\nКулдаун: 23\nМана: 175\nНельзя применять на союзников.\nИспользование на себя проходит сквозь невосприимчивость к магии.\nИспользование снимает некоторые положительные и отрицательные эффекты.\nЭффект можно развеять.\nЗагадочный скипетр, прошедший сквозь века, позволяет творить своими непокорными ветрами как добрые, так и злые дела.')}}>
<img  className ='late' src= 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/80/Eul%27s_Scepter_of_Divinity_icon.png/revision/latest/scale-to-width-down/88?cb=20160530170259'/>    
</TouchableOpacity>
  <TouchableOpacity onPress = {()=> {alert('Linkens Sphere\nЦена: 4,600\n+ 14 ко всем атрибутам\n+ 7.0 к восстановлению здоровья\n+ 5.0 к восстановлению маны\nПассивная: Spellblock\nБлокирует одну направленную способность каждые 12.0 сек. Некоторые способности не блокируются.\nАктивная: Transfer Spellblock\nВременно отключает пассивную способность предмета, передавая её выбранному союзнику на 12.0 сек.\nДальность применения: 700\nКулдаун: 12\nНекогда эта магическая сфера защитила одного из самых знаменитых героев в истории.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/23/Linken%27s_Sphere_icon.png/revision/latest/scale-to-width-down/88?cb=20160530171144'/>    
  </TouchableOpacity>
  <TouchableOpacity  style = {{width: 86}} className='late' onPress={()=>{alert('Aghanims Scepter\nЦена: 4,200\n+ 10 ко всем атрибутам\n+ 175 к здоровью\n+ 175 к мане\nПассивная: Ability Upgrade\nУлучшает ульт и некоторые способности.\nСкипетр колдуна, мощью сходного с полубогами.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163350'/>       
</TouchableOpacity>
  <text className = 'otherText'> Other</text>
    </div>

    

    <div className = 'Talents'>
      <TouchableOpacity onPress = {()=> {alert('Поглощение направленного заклинания раз в 18.0 сек.\n    25 level\n1.2 сек. страха от Scream of Pain\n\nShadow Strike в радиусе 525 вокруг цели\n    20 level\n+25% к вампиризму заклинаниями\n\n+30 к скорости атаки\n    15 level\n–10% перезарядки заклинаний\n\n+8 к силе\n    10 level\n+20 к урону')}}>
        <img style = {{ width: 150, height: 130 }} src='https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg' />
    </TouchableOpacity>
    <img style={{width:1000}}></img>
    </div>

    <div className='block'>
      <img style={{width:80,  marginBlockStart: 15}} className='' src='https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a6/Shadow_Strike_icon.png/revision/latest/scale-to-width-down/128?cb=20120801075338'/> 
     <div className= 'block1'>1</div>    <div className= 'block1'> </div>    <div className= 'block1'>3</div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>14</div>    <div className= 'block1'></div>   <div className= 'block1'>16</div>   <div className= 'block1'></div>  <div className= 'block1'></div>   
    <img style={{width:80,  marginBlockStart: 15}} src='https://static.wikia.nocookie.net/dota2_gamepedia/images/4/45/Blink_%28Queen_of_Pain%29_icon.png/revision/latest/scale-to-width-down/128?cb=20120801075250'/>
     <div className= 'block1'> </div>     <div className= 'block1'>2</div>   <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>9</div>   <div className= 'block1'>  </div>   <div className= 'block1'>11</div>  <div className= 'block1'>  </div>   <div className= 'block1'>13</div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c8/Scream_of_Pain_icon.png/revision/latest/scale-to-width-down/128?cb=20120801075315'/>
     <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>    <div className= 'block1'>4</div>     <div className= 'block1'>5</div>   <div className= 'block1'> </div>   <div className= 'block1'>7</div>   <div className= 'block1'>8</div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>   <div className= 'block1'></div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = "https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b5/Sonic_Wave_icon.png/revision/latest/scale-to-width-down/128?cb=20120801075327"/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'>6</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>12</div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'>18</div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg'/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>10</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>   <div className= 'block1'>15</div>  <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    </div>
    </nav>
  );
}