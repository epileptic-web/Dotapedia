import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {Invoker2} from './invoker2';
import './skills.css';


import {Tango, Clarity, Faery_Fire} from '../Header/items25';
export function Invoker(){


  return(
<View>
<Invoker2 name = 'Invoker' img = {`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/invoker_full.png?v=6299534?v=6299534`} 


skill1 = {`СПОСОБНОСТЬ: Passive  \nУРОН: физический  \nСКВОЗЬ НЕВОСПР. К МАГИИ: нет  \nКаждая атака сжигает ману цели и наносит ей урон, равный 50% от сожжённой маны. Эффект уменьшается до 50%, если атаку наносят иллюзии героя.  \nСЖИГАНИЕ МАНЫ ЗА УДАР: 28 / 40 / 52 / 64  \nСЖИГАЕМАЯ ДОЛЯ ОТ МАКС. МАНЫ: 1% / 2% / 3% / 4%  \nИзменённый приём турстаркурийских монахов, обращающий волшебную энергию против самого чародея.`}
img1 = {`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_quas_hp2.png?v=6299534`}
skillname1 = 'QUAS'

skill2 = {`СПОСОБНОСТЬ: Passive  \nУРОН: физический  \nСКВОЗЬ НЕВОСПР. К МАГИИ: нет  \nКаждая атака сжигает ману цели и наносит ей урон, равный 50% от сожжённой маны. Эффект уменьшается до 50%, если атаку наносят иллюзии героя.  \nСЖИГАНИЕ МАНЫ ЗА УДАР: 28 / 40 / 52 / 64  \nСЖИГАЕМАЯ ДОЛЯ ОТ МАКС. МАНЫ: 1% / 2% / 3% / 4%  \nИзменённый приём турстаркурийских монахов, обращающий волшебную энергию против самого чародея.`}
img2 = {`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_wex_hp2.png?v=6299534`}
skillname2 = 'WEX'

skill3 = {`СПОСОБНОСТЬ: Passive  \nУРОН: физический  \nСКВОЗЬ НЕВОСПР. К МАГИИ: нет  \nКаждая атака сжигает ману цели и наносит ей урон, равный 50% от сожжённой маны. Эффект уменьшается до 50%, если атаку наносят иллюзии героя.  \nСЖИГАНИЕ МАНЫ ЗА УДАР: 28 / 40 / 52 / 64  \nСЖИГАЕМАЯ ДОЛЯ ОТ МАКС. МАНЫ: 1% / 2% / 3% / 4%  \nИзменённый приём турстаркурийских монахов, обращающий волшебную энергию против самого чародея.`}
img3 = {`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_exort_hp2.png?v=6299534`}
skillname3 = 'EXORT'

skill4 = {`СПОСОБНОСТЬ: Passive  \nУРОН: физический  \nСКВОЗЬ НЕВОСПР. К МАГИИ: нет  \nКаждая атака сжигает ману цели и наносит ей урон, равный 50% от сожжённой маны. Эффект уменьшается до 50%, если атаку наносят иллюзии героя.  \nСЖИГАНИЕ МАНЫ ЗА УДАР: 28 / 40 / 52 / 64  \nСЖИГАЕМАЯ ДОЛЯ ОТ МАКС. МАНЫ: 1% / 2% / 3% / 4%  \nИзменённый приём турстаркурийских монахов, обращающий волшебную энергию против самого чародея.`}
img4 = {`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_invoke_hp2.png?v=6299534`}
skillname4 = 'INVOKE'


aganimScepter = 'Катаклизм'
aganimShard = 'ледяная дорожка'


item_Early = {[ Tango[0] , Clarity[0], Faery_Fire[0]]}
item_Early_img = {[Tango[1], Clarity[1], Faery_Fire[1],`https://ru.dotabuff.com/assets/items/ring-of-regen-9bb1625482597a8fa841983df494fe0eb494e9cba181a46f8baa4c2a807049fd.jpg`,`https://ru.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg`]}
empptyPlace1 = {[<img></img>,<img></img>]}

item_Mid = {[`Helllo world1`, `Hello world2`, `Helllo wrld 3`, 'Hello world 4']}
item_Mid_img = {[`https://ru.dotabuff.com/assets/items/tango-daa148575735568e612a4d16bb0055cc20ce83849d14d1aac3c54a05ccb1afb3.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/quelling-blade-4bbd2e05b0275d116ba7edb8cac4d186123f37645ab63dfed7f2d05cf905cf79.jpg`]}
empptyPlace2 = {[<img></img>,<img></img>]}

item_Late = {[`Helllo world1`, `Hello world2`, `Helllo wrld 3`, 'Hello world 4','Hello world 5']}
item_Late_img = {[`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg`]}

item_Others = {[`Helllo world1`, `Hello world2`, `Helllo wrld 3`, 'Hello world 4','Hello world 5']}
item_Others_img = {[`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg`]}

talents = {'–50 сек. перезарядки Mana Void  \n    25 level \n+20% к сопротивлению магии от Counterspell \n \n–2.0 сек. перезарядки Blink \n    20 level\nBlink оставляет бесконтрольную иллюзию \n\n+12 к ловкости \n    15 level\n+325 к дальности Blink\n\n+15 к скорости атаки\n    10 level\n+9 к силе'}

сила = '1.8 + 2.4'  agility = '14 + 1.9' intelect = '15 + 4.6'
stats1 = '280' stats2 = '1800/800' stats3 = '1.96' stats4 = '1.7' stats5 = '44-50' stats6 = '0.4'

skillPoint1 = {['1', ' ', '3',' ',' ',' ',' ', ' ','9','  ','11','  ','  ','  ','  ','  ','  ','  ']}
skillPoint2 = {[' ', '2', ' ',' ','5',' ','7', '8',' ','  ','  ','  ','  ','  ','  ','  ','  ','  ']}
skillPoint3 = {[' ', ' ', ' ','4',' ',' ',' ', ' ',' ','  ','  ','  ','13','14','  ','16','  ','  ']}
skillPoint4 = {[' ', ' ', ' ',' ',' ','6',' ', ' ',' ','  ','  ','12','  ','  ','  ','  ','  ','18']}
/></View>
  );
};




export function QeenofPain(){


  return(
<View>
<Invoker2 name = 'Qeen of Pain' img = {`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/queenofpain_full.png?v=6299534?v=6299534`}


img1 = {`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_quas_hp2.png?v=6299534`} 
skill1 = {`СПОСОБНОСТЬ: Passive  \nУРОН: физический  \nСdota2/images/abilities/invoker_quas_hp2.png?v=6299534`}
skillname1 = 'QUAS'

skill2 = {`СПОСОБНОСТЬ: Passive  \nУРОН: физический  \nСКВОЗЬ НЕВОСПР. К МАГИИ: нет  \nКаждая атака сжигает ману цели и наносит ей урон, равный 50% от сожжённой маны. Эффект уменьшается до 50%, если атаку наносят иллюзии героя.  \nСЖИГАНИЕ МАНЫ ЗА УДАР: 28 / 40 / 52 / 64  \nСЖИГАЕМАЯ ДОЛЯ ОТ МАКС. МАНЫ: 1% / 2% / 3% / 4%  \nИзменённый приём турстаркурийских монахов, обращающий волшебную энергию против самого чародея.`}
img2 = {`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_wex_hp2.png?v=6299534`}
skillname2 = 'WEX'

skill3 = {`СПОСОБНОСТЬ: Passive  \nУРОН: физический  \nСКВОЗЬ НЕВОСПР. К МАГИИ: нет  \nКаждая атака сжигает ману цели и наносит ей урон, равный 50% от сожжённой маны. Эффект уменьшается до 50%, если атаку наносят иллюзии героя.  \nСЖИГАНИЕ МАНЫ ЗА УДАР: 28 / 40 / 52 / 64  \nСЖИГАЕМАЯ ДОЛЯ ОТ МАКС. МАНЫ: 1% / 2% / 3% / 4%  \nИзменённый приём турстаркурийских монахов, обращающий волшебную энергию против самого чародея.`}
img3 = {`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_exort_hp2.png?v=6299534`}
skillname3 = 'EXORT'

skill4 = {`СПОСОБНОСТЬ: Passive  \nУРОН: физический  \nСКВОЗЬ НЕВОСПР. К МАГИИ: нет  \nКаждая атака сжигает ману цели и наносит ей урон, равный 50% от сожжённой маны. Эффект уменьшается до 50%, если атаку наносят иллюзии героя.  \nСЖИГАНИЕ МАНЫ ЗА УДАР: 28 / 40 / 52 / 64  \nСЖИГАЕМАЯ ДОЛЯ ОТ МАКС. МАНЫ: 1% / 2% / 3% / 4%  \nИзменённый приём турстаркурийских монахов, обращающий волшебную энергию против самого чародея.`}
img4 = {`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_invoke_hp2.png?v=6299534`}
skillname4 = 'INVOKE'



aganimScepter = 'Катаклизм'
aganimShard = 'ледяная дорожка'


item_Early = {[`Tango\nЦена: 90 \nСъедает дерево, увеличивая восстановление здоровья на 7.0. Действует 16.0 сек. Если съесть деревце от Iron Branch, то восстановится в два раза больше здоровья. Изначально имеет 3 заряда. Можно применить на союзного героя, чтобы дать ему один Tango.`, `Hello world`]}
item_Early_img = {[`https://ru.dotabuff.com/assets/items/tango-daa148575735568e612a4d16bb0055cc20ce83849d14d1aac3c54a05ccb1afb3.jpg`,`https://ru.dotabuff.com/assets/items/quelling-blade-4bbd2e05b0275d116ba7edb8cac4d186123f37645ab63dfed7f2d05cf905cf79.jpg`,`https://ru.dotabuff.com/assets/items/ring-of-regen-9bb1625482597a8fa841983df494fe0eb494e9cba181a46f8baa4c2a807049fd.jpg`,`https://ru.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg`]}
empptyPlace1 = {[<img></img>,<img></img>]}

item_Mid = {[`Helllo world1`, `Hello world2`, `Helllo wrld 3`, 'Hello world 4']}
item_Mid_img = {[`https://ru.dotabuff.com/assets/items/tango-daa148575735568e612a4d16bb0055cc20ce83849d14d1aac3c54a05ccb1afb3.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/quelling-blade-4bbd2e05b0275d116ba7edb8cac4d186123f37645ab63dfed7f2d05cf905cf79.jpg`]}
empptyPlace2 = {[<img></img>,<img></img>]}

item_Late = {[`Helllo world1`, `Hello world2`, `Helllo wrld 3`, 'Hello world 4','Hello world 5']}
item_Late_img = {[`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg`]}

item_Others = {[`Helllo world1`, `Hello world2`, `Helllo wrld 3`, 'Hello world 4','Hello world 5']}
item_Others_img = {[`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg`]}

talents = {'–50 сек. перезарядки Mana Void  \n    25 level \n+20% к сопротивлению магии от Counterspell \n \n–2.0 сек. перезарядки Blink \n    20 level\nBlink оставляет бесконтрольную иллюзию \n\n+12 к ловкости \n    15 level\n+325 к дальности Blink\n\n+15 к скорости атаки\n    10 level\n+9 к силе'}

сила = '1.8 + 2.4'  agility = '14 + 1.9' intelect = '15 + 4.6'
stats1 = '280' stats2 = '1800/800' stats3 = '1.96' stats4 = '1.7' stats5 = '44-50' stats6 = '0.4'

skillPoint1 = {['1', ' ', '3',' ',' ',' ',' ', ' ','9','  ','11','  ','  ','  ','  ','  ','  ','  ']}
skillPoint2 = {[' ', '2', ' ',' ','5',' ','7', '8',' ','  ','  ','  ','  ','  ','  ','  ','  ','  ']}
skillPoint3 = {[' ', ' ', ' ','4',' ',' ',' ', ' ',' ','  ','  ','  ','13','14','  ','16','  ','  ']}
skillPoint4 = {[' ', ' ', ' ',' ',' ','6',' ', ' ',' ','  ','  ','12','  ','  ','  ','  ','  ','18']}
/></View>
  );
};






export function AntiMage(){


  return(
    
<View>
<Invoker2 name = 'Invoker' img = {`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/antimage_full.png?v=6299534?v=6299534`} 


skill1 = {`СПОСОБНОСТЬ: Passive  \nУРОН: физический  \nСКВОЗЬ НЕВОСПР. К МАГИИ: нет  \nКаждая атака сжигает ману цели и наносит ей урон, равный 50% от сожжённой маны. Эффект уменьшается до 50%, если атаку наносят иллюзии героя.  \nСЖИГАНИЕ МАНЫ ЗА УДАР: 28 / 40 / 52 / 64  \nСЖИГАЕМАЯ ДОЛЯ ОТ МАКС. МАНЫ: 1% / 2% / 3% / 4%  \nИзменённый приём турстаркурийских монахов, обращающий волшебную энергию против самого чародея.`}
img1 = {`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_quas_hp2.png?v=6299534`}
skillname1 = 'QUAS'

skill2 = {`СПОСОБНОСТЬ: Passive  \nУРОН: физический  \nСКВОЗЬ НЕВОСПР. К МАГИИ: нет  \nКаждая атака сжигает ману цели и наносит ей урон, равный 50% от сожжённой маны. Эффект уменьшается до 50%, если атаку наносят иллюзии героя.  \nСЖИГАНИЕ МАНЫ ЗА УДАР: 28 / 40 / 52 / 64  \nСЖИГАЕМАЯ ДОЛЯ ОТ МАКС. МАНЫ: 1% / 2% / 3% / 4%  \nИзменённый приём турстаркурийских монахов, обращающий волшебную энергию против самого чародея.`}
img2 = {`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_wex_hp2.png?v=6299534`}
skillname2 = 'WEX'

skill3 = {`СПОСОБНОСТЬ: Passive  \nУРОН: физический  \nСКВОЗЬ НЕВОСПР. К МАГИИ: нет  \nКаждая атака сжигает ману цели и наносит ей урон, равный 50% от сожжённой маны. Эффект уменьшается до 50%, если атаку наносят иллюзии героя.  \nСЖИГАНИЕ МАНЫ ЗА УДАР: 28 / 40 / 52 / 64  \nСЖИГАЕМАЯ ДОЛЯ ОТ МАКС. МАНЫ: 1% / 2% / 3% / 4%  \nИзменённый приём турстаркурийских монахов, обращающий волшебную энергию против самого чародея.`}
img3 = {`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_exort_hp2.png?v=6299534`}
skillname3 = 'EXORT'

skill4 = {`СПОСОБНОСТЬ: Passive  \nУРОН: физический  \nСКВОЗЬ НЕВОСПР. К МАГИИ: нет  \nКаждая атака сжигает ману цели и наносит ей урон, равный 50% от сожжённой маны. Эффект уменьшается до 50%, если атаку наносят иллюзии героя.  \nСЖИГАНИЕ МАНЫ ЗА УДАР: 28 / 40 / 52 / 64  \nСЖИГАЕМАЯ ДОЛЯ ОТ МАКС. МАНЫ: 1% / 2% / 3% / 4%  \nИзменённый приём турстаркурийских монахов, обращающий волшебную энергию против самого чародея.`}
img4 = {`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/invoker_invoke_hp2.png?v=6299534`}
skillname4 = 'INVOKE'



aganimScepter = 'Катаклизм'
aganimShard = 'ледяная дорожка'


item_Early = {[`Tango\nЦена: 90 \nСъедает дерево, увеличивая восстановление здоровья на 7.0. Действует 16.0 сек. Если съесть деревце от Iron Branch, то восстановится в два раза больше здоровья. Изначально имеет 3 заряда. Можно применить на союзного героя, чтобы дать ему один Tango.`, `Hello world`]}
item_Early_img = {[`https://ru.dotabuff.com/assets/items/tango-daa148575735568e612a4d16bb0055cc20ce83849d14d1aac3c54a05ccb1afb3.jpg`,`https://ru.dotabuff.com/assets/items/quelling-blade-4bbd2e05b0275d116ba7edb8cac4d186123f37645ab63dfed7f2d05cf905cf79.jpg`,`https://ru.dotabuff.com/assets/items/ring-of-regen-9bb1625482597a8fa841983df494fe0eb494e9cba181a46f8baa4c2a807049fd.jpg`,`https://ru.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg`]}
empptyPlace1 = {[<img></img>,<img></img>]}

item_Mid = {[`Helllo world1`, `Hello world2`, `Helllo wrld 3`, 'Hello world 4']}
item_Mid_img = {[`https://ru.dotabuff.com/assets/items/tango-daa148575735568e612a4d16bb0055cc20ce83849d14d1aac3c54a05ccb1afb3.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/quelling-blade-4bbd2e05b0275d116ba7edb8cac4d186123f37645ab63dfed7f2d05cf905cf79.jpg`]}
empptyPlace2 = {[<img></img>,<img></img>]}

item_Late = {[`Helllo world1`, `Hello world2`, `Helllo wrld 3`, 'Hello world 4','Hello world 5']}
item_Late_img = {[`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg`]}

item_Others = {[`Helllo world1`, `Hello world2`, `Helllo wrld 3`, 'Hello world 4','Hello world 5']}
item_Others_img = {[`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg`,`https://ru.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg`]}

talents = {'–50 сек. перезарядки Mana Void  \n    25 level \n+20% к сопротивлению магии от Counterspell \n \n–2.0 сек. перезарядки Blink \n    20 level\nBlink оставляет бесконтрольную иллюзию \n\n+12 к ловкости \n    15 level\n+325 к дальности Blink\n\n+15 к скорости атаки\n    10 level\n+9 к силе'}

сила = '1.8 + 2.4'  agility = '14 + 1.9' intelect = '15 + 4.6'
stats1 = '280' stats2 = '1800/800' stats3 = '1.96' stats4 = '1.7' stats5 = '44-50' stats6 = '0.4'

skillPoint1 = {['1', ' ', '3',' ',' ',' ',' ', ' ','9','  ','11','  ','  ','  ','  ','  ','  ','  ']}
skillPoint2 = {[' ', '2', ' ',' ','5',' ','7', '8',' ','  ','  ','  ','  ','  ','  ','  ','  ','  ']}
skillPoint3 = {[' ', ' ', ' ','4',' ',' ',' ', ' ',' ','  ','  ','  ','13','14','  ','16','  ','  ']}
skillPoint4 = {[' ', ' ', ' ',' ',' ','6',' ', ' ',' ','  ','  ','12','  ','  ','  ','  ','  ','18']}
/></View>
  );
};
/*export  function Invoker() {
  let a = 155
  
  if(22>a){
      return (
    <nav >
      
      <h1 className = 'name'> Invoker1</h1>
      

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



  }else{
      return (
    <nav >
      
      <h1 className = 'name'> Invoker</h1>
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
  }}
*/
