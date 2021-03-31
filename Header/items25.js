import React from 'react';
import { Button } from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native';
import './items.css';

//early items not A-Z z
export const Tango = ['Tango\nЦена: 90 \nСъедает дерево, увеличивая восстановление здоровья на 7.0. Действует 16.0 сек. Если съесть деревце от Iron Branch, то восстановится в два раза больше здоровья. Изначально имеет 3 заряда. Можно применить на союзного героя, чтобы дать ему один Tango.', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tango_lg.png'];
export const Clarity = ['Clarity\nЦена: 50\nИспользование: Replenish\nУвеличивает восстановление маны выбранного существа на 6.0. Действует 30 сек.\nВосстановление прекращается, если получить урон от вражеского героя или Рошана.\nДальность применения: 250\nЭффект можно развеять.\nЧистая вода, повышающая способность к медитации.','https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/clarity_lg.png']
export const Faery_Fire = ['Faerie Fire\nЦЕНА: 70\n+ 2 к урону\nИспользование: Imbue\nМгновенно восстанавливает 85 здоровья.\nКулдаун: 5\nПризрачное пламя с незатухающих останков Древа доброты горит в любом мире.','https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/faerie_fire_lg.png']
export const Smoke_of_Deceit = ['Smoke of Deceit\nSЦена: 50\nИспользование: Disguise\nВсе подконтрольные игрокам существа и герои в радиусе 1200 на 35.0 секунд становятся невидимыми, а скорость их передвижения увеличивается на 15%.\nЕсли совершить атаку или приблизиться к вражескому герою или башне на расстояние в 1025, то невидимость раскроется.\nДругие эффекты, раскрывающие невидимость, не действуют.\nКулдаун: 1\nЕдинственный достойный вклад волшебника-шарлатана Мирддина в колдовское искусство.', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/smoke_of_deceit_lg.png']
export const Observer_Ward = ['Observer Ward\nЦена: Бесплатно\nИспользование: Plant\nУстанавливает невидимый тотем наблюдения, который даёт наземный обзор в радиусе 1400. Действует 6 мин.\nМожно передать один вард союзному герою, зажав клавишу Ctrl.\nДальность установки: 500\nКулдаун: 1\nВид полуразумного растения, который часто разводят начинающие волшебники.', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ward_observer_lg.png']
export const Sentry_Ward = ['Sentry Ward\nЦена: 75\nИспользование: Plant\nУстанавливает невидимый тотем всевидения, раскрывающий невидимость вражеских существ и вардов в радиусе 1000, если они в зоне вашей видимости.\nДействует 8 мин.\nНе даёт наземный обзор.\nМожно передать один вард союзному герою, зажав клавишу Ctrl.\nДальность установки: 500\nКулдаун: 1\nВид растения, который когда-то выращивался в саду трусливого короля.', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ward_sentry_lg.png']
export const Enchanted_Mango = ['Enchanted Mango\nЦена: 70\n+ 0.6 к восстановлению здоровья\nИспользование: Eat Mango\nМгновенно восстанавливает 100 маны.\nДальность применения: 400\nМожно применить на союзного героя, зажав клавишу Ctrl.\nЛюбимый амфибиями горько-сладкий плод с острова Джиди.', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/enchanted_mango_lg.png']
export const Healing_Salve = ['', ''];



//Atributs
export const Iron_Branch = ['Iron Branch\nЦена: 50\n+ 1 ко всем атрибутам\nИспользование: Plant Tree\nСажает в указанное место маленькое счастливое деревце, которое исчезнет через 20 секунд.\nДальность применения: 400\nОбычная, казалось бы, веточка дарует владельцу стойкость железного дерева, с которого она срублена.','https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/branches_lg.png'];
export const Gauntlets_of_Strength = ['Gauntlets of Strength\nЦена: 145\n+ 3 к силе\nУкреплённые кожаные перчатки, которые дают грубую силу.\nМожно найти в лавке на базе', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/gauntlets_lg.png?3'];
export const Slippers_of_Agility = ['Slippers of Agility\nЦена: 145\n+ 3 к ловкости\nЛёгкие ботинки, сделанные из кожи паука, обостряют ваше чутьё\nМожно найти в лавке на базе', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/slippers_lg.png']
export const Mantle_of_Intelligence = ['Mantle of Intelligence\nЦена: 145\n+ 3 к интеллекту\nПрекрасная сапфировая мантия, которую королевы носили из поколения в поколение.', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/mantle_lg.png']; 
export const Circlet = ['Circlet\nЦена: 155 \n+ 2 ко всем атрибутам\nЭлегантная тиара, предназначенная для человеческих принцесс.', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/circlet_lg.png?3'];
export const Belt_of_Strength = ['Belt of Strength\nЦена: 450\n+ 6 к силе\nЦенный аксессуар, повышающий живучесть.', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/belt_of_strength_lg.png?3'];
export const Band_of_Elvenskin = ['Band of Elvenskin\nЦена: 450\n+ 6 к ловкости\nЭту эластичную ткань часто используют, так как она легка и не сковывает движения.', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/boots_of_elves_lg.png?3'];
export const Robe_of_the_Magi = ['Robe of the Magi\nЦена: 450\n+ 6 к интеллекту\nЭта роба пятнает душу владельца, но в обмен дарует мудрость.', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/robe_lg.png?3']
export const Crown = ['Crown\nЦена: 450\n+ 4 ко всем атрибутам\nВеличественная корона, созданная для того, чтобы порядочный, но бесталанный наследник мог отбиваться от захватчиков и править твёрдой рукой.', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/crown_lg.png?3'];
export const Ogre_Axe = ['Ogre Axe\nЦена: 1,000\n+ 10 к силе\nСила приходит, если просто подержать его в руках.', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ogre_axe_lg.png?3']; 
export const Blade_of_Alacrity = ['Blade of Alacrity\nЦена: 1,000\n+ 10 к ловкости\nДлинный клинок, насыщенный магией времени.', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/blade_of_alacrity_lg.png?3'];
export const Staff_of_Wizardry = ['Staff of Wizardry\nЦена: 1,000\n+ 10 к интеллекту\nМагический посох, которым когда-то владели древние маги.', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/staff_of_wizardry_lg.png?3'];


//Vooruzhenie
export const Quelling_Blade = ['Quelling Blade\nЦена: 130\nАктивная: Chop Tree\nУничтожает выбранное дерево.\nДальность применения: 350\nПассивная: Quell\nУвеличивает урон от атак по существам, не являющимися героями, на 15 для героев ближнего боя или на 6 — для дальнего.\nКулдаун: 4\nЭффекты от нескольких копий этого предмета не сочетаются.\nТопор павшего гнома, позволяющий с лёгкостью продираться сквозь лес.', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/quelling_blade_lg.png'];

//Magic
export const Ring_of_Regen = ['Ring of Regen\nЦена: 175\n+ 1.5 к восстановлению здоровья\nГномы считают, что это кольцо приносит удачу.', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ring_of_regen_lg.png'];

//Obshee
export const Magic_Wand = ['Magic Wand\nЦена: 450\n+ 3 ко всем атрибутам\nАктивная: Energy Charge\nМгновенно восстанавливает 15 здоровья и маны за каждый имеющийся заряд.\nМожет иметь до 20 зарядов. Получает один заряд каждый раз, когда видимый враг в радиусе 1200 использует способность.\nКулдаун: 13\nПолучает заряды, когда видимый враг в радиусе 1200 использует способность.\nПредметы и некоторые способности не добавляют зарядов.\nПростая волшебная палочка, в которой концентрируют магическую энергию начинающие волшебники и великие колдуны.', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/magic_wand_lg.png'];

//Support
export const Buckler = ['', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/buckler_lg.png'];

//Magic
export const Veil_of_Discord = ['', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/veil_of_discord_lg.png'];

//Oruzhie
export const Hood_of_Defiance = ['', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/hood_of_defiance_lg.png'];



export function Items25() {
    return(
        <View>
            
       
            <div style = {{marginBlockStart: 10}}/>
               
              <h1 style = {{marginLeft: 5}}>Items</h1>
              <div className = 'TypesOfItem'>
                  <Text>Расходуемые</Text>
                  <Text>Атрибуты</Text>
                  <Text>Вооружение</Text>
                  <Text>Магия</Text>
                  <Text>Общее</Text>
                  <Text>Поддержка</Text>
                  <Text>Магия</Text>
                  <Text>Оружие</Text>
                  <Text>Броня</Text>
                  <Text>Артефакты</Text>
                  <Text>Потайная лавка</Text>
             </div>
              <div style = {{marginLeft: 5}} className = 'AllItems'>


                  <div className = 'It1'>
                    <TouchableOpacity  onPress = {()=>alert(Clarity[0])}> <img  style = {{width: 80, marginBlockEnd: 10}} src = {Clarity[1]}/> </TouchableOpacity>
                    <TouchableOpacity  onPress = {()=>alert(Faery_Fire[0])}> <img  style = {{width: 80, marginBlockEnd: 10}} src = {Faery_Fire[1]}/> </TouchableOpacity>
                    <TouchableOpacity  onPress = {()=>alert(Smoke_of_Deceit[0])}> <img  style = {{width: 80, marginBlockEnd: 10}} src = {Smoke_of_Deceit[1]}/> </TouchableOpacity>
                    <TouchableOpacity  onPress = {()=>alert(Observer_Ward[0])}> <img  style = {{width: 80, marginBlockEnd: 10}} src = {Observer_Ward[1]}/> </TouchableOpacity>
                    <TouchableOpacity  onPress = {()=>alert(Sentry_Ward[0])}> <img  style = {{width: 80, marginBlockEnd: 10}} src = {Sentry_Ward[1]}/> </TouchableOpacity>
                    <TouchableOpacity  onPress = {()=>alert(Enchanted_Mango[0])}> <img  style = {{width: 80, marginBlockEnd: 10}} src = {Enchanted_Mango[1]}/> </TouchableOpacity>
                 </div>

                 <div className = 'It2'> 
                     <TouchableOpacity onPress = {()=>{alert(Iron_Branch[0])}}><img style = {{width: 80, marginBlockEnd: 10}} src = {Iron_Branch[1]}/></TouchableOpacity>  
                     <TouchableOpacity onPress = {()=>{alert(Gauntlets_of_Strength[0])}}><img style = {{width: 80, marginBlockEnd: 10}} src = {Gauntlets_of_Strength[1]}/></TouchableOpacity> 
                     <TouchableOpacity onPress = {()=>{alert(Slippers_of_Agility[0])}}><img style = {{width: 80, marginBlockEnd: 10}} src = {Slippers_of_Agility[1]}/></TouchableOpacity>    
                     <TouchableOpacity onPress = {()=>{alert(Mantle_of_Intelligence[0])}}><img style = {{width: 80, marginBlockEnd: 10}} src = {Mantle_of_Intelligence[1]}/></TouchableOpacity>    
                     <TouchableOpacity onPress = {()=>{alert(Circlet[0])}}><img style = {{width: 80, marginBlockEnd: 10}} src = {Circlet[1]}/></TouchableOpacity>    
                     <TouchableOpacity onPress = {()=>{alert(Belt_of_Strength[0])}}><img style = {{width: 80, marginBlockEnd: 10}} src = {Belt_of_Strength[1]}/></TouchableOpacity>    
                     <TouchableOpacity onPress = {()=>{alert(Band_of_Elvenskin[0])}}><img style = {{width: 80, marginBlockEnd: 10}} src = {Band_of_Elvenskin[1]}/></TouchableOpacity>    
                     <TouchableOpacity onPress = {()=>{alert(Robe_of_the_Magi[0])}}><img style = {{width: 80, marginBlockEnd: 10}} src = {Robe_of_the_Magi[1]}/></TouchableOpacity>    
                     <TouchableOpacity onPress = {()=>{alert(Crown[0])}}><img style = {{width: 80, marginBlockEnd: 10}} src = {Crown[1]}/></TouchableOpacity>    
                     <TouchableOpacity onPress = {()=>{alert(Ogre_Axe[0])}}><img style = {{width: 80, marginBlockEnd: 10}} src = {Ogre_Axe[1]}/></TouchableOpacity>    
                     <TouchableOpacity onPress = {()=>{alert(Blade_of_Alacrity[0])}}><img style = {{width: 80, marginBlockEnd: 10}} src = {Blade_of_Alacrity[1]}/></TouchableOpacity>    
                     <TouchableOpacity onPress = {()=>{alert(Staff_of_Wizardry[0])}}><img style = {{width: 80, marginBlockEnd: 10}} src = {Staff_of_Wizardry[1]}/></TouchableOpacity>       
                 </div>

                 <div className = 'It3'> 
                     <TouchableOpacity onPress = {()=>{alert(Quelling_Blade[0])}}><img style = {{width: 80, marginBlockEnd: 10}} src = {Quelling_Blade[1]}/></TouchableOpacity>    
                 </div>
                   
                 <div className = 'It4'> 
                      <TouchableOpacity onPress = {()=>{alert(Ring_of_Regen[0])}}><img style = {{width: 80, marginBlockEnd: 10}} src = {Ring_of_Regen[1]}/></TouchableOpacity>    
                 </div>  

                 <div className = 'It5'> 
                      <TouchableOpacity onPress = {()=>{alert(Magic_Wand[0])}}><img style = {{width: 80, marginBlockEnd: 10}} src = {Magic_Wand[1]}/></TouchableOpacity>    
                 </div>  

                 <div className = 'It6'> 
                      <TouchableOpacity onPress = {()=>{alert(Buckler[0])}}><img style = {{width: 80, marginBlockEnd: 10}} src = {Buckler[1]}/></TouchableOpacity>    
                 </div>  
                  
                <div className = 'It7'> 
                      <TouchableOpacity onPress = {()=>{alert(Veil_of_Discord[0])}}><img style = {{width: 80, marginBlockEnd: 10}} src = {Veil_of_Discord[1]}/></TouchableOpacity>    
                 </div>  

                 <div className = 'It8'> 
                      <TouchableOpacity onPress = {()=>{alert(Hood_of_Defiance[0])}}><img style = {{width: 80, marginBlockEnd: 10}} src = {Hood_of_Defiance[1]}/></TouchableOpacity>    
                 </div>  
                 

              </div>
            </View>
    );
}























