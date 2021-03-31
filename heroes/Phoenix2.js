import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Router } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './skills.css';
import {Phantom_Assassin} from './Phantom_Assassin';


export  function Phoenix2() {
  return (
    <nav >
      <h1 className = 'name'> Phoenix </h1>
       <img style={{height:150}} src='https://static.wikia.nocookie.net/dota2_gamepedia/images/1/14/Phoenix_icon.png/revision/latest/scale-to-width-down/256?cb=20160411211344'/>
<div className = 'skills' >
  
        
          <TouchableOpacity onPress = {()=>{ return (alert('СПОСОБНОСТЬ: Point Target\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Да\nГерой летит вперёд по дуге, замедляя всех врагов на своём пути и нанося им периодический урон, а затем возвращается в исходную точку. Если применить способность Supernova, полёт прервётся.\nПолёт длится 2(3)сек. Его можно прервать, применив эту способность повторно.\nРАСХОД ЗДОРОВЬЯ: 15%\nДАЛЬНОСТЬ ПОЛЕТА: 1400\nДЛИТЕЛЬНОСТЬ ГОРЕНИЯ: 4.0\nУРОН В СЕКУНДУ: 10 / 30 / 50 / 70\nЗАМЕДЛЕНИЕ ПЕРЕДВИЖЕНИЯ: 19% / 22% / 25% / 28%\nВремя каста: 0.2s\nКулдаун: 36 / 34 / 32 / 30\nМана: 0\nХоть путешествия в космосе этому существу не чужды, полёт под куполом атмосферы приносит ему несравнимое удовольствие.'))}}>
          <div className = 'MB' > 
      <img style = {{width: 105, height:105}} src='https://static.wikia.nocookie.net/dota2_gamepedia/images/0/00/Icarus_Dive_icon.png/revision/latest/scale-to-width-down/128?cb=20140128194651'></img> 
        <Text style = {{color:'#fff'}}>  ICARUS DIVE</Text>
          </div>
          </TouchableOpacity>
                     <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: No Target\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Да\nПризывает 4 огненных духа, которые кружатся вокруг героя. Каждого из них по отдельности можно выпустить в указанную точку. Долетев до неё, дух подожжёт всех противников вокруг себя, нанося им периодический урон и уменьшая их скорость атаки.\nДухи дают обзор по месту попадания на 1 секунду.\nРАСХОД ЗДОРОВЬЯ: 20%\nВРЕМЯ ЖИЗНИ ДУХОВ: 20.0\nОБЛАСТЬ ДЕЙСТВИЯ ДУХА: 175\nДЛИТЕЛЬНОСТЬ ГОРЕНИЯ: 4.0\nЗАМЕДЛЕНИЕ АТАКИ: -80 / -100 / -120 / -140\nУРОН В СЕКУНДУ: 15 / 35 / 55 / 75\nКулдаун: 51 / 44 / 37 / 30\nМана: 120\nНепрерывно сокращающееся звёздное ядро часто испускает скоротечные всплески разумного света.'); }}>
                     <div className = 'blink'>
                       <img style = {{width: 105, height:105}} src='https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cf/Fire_Spirits_icon.png/revision/latest/scale-to-width-down/128?cb=20140128194659'/>
                     <Text style = {{color:'#fff'}}>  FIRE SPIRITS</Text>
                     </div>
                     </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Point Target\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Нет\nГерой выпускает из себя луч света ценой собственного здоровья. Луч наносит урон врагам и исцеляет союзников на определенное число плюс процент от общего запаса здоровья. Этот процент тем выше, чем дольше применяется луч.\nШирина луча — 130, длина — 1250.\nДействие заканчивается при оглушении, безмолвии, проклятье, сне или поднятии в воздух.\nАктивация предметов и других способностей не отменяет применение этой способности.\nЗАТРАТЫ ЗДОРОВЬЯ В СЕКУНДУ: 6%\nБАЗОВЫЙ УРОН В СЕКУНДУ: 14 / 20 / 26 / 32\nМАКС. УРОН: 1.5% / 3.25% / 5.0% / 6.75%\nБАЗОВОЕ ЛЕЧЕНИЕ В СЕКУНДУ: 7 / 10 / 13 / 16\nМАКС. ЛЕЧЕНИЕ: 0.625% / 1.25% / 1.875% / 2.5%\nВремя каста: 0.01s\nКулдаун: 30\nМана: 100\nПотоки, что несут энергию звезды, не шире нескольких атомов.')}}>
    <div className = 'conterSpell'>
       <img style = {{width: 105, height:105}} src = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/df/Sun_Ray_icon.png/revision/latest/scale-to-width-down/128?cb=20140128194638'/>
  <Text style = {{color:'#fff'}}>  SUN RAY</Text>
  </div>
  </TouchableOpacity >
            <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: No Target\nДЕЙСТВУЕТ: Allied Heroes\nУРОН: магический\nСКВОЗЬ НЕВОСПР. К МАГИИ: Yes\nМОЖНО РАЗВЕЯТЬ: Нет\nГерой прекращает свою жизнь ради шанса переродиться. Он превращается в горящее солнце, которое могут уничтожить атаками вражеские герои. Солнце обжигает врагов в большом радиусе, а спустя [6] сек. взрывается, оглушая всех врагов вокруг. Герой появляется на месте взрыва с полным запасом здоровья, маны и без перезарядки на других способностях.\nТИП РАЗВЕИВАНИЯ: сильное\nУлучшение с Аганимом: Увеличивает число атак для уничтожения солнца, а также позволяет применять эту способность на союзного героя, чтобы переродиться вместе с ним.\nРАДИУС: 1300\nУРОН В СЕКУНДУ: 60 / 90 / 120\nДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ: 2.0 / 2.5 / 3.0\nАТАК ДЛЯ УНИЧТОЖЕНИЯ: 6 / 8 / 10\nАТАК ДЛЯ УНИЧТОЖЕНИЯ СО СКИПЕТРОМ: 7 / 10 / 13\nДАЛЬНОСТЬ ПРИМЕНЕНИЯ СО СКИПЕТРОМ: 500\nВремя каста: 0.01s\nКулдаун: 110\nМана: 200\nСолнечный жар сверхновой звезды может быть смертелен, но из его пламени в бесконечность устремляются всё новые лучи.')}}><div className = 'ultimate'>
       <img style = {{width: 105, height:105}} src = "https://static.wikia.nocookie.net/dota2_gamepedia/images/a/aa/Supernova_icon.png/revision/latest/scale-to-width-down/128?cb=20140128194632"/>
            <Text style = {{color:'#fff'}}>  SUPERNOVA</Text>
            </div> </TouchableOpacity>

  
   
</div>
     <View>
         <Text>
           Pheonix2
         </Text>
</View>
   
Helllo
  
        
        
            
   







    </nav>
  );
}
