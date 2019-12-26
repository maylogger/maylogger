# 俄羅斯方塊的玩法

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

gS
gSSggggggg
ggSggggggg
}

像是這樣消除 3 行，就會丟給對方 2 行垃圾：

tetris {
 ll
  l
  l
       gg
gLLggggggg
ggLggggggg
ggLggggggg
}

特別是這樣消除 4 行的話，會給予對方滿滿的 4 行垃圾：

tetris {
  i
  i
  i
  i      g
        gg
ggIggggggg
ggIggggggg
ggIggggggg
ggIggggggg
}

## Back to back 攻擊加成

如果**上次的消除**是**4行**，**下一次消除**也是消除**4行**的話，會額外多給對方 **+1** 行垃圾，也就是加起來會攻擊 **5** 行的垃圾！這叫做「**back to back**」的獎勵！

::: tip
然而整個場地也才 20 行，所以連續 4 次 5 行的 back to back 攻擊，幾乎就等於勝利了呢！  
所以這個遊戲最好就是一直快速的消除四行！非常考驗你的技術！
:::

::: tip 其他 Back to back 的條件
除了上面提及的一直不斷消除 4 行這招能達成 back to back 的條件，其實還有一招連續 **T轉** 、甚至是 **T轉** 跟 **消除四行** 交互連續達成更兇猛的 back to back，不過這個就等到進階的地方再講吧！
:::

## 連續消除攻擊加成

連續消除又稱為 Ren 或 Combo，意思是拿到的每一個方塊都不斷地連續消除，不管你消除幾行，只要連續達三次以上，就會有更多的攻擊加成獎勵，規則如下：

| 連續次數 |	垃圾加量 | 連續次數 |	垃圾加量 |
| ------- | ------: | ------- | ------: |
| 1       |     + 0 | 11      |     + 5 |
| 2       |     + 1 | 12      |     + 5 |
| 3       |     + 1 | 13      |     + 5 |
| 4       |     + 2 | 14      |     + 5 |
| 5       |     + 2 | 15      |     + 5 |
| 6       |     + 3 | 16      |     + 5 |
| 7       |     + 3 | 17      |     + 5 |
| 8       |     + 4 | 18      |     + 5 |
| 9       |     + 4 | 19      |     + 5 |
| 10      |     + 4 | 20      |     + 5 |

## 完美全消（Perfect Clear）

Perfect Clear 簡稱 PC，意思就是把場上的方塊全數清除，包含自己的方塊，或是垃圾方塊，一個都不剩，就可以直接攻擊對手 10 行垃圾！

像這對戰影片的最後就做了 PC，對手立刻就撐不住了：

<div class="youtube">
<iframe width="560" height="315" src="https://www.youtube.com/embed/KqXKoo53p6U?start=19" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

::: tip 全消除的公式
全消除乍看起來很神，但其實是有一些公式的，有興趣的話，國外的 HARDDROP 網站提供了很詳盡的筆記。
- [Perfect Clear（英文）](https://harddrop.com/wiki/Perfect_clear)
- [Perfect Clear Opener（英文）](https://harddrop.com/wiki/Perfect_Clear_Opener)
:::

## 俄羅斯方塊的攻擊方式

### Tetris vs. Tetris 的時候

消除的瞬間就會丟到對手的場地上方！對手只要把手上的方塊放下，就會從底部立即增長垃圾出來！但是如果自己的場地頭上有垃圾，攻擊會先消除自己頭上的垃圾量。

### Tetris vs. Puyo 的時候

消除之後會先累積到自己的攻擊集氣條上（集氣條在自己的場地旁），然後放下一個方塊且沒有再消行的話，才會丟到對方的場地上方！對手只要把手上的氣泡放下，就會從上面掉下相對應的干擾氣泡垃圾量。

但是如果自己的場地頭上有垃圾，會先消除自己頭上的垃圾量，剩下的才會丟到對手的場地上喔！

## 結論

俄羅斯方塊講求的就是手速與效率，試試看快速的消除大量行數，給予對方致命的垃圾量！

::: tip
覺得俄羅斯方塊適合你嗎？如果不適合，可以改看看[魔法氣泡的玩法](/beginner/puyo-attack.html)！
:::