import React ,{useState}from 'react';
import { Button } from 'react-native';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

import './skills.css';




   export function Lina () {
   return(

     

 
    <nav >
      
      <h1 className = 'name'> Lina </h1>
       <img style = {{height:150}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/lina_full.png?v=6299534?v=6299534'/>
<div className = 'skills' >
  
        
          <TouchableOpacity onPress = {()=>{ return (alert('СПОСОБНОСТЬ: Point Target, Unit Target\nДЕЙСТВУЕТ: Enemy Units\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nГерой высвобождает дыхание дракона, сжигающее всех врагов на своём пути.\nЗадевает существ на расстоянии до 1225 единиц.\nУРОН: 85 / 160 / 235 / 310\nВремя каста: 0.45s\nКулдаун: 8\nМана: 100 / 115 / 130 / 145\nБорясь со скукой в выжженных пустошах Мизрула, волшебница научилась управлять пламенем пустынного дракона.'))}}>
          <div className = 'MB' > 
      <img style = {{width: 105, height:105}} src='https://ru.dotabuff.com/assets/skills/lina-dragon-slave-5040-ba2b453422093dbac3b1a21a8223aa7f077afad4e2283966781f1b60193dbac3.jpg'></img> 
         <Text style = {{color:'#fff'}}>  DRAGON SLAVE</Text>
          </div>
          </TouchableOpacity>
                     <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Point Target\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Сильным развеиванием\nПризывает столб пламени, который оглушает врагов и наносит им урон.\nУничтожает деревья в зоне действия способности.\nРАДИУС: 225\nЗАДЕРЖКА: 0.5\nДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ: 1.6 / 1.9 / 2.2 / 2.5\nУРОН: 80 / 120 / 160 / 200\nВремя каста: 0.45s\nКулдаун: 7\nМана: 100 / 110 / 120 / 130\nСущность волшебницы позволяет ей управлять энергией солнца, воспламеняя воздух взмахом рук.'); }}>
                     <div className = 'blink'>
                       <img style = {{width: 105, height:105}} src='https://ru.dotabuff.com/assets/skills/lina-light-strike-array-5041-060b2eafc9ada75945b8b7d43e961e608de86d3e3cb1e9be79854afe1d781e74.jpg'/>
                      <Text style = {{color:'#fff'}}>  LIGHT STRIKE ARRAY</Text>
                     </div>
                     </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{ alert('ССПОСОБНОСТЬ: Passive\nМОЖНО РАЗВЕЯТЬ: Нет\nУвеличивает скорость атаки и передвижения всякий раз, когда герой применяет способность. Эффекты способности складываются друг с другом. Действует 10 сек.\nПрименение любой другой способности обновляет время действия этой.\nНе срабатывает от использования предметов.\nДОП. СКОРОСТЬ АТАКИ: 40 / 55 / 70 / 85\nДОП. СКОРОСТЬ ПЕРЕДВИЖЕНИЯ: 5% / 6% / 7% / 8%\nМАКС. ЭФФЕКТОВ: 3\nДЛИТЕЛЬНОСТЬ: 10\nПляшущие языки огня воплощают игривую натуру волшебницы, высвобождая её внутреннее пламя.')}}>
    <div className = 'conterSpell'>
       <img style = {{width: 105, height:105}} src = 'https://ru.dotabuff.com/assets/skills/lina-fiery-soul-5042-5fd8ab55924d2446baa4fc5a2672919e2c2a29e09f372c3b616c4a364084ca20.jpg'/>
  <Text style = {{color:'#fff'}}>  FIERY SOUL</Text>
  </div>
  </TouchableOpacity >
            <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Unit Target\nДЕЙСТВУЕТ: Enemy Units\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nВыпускает разряд молнии в одного врага, нанося сокрушительный урон.\nУлучшение Аганимом: Способность наносит чистый урон и проходит сквозь невосприимчивость к магии.\nМежду применением способности и нанесением урона есть задержка в %damage_delay% сек., что даёт возможность избежать урона.\nУРОН: 500 / 700 / 900\nВремя каста: 0.45s\nКулдаун: 70 / 60 / 50\nМана: 280 / 420 / 680\nВоздух вокруг волшебницы становится таким горячим, что он обжигает молнией любого врага, подошедшего слишком близко.')}}><div className = 'ultimate'>
       
       <img style = {{width: 105, height:105}} src = "https://ru.dotabuff.com/assets/skills/lina-laguna-blade-5043-842f1ede3b6136cd6f2166a298885f3b46440346825f3e90940832f984719317.jpg"/>
            <Text style = {{color:'#fff'}}>  LAGUNA BLADE</Text>
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
<TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Euls Scepter of Divinity\nЦена: 2,725\n+ 10 к интеллекту\n+ 5.0 к восстановлению маны\n+ 20 к скорости передвижения\nАктивная: Cyclone\nПоднимает выбранную цель в воздух, делая её неуязвимой на 2.5 сек. Можно использовать только на себя или противника.\nЕсли применить на врага, то по приземлении он получит 50 магического урона.\nДальность применения: 575\nТип развеивания: нормальное\nКулдаун: 23\nМана: 175\nНельзя применять на союзников.\nИспользование на себя проходит сквозь невосприимчивость к магии.\nИспользование снимает некоторые положительные и отрицательные эффекты.\nЭффект можно развеять.\nЗагадочный скипетр, прошедший сквозь века, позволяет творить своими непокорными ветрами как добрые, так и злые дела.')}}>
<img  className ='late' src= 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/80/Eul%27s_Scepter_of_Divinity_icon.png/revision/latest/scale-to-width-down/88?cb=20160530170259'/>    
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Black King Bar\nЦена: 4,050\n+ 10 к силе\n+ 24 к урону\nАктивная: Avatar\nДаёт невосприимчивость к магии. Длительность уменьшается с каждым использованием.\nДлительность: 10.0 / 9.0 / 8.0 / 7.0 / 6.0 / 5.0\nТип развеивания: нормальное\nКулдаун: 70\nПокупка другого Black King Bar не обновит время его действия.\nИспользование Black King Bar снимает некоторые положительные эффекты.\nМощный посох, наделённый силой гигантов.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/72/Black_King_Bar_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163925'/>        
</TouchableOpacity>
   <TouchableOpacity  style = {{width: 86}} className='late' onPress={()=>{alert('Aghanims Scepter\nЦена: 4,200\n+ 10 ко всем атрибутам\n+ 175 к здоровью\n+ 175 к мане\nПассивная: Ability Upgrade\nУлучшает ульт и некоторые способности.\nСкипетр колдуна, мощью сходного с полубогами.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163350'/>       
</TouchableOpacity>
   <text className = 'midText'> Mid game </text>  
   <TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Daedalus\nЦена:5,150\n+ 88 к урону\nПассивная: Critical Strike\nКаждая атака может с вероятностью в 30% нанести 225% урона.\nПостройкам дополнительный урон не наносится.\nОружие невероятной мощи, с которым нелегко управиться даже самому сильному воину.')}}>  
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/24/Daedalus_icon.png/revision/latest/scale-to-width-down/88?cb=20160530165249'/>       
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Monkey King Bar\nЦена: 4,850\n+ 42 к урону\n+ 35 к скорости атаки\nПассивная: Pierce\nКаждая атака может с вероятностью в 75% пройти сквозь уклонение и нанести 100 дополнительного магического урона.\nМогущественный посох, принадлежавший блистательному воину.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b0/Monkey_King_Bar_icon.png/revision/latest/scale-to-width-down/88?cb=20160530171521'/>
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Boots of Travel\nЦена: 2,500\n+ 110 к скорости передвижения\nПЕРЕЗАРЯДКА ТЕЛЕПОРТАЦИИ: 40\nУлучшение Town Portal Scroll\nУлучшает свиток телепортации: он позволяет телепортироваться к существам, перезаряжается быстрее и не расходует заряды.\nОсновные бонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКрылатые сапоги, дарующие вездесущность.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/boots-of-travel-3da37632a51968545a0ee68bf7e644691f8f4b79fe06adf24bb10a5319f66ef0.jpg'/>
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Euls Scepter of Divinity\nЦена: 2,725\n+ 10 к интеллекту\n+ 5.0 к восстановлению маны\n+ 20 к скорости передвижения\nАктивная: Cyclone\nПоднимает выбранную цель в воздух, делая её неуязвимой на 2.5 сек. Можно использовать только на себя или противника.\nЕсли применить на врага, то по приземлении он получит 50 магического урона.\nДальность применения: 575\nТип развеивания: нормальное\nКулдаун: 23\nМана: 175\nНельзя применять на союзников.\nИспользование на себя проходит сквозь невосприимчивость к магии.\nИспользование снимает некоторые положительные и отрицательные эффекты.\nЭффект можно развеять.\nЗагадочный скипетр, прошедший сквозь века, позволяет творить своими непокорными ветрами как добрые, так и злые дела.')}}>
<img  className ='late' src= 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/80/Eul%27s_Scepter_of_Divinity_icon.png/revision/latest/scale-to-width-down/88?cb=20160530170259'/>    
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Black King Bar\nЦена: 4,050\n+ 10 к силе\n+ 24 к урону\nАктивная: Avatar\nДаёт невосприимчивость к магии. Длительность уменьшается с каждым использованием.\nДлительность: 10.0 / 9.0 / 8.0 / 7.0 / 6.0 / 5.0\nТип развеивания: нормальное\nКулдаун: 70\nПокупка другого Black King Bar не обновит время его действия.\nИспользование Black King Bar снимает некоторые положительные эффекты.\nМощный посох, наделённый силой гигантов.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/72/Black_King_Bar_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163925'/>        
</TouchableOpacity>
 <TouchableOpacity  style = {{width: 86}} className='late' onPress={()=>{alert('Aghanims Scepter\nЦена: 4,200\n+ 10 ко всем атрибутам\n+ 175 к здоровью\n+ 175 к мане\nПассивная: Ability Upgrade\nУлучшает ульт и некоторые способности.\nСкипетр колдуна, мощью сходного с полубогами.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163350'/>       
</TouchableOpacity>
    <text className = 'lateText'> Late game</text>
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
  <TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Faerie Fire\nЦена: 70\n+ 2 к урону\nИспользование: Imbue\nМгновенно восстанавливает 85 здоровья.\nКулдаун: 5\nПризрачное пламя с незатухающих останков Древа доброты горит в любом мире.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/faerie-fire-5949939dff4d93cdd79213c780a35c6be0b86699b56751affea7aeeabb9e05b1.jpg'/>    
  </TouchableOpacity>
  <text className = 'earlyText'> Early game </text><img></img>

<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Null Talisman\nЦена: 510\n+ 5 к интеллекту\n+ 2 к силе\n+ 2 к ловкости\n+ 3% к урону от заклинаний\n+ 0.6 к восстановлению маны\nНебольшой драгоценный камень на нескольких цепочках.')}} >
<img  className ='mid' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/null_talisman_lg.png'/>
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Magic Wand\nЦена: 450\n+ 3 ко всем атрибутам\nАктивная: Energy Charge\nМгновенно восстанавливает 15 здоровья и маны за каждый имеющийся заряд.\nМожет иметь до 20 зарядов. Получает один заряд каждый раз, когда видимый враг в радиусе 1200 использует способность.\nКулдаун: 13\nПолучает заряды, когда видимый враг в радиусе 1200 использует способность.\nПредметы и некоторые способности не добавляют зарядов.\nПростая волшебная палочка, в которой концентрируют магическую энергию начинающие волшебники и великие колдуны.')}}>
<img  className ='mid' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/magic_wand_lg.png'/>
</TouchableOpacity>

  <TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Tranquil Boots\nЦена: 925\n+ 70 к скорости передвижения\n+ 14 к восстановлению здоровья\nПассивная: Break\nЕсли владельца атаковало существо или он атаковал героя, то предмет 13 сек. будет восстанавливать на 14 здоровья в секунду меньше, а бонус к скорости передвижения уменьшится до 45.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКулдаун: 13\nХоть эти сапоги и увеличивают живучесть владельца, они не слишком надёжны.')}}>
<img  className ='mid' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tranquil_boots_lg.png'/>   
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Euls Scepter of Divinity\nЦена: 2,725\n+ 10 к интеллекту\n+ 5.0 к восстановлению маны\n+ 20 к скорости передвижения\nАктивная: Cyclone\nПоднимает выбранную цель в воздух, делая её неуязвимой на 2.5 сек. Можно использовать только на себя или противника.\nЕсли применить на врага, то по приземлении он получит 50 магического урона.\nДальность применения: 575\nТип развеивания: нормальное\nКулдаун: 23\nМана: 175\nНельзя применять на союзников.\nИспользование на себя проходит сквозь невосприимчивость к магии.\nИспользование снимает некоторые положительные и отрицательные эффекты.\nЭффект можно развеять.\nЗагадочный скипетр, прошедший сквозь века, позволяет творить своими непокорными ветрами как добрые, так и злые дела.')}}>
<img  className ='late' src= 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/80/Eul%27s_Scepter_of_Divinity_icon.png/revision/latest/scale-to-width-down/88?cb=20160530170259'/>    
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Aether Lens\nЦена: 2,275\n+ 450 к мане\n+ 3.0 к восстановлению маны\nПассивная: Aethereal Focus\nУвеличивает дальность применения способностей и предметов на 250.\nЭффекты от пассивной способности не складываются.\nПодарок хворому сыну, наделённый силой последнего вздоха умирающего мага.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/aether-lens-6fd02713ff2d3d2803f73eee90ab135037f3354415d689b8a415c07c3c57c55b.jpg'/>    
  </TouchableOpacity> 
  
   <text className = 'midText'> Mid game </text> <img></img>  
   <TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Null Talisman\nЦена: 510\n+ 5 к интеллекту\n+ 2 к силе\n+ 2 к ловкости\n+ 3% к урону от заклинаний\n+ 0.6 к восстановлению маны\nНебольшой драгоценный камень на нескольких цепочках.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/null-talisman-6c0884d6f50ef28de27bd936fde33e6829cd8b695073fad08084f65ab5837188.jpg'/>       
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Magic Wand\nЦена: 450\n+ 3 ко всем атрибутам\nАктивная: Energy Charge\nМгновенно восстанавливает 15 здоровья и маны за каждый имеющийся заряд.\nМожет иметь до 20 зарядов. Получает один заряд каждый раз, когда видимый враг в радиусе 1200 использует способность.\nКулдаун: 13\nПолучает заряды, когда видимый враг в радиусе 1200 использует способность.\nПредметы и некоторые способности не добавляют зарядов.\nПростая волшебная палочка, в которой концентрируют магическую энергию начинающие волшебники и великие колдуны.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/magic-wand-7a4f7e78733470ac31dd40d01c85661493535044e799bc6676971fb90e2ed747.jpg'/>
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Tranquil Boots\nЦена: 925\n+ 70 к скорости передвижения\n+ 14 к восстановлению здоровья\nПассивная: Break\nЕсли владельца атаковало существо или он атаковал героя, то предмет 13 сек. будет восстанавливать на 14 здоровья в секунду меньше, а бонус к скорости передвижения уменьшится до 45.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКулдаун: 13\nХоть эти сапоги и увеличивают живучесть владельца, они не слишком надёжны.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/tranquil-boots-76c5cdb0e48894bdccd475d3547a0ead656741461de4f06feaba182c30467aab.jpg'/>
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Euls Scepter of Divinity\nЦена: 2,725\n+ 10 к интеллекту\n+ 5.0 к восстановлению маны\n+ 20 к скорости передвижения\nАктивная: Cyclone\nПоднимает выбранную цель в воздух, делая её неуязвимой на 2.5 сек. Можно использовать только на себя или противника.\nЕсли применить на врага, то по приземлении он получит 50 магического урона.\nДальность применения: 575\nТип развеивания: нормальное\nКулдаун: 23\nМана: 175\nНельзя применять на союзников.\nИспользование на себя проходит сквозь невосприимчивость к магии.\nИспользование снимает некоторые положительные и отрицательные эффекты.\nЭффект можно развеять.\nЗагадочный скипетр, прошедший сквозь века, позволяет творить своими непокорными ветрами как добрые, так и злые дела.')}}>
<img  className ='late' src= 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/80/Eul%27s_Scepter_of_Divinity_icon.png/revision/latest/scale-to-width-down/88?cb=20160530170259'/>    
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Aether Lens\nЦена: 2,275\n+ 450 к мане\n+ 3.0 к восстановлению маны\nПассивная: Aethereal Focus\nУвеличивает дальность применения способностей и предметов на 250.\nЭффекты от пассивной способности не складываются.\nПодарок хворому сыну, наделённый силой последнего вздоха умирающего мага.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/aether-lens-6fd02713ff2d3d2803f73eee90ab135037f3354415d689b8a415c07c3c57c55b.jpg'/>        
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} className='late' onPress={()=>{alert('Aghanims Scepter\nЦена: 4,200\n+ 10 ко всем атрибутам\n+ 175 к здоровью\n+ 175 к мане\nПассивная: Ability Upgrade\nУлучшает ульт и некоторые способности.\nСкипетр колдуна, мощью сходного с полубогами.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163350'/>       
</TouchableOpacity>
    <text className = 'lateText'> Late game</text>
    </div>


    <div className = 'Talents'>
      <TouchableOpacity onPress = {()=> {alert('+150 к дальности атаки\n    25 level\n+–5 сек. перезарядки Dragon Slave\n\n+30/1.5% ускорения за эффект Fiery Soul\n    20 level\n+11% к урону от заклинаний\n\n+110 к урону от Light Strike Array\n    15 level\n+300 к здоровью\n\n+75 к дальности заклинаний\n    10 level\n+30 к урону')}}>
        <img style = {{ width: 150, height: 130 }} src='https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg' />
    </TouchableOpacity>
    <img style={{width:1000}}></img>
    </div>

    <div className='block'>
      <img style={{width:80,  marginBlockStart: 15}} className='' src='https://ru.dotabuff.com/assets/skills/lina-dragon-slave-5040-ba2b453422093dbac3b1a21a8223aa7f077afad4e2283966781f1b60193dbac3.jpg'/> 
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'>3</div>    <div className= 'block1'>4</div>     <div className= 'block1'>5</div>   <div className= 'block1'> </div>   <div className= 'block1'>7</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'></div>   
    <img style={{width:80,  marginBlockStart: 15}} src='https://ru.dotabuff.com/assets/skills/lina-light-strike-array-5041-060b2eafc9ada75945b8b7d43e961e608de86d3e3cb1e9be79854afe1d781e74.jpg'/>
     <div className= 'block1'>1</div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>8</div>   <div className= 'block1'>9</div>   <div className= 'block1'>  </div>   <div className= 'block1'>11</div>  <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/lina-fiery-soul-5042-5fd8ab55924d2446baa4fc5a2672919e2c2a29e09f372c3b616c4a364084ca20.jpg'/>
     <div className= 'block1'> </div>     <div className= 'block1'>2</div>   <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>13</div>    <div className= 'block1'>14</div>   <div className= 'block1'></div>   <div className= 'block1'>16</div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = "https://ru.dotabuff.com/assets/skills/lina-laguna-blade-5043-842f1ede3b6136cd6f2166a298885f3b46440346825f3e90940832f984719317.jpg"/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'>6</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>12</div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'>18</div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg'/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>10</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>   <div className= 'block1'>15</div>  <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    </div>
    </nav>
   );
   };