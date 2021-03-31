import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import './skills.css';

export  function Ursa() {
  return (
    <nav >
      
      <h1 className = 'name'> Ursa</h1>
       <img  style = {{height:150}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/ursa_full.png?v=6299534?v=6299534'/> 
<div className = 'skills' >
  
        
          <TouchableOpacity onPress = {()=>{ return (alert('СПОСОБНОСТЬ: No Target\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Да\nГерой прыгает вперёд на расстояние в 250 и бьёт по земле, нанося урон всем врагам вокруг и замедляя их на [4] сек.\nDAMAGE: 75 / 125 / 175 / 225\nРАДИУС: 385\nЗАМЕДЛЕНИЕ: -10% / -20% / -30% / -40%\nВремя каста: 0s\nКулдаун: 11 / 10 / 9 / 8\nМана: 85\nКак земля содрогается под весом могучих медвежьих шагов, так и противники начинают дрожать при его виде..'))}}>
          <div className = 'MB' > 
      <img style = {{width: 105, height:105}} src='https://ru.dotabuff.com/assets/skills/ursa-earthshock-5357-f6becd8d777f67d49e5e6bb55f6d0430b46d4aa6e52f780e366118eabb27b3fa.jpg'></img> 
       <Text style = {{color:'#fff'}}>  EARTHSHOCK</Text>
          </div>
          </TouchableOpacity>
                     <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: No Target\nМОЖНО РАЗВЕЯТЬ: Да\nИспользуя свой боевой опыт, герой увеличивает скорость нескольких следующих атак.\nЭффект не снимается предметом Black King Bar.\nНе попавшая по цели атака всё равно расходует заряд этой способности.\nАТАК: 3 / 4 / 5 / 6\nДОП. СКОРОСТЬ АТАКИ: 400\nВремя каста 0.3s\nКулдаун: 15 / 13 / 11 / 9\nМана: 40 / 50 / 60 / 70\nВнушительный размер обманчив — Ульфсаар чрезвычайно ловок.'); }}>
                     <div className = 'blink'>
                       <img style = {{width: 105, height:105}} src='https://ru.dotabuff.com/assets/skills/ursa-overpower-5358-fad169d78f31e905d4923ea63a15e0dc035bbc4d62b506d0ff8226b79144b665.jpg'/>
                     <Text style = {{color:'#fff'}}>  OVERPOWER</Text>
                     </div>
                     </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Passive\nУРОН: физический\nСКВОЗЬ НЕВОСПР. К МАГИИ: Yes\nМОЖНО РАЗВЕЯТЬ: Нет\nКогти героя всё глубже впиваются в плоть врага, нанося увеличенный урон с каждой последующей атакой. Дополнительный урон будет потерян, если не атаковать цель в течение [8.0, 12.0, 16.0, 20.0] сек.\nДЛИТЕЛЬНОСТЬ ЭФФЕКТА: 8 / 12 / 16 / 20\nДЛИТЕЛЬНОСТЬ ЭФФЕКТА НА РОШАНЕ: 10.0\nУРОН ЗА АТАКУ: 9 / 18 / 27 / 36\nВ природе раненые редко переживают нападение голодных хищников.')}}>
    <div className = 'conterSpell'>
       <img style = {{width: 105, height:105}} src = 'https://ru.dotabuff.com/assets/skills/ursa-fury-swipes-5359-f3ba0bd9fd7f28df3f525a1a25a3682254175f8a269766e73d2797eab7a8b971.jpg'/>
  <Text style = {{color:'#fff'}}>  FURY SWIPES</Text>
  </div>
  </TouchableOpacity >
            <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: No Target\nСКВОЗЬ НЕВОСПР. К МАГИИ: Yes\nМОЖНО РАЗВЕЯТЬ: Нет\nПриводит героя в бешенство, отчего он получает сопротивление эффектам и урону. Снимает все отрицательные эффекты.\nТИП РАЗВЕИВАНИЯ: сильное\nУлучшение Аганимомом: Уменьшает перезарядку и позволяет применять эту способность, даже когда герой выведен из строя.\nСНИЖЕНИЕ УРОНА: 80%\nСОПРОТИВЛЕНИЕ ЭФФЕКТАМ: 50%\nДЛИТЕЛЬНОСТЬ: 4.0 / 4.5 / 5.0\nПЕРЕЗАРЯДКА СО СКИПЕТРОМ: 30 / 24 / 18\nКулдаун: 70 / 50 / 30\nМана: 0\nУльфсаар отдаётся своему древнему духу, приобретая невиданную свирепость.')}}><div className = 'ultimate'>
       <img style = {{width: 105, height:105}} src = "https://ru.dotabuff.com/assets/skills/ursa-enrage-5360-fc6b6fabbba75f1b5882b8c35049b30922d6c2de5bd0bb81a5a8771ab0b76636.jpg"/>
            <Text style = {{color:'#fff'}}>  ENRAGE</Text>
            </div> </TouchableOpacity>
</div>

<div className = 'itemsHero'>
  <TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Tango\nЦена: 90 \nСъедает дерево, увеличивая восстановление здоровья на 7.0. Действует 16.0 сек. Если съесть деревце от Iron Branch, то восстановится в два раза больше здоровья. Изначально имеет 3 заряда. Можно применить на союзного героя, чтобы дать ему один Tango.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/tango-daa148575735568e612a4d16bb0055cc20ce83849d14d1aac3c54a05ccb1afb3.jpg'/>    
  </TouchableOpacity>
  <TouchableOpacity className = 'early' onPress = {()=>{alert('Quelling Blade\nЦена: 130\nАктивная: Chop Tree\nУничтожает выбранное дерево.\nДальность применения: 350\nПассивная: Quell\nУвеличивает урон от атак по существам, не являющимися героями, на 15 для героев ближнего боя или на 6 — для дальнего.\nКулдаун: 4\nЭффекты от нескольких копий этого предмета не сочетаются.\nТопор павшего гнома, позволяющий с лёгкостью продираться сквозь лес.')}}>
<img   style = {{width: 86}}  className = 'early' src = 'https://ru.dotabuff.com/assets/items/quelling-blade-4bbd2e05b0275d116ba7edb8cac4d186123f37645ab63dfed7f2d05cf905cf79.jpg'/>    
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Iron Branch\nЦена: 50\n+ 1 ко всем атрибутам\nИспользование: Plant Tree\nСажает в указанное место маленькое счастливое деревце, которое исчезнет через 20 секунд.\nДальность применения: 400\nОбычная, казалось бы, веточка дарует владельцу стойкость железного дерева, с которого она срублена.')}}>
<img   style = {{width: 86}} className = 'early' src = 'https://ru.dotabuff.com/assets/items/iron-branch-e66399d58be2b8b2d34e49dffb7304b82e0b1f06eb606ea50ed1b60bbbf1aad4.jpg'/> 
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Circlet\nЦена: 155 \n+ 2 ко всем атрибутам\nЭлегантная тиара, предназначенная для человеческих принцесс.')}}>
<img  style = {{width: 86}} className = 'early' src = 'https://ru.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg'/>
</TouchableOpacity>

  <text className = 'earlyText'> Early game </text><img></img><img></img>
  
     <TouchableOpacity  style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Wraith Band\nЦена: 510\n+ 5 к ловкости\n+ 2 к силе\n+ 2 к интеллекту\n+ 5 к скорости атаки\n+ 1.5 к броне\nТиара, от которой доносится лёгкий шёпот.')}}>
     <img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg'/>
     </TouchableOpacity>
<TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Phase Boots\nЦена: 1,500\n+ 45 к скорости передвижения\n+ 18 к урону (БЛИЖНИЙ БОЙ)\n+ 12 к урону (ДАЛЬНИЙ БОЙ)\n+ 4 к броне\nАктивная: Phase\nУвеличивает скорость передвижения на 20% для героев ближнего боя и на 10% для героев дальнего боя, а также позволяет проходить сквозь существ и поворачиваться быстрее. Действует 3.0 сек.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКулдаун: 8\nБотинки, которые позволяют владельцу путешествовать между слоями реальности.')}}>
     <img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/phase-boots-0ab5b4cd6fd735cda7c7b7682386efc101e2b464fddcfc707e23e734ffea7ecd.jpg'/>
     </TouchableOpacity>
<TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Black King Bar\nЦена: 4,050\n+ 10 к силе\n+ 24 к урону\nАктивная: Avatar\nДаёт невосприимчивость к магии. Длительность уменьшается с каждым использованием.\nДлительность: 10.0 / 9.0 / 8.0 / 7.0 / 6.0 / 5.0\nТип развеивания: нормальное\nКулдаун: 70\nПокупка другого Black King Bar не обновит время его действия.\nИспользование Black King Bar снимает некоторые положительные эффекты.\nМощный посох, наделённый силой гигантов.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/black-king-bar-fdce6ae49e6393d04aa3e258c70d43ddae5a9eba4fae8d46b5594a69d8f0fe5c.jpg'/>        
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Battle Fury\nЦена: 4180\n+ 7.5 к восстановлению здоровья\n+ 3.25 к восстановлению маны\nАктивная: Chop Tree\nСрубает выбранное дерево.\nДальность применения: 350\nПассивная: Quell\nУвеличивает урон от атак по существам, не являющимися героями, на 18 для героев ближнего боя и на 6 — для дальнего.\nПассивная: Cleave\nАтаки героя прорубают жертву, нанося врагам в радиусе 650 вокруг неё физический урон (только в ближнем бою).\n• Урон героям: 70%\n• Урон крипам: 50%\nКулдаун: 4\nПрорубающий урон проходит сквозь невосприимчивость к магии.\nКаждый предмет или способность, дарующие прорубающую атаку, наносят урон отдельно друг от друга.\nВладелец этого могучего топора может выкашивать врагов целыми рядами.')}}>
     <img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/battle-fury-203bd771b2dac1bba198ceacc7431c4b75ddf6a742fad58a913545cc18a9328f.jpg'/>
     </TouchableOpacity>
<TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Manta Style\nЦена: 4,600\n+ 10 к силе\n+ 26 к ловкости\n+ 10 к интеллекту\n+ 12 к скорости атаки\n+ 8% к скорости передвижения\nАктивная: Mirror Image\nСоздаёт 2 иллюзии вашего героя, которые существуют 20 сек.\nИллюзии ближнего боя наносят 33% урона и получают 350% урона.\nИллюзии дальнего боя наносят 28% урона и получают 400% урона.\nУ героев дальнего боя перезаряжается на 15.0 сек. дольше.\nТип развеивания: нормальное\nКулдаун: 45\тМана: 125\nПредмет используется 0.1 сек., во время которой его владелец неуязвим.\nИспользование снимает многие эффекты.\nБонусы к скорости от нескольких предметов на основе Yasha не складываются.\nТопор, созданный из отражающих материалов, которые вызывают смятение во вражеских рядах.')}}>
     <img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/skull-basher-d61da321754816905fde47972c8bfacccd244cc4ce4d5c99e125c06f201edfca.jpg'/>
     </TouchableOpacity>
   <text className = 'midText'> Mid game </text>  <img></img>



   <TouchableOpacity onPress = {()=> {alert('Sange and Yasha\nЦена: 4,100\n+ 16 к силе\n+ 16 к ловкости\n+ 20% к сопротивлению эффектам\n+ 16 к скорости атаки\n+ 10% к скорости передвижения\n+ 30% к здоровью от восстановления и вампиризма\nБонусы к скорости от нескольких предметов на основе Yasha не складываются.\nSange и Yasha, собранные вместе и ведомые лунным светом, становятся грозным оружием.')}}>
<img  style = {{width: 86}} className = 'late' order = '1' src = 'https://ru.dotabuff.com/assets/items/sange-and-yasha-73058ad52402e43fded8b4e943e63bbdfed5b506f5431f7f9b7abfd294af1633.jpg'/>    
  </TouchableOpacity>
<TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Phase Boots\nЦена: 1,500\n+ 45 к скорости передвижения\n+ 18 к урону (БЛИЖНИЙ БОЙ)\n+ 12 к урону (ДАЛЬНИЙ БОЙ)\n+ 4 к броне\nАктивная: Phase\nУвеличивает скорость передвижения на 20% для героев ближнего боя и на 10% для героев дальнего боя, а также позволяет проходить сквозь существ и поворачиваться быстрее. Действует 3.0 сек.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКулдаун: 8\nБотинки, которые позволяют владельцу путешествовать между слоями реальности.')}}>
<img  className = 'late' src = 'https://ru.dotabuff.com/assets/items/phase-boots-0ab5b4cd6fd735cda7c7b7682386efc101e2b464fddcfc707e23e734ffea7ecd.jpg'/>
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Black King Bar\nЦена: 4,050\n+ 10 к силе\n+ 24 к урону\nАктивная: Avatar\nДаёт невосприимчивость к магии. Длительность уменьшается с каждым использованием.\nДлительность: 10.0 / 9.0 / 8.0 / 7.0 / 6.0 / 5.0\nТип развеивания: нормальное\nКулдаун: 70\nПокупка другого Black King Bar не обновит время его действия.\nИспользование Black King Bar снимает некоторые положительные эффекты.\nМощный посох, наделённый силой гигантов.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/black-king-bar-fdce6ae49e6393d04aa3e258c70d43ddae5a9eba4fae8d46b5594a69d8f0fe5c.jpg'/>        
</TouchableOpacity>
<TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Battle Fury\nЦена: 4180\n+ 7.5 к восстановлению здоровья\n+ 3.25 к восстановлению маны\nАктивная: Chop Tree\nСрубает выбранное дерево.\nДальность применения: 350\nПассивная: Quell\nУвеличивает урон от атак по существам, не являющимися героями, на 18 для героев ближнего боя и на 6 — для дальнего.\nПассивная: Cleave\nАтаки героя прорубают жертву, нанося врагам в радиусе 650 вокруг неё физический урон (только в ближнем бою).\n• Урон героям: 70%\n• Урон крипам: 50%\nКулдаун: 4\nПрорубающий урон проходит сквозь невосприимчивость к магии.\nКаждый предмет или способность, дарующие прорубающую атаку, наносят урон отдельно друг от друга.\nВладелец этого могучего топора может выкашивать врагов целыми рядами.')}}>
<img  className ='late' src='https://ru.dotabuff.com/assets/items/battle-fury-203bd771b2dac1bba198ceacc7431c4b75ddf6a742fad58a913545cc18a9328f.jpg'/>    
</TouchableOpacity>
<TouchableOpacity className ='late'  style = {{width: 86}} onPress = {()=> {alert('Abyssal Blade\nЦена: 6,625\n+ 25 к урону\n+ 250 к здоровью\n+ 10.0 к восстановлению здоровья\n+ 10 к силе\nАктивная: Overwhelm\nПеремещает владельца к выбранной вражеской цели и оглушает её на 2.0 сек.\nПроходит сквозь невосприимчивость к магии.\nДальность применения: 550\nПассивная: Bash\nКаждая атака может оглушить цель на 1.5 сек. и нанести 100 физического урона. Вероятность зависит от типа атаки владельца: 25% в ближнем бою, 10% — в дальнем.\nПассивная: Damage Block\nС вероятностью в 50% блокирует 70 урона от атак, если владелец — герой ближнего боя, или 35 урона, если герой дальнего боя.\nКулдаун: 35\nМана: 75\nОглушение наносится на дистанции ближнего боя.\nНе сочетается с другими оглушениями от ударов.\nЭффекты нескольких способностей, блокирующих урон, не сочетаются.\nЭффект снимается только сильным развеиванием.\n Острие потерянного клинка Повелителя бездны впивается врагу прямо в душу.')}}>   
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/abyssal-blade-7e5adf631e435735bb318686075441eec7e7f8776e4ebe9f72ce751bbca74d85.jpg'/>       
</TouchableOpacity>
<TouchableOpacity onPress = {()=> {alert('Monkey King Bar\nЦена: 4,850\n+ 42 к урону\n+ 35 к скорости атаки\nПассивная: Pierce\nКаждая атака может с вероятностью в 75% пройти сквозь уклонение и нанести 100 дополнительного магического урона.\nМогущественный посох, принадлежавший блистательному воину.')}}>
<img  style = {{width: 86}} className = 'late' src = 'https://ru.dotabuff.com/assets/items/monkey-king-bar-cab629aaa7a1b3a7253044b66d88e793f7164340435dd14be8306e342ca007f6.jpg'/>    
  </TouchableOpacity>
    <text className = 'lateText'> Late game</text>
    </div>

<div className = 'others'>
 <TouchableOpacity order = '1' onPress = {()=> {alert('Blink Dagger\nЦена: 2,250\nАктивная: Blink\nМгновенно перемещает к указанной точке на расстоянии до 1200.\nПредмет нельзя использовать, если последние 3.0 сек. его владелец получал урон от вражеских героев или Рошана.\nКулдаун: 15\nЕсли применить на себя, переместит в сторону союзного фонтана.\nЕсли применить предмет дальше, чем позволяет способность, дальность перемещения составит 4/5 от максимально возможной.\nЛегендарный кинжал, которым когда-то пользовался самый быстрый убийца на свете.')}}>
<img  style = {{width: 86}} className = 'mid' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4c/Blink_Dagger_icon.png/revision/latest/scale-to-width-down/88?cb=20160530164152'/>    
  </TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Satanic\nЦена: 5,800\n+ 25 к силе\n+ 25 к урону\n+ 30% к сопротивлению эффектам\nАктивируемая: Unholy Rage\nУвеличивает эффект вампиризма до 200% на 5.0 сек.\nПассивная: Lifesteal\nКаждая атака восстанавливает владельцу здоровье в размере 25% от нанесённого урона.\nКулдаун: 35\nЭффект можно развеять.\nКолоссальная сила в обмен на вашу душу.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/dd/Satanic_icon.png/revision/latest/scale-to-width-down/88?cb=20160530173201'/>    
  </TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Aghanims Scepter\nЦена: 4,200\n+ 10 ко всем атрибутам\n+ 175 к здоровью\n+ 175 к мане\nПассивная: Ability Upgrade\nУлучшает ульт и некоторые способности.\nСкипетр колдуна, мощью сходного с полубогами.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/aghanims-scepter-72bdb9aee9187bc224f24985bf92100a34b1ba630991a240d7ccb26ba899079e.jpg'/>    
  </TouchableOpacity>
  <text className = 'otherText'> Other</text>
    </div>





    <div className = 'Talents'>
      <TouchableOpacity onPress = {()=> {alert('+3 к числу атак от Overpower  \n    25 level \n+480 к радиусу Earthshock \n \n+12 к урону от Fury Swipes \n    20 level\n–3.0 сек. перезарядки Earthshock \n\n+300 к здоровью \n    15 level\n+12 к ловкости\n\n+1.5 маны в секунду\n    10 level\n+20 сек. действия Fury Swipes')}}>
        <img style = {{ width: 150, height: 130 }} src='https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg' />
    </TouchableOpacity>
    <img style={{width:1000}}></img>
    </div>

    <div className='block'>
      <img style={{width:80,  marginBlockStart: 15}} className='' src='https://ru.dotabuff.com/assets/skills/ursa-earthshock-5357-f6becd8d777f67d49e5e6bb55f6d0430b46d4aa6e52f780e366118eabb27b3fa.jpg'/> 
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>11</div>   <div className= 'block1'>  </div>   <div className= 'block1'>13</div>    <div className= 'block1'>14</div>    <div className= 'block1'></div>   <div className= 'block1'>16</div>   <div className= 'block1'></div>  <div className= 'block1'></div>   
    <img style={{width:80,  marginBlockStart: 15}} src= 'https://ru.dotabuff.com/assets/skills/ursa-overpower-5358-fad169d78f31e905d4923ea63a15e0dc035bbc4d62b506d0ff8226b79144b665.jpg'/>
     <div className= 'block1'> </div>     <div className= 'block1'>2</div>   <div className= 'block1'> </div>    <div className= 'block1'>4</div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>8</div>   <div className= 'block1'>9</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>  <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/ursa-fury-swipes-5359-f3ba0bd9fd7f28df3f525a1a25a3682254175f8a269766e73d2797eab7a8b971.jpg'/>
     <div className= 'block1'>1</div>     <div className= 'block1'> </div>   <div className= 'block1'>3</div>    <div className= 'block1'> </div>     <div className= 'block1'>5</div>   <div className= 'block1'> </div>   <div className= 'block1'>7</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>   <div className= 'block1'></div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = "https://ru.dotabuff.com/assets/skills/ursa-enrage-5360-fc6b6fabbba75f1b5882b8c35049b30922d6c2de5bd0bb81a5a8771ab0b76636.jpg"/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'>6</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>12</div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'>18</div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg'/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>10</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'>15</div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    </div>
    </nav>
  );
}

