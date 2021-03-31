import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import './skills.css';

export  function EarthShaker() {

   const [skill, setState] = useState(true);
  return (
    <nav >
      
      <h1 className = 'name' style = {{marginBlock: 50}}>  Earth Shaker</h1>
       <img  style = {{height:150}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/earthshaker_full.png?v=6299534?v=6299534' /> 


 <TouchableOpacity  style = {{marginRight:0}} onPress = {()=>{setState(!skill) } } >Hello world </TouchableOpacity>  
{ 
  skill ? 
  <div className = 'skills' >
  
        
          <TouchableOpacity onPress = {()=>{ return (alert('СПОСОБНОСТЬ: Point Target\nДЕЙСТВУЕТ: Enemy Units\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Сильным развеиванием\nГерой разбивает землю могучим тотемом, оставляя перед собой непроходимую каменную борозду, при этом оглушая стоящих на её пути врагов и нанося им урон.\nУРОН: 110 / 160 / 210 / 260\nДЛИНА БОРОЗДЫ: 1400\nДЛИТЕЛЬНОСТЬ БОРОЗДЫ: 6.5 / 7.0 / 7.5 / 8.0\nДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ: 1.0 / 1.25 / 1.5 / 1.75\nCВремя каста: 0.69s\nКулдаун: 21 / 19 / 17 / 15\nМана: 110 / 130 / 150 / 170\nСилою земли нишианский тотем раскалывает поверхность планеты до её ядра.'))}}>
          <div className = 'MB' > 
      <img style = {{width: 105, height:105}} src='https://ru.dotabuff.com/assets/skills/earthshaker-fissure-5023-b3294fc61334d7392627f74e0693a601202b87ed0281a07e838fd8e88d43af3d.jpg'></img> 
       <Text style = {{color:'#fff'}}>  FISSURE</Text>
          </div>
          </TouchableOpacity>
                     <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: No Target\nДЕЙСТВУЕТ Enemy Units\nМОЖНО РАЗВЕЯТЬ: Да\nЗаряжает тотем, увеличивая урон от следующей атаки и увеличивая её дальность на 75.\nУлучшение Aghanimом: Позволяет прыгнуть в указанную точку в радиусе %distance_scepter% и применить Enchant Totem в ней. Применение на себя работает как прежде, без прыжка.\nДополнительный урон рассчитывается на основе базового урона и перка основного атрибута.\nС Aghanims Scepter: применение на себя работает как раньше, без прыжка.\nДОП. УРОН: 100% / 200% / 300% / 400%\nДАЛЬНОСТЬ ПРЫЖКА СО СКИПЕТРОМ: 1100\nВремя каста: 0.69s\nКулдаун: 5\nМана: 35 / 40 / 45 / 50\nНеукротимая мощь Рейгора способна крушить горы.'); }}>
                     <div className = 'blink'>
                       <img style = {{width: 105, height:105}} src='https://ru.dotabuff.com/assets/skills/earthshaker-enchant-totem-5024-1b3868a619de7749d46a48064dd6d7dfc803e5c6d3e3b1d95f2e7b1f90dd7e2a.jpg'/>
                     <Text style = {{color:'#fff'}}>  ENCHANT TOTEM</Text>
                     </div>
                     </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Passive\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Сильным развеиванием\nГерой сотрясает землю при каждом применении способности, нанося урон врагам поблизости и оглушая их.\nНе срабатывает от использования предметов.\nУрон: 75 / 100 / 125 / 150\nРАДИУС: 300\nЗемля содрогается от могучих шагов Рейгора.')}}>
    <div className = 'conterSpell'>
       
       <img style = {{width: 105, height:105}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/earthshaker_aftershock_hp1.png?v=6299534'/>
  <Text style = {{color:'#fff'}}>  AFTERSHOCK</Text>
  </div>
  </TouchableOpacity >
            <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: No Target\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nПо земле распространяются ударные волны, наносящие урон врагам. Каждое попадание по врагу создаёт волновое эхо, которое наносит урон ближайшим врагам. Попадание по герою создаёт двойное эхо.\nРАДИУС: 600\nУРОН ОТ ЭХА: 70 / 90 / 110\nБАЗОВЫЙ УРОН: 100 / 140 / 180\nВремя каста: 0s\nКулдаун: 150 / 130 / 110\nМана: 145 / 205 / 265\nОдним хлопком Рейгор разламывает тектонические плиты, скручивает горы и сминает недругов.')}}><div className = 'ultimate'>
       <img style = {{width: 105, height:105}} src = "https://ru.dotabuff.com/assets/skills/earthshaker-echo-slam-5026-2487ea3e14cada8d8884c802e2c4c4f2bdbe6423dd0e9783cee4f3d594197bcb.jpg"/>
            <Text style = {{color:'#fff'}}>  ECHO SLAM</Text>
            </div> </TouchableOpacity>
</div>
:



<div className = 'skills' >
  
        
          <TouchableOpacity onPress = {()=>{ return (alert('СПОСОБНОСТЬ: Point Target\nДЕЙСТВУЕТ: Enemy Units\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Сильным развеиванием\nГерой разбивает землю могучим тотемом, оставляя перед собой непроходимую каменную борозду, при этом оглушая стоящих на её пути врагов и нанося им урон.\nУРОН: 110 / 160 / 210 / 260\nДЛИНА БОРОЗДЫ: 1400\nДЛИТЕЛЬНОСТЬ БОРОЗДЫ: 6.5 / 7.0 / 7.5 / 8.0\nДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ: 1.0 / 1.25 / 1.5 / 1.75\nCВремя каста: 0.69s\nКулдаун: 21 / 19 / 17 / 15\nМана: 110 / 130 / 150 / 170\nСилою земли нишианский тотем раскалывает поверхность планеты до её ядра.'))}}>
          <div className = 'MB' > 
      <img style = {{width: 105, height:105}} src='https://ru.dotabuff.com/assets/skills/earthshaker-fissure-5023-b3294fc61334d7392627f74e0693a601202b87ed0281a07e838fd8e88d43af3d.jpg'></img> 
       <Text style = {{color:'#fff'}}>  FISSURE</Text>
          </div>
          </TouchableOpacity>
                     <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: No Target\nДЕЙСТВУЕТ Enemy Units\nМОЖНО РАЗВЕЯТЬ: Да\nЗаряжает тотем, увеличивая урон от следующей атаки и увеличивая её дальность на 75.\nУлучшение Aghanimом: Позволяет прыгнуть в указанную точку в радиусе %distance_scepter% и применить Enchant Totem в ней. Применение на себя работает как прежде, без прыжка.\nДополнительный урон рассчитывается на основе базового урона и перка основного атрибута.\nС Aghanims Scepter: применение на себя работает как раньше, без прыжка.\nДОП. УРОН: 100% / 200% / 300% / 400%\nДАЛЬНОСТЬ ПРЫЖКА СО СКИПЕТРОМ: 1100\nВремя каста: 0.69s\nКулдаун: 5\nМана: 35 / 40 / 45 / 50\nНеукротимая мощь Рейгора способна крушить горы.'); }}>
                     <div className = 'blink'>
                       <img style = {{width: 105, height:105}} src='https://ru.dotabuff.com/assets/skills/earthshaker-enchant-totem-5024-1b3868a619de7749d46a48064dd6d7dfc803e5c6d3e3b1d95f2e7b1f90dd7e2a.jpg'/>
                     <Text style = {{color:'#fff'}}>  ENCHANT TOTEM</Text>
                     </div>
                     </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Passive\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Сильным развеиванием\nГерой сотрясает землю при каждом применении способности, нанося урон врагам поблизости и оглушая их.\nНе срабатывает от использования предметов.\nУрон: 75 / 100 / 125 / 150\nРАДИУС: 300\nЗемля содрогается от могучих шагов Рейгора.')}}>
    <div className = 'conterSpell'>
       
       <img style = {{width: 105, height:105}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/earthshaker_aftershock_hp1.png?v=6299534'/>
  <Text style = {{color:'#fff'}}>  AFTERSHOCK</Text>
  </div>
  </TouchableOpacity >
            <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: No Target\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nПо земле распространяются ударные волны, наносящие урон врагам. Каждое попадание по врагу создаёт волновое эхо, которое наносит урон ближайшим врагам. Попадание по герою создаёт двойное эхо.\nРАДИУС: 600\nУРОН ОТ ЭХА: 70 / 90 / 110\nБАЗОВЫЙ УРОН: 100 / 140 / 180\nВремя каста: 0s\nКулдаун: 150 / 130 / 110\nМана: 145 / 205 / 265\nОдним хлопком Рейгор разламывает тектонические плиты, скручивает горы и сминает недругов.')}}><div className = 'ultimate'>
       <img style = {{width: 105, height:105}} src = "https://ru.dotabuff.com/assets/skills/earthshaker-echo-slam-5026-2487ea3e14cada8d8884c802e2c4c4f2bdbe6423dd0e9783cee4f3d594197bcb.jpg"/>
            <Text style = {{color:'#fff'}}>  ECHO SLAM</Text>
            </div> </TouchableOpacity>

            <TouchableOpacity onPress = {()=>{ return (alert('СПОСОБНОСТЬ: Point Target\nДЕЙСТВУЕТ: Enemy Units\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Сильным развеиванием\nГерой разбивает землю могучим тотемом, оставляя перед собой непроходимую каменную борозду, при этом оглушая стоящих на её пути врагов и нанося им урон.\nУРОН: 110 / 160 / 210 / 260\nДЛИНА БОРОЗДЫ: 1400\nДЛИТЕЛЬНОСТЬ БОРОЗДЫ: 6.5 / 7.0 / 7.5 / 8.0\nДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ: 1.0 / 1.25 / 1.5 / 1.75\nCВремя каста: 0.69s\nКулдаун: 21 / 19 / 17 / 15\nМана: 110 / 130 / 150 / 170\nСилою земли нишианский тотем раскалывает поверхность планеты до её ядра.'))}}>
          <div className = 'MB' > 
      <img style = {{width: 105, height:105}} src='https://ru.dotabuff.com/assets/skills/earthshaker-fissure-5023-b3294fc61334d7392627f74e0693a601202b87ed0281a07e838fd8e88d43af3d.jpg'></img> 
       <Text style = {{color:'#fff'}}>  FISSURE</Text>
          </div>
          </TouchableOpacity>
                     <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: No Target\nДЕЙСТВУЕТ Enemy Units\nМОЖНО РАЗВЕЯТЬ: Да\nЗаряжает тотем, увеличивая урон от следующей атаки и увеличивая её дальность на 75.\nУлучшение Aghanimом: Позволяет прыгнуть в указанную точку в радиусе %distance_scepter% и применить Enchant Totem в ней. Применение на себя работает как прежде, без прыжка.\nДополнительный урон рассчитывается на основе базового урона и перка основного атрибута.\nС Aghanims Scepter: применение на себя работает как раньше, без прыжка.\nДОП. УРОН: 100% / 200% / 300% / 400%\nДАЛЬНОСТЬ ПРЫЖКА СО СКИПЕТРОМ: 1100\nВремя каста: 0.69s\nКулдаун: 5\nМана: 35 / 40 / 45 / 50\nНеукротимая мощь Рейгора способна крушить горы.'); }}>
                     <div className = 'blink'>
                       <img style = {{width: 105, height:105}} src='https://ru.dotabuff.com/assets/skills/earthshaker-enchant-totem-5024-1b3868a619de7749d46a48064dd6d7dfc803e5c6d3e3b1d95f2e7b1f90dd7e2a.jpg'/>
                     <Text style = {{color:'#fff'}}>  ENCHANT TOTEM</Text>
                     </div>
                     </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Passive\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Сильным развеиванием\nГерой сотрясает землю при каждом применении способности, нанося урон врагам поблизости и оглушая их.\nНе срабатывает от использования предметов.\nУрон: 75 / 100 / 125 / 150\nРАДИУС: 300\nЗемля содрогается от могучих шагов Рейгора.')}}>
    <div className = 'conterSpell'>
       
       <img style = {{width: 105, height:105}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/earthshaker_aftershock_hp1.png?v=6299534'/>
  <Text style = {{color:'#fff'}}>  AFTERSHOCK</Text>
  </div>
  </TouchableOpacity >
            <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: No Target\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nПо земле распространяются ударные волны, наносящие урон врагам. Каждое попадание по врагу создаёт волновое эхо, которое наносит урон ближайшим врагам. Попадание по герою создаёт двойное эхо.\nРАДИУС: 600\nУРОН ОТ ЭХА: 70 / 90 / 110\nБАЗОВЫЙ УРОН: 100 / 140 / 180\nВремя каста: 0s\nКулдаун: 150 / 130 / 110\nМана: 145 / 205 / 265\nОдним хлопком Рейгор разламывает тектонические плиты, скручивает горы и сминает недругов.')}}><div className = 'ultimate'>
       <img style = {{width: 105, height:105}} src = "https://ru.dotabuff.com/assets/skills/earthshaker-echo-slam-5026-2487ea3e14cada8d8884c802e2c4c4f2bdbe6423dd0e9783cee4f3d594197bcb.jpg"/>
            <Text style = {{color:'#fff'}}>  ECHO SLAM</Text>
            </div> </TouchableOpacity>
</div>
}

<div className = 'itemsHero'>
  <TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Tango\nЦена: 90 \nСъедает дерево, увеличивая восстановление здоровья на 7.0. Действует 16.0 сек. Если съесть деревце от Iron Branch, то восстановится в два раза больше здоровья. Изначально имеет 3 заряда. Можно применить на союзного героя, чтобы дать ему один Tango.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/tango-daa148575735568e612a4d16bb0055cc20ce83849d14d1aac3c54a05ccb1afb3.jpg'/>    
  </TouchableOpacity>
  <TouchableOpacity className = 'early' onPress = {()=>{alert('Quelling Blade\nЦена: 130\nАктивная: Chop Tree\nУничтожает выбранное дерево.\nДальность применения: 350\nПассивная: Quell\nУвеличивает урон от атак по существам, не являющимися героями, на 15 для героев ближнего боя или на 6 — для дальнего.\nКулдаун: 4\nЭффекты от нескольких копий этого предмета не сочетаются.\nТопор павшего гнома, позволяющий с лёгкостью продираться сквозь лес.')}}>
<img   style = {{width: 86}}  className = 'early' src = 'https://ru.dotabuff.com/assets/items/boots-of-speed-ef8d597b932f47378a608266f08441f8a32f13cc6d41025e2fd6cc9433f556c6.jpg'/>    
</TouchableOpacity>


  <text className = 'earlyText'> Early game </text><img></img><img></img><img></img><img></img>



  
     <TouchableOpacity className ='mid'  style = {{width: 86}} onPress = {()=> {alert('Magic Wand\nЦена: 450\n+ 3 ко всем атрибутам\nАктивная: Energy Charge\nМгновенно восстанавливает 15 здоровья и маны за каждый имеющийся заряд.\nМожет иметь до 20 зарядов. Получает один заряд каждый раз, когда видимый враг в радиусе 1200 использует способность.\nКулдаун: 13\nПолучает заряды, когда видимый враг в радиусе 1200 использует способность.\nПредметы и некоторые способности не добавляют зарядов.\nПростая волшебная палочка, в которой концентрируют магическую энергию начинающие волшебники и великие колдуны.')}}>
<img  className = 'late' src = 'https://ru.dotabuff.com/assets/items/magic-wand-7a4f7e78733470ac31dd40d01c85661493535044e799bc6676971fb90e2ed747.jpg'/>
</TouchableOpacity>
  <TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Tranquil Boots\nЦена: 925\n+ 70 к скорости передвижения\n+ 14 к восстановлению здоровья\nПассивная: Break\nЕсли владельца атаковало существо или он атаковал героя, то предмет 13 сек. будет восстанавливать на 14 здоровья в секунду меньше, а бонус к скорости передвижения уменьшится до 45.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКулдаун: 13\nХоть эти сапоги и увеличивают живучесть владельца, они не слишком надёжны.')}}>
<img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/23/Tranquil_Boots_%28Active%29_icon.png/revision/latest/scale-to-width-down/120?cb=20160530173837'/>   
</TouchableOpacity>
<TouchableOpacity order = '1' onPress = {()=> {alert('Blink Dagger\nЦена: 2,250\nАктивная: Blink\nМгновенно перемещает к указанной точке на расстоянии до 1200.\nПредмет нельзя использовать, если последние 3.0 сек. его владелец получал урон от вражеских героев или Рошана.\nКулдаун: 15\nЕсли применить на себя, переместит в сторону союзного фонтана.\nЕсли применить предмет дальше, чем позволяет способность, дальность перемещения составит 4/5 от максимально возможной.\nЛегендарный кинжал, которым когда-то пользовался самый быстрый убийца на свете.')}}>
<img  style = {{width: 86}} className = 'mid' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4c/Blink_Dagger_icon.png/revision/latest/scale-to-width-down/88?cb=20160530164152'/>    
  </TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Euls Scepter of Divinity\nЦена: 2,725\n+ 10 к интеллекту\n+ 5.0 к восстановлению маны\n+ 20 к скорости передвижения\nАктивная: Cyclone\nПоднимает выбранную цель в воздух, делая её неуязвимой на 2.5 сек. Можно использовать только на себя или противника.\nЕсли применить на врага, то по приземлении он получит 50 магического урона.\nДальность применения: 575\nТип развеивания: нормальное\nКулдаун: 23\nМана: 175\nНельзя применять на союзников.\nИспользование на себя проходит сквозь невосприимчивость к магии.\nИспользование снимает некоторые положительные и отрицательные эффекты.\nЭффект можно развеять.\nЗагадочный скипетр, прошедший сквозь века, позволяет творить своими непокорными ветрами как добрые, так и злые дела.')}}>
<img  className ='mid' src='https://static.wikia.nocookie.net/dota2_gamepedia/images/8/80/Eul%27s_Scepter_of_Divinity_icon.png/revision/latest/scale-to-width-down/120?cb=20160530170259'/>  
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Force Staff\nЦена: 2,175\n+ 10 к интеллекту\n+ 2.5 к восстановлению здоровья\nАктивная: Force\nТолкает выбранное существо в направлении его взгляда на расстояние в 600.\nДальность применения: 550\nКулдаун: 23\nМана: 100\nМожно применить на себя.\nНе прерывает действия цели.\nНе работает на существ под воздействием способностей Chronosphere, Duel или Black Hole.\nПозволяет вам манипулировать другими во благо или во зло.')}}>
     <img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a2/Force_Staff_icon.png/revision/latest/scale-to-width-down/120?cb=20160530170519'/>
     </TouchableOpacity>
   <text className = 'midText'> Mid game </text>  <img></img>



   <TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Magic Wand\nЦена: 450\n+ 3 ко всем атрибутам\nАктивная: Energy Charge\nМгновенно восстанавливает 15 здоровья и маны за каждый имеющийся заряд.\nМожет иметь до 20 зарядов. Получает один заряд каждый раз, когда видимый враг в радиусе 1200 использует способность.\nКулдаун: 13\nПолучает заряды, когда видимый враг в радиусе 1200 использует способность.\nПредметы и некоторые способности не добавляют зарядов.\nПростая волшебная палочка, в которой концентрируют магическую энергию начинающие волшебники и великие колдуны.')}}>
<img  className = 'late' src = 'https://ru.dotabuff.com/assets/items/magic-wand-7a4f7e78733470ac31dd40d01c85661493535044e799bc6676971fb90e2ed747.jpg'/>
</TouchableOpacity>
  <TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Tranquil Boots\nЦена: 925\n+ 70 к скорости передвижения\n+ 14 к восстановлению здоровья\nПассивная: Break\nЕсли владельца атаковало существо или он атаковал героя, то предмет 13 сек. будет восстанавливать на 14 здоровья в секунду меньше, а бонус к скорости передвижения уменьшится до 45.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКулдаун: 13\nХоть эти сапоги и увеличивают живучесть владельца, они не слишком надёжны.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/23/Tranquil_Boots_%28Active%29_icon.png/revision/latest/scale-to-width-down/120?cb=20160530173837'/>   
</TouchableOpacity>
<TouchableOpacity order = '1' onPress = {()=> {alert('Blink Dagger\nЦена: 2,250\nАктивная: Blink\nМгновенно перемещает к указанной точке на расстоянии до 1200.\nПредмет нельзя использовать, если последние 3.0 сек. его владелец получал урон от вражеских героев или Рошана.\nКулдаун: 15\nЕсли применить на себя, переместит в сторону союзного фонтана.\nЕсли применить предмет дальше, чем позволяет способность, дальность перемещения составит 4/5 от максимально возможной.\nЛегендарный кинжал, которым когда-то пользовался самый быстрый убийца на свете.')}}>
<img  style = {{width: 86}} className = 'mid' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4c/Blink_Dagger_icon.png/revision/latest/scale-to-width-down/88?cb=20160530164152'/>    
  </TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Euls Scepter of Divinity\nЦена: 2,725\n+ 10 к интеллекту\n+ 5.0 к восстановлению маны\n+ 20 к скорости передвижения\nАктивная: Cyclone\nПоднимает выбранную цель в воздух, делая её неуязвимой на 2.5 сек. Можно использовать только на себя или противника.\nЕсли применить на врага, то по приземлении он получит 50 магического урона.\nДальность применения: 575\nТип развеивания: нормальное\nКулдаун: 23\nМана: 175\nНельзя применять на союзников.\nИспользование на себя проходит сквозь невосприимчивость к магии.\nИспользование снимает некоторые положительные и отрицательные эффекты.\nЭффект можно развеять.\nЗагадочный скипетр, прошедший сквозь века, позволяет творить своими непокорными ветрами как добрые, так и злые дела.')}}>
<img  className ='mid' src='https://static.wikia.nocookie.net/dota2_gamepedia/images/8/80/Eul%27s_Scepter_of_Divinity_icon.png/revision/latest/scale-to-width-down/120?cb=20160530170259'/>  

</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Force Staff\nЦена: 2,175\n+ 10 к интеллекту\n+ 2.5 к восстановлению здоровья\nАктивная: Force\nТолкает выбранное существо в направлении его взгляда на расстояние в 600.\nДальность применения: 550\nКулдаун: 23\nМана: 100\nМожно применить на себя.\nНе прерывает действия цели.\nНе работает на существ под воздействием способностей Chronosphere, Duel или Black Hole.\nПозволяет вам манипулировать другими во благо или во зло.')}}>
     <img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a2/Force_Staff_icon.png/revision/latest/scale-to-width-down/120?cb=20160530170519'/>
     </TouchableOpacity>
<TouchableOpacity onPress = {()=> {alert('Aghanims Scepter\nЦена: 4,200\n+ 10 ко всем атрибутам\n+ 175 к здоровью\n+ 175 к мане\nПассивная: Ability Upgrade\nУлучшает ульт и некоторые способности.\nСкипетр колдуна, мощью сходного с полубогами.')}}>
<img  style = {{width: 86}} className = 'late' order = '1' src = 'https://ru.dotabuff.com/assets/items/aghanims-scepter-72bdb9aee9187bc224f24985bf92100a34b1ba630991a240d7ccb26ba899079e.jpg'/>    
  </TouchableOpacity>
    <text className = 'lateText'> Late game</text>
    </div>

<div className = 'others'>
    <TouchableOpacity  style = {{width: 86}} onPress = {()=>{alert('Arcane Boots\nЦена: 1,400\n+ 45 к скорости передвижения\n+ 250 к мане\nАктивная: Replenish Mana\nВосстанавливает 160 маны всем союзникам вокруг.\nРадиус: 1200\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКулдаун: 55\nНе работает на клонах Meepo.\nМагу, что носит эти ботинки, всегда рады в бою.')}}>
<img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/be/Arcane_Boots_icon.png/revision/latest/scale-to-width-down/88?cb=20160530174210'/>
</TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Shadow Blade\nЦена: 3,000\n+ 25 к урону\n+ 35 к скорости атаки\nАктивная: Shadow Walk\nДелает героя невидимым на 14.0 сек. или до момента, когда он совершит атаку или применит способность. Также увеличивает скорость передвижения на 20% и позволяет проходить сквозь существ.\nАтака, прерывающая невидимость, дополнительно нанесёт 175 физического урона.\nКулдаун: 28\nМана: 75\nЗадержка перед невидимостью — 0.3сек.\nЕсли невидимость кончится без атаки, дополнительный урон будет потерян.\nКлинок павшего короля позволяет передвигаться незаметно и наносить удар из тени.')}}> 
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/0f/Shadow_Blade_icon.png/revision/latest/scale-to-width-down/120?cb=20160530173313'/>   
  
  </TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Lotus Orb\nЦена: 3,950\n+ 10 к броне\n+ 6.5 к восстановлению здоровья\n+ 4.0 к восстановлению маны\n+ 250 к мане\nАктивная: Echo Shell\nСоздаёт вокруг цели щит, отражающий большинство направленных заклинаний обратно во врага. Действует 6.0 сек.\nНе блокирует эффекты вражеских заклинаний.\nДальность применения: 900\nТип развеивания: нормальное\nКулдаун: 15\nМана: 175\nБриллиант в центре всё еще несёт блёклое отражение своего создателя.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/lotus-orb-eaf20c3f924ffc8d0949c4c6f08053b3acfcde2a409dd622306e1ef04a7bc957.jpg'/>    
  </TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Refresher Orb\nЦена: 5,000\n+ 13 к восстановлению здоровья\n+ 12.0 к восстановлению маны\nАктивная: Reset\nСбрасывает время перезарядки всех ваших предметов и способностей.\nКулдаун: 180\nМана: 375\nМогущественный артефакт, созданный для магов.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/refresher-orb-0a1b1c68e6f6226054633c30ee221d8020800a6800089013781d517343061c9e.jpg'/>    
  </TouchableOpacity>
 
  <text className = 'otherText'> Other</text>
    </div>





    <div className = 'Talents'>
      <TouchableOpacity onPress = {()=> {alert('–1.5 сек. перезарядки Enchant Totem  \n    25 level \n+40% к сопротивлению магии \n \n+320 к длине борозды от Fissure \n    20 level\n+40 к урону от эха у Echo Slam \n\n+6 к броне \n    15 level\n+25 к скорости передвижения\n\n+200 к мане	\n    10 level\n+20 к базовому урону')}}>
        <img style = {{ width: 150, height: 130 }} src='https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg' />
    </TouchableOpacity>
    <img style={{width:1000}}></img>
    </div>

    <div className='block'>
      <img style={{width:80,  marginBlockStart: 15}} className='' src='https://ru.dotabuff.com/assets/skills/earthshaker-fissure-5023-b3294fc61334d7392627f74e0693a601202b87ed0281a07e838fd8e88d43af3d.jpg'/> 
     <div className= 'block1'>1</div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>8</div>   <div className= 'block1'>9</div>   <div className= 'block1'>  </div>   <div className= 'block1'>11</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>   
    <img style={{width:80,  marginBlockStart: 15}} src='https://ru.dotabuff.com/assets/skills/earthshaker-enchant-totem-5024-1b3868a619de7749d46a48064dd6d7dfc803e5c6d3e3b1d95f2e7b1f90dd7e2a.jpg'/>
     <div className= 'block1'> </div>     <div className= 'block1'>2</div>   <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>  <div className= 'block1'>  </div>   <div className= 'block1'>13</div>    <div className= 'block1'>14</div>    <div className= 'block1'></div>   <div className= 'block1'>16</div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f1/Aftershock_icon.png/revision/latest/scale-to-width-down/128?cb=20111005114411'/>
     <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'>3</div>    <div className= 'block1'>4</div>     <div className= 'block1'>5</div>   <div className= 'block1'> </div>   <div className= 'block1'>7</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>   <div className= 'block1'></div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = "https://ru.dotabuff.com/assets/skills/earthshaker-echo-slam-5026-2487ea3e14cada8d8884c802e2c4c4f2bdbe6423dd0e9783cee4f3d594197bcb.jpg"/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'>6</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>12</div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'>18</div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg'/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>10</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'>15</div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    </div>
    </nav>
  );
}




 
 
     /* return(
<div className = 'skills' >
  
        
          <TouchableOpacity onPress = {()=>{ return (alert('СПОСОБНОСТЬ: Passive  \nУРОН: физический  \nСКВОЗЬ НЕВОСПР. К МАГИИ: нет  \nКаждая атака сжигает ману цели и наносит ей урон, равный 50% от сожжённой маны. Эффект уменьшается до 50%, если атаку наносят иллюзии героя.  \nСЖИГАНИЕ МАНЫ ЗА УДАР: 28 / 40 / 52 / 64  \nСЖИГАЕМАЯ ДОЛЯ ОТ МАКС. МАНЫ: 1% / 2% / 3% / 4%  \nИзменённый приём турстаркурийских монахов, обращающий волшебную энергию против самого чародея.'))}}>
          <div className = 'MB' > 
      <img style = {{width: 105, height:105}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_quas_hp2.png?v=6299534'></img> 
       <Text style = {{color:'#fff'}}>  QUAS</Text>
          </div>
          </TouchableOpacity>
                     <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: точка\nПеремещает героя на короткую дистанцию, что позволяет ворваться в схватку или быстро из неё сбежать.\nПозволяет сбить с цели многие снаряды.\nДАЛЬНОСТЬ: 925 / 1000 / 1075 / 1150\nВремя каста: 0.4с\nКулдаун: 15 / 12 / 9 / 6\nМана: 60\nВ схватках с мёртвыми богами юный послушник познал важность неуловимости.'); }}>
                     <div className = 'blink'>
                       <img style = {{width: 105, height:105}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_wex_hp2.png?v=6299534'/>
                     <Text style = {{color:'#fff'}}>  WEX</Text>
                     </div>
                     </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: не направленное\nМОЖНО РАЗВЕЯТЬ: Да\nУвеличивает сопротивление магическому урону. Можно применить, чтобы создать вокруг себя противомагический щит, который полностью отражает все направленные заклинания обратно во врага.\nСОПРОТИВЛЕНИЕ МАГИИ: 15% / 25% / 35% / 45%\nДЛИТЕЛЬНОСТЬ: 1.2\nВремя каста: 0s\nКулдаун: 15 / 11 / 7 / 3\nМана: 45 / 50 / 55 / 60\nСконцентрировавшись, Антимаг обращает врождённое сопротивление в точную контратаку.')}}>
    <div className = 'conterSpell'>
       <img style = {{width: 105, height:105}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_exort_hp2.png?v=6299534'/>
  <Text style = {{color:'#fff'}}>  EXORT</Text>
  </div>
  </TouchableOpacity >
            <TouchableOpacity onPress = {()=>{ alert('Mana Void\nСПОСОБНОСТЬ: Направленное на существо\nДЕЙСТВУЕТ: Вражеские существа\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: Нет\nКратковременно оглушает вражескую цель, а затем наносит ей и всем окружающим её противникам урон, пропорциональный числу отсутствующей у неё маны.\nУлучшение Аганимом: Увеличивает длительность оглушения. При убийстве вражеского героя добавляет дополнительную перезарядку его способности с самой долгой перезарядкой.\nУрон зависит от количества маны у цели, но наносится всем противникам в радиусе действия способности.\nУРОН ЗА ЕДИНИЦУ МАНЫ: 0.8 / 0.95 / 1.1\nДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ: 0.3\nРАДИУС: 500\nДОП. ПЕРЕЗАРЯДКА СО СКИПЕТРОМ: 100.0\nДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ СО СКИПЕТРОМ: 1.3\nВремя каста 0.3s\nКулдаун: 70\nМана: 125 / 200 / 275\nОдолев врагов, борец с магией карает их за использование тайных искусств.')}}><div className = 'ultimate'>
       <img style = {{width: 105, height:105}} src = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_invoke_hp2.png?v=6299534"/>
            <Text style = {{color:'#fff'}}>  INVOKE</Text>
            </div> </TouchableOpacity>
             <TouchableOpacity onPress = {()=>{ return (alert('СПОСОБНОСТЬ: Passive  \nУРОН: физический  \nСКВОЗЬ НЕВОСПР. К МАГИИ: нет  \nКаждая атака сжигает ману цели и наносит ей урон, равный 50% от сожжённой маны. Эффект уменьшается до 50%, если атаку наносят иллюзии героя.  \nСЖИГАНИЕ МАНЫ ЗА УДАР: 28 / 40 / 52 / 64  \nСЖИГАЕМАЯ ДОЛЯ ОТ МАКС. МАНЫ: 1% / 2% / 3% / 4%  \nИзменённый приём турстаркурийских монахов, обращающий волшебную энергию против самого чародея.'))}}>
          <div className = 'MB' > 
      <img style = {{width: 105, height:105}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_quas_hp2.png?v=6299534'></img> 
       <Text style = {{color:'#fff'}}>  QUAS</Text>
          </div>
          </TouchableOpacity>
                     <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: точка\nПеремещает героя на короткую дистанцию, что позволяет ворваться в схватку или быстро из неё сбежать.\nПозволяет сбить с цели многие снаряды.\nДАЛЬНОСТЬ: 925 / 1000 / 1075 / 1150\nВремя каста: 0.4с\nКулдаун: 15 / 12 / 9 / 6\nМана: 60\nВ схватках с мёртвыми богами юный послушник познал важность неуловимости.'); }}>
                     <div className = 'blink'>
                       <img style = {{width: 105, height:105}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_wex_hp2.png?v=6299534'/>
                     <Text style = {{color:'#fff'}}>  WEX</Text>
                     </div>
                     </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: не направленное\nМОЖНО РАЗВЕЯТЬ: Да\nУвеличивает сопротивление магическому урону. Можно применить, чтобы создать вокруг себя противомагический щит, который полностью отражает все направленные заклинания обратно во врага.\nСОПРОТИВЛЕНИЕ МАГИИ: 15% / 25% / 35% / 45%\nДЛИТЕЛЬНОСТЬ: 1.2\nВремя каста: 0s\nКулдаун: 15 / 11 / 7 / 3\nМана: 45 / 50 / 55 / 60\nСконцентрировавшись, Антимаг обращает врождённое сопротивление в точную контратаку.')}}>
    <div className = 'conterSpell'>
       <img style = {{width: 105, height:105}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_exort_hp2.png?v=6299534'/>
  <Text style = {{color:'#fff'}}>  EXORT</Text>
  </div>
  </TouchableOpacity >
            <TouchableOpacity onPress = {()=>{ alert('Mana Void\nСПОСОБНОСТЬ: Направленное на существо\nДЕЙСТВУЕТ: Вражеские существа\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: Нет\nКратковременно оглушает вражескую цель, а затем наносит ей и всем окружающим её противникам урон, пропорциональный числу отсутствующей у неё маны.\nУлучшение Аганимом: Увеличивает длительность оглушения. При убийстве вражеского героя добавляет дополнительную перезарядку его способности с самой долгой перезарядкой.\nУрон зависит от количества маны у цели, но наносится всем противникам в радиусе действия способности.\nУРОН ЗА ЕДИНИЦУ МАНЫ: 0.8 / 0.95 / 1.1\nДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ: 0.3\nРАДИУС: 500\nДОП. ПЕРЕЗАРЯДКА СО СКИПЕТРОМ: 100.0\nДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ СО СКИПЕТРОМ: 1.3\nВремя каста 0.3s\nКулдаун: 70\nМана: 125 / 200 / 275\nОдолев врагов, борец с магией карает их за использование тайных искусств.')}}><div className = 'ultimate'>
       <img style = {{width: 105, height:105}} src = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_invoke_hp2.png?v=6299534"/>
            <Text style = {{color:'#fff'}}>  INVOKE</Text>
            </div> </TouchableOpacity>
</div>
      );
    }
    return;
  }

      return (
    <nav >
      <View>
      <h1 className = 'name' style = {{marginBlockStart:50}}> Invoker1</h1>
      
</View>


       <img  style = {{height:150}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/invoker_full.png?v=6299534?v=6299534' />
       
<div className = 'skills' >
  
        
          <TouchableOpacity onPress = {()=>{ return (alert('СПОСОБНОСТЬ: Passive  \nУРОН: физический  \nСКВОЗЬ НЕВОСПР. К МАГИИ: нет  \nКаждая атака сжигает ману цели и наносит ей урон, равный 50% от сожжённой маны. Эффект уменьшается до 50%, если атаку наносят иллюзии героя.  \nСЖИГАНИЕ МАНЫ ЗА УДАР: 28 / 40 / 52 / 64  \nСЖИГАЕМАЯ ДОЛЯ ОТ МАКС. МАНЫ: 1% / 2% / 3% / 4%  \nИзменённый приём турстаркурийских монахов, обращающий волшебную энергию против самого чародея.'))}}>
          <div className = 'MB' > 
      <img style = {{width: 105, height:105}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_quas_hp2.png?v=6299534'></img> 
       <Text style = {{color:'#fff'}}>  QUAS</Text>
          </div>
          </TouchableOpacity>
                     <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: точка\nПеремещает героя на короткую дистанцию, что позволяет ворваться в схватку или быстро из неё сбежать.\nПозволяет сбить с цели многие снаряды.\nДАЛЬНОСТЬ: 925 / 1000 / 1075 / 1150\nВремя каста: 0.4с\nКулдаун: 15 / 12 / 9 / 6\nМана: 60\nВ схватках с мёртвыми богами юный послушник познал важность неуловимости.'); }}>
                     <div className = 'blink'>
                       <img style = {{width: 105, height:105}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_wex_hp2.png?v=6299534'/>
                     <Text style = {{color:'#fff'}}>  WEX</Text>
                     </div>
                     </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: не направленное\nМОЖНО РАЗВЕЯТЬ: Да\nУвеличивает сопротивление магическому урону. Можно применить, чтобы создать вокруг себя противомагический щит, который полностью отражает все направленные заклинания обратно во врага.\nСОПРОТИВЛЕНИЕ МАГИИ: 15% / 25% / 35% / 45%\nДЛИТЕЛЬНОСТЬ: 1.2\nВремя каста: 0s\nКулдаун: 15 / 11 / 7 / 3\nМана: 45 / 50 / 55 / 60\nСконцентрировавшись, Антимаг обращает врождённое сопротивление в точную контратаку.')}}>
    <div className = 'conterSpell'>
       <img style = {{width: 105, height:105}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_exort_hp2.png?v=6299534'/>
  <Text style = {{color:'#fff'}}>  EXORT</Text>
  </div>
  </TouchableOpacity >
            <TouchableOpacity onPress = {()=>{ alert('Mana Void\nСПОСОБНОСТЬ: Направленное на существо\nДЕЙСТВУЕТ: Вражеские существа\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: Нет\nКратковременно оглушает вражескую цель, а затем наносит ей и всем окружающим её противникам урон, пропорциональный числу отсутствующей у неё маны.\nУлучшение Аганимом: Увеличивает длительность оглушения. При убийстве вражеского героя добавляет дополнительную перезарядку его способности с самой долгой перезарядкой.\nУрон зависит от количества маны у цели, но наносится всем противникам в радиусе действия способности.\nУРОН ЗА ЕДИНИЦУ МАНЫ: 0.8 / 0.95 / 1.1\nДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ: 0.3\nРАДИУС: 500\nДОП. ПЕРЕЗАРЯДКА СО СКИПЕТРОМ: 100.0\nДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ СО СКИПЕТРОМ: 1.3\nВремя каста 0.3s\nКулдаун: 70\nМана: 125 / 200 / 275\nОдолев врагов, борец с магией карает их за использование тайных искусств.')}}><div className = 'ultimate'>
       <img style = {{width: 105, height:105}} src = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_invoke_hp2.png?v=6299534"/>
            <Text style = {{color:'#fff'}}>  INVOKE</Text>
            </div> </TouchableOpacity>
</div>


<TouchableOpacity  style = {{marginRight:0}} onPress = {()=>{setcount(!count) }, NewSpells() } >Hello world </TouchableOpacity>
      




<TouchableOpacity onPress = {()=>{alert('Перемещает к выбранному врагу или в выбранную точку неконтролируемую иллюзию, которая 7 секунд атакует противников. Иллюзия наносит 50% урона, получает 250% урона и применяет Counterspell одновременно с основным героем.\n Расход маны: 50\n Перезарядка: 20\nСпособность: направленная на точку/юнита\nДействует на врагов\nДальность применения: 925/1000/1075/1150 (Талант: 1225/1300/1375/1450)\nУрон иллюзии: 50%\nУрон по иллюзии: 250%\nДлительность: 7')}}>
<div className = 'AganimScepter'>
  
  <img  style = {{width: 70}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ultimate_scepter_lg.png'/> <Text style = {{color: '#fff'}}> Aganim's Scepter</Text> 
  </div>
  </TouchableOpacity>


<TouchableOpacity onPress = {()=>{alert('Перемещает к выбранному врагу или в выбранную точку неконтролируемую иллюзию, которая 7 секунд атакует противников. Иллюзия наносит 50% урона, получает 250% урона и применяет Counterspell одновременно с основным героем.\n Расход маны: 50\n Перезарядка: 20\nСпособность: направленная на точку/юнита\nДействует на врагов\nДальность применения: 925/1000/1075/1150 (Талант: 1225/1300/1375/1450)\nУрон иллюзии: 50%\nУрон по иллюзии: 250%\nДлительность: 7')}}>
<div className = 'AganimShard'>
  
  <img  style = {{width: 70}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/aghanims_shard_lg.png?3'/> <Text style = {{color: '#fff'}}> Aganim's Shard</Text> 
  </div>
  </TouchableOpacity>

<div className = 'itemsHero'>
  <TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Tango\nЦена: 90 \nСъедает дерево, увеличивая восстановление здоровья на 7.0. Действует 16.0 сек. Если съесть деревце от Iron Branch, то восстановится в два раза больше здоровья. Изначально имеет 3 заряда. Можно применить на союзного героя, чтобы дать ему один Tango.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/tango-daa148575735568e612a4d16bb0055cc20ce83849d14d1aac3c54a05ccb1afb3.jpg'/>    
  </TouchableOpacity>
  <TouchableOpacity className = 'early' onPress = {()=>{alert('Quelling Blade\nЦена: 130\nАктивная: Chop Tree\nУничтожает выбранное дерево.\nДальность применения: 350\nПассивная: Quell\nУвеличивает урон от атак по существам, не являющимися героями, на 15 для героев ближнего боя или на 6 — для дальнего.\nКулдаун: 4\nЭффекты от нескольких копий этого предмета не сочетаются.\nТопор павшего гнома, позволяющий с лёгкостью продираться сквозь лес.')}}>
<img   style = {{width: 86}}  className = 'early' src = 'https://ru.dotabuff.com/assets/items/quelling-blade-4bbd2e05b0275d116ba7edb8cac4d186123f37645ab63dfed7f2d05cf905cf79.jpg'/>    
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Ring of Regen\nЦена: 175\n+ 1.5 к восстановлению здоровья\nГномы считают, что это кольцо приносит удачу.')}}>
<img   style = {{width: 86}} className = 'early' src = 'https://ru.dotabuff.com/assets/items/ring-of-regen-9bb1625482597a8fa841983df494fe0eb494e9cba181a46f8baa4c2a807049fd.jpg'/> 
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Circlet\nЦена: 155 \n+ 2 ко всем атрибутам\nЭлегантная тиара, предназначенная для человеческих принцесс.')}}>
<img  style = {{width: 86}} className = 'early' src = 'https://ru.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg'/>
</TouchableOpacity>

  <text className = 'earlyText'> Early game </text><img></img><img></img>
  
     <TouchableOpacity  style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Wraith Band\nЦена: 510\n+ 5 к ловкости\n+ 2 к силе\n+ 2 к интеллекту\n+ 5 к скорости атаки\n+ 1.5 к броне\nТиара, от которой доносится лёгкий шёпот.')}}>
     <img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg'/>
     </TouchableOpacity>
<TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Wraith Band\nЦена: 510\n+ 5 к ловкости\n+ 2 к силе\n+ 2 к интеллекту\n+ 5 к скорости атаки\n+ 1.5 к броне\nТиара, от которой доносится лёгкий шёпот.o')}}>
     <img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg'/>
     </TouchableOpacity>
<TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Power Treads\nЦена: 1400\n+ 45 к скорости передвижения\n+ 10 к выбранному атрибуту\n+ 25 к скорости атаки\nАктивная: Switch Attribute\nМеняет атрибут, который получает бонус: +10 к силе, ловкости или интеллекту.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nPower Treads можно собрать, используя Belt of Strength, Band of Elvenskin или Robe of the Magi.\nПара сапог, выделанных из жёсткой кожи, способна изменять свои свойства по желанию владельца.')}}>
     <img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/power-treads-ead692931ccfbcbb43f63b29d1282eb21a387e13eea6763a2b4117f8f3efc0cc.jpg'/>
     </TouchableOpacity>
<TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Battle Fury\nЦена: 4180\n+ 7.5 к восстановлению здоровья\n+ 3.25 к восстановлению маны\nАктивная: Chop Tree\nСрубает выбранное дерево.\nДальность применения: 350\nПассивная: Quell\nУвеличивает урон от атак по существам, не являющимися героями, на 18 для героев ближнего боя и на 6 — для дальнего.\nПассивная: Cleave\nАтаки героя прорубают жертву, нанося врагам в радиусе 650 вокруг неё физический урон (только в ближнем бою).\n• Урон героям: 70%\n• Урон крипам: 50%\nКулдаун: 4\nПрорубающий урон проходит сквозь невосприимчивость к магии.\nКаждый предмет или способность, дарующие прорубающую атаку, наносят урон отдельно друг от друга.\nВладелец этого могучего топора может выкашивать врагов целыми рядами.')}}>
     <img  className ='mid' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/bfury_lg.png?3'/>
     </TouchableOpacity>
<TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Manta Style\nЦена: 4,600\n+ 10 к силе\n+ 26 к ловкости\n+ 10 к интеллекту\n+ 12 к скорости атаки\n+ 8% к скорости передвижения\nАктивная: Mirror Image\nСоздаёт 2 иллюзии вашего героя, которые существуют 20 сек.\nИллюзии ближнего боя наносят 33% урона и получают 350% урона.\nИллюзии дальнего боя наносят 28% урона и получают 400% урона.\nУ героев дальнего боя перезаряжается на 15.0 сек. дольше.\nТип развеивания: нормальное\nКулдаун: 45\тМана: 125\nПредмет используется 0.1 сек., во время которой его владелец неуязвим.\nИспользование снимает многие эффекты.\nБонусы к скорости от нескольких предметов на основе Yasha не складываются.\nТопор, созданный из отражающих материалов, которые вызывают смятение во вражеских рядах.')}}>
     <img  className ='mid' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/manta_lg.png?3'/>
     </TouchableOpacity>
   <text className = 'midText'> Mid game </text>  <img></img>



   <TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Abyssal Blade\nЦена: 6,625\n+ 25 к урону\n+ 250 к здоровью\n+ 10.0 к восстановлению здоровья\n+ 10 к силе\nАктивная: Overwhelm\nПеремещает владельца к выбранной вражеской цели и оглушает её на 2.0 сек.\nПроходит сквозь невосприимчивость к магии.\nДальность применения: 550\nПассивная: Bash\nКаждая атака может оглушить цель на 1.5 сек. и нанести 100 физического урона. Вероятность зависит от типа атаки владельца: 25% в ближнем бою, 10% — в дальнем.\nПассивная: Damage Block\nС вероятностью в 50% блокирует 70 урона от атак, если владелец — герой ближнего боя, или 35 урона, если герой дальнего боя.\nКулдаун: 35\nМана: 75\nОглушение наносится на дистанции ближнего боя.\nНе сочетается с другими оглушениями от ударов.\nЭффекты нескольких способностей, блокирующих урон, не сочетаются.\nЭффект снимается только сильным развеиванием.\n Острие потерянного клинка Повелителя бездны впивается врагу прямо в душу.')}}>   
<img  className ='late' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/abyssal_blade_lg.png?3'/>       
</TouchableOpacity>
<TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Magic Wand\nЦена: 450\n+ 3 ко всем атрибутам\nАктивная: Energy Charge\nМгновенно восстанавливает 15 здоровья и маны за каждый имеющийся заряд.\nМожет иметь до 20 зарядов. Получает один заряд каждый раз, когда видимый враг в радиусе 1200 использует способность.\nКулдаун: 13\nПолучает заряды, когда видимый враг в радиусе 1200 использует способность.\nПредметы и некоторые способности не добавляют зарядов.\nПростая волшебная палочка, в которой концентрируют магическую энергию начинающие волшебники и великие колдуны.')}}>
<img  className = 'late' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/magic_wand_lg.png?3'/>
</TouchableOpacity>
<TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Power Treads\nЦена: 1400\n+ 45 к скорости передвижения\n+ 10 к выбранному атрибуту\n+ 25 к скорости атаки\nАктивная: Switch Attribute\nМеняет атрибут, который получает бонус: +10 к силе, ловкости или интеллекту.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nPower Treads можно собрать, используя Belt of Strength, Band of Elvenskin или Robe of the Magi.\nПара сапог, выделанных из жёсткой кожи, способна изменять свои свойства по желанию владельца.')}}>
<img  className ='late' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/power_treads_lg.png?3'/>
</TouchableOpacity>
<TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Battle Fury\nЦена: 4180\n+ 7.5 к восстановлению здоровья\n+ 3.25 к восстановлению маны\nАктивная: Chop Tree\nСрубает выбранное дерево.\nДальность применения: 350\nПассивная: Quell\nУвеличивает урон от атак по существам, не являющимися героями, на 18 для героев ближнего боя и на 6 — для дальнего.\nПассивная: Cleave\nАтаки героя прорубают жертву, нанося врагам в радиусе 650 вокруг неё физический урон (только в ближнем бою).\n• Урон героям: 70%\n• Урон крипам: 50%\nКулдаун: 4\nПрорубающий урон проходит сквозь невосприимчивость к магии.\nКаждый предмет или способность, дарующие прорубающую атаку, наносят урон отдельно друг от друга.\nВладелец этого могучего топора может выкашивать врагов целыми рядами.')}}>
<img  className ='late' src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/bfury_lg.png?3'/>    
</TouchableOpacity>
<TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Manta Style\nЦена: 4,600\n+ 10 к силе\n+ 26 к ловкости\n+ 10 к интеллекту\n+ 12 к скорости атаки\n+ 8% к скорости передвижения\nАктивная: Mirror Image\nСоздаёт 2 иллюзии вашего героя, которые существуют 20 сек.\nИллюзии ближнего боя наносят 33% урона и получают 350% урона.\nИллюзии дальнего боя наносят 28% урона и получают 400% урона.\nУ героев дальнего боя перезаряжается на 15.0 сек. дольше.\nТип развеивания: нормальное\nКулдаун: 45\тМана: 125\nПредмет используется 0.1 сек., во время которой его владелец неуязвим.\nИспользование снимает многие эффекты.\nБонусы к скорости от нескольких предметов на основе Yasha не складываются.\nТопор, созданный из отражающих материалов, которые вызывают смятение во вражеских рядах.')}}>
<img  className ='late' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/manta_lg.png?3'/>        
</TouchableOpacity>
<TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Eye of Skadi\nЦена: 5,300\n+ 25 ко всем атрибутам\n+ 225 к здоровью\n+ 250 к мане\nПассивная: Cold Attack\nКаждая атака на 3.0 сек. замедляет передвижение и атаку цели, а также уменьшает её лечение, восстановление здоровья, вампиризм и вампиризм способностями на 40%. Замедление зависит от типа атаки жертвы: у существ дальнего боя замедляет передвижение на -50%, атаку — на -50. У существ ближнего боя замедляет передвижение на -25%, атаку — на -25.\nНевероятно редкий артефакт, охраняемый лазурными драконами.')}}>
<img  className = 'late' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/skadi_lg.png?3'/>      
    </TouchableOpacity>
    <text className = 'lateText'> Late game</text>
    </div>

<div className = 'others'>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Monkey King Bar\nЦена: 4,850\n+ 42 к урону\n+ 35 к скорости атаки\nПассивная: Pierce\nКаждая атака может с вероятностью в 75% пройти сквозь уклонение и нанести 100 дополнительного магического урона.\nМогущественный посох, принадлежавший блистательному воину.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/monkey_king_bar_lg.png?3'/>    
  </TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Black King Bar\nЦена: 4,050\n+ 10 к силе\n+ 24 к урону\nАктивная: Avatar\nДаёт невосприимчивость к магии. Длительность уменьшается с каждым использованием.\nДлительность: 10.0 / 9.0 / 8.0 / 7.0 / 6.0 / 5.0\nТип развеивания: нормальное\nКулдаун: 70\nПокупка другого Black King Bar не обновит время его действия.\nИспользование Black King Bar снимает некоторые положительные эффекты.\nМощный посох, наделённый силой гигантов.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/black_king_bar_lg.png?3'/>    
  </TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Assault Cuirass\nЦена: 5,075\n+ 30 к скорости атаки\n+ 10 к броне\nПассивная: Assault Aura\nУвеличивает броню союзных построек и существ на 5, а их скорость атаки — на 30. Снижает броню врагов на -5.\nРадиус: 1200\nЭтот жуткий доспех, выкованный в кузнях нижних пределов, способен укрепить и ускорить целую армию.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/assault_lg.png?3'/>    
  </TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Satanic\nЦена: 5,800\n+ 25 к силе\n+ 25 к урону\n+ 30% к сопротивлению эффектам\nАктивируемая: Unholy Rage\nУвеличивает эффект вампиризма до 200% на 5.0 сек.\nПассивная: Lifesteal\nКаждая атака восстанавливает владельцу здоровье в размере 25% от нанесённого урона.\nКулдаун: 35\nЭффект можно развеять.\nКолоссальная сила в обмен на вашу душу.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/satanic_lg.png?3'/>    
  </TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Butterfly\nЦена: 5,275\n+ 30 к ловкости\n+ 35% к уклонению\n+ 30 к скорости атаки\n+ 25 к урону\nСкладывается по закону убывающей полезности с другими источниками уклонения.\nЭтот клинок могут обуздать лишь самые могучие и опытные воины, но владельцу он даёт невероятное проворство в бою.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/butterfly_lg.png?3'/>    
  </TouchableOpacity>
  <text className = 'otherText'> Other</text>
    </div>





    <div className = 'Talents'>
      <TouchableOpacity onPress = {()=> {alert('–50 сек. перезарядки Mana Void  \n    25 level \n+20% к сопротивлению магии от Counterspell \n \n–2.0 сек. перезарядки Blink \n    20 level\nBlink оставляет бесконтрольную иллюзию \n\n+12 к ловкости \n    15 level\n+325 к дальности Blink\n\n+15 к скорости атаки\n    10 level\n+9 к силе')}}>
        <img style = {{ width: 150, height: 130 }} src='https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg' />
    </TouchableOpacity>
    <img style={{width:1000}}></img>
    </div>

    <div className='block'>
      <img style={{width:80,  marginBlockStart: 15}} className='' src='https://ru.dotabuff.com/assets/skills/anti-mage-mana-break-5003-ad4049bc111c7a3d58a8c1b3c727de0df52171db12e3e422e26db4adf52f9cd7.jpg'/> 
     <div className= 'block1'>1</div>    <div className= 'block1'> </div>    <div className= 'block1'>3</div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>9</div>   <div className= 'block1'>  </div>   <div className= 'block1'>11</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>   
    <img style={{width:80,  marginBlockStart: 15}} src='https://ru.dotabuff.com/assets/skills/anti-mage-blink-5004-5d2e0ccb238493cef0c44786d626db5e8090cc905751f3611b42d2183a62bd9a.jpg'/>
     <div className= 'block1'> </div>     <div className= 'block1'>2</div>   <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'>5</div>   <div className= 'block1'> </div>   <div className= 'block1'>7</div>   <div className= 'block1'>8</div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>  <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/anti-mage-counterspell-7314-66efa4ff5922963fcb51d79c06ee7d5ae011ca8931432729f57063b380c06c3e.jpg'/>
     <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>    <div className= 'block1'>4</div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>13</div>    <div className= 'block1'>14</div>   <div className= 'block1'></div>   <div className= 'block1'>16</div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = "https://ru.dotabuff.com/assets/skills/anti-mage-mana-void-5006-87ccdcde7c553a6863f7d2a7781078b825fbc90384743fd5d547b5392f73b1f6.jpg"/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'>6</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>12</div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'>18</div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg'/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>10</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'>15</div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    </div>
    </nav>
  );



  










     
  }*/