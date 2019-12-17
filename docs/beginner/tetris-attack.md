# 俄羅斯方塊的進攻

俄羅斯方塊的進攻方式就是消除行數來決定的，消除的方法像是：

tetris {
      iiii

  s
j ssoo
jjjsoo  
}

tetris {


  s
j ssoo
jjjsooiiii
}

右上角這個方塊放下去之後，顯而易見的會排滿一行啊！那一行就會消除了變成這樣：

tetris {


  s
j ssoo
xxxxxxxxxx
}

tetris {



  s
j ssoo
}

可是呢，消除一行是不會有攻擊的唷，因為這實在是太簡單了！務必要累積到兩行或三行、甚至四行，才會發出攻擊給予對方垃圾的！

## 消行攻擊

像是這樣消除 2 行，就會丟給對方 1 行垃圾：

tetris {
 s
 ss
  s

g
g  ggggggg
gg ggggggg
}

像是這樣消除 3 行，就會丟給對方 2 行垃圾：

tetris {
 ll
  l
  l
       gg
g  ggggggg
gg ggggggg
gg ggggggg
}

特別是這樣消除 4 行的話，會給予對方滿滿的 4 行垃圾：

tetris {
  i
  i
  i
  i      g
        gg
gg ggggggg
gg ggggggg
gg ggggggg
gg ggggggg
}

## Back to back 攻擊加成
如果**上次的消除**是 *4 行*，中間沒有疊其他方塊，或是疊了其他方塊沒有消除任何東西，**下一次消除**也是一次消除 *4 行*的話，發出的攻擊除了原本就會給對方的 4 行垃圾，還會多加給對方 **1** 行稱呼為「**back to back**」的獎勵攻擊垃圾喔！也就是 **5** 行了！

::: tip
然而整個場地也才 20 行，所以連續 4 次 5 行的 back to back 攻擊，幾乎就等於勝利了呢！

所以這個遊戲最好就是一直快速的消除四行！非常考驗你的技術！
:::

::: tip 其他 Back to back 的條件
除了剛剛提到的消除四行這招，可以達成 back to back 的條件，其實還有一招連續 **T轉** 、甚至是 **T轉** 跟 **消除四行** 交互連續達成更兇猛的 back to back，不過這個就等到進階的地方再講吧！
:::

## 連續消除（又稱 Ren 或 Combo）

待續

## 完美全消（Perfect Clear）

待續