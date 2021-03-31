import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import './skills.css';

export  function Sven() {
  return (
    <nav >
      
      <h1 className = 'name'> Sven</h1>
       <img  style = {{height:150}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/sven_full.png?v=6299534?v=6299534'/> 
<div className = 'skills' >
  
        
          <TouchableOpacity onPress = {()=>{ return (alert('СПОСОБНОСТЬ: Unit Target\nДЕЙСТВУЕТ: Enemy Units\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Сильным развеиванием\nГерой высвобождает всю мощь своей магической рукавицы, нанося жертве и её союзникам в небольшой области урон и оглушая их.\nУлучшение Аганим: Увеличивает дальность применения и перемещает владельца вместе со снарядом. Он атакует цель способности.\nУрон: 110 / 180 / 250 / 320\nДЛИТЕЛЬНОСТЬ: 1.25 / 1.5 / 1.75 / 2.0\nРАДИУС: 255\nДОП. ДАЛЬНОСТЬ СПОСОБНОСТИ СО СКИПЕТРОМ: 500\nВремя каста: 0.3s\nКулдаун: 18 / 16 / 14 / 12\nМана: 110 / 120 / 130 / 140\nЖелезная рукавица мятежного рыцаря, позаимствованная в отцовской школе, выбивает дух из любого врага.'))}}>
          <div className = 'MB' > 
      <img style = {{width: 105, height:105}} src='https://ru.dotabuff.com/assets/skills/sven-storm-hammer-5094-80e465f9e45b4427eefe24f1f13aa2446358f81c5f21f381d2f448764d0cb8a9.jpg'></img> 
       <Text style = {{color:'#fff'}}>  STORM HAMMER</Text>
          </div>
          </TouchableOpacity>
                     <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Passive\nСКВОЗЬ НЕВОСПР. К МАГИИ: Yes\nМогучие удары героя прорубают жертву, поражая всех врагов вокруг неё.\nПрорубающий урон проходит сквозь невосприимчивость к магии.\nПрорубающий урон наносится в круговой области перед героем.\nПРОРУБАЮЩИЙ УРОН: 30% / 50% / 70% / 90%\nВигильские рыцари до сих пор надеются вернуть Клинок изгоя, украденный мятежным послушником, ведь это оружие способно прорубать целые ряды слабых воинов.'); }}>
                     <div className = 'blink'>
                       <img style = {{width: 105, height:105}} src='https://ru.dotabuff.com/assets/skills/sven-great-cleave-5095-34068cbf05e5d2498ac7a4b47d66215b6699cce5eb9ac31e564995c4308c2935.jpg'/>
                     <Text style = {{color:'#fff'}}>  GREAT CLEAVE</Text>
                     </div>
                     </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: No Target\nСКВОЗЬ НЕВОСПР. К МАГИИ: Yes\nМОЖНО РАЗВЕЯТЬ: Да\nБоевой клич поднимает дух союзных героев и увеличивает их броню и урон на 8 сек.\nДОП. СКОРОСТЬ: 8% / 12% / 16% / 20%\nДОП. БРОНЯ: 6 / 9 / 12 / 15\nРАДИУС: 700\nДЛИТЕЛЬНОСТЬ: 8\nВремя каста: 0s\nКулдаун: 32 / 28 / 24 / 20Мана: 30 / 40 / 50 / 60\nЦитируя Вигильский кодекс во всеуслышание, рыцарь укрепляется в верности своим мятежным законам. Как поэтично!')}}>
    <div className = 'conterSpell'>
       <img style = {{width: 105, height:105}} src = 'https://ru.dotabuff.com/assets/skills/sven-warcry-5096-6b74f8f61564ba763e327abb496e3bb3a26c6f5f9683dea6ebdf52f175d62189.jpg'/>
  <Text style = {{color:'#fff'}}>  WARCRY</Text>
  </div>
  </TouchableOpacity >
            <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: No Target\nМОЖНО РАЗВЕЯТЬ: Нет\nSven концентрирует свою неконтролируемую мощь, получая бонус к урону на [40] сек.\nДополнительный урон подсчитывается на основе базового урона и основной характеристики.\nДОПОЛНИТЕЛЬНЫЙ УРОН: 110% / 160% / 210%\nВремя каста: 0.3s\nКулдаун: 110\nМана: 100 / 150 / 200\nНаделённый силой, сокрушившей Священный шлем, мятежный рыцарь непобедим в ближнем бою.')}}><div className = 'ultimate'>
       <img style = {{width: 105, height:105}} src = "https://ru.dotabuff.com/assets/skills/sven-gods-strength-5097-e77cf916210410e5fba303fc470e24f51e8d5940bba02b73d106480ac0ae3b55.jpg"/>
            <Text style = {{color:'#fff'}}>  GOD'S STRENGTH</Text>
            </div> </TouchableOpacity>
</div>

<div className = 'itemsHero'>
  <TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Tango\nЦена: 90 \nСъедает дерево, увеличивая восстановление здоровья на 7.0. Действует 16.0 сек. Если съесть деревце от Iron Branch, то восстановится в два раза больше здоровья. Изначально имеет 3 заряда. Можно применить на союзного героя, чтобы дать ему один Tango.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/tango-daa148575735568e612a4d16bb0055cc20ce83849d14d1aac3c54a05ccb1afb3.jpg'/>    
  </TouchableOpacity>
  <TouchableOpacity className = 'early' onPress = {()=>{alert('Quelling Blade\nЦена: 130\nАктивная: Chop Tree\nУничтожает выбранное дерево.\nДальность применения: 350\nПассивная: Quell\nУвеличивает урон от атак по существам, не являющимися героями, на 15 для героев ближнего боя или на 6 — для дальнего.\nКулдаун: 4\nЭффекты от нескольких копий этого предмета не сочетаются.\nТопор павшего гнома, позволяющий с лёгкостью продираться сквозь лес.')}}>
<img   style = {{width: 86}}  className = 'early' src = 'https://ru.dotabuff.com/assets/items/quelling-blade-4bbd2e05b0275d116ba7edb8cac4d186123f37645ab63dfed7f2d05cf905cf79.jpg'/>    
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Enchanted Mango\nЦена: 70\n+ 0.6 к восстановлению здоровья\nИспользование: Eat Mango\nМгновенно восстанавливает 110 маны.\nДальность применения: 400\nМожно применить на союзного героя, зажав клавишу Ctrl.\nЛюбимый амфибиями горько-сладкий плод с острова Джиди.')}}>
<img   style = {{width: 86}} className = 'early' src = 'https://ru.dotabuff.com/assets/items/enchanted-mango-4e423e0504c1827f556fb1f76f58d5af2f515aaa9837d7815908c139bf1391e4.jpg'/> 
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Circlet\nЦена: 155 \n+ 2 ко всем атрибутам\nЭлегантная тиара, предназначенная для человеческих принцесс.')}}>
<img  style = {{width: 86}} className = 'early' src = 'https://ru.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg'/>
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Iron Branch\nЦена: 50\n+ 1 ко всем атрибутам\nИспользование: Plant Tree\nСажает в указанное место маленькое счастливое деревце, которое исчезнет через 20 секунд.\nДальность применения: 400\nОбычная, казалось бы, веточка дарует владельцу стойкость железного дерева, с которого она срублена.')}}>
<img  style = {{width: 86}} className = 'early' src = 'https://ru.dotabuff.com/assets/items/iron-branch-e66399d58be2b8b2d34e49dffb7304b82e0b1f06eb606ea50ed1b60bbbf1aad4.jpg'/>
</TouchableOpacity>

  <text className = 'earlyText'> Early game </text><img></img>
  
     <TouchableOpacity  style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Bracer\nЦена: 510\n+ 5 к силе\n+ 2 к ловкости\n+ 2 к интеллекту\n+ 3 к урону\n+ 0.7 к востановлению здоровья\nНаручи подойдут в том случае, если нужно укрепить защиту и повысить живучесть.')}}>
     <img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/6e/Bracer_icon.png/revision/latest/scale-to-width-down/88?cb=20160530164846'/>
     </TouchableOpacity>
<TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Mask of Madness\nЦена: 1,775\n+ 15 к урону\n+ 10 к скорости атаки\nАктивная: Berserk\nДаёт владельцу 110 скорости атаки и 30 скорости передвижения, но уменьшает его броню на 8 и запрещает ему применять способности. Действует 6.0 сек.\nПассивная: Lifesteal\nКаждая атака восстанавливает владельцу здоровье в размере 20% от нанесённого урона.\nКулдаун: 16\nМана: 25\nЭффект можно развеять.\nНадев эту маску, воин впадает в безудержную ярость.')}}>
     <img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/76/Mask_of_Madness_icon.png/revision/latest/scale-to-width-down/88?cb=20160530171413'/>
     </TouchableOpacity>
<TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Power Treads\nЦена: 1400\n+ 45 к скорости передвижения\n+ 10 к выбранному атрибуту\n+ 25 к скорости атаки\nАктивная: Switch Attribute\nМеняет атрибут, который получает бонус: +10 к силе, ловкости или интеллекту.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nPower Treads можно собрать, используя Belt of Strength, Band of Elvenskin или Robe of the Magi.\nПара сапог, выделанных из жёсткой кожи, способна изменять свои свойства по желанию владельца.')}}>
     <img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/power-treads-ead692931ccfbcbb43f63b29d1282eb21a387e13eea6763a2b4117f8f3efc0cc.jpg'/>
     </TouchableOpacity>
<TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Echo Sabre\nЦена: 2,500\n+ 15 к урону\n+ 12 к силе\n+ 10 к интеллекту\n+ 10 к скорости атаки\n+ 1.25 к восстановлению маны\nПассивная: Echo Strike\nПозволяет героям ближнего боя совершить двойную атаку, которая на 0.8 сек. уменьшает скорость передвижения жертвы на 100%.\nКулдаун: 5\nЭффект можно развеять.\nОбманчиво быстрый клинок, полный магии звука.')}}>
     <img  className ='mid' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/6b/Echo_Sabre_icon.png/revision/latest/scale-to-width-down/88?cb=20160530170159'/>
     </TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Black King Bar\nЦена: 4,050\n+ 10 к силе\n+ 24 к урону\nАктивная: Avatar\nДаёт невосприимчивость к магии. Длительность уменьшается с каждым использованием.\nДлительность: 10.0 / 9.0 / 8.0 / 7.0 / 6.0 / 5.0\nТип развеивания: нормальное\nКулдаун: 70\nПокупка другого Black King Bar не обновит время его действия.\nИспользование Black King Bar снимает некоторые положительные эффекты.\nМощный посох, наделённый силой гигантов.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/72/Black_King_Bar_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163925'/>        
</TouchableOpacity>
   <text className = 'midText'> Mid game </text> <img></img>
   <TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Daedalus\nЦена:5,150\n+ 88 к урону\nПассивная: Critical Strike\nКаждая атака может с вероятностью в 30% нанести 225% урона.\nПостройкам дополнительный урон не наносится.\nОружие невероятной мощи, с которым нелегко управиться даже самому сильному воину.')}}>  
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/24/Daedalus_icon.png/revision/latest/scale-to-width-down/88?cb=20160530165249'/>       
</TouchableOpacity>
<TouchableOpacity order = '1' onPress = {()=> {alert('Satanic\nЦена: 5,800\n+ 25 к силе\n+ 25 к урону\n+ 30% к сопротивлению эффектам\nАктивируемая: Unholy Rage\nУвеличивает эффект вампиризма до 200% на 5.0 сек.\nПассивная: Lifesteal\nКаждая атака восстанавливает владельцу здоровье в размере 25% от нанесённого урона.\nКулдаун: 35\nЭффект можно развеять.\nКолоссальная сила в обмен на вашу душу.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/dd/Satanic_icon.png/revision/latest/scale-to-width-down/88?cb=20160530173201'/>    
  </TouchableOpacity>
<TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Power Treads\nЦена: 1400\n+ 45 к скорости передвижения\n+ 10 к выбранному атрибуту\n+ 25 к скорости атаки\nАктивная: Switch Attribute\nМеняет атрибут, который получает бонус: +10 к силе, ловкости или интеллекту.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nPower Treads можно собрать, используя Belt of Strength, Band of Elvenskin или Robe of the Magi.\nПара сапог, выделанных из жёсткой кожи, способна изменять свои свойства по желанию владельца.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/6b/Power_Treads_icon.png/revision/latest/scale-to-width-down/88?cb=20160530172508'/>
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Silver Edge\nЦена: 6,100\n+ 40 к урону\n+ 45 к скорости атаки\n+ 12 к силе\n+ 10 к интеллекту\n+ 1.5 к восстановлению маны\nАктивная: Shadow Walk\nДелает героя невидимым на 14.0 сек. или до момента, когда он совершит атаку или применит способность. Эффект также увеличивает скорость передвижения на 25% и позволяет проходить сквозь существ.\nАтака, прерывающая невидимость, дополнительно нанесёт 175 физического урона и отключит пассивные способности жертвы. Длительность эффекта: 4.0 сек.\nПассивная: Echo Strike\nПозволяет героям ближнего боя совершить двойную атаку, которая на 0.8 сек. уменьшает скорость передвижения жертвы на 100%.\nКулдаун: 22\nМана: 75\nУдаром из невидимости нельзя промахнуться.\nНе проходит сквозь невосприимчивость к магии.\nПовергнув несправедливого правителя, этот клинок лишь развязал гражданскую войну.')}}>
<img  className ='late' src='https://static.wikia.nocookie.net/dota2_gamepedia/images/9/91/Silver_Edge_icon.png/revision/latest/scale-to-width-down/88?cb=20160530173343'/>    
</TouchableOpacity>
<TouchableOpacity style = {{width: 86}} onPress = {()=>{alert('Black King Bar\nЦена: 4,050\n+ 10 к силе\n+ 24 к урону\nАктивная: Avatar\nДаёт невосприимчивость к магии. Длительность уменьшается с каждым использованием.\nДлительность: 10.0 / 9.0 / 8.0 / 7.0 / 6.0 / 5.0\nТип развеивания: нормальное\nКулдаун: 70\nПокупка другого Black King Bar не обновит время его действия.\nИспользование Black King Bar снимает некоторые положительные эффекты.\nМощный посох, наделённый силой гигантов.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/72/Black_King_Bar_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163925'/>        
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} className='late' onPress={()=>{alert('Aghanims Scepter\nЦена: 4,200\n+ 10 ко всем атрибутам\n+ 175 к здоровью\n+ 175 к мане\nПассивная: Ability Upgrade\nУлучшает ульт и некоторые способности.\nСкипетр колдуна, мощью сходного с полубогами.')}}>
<img  className ='late' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163350'/>       
</TouchableOpacity>
    <text className = 'lateText'> Late game</text>
    </div>

<div className = 'others'>
    <TouchableOpacity order = '1' onPress = {()=> {alert('Sange and Yasha\nЦена: 4,100\n+ 16 к силе\n+ 16 к ловкости\n+ 20% к сопротивлению эффектам\n+ 16 к скорости атаки\n+ 10% к скорости передвижения\n+ 30% к здоровью от восстановления и вампиризма\nБонусы к скорости от нескольких предметов на основе Yasha не складываются.\nSange и Yasha, собранные вместе и ведомые лунным светом, становятся грозным оружием.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b4/Sange_and_Yasha_icon.png/revision/latest/scale-to-width-down/88?cb=20181127212530'/>    
  </TouchableOpacity>
  <TouchableOpacity onPress = {()=> {alert('Assault Cuirass\nЦена: 5,075\n+ 30 к скорости атаки\n+ 10 к броне\nПассивная: Assault Aura\nУвеличивает броню союзных построек и существ на 5, а их скорость атаки — на 30. Снижает броню врагов на -5.\nРадиус: 1200\nЭтот жуткий доспех, выкованный в кузнях нижних пределов, способен укрепить и ускорить целую армию.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d3/Assault_Cuirass_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163712'/>    
  </TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Abyssal Blade\nЦена: 6,625\n+ 25 к урону\n+ 250 к здоровью\n+ 10.0 к восстановлению здоровья\n+ 10 к силе\nАктивная: Overwhelm\nПеремещает владельца к выбранной вражеской цели и оглушает её на 2.0 сек.\nПроходит сквозь невосприимчивость к магии.\nДальность применения: 550\nПассивная: Bash\nКаждая атака может оглушить цель на 1.5 сек. и нанести 100 физического урона. Вероятность зависит от типа атаки владельца: 25% в ближнем бою, 10% — в дальнем.\nПассивная: Damage Block\nС вероятностью в 50% блокирует 70 урона от атак, если владелец — герой ближнего боя, или 35 урона, если герой дальнего боя.\nКулдаун: 35\nМана: 75\nОглушение наносится на дистанции ближнего боя.\nНе сочетается с другими оглушениями от ударов.\nЭффекты нескольких способностей, блокирующих урон, не сочетаются.\nЭффект снимается только сильным развеиванием.\n Острие потерянного клинка Повелителя бездны впивается врагу прямо в душу.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/3b/Abyssal_Blade_icon.png/revision/latest/scale-to-width-down/88?cb=20160530163207'/>    
  </TouchableOpacity>
  <text className = 'otherText'> Other</text>
    </div>





    <div className = 'Talents'>
      <TouchableOpacity onPress = {()=> {alert('+1.0 сек. оглушения от Storm Hammer  \n    25 level \n+50% к урону от Gods Strength \n \n–5 сек. перезарядки Storm Hammer	 \n    20 level\n+25 к скорости передвижения \n\nStorm Hammer развеивает положительные эффекты \n    15 level\n+15% к вампиризму\n\n+2.5 маны в секунду\n    10 level\n+7 к силе')}}>
        <img style = {{ width: 150, height: 130 }} src='https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg' />
    </TouchableOpacity>
    <img style={{width:1000}}></img>
    </div>

    <div className='block'>
      <img style={{width:80,  marginBlockStart: 15}} className='' src='https://ru.dotabuff.com/assets/skills/sven-storm-hammer-5094-80e465f9e45b4427eefe24f1f13aa2446358f81c5f21f381d2f448764d0cb8a9.jpg'/> 
     <div className= 'block1'>1</div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>13</div>    <div className= 'block1'>14</div>   <div className= 'block1'> </div>   <div className= 'block1'>16</div>   <div className= 'block1'></div>  <div className= 'block1'></div>   
    <img style={{width:80,  marginBlockStart: 15}} src='https://ru.dotabuff.com/assets/skills/sven-great-cleave-5095-34068cbf05e5d2498ac7a4b47d66215b6699cce5eb9ac31e564995c4308c2935.jpg'/>
     <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'>3</div>    <div className= 'block1'>4</div>     <div className= 'block1'>5</div>   <div className= 'block1'> </div>   <div className= 'block1'>7</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>  <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/sven-warcry-5096-6b74f8f61564ba763e327abb496e3bb3a26c6f5f9683dea6ebdf52f175d62189.jpg'/>
     <div className= 'block1'> </div>     <div className= 'block1'>2</div>   <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>8</div>   <div className= 'block1'>9</div>   <div className= 'block1'>  </div>   <div className= 'block1'>11</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = "https://ru.dotabuff.com/assets/skills/sven-gods-strength-5097-e77cf916210410e5fba303fc470e24f51e8d5940bba02b73d106480ac0ae3b55.jpg"/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'>6</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>12</div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'>18</div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg'/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>10</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'>15</div>   <div className= 'block1'> </div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    </div>
    </nav>
  );
}

