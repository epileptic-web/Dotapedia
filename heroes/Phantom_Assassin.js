import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import './skills.css';



export  function Phantom_Assassin() {
  return (
    <nav >
      
      <h1 className = 'name'> Phantom Assassin</h1>
       <img  /*style = {{height:150}} src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8f/Manifold_Paradox_Phantom_Assassin_icon.png/revision/latest/scale-to-width-down/256?cb=20180513120311' *//> 
       <img style = {{height:150}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/phantom_assassin_full.png?v=6299534?v=6299534'/>
<div className = 'skills' >
  
        
          <TouchableOpacity onPress = {()=>{ return (alert('СПОСОБНОСТЬ: Unit Target\nДЕЙСТВУЕТ: Enemy Units\nУРОН: физический\nСКВОЗЬ НЕВОСПР. К МАГИИ: Yes\nМОЖНО РАЗВЕЯТЬ: Да\nБросает кинжал, который замедляет скорость передвижения врага.\nЭффекты атаки срабатывают с обычной для них вероятностью.\nНе замедляет врагов, невосприимчивых к магии.\nЗАМЕДЛЕНИЕ ПЕРЕДВИЖЕНИЯ: -50%\nДЛИТЕЛЬНОСТЬ ЗАМЕДЛЕНИЯ: 1.75 / 2.5 / 3.25 / 4.0\nБАЗОВЫЙ УРОН: 65\nУРОН ОТ АТАКИ: 25% / 40% / 55% / 70%\nВремя каста: 0.3s\nКулдаун: 6\nМана: 30\nПервый навык, изучаемый Сестрами вуали, часто предвещает скорый удар.'))}}>
          <div className = 'MB' > 
      <img style = {{width: 105, height:105}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/phantom_assassin_stifling_dagger_hp1.png?v=6299534'></img> 
       <Text style = {{color:'#fff'}}>  MANA BREAK</Text>
          </div>
          </TouchableOpacity>
                     <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Unit Target\nСКВОЗЬ НЕВОСПР. К МАГИИ: Yes\nМОЖНО РАЗВЕЯТЬ: Да\nГерой телепортируется к выбранному существу и, если это противник, получает дополнительную скорость атаки.\nДОП. СКОРОСТЬ АТАКИ: 100 / 125 / 150 / 175\nДЛИТЕЛЬНОСТЬ: 2.0\nДАЛЬНОСТЬ ПРИМЕНЕНИЯ: 1000(1350)\nВремя каста: 0.25s\nКулдаун: 11 / 9 / 7 / 5\nМана: 35 / 40 / 45 / 50\nШёлковая вуаль Мортред — это последнее, что увидит её несчастная цель.'); }}>
                     <div className = 'blink'>
                       <img style = {{width: 105, height:105}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/phantom_assassin_phantom_strike_hp1.png?v=6299534'/>
                     <Text style = {{color:'#fff'}}>  BLINK</Text>
                     </div>
                     </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: No Target\nДЕЙСТВУЕТ: Allied Heroes\nМОЖНО РАЗВЕЯТЬ: Нет\nГерой сосредотачивается на себе, что позволяет ему уклоняться от атак. Применение способности размоет очертания владельца, делая его невидимым, если рядом нет вражеских героев.\nСочетается с другими источниками уклонения по закону убывающей полезности.\nУлучшение Аганимом: Уменьшает перезарядку. Способность развеивает отрицательные эффекты и применяется без задержки. Каждое убийство героя сбрасывает перезарядку способностей.\nУКЛОНЕНИЕ: 20% / 30% / 40% / 50%\nДЛИТЕЛЬНОСТЬ: 25.0\nРАДИУС ДЛЯ НЕВИДИМОСТИ: 600\nЗАДЕРЖКА ПЕРЕД ПОЯВЛЕНИЕМ: 0.75\nПЕРЕЗАРЯДКА СО СКИПЕТРОМ: 10\nВремя каста: 0.4s\nКулдаун: 60 / 55 / 50 / 45\nМана: 50\nМедитация позволяет Сёстрам вуали опережать противников в бою.')}}>
    <div className = 'conterSpell'>
       <img style = {{width: 105, height:105}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/phantom_assassin_blur_hp1.png?v=6299534'/>
  <Text style = {{color:'#fff'}}>  COUNTERSPELL</Text>
  </div>
  </TouchableOpacity >
            <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Passive\nСКВОЗЬ НЕВОСПР. К МАГИИ: Yes\nГерой оттачивает свои боевые способности, получая шанс нанести сокрушительный критический удар по врагу. Способность Stifling Dagger также получает такой шанс.\nШАНС КРИТИЧЕСКОЙ АТАКИ: 15%\nКРИТИЧЕСКИЙ УРОН: 200% / 325% / 450%\nПогибнуть от судьбоносного удара Мортред — честь для её врагов.')}}><div className = 'ultimate'>
       <img style = {{width: 105, height:105}} src = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/phantom_assassin_coup_de_grace_hp1.png?v=6299534"/>
            <Text style = {{color:'#fff'}}>  MANA VOID</Text>
            </div> </TouchableOpacity>
</div>

<div className = 'itemsHero'>
  <TouchableOpacity className = 'early' order = '1' onPress = {()=> alert({Early_Items1})}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fd/Tango_icon.png/revision/latest/scale-to-width-down/88?cb=20160530173658'/>    
  </TouchableOpacity>
  <TouchableOpacity className = 'early' onPress = {()=>{alert('Quelling Blade\nЦена: 130\nАктивная: Chop Tree\nУничтожает выбранное дерево.\nДальность применения: 350\nПассивная: Quell\nУвеличивает урон от атак по существам, не являющимися героями, на 15 для героев ближнего боя или на 6 — для дальнего.\nКулдаун: 4\nЭффекты от нескольких копий этого предмета не сочетаются.\nТопор павшего гнома, позволяющий с лёгкостью продираться сквозь лес.')}}>
<img   style = {{width: 86}}  className = 'early' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/94/Quelling_Blade_icon.png/revision/latest/scale-to-width-down/88?cb=20160530172535'/>    
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Iron Branch\nЦена: 50\n+ 1 ко всем атрибутам\nИспользование: Plant Tree\nСажает в указанное место маленькое счастливое деревце, которое исчезнет через 20 секунд.\nДальность применения: 400\nОбычная, казалось бы, веточка дарует владельцу стойкость железного дерева, с которого она срублена.')}}>
<img   style = {{width: 86}} className = 'early' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a3/Iron_Branch_icon.png/revision/latest/scale-to-width-down/88?cb=20160530171055'/> 
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Circlet\nЦена: 155 \n+ 2 ко всем атрибутам\nЭлегантная тиара, предназначенная для человеческих принцесс.')}}>
<img  style = {{width: 86}} className = 'early' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/28/Circlet_icon.png/revision/latest/scale-to-width-down/88?cb=20160530165058'/>
</TouchableOpacity>

  <text className = 'earlyText'> Early game </text><img></img><img></img>
  
     <TouchableOpacity  style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Wraith Band\nЦена: 510\n+ 5 к ловкости\n+ 2 к силе\n+ 2 к интеллекту\n+ 5 к скорости атаки\n+ 1.5 к броне\nТиара, от которой доносится лёгкий шёпот.')}}>
     <img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg'/>
     </TouchableOpacity>
     <TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Power Treads\nЦена: 1400\n+ 45 к скорости передвижения\n+ 10 к выбранному атрибуту\n+ 25 к скорости атаки\nАктивная: Switch Attribute\nМеняет атрибут, который получает бонус: +10 к силе, ловкости или интеллекту.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nPower Treads можно собрать, используя Belt of Strength, Band of Elvenskin или Robe of the Magi.\nПара сапог, выделанных из жёсткой кожи, способна изменять свои свойства по желанию владельца.')}}>
     <img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/power-treads-ead692931ccfbcbb43f63b29d1282eb21a387e13eea6763a2b4117f8f3efc0cc.jpg'/>
     </TouchableOpacity>
     <TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Battle Fury\nЦена: 4180\n+ 7.5 к восстановлению здоровья\n+ 3.25 к восстановлению маны\nАктивная: Chop Tree\nСрубает выбранное дерево.\nДальность применения: 350\nПассивная: Quell\nУвеличивает урон от атак по существам, не являющимися героями, на 18 для героев ближнего боя и на 6 — для дальнего.\nПассивная: Cleave\nАтаки героя прорубают жертву, нанося врагам в радиусе 650 вокруг неё физический урон (только в ближнем бою).\n• Урон героям: 70%\n• Урон крипам: 50%\nКулдаун: 4\nПрорубающий урон проходит сквозь невосприимчивость к магии.\nКаждый предмет или способность, дарующие прорубающую атаку, наносят урон отдельно друг от друга.\nВладелец этого могучего топора может выкашивать врагов целыми рядами.')}}>
     <img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c1/Battle_Fury_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163833'/>
     </TouchableOpacity>
<TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Desolator\nЦена: 3,500\n+ 60 к урону\nПассивная: Corruption\nАтаки снижают броню цели на -6. Эффект длится 7.0 сек.\nСнижение брони действует на постройки.\nЭффект можно развеять.\nЭтим нечистым оружием пытали политических преступников.')}}>
     <img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/84/Desolator_icon.png/revision/latest/scale-to-width-down/88?cb=20160530165519'/>
     </TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Black King Bar\nЦена: 4,050\n+ 10 к силе\n+ 24 к урону\nАктивная: Avatar\nДаёт невосприимчивость к магии. Длительность уменьшается с каждым использованием.\nДлительность: 10.0 / 9.0 / 8.0 / 7.0 / 6.0 / 5.0\nТип развеивания: нормальное\nКулдаун: 70\nПокупка другого Black King Bar не обновит время его действия.\nИспользование Black King Bar снимает некоторые положительные эффекты.\nМощный посох, наделённый силой гигантов.')}}>
<img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/72/Black_King_Bar_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163925'/>        
</TouchableOpacity>
   <text className = 'midText'> Mid game </text>  <img></img>



   <TouchableOpacity order = '1' onPress = {()=> {alert('Satanic\nЦена: 5,800\n+ 25 к силе\n+ 25 к урону\n+ 30% к сопротивлению эффектам\nАктивируемая: Unholy Rage\nУвеличивает эффект вампиризма до 200% на 5.0 сек.\nПассивная: Lifesteal\nКаждая атака восстанавливает владельцу здоровье в размере 25% от нанесённого урона.\nКулдаун: 35\nЭффект можно развеять.\nКолоссальная сила в обмен на вашу душу.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/dd/Satanic_icon.png/revision/latest/scale-to-width-down/88?cb=20160530173201'/>    
  </TouchableOpacity>
  <TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Power Treads\nЦена: 1400\n+ 45 к скорости передвижения\n+ 10 к выбранному атрибуту\n+ 25 к скорости атаки\nАктивная: Switch Attribute\nМеняет атрибут, который получает бонус: +10 к силе, ловкости или интеллекту.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nPower Treads можно собрать, используя Belt of Strength, Band of Elvenskin или Robe of the Magi.\nПара сапог, выделанных из жёсткой кожи, способна изменять свои свойства по желанию владельца.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/power-treads-ead692931ccfbcbb43f63b29d1282eb21a387e13eea6763a2b4117f8f3efc0cc.jpg'/>
</TouchableOpacity>
<TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Battle Fury\nЦена: 4180\n+ 7.5 к восстановлению здоровья\n+ 3.25 к восстановлению маны\nАктивная: Chop Tree\nСрубает выбранное дерево.\nДальность применения: 350\nПассивная: Quell\nУвеличивает урон от атак по существам, не являющимися героями, на 18 для героев ближнего боя и на 6 — для дальнего.\nПассивная: Cleave\nАтаки героя прорубают жертву, нанося врагам в радиусе 650 вокруг неё физический урон (только в ближнем бою).\n• Урон героям: 70%\n• Урон крипам: 50%\nКулдаун: 4\nПрорубающий урон проходит сквозь невосприимчивость к магии.\nКаждый предмет или способность, дарующие прорубающую атаку, наносят урон отдельно друг от друга.\nВладелец этого могучего топора может выкашивать врагов целыми рядами.')}}>
<img  className ='late' src='https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c1/Battle_Fury_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163833'/>    
</TouchableOpacity>
<TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Desolator\nЦена: 3,500\n+ 60 к урону\nПассивная: Corruption\nАтаки снижают броню цели на -6. Эффект длится 7.0 сек.\nСнижение брони действует на постройки.\nЭффект можно развеять.\nЭтим нечистым оружием пытали политических преступников.')}}>
<img  className = 'late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/84/Desolator_icon.png/revision/latest/scale-to-width-down/88?cb=20160530165519'/>
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Black King Bar\nЦена: 4,050\n+ 10 к силе\n+ 24 к урону\nАктивная: Avatar\nДаёт невосприимчивость к магии. Длительность уменьшается с каждым использованием.\nДлительность: 10.0 / 9.0 / 8.0 / 7.0 / 6.0 / 5.0\nТип развеивания: нормальное\nКулдаун: 70\nПокупка другого Black King Bar не обновит время его действия.\nИспользование Black King Bar снимает некоторые положительные эффекты.\nМощный посох, наделённый силой гигантов.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/72/Black_King_Bar_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163925'/>        
</TouchableOpacity>
<TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Abyssal Blade\nЦена: 6,625\n+ 25 к урону\n+ 250 к здоровью\n+ 10.0 к восстановлению здоровья\n+ 10 к силе\nАктивная: Overwhelm\nПеремещает владельца к выбранной вражеской цели и оглушает её на 2.0 сек.\nПроходит сквозь невосприимчивость к магии.\nДальность применения: 550\nПассивная: Bash\nКаждая атака может оглушить цель на 1.5 сек. и нанести 100 физического урона. Вероятность зависит от типа атаки владельца: 25% в ближнем бою, 10% — в дальнем.\nПассивная: Damage Block\nС вероятностью в 50% блокирует 70 урона от атак, если владелец — герой ближнего боя, или 35 урона, если герой дальнего боя.\nКулдаун: 35\nМана: 75\nОглушение наносится на дистанции ближнего боя.\nНе сочетается с другими оглушениями от ударов.\nЭффекты нескольких способностей, блокирующих урон, не сочетаются.\nЭффект снимается только сильным развеиванием.\n Острие потерянного клинка Повелителя бездны впивается врагу прямо в душу.')}}>   
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/abyssal-blade-7e5adf631e435735bb318686075441eec7e7f8776e4ebe9f72ce751bbca74d85.jpg'/>       
</TouchableOpacity>
    <text className = 'lateText'> Late game</text>
    </div>

<div className = 'others'>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Monkey King Bar\nЦена: 4,850\n+ 42 к урону\n+ 35 к скорости атаки\nПассивная: Pierce\nКаждая атака может с вероятностью в 75% пройти сквозь уклонение и нанести 100 дополнительного магического урона.\nМогущественный посох, принадлежавший блистательному воину.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b0/Monkey_King_Bar_icon.png/revision/latest/scale-to-width-down/88?cb=20160530171521'/>    
  </TouchableOpacity>
  <TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Manta Style\nЦена: 4,600\n+ 10 к силе\n+ 26 к ловкости\n+ 10 к интеллекту\n+ 12 к скорости атаки\n+ 8% к скорости передвижения\nАктивная: Mirror Image\nСоздаёт 2 иллюзии вашего героя, которые существуют 20 сек.\nИллюзии ближнего боя наносят 33% урона и получают 350% урона.\nИллюзии дальнего боя наносят 28% урона и получают 400% урона.\nУ героев дальнего боя перезаряжается на 15.0 сек. дольше.\nТип развеивания: нормальное\nКулдаун: 45\тМана: 125\nПредмет используется 0.1 сек., во время которой его владелец неуязвим.\nИспользование снимает многие эффекты.\nБонусы к скорости от нескольких предметов на основе Yasha не складываются.\nТопор, созданный из отражающих материалов, которые вызывают смятение во вражеских рядах.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/84/Manta_Style_icon.png/revision/latest/scale-to-width-down/88?cb=20160530171300'/>        
</TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Butterfly\nЦена: 5,275\n+ 30 к ловкости\n+ 35% к уклонению\n+ 30 к скорости атаки\n+ 25 к урону\nСкладывается по закону убывающей полезности с другими источниками уклонения.\nЭтот клинок могут обуздать лишь самые могучие и опытные воины, но владельцу он даёт невероятное проворство в бою.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/28/Butterfly_icon.png/revision/latest/scale-to-width-down/88?cb=20160530164923'/>    
  </TouchableOpacity>
  <TouchableOpacity  style = {{width: 86}} className='late' onPress={()=>{alert('Aghanims Scepter\nЦена: 4,200\n+ 10 ко всем атрибутам\n+ 175 к здоровью\n+ 175 к мане\nПассивная: Ability Upgrade\nУлучшает ульт и некоторые способности.\nСкипетр колдуна, мощью сходного с полубогами.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163350'/>       
</TouchableOpacity>
  <text className = 'otherText'> Other</text>
    </div>





    <div className = 'Talents'>
      <TouchableOpacity onPress = {()=> {alert('Stifling Dagger по трём целям  \n    25 level \n+100% к критическому урону от Coup de Grace \n \n+35% к уклонению от Blur \n    20 level\nАтаки снижают броню на 3 \n\n+350 к дальности применения Phantom Strike \n    15 level\n+12% к вампиризму\n\n–1.0 сек. перезарядки Stifling Dagger\n    10 level\n+175 к здоровью')}}>
        <img style = {{ width: 150, height: 130 }} src='https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg' />
    </TouchableOpacity>
    <img style={{width:1000}}></img>
    </div>

    <div className='block'>
      <img style={{width:80,  marginBlockStart: 15}} className='' src='https://static.wikia.nocookie.net/dota2_ru_gamepedia/images/1/1c/Stifling_Dagger_icon.png/revision/latest/scale-to-width-down/128?cb=20170816004056'/> 
     <div className= 'block1'>1</div>    <div className= 'block1'> </div>    <div className= 'block1'>3</div>    <div className= 'block1'> </div>     <div className= 'block1'>5</div>   <div className= 'block1'> </div>   <div className= 'block1'>7</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>   
    <img style={{width:80,  marginBlockStart: 15}} src='https://static.wikia.nocookie.net/dota2_gamepedia/images/2/24/Phantom_Strike_icon.png/revision/latest/scale-to-width-down/128?cb=20120517015221'/>
     <div className= 'block1'> </div>     <div className= 'block1'>2</div>   <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>8</div>   <div className= 'block1'>9</div>   <div className= 'block1'>  </div>   <div className= 'block1'>11</div>  <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/ef/Blur_icon.png/revision/latest/scale-to-width-down/128?cb=20130920013204'/>
     <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>    <div className= 'block1'>4</div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>13</div>    <div className= 'block1'>14</div>   <div className= 'block1'></div>   <div className= 'block1'>16</div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = "https://static.wikia.nocookie.net/dota2_gamepedia/images/0/0f/Coup_de_Grace_icon.png/revision/latest/scale-to-width-down/128?cb=20120517015238"/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'>6</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>12</div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'>18</div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg'/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>10</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'>15</div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    </div>
    </nav>
  );
}
