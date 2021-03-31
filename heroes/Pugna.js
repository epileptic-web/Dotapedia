import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import './skills.css';

export  function Pugna() {
  return (
    <nav >
      
      <h1 className = 'name'> Pugna </h1>
       <img style = {{height:150}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/pugna_full.png?v=6299534?v=6299534'/>
<div className = 'skills' >
  
        
          <TouchableOpacity onPress = {()=>{ return (alert('СПОСОБНОСТЬ: Point Target, Unit Target\nДЕЙСТВУЕТ: Enemy Units\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nГерой высвобождает дыхание дракона, сжигающее всех врагов на своём пути.\nЗадевает существ на расстоянии до 1225 единиц.\nУРОН: 85 / 160 / 235 / 310\nВремя каста: 0.45s\nКулдаун: 8\nМана: 100 / 115 / 130 / 145\nБорясь со скукой в выжженных пустошах Мизрула, волшебница научилась управлять пламенем пустынного дракона.'))}}>
          <div className = 'MB' > 
      <img style = {{width: 105, height:105}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/pugna_nether_blast_hp1.png?v=6299534'></img> 
         <Text style = {{color:'#fff'}}>  NETHER BLAST</Text>
          </div>
          </TouchableOpacity>
                     <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Point Target\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Сильным развеиванием\nПризывает столб пламени, который оглушает врагов и наносит им урон.\nУничтожает деревья в зоне действия способности.\nРАДИУС: 225\nЗАДЕРЖКА: 0.5\nДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ: 1.6 / 1.9 / 2.2 / 2.5\nУРОН: 80 / 120 / 160 / 200\nВремя каста: 0.45s\nКулдаун: 7\nМана: 100 / 110 / 120 / 130\nСущность волшебницы позволяет ей управлять энергией солнца, воспламеняя воздух взмахом рук.'); }}>
                     <div className = 'blink'>
                       <img style = {{width: 105, height:105}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/pugna_decrepify_hp1.png?v=6299534'/>
                      <Text style = {{color:'#fff'}}>  DECREPIFY</Text>
                     </div>
                     </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{ alert('ССПОСОБНОСТЬ: Passive\nМОЖНО РАЗВЕЯТЬ: Нет\nУвеличивает скорость атаки и передвижения всякий раз, когда герой применяет способность. Эффекты способности складываются друг с другом. Действует 10 сек.\nПрименение любой другой способности обновляет время действия этой.\nНе срабатывает от использования предметов.\nДОП. СКОРОСТЬ АТАКИ: 40 / 55 / 70 / 85\nДОП. СКОРОСТЬ ПЕРЕДВИЖЕНИЯ: 5% / 6% / 7% / 8%\nМАКС. ЭФФЕКТОВ: 3\nДЛИТЕЛЬНОСТЬ: 10\nПляшущие языки огня воплощают игривую натуру волшебницы, высвобождая её внутреннее пламя.')}}>
    <div className = 'conterSpell'>
       <img style = {{width: 105, height:105}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/pugna_nether_ward_hp1.png?v=6299534'/>
  <Text style = {{color:'#fff'}}>  NETHER WARD</Text>
  </div>
  </TouchableOpacity >
            <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Unit Target\nДЕЙСТВУЕТ: Enemy Units\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nВыпускает разряд молнии в одного врага, нанося сокрушительный урон.\nУлучшение Аганимом: Способность наносит чистый урон и проходит сквозь невосприимчивость к магии.\nМежду применением способности и нанесением урона есть задержка в %damage_delay% сек., что даёт возможность избежать урона.\nУРОН: 500 / 700 / 900\nВремя каста: 0.45s\nКулдаун: 70 / 60 / 50\nМана: 280 / 420 / 680\nВоздух вокруг волшебницы становится таким горячим, что он обжигает молнией любого врага, подошедшего слишком близко.')}}><div className = 'ultimate'>
       
       <img style = {{width: 105, height:105}} src = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/pugna_life_drain_hp1.png?v=6299534"/>
            <Text style = {{color:'#fff'}}>  LIFE DRAIN</Text>
            </div> </TouchableOpacity>
</div>

<div className = 'itemsHero'>
  <TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Tango\nЦена: 90 \nСъедает дерево, увеличивая восстановление здоровья на 7.0. Действует 16.0 сек. Если съесть деревце от Iron Branch, то восстановится в два раза больше здоровья. Изначально имеет 3 заряда. Можно применить на союзного героя, чтобы дать ему один Tango.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/tango-daa148575735568e612a4d16bb0055cc20ce83849d14d1aac3c54a05ccb1afb3.jpg'/>    
  </TouchableOpacity>
  <TouchableOpacity className = 'early' onPress = {()=>{alert('Slippers of Agility\nЦена: 145\n+ 3 к ловкости\nЛёгкие ботинки, сделанные из кожи паука, обостряют ваше чутьё.')}}>
<img   style = {{width: 86}}  className = 'early' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cf/Mantle_of_Intelligence_icon.png/revision/latest/scale-to-width-down/88?cb=20160530171312'/>    
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Iron Branch\nЦена: 50\n+ 1 ко всем атрибутам\nИспользование: Plant Tree\nСажает в указанное место маленькое счастливое деревце, которое исчезнет через 20 секунд.\nДальность применения: 400\nОбычная, казалось бы, веточка дарует владельцу стойкость железного дерева, с которого она срублена.')}}>
<img   style = {{width: 86}} className = 'early' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a3/Iron_Branch_icon.png/revision/latest/scale-to-width-down/88?cb=20160530171055'/> 
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Circlet\nЦена: 155 \n+ 2 ко всем атрибутам\nЭлегантная тиара, предназначенная для человеческих принцесс.')}}>
<img  style = {{width: 86}} className = 'early' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/28/Circlet_icon.png/revision/latest/scale-to-width-down/88?cb=20160530165058'/>
</TouchableOpacity>
<TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Circlet\nЦена: 155 \n+ 2 ко всем атрибутам\nЭлегантная тиара, предназначенная для человеческих принцесс.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/28/Circlet_icon.png/revision/latest/scale-to-width-down/88?cb=20160530165058'/>    
  </TouchableOpacity>
  <TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Faerie Fire\nЦена: 70\n+ 2 к урону\nИспользование: Imbue\nМгновенно восстанавливает 85 здоровья.\nКулдаун: 5\nПризрачное пламя с незатухающих останков Древа доброты горит в любом мире.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/54/Faerie_Fire_icon.png/revision/latest/scale-to-width-down/88?cb=20160530170344'/>    
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
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Aether Lens\nЦена: 2,275\n+ 450 к мане\n+ 3.0 к восстановлению маны\nПассивная: Aethereal Focus\nУвеличивает дальность применения способностей и предметов на 250.\nЭффекты от пассивной способности не складываются.\nПодарок хворому сыну, наделённый силой последнего вздоха умирающего мага.')}}>
<img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d4/Aether_Lens_icon.png/revision/latest/scale-to-width-down/88?cb=20200307133528'/>    
  </TouchableOpacity> 
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Aeon Disk\nЦена: 3,100\n+ 300 к здоровью\n+ 300 к мане\nПассивная: Combo Breaker\nЕсли здоровье владельца упадёт ниже 70%, он получит магический щит, который сильным очищением развеет большинство эффектов, а также на 2.5 сек. увеличит сопротивление эффектам на 75% и не даст наносить или получать урон. Срабатывает только от урона игроков.\nКулдаун: 105\nМогущественный артефакт, давным-давно, как поговаривают, выкраденный из Белого инкубатория.')}}>
<img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2b/Aeon_Disk_icon.png/revision/latest/scale-to-width-down/88?cb=20171101184000'/>        
</TouchableOpacity>
   <TouchableOpacity  style = {{width: 86}} className='late' onPress={()=>{alert('Dagon (5-й уровень)\nЦена: 7,850\n+ 6 / 8 / 10 / 12 / 14 ко всем атрибутам\nАктивная: Energy Burst\nВыпускает мощный всплеск энергии, наносящий магический урон выбранному вражескому существу.\nУрон: 400 / 500 / 600 / 700 / 800\nДальность применения: 600 / 650 / 700 / 750 / 800\nКулдаун: 35 / 30 / 25 / 20 / 15\nМана: 120 / 140 / 160 / 180 / 200\nМгновенно убивает иллюзии.\nВолшебная палочка, которая со временем становится лишь сильнее, наделяет владельца магией на кончиках пальцев.')}}>
<img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/70/Dagon_5_icon.png/revision/latest/scale-to-width-down/88?cb=20160530165449'/>       
</TouchableOpacity>
   <text className = 'midText'> Mid game </text>  


   <TouchableOpacity  style = {{width: 86}} className='late' onPress={()=>{alert('Aghanims Scepter\nЦена: 4,200\n+ 10 ко всем атрибутам\n+ 175 к здоровью\n+ 175 к мане\nПассивная: Ability Upgrade\nУлучшает ульт и некоторые способности.\nСкипетр колдуна, мощью сходного с полубогами.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163350'/>       
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Boots of Travel\nЦена: 2,500\n+ 110 к скорости передвижения\nПЕРЕЗАРЯДКА ТЕЛЕПОРТАЦИИ: 40\nУлучшение Town Portal Scroll\nУлучшает свиток телепортации: он позволяет телепортироваться к существам, перезаряжается быстрее и не расходует заряды.\nОсновные бонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКрылатые сапоги, дарующие вездесущность.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/6d/Boots_of_Travel_1_icon.png/revision/latest/scale-to-width-down/88?cb=20160530164348'/>
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Bottle\nЦена: 625\nАктивная: Regenerate\nТратит один заряд, чтобы постепенно восстановить цели 125 здоровья и 75 маны за 2.5 сек. Восстановление прекращается при получении урона от вражеских героев или Рошана.\nЗаряды можно восполнить возле союзного фонтана.\nЗажмите Ctrl, чтобы применить на союзника.\nДальность применения: 350\nПассивная: Store Rune\nВ бутыль можно поместить одну руну, чтобы воспользоваться ей позже. Помещённая в бутыль руна задействуется сама спустя две минуты.\nРуны полностью наполняют бутыль.\nКулдаун: 0.5\nМожно передавать союзникам. Бутыль с руной передать нельзя.\nЕсли курьер несёт неполную бутыль, он передвигается на 30% медленнее.\nСтарая бутыль, пережившая много веков. Любое её содержимое становится зачарованным.')}}>
<img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fa/Bottle_%28Full%29_icon.png/revision/latest/scale-to-width-down/88?cb=20160530164631'/>    
  </TouchableOpacity> 
 <TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Aether Lens\nЦена: 2,275\n+ 450 к мане\n+ 3.0 к восстановлению маны\nПассивная: Aethereal Focus\nУвеличивает дальность применения способностей и предметов на 250.\nЭффекты от пассивной способности не складываются.\nПодарок хворому сыну, наделённый силой последнего вздоха умирающего мага.')}}>
<img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d4/Aether_Lens_icon.png/revision/latest/scale-to-width-down/88?cb=20200307133528'/>    
  </TouchableOpacity> 
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Aeon Disk\nЦена: 3,100\n+ 300 к здоровью\n+ 300 к мане\nПассивная: Combo Breaker\nЕсли здоровье владельца упадёт ниже 70%, он получит магический щит, который сильным очищением развеет большинство эффектов, а также на 2.5 сек. увеличит сопротивление эффектам на 75% и не даст наносить или получать урон. Срабатывает только от урона игроков.\nКулдаун: 105\nМогущественный артефакт, давным-давно, как поговаривают, выкраденный из Белого инкубатория.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2b/Aeon_Disk_icon.png/revision/latest/scale-to-width-down/88?cb=20171101184000'/>        
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} className='late' onPress={()=>{alert('Dagon (5-й уровень)\nЦена: 7,850\n+ 6 / 8 / 10 / 12 / 14 ко всем атрибутам\nАктивная: Energy Burst\nВыпускает мощный всплеск энергии, наносящий магический урон выбранному вражескому существу.\nУрон: 400 / 500 / 600 / 700 / 800\nДальность применения: 600 / 650 / 700 / 750 / 800\nКулдаун: 35 / 30 / 25 / 20 / 15\nМана: 120 / 140 / 160 / 180 / 200\nМгновенно убивает иллюзии.\nВолшебная палочка, которая со временем становится лишь сильнее, наделяет владельца магией на кончиках пальцев.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/70/Dagon_5_icon.png/revision/latest/scale-to-width-down/88?cb=20160530165449'/>       
</TouchableOpacity>
    <text className = 'lateText'> Late game</text>
    </div>




    <div className = 'itemsHero'>
  <TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Tango\nЦена: 90 \nСъедает дерево, увеличивая восстановление здоровья на 7.0. Действует 16.0 сек. Если съесть деревце от Iron Branch, то восстановится в два раза больше здоровья. Изначально имеет 3 заряда. Можно применить на союзного героя, чтобы дать ему один Tango.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fd/Tango_icon.png/revision/latest/scale-to-width-down/88?cb=20160530173658'/>    
  </TouchableOpacity>
  <TouchableOpacity className = 'early' onPress = {()=>{alert('Slippers of Agility\nЦена: 145\n+ 3 к ловкости\nЛёгкие ботинки, сделанные из кожи паука, обостряют ваше чутьё.')}}>
<img   style = {{width: 86}}  className = 'early' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cf/Mantle_of_Intelligence_icon.png/revision/latest/scale-to-width-down/88?cb=20160530171312'/>    
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Iron Branch\nЦена: 50\n+ 1 ко всем атрибутам\nИспользование: Plant Tree\nСажает в указанное место маленькое счастливое деревце, которое исчезнет через 20 секунд.\nДальность применения: 400\nОбычная, казалось бы, веточка дарует владельцу стойкость железного дерева, с которого она срублена.')}}>
<img   style = {{width: 86}} className = 'early' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a3/Iron_Branch_icon.png/revision/latest/scale-to-width-down/88?cb=20160530171055'/> 
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Circlet\nЦена: 155 \n+ 2 ко всем атрибутам\nЭлегантная тиара, предназначенная для человеческих принцесс.')}}>
<img  style = {{width: 86}} className = 'early' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/28/Circlet_icon.png/revision/latest/scale-to-width-down/88?cb=20160530165058'/>
</TouchableOpacity>
  <TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Faerie Fire\nЦена: 70\n+ 2 к урону\nИспользование: Imbue\nМгновенно восстанавливает 85 здоровья.\nКулдаун: 5\nПризрачное пламя с незатухающих останков Древа доброты горит в любом мире.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/54/Faerie_Fire_icon.png/revision/latest/scale-to-width-down/88?cb=20160530170344'/>    
  </TouchableOpacity>
  <text className = 'earlyText'> Early game </text><img></img>

<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Null Talisman\nЦена: 510\n+ 5 к интеллекту\n+ 2 к силе\n+ 2 к ловкости\n+ 3% к урону от заклинаний\n+ 0.6 к восстановлению маны\nНебольшой драгоценный камень на нескольких цепочках.')}} >
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/null-talisman-6c0884d6f50ef28de27bd936fde33e6829cd8b695073fad08084f65ab5837188.jpg'/>
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Magic Wand\nЦена: 450\n+ 3 ко всем атрибутам\nАктивная: Energy Charge\nМгновенно восстанавливает 15 здоровья и маны за каждый имеющийся заряд.\nМожет иметь до 20 зарядов. Получает один заряд каждый раз, когда видимый враг в радиусе 1200 использует способность.\nКулдаун: 13\nПолучает заряды, когда видимый враг в радиусе 1200 использует способность.\nПредметы и некоторые способности не добавляют зарядов.\nПростая волшебная палочка, в которой концентрируют магическую энергию начинающие волшебники и великие колдуны.')}}>
<img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/74/Magic_Wand_icon.png/revision/latest/scale-to-width-down/88?cb=20160829124055'/>
</TouchableOpacity>

  <TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Tranquil Boots\nЦена: 925\n+ 70 к скорости передвижения\n+ 14 к восстановлению здоровья\nПассивная: Break\nЕсли владельца атаковало существо или он атаковал героя, то предмет 13 сек. будет восстанавливать на 14 здоровья в секунду меньше, а бонус к скорости передвижения уменьшится до 45.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКулдаун: 13\nХоть эти сапоги и увеличивают живучесть владельца, они не слишком надёжны.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/tranquil-boots-76c5cdb0e48894bdccd475d3547a0ead656741461de4f06feaba182c30467aab.jpg'/>   
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Glimmer Cape\nЦена: 1,900\n+ 20 к скорости атаки\n+ 15% к сопротивлению магии\nАктивная: Glimmer\nС задержкой в 0.6 сек. накладывает на героя или выбранного союзника невидимость и увеличивает сопротивление магии на 45%. Действует 5.0 сек.\nДальность применения: 550\nНе останавливает прерываемые способности.\nКулдаун: 14\nМана: 90\nЭффект можно развеять.\nУкраденная накидка великого иллюзиониста.')}}>
<img  className ='late' src= 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/ce/Glimmer_Cape_icon.png/revision/latest/scale-to-width-down/88?cb=20160530170610'/>    
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Aether Lens\nЦена: 2,275\n+ 450 к мане\n+ 3.0 к восстановлению маны\nПассивная: Aethereal Focus\nУвеличивает дальность применения способностей и предметов на 250.\nЭффекты от пассивной способности не складываются.\nПодарок хворому сыну, наделённый силой последнего вздоха умирающего мага.')}}>
<img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d4/Aether_Lens_icon.png/revision/latest/scale-to-width-down/88?cb=20200307133528'/>    
  </TouchableOpacity> 
  
   <text className = 'midText'> Mid game </text> <img></img>  
   <TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Null Talisman\nЦена: 510\n+ 5 к интеллекту\n+ 2 к силе\n+ 2 к ловкости\n+ 3% к урону от заклинаний\n+ 0.6 к восстановлению маны\nНебольшой драгоценный камень на нескольких цепочках.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/null-talisman-6c0884d6f50ef28de27bd936fde33e6829cd8b695073fad08084f65ab5837188.jpg'/>       
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Magic Wand\nЦена: 450\n+ 3 ко всем атрибутам\nАктивная: Energy Charge\nМгновенно восстанавливает 15 здоровья и маны за каждый имеющийся заряд.\nМожет иметь до 20 зарядов. Получает один заряд каждый раз, когда видимый враг в радиусе 1200 использует способность.\nКулдаун: 13\nПолучает заряды, когда видимый враг в радиусе 1200 использует способность.\nПредметы и некоторые способности не добавляют зарядов.\nПростая волшебная палочка, в которой концентрируют магическую энергию начинающие волшебники и великие колдуны.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/74/Magic_Wand_icon.png/revision/latest/scale-to-width-down/88?cb=20160829124055'/>
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Tranquil Boots\nЦена: 925\n+ 70 к скорости передвижения\n+ 14 к восстановлению здоровья\nПассивная: Break\nЕсли владельца атаковало существо или он атаковал героя, то предмет 13 сек. будет восстанавливать на 14 здоровья в секунду меньше, а бонус к скорости передвижения уменьшится до 45.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКулдаун: 13\nХоть эти сапоги и увеличивают живучесть владельца, они не слишком надёжны.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/tranquil-boots-76c5cdb0e48894bdccd475d3547a0ead656741461de4f06feaba182c30467aab.jpg'/>
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Glimmer Cape\nЦена: 1,900\n+ 20 к скорости атаки\n+ 15% к сопротивлению магии\nАктивная: Glimmer\nС задержкой в 0.6 сек. накладывает на героя или выбранного союзника невидимость и увеличивает сопротивление магии на 45%. Действует 5.0 сек.\nДальность применения: 550\nНе останавливает прерываемые способности.\nКулдаун: 14\nМана: 90\nЭффект можно развеять.\nУкраденная накидка великого иллюзиониста.')}}>
<img  className ='late' src= 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/ce/Glimmer_Cape_icon.png/revision/latest/scale-to-width-down/88?cb=20160530170610'/>    
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Aether Lens\nЦена: 2,275\n+ 450 к мане\n+ 3.0 к восстановлению маны\nПассивная: Aethereal Focus\nУвеличивает дальность применения способностей и предметов на 250.\nЭффекты от пассивной способности не складываются.\nПодарок хворому сыну, наделённый силой последнего вздоха умирающего мага.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d4/Aether_Lens_icon.png/revision/latest/scale-to-width-down/88?cb=20200307133528'/>        
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} className='late' onPress={()=>{alert('Aghanims Scepter\nЦена: 4,200\n+ 10 ко всем атрибутам\n+ 175 к здоровью\n+ 175 к мане\nПассивная: Ability Upgrade\nУлучшает ульт и некоторые способности.\nСкипетр колдуна, мощью сходного с полубогами.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163350'/>       
</TouchableOpacity>
    <text className = 'lateText'> Late game</text>
    </div>


    <div className = 'Talents'>
      <TouchableOpacity onPress = {()=> {alert('+1.5 к урону за единицу маны от Nether Ward\n    25 level\n+160 к урону от Nether Blast\n\n+1.5 сек. действия Decrepify\n    20 level\n+20% лечения от Life Drain\n\n+3.0 к атакам для уничтожения Nether Ward\n    15 level\n–0.8 сек. перезарядки Nether Blast\n\n+175 к здоровью	\n    10 level\n+15 к скорости передвижения')}}>
        <img style = {{ width: 150, height: 130 }} src='https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg' />
    </TouchableOpacity>
    <img style={{width:1000}}></img>
    </div>

    <div className='block'>
      <img style={{width:80,  marginBlockStart: 15}} className='' src='https://static.wikia.nocookie.net/dota2_gamepedia/images/1/12/Nether_Blast_icon.png/revision/latest/scale-to-width-down/128?cb=20111006061820'/> 
     <div className= 'block1'>1</div>    <div className= 'block1'> </div>    <div className= 'block1'>3</div>    <div className= 'block1'> </div>     <div className= 'block1'>5</div>   <div className= 'block1'> </div>   <div className= 'block1'>7</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'></div>   
    <img style={{width:80,  marginBlockStart: 15}} src='https://static.wikia.nocookie.net/dota2_ru_gamepedia/images/c/c9/Decrepify_icon.png/revision/latest/scale-to-width-down/128?cb=20170816084959'/>
     <div className= 'block1'> </div>     <div className= 'block1'>2</div>   <div className= 'block1'> </div>    <div className= 'block1'>4</div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>8</div>   <div className= 'block1'>9</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>  <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fa/Nether_Ward_icon.png/revision/latest/scale-to-width-down/128?cb=20111006061823'/>
     <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>11</div>   <div className= 'block1'>  </div>   <div className= 'block1'>13</div>    <div className= 'block1'>14</div>   <div className= 'block1'></div>   <div className= 'block1'>16</div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = "https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a7/Life_Drain_icon.png/revision/latest/scale-to-width-down/128?cb=20111006061825"/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'>6</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>12</div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'>18</div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg'/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>10</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>   <div className= 'block1'>15</div>  <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    </div>
    </nav>
  );
}
